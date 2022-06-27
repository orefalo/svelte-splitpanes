<script lang="ts">
	export let value = '';
	export let minRows = 1;
	export let maxRows = 40;

	const splitLines = (str: string) => str.split(/\r?\n/);

	function stripLines(value: string, max: number) {
		const array = splitLines(value);
		array.length = max;
		const text = array.reduce(function (previousValue: string, currentValue: string) {
			return previousValue + '\n' + currentValue;
		});
		return text;
	}

	$: {
		value = stripLines(value, maxRows);
	}

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

<div class="container">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}">{value + '\n'}</pre>
	<textarea readonly bind:value style="outline: none;" />
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		border: 1px solid #eee;
		line-height: 1.2;
		overflow: hidden;
	}

	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>
