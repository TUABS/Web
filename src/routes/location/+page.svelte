<script>
    import Geolocation from "svelte-geolocation";
    import { LeafletMap, TileLayer, Tooltip, Popup, Marker } from 'svelte-leafletjs?client';
    import { browser } from '$app/environment'
    import 'leaflet/dist/leaflet.css?client';

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: "© OpenStreetMap contributors",
    };
    let success = false;
    let position;
    

  </script>
  
  <Geolocation getPosition bind:position bind:success />
  <div id="map">

    
      {#if success}
    {#if browser}
      <LeafletMap options={{center: [position.coords.latitude, position.coords.longitude], zoom: 13}}>
      <TileLayer url={tileUrl} options={tileLayerOptions}/>
     
       <Marker latLng={[position.coords.latitude, position.coords.longitude]}>
        <Tooltip>Koordinatları Görmek İçin Tıklayın</Tooltip>
        <Popup>
          <h3>Buradasınız</h3>
          <p>Enlem: {position.coords.latitude}</p>
          <p>Boylam: {position.coords.longitude}</p>
        </Popup>
      </Marker>
     
  </LeafletMap>
    {/if}
    
    {:else}
    <pre>Konumunuz Alınıyor...</pre>
    {/if}
    
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