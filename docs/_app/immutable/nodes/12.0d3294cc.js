import{S as P,i as b,s as B,O as u,a as j,P as _,f as k,Q as g,j as i,n as f,o as m,T as $,g as c,I as S,J as v,D as d,R as O,$ as R,U as T,a0 as A,e as z,b as E,d as q,V as y,k as M,W as C,L as H}from"../chunks/external.d956c198.js";import{E as L}from"../chunks/ExampleArea.4a3e9740.js";import{S as N,P as D}from"../chunks/svelte-splitpanes.690467bb.js";import{B as I}from"../chunks/Button.144b10d2.js";const J=!0,es=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));function x(o,t,l){const n=o.slice();return n[2]=t[l],n}function Q(o){let t;return{c(){t=S("Switch")},l(l){t=v(l,"Switch")},m(l,n){i(l,t,n)},d(l){l&&c(t)}}}function U(o){let t,l=o[2].color+"",n,r;return{c(){t=z("span"),n=S(l),r=j(),this.h()},l(s){t=E(s,"SPAN",{});var a=q(t);n=v(a,l),a.forEach(c),r=k(s),this.h()},h(){y(t,"color",o[2].color)},m(s,a){i(s,t,a),M(t,n),i(s,r,a)},p(s,a){a&1&&l!==(l=s[2].color+"")&&C(n,l),a&1&&y(t,"color",s[2].color)},d(s){s&&c(t),s&&c(r)}}}function w(o,t){let l,n,r;return n=new D({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:t}}}),{key:o,first:null,c(){l=d(),u(n.$$.fragment),this.h()},l(s){l=d(),_(n.$$.fragment,s),this.h()},h(){this.first=l},m(s,a){i(s,l,a),g(n,s,a),r=!0},p(s,a){t=s;const e={};a&33&&(e.$$scope={dirty:a,ctx:t}),n.$set(e)},i(s){r||(f(n.$$.fragment,s),r=!0)},o(s){m(n.$$.fragment,s),r=!1},d(s){s&&c(l),$(n,s)}}}function V(o){let t=[],l=new Map,n,r,s=o[0];const a=e=>e[2];for(let e=0;e<s.length;e+=1){let p=x(o,s,e),h=a(p);l.set(h,t[e]=w(h,p))}return{c(){for(let e=0;e<t.length;e+=1)t[e].c();n=d()},l(e){for(let p=0;p<t.length;p+=1)t[p].l(e);n=d()},m(e,p){for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,p);i(e,n,p),r=!0},p(e,p){p&1&&(s=e[0],O(),t=R(t,p,a,1,e,s,l,n.parentNode,A,w,n,x),T())},i(e){if(!r){for(let p=0;p<s.length;p+=1)f(t[p]);r=!0}},o(e){for(let p=0;p<t.length;p+=1)m(t[p]);r=!1},d(e){for(let p=0;p<t.length;p+=1)t[p].d(e);e&&c(n)}}}function W(o){let t,l,n,r;return t=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),t.$on("click",o[1]),n=new N({props:{style:"height: 400px",$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){u(t.$$.fragment),l=j(),u(n.$$.fragment)},l(s){_(t.$$.fragment,s),l=k(s),_(n.$$.fragment,s)},m(s,a){g(t,s,a),i(s,l,a),g(n,s,a),r=!0},p(s,[a]){const e={};a&32&&(e.$$scope={dirty:a,ctx:s}),t.$set(e);const p={};a&33&&(p.$$scope={dirty:a,ctx:s}),n.$set(p)},i(s){r||(f(t.$$.fragment,s),f(n.$$.fragment,s),r=!0)},o(s){m(t.$$.fragment,s),m(n.$$.fragment,s),r=!1},d(s){$(t,s),s&&c(l),$(n,s)}}}function F(o,t,l){let n=[{color:"red"},{color:"blue"}];return[n,()=>{const s=n[0];l(0,n[0]=n[1],n),l(0,n[1]=s,n)}]}class G extends P{constructor(t){super(),b(this,t,F,W,B,{})}}const K=`<script>
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
`,X=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,Y={code:K,highlightedHTML:X,component:G};function Z(o){let t,l,n,r,s;return r=new L({props:{example:Y}}),{c(){t=z("h2"),l=S("Reordering Panes"),n=j(),u(r.$$.fragment)},l(a){t=E(a,"H2",{});var e=q(t);l=v(e,"Reordering Panes"),e.forEach(c),n=k(a),_(r.$$.fragment,a)},m(a,e){i(a,t,e),M(t,l),i(a,n,e),g(r,a,e),s=!0},p:H,i(a){s||(f(r.$$.fragment,a),s=!0)},o(a){m(r.$$.fragment,a),s=!1},d(a){a&&c(t),a&&c(n),$(r,a)}}}class ls extends P{constructor(t){super(),b(this,t,null,Z,B,{})}}export{ls as component,es as universal};
