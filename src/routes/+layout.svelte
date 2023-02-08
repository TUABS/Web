<script>
   import { GeistProvider, CssBaseline, Spinner } from "@geist-ui/core";
   import { onMount } from "svelte";
   import Nav from "$lib/Nav.svelte";
   import Footer from "$lib/Footer.svelte";
   import "$lib/global.css";
   import { page } from "$app/stores";
   let loaded = false;
   let value = "1";

   if ($page.url.pathname == "/") {
      value = "1";
   } else if ($page.url.pathname == "/location") {
      value = "2";
   } else if ($page.url.pathname == "/map") {
      value = "3";
   } else if ($page.url.pathname == "/settings") {
      value = "4";
   }

   onMount(() => {
         setTimeout(() => {
            loaded = true;
         }, 500);
   });
</script>

<react:GeistProvider themeType="dark">
   <react:CssBaseline />


      {#if !loaded}
      <div
         style="display: flex; justify-content: center; align-items: center; height: 100vh;"
      >
         <react:Spinner />
      </div>
   {:else}
         <Nav {value}/>
      <div id="app">
         <slot />
      </div>
      <Footer />

   {/if}

</react:GeistProvider>

<style>
   #app {
      margin-top: 72px;
      margin-bottom: 256px;
   }
</style>
