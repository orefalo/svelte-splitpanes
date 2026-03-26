import{p as B,l as E,y as S,A as s,z as v,k,m,f as i,O as f,U as _,b as a,V as $,u as h,W as w,c as A,X as R,Y as T,d as D}from"../chunks/CmnOdeeZ.js";import{E as O}from"../chunks/CIhderJa.js";import{S as z,P as M}from"../chunks/Y56HQ0XO.js";import{B as b}from"../chunks/lgBEUItY.js";const V=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));var q=m("<span></span>"),C=m("<!> <!> <!>",1);function H(o,p){B(p,!1);const n=v();let t=v(3);E(()=>s(t),()=>{S(n,s(t)>0)}),k();var g=C(),u=i(g);b(u,{$$events:{click:()=>{$(t)}},children:(l,r)=>{f();var e=_("+ ADD PANE");a(l,e)},$$slots:{default:!0}});var j=h(u,2);{let l=w(()=>!s(n));b(j,{get disabled(){return s(l)},$$events:{click:()=>{s(n)&&$(t,-1)}},children:(r,e)=>{f();var c=_("- REMOVE PANE");a(r,c)},$$slots:{default:!0}})}var P=h(j,2);z(P,{style:"height: 400px",children:(l,r)=>{var e=A(),c=i(e);R(c,1,()=>({length:s(t)}),T,(x,Y,N)=>{M(x,{minSize:10,children:(y,F)=>{var d=q();d.textContent=N+1,a(y,d)},$$slots:{default:!0}})}),a(l,e)},$$slots:{default:!0}}),a(o,g),D()}const L=`<script>
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
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,W={code:L,highlightedHTML:U,component:H};var X=m("<h2>Adding and removing panes programmatically</h2> <!>",1);function Z(o){var p=X(),n=h(i(p),2);O(n,{get example(){return W}}),a(o,p)}export{Z as component,Q as universal};
