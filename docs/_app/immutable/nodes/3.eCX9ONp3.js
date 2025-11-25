import{p as B,l as E,v as S,y as s,x as v,e as k,f as m,I as i,O as f,T as _,k as a,U as $,q as h,V as w,H as A,W as R,X as T,m as D}from"../chunks/ChhXGhQj.js";import{E as O}from"../chunks/B0D29hQ3.js";import{S as M,P as q}from"../chunks/CdGojHeN.js";import{B as b}from"../chunks/DtrPx-_R.js";const z=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:z},Symbol.toStringTag,{value:"Module"}));var V=m("<span></span>"),C=m("<!> <!> <!>",1);function H(o,p){B(p,!1);const n=v();let t=v(3);E(()=>s(t),()=>{S(n,s(t)>0)}),k();var g=C(),u=i(g);b(u,{$$events:{click:()=>{$(t)}},children:(l,r)=>{f();var e=_("+ ADD PANE");a(l,e)},$$slots:{default:!0}});var j=h(u,2);{let l=w(()=>!s(n));b(j,{get disabled(){return s(l)},$$events:{click:()=>{s(n)&&$(t,-1)}},children:(r,e)=>{f();var c=_("- REMOVE PANE");a(r,c)},$$slots:{default:!0}})}var P=h(j,2);M(P,{style:"height: 400px",children:(l,r)=>{var e=A(),c=i(e);R(c,1,()=>({length:s(t)}),T,(x,X,N)=>{q(x,{minSize:10,children:(y,F)=>{var d=V();d.textContent=N+1,a(y,d)},$$slots:{default:!0}})}),a(l,e)},$$slots:{default:!0}}),a(o,g),D()}const I=`<script>
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
`,L=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,U={code:I,highlightedHTML:L,component:H};var W=m("<h2>Adding and removing panes programmatically</h2> <!>",1);function Z(o){var p=W(),n=h(i(p),2);O(n,{get example(){return U}}),a(o,p)}export{Z as component,Y as universal};
