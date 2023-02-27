import{S as A,i as N,s as T,O as u,a as P,P as m,f as S,Q as _,j as $,n as i,o as c,R as g,g as p,J as d,K as v,L as j,M as q,H as J,e as b,b as h,d as k,k as w,U as x}from"../chunks/external.475640e5.js";import{E as K}from"../chunks/ExampleArea.910fd3f7.js";import{S as L,P as B}from"../chunks/svelte-splitpanes.d35726cb.js";import{B as M}from"../chunks/Button.3933f6b6.js";function O(l){let e=l[0]?"Hide":"Show",a;return{c(){a=d(e)},l(t){a=v(t,e)},m(t,n){$(t,a,n)},p(t,n){n&1&&e!==(e=t[0]?"Hide":"Show")&&j(a,e)},d(t){t&&p(a)}}}function Q(l){let e,a;return{c(){e=b("span"),a=d("1")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"1"),n.forEach(p)},m(t,n){$(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function H(l){let e,a;return e=new B({props:{$$slots:{default:[R]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){_(e,t,n),a=!0},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}function R(l){let e,a;return{c(){e=b("span"),a=d("2")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"2"),n.forEach(p)},m(t,n){$(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function U(l){let e,a;return{c(){e=b("span"),a=d("3")},l(t){e=h(t,"SPAN",{});var n=k(e);a=v(n,"3"),n.forEach(p)},m(t,n){$(t,e,n),w(e,a)},p:x,d(t){t&&p(e)}}}function z(l){let e,a,t,n,r;e=new B({props:{$$slots:{default:[Q]},$$scope:{ctx:l}}});let s=l[0]&&H(l);return n=new B({props:{$$slots:{default:[U]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment),a=P(),s&&s.c(),t=P(),u(n.$$.fragment)},l(o){m(e.$$.fragment,o),a=S(o),s&&s.l(o),t=S(o),m(n.$$.fragment,o)},m(o,f){_(e,o,f),$(o,a,f),s&&s.m(o,f),$(o,t,f),_(n,o,f),r=!0},p(o,f){const E={};f&4&&(E.$$scope={dirty:f,ctx:o}),e.$set(E),o[0]?s?f&1&&i(s,1):(s=H(o),s.c(),i(s,1),s.m(t.parentNode,t)):s&&(q(),c(s,1,1,()=>{s=null}),J());const C={};f&4&&(C.$$scope={dirty:f,ctx:o}),n.$set(C)},i(o){r||(i(e.$$.fragment,o),i(s),i(n.$$.fragment,o),r=!0)},o(o){c(e.$$.fragment,o),c(s),c(n.$$.fragment,o),r=!1},d(o){g(e,o),o&&p(a),s&&s.d(o),o&&p(t),g(n,o)}}}function D(l){let e,a,t,n;return e=new M({props:{$$slots:{default:[O]},$$scope:{ctx:l}}}),e.$on("click",l[1]),t=new L({props:{style:"height: 400px",$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){u(e.$$.fragment),a=P(),u(t.$$.fragment)},l(r){m(e.$$.fragment,r),a=S(r),m(t.$$.fragment,r)},m(r,s){_(e,r,s),$(r,a,s),_(t,r,s),n=!0},p(r,[s]){const o={};s&5&&(o.$$scope={dirty:s,ctx:r}),e.$set(o);const f={};s&5&&(f.$$scope={dirty:s,ctx:r}),t.$set(f)},i(r){n||(i(e.$$.fragment,r),i(t.$$.fragment,r),n=!0)},o(r){c(e.$$.fragment,r),c(t.$$.fragment,r),n=!1},d(r){g(e,r),r&&p(a),g(t,r)}}}function F(l,e,a){function t(){a(0,n=!n)}let n=!0;return[n,t]}class G extends A{constructor(e){super(),N(this,e,F,D,T,{})}}const I=`<script>
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
`,V="../../src/routes/examples/toggle-panes/code.svelte",W={id:V,code:I,component:G};function X(l){let e,a,t,n,r;return n=new K({props:{example:W}}),{c(){e=b("h2"),a=d("Toggle a pane on/off"),t=P(),u(n.$$.fragment)},l(s){e=h(s,"H2",{});var o=k(e);a=v(o,"Toggle a pane on/off"),o.forEach(p),t=S(s),m(n.$$.fragment,s)},m(s,o){$(s,e,o),w(e,a),$(s,t,o),_(n,s,o),r=!0},p:x,i(s){r||(i(n.$$.fragment,s),r=!0)},o(s){c(n.$$.fragment,s),r=!1},d(s){s&&p(e),s&&p(t),g(n,s)}}}class te extends A{constructor(e){super(),N(this,e,null,X,T,{})}}export{te as default};
