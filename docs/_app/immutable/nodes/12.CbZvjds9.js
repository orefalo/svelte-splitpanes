import{f as o,x as a,Y as d,S as _,b as t,y as m,c as $,T as S,r as c,E as y,O as P,U as B,A as b,C as k,t as w,Z as z,W as E}from"../chunks/external.wmZIxpjd.js";import{E as O}from"../chunks/ExampleArea.DgeY-bOW.js";import{S as T,P as q}from"../chunks/svelte-splitpanes.DJgf5NTe.js";import{B as A}from"../chunks/Button.Cupm7EGA.js";const C=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));var M=c("<span> </span>"),H=c("<!> <!>",1);function L(r){const s=y([{color:"red"},{color:"blue"}]);var l=H(),h=o(l);A(h,{$$events:{click:()=>{const n=a(s)[0];d(s,a(s)[0]=a(s)[1]),d(s,a(s)[1]=n)}},children:(n,j)=>{P();var e=_("Switch");t(n,e)},$$slots:{default:!0}});var g=m(h,2);T(g,{style:"height: 400px",children:(n,j)=>{var e=$(),u=o(e);S(u,1,()=>a(s),B,(v,i)=>{q(v,{minSize:10,children:(f,Z)=>{var p=M(),x=b(p,!0);k(p),w(()=>{z(p,"color",a(i).color),E(x,a(i).color)}),t(f,p)},$$slots:{default:!0}})}),t(n,e)},$$slots:{default:!0}}),t(r,l)}const R=`<script>
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
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,W={code:R,highlightedHTML:U,component:L};var Y=c("<h2>Reordering Panes</h2> <!>",1);function K(r){var s=Y(),l=m(o(s),2);O(l,{example:W}),t(r,s)}export{K as component,J as universal};
