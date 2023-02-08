<script>
    import { getData, data } from "$lib/earthquake.js";
    import { onMount } from "svelte";
    // get the event id from the URL
    import { page } from '$app/stores';
    let earthquake = {};
    onMount(async () => {
        await getData($page.params.eventid).then(() => {
            earthquake = data[0];
        });
    });
</script>

{#key earthquake}
<h1>{earthquake.country}</h1>
{/key}
