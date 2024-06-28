export interface Example {
  code: string;
  highlightedHTML: string;
}

export interface SvelteExample extends Example {
  component: import('svelte').SvelteComponent;
}

export interface CSSExample extends Example {
  css: string;
  cssHighlightedHTML: string;
}
