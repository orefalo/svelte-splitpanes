import{S as w,i as P,s as b,P as f,a as j,Q as _,f as k,R as g,j as i,n as m,o as u,g as c,U as d,X as B,Y as C,_ as v,D as $,T as E,a3 as M,V as T,a4 as A,e as z,b as q,d as H,W as S,k as N,Z as O,I as R,K as D}from"../chunks/external.bf23e1f3.js";import{E as I}from"../chunks/ExampleArea.23ecd4ce.js";import{S as K,P as L}from"../chunks/svelte-splitpanes.cc0505d7.js";import{B as Q}from"../chunks/Button.f54f9da2.js";const U=!0,rs=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function x(o,s,n){const e=o.slice();return e[2]=s[n],e}function V(o){let s;return{c(){s=B("Switch")},l(n){s=C(n,"Switch")},m(n,e){i(n,s,e)},d(n){n&&c(s)}}}function W(o){let s,n=o[2].color+"",e,r;return{c(){s=z("span"),e=B(n),r=j(),this.h()},l(t){s=q(t,"SPAN",{});var a=H(s);e=C(a,n),a.forEach(c),r=k(t),this.h()},h(){S(s,"color",o[2].color)},m(t,a){i(t,s,a),N(s,e),i(t,r,a)},p(t,a){a&1&&n!==(n=t[2].color+"")&&O(e,n),a&1&&S(s,"color",t[2].color)},d(t){t&&(c(s),c(r))}}}function y(o,s){let n,e,r;return e=new L({props:{minSize:10,$$slots:{default:[W]},$$scope:{ctx:s}}}),{key:o,first:null,c(){n=$(),f(e.$$.fragment),this.h()},l(t){n=$(),_(e.$$.fragment,t),this.h()},h(){this.first=n},m(t,a){i(t,n,a),g(e,t,a),r=!0},p(t,a){s=t;const l={};a&33&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){t&&c(n),d(e,t)}}}function X(o){let s=[],n=new Map,e,r,t=v(o[0]);const a=l=>l[2];for(let l=0;l<t.length;l+=1){let p=x(o,t,l),h=a(p);n.set(h,s[l]=y(h,p))}return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=$()},l(l){for(let p=0;p<s.length;p+=1)s[p].l(l);e=$()},m(l,p){for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(l,p);i(l,e,p),r=!0},p(l,p){p&1&&(t=v(l[0]),E(),s=M(s,p,a,1,l,t,n,e.parentNode,A,y,e,x),T())},i(l){if(!r){for(let p=0;p<t.length;p+=1)m(s[p]);r=!0}},o(l){for(let p=0;p<s.length;p+=1)u(s[p]);r=!1},d(l){l&&c(e);for(let p=0;p<s.length;p+=1)s[p].d(l)}}}function Y(o){let s,n,e,r;return s=new Q({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),s.$on("click",o[1]),e=new K({props:{style:"height: 400px",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){f(s.$$.fragment),n=j(),f(e.$$.fragment)},l(t){_(s.$$.fragment,t),n=k(t),_(e.$$.fragment,t)},m(t,a){g(s,t,a),i(t,n,a),g(e,t,a),r=!0},p(t,[a]){const l={};a&32&&(l.$$scope={dirty:a,ctx:t}),s.$set(l);const p={};a&33&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(m(s.$$.fragment,t),m(e.$$.fragment,t),r=!0)},o(t){u(s.$$.fragment,t),u(e.$$.fragment,t),r=!1},d(t){t&&c(n),d(s,t),d(e,t)}}}function Z(o,s,n){let e=[{color:"red"},{color:"blue"}];return[e,()=>{const t=e[0];n(0,e[0]=e[1],e),n(0,e[1]=t,e)}]}class F extends w{constructor(s){super(),P(this,s,Z,Y,b,{})}}const G=`<script>
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
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,ss={code:G,highlightedHTML:J,component:F};function ts(o){let s,n="Reordering Panes",e,r,t;return r=new I({props:{example:ss}}),{c(){s=z("h2"),s.textContent=n,e=j(),f(r.$$.fragment)},l(a){s=q(a,"H2",{["data-svelte-h"]:!0}),R(s)!=="svelte-120o72g"&&(s.textContent=n),e=k(a),_(r.$$.fragment,a)},m(a,l){i(a,s,l),i(a,e,l),g(r,a,l),t=!0},p:D,i(a){t||(m(r.$$.fragment,a),t=!0)},o(a){u(r.$$.fragment,a),t=!1},d(a){a&&(c(s),c(e)),d(r,a)}}}class ps extends w{constructor(s){super(),P(this,s,null,ts,b,{})}}export{ps as component,rs as universal};
