import{f as l,I as j,k as n,q as r}from"../chunks/CzTCXyJj.js";import{E as d}from"../chunks/BTs3ffOu.js";import{S as f,P as e}from"../chunks/ddC5nEqo.js";const u=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:u},Symbol.toStringTag,{value:"Module"}));var P=l("<span>1</span>"),v=l("<p>Note how double clicking has no resizing effects..</p>"),_=l("<span>3</span>"),$=l("<!> <!> <!>",1);function z(t){f(t,{horizontal:!0,style:"height: 400px",dblClickSplitter:!1,children:(p,c)=>{var i=$(),o=j(i);e(o,{size:33,children:(s,g)=>{var a=P();n(s,a)},$$slots:{default:!0}});var h=r(o,2);e(h,{size:33,children:(s,g)=>{var a=v();n(s,a)},$$slots:{default:!0}});var m=r(h,2);e(m,{size:34,children:(s,g)=>{var a=_();n(s,a)},$$slots:{default:!0}}),n(p,i)},$$slots:{default:!0}})}const b=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" dblClickSplitter={false}>
  <Pane size={33}>
    <span>1</span>
  </Pane>
  <Pane size={33}>
    <p>Note how double clicking has no resizing effects..</p>
  </Pane>
  <Pane size={34}>
    <span>3</span>
  </Pane>
</Splitpanes>
`,S=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">dblClickSplitter</span>=<span class="hljs-string">{false}</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Note how double clicking has no resizing effects..<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{34}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,k={code:b,highlightedHTML:S,component:z};var x=l(`<h2>Disable double click</h2> <p>By default, double clicking the splitter will expand its nearest pane. In this example, we
  demonstrate how to turn this feature OFF</p> <!>`,1);function N(t){var p=x(),c=r(j(p),4);d(c,{get example(){return k}}),n(t,p)}export{N as component,q as universal};
