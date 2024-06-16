import{S as d,i as S,s as w,P as c,Q as o,R as m,n as $,o as g,U as f,a as _,f as x,j as h,g as u,e as y,b as v,I as z,K as C}from"../chunks/external.BBouj8A7.js";import{E as b}from"../chunks/ExampleArea.C7JLadFk.js";import{S as k,P as j}from"../chunks/svelte-splitpanes.CQ6eMihq.js";const T=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function I(i){let s,p="Try shrinking my size, note how I snap below 10% size";return{c(){s=y("p"),s.textContent=p},l(n){s=v(n,"P",{"data-svelte-h":!0}),z(s)!=="svelte-1uahdnm"&&(s.textContent=p)},m(n,a){h(n,s,a)},p:C,d(n){n&&u(s)}}}function q(i){let s,p,n,a,l,e;return s=new j({}),n=new j({props:{snapSize:10,$$slots:{default:[I]},$$scope:{ctx:i}}}),l=new j({}),{c(){c(s.$$.fragment),p=_(),c(n.$$.fragment),a=_(),c(l.$$.fragment)},l(t){o(s.$$.fragment,t),p=x(t),o(n.$$.fragment,t),a=x(t),o(l.$$.fragment,t)},m(t,r){m(s,t,r),h(t,p,r),m(n,t,r),h(t,a,r),m(l,t,r),e=!0},p(t,r){const P={};r&1&&(P.$$scope={dirty:r,ctx:t}),n.$set(P)},i(t){e||($(s.$$.fragment,t),$(n.$$.fragment,t),$(l.$$.fragment,t),e=!0)},o(t){g(s.$$.fragment,t),g(n.$$.fragment,t),g(l.$$.fragment,t),e=!1},d(t){t&&(u(p),u(a)),f(s,t),f(n,t),f(l,t)}}}function M(i){let s,p;return s=new k({props:{style:"height: 400px",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){c(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,a){m(s,n,a),p=!0},p(n,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:n}),s.$set(l)},i(n){p||($(s.$$.fragment,n),p=!0)},o(n){g(s.$$.fragment,n),p=!1},d(n){f(s,n)}}}class E extends d{constructor(s){super(),S(this,s,null,M,w,{})}}const H=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<p>Try shrinking my size, note how I snap below 10% size</p>
	</Pane>

	<Pane />
</Splitpanes>
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try shrinking my size, note how I snap below 10% size<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,A={code:H,highlightedHTML:O,component:E};function K(i){let s,p="Middle snap",n,a,l;return a=new b({props:{example:A}}),{c(){s=y("h2"),s.textContent=p,n=_(),c(a.$$.fragment)},l(e){s=v(e,"H2",{"data-svelte-h":!0}),z(s)!=="svelte-1wzni3v"&&(s.textContent=p),n=x(e),o(a.$$.fragment,e)},m(e,t){h(e,s,t),h(e,n,t),m(a,e,t),l=!0},p:C,i(e){l||($(a.$$.fragment,e),l=!0)},o(e){g(a.$$.fragment,e),l=!1},d(e){e&&(u(s),u(n)),f(a,e)}}}class B extends d{constructor(s){super(),S(this,s,null,K,w,{})}}export{B as component,U as universal};
