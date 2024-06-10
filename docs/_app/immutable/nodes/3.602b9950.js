import{S as B,i as x,s as R,P as h,a as j,Q as g,f as d,R as $,j as i,n as m,o as u,g as c,U as _,X as N,Y as v,_ as E,D as k,T as M,V as O,$ as C,e as y,b as T,d as V,k as z,K as D,I as q}from"../chunks/external.8baa82f9.js";import{E as H}from"../chunks/ExampleArea.6afffe12.js";import{S as I,P as K}from"../chunks/svelte-splitpanes.7fec58cd.js";import{B as w}from"../chunks/Button.73246cd4.js";const L=!0,ps=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function S(r,s,l){const e=r.slice();return e[4]=s[l],e[6]=l,e}function Q(r){let s;return{c(){s=N("+ ADD PANE")},l(l){s=v(l,"+ ADD PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function U(r){let s;return{c(){s=N("- REMOVE PANE")},l(l){s=v(l,"- REMOVE PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function X(r){let s,l=r[6]+1+"",e,t;return{c(){s=y("span"),e=N(l),t=j()},l(o){s=T(o,"SPAN",{});var n=V(s);e=v(n,l),n.forEach(c),t=d(o)},m(o,n){i(o,s,n),z(s,e),i(o,t,n)},p:D,d(o){o&&(c(s),c(t))}}}function A(r){let s,l;return s=new K({props:{minSize:10,$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,t){$(s,e,t),l=!0},p(e,t){const o={};t&128&&(o.$$scope={dirty:t,ctx:e}),s.$set(o)},i(e){l||(m(s.$$.fragment,e),l=!0)},o(e){u(s.$$.fragment,e),l=!1},d(e){_(s,e)}}}function Y(r){let s,l,e=E({length:r[0]}),t=[];for(let n=0;n<e.length;n+=1)t[n]=A(S(r,e,n));const o=n=>u(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();s=k()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);s=k()},m(n,a){for(let p=0;p<t.length;p+=1)t[p]&&t[p].m(n,a);i(n,s,a),l=!0},p(n,a){if(a&1){e=E({length:n[0]});let p;for(p=0;p<e.length;p+=1){const f=S(n,e,p);t[p]?(t[p].p(f,a),m(t[p],1)):(t[p]=A(f),t[p].c(),m(t[p],1),t[p].m(s.parentNode,s))}for(M(),p=e.length;p<t.length;p+=1)o(p);O()}},i(n){if(!l){for(let a=0;a<e.length;a+=1)m(t[a]);l=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)u(t[a]);l=!1},d(n){n&&c(s),C(t,n)}}}function F(r){let s,l,e,t,o,n;return s=new w({props:{$$slots:{default:[Q]},$$scope:{ctx:r}}}),s.$on("click",r[2]),e=new w({props:{disabled:!r[1],$$slots:{default:[U]},$$scope:{ctx:r}}}),e.$on("click",r[3]),o=new I({props:{style:"height: 400px",$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment),l=j(),h(e.$$.fragment),t=j(),h(o.$$.fragment)},l(a){g(s.$$.fragment,a),l=d(a),g(e.$$.fragment,a),t=d(a),g(o.$$.fragment,a)},m(a,p){$(s,a,p),i(a,l,p),$(e,a,p),i(a,t,p),$(o,a,p),n=!0},p(a,[p]){const f={};p&128&&(f.$$scope={dirty:p,ctx:a}),s.$set(f);const b={};p&2&&(b.disabled=!a[1]),p&128&&(b.$$scope={dirty:p,ctx:a}),e.$set(b);const P={};p&129&&(P.$$scope={dirty:p,ctx:a}),o.$set(P)},i(a){n||(m(s.$$.fragment,a),m(e.$$.fragment,a),m(o.$$.fragment,a),n=!0)},o(a){u(s.$$.fragment,a),u(e.$$.fragment,a),u(o.$$.fragment,a),n=!1},d(a){a&&(c(l),c(t)),_(s,a),_(e,a),_(o,a)}}}function G(r,s,l){let e,t=3;const o=()=>{l(0,t++,t)},n=()=>{e&&l(0,t--,t)};return r.$$.update=()=>{r.$$.dirty&1&&l(1,e=t>0)},[t,e,o,n]}class J extends B{constructor(s){super(),x(this,s,G,F,R,{})}}const W=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let panesNumber = 3;
	$: allowToRemove = panesNumber > 0;
<\/script>

<Button
	on:click={() => {
		panesNumber++;
	}}>+ ADD PANE</Button>
<Button
	disabled={!allowToRemove}
	on:click={() => {
		if (allowToRemove) panesNumber--;
	}}>- REMOVE PANE</Button>

<Splitpanes style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,Z=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> panesNumber = <span class="hljs-number">3</span>;
	<span class="hljs-attr">$</span>: allowToRemove = panesNumber &gt; <span class="hljs-number">0</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		panesNumber++;
	}}&gt;+ ADD PANE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">disabled</span>=<span class="hljs-string">{!allowToRemove}</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		if (allowToRemove) panesNumber--;
	}}&gt;- REMOVE PANE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each { length: panesNumber } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,ss={code:W,highlightedHTML:Z,component:J};function ts(r){let s,l="Adding and removing panes programmatically",e,t,o;return t=new H({props:{example:ss}}),{c(){s=y("h2"),s.textContent=l,e=j(),h(t.$$.fragment)},l(n){s=T(n,"H2",{"data-svelte-h":!0}),q(s)!=="svelte-iec5ra"&&(s.textContent=l),e=d(n),g(t.$$.fragment,n)},m(n,a){i(n,s,a),i(n,e,a),$(t,n,a),o=!0},p:D,i(n){o||(m(t.$$.fragment,n),o=!0)},o(n){u(t.$$.fragment,n),o=!1},d(n){n&&(c(s),c(e)),_(t,n)}}}class os extends B{constructor(s){super(),x(this,s,null,ts,R,{})}}export{os as component,ps as universal};
