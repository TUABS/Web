<script>
    import { getData, data } from "$lib/earthquake.js";
    import { ago } from "$lib/date.js";
    import { onMount } from "svelte";
    // get the event id from the URL
    import { page } from '$app/stores';
    import { Card, Text, Spacer, Button, Link } from '@geist-ui/core';
    import { AlertTriangle, MapPin } from "@geist-ui/icons";
    import {
        LeafletMap,
        TileLayer,
        Tooltip,
        Popup,
        Marker,
        Circle,
    } from "svelte-leafletjs";
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    // center will be Turkey and user will can't move map out of Turkey
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: "© OpenStreetMap contributors, © AFAD",
    };

    import "leaflet/dist/leaflet.css";
    let earthquake = {
        country: "",
        date: "",
        depth: "",
        district: "",
        eventID: "",
        latitude: "",
        longitude: "",
        magnitude: "",
        location: "",
        neighborhood: "",
        province: "",
        rms: "",
        type: "ML",
    };
    
    onMount(async () => {
        await getData($page.params.eventid).then(() => {
            earthquake = data[0];
            if (earthquake.magnitude < 3) {
        typeColor = "default";
    } else if (earthquake.magnitude < 4) {
        typeColor = "success";
    } else if (earthquake.magnitude < 7) {
        typeColor = "warning";
    } else {
        typeColor = "error";
    }
            loaded = true;
        });
    });
    let typeColor;

    let loaded = false;
    let position;
</script>

{#if loaded}
<react:Card type={typeColor} width="clamp(300px, 100%, 1200px)" style={{ margin: 'auto', marginTop: '128px' }}>

<react:Card.Content>
 <div id="map" style="width: 100%; height: 50vh; margin-bottom: 32px"> 
    <LeafletMap options={{center: [earthquake.latitude, earthquake.longitude], zoom: 6}}>
        <TileLayer url={tileUrl} options={tileLayerOptions}/>
         <Circle latLng={[earthquake.latitude, earthquake.longitude]} radius={earthquake.magnitude * 5000} color="red" />
         <Marker latLng={[earthquake.latitude, earthquake.longitude]} />
</LeafletMap>
 </div>
        {#if earthquake.magnitude < 5}
            Hafif
        {:else if earthquake.magnitude < 6}
            Orta
        {:else if earthquake.magnitude < 7}
            Şiddetli
        {:else}
            Krtik
        {/if}

        <react:Text h1 my={0}>
            {earthquake.magnitude}
            {earthquake.type}
            {#if earthquake.magnitude > 5}
                <react:AlertTriangle size={32} />
            {/if}
        </react:Text>

        <react:Text small>Büyüklüğünde deprem</react:Text>

        <react:Text
            ><react:MapPin size={12} />
            <react:Link
                href="https://google.com/maps/search/{location}"
                icon>Lokasyon: {earthquake.location}</react:Link
            >
        </react:Text>
        <react:Text small>
            Enlem: {earthquake.latitude} Boylam: {earthquake.longitude}
        </react:Text>
        <react:Text>Derinlik: {earthquake.depth} km</react:Text>
        <react:Text>Yer: {earthquake.district}</react:Text>
        <react:Text>İlçe: {earthquake.neighborhood}</react:Text>
        <react:Text>İl: {earthquake.province}</react:Text>
        <react:Text>Ülke: {earthquake.country}</react:Text>
        <react:Text>RMS: {earthquake.rms}</react:Text>
        <react:Text>Tip: {earthquake.type}</react:Text>
        <react:Text>Event ID: {earthquake.eventID}</react:Text>


    </react:Card.Content>
    <react:Card.Footer>
        <react:Text small
        >{ago(
            `${earthquake.date.slice(0, 11)}${
                parseInt(earthquake.date.slice(11, 13)) + 3
            }${earthquake.date.slice(13, 19)}`
        )}</react:Text
    >
    <react:Text small>{earthquake.date.slice("T", 10)}</react:Text>
    <react:Text small
        >Saat {parseInt(earthquake.date.slice(11, 13)) + 3}{earthquake.date.slice(
            13,
            19
        )}</react:Text
    >
</react:Card.Footer>
</react:Card>
{:else}
    <react:Text h1>Yükleniyor...</react:Text>
{/if}
