import{S as j,i as H,s as J,O as y,P as b,Q as S,n as E,o as N,R as A,a as I,f as k,j as u,g as i,e as c,J as v,b as h,d as x,K as g,k as f,U as R}from"../chunks/external.ef862fb3.js";import{E as K}from"../chunks/ExampleArea.88ccfa9a.js";import{S as O,P as C}from"../chunks/svelte-splitpanes.ac582143.js";function Q(p){let e,s;return{c(){e=c("span"),s=v("1")},l(t){e=h(t,"SPAN",{});var a=x(e);s=g(a,"1"),a.forEach(i)},m(t,a){u(t,e,a),f(e,s)},p:R,d(t){t&&i(e)}}}function U(p){let e,s;return{c(){e=c("span"),s=v("2")},l(t){e=h(t,"SPAN",{});var a=x(e);s=g(a,"2"),a.forEach(i)},m(t,a){u(t,e,a),f(e,s)},p:R,d(t){t&&i(e)}}}function F(p){let e,s;return{c(){e=c("span"),s=v("3")},l(t){e=h(t,"SPAN",{});var a=x(e);s=g(a,"3"),a.forEach(i)},m(t,a){u(t,e,a),f(e,s)},p:R,d(t){t&&i(e)}}}function G(p){let e,s,t,a,o,$;return e=new C({props:{size:65,$$slots:{default:[Q]},$$scope:{ctx:p}}}),t=new C({props:{size:10,$$slots:{default:[U]},$$scope:{ctx:p}}}),o=new C({props:{size:25,$$slots:{default:[F]},$$scope:{ctx:p}}}),{c(){y(e.$$.fragment),s=I(),y(t.$$.fragment),a=I(),y(o.$$.fragment)},l(n){b(e.$$.fragment,n),s=k(n),b(t.$$.fragment,n),a=k(n),b(o.$$.fragment,n)},m(n,l){S(e,n,l),u(n,s,l),S(t,n,l),u(n,a,l),S(o,n,l),$=!0},p(n,l){const z={};l&1&&(z.$$scope={dirty:l,ctx:n}),e.$set(z);const P={};l&1&&(P.$$scope={dirty:l,ctx:n}),t.$set(P);const w={};l&1&&(w.$$scope={dirty:l,ctx:n}),o.$set(w)},i(n){$||(E(e.$$.fragment,n),E(t.$$.fragment,n),E(o.$$.fragment,n),$=!0)},o(n){N(e.$$.fragment,n),N(t.$$.fragment,n),N(o.$$.fragment,n),$=!1},d(n){A(e,n),n&&i(s),A(t,n),n&&i(a),A(o,n)}}}function L(p){let e,s;return e=new O({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[G]},$$scope:{ctx:p}}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}class M extends j{constructor(e){super(),H(this,e,null,L,J,{})}}const T=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
	</Pane>
	<Pane size={10}>
		<span>2</span>
	</Pane>
	<Pane size={25}>
		<span>3</span>
	</Pane>
</Splitpanes>
`,V="../../src/routes/examples/default-size/code.svelte",W={id:V,code:T,component:M};function X(p){let e,s,t,a,o,$,n,l,z,P,w,q,_,B;return _=new K({props:{example:W}}),{c(){e=c("h2"),s=v("Default pane size"),t=I(),a=c("p"),o=v(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),$=c("br"),n=I(),l=c("b"),z=v(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),P=c("br"),w=v(" Note that setting a default value is different than setting a min or max value."),q=I(),y(_.$$.fragment)},l(r){e=h(r,"H2",{});var m=x(e);s=g(m,"Default pane size"),m.forEach(i),t=k(r),a=h(r,"P",{});var d=x(a);o=g(d,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),$=h(d,"BR",{}),n=k(d),l=h(d,"B",{});var D=x(l);z=g(D,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),D.forEach(i),P=h(d,"BR",{}),w=g(d," Note that setting a default value is different than setting a min or max value."),d.forEach(i),q=k(r),b(_.$$.fragment,r)},m(r,m){u(r,e,m),f(e,s),u(r,t,m),u(r,a,m),f(a,o),f(a,$),f(a,n),f(a,l),f(l,z),f(a,P),f(a,w),u(r,q,m),S(_,r,m),B=!0},p:R,i(r){B||(E(_.$$.fragment,r),B=!0)},o(r){N(_.$$.fragment,r),B=!1},d(r){r&&i(e),r&&i(t),r&&i(a),r&&i(q),A(_,r)}}}class te extends j{constructor(e){super(),H(this,e,null,X,J,{})}}export{te as default};
