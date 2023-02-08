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
		earthquakes = datas.slice(everypagehas * page - everypagehas, everypagehas * page);
	}

	onMount(async () => {
		await getDatas(today, tomorrow).then(() => {
			totalpages = Math.ceil(datas.length / everypagehas);
			setEarthquakes();
		});
		if (window.location.hash) {
			setTimeout(() => {
				page = parseInt(window.location.hash.replace("#", ""));
				setEarthquakes();
				loaded = true;
			}, 500);
		} else {
			loaded = true;
		}
	});
</script>

<div id="earthquakes">
	<div style="text-align: center;">
		<react:Text h1 my={0}>Son Depremler</react:Text>
		<react:Text small type="secondary"> Bugünün depremleri </react:Text>
	</div>

	{#if !loaded}
		<div style="margin-top: 0;">
			<div class="skeleton-holder">
				{#each Array(20) as _}
					<div class="skeleton-load" style="height: 295.8px; width: clamp(300px, 100%, 600px)" />
				{/each}
			</div>
		</div>
	{:else}
		{#each earthquakes as earthquake}
			<Earthquake {...earthquake} />
		{/each}
		<div>
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
		</div>
	{/if}
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

	.skeleton-holder {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
		width: 100%;
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

	#earthquakes :global(.card) {
		cursor: pointer;
		animation: fadein 0.2s ease-in-out;
	}

	#earthquakes :global(.card:hover) {
		box-shadow: 0 0 0 2px #fff;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
