import{S as T,i as L,s as A,P as d,Q as b,R as S,n as v,o as P,U as z,a as y,f as I,j as m,g as o,e as j,b as _,I as q,K as H,X as k,d as E,Y as w,k as x}from"../chunks/external.DZLUqJ0z.js";import{E as N}from"../chunks/ExampleArea.BZas_dpI.js";import{S as Y,P as M}from"../chunks/svelte-splitpanes.ClPyOdCZ.js";const O=!0,ss=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function R(i){let s,e=`1
      <br/> <em class="specs">I have a min height of 20% &amp; max height of 70%</em>`;return{c(){s=j("span"),s.innerHTML=e},l(a){s=_(a,"SPAN",{"data-svelte-h":!0}),q(s)!=="svelte-79nsw0"&&(s.innerHTML=e)},m(a,t){m(a,s,t)},p:H,d(a){a&&o(s)}}}function B(i){let s,e="2";return{c(){s=j("span"),s.textContent=e},l(a){s=_(a,"SPAN",{"data-svelte-h":!0}),q(s)!=="svelte-1o38sr4"&&(s.textContent=e)},m(a,t){m(a,s,t)},p:H,d(a){a&&o(s)}}}function K(i){let s,e=`3
      <br/> <em class="specs">I have a max height of 70%</em>`;return{c(){s=j("span"),s.innerHTML=e},l(a){s=_(a,"SPAN",{"data-svelte-h":!0}),q(s)!=="svelte-19c7c8e"&&(s.innerHTML=e)},m(a,t){m(a,s,t)},p:H,d(a){a&&o(s)}}}function Q(i){let s,e,a,t,p,h;return s=new M({props:{minSize:20,maxSize:70,$$slots:{default:[R]},$$scope:{ctx:i}}}),a=new M({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),p=new M({props:{maxSize:70,$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){d(s.$$.fragment),e=y(),d(a.$$.fragment),t=y(),d(p.$$.fragment)},l(n){b(s.$$.fragment,n),e=I(n),b(a.$$.fragment,n),t=I(n),b(p.$$.fragment,n)},m(n,c){S(s,n,c),m(n,e,c),S(a,n,c),m(n,t,c),S(p,n,c),h=!0},p(n,c){const u={};c&1&&(u.$$scope={dirty:c,ctx:n}),s.$set(u);const $={};c&1&&($.$$scope={dirty:c,ctx:n}),a.$set($);const g={};c&1&&(g.$$scope={dirty:c,ctx:n}),p.$set(g)},i(n){h||(v(s.$$.fragment,n),v(a.$$.fragment,n),v(p.$$.fragment,n),h=!0)},o(n){P(s.$$.fragment,n),P(a.$$.fragment,n),P(p.$$.fragment,n),h=!1},d(n){n&&(o(e),o(t)),z(s,n),z(a,n),z(p,n)}}}function U(i){let s,e;return s=new Y({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){d(s.$$.fragment)},l(a){b(s.$$.fragment,a)},m(a,t){S(s,a,t),e=!0},p(a,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(v(s.$$.fragment,a),e=!0)},o(a){P(s.$$.fragment,a),e=!1},d(a){z(s,a)}}}class X extends T{constructor(s){super(),L(this,s,null,U,A,{})}}const D=`<script>
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
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,G={code:D,highlightedHTML:F,component:X};function J(i){let s,e="Horizontal layout, push other panes, min & max use, doubleclick",a,t,p,h,n,c="false",u,$,g,f,C;return f=new N({props:{example:G}}),{c(){s=j("h2"),s.textContent=e,a=y(),t=j("p"),p=k(`You can double click a splitter to maximize the next pane!
  `),h=j("br"),n=k(`
  If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute:
  dblClickSplitter=`),u=k(c),$=k("."),g=y(),d(f.$$.fragment)},l(l){s=_(l,"H2",{"data-svelte-h":!0}),q(s)!=="svelte-ar0m3p"&&(s.textContent=e),a=I(l),t=_(l,"P",{});var r=E(t);p=w(r,`You can double click a splitter to maximize the next pane!
  `),h=_(r,"BR",{}),n=w(r,`
  If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute:
  dblClickSplitter=`),u=w(r,c),$=w(r,"."),r.forEach(o),g=I(l),b(f.$$.fragment,l)},m(l,r){m(l,s,r),m(l,a,r),m(l,t,r),x(t,p),x(t,h),x(t,n),x(t,u),x(t,$),m(l,g,r),S(f,l,r),C=!0},p:H,i(l){C||(v(f.$$.fragment,l),C=!0)},o(l){P(f.$$.fragment,l),C=!1},d(l){l&&(o(s),o(a),o(t),o(g)),z(f,l)}}}class as extends T{constructor(s){super(),L(this,s,null,J,A,{})}}export{as as component,ss as universal};
