import{f as t,J as c,q as p,k as l}from"../chunks/yeWveBFq.js";import{E as j}from"../chunks/ObqEs7ct.js";import{S as d,P as n}from"../chunks/CJZdHQxo.js";const f=!0,k=Object.freeze(Object.defineProperty({__proto__:null,prerender:f},Symbol.toStringTag,{value:"Module"}));var u=t("<p>Try shrinking my size, note how I snap below 10% size</p>"),v=t("<!> <!> <!>",1);function P(a){d(a,{style:"height: 400px",children:(s,e)=>{var r=v(),o=c(r);n(o,{});var i=p(o,2);n(i,{snapSize:10,children:(g,x)=>{var m=u();l(g,m)},$$slots:{default:!0}});var h=p(i,2);n(h,{}),l(s,r)},$$slots:{default:!0}})}const _=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane />

  <Pane snapSize={10}>
    <p>Try shrinking my size, note how I snap below 10% size</p>
  </Pane>

  <Pane />
</Splitpanes>
`,y=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,S={code:_,highlightedHTML:y,component:P};var z=t("<h2>Middle snap</h2> <!>",1);function T(a){var s=z(),e=p(c(s),2);j(e,{get example(){return S}}),l(a,s)}export{T as component,k as universal};
