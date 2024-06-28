/**
 * A wrapper of `window.getComputedStyle()`,
 *  that also invites minification capabilities (muliply calls can be forward to here, and it's pure).
 * */
export const calcComputedStyle = (element: HTMLElement): CSSStyleDeclaration =>
  /*@__PURE__*/ window.getComputedStyle(element);
