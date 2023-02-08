export let data = [];

export async function getData() {
	await fetch("https://api.yakinimibul.net/api")
		.then((res) => res.json())
		.then((fdata) => {
			data = fdata;
		});
}
