import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.argv.includes('dev');

export default {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: {
      base: dev ? '' : '/YOUR-REPO-NAME'   // not needed if repo is username.github.io
    }
  }
};