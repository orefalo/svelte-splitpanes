import{f as p,I as o,k as n,q as i}from"../chunks/D9fOklKB.js";import{E as m}from"../chunks/CMw-sgcZ.js";import{S as j,P as r}from"../chunks/BeMtSZS_.js";const d=!0,w=Object.freeze(Object.defineProperty({__proto__:null,prerender:d},Symbol.toStringTag,{value:"Module"}));var f=p("<p>Try shrinking my size, note how I snap below 10% size</p>"),u=p("<!> <!>",1);function S(a){j(a,{style:"height: 400px",children:(s,t)=>{var l=u(),e=o(l);r(e,{snapSize:10,children:(h,z)=>{var g=f();n(h,g)},$$slots:{default:!0}});var c=i(e,2);r(c,{}),n(s,l)},$$slots:{default:!0}})}const v=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane snapSize={10}>
    <p>Try shrinking my size, note how I snap below 10% size</p>
  </Pane>

  <Pane />
</Splitpanes>
`,_=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,y={code:v,highlightedHTML:_,component:S};var P=p("<h2>Simple snap</h2> <p>Using snapSize on a pane makes it snap to his adjacent splitters and borders.</p> <!>",1);function k(a){var s=P(),t=i(o(s),4);m(t,{get example(){return y}}),n(a,s)}export{k as component,w as universal};
