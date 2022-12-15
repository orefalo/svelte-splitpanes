<script lang="ts">
	import { page } from '$app/stores';

	import theme from 'svelte-highlight/styles/night-owl';
	import Contents, { getTitle, type Section } from './Contents.svelte';

	import RTLToggle from './RTLToggle.svelte';

	let isRTL = false;

	const sections: Section[] = [
		{
			title: 'Getting started',
			pages: [{ title: 'Introduction', path: '/' }]
		},
		{
			title: 'General Examples',
			pages: [
				{ title: 'Min-Max', path: '/examples/min-max' },
				{ title: 'Default Size', path: '/examples/default-size' },
				{ title: 'Lock Layout', path: '/examples/lock-layout' },
				{ title: 'Push Other Panes', path: '/examples/push-other-panes' },
				{ title: 'Add Remove Splitter', path: '/examples/add-remove-splitter' },
				{ title: 'ChangeOrientation', path: '/examples/change-orientation' },
				{ title: 'Prog Resize', path: '/examples/prog-resize' },
				{ title: 'Toggle Panes', path: '/examples/toggle-panes' },
				{ title: 'Listen To Events', path: '/examples/listen-to-events' }
			]
		},
		{
			title: 'Snap',
			pages: [
				{ title: 'Simple Snap', path: '/examples/snap/simple' },
				{ title: 'Middle Snap', path: '/examples/snap/middle' },
				{ title: 'Min-Max Snap', path: '/examples/snap/min-max' }
			]
		},
		{
			title: 'Styling',
			pages: [
				{ title: 'Style Splitters', path: '/examples/styling/splitters' },
				{ title: 'Style Splitters Modern', path: '/examples/styling/splitters-modern' }
			]
		}
	];

	$: currentPageTitle = getTitle(sections, $page.url);
</script>

<svelte:head>
	<title>Svelte-Splitpanes{currentPageTitle ? ` - ${currentPageTitle}` : ''}</title>
	<meta name="description" content="A Fantastic pane splitter for Svelte" />
	{@html theme}
</svelte:head>

<div class="page-container">
	<div role="presentation" class="toc-container-space" />

	<main class:rtl-containers={isRTL}>
		<slot />
	</main>

	<div class="toc-container">
		<div role="presentation" class="toc-contents-wrap">
			<h1>Svelte-Splitpane</h1>
			<Contents contents={sections} />
		</div>

		<RTLToggle bind:isRTL />
	</div>
</div>

<style>
	:global(body) {
		font-family: Helvetica, Arial, sans-serif;
		color: rgba(116, 103, 103);
		margin: 0;
	}

	:global(h1 h2) {
		color: #000;
	}

	:global(p) {
		color: #999;
		font-size: medium;
		padding-top: 1em;
		padding-bottom: 1em;
		font-style: italic;
	}

	:global(.splitpanes__pane) {
		justify-content: center;
		align-items: center;
		color: rgba(106, 106, 106, 0.6);
		display: flex;
		position: relative;
		font-size: 3em;
	}

	:global(em.specs) {
		font-size: 0.2em;
		line-height: 1;
		position: absolute;
		color: #bbb;
		bottom: 0.5em;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 0.5em;
	}

	/* additional styling to the code area */
	:global(code.hljs) {
		tab-size: 4;
	}

	.page-container {
		display: flex;
		flex-flow: column nowrap;
		font-size: 14px;
		height: 100vh;
	}

	main {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 1150px;
		margin-left: auto;
		margin-right: auto;
		padding: 10px;
	}

	.rtl-containers :global(.splitpanes) {
		direction: rtl;
	}

	.toc-container-space {
		display: hidden;
	}

	.toc-container {
		display: flex;
		flex-flow: column-reverse nowrap;
		background: rgb(247, 250, 253);
		color: rgb(65, 65, 72);
		padding: 10px;
	}

	@media (min-width: 832px) {
		.page-container {
			flex-direction: row;
		}

		.toc-container-space {
			display: visible;
			width: 300px;
		}

		.toc-container {
			flex-direction: column;
			position: fixed;
			width: 300px;
			height: 100vh;
		}

		.toc-contents-wrap {
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
</style>
