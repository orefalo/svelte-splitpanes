import{S as q,i as E,s as I,O as $,P as h,Q as g,n as u,o as j,T as _,a as S,f as x,j as f,g as i,e as d,I as v,b as z,d as y,J as w,V as T,k as b,L as O}from"../chunks/external.abc2cc24.js";import{E as A}from"../chunks/ExampleArea.41bfe997.js";import{S as C,P}from"../chunks/svelte-splitpanes.7756a9a9.js";const H=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function L(m){let s,p;return{c(){s=d("span"),p=v("I have a snap size of 10%"),this.h()},l(n){s=z(n,"SPAN",{style:!0});var e=y(s);p=w(e,"I have a snap size of 10%"),e.forEach(i),this.h()},h(){T(s,"font-size","20px")},m(n,e){f(n,s,e),b(s,p)},p:O,d(n){n&&i(s)}}}function M(m){let s,p,n,e,l,c;return s=new P({props:{snapSize:10,$$slots:{default:[L]},$$scope:{ctx:m}}}),n=new P({}),l=new P({}),{c(){$(s.$$.fragment),p=S(),$(n.$$.fragment),e=S(),$(l.$$.fragment)},l(a){h(s.$$.fragment,a),p=x(a),h(n.$$.fragment,a),e=x(a),h(l.$$.fragment,a)},m(a,r){g(s,a,r),f(a,p,r),g(n,a,r),f(a,e,r),g(l,a,r),c=!0},p(a,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:a}),s.$set(t)},i(a){c||(u(s.$$.fragment,a),u(n.$$.fragment,a),u(l.$$.fragment,a),c=!0)},o(a){j(s.$$.fragment,a),j(n.$$.fragment,a),j(l.$$.fragment,a),c=!1},d(a){_(s,a),a&&i(p),_(n,a),a&&i(e),_(l,a)}}}function U(m){let s,p;return s=new C({props:{style:"height: 400px",$$slots:{default:[M]},$$scope:{ctx:m}}}),{c(){$(s.$$.fragment)},l(n){h(s.$$.fragment,n)},m(n,e){g(s,n,e),p=!0},p(n,[e]){const l={};e&1&&(l.$$scope={dirty:e,ctx:n}),s.$set(l)},i(n){p||(u(s.$$.fragment,n),p=!0)},o(n){j(s.$$.fragment,n),p=!1},d(n){_(s,n)}}}class J extends q{constructor(s){super(),E(this,s,null,U,I,{})}}const N=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>
`,Q=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 20px;&quot;</span>&gt;</span> I have a snap size of 10% <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,V={code:N,highlightedHTML:Q,component:J};function B(m){let s,p,n,e,l,c,a,r;return a=new A({props:{example:V}}),{c(){s=d("h2"),p=v("Simple snap"),n=S(),e=d("p"),l=v("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),c=S(),$(a.$$.fragment)},l(t){s=z(t,"H2",{});var o=y(s);p=w(o,"Simple snap"),o.forEach(i),n=x(t),e=z(t,"P",{});var k=y(e);l=w(k,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),k.forEach(i),c=x(t),h(a.$$.fragment,t)},m(t,o){f(t,s,o),b(s,p),f(t,n,o),f(t,e,o),b(e,l),f(t,c,o),g(a,t,o),r=!0},p:O,i(t){r||(u(a.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),r=!1},d(t){t&&i(s),t&&i(n),t&&i(e),t&&i(c),_(a,t)}}}class R extends q{constructor(s){super(),E(this,s,null,B,I,{})}}export{R as component,K as universal};
