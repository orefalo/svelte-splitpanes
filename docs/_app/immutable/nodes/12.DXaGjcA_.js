import{S as y,i as P,s as b,P as f,a as _,Q as u,f as d,R as g,j as h,n as i,o as m,g as c,U as $,X as B,Y as C,_ as x,D as S,T as E,V as T,$ as A,e as z,b as q,d as H,W as v,k as M,Z as N,I as O,K as R}from"../chunks/external.OMNCa6bn.js";import{E as D}from"../chunks/ExampleArea.CfnMKFS3.js";import{S as I,P as K}from"../chunks/svelte-splitpanes.BZFpAnX9.js";import{B as L}from"../chunks/Button.YGRd5rD_.js";const Q=!0,ls=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));function k(p,n,l){const t=p.slice();return t[2]=n[l],t}function U(p){let n;return{c(){n=B("Switch")},l(l){n=C(l,"Switch")},m(l,t){h(l,n,t)},d(l){l&&c(n)}}}function V(p){let n,l=p[2].color+"",t,e;return{c(){n=z("span"),t=B(l),e=_(),this.h()},l(a){n=q(a,"SPAN",{});var s=H(n);t=C(s,l),s.forEach(c),e=d(a),this.h()},h(){v(n,"color",p[2].color)},m(a,s){h(a,n,s),M(n,t),h(a,e,s)},p(a,s){s&1&&l!==(l=a[2].color+"")&&N(t,l),s&1&&v(n,"color",a[2].color)},d(a){a&&(c(n),c(e))}}}function w(p){let n,l;return n=new K({props:{minSize:10,$$slots:{default:[V]},$$scope:{ctx:p}}}),{c(){f(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,e){g(n,t,e),l=!0},p(t,e){const a={};e&33&&(a.$$scope={dirty:e,ctx:t}),n.$set(a)},i(t){l||(i(n.$$.fragment,t),l=!0)},o(t){m(n.$$.fragment,t),l=!1},d(t){$(n,t)}}}function W(p){let n,l,t=x(p[0]),e=[];for(let s=0;s<t.length;s+=1)e[s]=w(k(p,t,s));const a=s=>m(e[s],1,1,()=>{e[s]=null});return{c(){for(let s=0;s<e.length;s+=1)e[s].c();n=S()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);n=S()},m(s,o){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(s,o);h(s,n,o),l=!0},p(s,o){if(o&1){t=x(s[0]);let r;for(r=0;r<t.length;r+=1){const j=k(s,t,r);e[r]?(e[r].p(j,o),i(e[r],1)):(e[r]=w(j),e[r].c(),i(e[r],1),e[r].m(n.parentNode,n))}for(E(),r=t.length;r<e.length;r+=1)a(r);T()}},i(s){if(!l){for(let o=0;o<t.length;o+=1)i(e[o]);l=!0}},o(s){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)m(e[o]);l=!1},d(s){s&&c(n),A(e,s)}}}function X(p){let n,l,t,e;return n=new L({props:{$$slots:{default:[U]},$$scope:{ctx:p}}}),n.$on("click",p[1]),t=new I({props:{style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:p}}}),{c(){f(n.$$.fragment),l=_(),f(t.$$.fragment)},l(a){u(n.$$.fragment,a),l=d(a),u(t.$$.fragment,a)},m(a,s){g(n,a,s),h(a,l,s),g(t,a,s),e=!0},p(a,[s]){const o={};s&32&&(o.$$scope={dirty:s,ctx:a}),n.$set(o);const r={};s&33&&(r.$$scope={dirty:s,ctx:a}),t.$set(r)},i(a){e||(i(n.$$.fragment,a),i(t.$$.fragment,a),e=!0)},o(a){m(n.$$.fragment,a),m(t.$$.fragment,a),e=!1},d(a){a&&c(l),$(n,a),$(t,a)}}}function Y(p,n,l){const t=[{color:"red"},{color:"blue"}];return[t,()=>{const a=t[0];l(0,t[0]=t[1],t),l(0,t[1]=a,t)}]}class Z extends y{constructor(n){super(),P(this,n,Y,X,b,{})}}const F=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  const ordered = [{ color: 'red' }, { color: 'blue' }];
<\/script>

<Button
  on:click={() => {
    const temp = ordered[0];
    ordered[0] = ordered[1];
    ordered[1] = temp;
  }}>
  Switch
</Button>
<Splitpanes style="height: 400px">
  {#each ordered as val}
    <Pane minSize={10}>
      <span style:color={val.color}>{val.color}</span>
    </Pane>
  {/each}
</Splitpanes>
`,G=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> ordered = [{ <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span> }, { <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;blue&#x27;</span> }];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    const temp = ordered[0];
    ordered[0] = ordered[1];
    ordered[1] = temp;
  }}&gt;
  Switch
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  {#each ordered as val}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style:color</span>=<span class="hljs-string">{val.color}</span>&gt;</span>{val.color}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,J={code:F,highlightedHTML:G,component:Z};function ss(p){let n,l="Reordering Panes",t,e,a;return e=new D({props:{example:J}}),{c(){n=z("h2"),n.textContent=l,t=_(),f(e.$$.fragment)},l(s){n=q(s,"H2",{"data-svelte-h":!0}),O(n)!=="svelte-120o72g"&&(n.textContent=l),t=d(s),u(e.$$.fragment,s)},m(s,o){h(s,n,o),h(s,t,o),g(e,s,o),a=!0},p:R,i(s){a||(i(e.$$.fragment,s),a=!0)},o(s){m(e.$$.fragment,s),a=!1},d(s){s&&(c(n),c(t)),$(e,s)}}}class os extends y{constructor(n){super(),P(this,n,null,ss,b,{})}}export{os as component,ls as universal};
