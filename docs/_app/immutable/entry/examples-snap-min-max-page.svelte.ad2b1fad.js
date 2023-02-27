import{S as R,i as A,s as B,O as c,P as _,Q as x,n as h,o as z,R as v,a as d,f as b,j as u,g as l,e as S,J as g,b as P,d as y,K as I,I as M,k as $,U as C}from"../chunks/external.ef862fb3.js";import{E as Y}from"../chunks/ExampleArea.88ccfa9a.js";import{S as j,P as w}from"../chunks/svelte-splitpanes.ac582143.js";function k(o){let t,r,n,i,p,m;return{c(){t=S("span"),r=g("I have a snap size of 10%"),n=S("br"),i=g(`
			I have a min size of 10%`),p=S("br"),m=g(`
			I have a max size of 70%`),this.h()},l(e){t=P(e,"SPAN",{style:!0});var s=y(t);r=I(s,"I have a snap size of 10%"),n=P(s,"BR",{}),i=I(s,`
			I have a min size of 10%`),p=P(s,"BR",{}),m=I(s,`
			I have a max size of 70%`),s.forEach(l),this.h()},h(){M(t,"font-size","20px")},m(e,s){u(e,t,s),$(t,r),$(t,n),$(t,i),$(t,p),$(t,m)},p:C,d(e){e&&l(t)}}}function q(o){let t,r,n,i,p,m;return t=new w({}),n=new w({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[k]},$$scope:{ctx:o}}}),p=new w({}),{c(){c(t.$$.fragment),r=d(),c(n.$$.fragment),i=d(),c(p.$$.fragment)},l(e){_(t.$$.fragment,e),r=b(e),_(n.$$.fragment,e),i=b(e),_(p.$$.fragment,e)},m(e,s){x(t,e,s),u(e,r,s),x(n,e,s),u(e,i,s),x(p,e,s),m=!0},p(e,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),n.$set(a)},i(e){m||(h(t.$$.fragment,e),h(n.$$.fragment,e),h(p.$$.fragment,e),m=!0)},o(e){z(t.$$.fragment,e),z(n.$$.fragment,e),z(p.$$.fragment,e),m=!1},d(e){v(t,e),e&&l(r),v(n,e),e&&l(i),v(p,e)}}}function H(o){let t,r;return t=new j({props:{style:"height: 400px",$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){c(t.$$.fragment)},l(n){_(t.$$.fragment,n)},m(n,i){x(t,n,i),r=!0},p(n,[i]){const p={};i&1&&(p.$$scope={dirty:i,ctx:n}),t.$set(p)},i(n){r||(h(t.$$.fragment,n),r=!0)},o(n){z(t.$$.fragment,n),r=!1},d(n){v(t,n)}}}class J extends R{constructor(t){super(),A(this,t,null,H,B,{})}}const K=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10} minSize={10} maxSize={70}>
		<span style="font-size: 20px;">
			I have a snap size of 10%<br />
			I have a min size of 10%<br />
			I have a max size of 70%
		</span>
	</Pane>

	<Pane />
</Splitpanes>
`,N="../../src/routes/examples/snap/min-max/code.svelte",O={id:N,code:K,component:J};function Q(o){let t,r,n,i,p,m,e,s;return e=new Y({props:{example:O}}),{c(){t=S("h2"),r=g("Min & max with snap"),n=d(),i=S("p"),p=g("You can also snap to the panel maximum and minimum size."),m=d(),c(e.$$.fragment)},l(a){t=P(a,"H2",{});var f=y(t);r=I(f,"Min & max with snap"),f.forEach(l),n=b(a),i=P(a,"P",{});var E=y(i);p=I(E,"You can also snap to the panel maximum and minimum size."),E.forEach(l),m=b(a),_(e.$$.fragment,a)},m(a,f){u(a,t,f),$(t,r),u(a,n,f),u(a,i,f),$(i,p),u(a,m,f),x(e,a,f),s=!0},p:C,i(a){s||(h(e.$$.fragment,a),s=!0)},o(a){z(e.$$.fragment,a),s=!1},d(a){a&&l(t),a&&l(n),a&&l(i),a&&l(m),v(e,a)}}}class G extends R{constructor(t){super(),A(this,t,null,Q,B,{})}}export{G as default};
