import{f as h,J as c,S,k as t,v as a,Y as m,q as j,C as y,I as P,U as k,N as B,V as b,r as w,E as z,t as q,z as E,R as g,W as C}from"../chunks/C1nF5lnu.js";import{E as M}from"../chunks/C1nUHx1m.js";import{S as O,P as R}from"../chunks/BBnGXyr3.js";import{B as T}from"../chunks/BDsIQgmx.js";const A=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"}));var H=h("<span> </span>"),I=h("<!> <!>",1);function J(o){const s=y([{color:"red"},{color:"blue"}]);var l=I(),i=c(l);T(i,{$$events:{click:()=>{const n=a(s)[0];m(s,a(s)[0]=a(s)[1]),m(s,a(s)[1]=n)}},children:(n,v)=>{B();var e=S("Switch");t(n,e)},$$slots:{default:!0}});var u=j(i,2);O(u,{style:"height: 400px",children:(n,v)=>{var e=P(),f=c(e);k(f,1,()=>a(s),b,(x,p)=>{R(x,{minSize:10,children:(_,W)=>{var r=H();let d;var $=w(r,!0);z(r),q(()=>{d=E(r,"",d,{color:(a(p),g(()=>a(p).color))}),C($,(a(p),g(()=>a(p).color)))}),t(_,r)},$$slots:{default:!0}})}),t(n,e)},$$slots:{default:!0}}),t(o,l)}const L=`<script>
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
`,U={code:L,highlightedHTML:N,component:J};var V=h("<h2>Reordering Panes</h2> <!>",1);function Q(o){var s=V(),l=j(c(s),2);M(l,{get example(){return U}}),t(o,s)}export{Q as component,K as universal};
