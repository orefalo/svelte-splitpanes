import{S as P,i as S,s as v,O as o,P as m,Q as f,n as $,o as h,T as g,a as _,f as x,j as u,g as i,e as y,I as z,b as w,d as q,J as I,V as M,k as b,L as E}from"../chunks/external.f7ab61d0.js";import{E as k}from"../chunks/ExampleArea.af539383.js";import{S as O,P as j}from"../chunks/svelte-splitpanes.e4cd390e.js";const T=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function A(c){let s,p;return{c(){s=y("span"),p=z("I have a snap size of 10%"),this.h()},l(n){s=w(n,"SPAN",{style:!0});var t=q(s);p=I(t,"I have a snap size of 10%"),t.forEach(i),this.h()},h(){M(s,"font-size","20px")},m(n,t){u(n,s,t),b(s,p)},p:E,d(n){n&&i(s)}}}function C(c){let s,p,n,t,l,e;return s=new j({}),n=new j({props:{snapSize:10,$$slots:{default:[A]},$$scope:{ctx:c}}}),l=new j({}),{c(){o(s.$$.fragment),p=_(),o(n.$$.fragment),t=_(),o(l.$$.fragment)},l(a){m(s.$$.fragment,a),p=x(a),m(n.$$.fragment,a),t=x(a),m(l.$$.fragment,a)},m(a,r){f(s,a,r),u(a,p,r),f(n,a,r),u(a,t,r),f(l,a,r),e=!0},p(a,r){const d={};r&1&&(d.$$scope={dirty:r,ctx:a}),n.$set(d)},i(a){e||($(s.$$.fragment,a),$(n.$$.fragment,a),$(l.$$.fragment,a),e=!0)},o(a){h(s.$$.fragment,a),h(n.$$.fragment,a),h(l.$$.fragment,a),e=!1},d(a){g(s,a),a&&i(p),g(n,a),a&&i(t),g(l,a)}}}function H(c){let s,p;return s=new O({props:{style:"height: 400px",$$slots:{default:[C]},$$scope:{ctx:c}}}),{c(){o(s.$$.fragment)},l(n){m(s.$$.fragment,n)},m(n,t){f(s,n,t),p=!0},p(n,[t]){const l={};t&1&&(l.$$scope={dirty:t,ctx:n}),s.$set(l)},i(n){p||($(s.$$.fragment,n),p=!0)},o(n){h(s.$$.fragment,n),p=!1},d(n){g(s,n)}}}class L extends P{constructor(s){super(),S(this,s,null,H,v,{})}}const J=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>
`,N=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 20px;&quot;</span>&gt;</span> I have a snap size of 10% <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,Q={code:J,highlightedHTML:N,component:L};function V(c){let s,p,n,t,l;return t=new k({props:{example:Q}}),{c(){s=y("h2"),p=z("Middle snap"),n=_(),o(t.$$.fragment)},l(e){s=w(e,"H2",{});var a=q(s);p=I(a,"Middle snap"),a.forEach(i),n=x(e),m(t.$$.fragment,e)},m(e,a){u(e,s,a),b(s,p),u(e,n,a),f(t,e,a),l=!0},p:E,i(e){l||($(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){e&&i(s),e&&i(n),g(t,e)}}}class K extends P{constructor(s){super(),S(this,s,null,V,v,{})}}export{K as component,G as universal};
