export let datas = [];
export let data = [];
const isDev = false;

export async function getDatas(start, end) {
	let API_URL = "";
	if (isDev) {
		API_URL = `http://localhost:3000/earthquake?start=${start}&end=${end}`;
	} else {
		API_URL = `https://api.tuabs.vercel.app/earthquake?start=${start}&end=${end}`;
	}
	await fetch(API_URL)
		.then((res) => res.json())
		.then((fdata) => {
			datas = fdata;
		});
}

export async function getData(eventid) {
	let API_URL = "";
	if (isDev) {
		API_URL = `http://localhost:3000/earthquake?eventid=${eventid}`;
	} else {
		API_URL = `https://api.tuabs.vercel.app/earthquake?eventid=${eventid}`;
	}

	await fetch(API_URL)
		.then((res) => res.json())
		.then((fdata) => {
			data = fdata;
		});
}
