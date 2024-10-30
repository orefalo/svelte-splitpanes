import{f as c,X as _,x as p,v as x,y as o,Y as $,t as y,b as l,r as t,E as P,A as S,C as b,W as w}from"../chunks/external.BgVIu8vv.js";import{E as z}from"../chunks/ExampleArea.Bw2GHDRR.js";import{S as k,P as j}from"../chunks/svelte-splitpanes.Da96VcQc.js";const A=!0,D=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"}));var C=t("<span> </span>"),M=t("<span>Auto-Calculated</span>"),R=t("<!> <!>",1),E=t("<!> <!>",1);function T(r){let s=P([50]);var e=E(),h=c(e);_(h,{float:!0,get values(){return p(s)},set values(i){x(s,i)},min:0,step:.01,max:100,$$legacy:!0});var d=o(h,2);k(d,{style:"height: 400px",children:(i,W)=>{var g=R(),m=c(g);j(m,{get size(){return p(s)[0]},set size(a){$(s,p(s)[0]=a)},children:(a,v)=>{var n=C(),f=S(n);y(()=>w(f,`${Math.round(p(s)[0])??""}%`)),b(n),l(a,n)},$$slots:{default:!0},$$legacy:!0});var u=o(m,2);j(u,{children:(a,v)=>{var n=M();l(a,n)},$$slots:{default:!0}}),l(i,g)},$$slots:{default:!0}}),l(r,e)}const q=`<script>
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
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,H={code:q,highlightedHTML:O,component:T};var L=t(`<h2>Programmatic resizing</h2> <p>This example shows the programmatic way of resizing panes with two-way data biding. And how it
  works both ways. <br> Changing programmatically the size one pane, will shrink/expand the other panes that have no specified
  size, as you can see in the example.</p> <!>`,1);function F(r){var s=L(),e=o(c(s),4);z(e,{example:H}),l(r,s)}export{F as component,D as universal};
