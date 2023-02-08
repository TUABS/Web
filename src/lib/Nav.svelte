<script>
    import { createElement } from "react";
    import { Tabs, Text, Select } from "@geist-ui/core";
    export let value = "1";
    import { page } from "$app/stores";

    let setValue = (e) => {
        value = e;
        if (e == "1") {
            window.location.href = "/";
        } else if (e == "2") {
            window.location.href = "/location";
        } else if (e == "3") {
            window.location.href = "/help";
        } else if (e == "4") {
            window.location.href = "/settings";
        }
    };

</script>

<nav>
    <div on:click={() => window.location.href = "/"} style="cursor: pointer;">
            <img
            style="width: 128px; "
            src="/logo.svg"
            alt=""
        />
    </div>



    {#if window.innerWidth > 600}
    <react:Tabs initialValue={value} onChange={setValue}>
        <react:Tabs.Item label="Depremler" value="1" />
        <react:Tabs.Item label="Acil Konum" value="2" />
        <react:Tabs.Item label="Acil Yardım" value="3" />
        <react:Tabs.Item label="Ayarlar" value="4" />
    </react:Tabs>
    {:else if window.innerWidth > 440}
    <react:Tabs initialValue={value} onChange={setValue}>
        <react:Tabs.Item label="Depremler" value="1" />
        <react:Tabs.Item label="Konum" value="2" />
        <react:Tabs.Item label="Yardım" value="3" />
        <react:Tabs.Item label="Ayarlar" value="4" />
    </react:Tabs>
    {:else}
    <react:Select
        initialValue="1"
        onChange={setValue}
        style={{ minWidth: "100px" }}
    >
    <react:Select.Option value="1">Depremler</react:Select.Option>
    <react:Select.Option value="2">Konum</react:Select.Option>
    <react:Select.Option value="3">Yardım</react:Select.Option>
    <react:Select.Option value="4">Ayarlar</react:Select.Option>
    </react:Select>

    {/if}


   
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: 64px;
        backdrop-filter: saturate(180%) blur(5px);
        background-color: rgba(0, 0, 0, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 999;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 4px 0;
    }
    nav div {
        display: flex;
        align-items: center;
    }
    :global(.jsx-633591784) {
        padding-top: 0 !important;
    }
</style>
