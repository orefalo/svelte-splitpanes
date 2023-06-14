import{S as N,i as C,s as O,O as g,P as $,Q as u,n as j,o as _,T as d,a as k,f as v,j as h,g as r,e as P,I as b,b as w,d as x,J as z,k as S,L as E}from"../chunks/external.c3018815.js";import{E as F}from"../chunks/ExampleArea.6fa185e2.js";import{S as q,P as y}from"../chunks/svelte-splitpanes.ade26b14.js";const A=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"}));function I(i){let s,e;return{c(){s=P("span"),e=b("1")},l(a){s=w(a,"SPAN",{});var t=x(s);e=z(t,"1"),t.forEach(r)},m(a,t){h(a,s,t),S(s,e)},p:E,d(a){a&&r(s)}}}function T(i){let s,e;return{c(){s=P("p"),e=b("Note how double clicking has no resizing effects..")},l(a){s=w(a,"P",{});var t=x(s);e=z(t,"Note how double clicking has no resizing effects.."),t.forEach(r)},m(a,t){h(a,s,t),S(s,e)},p:E,d(a){a&&r(s)}}}function B(i){let s,e;return{c(){s=P("span"),e=b("3")},l(a){s=w(a,"SPAN",{});var t=x(s);e=z(t,"3"),t.forEach(r)},m(a,t){h(a,s,t),S(s,e)},p:E,d(a){a&&r(s)}}}function D(i){let s,e,a,t,c,f;return s=new y({props:{size:33,$$slots:{default:[I]},$$scope:{ctx:i}}}),a=new y({props:{size:33,$$slots:{default:[T]},$$scope:{ctx:i}}}),c=new y({props:{size:34,$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){g(s.$$.fragment),e=k(),g(a.$$.fragment),t=k(),g(c.$$.fragment)},l(n){$(s.$$.fragment,n),e=v(n),$(a.$$.fragment,n),t=v(n),$(c.$$.fragment,n)},m(n,p){u(s,n,p),h(n,e,p),u(a,n,p),h(n,t,p),u(c,n,p),f=!0},p(n,p){const l={};p&1&&(l.$$scope={dirty:p,ctx:n}),s.$set(l);const o={};p&1&&(o.$$scope={dirty:p,ctx:n}),a.$set(o);const m={};p&1&&(m.$$scope={dirty:p,ctx:n}),c.$set(m)},i(n){f||(j(s.$$.fragment,n),j(a.$$.fragment,n),j(c.$$.fragment,n),f=!0)},o(n){_(s.$$.fragment,n),_(a.$$.fragment,n),_(c.$$.fragment,n),f=!1},d(n){d(s,n),n&&r(e),d(a,n),n&&r(t),d(c,n)}}}function H(i){let s,e;return s=new q({props:{horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){g(s.$$.fragment)},l(a){$(s.$$.fragment,a)},m(a,t){u(s,a,t),e=!0},p(a,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:a}),s.$set(c)},i(a){e||(j(s.$$.fragment,a),e=!0)},o(a){_(s.$$.fragment,a),e=!1},d(a){d(s,a)}}}class L extends N{constructor(s){super(),C(this,s,null,H,O,{})}}const M=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size={33}>
		<span>1</span>
	</Pane>
	<Pane size={33}>
		<p>Note how double clicking has no resizing effects..</p>
	</Pane>
	<Pane size={34}>
		<span>3</span>
	</Pane>
</Splitpanes>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">dblClickSplitter</span>=<span class="hljs-string">{false}</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Note how double clicking has no resizing effects..<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{34}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,Q={code:M,highlightedHTML:J,component:L};function G(i){let s,e,a,t,c,f,n,p;return n=new F({props:{example:Q}}),{c(){s=P("h2"),e=b("Disable double click"),a=k(),t=P("p"),c=b(`By default, double clicking the splitter will expand its nearest pane. In this example, we demonstrate how to turn
	this feature OFF`),f=k(),g(n.$$.fragment)},l(l){s=w(l,"H2",{});var o=x(s);e=z(o,"Disable double click"),o.forEach(r),a=v(l),t=w(l,"P",{});var m=x(t);c=z(m,`By default, double clicking the splitter will expand its nearest pane. In this example, we demonstrate how to turn
	this feature OFF`),m.forEach(r),f=v(l),$(n.$$.fragment,l)},m(l,o){h(l,s,o),S(s,e),h(l,a,o),h(l,t,o),S(t,c),h(l,f,o),u(n,l,o),p=!0},p:E,i(l){p||(j(n.$$.fragment,l),p=!0)},o(l){_(n.$$.fragment,l),p=!1},d(l){l&&r(s),l&&r(a),l&&r(t),l&&r(f),d(n,l)}}}class W extends N{constructor(s){super(),C(this,s,null,G,O,{})}}export{W as component,V as universal};
