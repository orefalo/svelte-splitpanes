<script lang="ts">
	export let pressed: boolean;
	export let label: string;
</script>

<button aria-pressed={pressed ? 'true' : 'false'} on:click={() => (pressed = !pressed)}>
	<span style="display: none;">{label}</span>
</button>

<style>
	button {
		position: relative;
		height: 1em;
		width: calc(100% - 0.6em);
		max-width: calc(2em);
		border-radius: 0.5em;
		-webkit-appearance: none;
		appearance: none;
		outline-offset: 2px;
		border: transparent;
	}

	button::before {
		content: '';
		position: absolute;
		display: block;
		height: 100%;
		width: 100%;
		padding: 2px;
		border-radius: 1em;
		top: 0;
		left: 0;
		background: rgb(103, 103, 121);
		box-sizing: border-box;
	}

	button[aria-pressed='true']::before {
		background: rgb(103, 103, 121);
	}

	button::after {
		content: '';
		position: absolute;
		display: block;
		width: calc(1em - 4px);
		height: calc(1em - 4px);
		aspect-ratio: 1;
		top: 2px;
		left: 2px;
		border-radius: 50%;
		background: white;
		box-shadow: 0 0px 1px rgba(0, 0, 0, 0.4), 0 4px 2px rgba(0, 0, 0, 0.1);
		transition: background 0.2s ease-out, left 0.2s ease-out;
	}

	button[aria-pressed='true']::after {
		background: white;
		left: calc(100% - 1em + 2px);
	}
</style>
