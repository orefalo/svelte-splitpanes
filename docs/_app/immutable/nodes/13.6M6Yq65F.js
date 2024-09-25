import{S as d,i as S,s as w,P as c,Q as o,R as m,n as $,o as g,U as f,a as _,f as x,j as h,g as u,e as y,b as v,I as z,K as C}from"../chunks/external.DDdhX-Re.js";import{E as b}from"../chunks/ExampleArea.K2NVIvEM.js";import{S as k,P as j}from"../chunks/svelte-splitpanes.BpRs9cUI.js";const T=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function I(i){let s,p="Try shrinking my size, note how I snap below 10% size";return{c(){s=y("p"),s.textContent=p},l(n){s=v(n,"P",{"data-svelte-h":!0}),z(s)!=="svelte-1uahdnm"&&(s.textContent=p)},m(n,e){h(n,s,e)},p:C,d(n){n&&u(s)}}}function q(i){let s,p,n,e,l,t;return s=new j({}),n=new j({props:{snapSize:10,$$slots:{default:[I]},$$scope:{ctx:i}}}),l=new j({}),{c(){c(s.$$.fragment),p=_(),c(n.$$.fragment),e=_(),c(l.$$.fragment)},l(a){o(s.$$.fragment,a),p=x(a),o(n.$$.fragment,a),e=x(a),o(l.$$.fragment,a)},m(a,r){m(s,a,r),h(a,p,r),m(n,a,r),h(a,e,r),m(l,a,r),t=!0},p(a,r){const P={};r&1&&(P.$$scope={dirty:r,ctx:a}),n.$set(P)},i(a){t||($(s.$$.fragment,a),$(n.$$.fragment,a),$(l.$$.fragment,a),t=!0)},o(a){g(s.$$.fragment,a),g(n.$$.fragment,a),g(l.$$.fragment,a),t=!1},d(a){a&&(u(p),u(e)),f(s,a),f(n,a),f(l,a)}}}function M(i){let s,p;return s=new k({props:{style:"height: 400px",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){c(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,e){m(s,n,e),p=!0},p(n,[e]){const l={};e&1&&(l.$$scope={dirty:e,ctx:n}),s.$set(l)},i(n){p||($(s.$$.fragment,n),p=!0)},o(n){g(s.$$.fragment,n),p=!1},d(n){f(s,n)}}}class E extends d{constructor(s){super(),S(this,s,null,M,w,{})}}const H=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane />

  <Pane snapSize={10}>
    <p>Try shrinking my size, note how I snap below 10% size</p>
  </Pane>

  <Pane />
</Splitpanes>
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,A={code:H,highlightedHTML:O,component:E};function K(i){let s,p="Middle snap",n,e,l;return e=new b({props:{example:A}}),{c(){s=y("h2"),s.textContent=p,n=_(),c(e.$$.fragment)},l(t){s=v(t,"H2",{"data-svelte-h":!0}),z(s)!=="svelte-1wzni3v"&&(s.textContent=p),n=x(t),o(e.$$.fragment,t)},m(t,a){h(t,s,a),h(t,n,a),m(e,t,a),l=!0},p:C,i(t){l||($(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&(u(s),u(n)),f(e,t)}}}class B extends d{constructor(s){super(),S(this,s,null,K,w,{})}}export{B as component,U as universal};
