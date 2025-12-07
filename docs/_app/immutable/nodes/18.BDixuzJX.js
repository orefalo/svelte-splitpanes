import{f as l,I as j,T as b,t as k,k as a,q as o,v as S,y as h,x as y,g as B,N as w,Y as C}from"../chunks/CxoYF2Uh.js";import{E as H}from"../chunks/7wpGrS-d.js";import{S as T,P as g}from"../chunks/9II1odZd.js";import{B as q}from"../chunks/D65fGdcR.js";const E=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:E},Symbol.toStringTag,{value:"Module"}));var M=l("<span>1</span>"),O=l("<span>2</span>"),z=l("<span>3</span>"),A=l("<!> <!> <!>",1),I=l("<!> <!>",1);function L(c){function p(){S(n,!h(n))}let n=y(!0);var m=I(),v=j(m);q(v,{$$events:{click:p},children:(r,_)=>{w();var t=b();k(()=>C(t,h(n)?"Hide":"Show")),a(r,t)},$$slots:{default:!0}});var d=o(v,2);T(d,{style:"height: 400px",children:(r,_)=>{var t=A(),u=j(t);g(u,{children:(s,i)=>{var e=M();a(s,e)},$$slots:{default:!0}});var f=o(u,2);{var $=s=>{g(s,{children:(i,e)=>{var x=O();a(i,x)},$$slots:{default:!0}})};B(f,s=>{h(n)&&s($)})}var P=o(f,2);g(P,{children:(s,i)=>{var e=z();a(s,e)},$$slots:{default:!0}}),a(r,t)},$$slots:{default:!0}}),a(c,m)}const N=`<script>
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
`,Y=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,D={code:N,highlightedHTML:Y,component:L};var F=l("<h2>Toggle a pane on/off</h2> <!>",1);function U(c){var p=F(),n=o(j(p),2);H(n,{get example(){return D}}),a(c,p)}export{U as component,R as universal};
