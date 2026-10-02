import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			'@': resolve(__dirname, 'src')
		}
	}
};

export default config;