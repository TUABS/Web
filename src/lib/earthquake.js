

export let datas = [];
export let data = [];


export async function getDatas(start, end) {
  const API_URL = `https://api.tuabs.vercel.app/api?&start=${start}&end=${end}&orderby=timedesc`

  console.log(API_URL);
    await fetch(API_URL)
      .then((res) => res.json())
      .then((fdata) => {
        datas = fdata;
      })
}
export async function getData(eventid) {
  const API_URL = `https://api.tuabs.vercel.app/api?eventid=${eventid}`
  console.log(API_URL);
    await fetch(API_URL)
      .then((res) => res.json())
      .then((fdata) => {
        data = fdata;
      })
}