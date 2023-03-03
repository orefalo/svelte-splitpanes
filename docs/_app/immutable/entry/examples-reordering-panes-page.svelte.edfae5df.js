import{S as P,i as b,s as B,O as u,a as j,P as $,f as k,Q as g,j as i,n as f,o as m,R as _,g as c,J as S,K as v,D as d,M,aa as R,H as A,ab as C,e as E,b as q,d as z,I as x,k as H,L,U as N}from"../chunks/external.2f6a823f.js";import{E as D}from"../chunks/ExampleArea.93fd3141.js";import{S as I,P as J}from"../chunks/svelte-splitpanes.af134a98.js";import{B as K}from"../chunks/Button.3ae320fd.js";function w(o,t,l){const a=o.slice();return a[2]=t[l],a}function O(o){let t;return{c(){t=S("Switch")},l(l){t=v(l,"Switch")},m(l,a){i(l,t,a)},d(l){l&&c(t)}}}function Q(o){let t,l=o[2].color+"",a,p;return{c(){t=E("span"),a=S(l),p=j(),this.h()},l(s){t=q(s,"SPAN",{});var n=z(t);a=v(n,l),n.forEach(c),p=k(s),this.h()},h(){x(t,"color",o[2].color)},m(s,n){i(s,t,n),H(t,a),i(s,p,n)},p(s,n){n&1&&l!==(l=s[2].color+"")&&L(a,l),n&1&&x(t,"color",s[2].color)},d(s){s&&c(t),s&&c(p)}}}function y(o,t){let l,a,p;return a=new J({props:{minSize:10,$$slots:{default:[Q]},$$scope:{ctx:t}}}),{key:o,first:null,c(){l=d(),u(a.$$.fragment),this.h()},l(s){l=d(),$(a.$$.fragment,s),this.h()},h(){this.first=l},m(s,n){i(s,l,n),g(a,s,n),p=!0},p(s,n){t=s;const e={};n&33&&(e.$$scope={dirty:n,ctx:t}),a.$set(e)},i(s){p||(f(a.$$.fragment,s),p=!0)},o(s){m(a.$$.fragment,s),p=!1},d(s){s&&c(l),_(a,s)}}}function T(o){let t=[],l=new Map,a,p,s=o[0];const n=e=>e[2];for(let e=0;e<s.length;e+=1){let r=w(o,s,e),h=n(r);l.set(h,t[e]=y(h,r))}return{c(){for(let e=0;e<t.length;e+=1)t[e].c();a=d()},l(e){for(let r=0;r<t.length;r+=1)t[r].l(e);a=d()},m(e,r){for(let h=0;h<t.length;h+=1)t[h].m(e,r);i(e,a,r),p=!0},p(e,r){r&1&&(s=e[0],M(),t=R(t,r,n,1,e,s,l,a.parentNode,C,y,a,w),A())},i(e){if(!p){for(let r=0;r<s.length;r+=1)f(t[r]);p=!0}},o(e){for(let r=0;r<t.length;r+=1)m(t[r]);p=!1},d(e){for(let r=0;r<t.length;r+=1)t[r].d(e);e&&c(a)}}}function U(o){let t,l,a,p;return t=new K({props:{$$slots:{default:[O]},$$scope:{ctx:o}}}),t.$on("click",o[1]),a=new I({props:{style:"height: 400px",$$slots:{default:[T]},$$scope:{ctx:o}}}),{c(){u(t.$$.fragment),l=j(),u(a.$$.fragment)},l(s){$(t.$$.fragment,s),l=k(s),$(a.$$.fragment,s)},m(s,n){g(t,s,n),i(s,l,n),g(a,s,n),p=!0},p(s,[n]){const e={};n&32&&(e.$$scope={dirty:n,ctx:s}),t.$set(e);const r={};n&33&&(r.$$scope={dirty:n,ctx:s}),a.$set(r)},i(s){p||(f(t.$$.fragment,s),f(a.$$.fragment,s),p=!0)},o(s){m(t.$$.fragment,s),m(a.$$.fragment,s),p=!1},d(s){_(t,s),s&&c(l),_(a,s)}}}function F(o,t,l){let a=[{color:"red"},{color:"blue"}];return[a,()=>{const s=a[0];l(0,a[0]=a[1],a),l(0,a[1]=s,a)}]}class G extends P{constructor(t){super(),b(this,t,F,U,B,{})}}const V=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let ordered = [{ color: 'red' }, { color: 'blue' }];
<\/script>

<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button>
<Splitpanes style="height: 400px">
	{#each ordered as val (val)}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> ordered = [{ <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span> }, { <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;blue&#x27;</span> }];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}&gt;Switch<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each ordered as val (val)}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style:color</span>=<span class="hljs-string">{val.color}</span>&gt;</span>{val.color}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:V,highlightedHTML:W,component:G};function Y(o){let t,l,a,p,s;return p=new D({props:{example:X}}),{c(){t=E("h2"),l=S("Reordering Panes"),a=j(),u(p.$$.fragment)},l(n){t=q(n,"H2",{});var e=z(t);l=v(e,"Reordering Panes"),e.forEach(c),a=k(n),$(p.$$.fragment,n)},m(n,e){i(n,t,e),H(t,l),i(n,a,e),g(p,n,e),s=!0},p:N,i(n){s||(f(p.$$.fragment,n),s=!0)},o(n){m(p.$$.fragment,n),s=!1},d(n){n&&c(t),n&&c(a),_(p,n)}}}class ns extends P{constructor(t){super(),b(this,t,null,Y,B,{})}}export{ns as default};
