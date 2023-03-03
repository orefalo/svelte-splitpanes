import{S as q,i as E,s as k,O as $,P as g,Q as u,n as j,o as x,R as _,a as I,f as d,j as h,g as m,e as z,J as S,b as v,d as b,K as P,I as R,k as f,U as M}from"../chunks/external.9901bcda.js";import{E as A}from"../chunks/ExampleArea.15545fbd.js";import{S as B,P as y}from"../chunks/svelte-splitpanes.0343ee0d.js";function C(o){let a,i,n,p,l,r;return{c(){a=z("span"),i=S("I have a snap size of 10%"),n=z("br"),p=S(`
			I have a min size of 10%`),l=z("br"),r=S(`
			I have a max size of 70%`),this.h()},l(s){a=v(s,"SPAN",{style:!0});var e=b(a);i=P(e,"I have a snap size of 10%"),n=v(e,"BR",{}),p=P(e,`
			I have a min size of 10%`),l=v(e,"BR",{}),r=P(e,`
			I have a max size of 70%`),e.forEach(m),this.h()},h(){R(a,"font-size","20px")},m(s,e){h(s,a,e),f(a,i),f(a,n),f(a,p),f(a,l),f(a,r)},p:M,d(s){s&&m(a)}}}function H(o){let a,i,n,p,l,r;return a=new y({}),n=new y({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[C]},$$scope:{ctx:o}}}),l=new y({}),{c(){$(a.$$.fragment),i=I(),$(n.$$.fragment),p=I(),$(l.$$.fragment)},l(s){g(a.$$.fragment,s),i=d(s),g(n.$$.fragment,s),p=d(s),g(l.$$.fragment,s)},m(s,e){u(a,s,e),h(s,i,e),u(n,s,e),h(s,p,e),u(l,s,e),r=!0},p(s,e){const t={};e&1&&(t.$$scope={dirty:e,ctx:s}),n.$set(t)},i(s){r||(j(a.$$.fragment,s),j(n.$$.fragment,s),j(l.$$.fragment,s),r=!0)},o(s){x(a.$$.fragment,s),x(n.$$.fragment,s),x(l.$$.fragment,s),r=!1},d(s){_(a,s),s&&m(i),_(n,s),s&&m(p),_(l,s)}}}function Y(o){let a,i;return a=new B({props:{style:"height: 400px",$$slots:{default:[H]},$$scope:{ctx:o}}}),{c(){$(a.$$.fragment)},l(n){g(a.$$.fragment,n)},m(n,p){u(a,n,p),i=!0},p(n,[p]){const l={};p&1&&(l.$$scope={dirty:p,ctx:n}),a.$set(l)},i(n){i||(j(a.$$.fragment,n),i=!0)},o(n){x(a.$$.fragment,n),i=!1},d(n){_(a,n)}}}class J extends q{constructor(a){super(),E(this,a,null,Y,k,{})}}const K=`<script>
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
`,L=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,N={code:K,highlightedHTML:L,component:J};function O(o){let a,i,n,p,l,r,s,e;return s=new A({props:{example:N}}),{c(){a=z("h2"),i=S("Min & max with snap"),n=I(),p=z("p"),l=S("You can also snap to the panel maximum and minimum size."),r=I(),$(s.$$.fragment)},l(t){a=v(t,"H2",{});var c=b(a);i=P(c,"Min & max with snap"),c.forEach(m),n=d(t),p=v(t,"P",{});var w=b(p);l=P(w,"You can also snap to the panel maximum and minimum size."),w.forEach(m),r=d(t),g(s.$$.fragment,t)},m(t,c){h(t,a,c),f(a,i),h(t,n,c),h(t,p,c),f(p,l),h(t,r,c),u(s,t,c),e=!0},p:M,i(t){e||(j(s.$$.fragment,t),e=!0)},o(t){x(s.$$.fragment,t),e=!1},d(t){t&&m(a),t&&m(n),t&&m(p),t&&m(r),_(s,t)}}}class D extends q{constructor(a){super(),E(this,a,null,O,k,{})}}export{D as default};
