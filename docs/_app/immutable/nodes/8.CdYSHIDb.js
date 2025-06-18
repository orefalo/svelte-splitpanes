import{f as c,b as s,y as o,r as a,O as $}from"../chunks/external.DShmoqNC.js";import{E as S}from"../chunks/ExampleArea.CWssxdjn.js";import{S as b,P as n}from"../chunks/svelte-splitpanes.C6soIJh0.js";const x=!0,I=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));var w=a("<span>1</span> <p>Try grabbing to very bottom splitter, note how it stops on the bounderies of this panel</p>",1),T=a("<span>2</span>"),O=a("<span>3</span>"),z=a("<span>4</span>"),k=a("<!> <!> <!>",1),q=a("<span>5</span> <p>Try grabbing to very top splitter, note how it stops on the bounderies of this panel</p>",1),E=a("<!> <!> <!>",1);function L(h){b(h,{horizontal:!0,style:"height: 400px",pushOtherPanes:!1,children:(r,g)=>{var i=E(),j=c(i);n(j,{children:(p,P)=>{var t=w();$(2),s(p,t)},$$slots:{default:!0}});var m=o(j,2);n(m,{children:(p,P)=>{b(p,{children:(t,B)=>{var d=k(),u=c(d);n(u,{children:(l,f)=>{var e=T();s(l,e)},$$slots:{default:!0}});var v=o(u,2);n(v,{children:(l,f)=>{var e=O();s(l,e)},$$slots:{default:!0}});var y=o(v,2);n(y,{children:(l,f)=>{var e=z();s(l,e)},$$slots:{default:!0}}),s(t,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=o(m,2);n(_,{children:(p,P)=>{var t=q();$(2),s(p,t)},$$slots:{default:!0}}),s(r,i)},$$slots:{default:!0}})}const M=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" pushOtherPanes={false}>
  <Pane>
    <span>1</span>
    <p>Try grabbing to very bottom splitter, note how it stops on the bounderies of this panel</p>
  </Pane>
  <Pane>
    <Splitpanes>
      <Pane>
        <span>2</span>
      </Pane>
      <Pane>
        <span>3</span>
      </Pane>
      <Pane>
        <span>4</span>
      </Pane>
    </Splitpanes>
  </Pane>
  <Pane>
    <span>5</span>
    <p>Try grabbing to very top splitter, note how it stops on the bounderies of this panel</p>
  </Pane>
</Splitpanes>
`,A=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">pushOtherPanes</span>=<span class="hljs-string">{false}</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try grabbing to very bottom splitter, note how it stops on the bounderies of this panel<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try grabbing to very top splitter, note how it stops on the bounderies of this panel<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,C={code:M,highlightedHTML:A,component:L};var H=a("<h2>Locking layout by prevent pushing other panes</h2> <!>",1);function J(h){var r=H(),g=o(c(r),2);S(g,{example:C}),s(h,r)}export{J as component,I as universal};
