import{S as q,i as E,s as M,O as $,P as g,Q as u,n as j,o as _,T as x,a as I,f as b,j as h,g as m,e as z,I as S,b as v,d as y,J as P,V as O,k as f,L as k}from"../chunks/external.768903b6.js";import{E as T}from"../chunks/ExampleArea.aad150a6.js";import{S as A,P as d}from"../chunks/svelte-splitpanes.87854b3a.js";const B=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"}));function C(o){let a,i,n,p,l,r;return{c(){a=z("span"),i=S("I have a snap size of 10%"),n=z("br"),p=S(`
			I have a min size of 10%`),l=z("br"),r=S(`
			I have a max size of 70%`),this.h()},l(s){a=v(s,"SPAN",{style:!0});var e=y(a);i=P(e,"I have a snap size of 10%"),n=v(e,"BR",{}),p=P(e,`
			I have a min size of 10%`),l=v(e,"BR",{}),r=P(e,`
			I have a max size of 70%`),e.forEach(m),this.h()},h(){O(a,"font-size","20px")},m(s,e){h(s,a,e),f(a,i),f(a,n),f(a,p),f(a,l),f(a,r)},p:k,d(s){s&&m(a)}}}function H(o){let a,i,n,p,l,r;return a=new d({}),n=new d({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[C]},$$scope:{ctx:o}}}),l=new d({}),{c(){$(a.$$.fragment),i=I(),$(n.$$.fragment),p=I(),$(l.$$.fragment)},l(s){g(a.$$.fragment,s),i=b(s),g(n.$$.fragment,s),p=b(s),g(l.$$.fragment,s)},m(s,e){u(a,s,e),h(s,i,e),u(n,s,e),h(s,p,e),u(l,s,e),r=!0},p(s,e){const t={};e&1&&(t.$$scope={dirty:e,ctx:s}),n.$set(t)},i(s){r||(j(a.$$.fragment,s),j(n.$$.fragment,s),j(l.$$.fragment,s),r=!0)},o(s){_(a.$$.fragment,s),_(n.$$.fragment,s),_(l.$$.fragment,s),r=!1},d(s){x(a,s),s&&m(i),x(n,s),s&&m(p),x(l,s)}}}function L(o){let a,i;return a=new A({props:{style:"height: 400px",$$slots:{default:[H]},$$scope:{ctx:o}}}),{c(){$(a.$$.fragment)},l(n){g(a.$$.fragment,n)},m(n,p){u(a,n,p),i=!0},p(n,[p]){const l={};p&1&&(l.$$scope={dirty:p,ctx:n}),a.$set(l)},i(n){i||(j(a.$$.fragment,n),i=!0)},o(n){_(a.$$.fragment,n),i=!1},d(n){x(a,n)}}}class R extends q{constructor(a){super(),E(this,a,null,L,M,{})}}const Y=`<script>
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
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,N={code:Y,highlightedHTML:J,component:R};function Q(o){let a,i,n,p,l,r,s,e;return s=new T({props:{example:N}}),{c(){a=z("h2"),i=S("Min & max with snap"),n=I(),p=z("p"),l=S("You can also snap to the panel maximum and minimum size."),r=I(),$(s.$$.fragment)},l(t){a=v(t,"H2",{});var c=y(a);i=P(c,"Min & max with snap"),c.forEach(m),n=b(t),p=v(t,"P",{});var w=y(p);l=P(w,"You can also snap to the panel maximum and minimum size."),w.forEach(m),r=b(t),g(s.$$.fragment,t)},m(t,c){h(t,a,c),f(a,i),h(t,n,c),h(t,p,c),f(p,l),h(t,r,c),u(s,t,c),e=!0},p:k,i(t){e||(j(s.$$.fragment,t),e=!0)},o(t){_(s.$$.fragment,t),e=!1},d(t){t&&m(a),t&&m(n),t&&m(p),t&&m(r),x(s,t)}}}class K extends q{constructor(a){super(),E(this,a,null,Q,M,{})}}export{K as component,G as universal};
