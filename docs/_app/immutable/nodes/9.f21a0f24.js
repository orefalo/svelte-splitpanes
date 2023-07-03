import{S as T,i as L,s as A,P as d,Q as b,R as v,n as S,o as P,U as z,a as w,f as I,j as o,g as m,e as j,b as _,I as q,K as H,X as y,d as E,Y as k,k as x}from"../chunks/external.ebcef968.js";import{E as N}from"../chunks/ExampleArea.a1faed7b.js";import{S as Y,P as M}from"../chunks/svelte-splitpanes.e1bd6ed9.js";const O=!0,ss=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function R(i){let s,e=`1
			<br/> <em class="specs">I have a min height of 20% &amp; max height of 70%</em>`;return{c(){s=j("span"),s.innerHTML=e},l(a){s=_(a,"SPAN",{["data-svelte-h"]:!0}),q(s)!=="svelte-1vfg6mz"&&(s.innerHTML=e)},m(a,n){o(a,s,n)},p:H,d(a){a&&m(s)}}}function B(i){let s,e="2";return{c(){s=j("span"),s.textContent=e},l(a){s=_(a,"SPAN",{["data-svelte-h"]:!0}),q(s)!=="svelte-1o38sr4"&&(s.textContent=e)},m(a,n){o(a,s,n)},p:H,d(a){a&&m(s)}}}function K(i){let s,e=`3
			<br/> <em class="specs">I have a max height of 70%</em>`;return{c(){s=j("span"),s.innerHTML=e},l(a){s=_(a,"SPAN",{["data-svelte-h"]:!0}),q(s)!=="svelte-aray29"&&(s.innerHTML=e)},m(a,n){o(a,s,n)},p:H,d(a){a&&m(s)}}}function Q(i){let s,e,a,n,p,h;return s=new M({props:{minSize:20,maxSize:70,$$slots:{default:[R]},$$scope:{ctx:i}}}),a=new M({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),p=new M({props:{maxSize:70,$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){d(s.$$.fragment),e=w(),d(a.$$.fragment),n=w(),d(p.$$.fragment)},l(t){b(s.$$.fragment,t),e=I(t),b(a.$$.fragment,t),n=I(t),b(p.$$.fragment,t)},m(t,c){v(s,t,c),o(t,e,c),v(a,t,c),o(t,n,c),v(p,t,c),h=!0},p(t,c){const u={};c&1&&(u.$$scope={dirty:c,ctx:t}),s.$set(u);const $={};c&1&&($.$$scope={dirty:c,ctx:t}),a.$set($);const g={};c&1&&(g.$$scope={dirty:c,ctx:t}),p.$set(g)},i(t){h||(S(s.$$.fragment,t),S(a.$$.fragment,t),S(p.$$.fragment,t),h=!0)},o(t){P(s.$$.fragment,t),P(a.$$.fragment,t),P(p.$$.fragment,t),h=!1},d(t){t&&(m(e),m(n)),z(s,t),z(a,t),z(p,t)}}}function U(i){let s,e;return s=new Y({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){d(s.$$.fragment)},l(a){b(s.$$.fragment,a)},m(a,n){v(s,a,n),e=!0},p(a,[n]){const p={};n&1&&(p.$$scope={dirty:n,ctx:a}),s.$set(p)},i(a){e||(S(s.$$.fragment,a),e=!0)},o(a){P(s.$$.fragment,a),e=!1},d(a){z(s,a)}}}class X extends T{constructor(s){super(),L(this,s,null,U,A,{})}}const D=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal={true} style="height: 400px">
	<Pane minSize={20} maxSize={70}>
		<span
			>1
			<br />
			<em class="specs">I have a min height of 20% &amp; max height of 70%</em>
		</span>
	</Pane>
	<Pane>
		<span>2</span>
	</Pane>
	<Pane maxSize={70}>
		<span
			>3
			<br />
			<em class="specs">I have a max height of 70%</em>
		</span>
	</Pane>
</Splitpanes>
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>
			&gt;</span>1
			<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a min height of 20% <span class="hljs-symbol">&amp;amp;</span> max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>
			&gt;</span>3
			<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,G={code:D,highlightedHTML:F,component:X};function J(i){let s,e="Horizontal layout, push other panes, min & max use, doubleclick",a,n,p,h,t,c=!1+"",u,$,g,f,C;return f=new N({props:{example:G}}),{c(){s=j("h2"),s.textContent=e,a=w(),n=j("p"),p=y("You can double click a splitter to maximize the next pane!"),h=j("br"),t=y(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=y(c),$=y("."),g=w(),d(f.$$.fragment)},l(l){s=_(l,"H2",{["data-svelte-h"]:!0}),q(s)!=="svelte-ar0m3p"&&(s.textContent=e),a=I(l),n=_(l,"P",{});var r=E(n);p=k(r,"You can double click a splitter to maximize the next pane!"),h=_(r,"BR",{}),t=k(r,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=k(r,c),$=k(r,"."),r.forEach(m),g=I(l),b(f.$$.fragment,l)},m(l,r){o(l,s,r),o(l,a,r),o(l,n,r),x(n,p),x(n,h),x(n,t),x(n,u),x(n,$),o(l,g,r),v(f,l,r),C=!0},p:H,i(l){C||(S(f.$$.fragment,l),C=!0)},o(l){P(f.$$.fragment,l),C=!1},d(l){l&&(m(s),m(a),m(n),m(g)),z(f,l)}}}class as extends T{constructor(s){super(),L(this,s,null,J,A,{})}}export{as as component,ss as universal};
