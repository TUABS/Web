<script>
    import { Card, Text, Grid, Divider, Link, Spacer } from "@geist-ui/core";
    import { ago } from "$lib/date.js";
    import { MapPin, AlertTriangle } from "@geist-ui/icons";
    export let isEventUpdate = false;
    export let country;
    export let date;
    export let depth;
    export let district;
    export let eventID;
    export let latitude;
    export let longitude;
    export let magnitude;
    export let location;
    export let neighborhood;
    export let province;
    export let rms;
    export let type = "ML";

    let typeColor;
    if (magnitude < 3) {
        typeColor = "default";
    } else if (magnitude < 4) {
        typeColor = "success";
    } else if (magnitude < 7) {
        typeColor = "warning";
    } else {
        typeColor = "error";
    }
</script>


    <react:Card
        width="clamp(300px, 100%, 600px)"
        type={typeColor}
        onClick={() => (window.location.href = `/earthquake/${eventID}`)}
    >
        <react:Card.Content>
            {#if magnitude < 5}
                Hafif
            {:else if magnitude < 6}
                Orta
            {:else if magnitude < 7}
                Şiddetli
            {:else}
                Krtik
            {/if}

            <react:Text h1 my={0}>
                {magnitude}
                {type}
                {#if magnitude > 5}
                    <react:AlertTriangle size={32} />
                {/if}
            </react:Text>

            <react:Text small>Büyüklüğünde deprem</react:Text>

            <react:Text
                ><react:MapPin size={12} />
                <react:Link
                    href="https://google.com/maps/search/{location}"
                    icon>Lokasyon: {location}</react:Link
                >
            </react:Text>

        </react:Card.Content>
        <react:Card.Footer>
            <react:Text small
            >{ago(
                `${date.slice(0, 11)}${
                    parseInt(date.slice(11, 13)) + 3
                }${date.slice(13, 19)}`
            )}</react:Text
        >
        <react:Text small>{date.slice("T", 10)}</react:Text>
        <react:Text small
            >Saat {parseInt(date.slice(11, 13)) + 3}{date.slice(
                13,
                19
            )}</react:Text
        >
    </react:Card.Footer>
    </react:Card>

