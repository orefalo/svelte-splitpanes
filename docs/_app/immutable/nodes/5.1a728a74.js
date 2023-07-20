import{S as b,i as y,s as D,P as _,Q as x,R as v,n as z,o as P,U as d,a as $,f as j,j as r,g as c,e as m,b as u,I as g,K as C}from"../chunks/external.433b4fbf.js";import{E as q}from"../chunks/ExampleArea.2ef6347b.js";import{S as k,P as S}from"../chunks/svelte-splitpanes.2818b9b4.js";const A=!0,F=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"}));function H(f){let s,p="1",n,a,l="Default size of 65%";return{c(){s=m("span"),s.textContent=p,n=$(),a=m("p"),a.textContent=l},l(e){s=u(e,"SPAN",{["data-svelte-h"]:!0}),g(s)!=="svelte-4rug0j"&&(s.textContent=p),n=j(e),a=u(e,"P",{["data-svelte-h"]:!0}),g(a)!=="svelte-16zinhn"&&(a.textContent=l)},m(e,t){r(e,s,t),r(e,n,t),r(e,a,t)},p:C,d(e){e&&(c(s),c(n),c(a))}}}function M(f){let s,p="2",n,a,l="Default size of 10%";return{c(){s=m("span"),s.textContent=p,n=$(),a=m("p"),a.textContent=l},l(e){s=u(e,"SPAN",{["data-svelte-h"]:!0}),g(s)!=="svelte-1o38sr4"&&(s.textContent=p),n=j(e),a=u(e,"P",{["data-svelte-h"]:!0}),g(a)!=="svelte-abjuwf"&&(a.textContent=l)},m(e,t){r(e,s,t),r(e,n,t),r(e,a,t)},p:C,d(e){e&&(c(s),c(n),c(a))}}}function N(f){let s,p="3",n,a,l="Default size of 25%";return{c(){s=m("span"),s.textContent=p,n=$(),a=m("p"),a.textContent=l},l(e){s=u(e,"SPAN",{["data-svelte-h"]:!0}),g(s)!=="svelte-100q5wx"&&(s.textContent=p),n=j(e),a=u(e,"P",{["data-svelte-h"]:!0}),g(a)!=="svelte-7ys44n"&&(a.textContent=l)},m(e,t){r(e,s,t),r(e,n,t),r(e,a,t)},p:C,d(e){e&&(c(s),c(n),c(a))}}}function T(f){let s,p,n,a,l,e;return s=new S({props:{size:65,$$slots:{default:[H]},$$scope:{ctx:f}}}),n=new S({props:{size:10,$$slots:{default:[M]},$$scope:{ctx:f}}}),l=new S({props:{size:25,$$slots:{default:[N]},$$scope:{ctx:f}}}),{c(){_(s.$$.fragment),p=$(),_(n.$$.fragment),a=$(),_(l.$$.fragment)},l(t){x(s.$$.fragment,t),p=j(t),x(n.$$.fragment,t),a=j(t),x(l.$$.fragment,t)},m(t,o){v(s,t,o),r(t,p,o),v(n,t,o),r(t,a,o),v(l,t,o),e=!0},p(t,o){const i={};o&1&&(i.$$scope={dirty:o,ctx:t}),s.$set(i);const h={};o&1&&(h.$$scope={dirty:o,ctx:t}),n.$set(h);const w={};o&1&&(w.$$scope={dirty:o,ctx:t}),l.$set(w)},i(t){e||(z(s.$$.fragment,t),z(n.$$.fragment,t),z(l.$$.fragment,t),e=!0)},o(t){P(s.$$.fragment,t),P(n.$$.fragment,t),P(l.$$.fragment,t),e=!1},d(t){t&&(c(p),c(a)),d(s,t),d(n,t),d(l,t)}}}function I(f){let s,p;return s=new k({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[T]},$$scope:{ctx:f}}}),{c(){_(s.$$.fragment)},l(n){x(s.$$.fragment,n)},m(n,a){v(s,n,a),p=!0},p(n,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:n}),s.$set(l)},i(n){p||(z(s.$$.fragment,n),p=!0)},o(n){P(s.$$.fragment,n),p=!1},d(n){d(s,n)}}}class L extends b{constructor(s){super(),y(this,s,null,I,D,{})}}const E=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
		<p>Default size of 65%</p>
	</Pane>
	<Pane size={10}>
		<span>2</span>
		<p>Default size of 10%</p>
	</Pane>
	<Pane size={25}>
		<span>3</span>
		<p>Default size of 25%</p>
	</Pane>
</Splitpanes>
`,O=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{65}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 65%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 10%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{25}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 25%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,K={code:E,highlightedHTML:O,component:L};function Q(f){let s,p="Default pane size",n,a,l=`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).<br/> <b>If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.</b><br/> Note that setting a default value is different than setting a min or max value.`,e,t,o;return t=new q({props:{example:K}}),{c(){s=m("h2"),s.textContent=p,n=$(),a=m("p"),a.innerHTML=l,e=$(),_(t.$$.fragment)},l(i){s=u(i,"H2",{["data-svelte-h"]:!0}),g(s)!=="svelte-16nr72k"&&(s.textContent=p),n=j(i),a=u(i,"P",{["data-svelte-h"]:!0}),g(a)!=="svelte-1ucd8w4"&&(a.innerHTML=l),e=j(i),x(t.$$.fragment,i)},m(i,h){r(i,s,h),r(i,n,h),r(i,a,h),r(i,e,h),v(t,i,h),o=!0},p:C,i(i){o||(z(t.$$.fragment,i),o=!0)},o(i){P(t.$$.fragment,i),o=!1},d(i){i&&(c(s),c(n),c(a),c(e)),d(t,i)}}}class G extends b{constructor(s){super(),y(this,s,null,Q,D,{})}}export{G as component,F as universal};
