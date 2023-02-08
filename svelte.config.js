import adapter from '@sveltejs/adapter-auto';
import preprocessReact from "svelte-preprocess-react/preprocessReact";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	  preprocess: [preprocessReact()],
	  kit: {
		 adapter: adapter(),
	  }
};

export default config;
