import{f as e,J as c,X as x,B as $,v as l,q as o,k as t,C as y,t as P,u as S,R as w,W as b,Y as k,r as z,E as C}from"../chunks/C1nF5lnu.js";import{E as R}from"../chunks/C1nUHx1m.js";import{S as A,P as j}from"../chunks/BBnGXyr3.js";const M=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:M},Symbol.toStringTag,{value:"Module"}));var q=e("<span> </span>"),E=e("<span>Auto-Calculated</span>"),T=e("<!> <!>",1),O=e("<!> <!>",1);function B(r){let s=y([50]);var p=O(),h=c(p);x(h,{float:!0,min:0,step:.01,max:100,get values(){return l(s)},set values(i){$(s,i)},$$legacy:!0});var u=o(h,2);A(u,{style:"height: 400px",children:(i,X)=>{var g=T(),m=c(g);j(m,{get size(){return l(s)[0]},set size(a){k(s,l(s)[0]=a)},children:(a,v)=>{var n=q(),f=z(n);C(n),P(_=>b(f,`${_??""}%`),[()=>(l(s),w(()=>Math.round(l(s)[0])))],S),t(a,n)},$$slots:{default:!0},$$legacy:!0});var d=o(m,2);j(d,{children:(a,v)=>{var n=E();t(a,n)},$$slots:{default:!0}}),t(i,g)},$$slots:{default:!0}}),t(r,p)}const H=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import RangeSlider from 'svelte-range-slider-pips';

  let value = [50];
<\/script>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes style="height: 400px">
  <Pane bind:size={value[0]}>
    <span>{Math.round(value[0])}%</span>
  </Pane>
  <Pane>
    <span>Auto-Calculated</span>
  </Pane>
</Splitpanes>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">RangeSlider</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-range-slider-pips&#x27;</span>;

  <span class="hljs-keyword">let</span> value = [<span class="hljs-number">50</span>];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">RangeSlider</span> <span class="hljs-attr">float</span> <span class="hljs-attr">bind:values</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">min</span>=<span class="hljs-string">{0}</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{0.01}</span> <span class="hljs-attr">max</span>=<span class="hljs-string">{100}</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">bind:size</span>=<span class="hljs-string">{value[0]}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{Math.round(value[0])}%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Auto-Calculated<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,L={code:H,highlightedHTML:J,component:B};var W=e(`<h2>Programmatic resizing</h2> <p>This example shows the programmatic way of resizing panes with two-way data biding. And how it
  works both ways. <br/> Changing programmatically the size one pane, will shrink/expand the other panes that have no specified
  size, as you can see in the example.</p> <!>`,1);function I(r){var s=W(),p=o(c(s),4);R(p,{get example(){return L}}),t(r,s)}export{I as component,G as universal};
