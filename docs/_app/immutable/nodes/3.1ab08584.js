import{S,i as B,s as R,O as h,a as j,P as g,f as d,Q as $,j as i,n as m,o as u,T as _,g as c,I as b,J as N,D as v,R as M,U as z,X as V,e as x,b as y,d as T,k as D,L as O}from"../chunks/external.a92f57e2.js";import{E as q}from"../chunks/ExampleArea.c0fd3cca.js";import{S as C,P as H}from"../chunks/svelte-splitpanes.d91c4d32.js";import{B as k}from"../chunks/Button.58674c62.js";const L=!0,es=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function w(r,s,l){const e=r.slice();return e[4]=s[l],e[6]=l,e}function I(r){let s;return{c(){s=b("+ ADD PANE")},l(l){s=N(l,"+ ADD PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function J(r){let s;return{c(){s=b("- REMOVE PANE")},l(l){s=N(l,"- REMOVE PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function Q(r){let s,l=r[6]+1+"",e,t;return{c(){s=x("span"),e=b(l),t=j()},l(o){s=y(o,"SPAN",{});var a=T(s);e=N(a,l),a.forEach(c),t=d(o)},m(o,a){i(o,s,a),D(s,e),i(o,t,a)},p:O,d(o){o&&c(s),o&&c(t)}}}function A(r){let s,l;return s=new H({props:{minSize:10,$$slots:{default:[Q]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,t){$(s,e,t),l=!0},p(e,t){const o={};t&128&&(o.$$scope={dirty:t,ctx:e}),s.$set(o)},i(e){l||(m(s.$$.fragment,e),l=!0)},o(e){u(s.$$.fragment,e),l=!1},d(e){_(s,e)}}}function U(r){let s,l,e={length:r[0]},t=[];for(let a=0;a<e.length;a+=1)t[a]=A(w(r,e,a));const o=a=>u(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();s=v()},l(a){for(let n=0;n<t.length;n+=1)t[n].l(a);s=v()},m(a,n){for(let p=0;p<t.length;p+=1)t[p]&&t[p].m(a,n);i(a,s,n),l=!0},p(a,n){if(n&1){e={length:a[0]};let p;for(p=0;p<e.length;p+=1){const f=w(a,e,p);t[p]?(t[p].p(f,n),m(t[p],1)):(t[p]=A(f),t[p].c(),m(t[p],1),t[p].m(s.parentNode,s))}for(M(),p=e.length;p<t.length;p+=1)o(p);z()}},i(a){if(!l){for(let n=0;n<e.length;n+=1)m(t[n]);l=!0}},o(a){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)u(t[n]);l=!1},d(a){V(t,a),a&&c(s)}}}function X(r){let s,l,e,t,o,a;return s=new k({props:{$$slots:{default:[I]},$$scope:{ctx:r}}}),s.$on("click",r[2]),e=new k({props:{disabled:!r[1],$$slots:{default:[J]},$$scope:{ctx:r}}}),e.$on("click",r[3]),o=new C({props:{style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment),l=j(),h(e.$$.fragment),t=j(),h(o.$$.fragment)},l(n){g(s.$$.fragment,n),l=d(n),g(e.$$.fragment,n),t=d(n),g(o.$$.fragment,n)},m(n,p){$(s,n,p),i(n,l,p),$(e,n,p),i(n,t,p),$(o,n,p),a=!0},p(n,[p]){const f={};p&128&&(f.$$scope={dirty:p,ctx:n}),s.$set(f);const E={};p&2&&(E.disabled=!n[1]),p&128&&(E.$$scope={dirty:p,ctx:n}),e.$set(E);const P={};p&129&&(P.$$scope={dirty:p,ctx:n}),o.$set(P)},i(n){a||(m(s.$$.fragment,n),m(e.$$.fragment,n),m(o.$$.fragment,n),a=!0)},o(n){u(s.$$.fragment,n),u(e.$$.fragment,n),u(o.$$.fragment,n),a=!1},d(n){_(s,n),n&&c(l),_(e,n),n&&c(t),_(o,n)}}}function F(r,s,l){let e,t=3;const o=()=>{l(0,t++,t)},a=()=>{e&&l(0,t--,t)};return r.$$.update=()=>{r.$$.dirty&1&&l(1,e=t>0)},[t,e,o,a]}class G extends S{constructor(s){super(),B(this,s,F,X,R,{})}}const K=`<script>
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
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,Y={code:K,highlightedHTML:W,component:G};function Z(r){let s,l,e,t,o;return t=new q({props:{example:Y}}),{c(){s=x("h2"),l=b("Adding and removing panes programmatically"),e=j(),h(t.$$.fragment)},l(a){s=y(a,"H2",{});var n=T(s);l=N(n,"Adding and removing panes programmatically"),n.forEach(c),e=d(a),g(t.$$.fragment,a)},m(a,n){i(a,s,n),D(s,l),i(a,e,n),$(t,a,n),o=!0},p:O,i(a){o||(m(t.$$.fragment,a),o=!0)},o(a){u(t.$$.fragment,a),o=!1},d(a){a&&c(s),a&&c(e),_(t,a)}}}class ls extends S{constructor(s){super(),B(this,s,null,Z,R,{})}}export{ls as component,es as universal};
