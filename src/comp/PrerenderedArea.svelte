<script lang="ts">
	import { browser, dev } from '$app/environment';

	import type { Action } from 'svelte/action';

	/** For dev mode, to work with hot reload, you want to see if the content has been changed. */
	export let content: string | undefined = undefined;

	/** ID of the area, so there will be no collision. */
	export let id: string;

	const getIdFull = (id: string) => `prerendered_area_${id}`;

	function getArea() {
		if (!browser) {
			return null;
		}
		// otherwise

		const element = document.getElementById(getIdFull(id));

		if (element == null) {
			return null;
		} else if (!dev || (element.hasAttribute('data-content') && element.getAttribute('data-content') === content)) {
			return element;
		}
	}

	/** Capture area on initialization (only in browser), before mounting! */
	const area = getArea();

	var duplicatedChildren: Node[] | null = null;

	if (area !== null) {
		const children = area.childNodes;
		duplicatedChildren = Array.from(children).map((child) => child.cloneNode(true));
	}

	const areaAction: Action = (node: HTMLElement) => {
		// After mounting, we need to fill the new area with the prerendered one clones
		if (area !== null) {
			duplicatedChildren.forEach((child) => {
				node.appendChild(child);
			});
		}
	};
</script>

<div role="presentation" id={getIdFull(id)} data-content={dev ? content : undefined} use:areaAction>
	{#if area === null}
		<slot />
	{/if}
</div>
