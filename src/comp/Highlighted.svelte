<script lang="ts">
	// Based on https://github.com/metonym/svelte-highlight/blob/master/src/LangTag.svelte

	export let lang: string;
	export let highlighted: string;
</script>

<pre data-language={lang}><code class="hljs">{@html highlighted}</code></pre>
