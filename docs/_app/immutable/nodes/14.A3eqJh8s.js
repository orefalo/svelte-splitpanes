import{S as y,i as b,s as I,P as h,Q as g,R as $,n as u,o as j,U as x,a as _,f as z,j as c,g as o,e as S,b as P,I as d,W as w,K as C}from"../chunks/external.BVU14SuU.js";import{E as q}from"../chunks/ExampleArea.hE5zviRz.js";import{S as M,P as v}from"../chunks/svelte-splitpanes.DbPk6hiF.js";const H=!0,W=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function T(m){let s,l=`I have a snap size of 10%
      <br/>
      I have a min size of 10%
      <br/>
      I have a max size of 70%`;return{c(){s=S("span"),s.innerHTML=l,this.h()},l(n){s=P(n,"SPAN",{style:!0,"data-svelte-h":!0}),d(s)!=="svelte-1fmzfhe"&&(s.innerHTML=l),this.h()},h(){w(s,"font-size","20px")},m(n,e){c(n,s,e)},p:C,d(n){n&&o(s)}}}function L(m){let s,l,n,e,p,i;return s=new v({}),n=new v({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[T]},$$scope:{ctx:m}}}),p=new v({}),{c(){h(s.$$.fragment),l=_(),h(n.$$.fragment),e=_(),h(p.$$.fragment)},l(a){g(s.$$.fragment,a),l=z(a),g(n.$$.fragment,a),e=z(a),g(p.$$.fragment,a)},m(a,r){$(s,a,r),c(a,l,r),$(n,a,r),c(a,e,r),$(p,a,r),i=!0},p(a,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:a}),n.$set(t)},i(a){i||(u(s.$$.fragment,a),u(n.$$.fragment,a),u(p.$$.fragment,a),i=!0)},o(a){j(s.$$.fragment,a),j(n.$$.fragment,a),j(p.$$.fragment,a),i=!1},d(a){a&&(o(l),o(e)),x(s,a),x(n,a),x(p,a)}}}function k(m){let s,l;return s=new M({props:{style:"height: 400px",$$slots:{default:[L]},$$scope:{ctx:m}}}),{c(){h(s.$$.fragment)},l(n){g(s.$$.fragment,n)},m(n,e){$(s,n,e),l=!0},p(n,[e]){const p={};e&1&&(p.$$scope={dirty:e,ctx:n}),s.$set(p)},i(n){l||(u(s.$$.fragment,n),l=!0)},o(n){j(s.$$.fragment,n),l=!1},d(n){x(s,n)}}}class A extends y{constructor(s){super(),b(this,s,null,k,I,{})}}const E=`<script>
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
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,K={code:E,highlightedHTML:O,component:A};function N(m){let s,l="Min & max with snap",n,e,p="You can also snap to the panel maximum and minimum size.",i,a,r;return a=new q({props:{example:K}}),{c(){s=S("h2"),s.textContent=l,n=_(),e=S("p"),e.textContent=p,i=_(),h(a.$$.fragment)},l(t){s=P(t,"H2",{"data-svelte-h":!0}),d(s)!=="svelte-ruxa3y"&&(s.textContent=l),n=z(t),e=P(t,"P",{"data-svelte-h":!0}),d(e)!=="svelte-ublp6i"&&(e.textContent=p),i=z(t),g(a.$$.fragment,t)},m(t,f){c(t,s,f),c(t,n,f),c(t,e,f),c(t,i,f),$(a,t,f),r=!0},p:C,i(t){r||(u(a.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),r=!1},d(t){t&&(o(s),o(n),o(e),o(i)),x(a,t)}}}class Y extends y{constructor(s){super(),b(this,s,null,N,I,{})}}export{Y as component,W as universal};
