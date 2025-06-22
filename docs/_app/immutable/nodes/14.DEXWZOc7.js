import{f as h,y as p,b as l,r as t}from"../chunks/external.BXd5N0FW.js";import{E as j}from"../chunks/ExampleArea.Ca6SKEZZ.js";import{S as f,P as n}from"../chunks/svelte-splitpanes.BXcsx3R1.js";const v=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:v},Symbol.toStringTag,{value:"Module"}));var z=t('<span style="font-size: 20px;">I have a snap size of 10% <br> I have a min size of 10% <br> I have a max size of 70%</span>'),d=t("<!> <!> <!>",1);function u(a){f(a,{style:"height: 400px",children:(s,e)=>{var i=d(),r=h(i);n(r,{});var o=p(r,2);n(o,{snapSize:10,minSize:10,maxSize:70,children:(m,b)=>{var g=z();l(m,g)},$$slots:{default:!0}});var c=p(o,2);n(c,{}),l(s,i)},$$slots:{default:!0}})}const x=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
  <Pane />

  <Pane snapSize={10} minSize={10} maxSize={70}>
    <span style="font-size: 20px;">
      I have a snap size of 10%
      <br />
      I have a min size of 10%
      <br />
      I have a max size of 70%
    </span>
  </Pane>

  <Pane />
</Splitpanes>
`,S=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 20px;&quot;</span>&gt;</span>
      I have a snap size of 10%
      <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      I have a min size of 10%
      <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      I have a max size of 70%
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,P={code:x,highlightedHTML:S,component:u};var _=t("<h2>Min & max with snap</h2> <p>You can also snap to the panel maximum and minimum size.</p> <!>",1);function w(a){var s=_(),e=p(h(s),4);j(e,{example:P}),l(a,s)}export{w as component,q as universal};
