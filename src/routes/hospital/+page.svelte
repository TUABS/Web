<script>
	import { Text } from "@geist-ui/core";
	import Grid from "gridjs-svelte";
	import { getData, data } from "$lib/hospitaldata.js";
	import { onMount } from "svelte";

	let columns = [
		{
			name: "Ad Soyad",
			id: "name",
		},
		{
			name: "Yaş",
			id: "age",
		},
		{
			name: "Geldiği İl",
			id: "region",
		},
		{
			name: "Sevk Edildiği Hastane",
			id: "hospital",
		},
	];

	let paginationConfig = {
		limit: 20,
		summary: false,
		buttonsCount: 5,
	};

	let tableData = [];

	onMount(async () => {
		await getData().then(() => {
			tableData = data.rows;
			console.log(tableData);
		});

		let searchInput = document.querySelector(".gridjs-search-input");
		searchInput.placeholder = "Ara...";
	});
</script>

<div id="hospital-container">
	<div class="hospital-text">
		<react:Text h1 my={0}>Hastaneler Veritabanı</react:Text>
		<react:Text small type="secondary"
			>Birçok ilimizde meydana gelen deprem felaketinde yaralanan vatandaşlarımızın hangi hastanede olduklarını
			bulabilmeleri için internette paylaşılan hastane verilerinden derlenmiştir.</react:Text
		>
		<react:Text h4 my={1}>Toplam Veri: {tableData.length} kişi</react:Text>
	</div>

	<Grid data={tableData} {columns} search={true} sort={true} pagination={paginationConfig} />
</div>

<style>
	@import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
	@import "/gridjs.theme.css?server";

	#hospital-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 75%;
		margin: 0 auto;
	}

	.hospital-text {
		text-align: center;
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
</style>
