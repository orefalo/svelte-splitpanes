import{f as t,I as o,Z as x,v as $,y as p,q as c,k as l,x as y,t as P,Y as S,_ as w,r as b,A as z}from"../chunks/D9fOklKB.js";import{E as k}from"../chunks/CMw-sgcZ.js";import{S as A,P as j}from"../chunks/BeMtSZS_.js";const C=!0,F=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));var M=t("<span> </span>"),R=t("<span>Auto-Calculated</span>"),q=t("<!> <!>",1),T=t("<!> <!>",1);function E(r){let s=y([50]);var e=T(),h=o(e);x(h,{float:!0,min:0,step:.01,max:100,get values(){return p(s)},set values(i){$(s,i)},$$legacy:!0});var u=c(h,2);A(u,{style:"height: 400px",children:(i,Y)=>{var g=q(),m=o(g);j(m,{get size(){return p(s)[0]},set size(a){w(s,p(s)[0]=a)},children:(a,v)=>{var n=M(),f=b(n);z(n),P(_=>S(f,`${_??""}%`),[()=>Math.round(p(s)[0])]),l(a,n)},$$slots:{default:!0},$$legacy:!0});var d=c(m,2);j(d,{children:(a,v)=>{var n=R();l(a,n)},$$slots:{default:!0}}),l(i,g)},$$slots:{default:!0}}),l(r,e)}const O=`<script>
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
`,H=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,I={code:O,highlightedHTML:H,component:E};var L=t(`<h2>Programmatic resizing</h2> <p>This example shows the programmatic way of resizing panes with two-way data biding. And how it
  works both ways. <br/> Changing programmatically the size one pane, will shrink/expand the other panes that have no specified
  size, as you can see in the example.</p> <!>`,1);function G(r){var s=L(),e=c(o(s),4);k(e,{get example(){return I}}),l(r,s)}export{G as component,F as universal};
