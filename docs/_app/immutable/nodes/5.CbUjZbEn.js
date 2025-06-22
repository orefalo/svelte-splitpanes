import{f,b as n,y as o,r as l,O as e}from"../chunks/external.BXd5N0FW.js";import{E as u}from"../chunks/ExampleArea.Ca6SKEZZ.js";import{S as d,P as r}from"../chunks/svelte-splitpanes.BXcsx3R1.js";const v=!0,O=Object.freeze(Object.defineProperty({__proto__:null,prerender:v},Symbol.toStringTag,{value:"Module"}));var z=l("<span>1</span> <p>Default size of 65%</p>",1),P=l("<span>2</span> <p>Default size of 10%</p>",1),_=l("<span>3</span> <p>Default size of 25%</p>",1),$=l("<!> <!> <!>",1);function y(t){d(t,{horizontal:!0,style:"height: 400px",children:(p,h)=>{var i=$(),c=f(i);r(c,{size:65,children:(s,j)=>{var a=z();e(2),n(s,a)},$$slots:{default:!0}});var g=o(c,2);r(g,{size:10,children:(s,j)=>{var a=P();e(2),n(s,a)},$$slots:{default:!0}});var m=o(g,2);r(m,{size:25,children:(s,j)=>{var a=_();e(2),n(s,a)},$$slots:{default:!0}}),n(p,i)},$$slots:{default:!0}})}const b=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px">
  <Pane size={65}>
    <span>1</span>
    <p>Default size of 65%</p>
  </Pane>
  <Pane size={10}>
    <span>2</span>
    <p>Default size of 10%</p>
  </Pane>
  <Pane size={25}>
    <span>3</span>
    <p>Default size of 25%</p>
  </Pane>
</Splitpanes>
`,x=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{65}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 65%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{10}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 10%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{25}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 25%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,D={code:b,highlightedHTML:x,component:y};var S=l(`<h2>Default pane size</h2> <p>Provide dimension of your panes when they first load (will be used for the width or height
  respectively for the vertical or horizontal layout). <br> <b>If you provide a default size, make sure you provide it for all the panes for a total equals to
    100%. If a pane is missing a default size, then all the panes will have the same size.</b> <br> Note that setting a default value is different than setting a min or max value.</p> <!>`,1);function E(t){var p=S(),h=o(f(p),4);u(h,{example:D}),n(t,p)}export{E as component,O as universal};
