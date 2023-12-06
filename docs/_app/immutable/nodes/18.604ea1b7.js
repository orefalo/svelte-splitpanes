import{S as w,i as B,s as y,P as u,a as j,Q as $,f as _,R as g,j as i,n as r,o as m,g as f,U as h,X as H,Y as q,Z as A,T as N,V as T,e as v,b as x,I as d,K as P}from"../chunks/external.e91d7dd1.js";import{E as z}from"../chunks/ExampleArea.082a8eae.js";import{S as E,P as b}from"../chunks/svelte-splitpanes.2918fd3e.js";import{B as M}from"../chunks/Button.e64cdfe0.js";const O=!0,ts=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function I(o){let s=o[0]?"Hide":"Show",e;return{c(){e=H(s)},l(t){e=q(t,s)},m(t,a){i(t,e,a)},p(t,a){a&1&&s!==(s=t[0]?"Hide":"Show")&&A(e,s)},d(t){t&&f(e)}}}function K(o){let s,e="1";return{c(){s=v("span"),s.textContent=e},l(t){s=x(t,"SPAN",{["data-svelte-h"]:!0}),d(s)!=="svelte-4rug0j"&&(s.textContent=e)},m(t,a){i(t,s,a)},p:P,d(t){t&&f(s)}}}function k(o){let s,e;return s=new b({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){g(s,t,a),e=!0},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){m(s.$$.fragment,t),e=!1},d(t){h(s,t)}}}function L(o){let s,e="2";return{c(){s=v("span"),s.textContent=e},l(t){s=x(t,"SPAN",{["data-svelte-h"]:!0}),d(s)!=="svelte-1o38sr4"&&(s.textContent=e)},m(t,a){i(t,s,a)},p:P,d(t){t&&f(s)}}}function Q(o){let s,e="3";return{c(){s=v("span"),s.textContent=e},l(t){s=x(t,"SPAN",{["data-svelte-h"]:!0}),d(s)!=="svelte-100q5wx"&&(s.textContent=e)},m(t,a){i(t,s,a)},p:P,d(t){t&&f(s)}}}function R(o){let s,e,t,a,p;s=new b({props:{$$slots:{default:[K]},$$scope:{ctx:o}}});let n=o[0]&&k(o);return a=new b({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment),e=j(),n&&n.c(),t=j(),u(a.$$.fragment)},l(l){$(s.$$.fragment,l),e=_(l),n&&n.l(l),t=_(l),$(a.$$.fragment,l)},m(l,c){g(s,l,c),i(l,e,c),n&&n.m(l,c),i(l,t,c),g(a,l,c),p=!0},p(l,c){const C={};c&4&&(C.$$scope={dirty:c,ctx:l}),s.$set(C),l[0]?n?c&1&&r(n,1):(n=k(l),n.c(),r(n,1),n.m(t.parentNode,t)):n&&(N(),m(n,1,1,()=>{n=null}),T());const S={};c&4&&(S.$$scope={dirty:c,ctx:l}),a.$set(S)},i(l){p||(r(s.$$.fragment,l),r(n),r(a.$$.fragment,l),p=!0)},o(l){m(s.$$.fragment,l),m(n),m(a.$$.fragment,l),p=!1},d(l){l&&(f(e),f(t)),h(s,l),n&&n.d(l),h(a,l)}}}function U(o){let s,e,t,a;return s=new M({props:{$$slots:{default:[I]},$$scope:{ctx:o}}}),s.$on("click",o[1]),t=new E({props:{style:"height: 400px",$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment),e=j(),u(t.$$.fragment)},l(p){$(s.$$.fragment,p),e=_(p),$(t.$$.fragment,p)},m(p,n){g(s,p,n),i(p,e,n),g(t,p,n),a=!0},p(p,[n]){const l={};n&5&&(l.$$scope={dirty:n,ctx:p}),s.$set(l);const c={};n&5&&(c.$$scope={dirty:n,ctx:p}),t.$set(c)},i(p){a||(r(s.$$.fragment,p),r(t.$$.fragment,p),a=!0)},o(p){m(s.$$.fragment,p),m(t.$$.fragment,p),a=!1},d(p){p&&f(e),h(s,p),h(t,p)}}}function V(o,s,e){function t(){e(0,a=!a)}let a=!0;return[a,t]}class X extends w{constructor(s){super(),B(this,s,V,U,y,{})}}const Y=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	function onClick() {
		visible = !visible;
	}

	let visible = true;
<\/script>

<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>

<Splitpanes style="height: 400px">
	<Pane>
		<span>1</span>
	</Pane>
	{#if visible}
		<Pane>
			<span>2</span>
		</Pane>
	{/if}
	<Pane>
		<span>3</span>
	</Pane>
</Splitpanes>
`,Z=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">onClick</span>(<span class="hljs-params"></span>) {
		visible = !visible;
	}

	<span class="hljs-keyword">let</span> visible = <span class="hljs-literal">true</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">on:click</span>=<span class="hljs-string">{onClick}</span>&gt;</span>{visible ? &#x27;Hide&#x27; : &#x27;Show&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{#if visible}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/if}
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,D={code:Y,highlightedHTML:Z,component:X};function F(o){let s,e="Toggle a pane on/off",t,a,p;return a=new z({props:{example:D}}),{c(){s=v("h2"),s.textContent=e,t=j(),u(a.$$.fragment)},l(n){s=x(n,"H2",{["data-svelte-h"]:!0}),d(s)!=="svelte-1ctmzkw"&&(s.textContent=e),t=_(n),$(a.$$.fragment,n)},m(n,l){i(n,s,l),i(n,t,l),g(a,n,l),p=!0},p:P,i(n){p||(r(a.$$.fragment,n),p=!0)},o(n){m(a.$$.fragment,n),p=!1},d(n){n&&(f(s),f(t)),h(a,n)}}}class ns extends w{constructor(s){super(),B(this,s,null,F,y,{})}}export{ns as component,ts as universal};
