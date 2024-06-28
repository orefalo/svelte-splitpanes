import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: undefined
    }),
    alias: {
      'svelte-splitpanes': path.resolve('.', 'src/lib'),
      $comp: path.resolve('./src/comp')
    },
    paths: {
      // Usually the base path will be the root (i.e. defaults by kit to the empty "" path since the env var is undefined),
      //  but on the official documentation build we set this environment
      //  variable to the base path where we're deploying to.
      base: process.env.BASE_PATH
    }
  }
};

export default config;
