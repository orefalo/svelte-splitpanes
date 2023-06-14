import{S as T,i as E,s as I,O as h,P as g,Q as $,n as u,o as j,T as _,a as d,f as S,j as m,g as i,e as y,I as x,b as P,d as w,J as z,k as b,L as q}from"../chunks/external.c3018815.js";import{E as O}from"../chunks/ExampleArea.6fa185e2.js";import{S as C,P as v}from"../chunks/svelte-splitpanes.ade26b14.js";const H=!0,N=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function L(c){let s,p;return{c(){s=y("p"),p=x("Try shrinking my size, not how I snap below 10% size")},l(a){s=P(a,"P",{});var t=w(s);p=z(t,"Try shrinking my size, not how I snap below 10% size"),t.forEach(i)},m(a,t){m(a,s,t),b(s,p)},p:q,d(a){a&&i(s)}}}function M(c){let s,p,a,t;return s=new v({props:{snapSize:10,$$slots:{default:[L]},$$scope:{ctx:c}}}),a=new v({}),{c(){h(s.$$.fragment),p=d(),h(a.$$.fragment)},l(n){g(s.$$.fragment,n),p=S(n),g(a.$$.fragment,n)},m(n,l){$(s,n,l),m(n,p,l),$(a,n,l),t=!0},p(n,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:n}),s.$set(r)},i(n){t||(u(s.$$.fragment,n),u(a.$$.fragment,n),t=!0)},o(n){j(s.$$.fragment,n),j(a.$$.fragment,n),t=!1},d(n){_(s,n),n&&i(p),_(a,n)}}}function U(c){let s,p;return s=new C({props:{style:"height: 400px",$$slots:{default:[M]},$$scope:{ctx:c}}}),{c(){h(s.$$.fragment)},l(a){g(s.$$.fragment,a)},m(a,t){$(s,a,t),p=!0},p(a,[t]){const n={};t&1&&(n.$$scope={dirty:t,ctx:a}),s.$set(n)},i(a){p||(u(s.$$.fragment,a),p=!0)},o(a){j(s.$$.fragment,a),p=!1},d(a){_(s,a)}}}class A extends T{constructor(s){super(),E(this,s,null,U,I,{})}}const J=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<p>Try shrinking my size, not how I snap below 10% size</p>
	</Pane>

	<Pane />
</Splitpanes>
`,Q=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, not how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,B={code:J,highlightedHTML:Q,component:A};function D(c){let s,p,a,t,n,l,r,f;return r=new O({props:{example:B}}),{c(){s=y("h2"),p=x("Simple snap"),a=d(),t=y("p"),n=x("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),l=d(),h(r.$$.fragment)},l(e){s=P(e,"H2",{});var o=w(s);p=z(o,"Simple snap"),o.forEach(i),a=S(e),t=P(e,"P",{});var k=w(t);n=z(k,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),k.forEach(i),l=S(e),g(r.$$.fragment,e)},m(e,o){m(e,s,o),b(s,p),m(e,a,o),m(e,t,o),b(t,n),m(e,l,o),$(r,e,o),f=!0},p:q,i(e){f||(u(r.$$.fragment,e),f=!0)},o(e){j(r.$$.fragment,e),f=!1},d(e){e&&i(s),e&&i(a),e&&i(t),e&&i(l),_(r,e)}}}class R extends T{constructor(s){super(),E(this,s,null,D,I,{})}}export{R as component,N as universal};
