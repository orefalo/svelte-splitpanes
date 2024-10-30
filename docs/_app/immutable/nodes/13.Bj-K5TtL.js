import{f as c,y as p,b as l,r as t}from"../chunks/external.BJX1LbSc.js";import{E as m}from"../chunks/ExampleArea.BFaeN7lL.js";import{S as d,P as n}from"../chunks/svelte-splitpanes.ueJKUAWs.js";const f=!0,k=Object.freeze(Object.defineProperty({__proto__:null,prerender:f},Symbol.toStringTag,{value:"Module"}));var v=t("<p>Try shrinking my size, note how I snap below 10% size</p>"),P=t("<!> <!> <!>",1);function u(a){d(a,{style:"height: 400px",children:(s,e)=>{var r=P(),o=c(r);n(o,{});var i=p(o,2);n(i,{snapSize:10,children:(g,$)=>{var j=v();l(g,j)},$$slots:{default:!0}});var h=p(i,2);n(h,{}),l(s,r)},$$slots:{default:!0}})}const y=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane />

  <Pane snapSize={10}>
    <p>Try shrinking my size, note how I snap below 10% size</p>
  </Pane>

  <Pane />
</Splitpanes>
`,_=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,S={code:y,highlightedHTML:_,component:u};var z=t("<h2>Middle snap</h2> <!>",1);function T(a){var s=z(),e=p(c(s),2);m(e,{example:S}),l(a,s)}export{T as component,k as universal};
