<script lang="ts">
	import { base } from '$app/paths';
</script>

<img alt="Minified Size" src="{base}/minified-size-badge.svg" />

<p>
	The badge above tells the amortized size of the library after minification when using all the library features.
	<br />
	It is computed in the build time of the demo website, specifying how much size it really takes after the Rollup build process,
	for the client code and the server(SSR) code.
</p>
