import{p as B,l as S,m as w,f as r,R as d,S as v,b as n,y as c,x as a,c as k,T as A,d as R,r as i,O as f,U as T,E as _,v as D,V as O}from"../chunks/external.DShmoqNC.js";import{E as M}from"../chunks/ExampleArea.CWssxdjn.js";import{S as z,P as V}from"../chunks/svelte-splitpanes.C6soIJh0.js";import{B as $}from"../chunks/Button.Bv-Bsi6U.js";const q=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));var C=i("<span></span>"),H=i("<!> <!> <!>",1);function L(o,p){B(p,!1);const t=_();let l=_(3);S(()=>a(l),()=>{D(t,a(l)>0)}),w();var h=H(),m=r(h);$(m,{$$events:{click:()=>{d(l)}},children:(e,j)=>{f();var s=v("+ ADD PANE");n(e,s)},$$slots:{default:!0}});var g=c(m,2),b=O(()=>!a(t));$(g,{get disabled(){return a(b)},$$events:{click:()=>{a(t)&&d(l,-1)}},children:(e,j)=>{f();var s=v("- REMOVE PANE");n(e,s)},$$slots:{default:!0}});var P=c(g,2);z(P,{style:"height: 400px",children:(e,j)=>{var s=k(),x=r(s);A(x,1,()=>({length:a(l)}),T,(N,J,E)=>{V(N,{minSize:10,children:(y,K)=>{var u=C();u.textContent=E+1,n(y,u)},$$slots:{default:!0}})}),n(e,s)},$$slots:{default:!0}}),n(o,h),R()}const U=`<script>
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
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,G={code:U,highlightedHTML:F,component:L};var I=i("<h2>Adding and removing panes programmatically</h2> <!>",1);function ss(o){var p=I(),t=c(r(p),2);M(t,{example:G}),n(o,p)}export{ss as component,Z as universal};
