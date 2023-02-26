import{S as A,i as H,s as T,Q as u,a as P,R as m,f as S,T as _,j as i,n as $,o as c,V as g,g as p,L as d,M as v,N as j,$ as q,a0 as I,e as b,b as h,d as k,k as w,I as x}from"../../../../chunks/external-d85c8993.js";import{E as L}from"../../../../chunks/ExampleArea-f46d4af6.js";import{S as M,P as B}from"../../../../chunks/svelte-splitpanes-8bdc904d.js";import{B as Q}from"../../../../chunks/Button-8f2c85d3.js";function R(l){let e=l[0]?"Hide":"Show",a;return{c(){a=d(e)},l(t){a=v(t,e)},m(t,n){i(t,a,n)},p(t,n){n&1&&e!==(e=t[0]?"Hide":"Show")&&j(a,e)},d(t){t&&p(a)}}}function V(l){let e,a;return{c(){e=b("span"),a=d("1")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"1"),n.forEach(p)},m(t,n){i(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function N(l){let e,a;return e=new B({props:{$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){_(e,t,n),a=!0},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}function z(l){let e,a;return{c(){e=b("span"),a=d("2")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"2"),n.forEach(p)},m(t,n){i(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function D(l){let e,a;return{c(){e=b("span"),a=d("3")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"3"),n.forEach(p)},m(t,n){i(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function F(l){let e,a,t,n,r;e=new B({props:{$$slots:{default:[V]},$$scope:{ctx:l}}});let s=l[0]&&N(l);return n=new B({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment),a=P(),s&&s.c(),t=P(),u(n.$$.fragment)},l(o){m(e.$$.fragment,o),a=S(o),s&&s.l(o),t=S(o),m(n.$$.fragment,o)},m(o,f){_(e,o,f),i(o,a,f),s&&s.m(o,f),i(o,t,f),_(n,o,f),r=!0},p(o,f){const E={};f&4&&(E.$$scope={dirty:f,ctx:o}),e.$set(E),o[0]?s?f&1&&$(s,1):(s=N(o),s.c(),$(s,1),s.m(t.parentNode,t)):s&&(q(),c(s,1,1,()=>{s=null}),I());const C={};f&4&&(C.$$scope={dirty:f,ctx:o}),n.$set(C)},i(o){r||($(e.$$.fragment,o),$(s),$(n.$$.fragment,o),r=!0)},o(o){c(e.$$.fragment,o),c(s),c(n.$$.fragment,o),r=!1},d(o){g(e,o),o&&p(a),s&&s.d(o),o&&p(t),g(n,o)}}}function G(l){let e,a,t,n;return e=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:l}}}),e.$on("click",l[1]),t=new M({props:{style:"height: 400px",$$slots:{default:[F]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment),a=P(),u(t.$$.fragment)},l(r){m(e.$$.fragment,r),a=S(r),m(t.$$.fragment,r)},m(r,s){_(e,r,s),i(r,a,s),_(t,r,s),n=!0},p(r,[s]){const o={};s&5&&(o.$$scope={dirty:s,ctx:r}),e.$set(o);const f={};s&5&&(f.$$scope={dirty:s,ctx:r}),t.$set(f)},i(r){n||($(e.$$.fragment,r),$(t.$$.fragment,r),n=!0)},o(r){c(e.$$.fragment,r),c(t.$$.fragment,r),n=!1},d(r){g(e,r),r&&p(a),g(t,r)}}}function J(l,e,a){function t(){a(0,n=!n)}let n=!0;return[n,t]}class K extends A{constructor(e){super(),H(this,e,J,G,T,{})}}const O=`<script>
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
`,U="../../src/routes/examples/toggle-panes/code.svelte",W={id:U,code:O,component:K};function X(l){let e,a,t,n,r;return n=new L({props:{example:W}}),{c(){e=b("h2"),a=d("Toggle a pane on/off"),t=P(),u(n.$$.fragment)},l(s){e=h(s,"H2",{});var o=k(e);a=v(o,"Toggle a pane on/off"),o.forEach(p),t=S(s),m(n.$$.fragment,s)},m(s,o){i(s,e,o),w(e,a),i(s,t,o),_(n,s,o),r=!0},p:x,i(s){r||($(n.$$.fragment,s),r=!0)},o(s){c(n.$$.fragment,s),r=!1},d(s){s&&p(e),s&&p(t),g(n,s)}}}class te extends A{constructor(e){super(),H(this,e,null,X,T,{})}}export{te as default};
