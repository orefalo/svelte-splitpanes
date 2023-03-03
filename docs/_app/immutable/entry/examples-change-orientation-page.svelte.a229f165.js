import{S as L,i as R,s as W,O as v,a as w,P,f as d,Q as b,j as f,n as z,o as x,R as T,g as c,J as $,K as g,L as D,D as q,U as V,V as J,e as k,b as B,d as E,k as S}from"../chunks/external.9901bcda.js";import{E as K}from"../chunks/ExampleArea.15545fbd.js";import{S as M,P as N}from"../chunks/svelte-splitpanes.0343ee0d.js";import{B as A}from"../chunks/Button.417ef931.js";function O(i,s,l){const t=i.slice();return t[4]=s[l],t[6]=l,t}function Q(i){let s=i[0]?"Turn to Vertical":"Turn to Horizontal",l;return{c(){l=$(s)},l(t){l=g(t,s)},m(t,n){f(t,l,n)},p(t,n){n&1&&s!==(s=t[0]?"Turn to Vertical":"Turn to Horizontal")&&D(l,s)},d(t){t&&c(l)}}}function U(i){let s=i[1]?"Hide first splitter":"Show first Splitter",l;return{c(){l=$(s)},l(t){l=g(t,s)},m(t,n){f(t,l,n)},p(t,n){n&2&&s!==(s=t[1]?"Hide first splitter":"Show first Splitter")&&D(l,s)},d(t){t&&c(l)}}}function F(i){let s,l=i[6]+1+"",t,n;return{c(){s=k("span"),t=$(l),n=w()},l(a){s=B(a,"SPAN",{});var p=E(s);t=g(p,l),p.forEach(c),n=d(a)},m(a,p){f(a,s,p),S(s,t),f(a,n,p)},p:V,d(a){a&&c(s),a&&c(n)}}}function G(i){let s,l;return s=new N({props:{minSize:5,$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){v(s.$$.fragment)},l(t){P(s.$$.fragment,t)},m(t,n){b(s,t,n),l=!0},p(t,n){const a={};n&128&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){l||(z(s.$$.fragment,t),l=!0)},o(t){x(s.$$.fragment,t),l=!1},d(t){T(s,t)}}}function I(i){let s,l,t={length:3},n=[];for(let a=0;a<t.length;a+=1)n[a]=G(O(i,t,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();s=q()},l(a){for(let p=0;p<n.length;p+=1)n[p].l(a);s=q()},m(a,p){for(let e=0;e<n.length;e+=1)n[e].m(a,p);f(a,s,p),l=!0},p:V,i(a){if(!l){for(let p=0;p<t.length;p+=1)z(n[p]);l=!0}},o(a){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)x(n[p]);l=!1},d(a){J(n,a),a&&c(s)}}}function X(i){let s,l,t,n,a,p;return s=new A({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),s.$on("click",i[2]),t=new A({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),t.$on("click",i[3]),a=new M({props:{style:"height: 400px",firstSplitter:i[1],horizontal:i[0],$$slots:{default:[I]},$$scope:{ctx:i}}}),{c(){v(s.$$.fragment),l=w(),v(t.$$.fragment),n=w(),v(a.$$.fragment)},l(e){P(s.$$.fragment,e),l=d(e),P(t.$$.fragment,e),n=d(e),P(a.$$.fragment,e)},m(e,o){b(s,e,o),f(e,l,o),b(t,e,o),f(e,n,o),b(a,e,o),p=!0},p(e,[o]){const _={};o&129&&(_.$$scope={dirty:o,ctx:e}),s.$set(_);const j={};o&130&&(j.$$scope={dirty:o,ctx:e}),t.$set(j);const u={};o&2&&(u.firstSplitter=e[1]),o&1&&(u.horizontal=e[0]),o&128&&(u.$$scope={dirty:o,ctx:e}),a.$set(u)},i(e){p||(z(s.$$.fragment,e),z(t.$$.fragment,e),z(a.$$.fragment,e),p=!0)},o(e){x(s.$$.fragment,e),x(t.$$.fragment,e),x(a.$$.fragment,e),p=!1},d(e){T(s,e),e&&c(l),T(t,e),e&&c(n),T(a,e)}}}function Y(i,s,l){let t=!1,n=!1;return[t,n,()=>{l(0,t=!t)},()=>{l(1,n=!n)}]}class Z extends L{constructor(s){super(),R(this,s,Y,X,W,{})}}const tt=`<script>
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
`,st=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,nt={code:tt,highlightedHTML:st,component:Z};function at(i){let s,l,t,n,a,p,e,o,_,j,u,m,H;return m=new K({props:{example:nt}}),{c(){s=k("h2"),l=$("Change orientation & first splitter"),t=w(),n=k("p"),a=$("When changing direction, all the panes current width or height will flip to adapt to the new layout."),p=w(),e=k("p"),o=$("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),_=k("br"),j=$(`
	The first splitter does not allow to resize the next pane.`),u=w(),v(m.$$.fragment)},l(r){s=B(r,"H2",{});var h=E(s);l=g(h,"Change orientation & first splitter"),h.forEach(c),t=d(r),n=B(r,"P",{});var C=E(n);a=g(C,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),C.forEach(c),p=d(r),e=B(r,"P",{});var y=E(e);o=g(y,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),_=B(y,"BR",{}),j=g(y,`
	The first splitter does not allow to resize the next pane.`),y.forEach(c),u=d(r),P(m.$$.fragment,r)},m(r,h){f(r,s,h),S(s,l),f(r,t,h),f(r,n,h),S(n,a),f(r,p,h),f(r,e,h),S(e,o),S(e,_),S(e,j),f(r,u,h),b(m,r,h),H=!0},p:V,i(r){H||(z(m.$$.fragment,r),H=!0)},o(r){x(m.$$.fragment,r),H=!1},d(r){r&&c(s),r&&c(t),r&&c(n),r&&c(p),r&&c(e),r&&c(u),T(m,r)}}}class it extends L{constructor(s){super(),R(this,s,null,at,W,{})}}export{it as default};
