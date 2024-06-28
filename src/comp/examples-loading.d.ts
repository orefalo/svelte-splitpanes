declare module '*.svelte?example' {
  export const code: string;
  export const highlightedHTML: string;
  export const component: import('svelte').SvelteComponent;

  const example: import('./example.js').SvelteExample;

  export default example;
}

declare module '*.css?example' {
  export const code: string;
  export const highlightedHTML: string;
  export const css: string;
  export const cssHighlightedHTML: string;

  const example: import('./example.js').CSSExample;

  export default example;
}

declare module '*.scss?example' {
  export const code: string;
  export const highlightedHTML: string;
  export const css: string;
  export const cssHighlightedHTML: string;

  const example: import('./example.js').CSSExample;

  export default example;
}

declare module '*.sass?example' {
  export const code: string;
  export const highlightedHTML: string;
  export const css: string;
  export const cssHighlightedHTML: string;

  const example: import('./example.js').CSSExample;

  export default example;
}

declare module '*?example' {
  export const code: string;
  export const highlightedHTML: string;

  const example: import('./example.js').Example;

  export default example;
}
