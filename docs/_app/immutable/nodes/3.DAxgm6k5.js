import{S as B,i as x,s as R,P as h,a as j,Q as g,f as d,R as $,j as i,n as m,o as u,g as c,U as _,X as N,Y as v,_ as E,D as k,T as M,V as O,$ as C,e as y,b as T,d as V,k as z,K as D,I as q}from"../chunks/external.OMNCa6bn.js";import{E as H}from"../chunks/ExampleArea.CfnMKFS3.js";import{S as I,P as K}from"../chunks/svelte-splitpanes.BZFpAnX9.js";import{B as w}from"../chunks/Button.YGRd5rD_.js";const L=!0,ps=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function S(r,s,l){const t=r.slice();return t[4]=s[l],t[6]=l,t}function Q(r){let s;return{c(){s=N("+ ADD PANE")},l(l){s=v(l,"+ ADD PANE")},m(l,t){i(l,s,t)},d(l){l&&c(s)}}}function U(r){let s;return{c(){s=N("- REMOVE PANE")},l(l){s=v(l,"- REMOVE PANE")},m(l,t){i(l,s,t)},d(l){l&&c(s)}}}function X(r){let s,l=r[6]+1+"",t,n;return{c(){s=y("span"),t=N(l),n=j()},l(o){s=T(o,"SPAN",{});var a=V(s);t=v(a,l),a.forEach(c),n=d(o)},m(o,a){i(o,s,a),z(s,t),i(o,n,a)},p:D,d(o){o&&(c(s),c(n))}}}function A(r){let s,l;return s=new K({props:{minSize:10,$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,n){$(s,t,n),l=!0},p(t,n){const o={};n&128&&(o.$$scope={dirty:n,ctx:t}),s.$set(o)},i(t){l||(m(s.$$.fragment,t),l=!0)},o(t){u(s.$$.fragment,t),l=!1},d(t){_(s,t)}}}function Y(r){let s,l,t=E({length:r[0]}),n=[];for(let a=0;a<t.length;a+=1)n[a]=A(S(r,t,a));const o=a=>u(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();s=k()},l(a){for(let e=0;e<n.length;e+=1)n[e].l(a);s=k()},m(a,e){for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(a,e);i(a,s,e),l=!0},p(a,e){if(e&1){t=E({length:a[0]});let p;for(p=0;p<t.length;p+=1){const f=S(a,t,p);n[p]?(n[p].p(f,e),m(n[p],1)):(n[p]=A(f),n[p].c(),m(n[p],1),n[p].m(s.parentNode,s))}for(M(),p=t.length;p<n.length;p+=1)o(p);O()}},i(a){if(!l){for(let e=0;e<t.length;e+=1)m(n[e]);l=!0}},o(a){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)u(n[e]);l=!1},d(a){a&&c(s),C(n,a)}}}function F(r){let s,l,t,n,o,a;return s=new w({props:{$$slots:{default:[Q]},$$scope:{ctx:r}}}),s.$on("click",r[2]),t=new w({props:{disabled:!r[1],$$slots:{default:[U]},$$scope:{ctx:r}}}),t.$on("click",r[3]),o=new I({props:{style:"height: 400px",$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment),l=j(),h(t.$$.fragment),n=j(),h(o.$$.fragment)},l(e){g(s.$$.fragment,e),l=d(e),g(t.$$.fragment,e),n=d(e),g(o.$$.fragment,e)},m(e,p){$(s,e,p),i(e,l,p),$(t,e,p),i(e,n,p),$(o,e,p),a=!0},p(e,[p]){const f={};p&128&&(f.$$scope={dirty:p,ctx:e}),s.$set(f);const b={};p&2&&(b.disabled=!e[1]),p&128&&(b.$$scope={dirty:p,ctx:e}),t.$set(b);const P={};p&129&&(P.$$scope={dirty:p,ctx:e}),o.$set(P)},i(e){a||(m(s.$$.fragment,e),m(t.$$.fragment,e),m(o.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),u(t.$$.fragment,e),u(o.$$.fragment,e),a=!1},d(e){e&&(c(l),c(n)),_(s,e),_(t,e),_(o,e)}}}function G(r,s,l){let t,n=3;const o=()=>{l(0,n++,n)},a=()=>{t&&l(0,n--,n)};return r.$$.update=()=>{r.$$.dirty&1&&l(1,t=n>0)},[n,t,o,a]}class J extends B{constructor(s){super(),x(this,s,G,F,R,{})}}const W=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  let panesNumber = 3;
  $: allowToRemove = panesNumber > 0;
<\/script>

<Button
  on:click={() => {
    panesNumber++;
  }}>
  + ADD PANE
</Button>
<Button
  disabled={!allowToRemove}
  on:click={() => {
    if (allowToRemove) panesNumber--;
  }}>
  - REMOVE PANE
</Button>

<Splitpanes style="height: 400px">
  {#each { length: panesNumber } as _, i}
    <Pane minSize={10}>
      <span>{i + 1}</span>
    </Pane>
  {/each}
</Splitpanes>
`,Z=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

  <span class="hljs-keyword">let</span> panesNumber = <span class="hljs-number">3</span>;
  <span class="hljs-attr">$</span>: allowToRemove = panesNumber &gt; <span class="hljs-number">0</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    panesNumber++;
  }}&gt;
  + ADD PANE
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">disabled</span>=<span class="hljs-string">{!allowToRemove}</span>
  <span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    if (allowToRemove) panesNumber--;
  }}&gt;
  - REMOVE PANE
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  {#each { length: panesNumber } as _, i}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,ss={code:W,highlightedHTML:Z,component:J};function ns(r){let s,l="Adding and removing panes programmatically",t,n,o;return n=new H({props:{example:ss}}),{c(){s=y("h2"),s.textContent=l,t=j(),h(n.$$.fragment)},l(a){s=T(a,"H2",{"data-svelte-h":!0}),q(s)!=="svelte-iec5ra"&&(s.textContent=l),t=d(a),g(n.$$.fragment,a)},m(a,e){i(a,s,e),i(a,t,e),$(n,a,e),o=!0},p:D,i(a){o||(m(n.$$.fragment,a),o=!0)},o(a){u(n.$$.fragment,a),o=!1},d(a){a&&(c(s),c(t)),_(n,a)}}}class os extends B{constructor(s){super(),x(this,s,null,ns,R,{})}}export{os as component,ps as universal};
