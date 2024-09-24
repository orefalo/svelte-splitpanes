import{S as w,i as z,s as C,P as g,Q as $,R as h,n as u,o as j,U as _,a as x,f as d,j as o,g as c,e as S,b as P,I as v,K as b}from"../chunks/external.BVU14SuU.js";import{E as k}from"../chunks/ExampleArea.hE5zviRz.js";import{S as T,P as y}from"../chunks/svelte-splitpanes.DbPk6hiF.js";const I=!0,B=Object.freeze(Object.defineProperty({__proto__:null,prerender:I},Symbol.toStringTag,{value:"Module"}));function q(i){let s,p="Try shrinking my size, note how I snap below 10% size";return{c(){s=S("p"),s.textContent=p},l(t){s=P(t,"P",{"data-svelte-h":!0}),v(s)!=="svelte-1uahdnm"&&(s.textContent=p)},m(t,e){o(t,s,e)},p:b,d(t){t&&c(s)}}}function E(i){let s,p,t,e;return s=new y({props:{snapSize:10,$$slots:{default:[q]},$$scope:{ctx:i}}}),t=new y({}),{c(){g(s.$$.fragment),p=x(),g(t.$$.fragment)},l(n){$(s.$$.fragment,n),p=d(n),$(t.$$.fragment,n)},m(n,l){h(s,n,l),o(n,p,l),h(t,n,l),e=!0},p(n,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:n}),s.$set(r)},i(n){e||(u(s.$$.fragment,n),u(t.$$.fragment,n),e=!0)},o(n){j(s.$$.fragment,n),j(t.$$.fragment,n),e=!1},d(n){n&&c(p),_(s,n),_(t,n)}}}function H(i){let s,p;return s=new T({props:{style:"height: 400px",$$slots:{default:[E]},$$scope:{ctx:i}}}),{c(){g(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,e){h(s,t,e),p=!0},p(t,[e]){const n={};e&1&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){p||(u(s.$$.fragment,t),p=!0)},o(t){j(s.$$.fragment,t),p=!1},d(t){_(s,t)}}}class M extends w{constructor(s){super(),z(this,s,null,H,C,{})}}const O=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane snapSize={10}>
    <p>Try shrinking my size, note how I snap below 10% size</p>
  </Pane>

  <Pane />
</Splitpanes>
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,A={code:O,highlightedHTML:U,component:M};function K(i){let s,p="Simple snap",t,e,n="Using snapSize on a pane makes it snap to his adjacent splitters and borders.",l,r,f;return r=new k({props:{example:A}}),{c(){s=S("h2"),s.textContent=p,t=x(),e=S("p"),e.textContent=n,l=x(),g(r.$$.fragment)},l(a){s=P(a,"H2",{"data-svelte-h":!0}),v(s)!=="svelte-3pa274"&&(s.textContent=p),t=d(a),e=P(a,"P",{"data-svelte-h":!0}),v(e)!=="svelte-lcr3fs"&&(e.textContent=n),l=d(a),$(r.$$.fragment,a)},m(a,m){o(a,s,m),o(a,t,m),o(a,e,m),o(a,l,m),h(r,a,m),f=!0},p:b,i(a){f||(u(r.$$.fragment,a),f=!0)},o(a){j(r.$$.fragment,a),f=!1},d(a){a&&(c(s),c(t),c(e),c(l)),_(r,a)}}}class D extends w{constructor(s){super(),z(this,s,null,K,C,{})}}export{D as component,B as universal};
