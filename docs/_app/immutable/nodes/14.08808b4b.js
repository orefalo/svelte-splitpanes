import{S as b,i as d,s as I,P as h,Q as g,R as $,n as u,o as j,U as x,a as _,f as z,j as m,g as o,e as S,b as P,I as y,W as w,K as C}from"../chunks/external.8baa82f9.js";import{E as q}from"../chunks/ExampleArea.6afffe12.js";import{S as M,P as v}from"../chunks/svelte-splitpanes.7fec58cd.js";const H=!0,W=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function T(c){let s,l=`I have a snap size of 10%<br/>
			I have a min size of 10%<br/>
			I have a max size of 70%`;return{c(){s=S("span"),s.innerHTML=l,this.h()},l(t){s=P(t,"SPAN",{style:!0,"data-svelte-h":!0}),y(s)!=="svelte-1yrsfb3"&&(s.innerHTML=l),this.h()},h(){w(s,"font-size","20px")},m(t,e){m(t,s,e)},p:C,d(t){t&&o(s)}}}function L(c){let s,l,t,e,p,i;return s=new v({}),t=new v({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[T]},$$scope:{ctx:c}}}),p=new v({}),{c(){h(s.$$.fragment),l=_(),h(t.$$.fragment),e=_(),h(p.$$.fragment)},l(a){g(s.$$.fragment,a),l=z(a),g(t.$$.fragment,a),e=z(a),g(p.$$.fragment,a)},m(a,r){$(s,a,r),m(a,l,r),$(t,a,r),m(a,e,r),$(p,a,r),i=!0},p(a,r){const n={};r&1&&(n.$$scope={dirty:r,ctx:a}),t.$set(n)},i(a){i||(u(s.$$.fragment,a),u(t.$$.fragment,a),u(p.$$.fragment,a),i=!0)},o(a){j(s.$$.fragment,a),j(t.$$.fragment,a),j(p.$$.fragment,a),i=!1},d(a){a&&(o(l),o(e)),x(s,a),x(t,a),x(p,a)}}}function k(c){let s,l;return s=new M({props:{style:"height: 400px",$$slots:{default:[L]},$$scope:{ctx:c}}}),{c(){h(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,e){$(s,t,e),l=!0},p(t,[e]){const p={};e&1&&(p.$$scope={dirty:e,ctx:t}),s.$set(p)},i(t){l||(u(s.$$.fragment,t),l=!0)},o(t){j(s.$$.fragment,t),l=!1},d(t){x(s,t)}}}class A extends b{constructor(s){super(),d(this,s,null,k,I,{})}}const E=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10} minSize={10} maxSize={70}>
		<span style="font-size: 20px;">
			I have a snap size of 10%<br />
			I have a min size of 10%<br />
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
			I have a snap size of 10%<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			I have a min size of 10%<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			I have a max size of 70%
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,K={code:E,highlightedHTML:O,component:A};function N(c){let s,l="Min & max with snap",t,e,p="You can also snap to the panel maximum and minimum size.",i,a,r;return a=new q({props:{example:K}}),{c(){s=S("h2"),s.textContent=l,t=_(),e=S("p"),e.textContent=p,i=_(),h(a.$$.fragment)},l(n){s=P(n,"H2",{"data-svelte-h":!0}),y(s)!=="svelte-ruxa3y"&&(s.textContent=l),t=z(n),e=P(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-ublp6i"&&(e.textContent=p),i=z(n),g(a.$$.fragment,n)},m(n,f){m(n,s,f),m(n,t,f),m(n,e,f),m(n,i,f),$(a,n,f),r=!0},p:C,i(n){r||(u(a.$$.fragment,n),r=!0)},o(n){j(a.$$.fragment,n),r=!1},d(n){n&&(o(s),o(t),o(e),o(i)),x(a,n)}}}class Y extends b{constructor(s){super(),d(this,s,null,N,I,{})}}export{Y as component,W as universal};
