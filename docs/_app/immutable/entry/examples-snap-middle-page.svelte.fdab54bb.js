import{S,i as v,s as z,O as i,P as $,Q as m,n as c,o as u,R as _,a as x,f as h,j as d,g as o,e as y,J as w,b as E,d as I,K as A,I as b,k as C,U as M}from"../chunks/external.ef862fb3.js";import{E as j}from"../chunks/ExampleArea.88ccfa9a.js";import{S as k,P as g}from"../chunks/svelte-splitpanes.ac582143.js";function q(f){let e,r;return{c(){e=y("span"),r=w("I have a snap size of 10%"),this.h()},l(n){e=E(n,"SPAN",{style:!0});var s=I(e);r=A(s,"I have a snap size of 10%"),s.forEach(o),this.h()},h(){b(e,"font-size","20px")},m(n,s){d(n,e,s),C(e,r)},p:M,d(n){n&&o(e)}}}function H(f){let e,r,n,s,p,a;return e=new g({}),n=new g({props:{snapSize:10,$$slots:{default:[q]},$$scope:{ctx:f}}}),p=new g({}),{c(){i(e.$$.fragment),r=x(),i(n.$$.fragment),s=x(),i(p.$$.fragment)},l(t){$(e.$$.fragment,t),r=h(t),$(n.$$.fragment,t),s=h(t),$(p.$$.fragment,t)},m(t,l){m(e,t,l),d(t,r,l),m(n,t,l),d(t,s,l),m(p,t,l),a=!0},p(t,l){const P={};l&1&&(P.$$scope={dirty:l,ctx:t}),n.$set(P)},i(t){a||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),u(p.$$.fragment,t),a=!1},d(t){_(e,t),t&&o(r),_(n,t),t&&o(s),_(p,t)}}}function J(f){let e,r;return e=new k({props:{style:"height: 400px",$$slots:{default:[H]},$$scope:{ctx:f}}}),{c(){i(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,s){m(e,n,s),r=!0},p(n,[s]){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){u(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}class K extends S{constructor(e){super(),v(this,e,null,J,z,{})}}const N=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>
`,O="../../src/routes/examples/snap/middle/code.svelte",Q={id:O,code:N,component:K};function R(f){let e,r,n,s,p;return s=new j({props:{example:Q}}),{c(){e=y("h2"),r=w("Middle snap"),n=x(),i(s.$$.fragment)},l(a){e=E(a,"H2",{});var t=I(e);r=A(t,"Middle snap"),t.forEach(o),n=h(a),$(s.$$.fragment,a)},m(a,t){d(a,e,t),C(e,r),d(a,n,t),m(s,a,t),p=!0},p:M,i(a){p||(c(s.$$.fragment,a),p=!0)},o(a){u(s.$$.fragment,a),p=!1},d(a){a&&o(e),a&&o(n),_(s,a)}}}class F extends S{constructor(e){super(),v(this,e,null,R,z,{})}}export{F as default};
