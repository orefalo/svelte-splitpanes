import{f as p,I as g,k as n,q as l,r as u,A as d}from"../chunks/4agq1G7u.js";import{E as f}from"../chunks/D8nrRwXE.js";import{S as v,P as o}from"../chunks/DuKXqq9G.js";const x=!0,C=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));var P=p('<span>1 <br/> <em class="specs">I have a min height of 20% &amp; max height of 70%</em></span>'),S=p("<span>2</span>"),b=p('<span>3 <br/> <em class="specs">I have a max height of 70%</em></span>'),_=p("<!> <!> <!>",1);function $(r){v(r,{horizontal:!0,style:"height: 400px",children:(t,e)=>{var h=_(),c=g(h);o(c,{minSize:20,maxSize:70,children:(s,m)=>{var a=P();n(s,a)},$$slots:{default:!0}});var i=l(c,2);o(i,{children:(s,m)=>{var a=S();n(s,a)},$$slots:{default:!0}});var j=l(i,2);o(j,{maxSize:70,children:(s,m)=>{var a=b();n(s,a)},$$slots:{default:!0}}),n(t,h)},$$slots:{default:!0}})}const z=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal={true} style="height: 400px">
  <Pane minSize={20} maxSize={70}>
    <span>
      1
      <br />
      <em class="specs">I have a min height of 20% &amp; max height of 70%</em>
    </span>
  </Pane>
  <Pane>
    <span>2</span>
  </Pane>
  <Pane maxSize={70}>
    <span>
      3
      <br />
      <em class="specs">I have a max height of 70%</em>
    </span>
  </Pane>
</Splitpanes>
`,y=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      1
      <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a min height of 20% <span class="hljs-symbol">&amp;amp;</span> max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      3
      <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,I={code:z,highlightedHTML:y,component:$};var k=p("<h2>Horizontal layout, push other panes, min & max use, doubleclick</h2> <p>You can double click a splitter to maximize the next pane! <br/> </p> <!>",1);function E(r){var t=k(),e=l(g(t),2),h=l(u(e),2);h.nodeValue=` If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute:
  dblClickSplitter=false.`,d(e);var c=l(e,2);f(c,{get example(){return I}}),n(r,t)}export{E as component,C as universal};
