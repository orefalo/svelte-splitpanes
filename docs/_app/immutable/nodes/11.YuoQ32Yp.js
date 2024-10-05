import{S as y,i as b,s as k,P as j,Q as d,R as x,n as m,o as f,U as S,_ as w,D as P,j as h,K as v,g as i,$ as z,e as u,X as D,a as g,b as _,d as q,Y as E,f as $,I as C,k as A}from"../chunks/external.C8qNzFcd.js";import{E as H}from"../chunks/ExampleArea.DYWpjk16.js";import{S as L,P as M}from"../chunks/svelte-splitpanes.B5qDxGlI.js";const O=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function T(c,s,l){const t=c.slice();return t[0]=s[l],t[2]=l,t}function B(c){let s,l=c[2]+1+"",t,e,a,n="Double click splitter ->",p;return{c(){s=u("span"),t=D(l),e=g(),a=u("p"),a.textContent=n,p=g()},l(r){s=_(r,"SPAN",{});var o=q(s);t=E(o,l),o.forEach(i),e=$(r),a=_(r,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1atcipd"&&(a.textContent=n),p=$(r)},m(r,o){h(r,s,o),A(s,t),h(r,e,o),h(r,a,o),h(r,p,o)},p:v,d(r){r&&(i(s),i(e),i(a),i(p))}}}function I(c){let s,l;return s=new M({props:{minSize:5,$$slots:{default:[B]},$$scope:{ctx:c}}}),{c(){j(s.$$.fragment)},l(t){d(s.$$.fragment,t)},m(t,e){x(s,t,e),l=!0},p(t,e){const a={};e&8&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){l||(m(s.$$.fragment,t),l=!0)},o(t){f(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}function K(c){let s,l,t=w({length:8}),e=[];for(let a=0;a<t.length;a+=1)e[a]=I(T(c,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=P()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);s=P()},m(a,n){for(let p=0;p<e.length;p+=1)e[p]&&e[p].m(a,n);h(a,s,n),l=!0},p:v,i(a){if(!l){for(let n=0;n<t.length;n+=1)m(e[n]);l=!0}},o(a){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)f(e[n]);l=!1},d(a){a&&i(s),z(e,a)}}}function N(c){let s,l;return s=new L({props:{style:"height: 400px",$$slots:{default:[K]},$$scope:{ctx:c}}}),{c(){j(s.$$.fragment)},l(t){d(s.$$.fragment,t)},m(t,e){x(s,t,e),l=!0},p(t,[e]){const a={};e&8&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){l||(m(s.$$.fragment,t),l=!0)},o(t){f(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}class Q extends y{constructor(s){super(),b(this,s,null,N,k,{})}}const R=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  {#each { length: 8 } as _, i}
    <Pane minSize={5}>
      <span>{i + 1}</span>
      <p>Double click splitter -></p>
    </Pane>
  {/each}
</Splitpanes>
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  {#each { length: 8 } as _, i}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Double click splitter -&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:R,highlightedHTML:U,component:Q};function Y(c){let s,l="Lots of splitters & push other panes - all panes have a min width of 5%",t,e,a;return e=new H({props:{example:X}}),{c(){s=u("h2"),s.textContent=l,t=g(),j(e.$$.fragment)},l(n){s=_(n,"H2",{"data-svelte-h":!0}),C(s)!=="svelte-1ifg03p"&&(s.textContent=l),t=$(n),d(e.$$.fragment,n)},m(n,p){h(n,s,p),h(n,t,p),x(e,n,p),a=!0},p:v,i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){f(e.$$.fragment,n),a=!1},d(n){n&&(i(s),i(t)),S(e,n)}}}class W extends y{constructor(s){super(),b(this,s,null,Y,k,{})}}export{W as component,V as universal};
