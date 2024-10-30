import{f as j,S as x,t as b,b as s,y as o,n as k,x as h,r as n,v as S,E as y,O as B,W as w}from"../chunks/external.BJX1LbSc.js";import{E as C}from"../chunks/ExampleArea.BFaeN7lL.js";import{S as H,P as g}from"../chunks/svelte-splitpanes.ueJKUAWs.js";import{B as E}from"../chunks/Button.Db376QmV.js";const O=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));var T=n("<span>1</span>"),q=n("<span>2</span>"),M=n("<span>3</span>"),z=n("<!> <!> <!>",1),A=n("<!> <!>",1);function L(c){function p(){S(a,!h(a))}let a=y(!0);var m=A(),v=j(m);E(v,{$$events:{click:p},children:(r,$)=>{B();var l=x();b(()=>w(l,h(a)?"Hide":"Show")),s(r,l)},$$slots:{default:!0}});var d=o(v,2);H(d,{style:"height: 400px",children:(r,$)=>{var l=z(),u=j(l);g(u,{children:(t,i)=>{var e=T();s(t,e)},$$slots:{default:!0}});var f=o(u,2);k(f,()=>h(a),t=>{g(t,{children:(i,e)=>{var P=q();s(i,P)},$$slots:{default:!0}})});var _=o(f,2);g(_,{children:(t,i)=>{var e=M();s(t,e)},$$slots:{default:!0}}),s(r,l)},$$slots:{default:!0}}),s(c,m)}const W=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  function onClick() {
    visible = !visible;
  }

  let visible = true;
<\/script>

<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>

<Splitpanes style="height: 400px">
  <Pane>
    <span>1</span>
  </Pane>
  {#if visible}
    <Pane>
      <span>2</span>
    </Pane>
  {/if}
  <Pane>
    <span>3</span>
  </Pane>
</Splitpanes>
`,D=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">onClick</span>(<span class="hljs-params"></span>) {
    visible = !visible;
  }

  <span class="hljs-keyword">let</span> visible = <span class="hljs-literal">true</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">on:click</span>=<span class="hljs-string">{onClick}</span>&gt;</span>{visible ? &#x27;Hide&#x27; : &#x27;Show&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {#if visible}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/if}
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,F={code:W,highlightedHTML:D,component:L};var G=n("<h2>Toggle a pane on/off</h2> <!>",1);function R(c){var p=G(),a=o(j(p),2);C(a,{example:F}),s(c,p)}export{R as component,Q as universal};
