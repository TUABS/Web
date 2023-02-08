<script>
    import { Pagination, Spacer, Text } from "@geist-ui/core";
    import Earthquake from "$lib/Earthquake.svelte";
    import { getDatas, datas } from "$lib/earthquake.js";
    import { today, yesterday, tomorrow } from "$lib/date.js";
    import { onMount } from "svelte";
    let earthquakes = [];
    let page = 1;
    let loaded = false;
    let totalpages = 0;
    const everypagehas = 20;
    function setEarthquakes() {
        earthquakes = datas.slice(
            everypagehas * page - everypagehas,
            everypagehas * page
        );
    }
    onMount(async () => {
        await getDatas(today, tomorrow).then(() => {
            totalpages = Math.ceil(datas.length / everypagehas);
            console.log(totalpages);
            setEarthquakes();
        });
        if (window.location.hash) {
            setTimeout(() => {
                page = parseInt(window.location.hash.replace("#", ""));
                console.log(page);
                setEarthquakes();
                loaded = true;
            }, 500);
        } else {
            loaded = true;
        }
    });
</script>

<div id="earthquakes">
    <div>
        <react:Text h1 my={0}>Son Depremler</react:Text>
        <react:Text small type="secondary">
            Bugünün depremleri
        </react:Text>
    </div>
    {#each earthquakes as earthquake}
        <Earthquake {...earthquake} />
    {/each}
    <div>
        {#if loaded}
            {#key page}
                <react:Pagination
                    onChange={(e) => {
                        window.location.hash = e;
                        page = e;
                        setEarthquakes();
                    }}
                    count={totalpages}
                    initialPage={page}
                />
            {/key}
        {/if}
    </div>
</div>

<style>
    #earthquakes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        width: 75%;
        margin: 0 auto;
    }
    #earthquakes > div {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 64px;
        flex-direction: column;
    }
</style>
