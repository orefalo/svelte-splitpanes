import{S as P,i as w,s as x,O as o,P as m,Q as $,n as f,o as g,T as h,a as _,f as d,j as u,g as c,e as S,I as z,b,d as v,J as k,k as T,L as I}from"../chunks/external.c3018815.js";import{E}from"../chunks/ExampleArea.6fa185e2.js";import{S as M,P as j}from"../chunks/svelte-splitpanes.ade26b14.js";const q=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));function O(i){let s,p;return{c(){s=S("p"),p=z("Try shrinking my size, not how I snap below 10% size")},l(a){s=b(a,"P",{});var t=v(s);p=k(t,"Try shrinking my size, not how I snap below 10% size"),t.forEach(c)},m(a,t){u(a,s,t),T(s,p)},p:I,d(a){a&&c(s)}}}function C(i){let s,p,a,t,l,e;return s=new j({}),a=new j({props:{snapSize:10,$$slots:{default:[O]},$$scope:{ctx:i}}}),l=new j({}),{c(){o(s.$$.fragment),p=_(),o(a.$$.fragment),t=_(),o(l.$$.fragment)},l(n){m(s.$$.fragment,n),p=d(n),m(a.$$.fragment,n),t=d(n),m(l.$$.fragment,n)},m(n,r){$(s,n,r),u(n,p,r),$(a,n,r),u(n,t,r),$(l,n,r),e=!0},p(n,r){const y={};r&1&&(y.$$scope={dirty:r,ctx:n}),a.$set(y)},i(n){e||(f(s.$$.fragment,n),f(a.$$.fragment,n),f(l.$$.fragment,n),e=!0)},o(n){g(s.$$.fragment,n),g(a.$$.fragment,n),g(l.$$.fragment,n),e=!1},d(n){h(s,n),n&&c(p),h(a,n),n&&c(t),h(l,n)}}}function H(i){let s,p;return s=new M({props:{style:"height: 400px",$$slots:{default:[C]},$$scope:{ctx:i}}}),{c(){o(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,t){$(s,a,t),p=!0},p(a,[t]){const l={};t&1&&(l.$$scope={dirty:t,ctx:a}),s.$set(l)},i(a){p||(f(s.$$.fragment,a),p=!0)},o(a){g(s.$$.fragment,a),p=!1},d(a){h(s,a)}}}class L extends P{constructor(s){super(),w(this,s,null,H,x,{})}}const A=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<p>Try shrinking my size, not how I snap below 10% size</p>
	</Pane>

	<Pane />
</Splitpanes>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, not how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,Q={code:A,highlightedHTML:J,component:L};function B(i){let s,p,a,t,l;return t=new E({props:{example:Q}}),{c(){s=S("h2"),p=z("Middle snap"),a=_(),o(t.$$.fragment)},l(e){s=b(e,"H2",{});var n=v(s);p=k(n,"Middle snap"),n.forEach(c),a=d(e),m(t.$$.fragment,e)},m(e,n){u(e,s,n),T(s,p),u(e,a,n),$(t,e,n),l=!0},p:I,i(e){l||(f(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){e&&c(s),e&&c(a),h(t,e)}}}class N extends P{constructor(s){super(),w(this,s,null,B,x,{})}}export{N as component,K as universal};
