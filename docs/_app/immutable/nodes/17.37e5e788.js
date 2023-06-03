import{S as E,i as H,s as T,O as $,a as d,P as u,f as v,Q as g,j as f,n as i,o as m,T as h,g as r,I as j,J as _,W as A,R as N,U as q,e as P,b,d as S,k,L as w}from"../chunks/external.abc2cc24.js";import{E as O}from"../chunks/ExampleArea.41bfe997.js";import{S as L,P as x}from"../chunks/svelte-splitpanes.7756a9a9.js";import{B as M}from"../chunks/Button.315647a6.js";const z=!0,as=Object.freeze(Object.defineProperty({__proto__:null,prerender:z},Symbol.toStringTag,{value:"Module"}));function I(c){let s=c[0]?"Hide":"Show",e;return{c(){e=j(s)},l(n){e=_(n,s)},m(n,a){f(n,e,a)},p(n,a){a&1&&s!==(s=n[0]?"Hide":"Show")&&A(e,s)},d(n){n&&r(e)}}}function J(c){let s,e;return{c(){s=P("span"),e=j("1")},l(n){s=b(n,"SPAN",{});var a=S(s);e=_(a,"1"),a.forEach(r)},m(n,a){f(n,s,a),k(s,e)},p:w,d(n){n&&r(s)}}}function C(c){let s,e;return s=new x({props:{$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){$(s.$$.fragment)},l(n){u(s.$$.fragment,n)},m(n,a){g(s,n,a),e=!0},i(n){e||(i(s.$$.fragment,n),e=!0)},o(n){m(s.$$.fragment,n),e=!1},d(n){h(s,n)}}}function Q(c){let s,e;return{c(){s=P("span"),e=j("2")},l(n){s=b(n,"SPAN",{});var a=S(s);e=_(a,"2"),a.forEach(r)},m(n,a){f(n,s,a),k(s,e)},p:w,d(n){n&&r(s)}}}function R(c){let s,e;return{c(){s=P("span"),e=j("3")},l(n){s=b(n,"SPAN",{});var a=S(s);e=_(a,"3"),a.forEach(r)},m(n,a){f(n,s,a),k(s,e)},p:w,d(n){n&&r(s)}}}function U(c){let s,e,n,a,p;s=new x({props:{$$slots:{default:[J]},$$scope:{ctx:c}}});let t=c[0]&&C(c);return a=new x({props:{$$slots:{default:[R]},$$scope:{ctx:c}}}),{c(){$(s.$$.fragment),e=d(),t&&t.c(),n=d(),$(a.$$.fragment)},l(l){u(s.$$.fragment,l),e=v(l),t&&t.l(l),n=v(l),u(a.$$.fragment,l)},m(l,o){g(s,l,o),f(l,e,o),t&&t.m(l,o),f(l,n,o),g(a,l,o),p=!0},p(l,o){const B={};o&4&&(B.$$scope={dirty:o,ctx:l}),s.$set(B),l[0]?t?o&1&&i(t,1):(t=C(l),t.c(),i(t,1),t.m(n.parentNode,n)):t&&(N(),m(t,1,1,()=>{t=null}),q());const y={};o&4&&(y.$$scope={dirty:o,ctx:l}),a.$set(y)},i(l){p||(i(s.$$.fragment,l),i(t),i(a.$$.fragment,l),p=!0)},o(l){m(s.$$.fragment,l),m(t),m(a.$$.fragment,l),p=!1},d(l){h(s,l),l&&r(e),t&&t.d(l),l&&r(n),h(a,l)}}}function W(c){let s,e,n,a;return s=new M({props:{$$slots:{default:[I]},$$scope:{ctx:c}}}),s.$on("click",c[1]),n=new L({props:{style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){$(s.$$.fragment),e=d(),$(n.$$.fragment)},l(p){u(s.$$.fragment,p),e=v(p),u(n.$$.fragment,p)},m(p,t){g(s,p,t),f(p,e,t),g(n,p,t),a=!0},p(p,[t]){const l={};t&5&&(l.$$scope={dirty:t,ctx:p}),s.$set(l);const o={};t&5&&(o.$$scope={dirty:t,ctx:p}),n.$set(o)},i(p){a||(i(s.$$.fragment,p),i(n.$$.fragment,p),a=!0)},o(p){m(s.$$.fragment,p),m(n.$$.fragment,p),a=!1},d(p){h(s,p),p&&r(e),h(n,p)}}}function D(c,s,e){function n(){e(0,a=!a)}let a=!0;return[a,n]}class F extends E{constructor(s){super(),H(this,s,D,W,T,{})}}const G=`<script>
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
`,K=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,V={code:G,highlightedHTML:K,component:F};function X(c){let s,e,n,a,p;return a=new O({props:{example:V}}),{c(){s=P("h2"),e=j("Toggle a pane on/off"),n=d(),$(a.$$.fragment)},l(t){s=b(t,"H2",{});var l=S(s);e=_(l,"Toggle a pane on/off"),l.forEach(r),n=v(t),u(a.$$.fragment,t)},m(t,l){f(t,s,l),k(s,e),f(t,n,l),g(a,t,l),p=!0},p:w,i(t){p||(i(a.$$.fragment,t),p=!0)},o(t){m(a.$$.fragment,t),p=!1},d(t){t&&r(s),t&&r(n),h(a,t)}}}class ts extends E{constructor(s){super(),H(this,s,null,X,T,{})}}export{ts as component,as as universal};
