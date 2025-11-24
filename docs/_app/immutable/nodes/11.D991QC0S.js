import{H as m,I as n,W as j,k as p,f as c,O as f,X as u,q as d}from"../chunks/czr1-yKw.js";import{E as _}from"../chunks/DTA-oJmB.js";import{S as v,P as S}from"../chunks/DR9u-YXe.js";const x=!0,E=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));var P=c("<span></span> <p>Double click splitter -></p>",1);function $(a){v(a,{style:"height: 400px",children:(s,t)=>{var l=m(),r=n(l);j(r,0,()=>({length:8}),u,(i,q,h)=>{S(i,{minSize:5,children:(o,w)=>{var e=P(),g=n(e);g.textContent=h+1,f(2),p(o,e)},$$slots:{default:!0}})}),p(s,l)},$$slots:{default:!0}})}const b=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  {#each { length: 8 } as _, i}
    <Pane minSize={5}>
      <span>{i + 1}</span>
      <p>Double click splitter -></p>
    </Pane>
  {/each}
</Splitpanes>
`,y=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  {#each { length: 8 } as _, i}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Double click splitter -&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,k={code:b,highlightedHTML:y,component:$};var z=c("<h2>Lots of splitters & push other panes - all panes have a min width of 5%</h2> <!>",1);function H(a){var s=z(),t=d(n(s),2);_(t,{get example(){return k}}),p(a,s)}export{H as component,E as universal};
