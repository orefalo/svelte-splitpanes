<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Ripple from './Ripple.svelte';

	export let rippleBlur = 0,
		speed = 900,
		color = '#fff',
		fontSize = '.875rem',
		bgColor = '74, 64, 212',
		bgHover = bgColor,
		bgActive = bgColor,
		rippleColor = '#838de7',
		round = '0.2rem',
		height = 36,
		width = 140,
		sizeIn = 20,
		opacityIn = 0.5,
		shadow = 5,
		shadowHover = 5,
		shadowActive = 2,
		disabled = false;

	let shadows = {
		none: 'none',
		1: '0 0 0 1px rgba(0, 0, 0, 0.05)',
		2: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		3: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		4: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		5: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		6: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		7: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
	};

	function handleRipple() {
		const ripples = writable([]);

		return {
			subscribe: ripples.subscribe,

			add: (item: { x: number; y: number; size: number }) => {
				ripples.update((items) => {
					return [...items, item];
				});
			},
			clear: () => {
				ripples.update(() => {
					return [];
				});
			}
		};
	}

	export const ripples = handleRipple();

	let rect: DOMRect,
		rippleBtn: HTMLButtonElement,
		w: number,
		h: number,
		offsetX: number,
		offsetY: number,
		deltaX: number,
		deltaY: number,
		locationY: number,
		locationX: number,
		scale_ratio: number,
		timer: NodeJS.Timer;

	let coords = { x: 50, y: 50 };

	$: (offsetX = Math.abs(w / 2 - coords.x)),
		(offsetY = Math.abs(h / 2 - coords.y)),
		(deltaX = w / 2 + offsetX),
		(deltaY = h / 2 + offsetY),
		(scale_ratio = Math.sqrt(Math.pow(deltaX, 2.2) + Math.pow(deltaY, 2.2)));

	const debounce = () => {
		clearTimeout(timer);
		timer = setTimeout(
			() => {
				ripples.clear();
			},
			speed + speed * 2
		);
	};

	let touch: boolean;

	function handleClick(e: MouseEvent | Touch, type: string) {
		if (type == 'touch') {
			touch = true;
			ripples.add({ x: e.pageX - locationX, y: e.pageY - locationY, size: scale_ratio });
		} else {
			if (!touch) {
				ripples.add({ x: e.clientX - locationX, y: e.clientY - locationY, size: scale_ratio });
			}
			touch = false;
		}
		debounce();
	}

	onMount(() => {
		w = rippleBtn.offsetWidth;
		h = rippleBtn.offsetHeight;
		rect = rippleBtn.getBoundingClientRect();
		locationY = rect.top;
		locationX = rect.left;
	});

	function onTouchStart(e: TouchEvent) {
		handleClick(e.touches[0], 'touch');
	}

	function onMouseDown(e: MouseEvent) {
		handleClick(e, 'click');
	}
</script>

<button
	{disabled}
	on:click
	style="--color: {color};--font-size: {fontSize};--bg-color: {bgColor};--bg-hover: {bgHover};--bg-active: {bgActive};--radius: {round};--ripple: {rippleColor};--height: {height}px;--width: {width}px;--shadow: {shadows[
		shadow
	]};--shadow-h: {shadows[shadowHover]};--shadow-a: {shadows[shadowActive]}"
	bind:this={rippleBtn}
	on:touchstart={onTouchStart}
	on:mousedown={onMouseDown}
>
	<span>
		<slot />
	</span>
	<svg>
		{#each $ripples as ripple}
			<Ripple x={ripple.x} y={ripple.y} size={ripple.size} {speed} {sizeIn} {opacityIn} {rippleBlur} />
		{/each}
	</svg>
</button>

<style>
	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		font-weight: 500;
		color: var(--color);
		font-size: var(--font-size);
		height: var(--height);
		width: var(--width);
		max-width: 100%;
		margin: 0;
		padding: 5px;
		position: relative;
		border-radius: var(--radius);
		cursor: pointer;
		-webkit-transition: 200ms all ease-out;
		transition: 200ms all ease-out;
		background-color: rgba(var(--bg-color), 1);
		overflow: hidden;
		font-family: Roboto, sans-serif;
		box-shadow: var(--shadow);
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	button:hover,
	button:focus {
		outline: none;
		background-color: rgba(var(--bg-hover), 0.8);
		box-shadow: var(--shadow-h);
	}
	button:active {
		outline: none;
		background-color: rgba(var(--bg-active), 0.7);
		box-shadow: var(--shadow-a);
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;

		/* Reset these properties, since the button might be active/hovered */
		outline: inherit;
		background-color: rgba(var(--bg-color), 1);
		box-shadow: var(--shadow);
	}

	span {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		z-index: 1;
	}
	svg {
		height: 100%;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
	}
</style>
