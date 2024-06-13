import{S as y,i as P,s as b,P as f,a as _,Q as u,f as d,R as g,j as h,n as i,o as m,g as c,U as $,X as B,Y as C,_ as x,D as S,T as E,V as T,$ as A,e as z,b as q,d as H,W as v,k as M,Z as N,I as O,K as R}from"../chunks/external.B2Lk-HvR.js";import{E as D}from"../chunks/ExampleArea.tFyi-GEL.js";import{S as I,P as K}from"../chunks/svelte-splitpanes.59ZJovYr.js";import{B as L}from"../chunks/Button.BluB7Efk.js";const Q=!0,ls=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));function k(p,t,l){const n=p.slice();return n[2]=t[l],n}function U(p){let t;return{c(){t=B("Switch")},l(l){t=C(l,"Switch")},m(l,n){h(l,t,n)},d(l){l&&c(t)}}}function V(p){let t,l=p[2].color+"",n,e;return{c(){t=z("span"),n=B(l),e=_(),this.h()},l(a){t=q(a,"SPAN",{});var s=H(t);n=C(s,l),s.forEach(c),e=d(a),this.h()},h(){v(t,"color",p[2].color)},m(a,s){h(a,t,s),M(t,n),h(a,e,s)},p(a,s){s&1&&l!==(l=a[2].color+"")&&N(n,l),s&1&&v(t,"color",a[2].color)},d(a){a&&(c(t),c(e))}}}function w(p){let t,l;return t=new K({props:{minSize:10,$$slots:{default:[V]},$$scope:{ctx:p}}}),{c(){f(t.$$.fragment)},l(n){u(t.$$.fragment,n)},m(n,e){g(t,n,e),l=!0},p(n,e){const a={};e&33&&(a.$$scope={dirty:e,ctx:n}),t.$set(a)},i(n){l||(i(t.$$.fragment,n),l=!0)},o(n){m(t.$$.fragment,n),l=!1},d(n){$(t,n)}}}function W(p){let t,l,n=x(p[0]),e=[];for(let s=0;s<n.length;s+=1)e[s]=w(k(p,n,s));const a=s=>m(e[s],1,1,()=>{e[s]=null});return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=S()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);t=S()},m(s,o){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(s,o);h(s,t,o),l=!0},p(s,o){if(o&1){n=x(s[0]);let r;for(r=0;r<n.length;r+=1){const j=k(s,n,r);e[r]?(e[r].p(j,o),i(e[r],1)):(e[r]=w(j),e[r].c(),i(e[r],1),e[r].m(t.parentNode,t))}for(E(),r=n.length;r<e.length;r+=1)a(r);T()}},i(s){if(!l){for(let o=0;o<n.length;o+=1)i(e[o]);l=!0}},o(s){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)m(e[o]);l=!1},d(s){s&&c(t),A(e,s)}}}function X(p){let t,l,n,e;return t=new L({props:{$$slots:{default:[U]},$$scope:{ctx:p}}}),t.$on("click",p[1]),n=new I({props:{style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:p}}}),{c(){f(t.$$.fragment),l=_(),f(n.$$.fragment)},l(a){u(t.$$.fragment,a),l=d(a),u(n.$$.fragment,a)},m(a,s){g(t,a,s),h(a,l,s),g(n,a,s),e=!0},p(a,[s]){const o={};s&32&&(o.$$scope={dirty:s,ctx:a}),t.$set(o);const r={};s&33&&(r.$$scope={dirty:s,ctx:a}),n.$set(r)},i(a){e||(i(t.$$.fragment,a),i(n.$$.fragment,a),e=!0)},o(a){m(t.$$.fragment,a),m(n.$$.fragment,a),e=!1},d(a){a&&c(l),$(t,a),$(n,a)}}}function Y(p,t,l){const n=[{color:"red"},{color:"blue"}];return[n,()=>{const a=n[0];l(0,n[0]=n[1],n),l(0,n[1]=a,n)}]}class Z extends y{constructor(t){super(),P(this,t,Y,X,b,{})}}const F=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	const ordered = [{ color: 'red' }, { color: 'blue' }];
<\/script>

<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button>
<Splitpanes style="height: 400px">
	{#each ordered as val}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>
`,G=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">const</span> ordered = [{ <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span> }, { <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;blue&#x27;</span> }];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}&gt;Switch<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each ordered as val}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style:color</span>=<span class="hljs-string">{val.color}</span>&gt;</span>{val.color}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,J={code:F,highlightedHTML:G,component:Z};function ss(p){let t,l="Reordering Panes",n,e,a;return e=new D({props:{example:J}}),{c(){t=z("h2"),t.textContent=l,n=_(),f(e.$$.fragment)},l(s){t=q(s,"H2",{"data-svelte-h":!0}),O(t)!=="svelte-120o72g"&&(t.textContent=l),n=d(s),u(e.$$.fragment,s)},m(s,o){h(s,t,o),h(s,n,o),g(e,s,o),a=!0},p:R,i(s){a||(i(e.$$.fragment,s),a=!0)},o(s){m(e.$$.fragment,s),a=!1},d(s){s&&(c(t),c(n)),$(e,s)}}}class os extends y{constructor(t){super(),P(this,t,null,ss,b,{})}}export{os as component,ls as universal};
