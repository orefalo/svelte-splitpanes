/**
 * Tells if we're running on a browser client or on SSR.
 *
 * If `import.meta.env` and `import.meta.env.SSR` are defined (which are defined automatically in Vite),
 *  this constant would be resolved in build time during minification (assuming the user has enabled minification).
 */
export const browser: boolean =
	import.meta.env != null && import.meta.env.SSR != null ? !import.meta.env.SSR : typeof window !== 'undefined';
