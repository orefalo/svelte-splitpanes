import{m as o,f as r,U as j,t as u,b as l,y as d,A as n,u as i,z as S,c as y,X as P,O as x,Z as $,Y as T}from"../chunks/BDFw_4Th.js";import{E as b}from"../chunks/3zRDbrM3.js";import{S as H,P as C}from"../chunks/BQk4F1ji.js";import{B as v}from"../chunks/BN5Vukhh.js";const O=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));var V=o("<span></span>"),q=o("<!> <!> <!>",1);function A(p){let t=S(!1),a=S(!1);var c=q(),h=r(c);v(h,{$$events:{click:()=>{d(t,!n(t))}},children:(e,f)=>{x();var s=j();u(()=>$(s,n(t)?"Turn to Vertical":"Turn to Horizontal")),l(e,s)},$$slots:{default:!0}});var g=i(h,2);v(g,{$$events:{click:()=>{d(a,!n(a))}},children:(e,f)=>{x();var s=j();u(()=>$(s,n(a)?"Hide first splitter":"Show first Splitter")),l(e,s)},$$slots:{default:!0}});var _=i(g,2);H(_,{style:"height: 400px",get firstSplitter(){return n(a)},get horizontal(){return n(t)},children:(e,f)=>{var s=y(),z=r(s);P(z,0,()=>({length:3}),T,(w,W,B)=>{C(w,{minSize:5,children:(k,X)=>{var m=V();m.textContent=B+1,l(k,m)},$$slots:{default:!0}})}),l(e,s)},$$slots:{default:!0}}),l(p,c)}const E=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  let horizontal = false;
  let firstSplitter = false;
<\/script>

<Button
  on:click={() => {
    horizontal = !horizontal;
  }}>
  {horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}
</Button>
<Button
  on:click={() => {
    firstSplitter = !firstSplitter;
  }}>
  {firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}
</Button>
<Splitpanes style="height: 400px" {firstSplitter} {horizontal}>
  {#each { length: 3 } as _, i}
    <Pane minSize={5}>
      <span>{i + 1}</span>
    </Pane>
  {/each}
</Splitpanes>
`,M=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

  <span class="hljs-keyword">let</span> horizontal = <span class="hljs-literal">false</span>;
  <span class="hljs-keyword">let</span> firstSplitter = <span class="hljs-literal">false</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    horizontal = !horizontal;
  }}&gt;
  {horizontal ? &#x27;Turn to Vertical&#x27; : &#x27;Turn to Horizontal&#x27;}
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    firstSplitter = !firstSplitter;
  }}&gt;
  {firstSplitter ? &#x27;Hide first splitter&#x27; : &#x27;Show first Splitter&#x27;}
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> {<span class="hljs-attr">firstSplitter</span>} {<span class="hljs-attr">horizontal</span>}&gt;</span>
  {#each { length: 3 } as _, i}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,L={code:E,highlightedHTML:M,component:A};var U=o(`<h2>Change orientation & first splitter</h2> <p>When changing direction, all the panes current width or height will flip to adapt to the new
  layout.</p> <p>Showing the first splitter is an option which allows user to double click the splitter to maximize
  the next pane. <br/> The first splitter does not allow to resize the next pane.</p> <!>`,1);function I(p){var t=U(),a=i(r(t),6);b(a,{get example(){return L}}),l(p,t)}export{I as component,G as universal};
