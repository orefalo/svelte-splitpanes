<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import theme from 'svelte-highlight/styles/night-owl';

	import Contents, { type Section } from './Contents.svelte';
	import RTLToggle from './RTLToggle.svelte';
	import { pathIsCurrent } from './pathUtils';

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
				{ title: 'Add Remove Panes', path: '/examples/add-remove-panes' },
				{ title: 'Reordering Panes', path: '/examples/reordering-panes' },
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

	$: pages = sections.map((section) => section.pages).flat();
	$: pageIdx = pages.findIndex(({ path }) => pathIsCurrent(path, $page));
	$: curPage = pageIdx >= 0 ? pages[pageIdx] : undefined;
	$: prevPage = pageIdx >= 1 ? pages[pageIdx - 1] : undefined;
	$: nextPage = pageIdx >= 0 && pageIdx < pages.length - 1 ? pages[pageIdx + 1] : undefined;
</script>

<svelte:head>
	<title>Svelte-Splitpanes{curPage ? ` - ${curPage.title}` : ''}</title>
	<meta name="description" content="A Fantastic pane splitter for Svelte" />
	{@html theme}
</svelte:head>

<div class="page-container">
	<div role="presentation" class="toc-container-space" />

	<main class:rtl-containers={isRTL}>
		<slot />

		<div class="controls">
			<div>
				<span class:faded={!prevPage}>previous</span>
				{#if prevPage}
					<a data-sveltekit-preload-data href={base + prevPage.path}>{prevPage.title}</a>
				{/if}
			</div>

			<div>
				<span class:faded={!nextPage}>next</span>
				{#if nextPage}
					<a data-sveltekit-preload-data href={base + nextPage.path}>{nextPage.title}</a>
				{/if}
			</div>
		</div>
	</main>

	<div class="toc-container">
		<div role="presentation" class="toc-contents-wrap">
			<h1 class="toc-head"><img src="{base}/favicon.svg" alt="Icon" width="30" height="30" /> Svelte-Splitpane</h1>
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
		scrollbar-width: thin;
		scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
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
		display: table;
		font-size: 14px;
		width: 100%;
	}

	main {
		max-width: 1150px;
		margin-left: auto;
		margin-right: auto;
		padding: 10px;
		overflow-x: auto;
	}

	.controls {
		border-top: 1.6px solid rgb(232, 228, 253);
		padding: 12px 0 0 0;
		display: flex;
		justify-content: space-between;
		margin: 40px 0;
		gap: 15px;
	}

	.controls > :first-child {
		text-align: left;
	}

	.controls > :last-child {
		text-align: right;
	}

	.controls span {
		display: block;
		font-size: 14px;
		text-transform: uppercase;
		font-weight: 600;
		color: rgb(103, 103, 121);
		margin-bottom: 4px;
	}

	.controls span.faded {
		opacity: 0.4;
	}

	.controls a {
		text-decoration: none;
		font-size: 16px;
		color: rgb(255, 64, 0);
	}

	.controls a:not(:hover) {
		text-decoration: none;
	}

	.rtl-containers :global(.splitpanes) {
		direction: rtl;
	}

	.toc-container-space {
		display: none;
	}

	.toc-container {
		display: flex;
		flex-flow: column-reverse nowrap;
		background: rgb(247, 250, 253);
		color: rgb(65, 65, 72);
	}

	.toc-head {
		display: flex;
		flex-flow: row nowrap;
		gap: 8px;
		padding-left: 10px;
	}

	@media (min-width: 832px) {
		.page-container {
			display: flex;
			flex-flow: row nowrap;
		}

		.toc-container-space {
			display: block;
			min-width: 300px;
			width: 300px;
			height: 100vh;
			margin: auto 0;
		}

		main {
			flex-grow: 1;
		}

		.toc-container {
			flex-direction: column;
			position: fixed;
			left: 0;
			top: 0;
			width: 300px;
			height: 100vh;
		}

		.toc-contents-wrap {
			overflow-x: hidden;
			overflow-y: auto;
			scrollbar-width: thin;
			scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
			padding: 10px;
		}
	}
</style>
