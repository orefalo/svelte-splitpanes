import{f as c,I as o,T as $,k as t,y as a,_ as m,q as g,x as S,H as y,W as P,N as B,X as k,r as b,A as w,t as z,D as q,Y as T}from"../chunks/BExWhfJl.js";import{E as A}from"../chunks/CqC_iv4i.js";import{S as E,P as H}from"../chunks/W1JU3AeR.js";import{B as M}from"../chunks/BzQxWVEh.js";const O=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));var C=c("<span> </span>"),D=c("<!> <!>",1);function I(r){const s=S([{color:"red"},{color:"blue"}]);var l=D(),h=o(l);M(h,{$$events:{click:()=>{const n=a(s)[0];m(s,a(s)[0]=a(s)[1]),m(s,a(s)[1]=n)}},children:(n,u)=>{B();var e=$("Switch");t(n,e)},$$slots:{default:!0}});var j=g(h,2);E(j,{style:"height: 400px",children:(n,u)=>{var e=y(),v=o(e);P(v,1,()=>a(s),k,(f,i)=>{H(f,{minSize:10,children:(x,X)=>{var p=C();let d;var _=b(p,!0);w(p),z(()=>{d=q(p,"",d,{color:a(i).color}),T(_,a(i).color)}),t(x,p)},$$slots:{default:!0}})}),t(n,e)},$$slots:{default:!0}}),t(r,l)}const L=`<script>
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
`,N=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,R={code:L,highlightedHTML:N,component:I};var W=c("<h2>Reordering Panes</h2> <!>",1);function Q(r){var s=W(),l=g(o(s),2);A(l,{get example(){return R}}),t(r,s)}export{Q as component,K as universal};
