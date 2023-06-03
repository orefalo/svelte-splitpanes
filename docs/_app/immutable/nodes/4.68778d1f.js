import{S as W,i as A,s as L,O as v,a as d,P as b,f as w,Q as P,j as f,n as z,o as x,T,g as c,I as $,J as g,W as M,D as q,L as C,X as D,e as k,b as B,d as E,k as S}from"../chunks/external.a92f57e2.js";import{E as I}from"../chunks/ExampleArea.c0fd3cca.js";import{S as J,P as N}from"../chunks/svelte-splitpanes.d91c4d32.js";import{B as O}from"../chunks/Button.58674c62.js";const Q=!0,ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));function R(i,s,l){const t=i.slice();return t[4]=s[l],t[6]=l,t}function X(i){let s=i[0]?"Turn to Vertical":"Turn to Horizontal",l;return{c(){l=$(s)},l(t){l=g(t,s)},m(t,n){f(t,l,n)},p(t,n){n&1&&s!==(s=t[0]?"Turn to Vertical":"Turn to Horizontal")&&M(l,s)},d(t){t&&c(l)}}}function F(i){let s=i[1]?"Hide first splitter":"Show first Splitter",l;return{c(){l=$(s)},l(t){l=g(t,s)},m(t,n){f(t,l,n)},p(t,n){n&2&&s!==(s=t[1]?"Hide first splitter":"Show first Splitter")&&M(l,s)},d(t){t&&c(l)}}}function G(i){let s,l=i[6]+1+"",t,n;return{c(){s=k("span"),t=$(l),n=d()},l(e){s=B(e,"SPAN",{});var p=E(s);t=g(p,l),p.forEach(c),n=w(e)},m(e,p){f(e,s,p),S(s,t),f(e,n,p)},p:C,d(e){e&&c(s),e&&c(n)}}}function K(i){let s,l;return s=new N({props:{minSize:5,$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){v(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,n){P(s,t,n),l=!0},p(t,n){const e={};n&128&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){l||(z(s.$$.fragment,t),l=!0)},o(t){x(s.$$.fragment,t),l=!1},d(t){T(s,t)}}}function U(i){let s,l,t={length:3},n=[];for(let e=0;e<t.length;e+=1)n[e]=K(R(i,t,e));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();s=q()},l(e){for(let p=0;p<n.length;p+=1)n[p].l(e);s=q()},m(e,p){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,p);f(e,s,p),l=!0},p:C,i(e){if(!l){for(let p=0;p<t.length;p+=1)z(n[p]);l=!0}},o(e){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)x(n[p]);l=!1},d(e){D(n,e),e&&c(s)}}}function Y(i){let s,l,t,n,e,p;return s=new O({props:{$$slots:{default:[X]},$$scope:{ctx:i}}}),s.$on("click",i[2]),t=new O({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),t.$on("click",i[3]),e=new J({props:{style:"height: 400px",firstSplitter:i[1],horizontal:i[0],$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){v(s.$$.fragment),l=d(),v(t.$$.fragment),n=d(),v(e.$$.fragment)},l(a){b(s.$$.fragment,a),l=w(a),b(t.$$.fragment,a),n=w(a),b(e.$$.fragment,a)},m(a,o){P(s,a,o),f(a,l,o),P(t,a,o),f(a,n,o),P(e,a,o),p=!0},p(a,[o]){const _={};o&129&&(_.$$scope={dirty:o,ctx:a}),s.$set(_);const j={};o&130&&(j.$$scope={dirty:o,ctx:a}),t.$set(j);const u={};o&2&&(u.firstSplitter=a[1]),o&1&&(u.horizontal=a[0]),o&128&&(u.$$scope={dirty:o,ctx:a}),e.$set(u)},i(a){p||(z(s.$$.fragment,a),z(t.$$.fragment,a),z(e.$$.fragment,a),p=!0)},o(a){x(s.$$.fragment,a),x(t.$$.fragment,a),x(e.$$.fragment,a),p=!1},d(a){T(s,a),a&&c(l),T(t,a),a&&c(n),T(e,a)}}}function Z(i,s,l){let t=!1,n=!1;return[t,n,()=>{l(0,t=!t)},()=>{l(1,n=!n)}]}class tt extends W{constructor(s){super(),A(this,s,Z,Y,L,{})}}const st=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let horizontal = false;
	let firstSplitter = false;
<\/script>

<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button>
<Splitpanes style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,nt=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> horizontal = <span class="hljs-literal">false</span>;
	<span class="hljs-keyword">let</span> firstSplitter = <span class="hljs-literal">false</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		horizontal = !horizontal;
	}}&gt;{horizontal ? &#x27;Turn to Vertical&#x27; : &#x27;Turn to Horizontal&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		firstSplitter = !firstSplitter;
	}}&gt;{firstSplitter ? &#x27;Hide first splitter&#x27; : &#x27;Show first Splitter&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> {<span class="hljs-attr">firstSplitter</span>} {<span class="hljs-attr">horizontal</span>}&gt;</span>
	{#each { length: 3 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,at={code:st,highlightedHTML:nt,component:tt};function et(i){let s,l,t,n,e,p,a,o,_,j,u,m,y;return m=new I({props:{example:at}}),{c(){s=k("h2"),l=$("Change orientation & first splitter"),t=d(),n=k("p"),e=$("When changing direction, all the panes current width or height will flip to adapt to the new layout."),p=d(),a=k("p"),o=$("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),_=k("br"),j=$(`
	The first splitter does not allow to resize the next pane.`),u=d(),v(m.$$.fragment)},l(r){s=B(r,"H2",{});var h=E(s);l=g(h,"Change orientation & first splitter"),h.forEach(c),t=w(r),n=B(r,"P",{});var V=E(n);e=g(V,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),V.forEach(c),p=w(r),a=B(r,"P",{});var H=E(a);o=g(H,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),_=B(H,"BR",{}),j=g(H,`
	The first splitter does not allow to resize the next pane.`),H.forEach(c),u=w(r),b(m.$$.fragment,r)},m(r,h){f(r,s,h),S(s,l),f(r,t,h),f(r,n,h),S(n,e),f(r,p,h),f(r,a,h),S(a,o),S(a,_),S(a,j),f(r,u,h),P(m,r,h),y=!0},p:C,i(r){y||(z(m.$$.fragment,r),y=!0)},o(r){x(m.$$.fragment,r),y=!1},d(r){r&&c(s),r&&c(t),r&&c(n),r&&c(p),r&&c(a),r&&c(u),T(m,r)}}}class ct extends W{constructor(s){super(),A(this,s,null,et,L,{})}}export{ct as component,ot as universal};
