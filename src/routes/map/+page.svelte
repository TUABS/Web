<script>
    import {
        LeafletMap,
        TileLayer,
        Tooltip,
        Popup,
        Marker,
        Circle,
    } from "svelte-leafletjs";
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import { getDatas, datas } from "$lib/earthquake.js";
    import { today, yesterday, tomorrow, ago } from "$lib/date.js";

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    // center will be Turkey and user will can't move map out of Turkey
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: "© OpenStreetMap contributors, © AFAD",
    };
    const mapOptions = {
        center: [39, 35],
        zoom: 6,
    };
    let position;
    let loaded = false;
    onMount(async () => {
        await getDatas(today, tomorrow);
        loaded = true;
        console.log(datas);
    });
</script>

<div id="map">
    <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        {#if loaded}
            {#each datas as data}
                {#if ago(
                    `${data.date.slice(0, 11)}${
                        parseInt(data.date.slice(11, 13)) + 3
                    }${data.date.slice(13, 19)}`
                ).includes("1 saat önce") || ago(
                    `${data.date.slice(0, 11)}${
                        parseInt(data.date.slice(11, 13)) + 3
                    }${data.date.slice(13, 19)}`
                ).includes("dakika") || ago(
                    `${data.date.slice(0, 11)}${
                        parseInt(data.date.slice(11, 13)) + 3
                    }${data.date.slice(13, 19)}`
                ).includes("saniye")}

                    <Circle
                        latLng={[data.latitude, data.longitude]}
                        radius={data.magnitude * 5000}
                        color="red">
                        <Tooltip><span style="color: red;">YENİ!</span> - {data.location} - {ago(`${data.date.slice(0, 11)}${parseInt(data.date.slice(11, 13)) + 3}${data.date.slice(13, 19)}`)}</Tooltip>
                        <Popup>
                            <h3><span style="color: red">YENİ!</span>{data.location}</h3>
                            <p>Enlem: {data.latitude}</p>
                            <p>Boylam: {data.longitude}</p>
                            <p>Derinlik: {data.depth}</p>
                            <p>Şiddet: {data.magnitude}</p>
                            <p>Tarih: {data.date.split("T")[0]}</p>
                            <p>Saat: {data.date.split("T")[1].split(".")[0]}</p>
                            {ago(`${data.date.slice(0, 11)}${parseInt(data.date.slice(11, 13)) + 3}${data.date.slice(13, 19)}`)}
                        </Popup>
                    </Circle>
                    

                {:else}
                    <Marker latLng={[data.latitude, data.longitude]}>
                        <Tooltip>{data.location} - {data.magnitude}</Tooltip>
                        <Popup>
                            <h3>{data.location}</h3>
                            <p>Enlem: {data.latitude}</p>
                            <p>Boylam: {data.longitude}</p>
                            <p>Derinlik: {data.depth}</p>
                            <p>Şiddet: {data.magnitude}</p>
                            <p>Tarih: {data.date.split("T")[0]}</p>
                            <p>Saat: {data.date.split("T")[1].split(".")[0]}</p>
                            {ago(`${data.date.slice(0, 11)}${parseInt(data.date.slice(11, 13)) + 3}${data.date.slice(13, 19)}`)}
                        </Popup>
                    </Marker>
                {/if}
            {/each}
        {/if}
    </LeafletMap>
</div>

<style>
    #map {
        position: relative;
        width: 75%;
        height: 75vh;
        margin-top: 128px !important;
        margin: 0 auto;
    }
</style>
