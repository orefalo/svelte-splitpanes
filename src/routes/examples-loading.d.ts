declare module '*.svelte?example' {
	export const id: string;
	export const code: string;
	export const component: import('svelte').SvelteComponent;

	const example: import('../comp/example.js').Example;

	export default example;
}
