import{p as S,l as y,B as k,v as a,C as d,e as w,f as i,J as r,N as v,S as f,k as n,T as _,q as c,u as A,I as R,U as T,V as D,m as M}from"../chunks/C1nF5lnu.js";import{E as O}from"../chunks/C1nUHx1m.js";import{S as q,P as z}from"../chunks/BBnGXyr3.js";import{B as $}from"../chunks/BDsIQgmx.js";const V=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));var C=i("<span></span>"),H=i("<!> <!> <!>",1);function I(o,p){S(p,!1);const t=d();let e=d(3);y(()=>a(e),()=>{k(t,a(e)>0)}),w();var h=H(),m=r(h);$(m,{$$events:{click:()=>{_(e)}},children:(l,u)=>{v();var s=f("+ ADD PANE");n(l,s)},$$slots:{default:!0}});var g=c(m,2);const b=A(()=>!a(t));$(g,{get disabled(){return a(b)},$$events:{click:()=>{a(t)&&_(e,-1)}},children:(l,u)=>{v();var s=f("- REMOVE PANE");n(l,s)},$$slots:{default:!0}});var P=c(g,2);q(P,{style:"height: 400px",children:(l,u)=>{var s=R(),x=r(s);T(x,1,()=>({length:a(e)}),D,(N,G,B)=>{z(N,{minSize:10,children:(E,K)=>{var j=C();j.textContent=B+1,n(E,j)},$$slots:{default:!0}})}),n(l,s)},$$slots:{default:!0}}),n(o,h),M()}const J=`<script>
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
`,U={code:J,highlightedHTML:L,component:I};var F=i("<h2>Adding and removing panes programmatically</h2> <!>",1);function ss(o){var p=F(),t=c(r(p),2);O(t,{get example(){return U}}),n(o,p)}export{ss as component,Z as universal};
