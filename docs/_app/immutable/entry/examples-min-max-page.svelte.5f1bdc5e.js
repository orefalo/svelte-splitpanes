import{S as N,i as M,s as Y,O as k,P as I,Q as w,n as y,o as A,R as C,a as z,f as E,j as x,g as m,e as h,J as $,b as _,d as v,K as u,h as j,k as i,U as B}from"../chunks/external.475640e5.js";import{E as q}from"../chunks/ExampleArea.910fd3f7.js";import{S as J,P as H}from"../chunks/svelte-splitpanes.d35726cb.js";function K(c){let t,r,a,n,l,p;return{c(){t=h("span"),r=$(`1
			`),a=h("br"),n=z(),l=h("em"),p=$("I have a min height of 20% & max height of 70%"),this.h()},l(e){t=_(e,"SPAN",{});var s=v(t);r=u(s,`1
			`),a=_(s,"BR",{}),n=E(s),l=_(s,"EM",{class:!0});var f=v(l);p=u(f,"I have a min height of 20% & max height of 70%"),f.forEach(m),s.forEach(m),this.h()},h(){j(l,"class","specs")},m(e,s){x(e,t,s),i(t,r),i(t,a),i(t,n),i(t,l),i(l,p)},p:B,d(e){e&&m(t)}}}function O(c){let t,r;return{c(){t=h("span"),r=$("2")},l(a){t=_(a,"SPAN",{});var n=v(t);r=u(n,"2"),n.forEach(m)},m(a,n){x(a,t,n),i(t,r)},p:B,d(a){a&&m(t)}}}function Q(c){let t,r,a,n,l,p;return{c(){t=h("span"),r=$(`3
			`),a=h("br"),n=z(),l=h("em"),p=$("I have a max height of 70%"),this.h()},l(e){t=_(e,"SPAN",{});var s=v(t);r=u(s,`3
			`),a=_(s,"BR",{}),n=E(s),l=_(s,"EM",{class:!0});var f=v(l);p=u(f,"I have a max height of 70%"),f.forEach(m),s.forEach(m),this.h()},h(){j(l,"class","specs")},m(e,s){x(e,t,s),i(t,r),i(t,a),i(t,n),i(t,l),i(l,p)},p:B,d(e){e&&m(t)}}}function U(c){let t,r,a,n,l,p;return t=new H({props:{minSize:20,maxSize:70,$$slots:{default:[K]},$$scope:{ctx:c}}}),a=new H({props:{$$slots:{default:[O]},$$scope:{ctx:c}}}),l=new H({props:{maxSize:70,$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){k(t.$$.fragment),r=z(),k(a.$$.fragment),n=z(),k(l.$$.fragment)},l(e){I(t.$$.fragment,e),r=E(e),I(a.$$.fragment,e),n=E(e),I(l.$$.fragment,e)},m(e,s){w(t,e,s),x(e,r,s),w(a,e,s),x(e,n,s),w(l,e,s),p=!0},p(e,s){const f={};s&1&&(f.$$scope={dirty:s,ctx:e}),t.$set(f);const S={};s&1&&(S.$$scope={dirty:s,ctx:e}),a.$set(S);const b={};s&1&&(b.$$scope={dirty:s,ctx:e}),l.$set(b)},i(e){p||(y(t.$$.fragment,e),y(a.$$.fragment,e),y(l.$$.fragment,e),p=!0)},o(e){A(t.$$.fragment,e),A(a.$$.fragment,e),A(l.$$.fragment,e),p=!1},d(e){C(t,e),e&&m(r),C(a,e),e&&m(n),C(l,e)}}}function D(c){let t,r;return t=new J({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){k(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,n){w(t,a,n),r=!0},p(a,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:a}),t.$set(l)},i(a){r||(y(t.$$.fragment,a),r=!0)},o(a){A(t.$$.fragment,a),r=!1},d(a){C(t,a)}}}class F extends N{constructor(t){super(),M(this,t,null,D,Y,{})}}const G=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal={true} style="height: 400px">
	<Pane minSize={20} maxSize={70}>
		<span
			>1
			<br />
			<em class="specs">I have a min height of 20% &amp; max height of 70%</em>
		</span>
	</Pane>
	<Pane>
		<span>2</span>
	</Pane>
	<Pane maxSize={70}>
		<span
			>3
			<br />
			<em class="specs">I have a max height of 70%</em>
		</span>
	</Pane>
</Splitpanes>
`,L="../../src/routes/examples/min-max/code.svelte",T={id:L,code:G,component:F};function V(c){let t,r,a,n,l,p,e,s=!1+"",f,S,b,g,R;return g=new q({props:{example:T}}),{c(){t=h("h2"),r=$("Horizontal layout, push other panes, min & max use, doubleclick"),a=z(),n=h("p"),l=$("You can double click a splitter to maximize the next pane!"),p=h("br"),e=$(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),f=$(s),S=$("."),b=z(),k(g.$$.fragment)},l(o){t=_(o,"H2",{});var d=v(t);r=u(d,"Horizontal layout, push other panes, min & max use, doubleclick"),d.forEach(m),a=E(o),n=_(o,"P",{});var P=v(n);l=u(P,"You can double click a splitter to maximize the next pane!"),p=_(P,"BR",{}),e=u(P,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),f=u(P,s),S=u(P,"."),P.forEach(m),b=E(o),I(g.$$.fragment,o)},m(o,d){x(o,t,d),i(t,r),x(o,a,d),x(o,n,d),i(n,l),i(n,p),i(n,e),i(n,f),i(n,S),x(o,b,d),w(g,o,d),R=!0},p:B,i(o){R||(y(g.$$.fragment,o),R=!0)},o(o){A(g.$$.fragment,o),R=!1},d(o){o&&m(t),o&&m(a),o&&m(n),o&&m(b),C(g,o)}}}class tt extends N{constructor(t){super(),M(this,t,null,V,Y,{})}}export{tt as default};
