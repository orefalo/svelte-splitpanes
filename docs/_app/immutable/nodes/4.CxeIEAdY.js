import{f as o,J as r,S as m,t as u,k as l,B as d,v as n,q as i,C as S,I as P,U as y,N as x,W as $,V as T}from"../chunks/CtqsOppj.js";import{E as b}from"../chunks/nGus_LLE.js";import{S as H,P as C}from"../chunks/CNOt2vSN.js";import{B as v}from"../chunks/Caxl4JVu.js";const V=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));var q=o("<span></span>"),E=o("<!> <!> <!>",1);function M(p){let t=S(!1),a=S(!1);var c=E(),h=r(c);v(h,{$$events:{click:()=>{d(t,!n(t))}},children:(e,f)=>{x();var s=m();u(()=>$(s,n(t)?"Turn to Vertical":"Turn to Horizontal")),l(e,s)},$$slots:{default:!0}});var g=i(h,2);v(g,{$$events:{click:()=>{d(a,!n(a))}},children:(e,f)=>{x();var s=m();u(()=>$(s,n(a)?"Hide first splitter":"Show first Splitter")),l(e,s)},$$slots:{default:!0}});var _=i(g,2);H(_,{style:"height: 400px",get firstSplitter(){return n(a)},get horizontal(){return n(t)},children:(e,f)=>{var s=P(),z=r(s);y(z,0,()=>({length:3}),T,(w,J,B)=>{C(w,{minSize:5,children:(k,L)=>{var j=q();j.textContent=B+1,l(k,j)},$$slots:{default:!0}})}),l(e,s)},$$slots:{default:!0}}),l(p,c)}const O=`<script>
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
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,A={code:O,highlightedHTML:W,component:M};var I=o(`<h2>Change orientation & first splitter</h2> <p>When changing direction, all the panes current width or height will flip to adapt to the new
  layout.</p> <p>Showing the first splitter is an option which allows user to double click the splitter to maximize
  the next pane. <br/> The first splitter does not allow to resize the next pane.</p> <!>`,1);function K(p){var t=I(),a=i(r(t),6);b(a,{get example(){return A}}),l(p,t)}export{K as component,G as universal};
