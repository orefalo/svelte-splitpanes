import{S as z,i as C,s as L,O as u,P as c,Q as m,n as i,o as _,R as g,a as b,f as O,j as o,g as l,e as h,J as d,b as S,d as v,K as w,k as x,U as E}from"../chunks/external.475640e5.js";import{E as q}from"../chunks/ExampleArea.910fd3f7.js";import{S as j,P}from"../chunks/svelte-splitpanes.d35726cb.js";function H(f){let e,a;return{c(){e=h("span"),a=d("1")},l(t){e=S(t,"SPAN",{});var s=v(e);a=w(s,"1"),s.forEach(l)},m(t,s){o(t,e,s),x(e,a)},p:E,d(t){t&&l(e)}}}function J(f){let e,a;return{c(){e=h("span"),a=d("2")},l(t){e=S(t,"SPAN",{});var s=v(e);a=w(s,"2"),s.forEach(l)},m(t,s){o(t,e,s),x(e,a)},p:E,d(t){t&&l(e)}}}function K(f){let e,a;return{c(){e=h("span"),a=d("3")},l(t){e=S(t,"SPAN",{});var s=v(e);a=w(s,"3"),s.forEach(l)},m(t,s){o(t,e,s),x(e,a)},p:E,d(t){t&&l(e)}}}function Q(f){let e,a;return{c(){e=h("span"),a=d("4")},l(t){e=S(t,"SPAN",{});var s=v(e);a=w(s,"4"),s.forEach(l)},m(t,s){o(t,e,s),x(e,a)},p:E,d(t){t&&l(e)}}}function R(f){let e,a,t,s,p,$;return e=new P({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),t=new P({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),p=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){u(e.$$.fragment),a=b(),u(t.$$.fragment),s=b(),u(p.$$.fragment)},l(n){c(e.$$.fragment,n),a=O(n),c(t.$$.fragment,n),s=O(n),c(p.$$.fragment,n)},m(n,r){m(e,n,r),o(n,a,r),m(t,n,r),o(n,s,r),m(p,n,r),$=!0},p(n,r){const A={};r&1&&(A.$$scope={dirty:r,ctx:n}),e.$set(A);const N={};r&1&&(N.$$scope={dirty:r,ctx:n}),t.$set(N);const k={};r&1&&(k.$$scope={dirty:r,ctx:n}),p.$set(k)},i(n){$||(i(e.$$.fragment,n),i(t.$$.fragment,n),i(p.$$.fragment,n),$=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),_(p.$$.fragment,n),$=!1},d(n){g(e,n),n&&l(a),g(t,n),n&&l(s),g(p,n)}}}function U(f){let e,a;return e=new j({props:{$$slots:{default:[R]},$$scope:{ctx:f}}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){m(e,t,s),a=!0},p(t,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:t}),e.$set(p)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}function B(f){let e,a;return{c(){e=h("span"),a=d("5")},l(t){e=S(t,"SPAN",{});var s=v(e);a=w(s,"5"),s.forEach(l)},m(t,s){o(t,e,s),x(e,a)},p:E,d(t){t&&l(e)}}}function D(f){let e,a,t,s,p,$;return e=new P({props:{$$slots:{default:[H]},$$scope:{ctx:f}}}),t=new P({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),p=new P({props:{$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){u(e.$$.fragment),a=b(),u(t.$$.fragment),s=b(),u(p.$$.fragment)},l(n){c(e.$$.fragment,n),a=O(n),c(t.$$.fragment,n),s=O(n),c(p.$$.fragment,n)},m(n,r){m(e,n,r),o(n,a,r),m(t,n,r),o(n,s,r),m(p,n,r),$=!0},p(n,r){const A={};r&1&&(A.$$scope={dirty:r,ctx:n}),e.$set(A);const N={};r&1&&(N.$$scope={dirty:r,ctx:n}),t.$set(N);const k={};r&1&&(k.$$scope={dirty:r,ctx:n}),p.$set(k)},i(n){$||(i(e.$$.fragment,n),i(t.$$.fragment,n),i(p.$$.fragment,n),$=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),_(p.$$.fragment,n),$=!1},d(n){g(e,n),n&&l(a),g(t,n),n&&l(s),g(p,n)}}}function F(f){let e,a;return e=new j({props:{horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[D]},$$scope:{ctx:f}}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){m(e,t,s),a=!0},p(t,[s]){const p={};s&1&&(p.$$scope={dirty:s,ctx:t}),e.$set(p)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}class G extends z{constructor(e){super(),C(this,e,null,F,L,{})}}const I=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" pushOtherPanes={false}>
	<Pane>
		<span>1</span>
	</Pane>
	<Pane>
		<Splitpanes>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
			<Pane>
				<span>4</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane>
		<span>5</span>
	</Pane>
</Splitpanes>
`,M="../../src/routes/examples/lock-layout/code.svelte",T={id:M,code:I,component:G};function V(f){let e,a,t,s,p;return s=new q({props:{example:T}}),{c(){e=h("h2"),a=d("Locking layout by prevent pushing other panes"),t=b(),u(s.$$.fragment)},l($){e=S($,"H2",{});var n=v(e);a=w(n,"Locking layout by prevent pushing other panes"),n.forEach(l),t=O($),c(s.$$.fragment,$)},m($,n){o($,e,n),x(e,a),o($,t,n),m(s,$,n),p=!0},p:E,i($){p||(i(s.$$.fragment,$),p=!0)},o($){_(s.$$.fragment,$),p=!1},d($){$&&l(e),$&&l(t),g(s,$)}}}class Z extends z{constructor(e){super(),C(this,e,null,V,L,{})}}export{Z as default};
