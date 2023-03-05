import{S as E,i as I,s as b,O as $,P as h,Q as g,n as u,o as j,R as _,a as x,f as S,j as f,g as i,e as d,J as z,b as v,d as y,K as w,I as A,k,U}from"../chunks/external.da5a27b8.js";import{E as C}from"../chunks/ExampleArea.8e072f23.js";import{S as H,P}from"../chunks/svelte-splitpanes.8e3f4076.js";function J(m){let s,p;return{c(){s=d("span"),p=z("I have a snap size of 10%"),this.h()},l(n){s=v(n,"SPAN",{style:!0});var e=y(s);p=w(e,"I have a snap size of 10%"),e.forEach(i),this.h()},h(){A(s,"font-size","20px")},m(n,e){f(n,s,e),k(s,p)},p:U,d(n){n&&i(s)}}}function K(m){let s,p,n,e,l,c;return s=new P({props:{snapSize:10,$$slots:{default:[J]},$$scope:{ctx:m}}}),n=new P({}),l=new P({}),{c(){$(s.$$.fragment),p=x(),$(n.$$.fragment),e=x(),$(l.$$.fragment)},l(a){h(s.$$.fragment,a),p=S(a),h(n.$$.fragment,a),e=S(a),h(l.$$.fragment,a)},m(a,r){g(s,a,r),f(a,p,r),g(n,a,r),f(a,e,r),g(l,a,r),c=!0},p(a,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:a}),s.$set(t)},i(a){c||(u(s.$$.fragment,a),u(n.$$.fragment,a),u(l.$$.fragment,a),c=!0)},o(a){j(s.$$.fragment,a),j(n.$$.fragment,a),j(l.$$.fragment,a),c=!1},d(a){_(s,a),a&&i(p),_(n,a),a&&i(e),_(l,a)}}}function L(m){let s,p;return s=new H({props:{style:"height: 400px",$$slots:{default:[K]},$$scope:{ctx:m}}}),{c(){$(s.$$.fragment)},l(n){h(s.$$.fragment,n)},m(n,e){g(s,n,e),p=!0},p(n,[e]){const l={};e&1&&(l.$$scope={dirty:e,ctx:n}),s.$set(l)},i(n){p||(u(s.$$.fragment,n),p=!0)},o(n){j(s.$$.fragment,n),p=!1},d(n){_(s,n)}}}class M extends E{constructor(s){super(),I(this,s,null,L,b,{})}}const N=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">snapSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 20px;&quot;</span>&gt;</span> I have a snap size of 10% <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>

	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,Q={code:N,highlightedHTML:O,component:M};function R(m){let s,p,n,e,l,c,a,r;return a=new C({props:{example:Q}}),{c(){s=d("h2"),p=z("Simple snap"),n=x(),e=d("p"),l=z("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),c=x(),$(a.$$.fragment)},l(t){s=v(t,"H2",{});var o=y(s);p=w(o,"Simple snap"),o.forEach(i),n=S(t),e=v(t,"P",{});var q=y(e);l=w(q,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),q.forEach(i),c=S(t),h(a.$$.fragment,t)},m(t,o){f(t,s,o),k(s,p),f(t,n,o),f(t,e,o),k(e,l),f(t,c,o),g(a,t,o),r=!0},p:U,i(t){r||(u(a.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),r=!1},d(t){t&&i(s),t&&i(n),t&&i(e),t&&i(c),_(a,t)}}}class F extends E{constructor(s){super(),I(this,s,null,R,b,{})}}export{F as default};
