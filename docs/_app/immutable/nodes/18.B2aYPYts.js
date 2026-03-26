import{m as l,f as j,U as b,t as k,b as a,u as o,y as S,A as h,z as y,n as B,O as w,Z as C}from"../chunks/DVjc0Lye.js";import{E as H}from"../chunks/CgCIeA0O.js";import{S as O,P as g}from"../chunks/CK-5hvgA.js";import{B as T}from"../chunks/CGOdr3Fo.js";const q=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));var z=l("<span>1</span>"),A=l("<span>2</span>"),E=l("<span>3</span>"),M=l("<!> <!> <!>",1),L=l("<!> <!>",1);function U(c){function p(){S(n,!h(n))}let n=y(!0);var m=L(),u=j(m);T(u,{$$events:{click:p},children:(r,_)=>{w();var t=b();k(()=>C(t,h(n)?"Hide":"Show")),a(r,t)},$$slots:{default:!0}});var d=o(u,2);O(d,{style:"height: 400px",children:(r,_)=>{var t=M(),v=j(t);g(v,{children:(s,i)=>{var e=z();a(s,e)},$$slots:{default:!0}});var f=o(v,2);{var $=s=>{g(s,{children:(i,e)=>{var x=A();a(i,x)},$$slots:{default:!0}})};B(f,s=>{h(n)&&s($)})}var P=o(f,2);g(P,{children:(s,i)=>{var e=E();a(s,e)},$$slots:{default:!0}}),a(r,t)},$$slots:{default:!0}}),a(c,m)}const Z=`<script>
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
`,F={code:Z,highlightedHTML:D,component:U};var G=l("<h2>Toggle a pane on/off</h2> <!>",1);function R(c){var p=G(),n=o(j(p),2);H(n,{get example(){return F}}),a(c,p)}export{R as component,Q as universal};
