import{S as M,i as N,s as Y,Q as k,R as I,T as w,n as y,o as A,V as C,a as P,f as E,j as x,g as m,e as h,L as $,b as _,d as v,M as u,h as j,k as i,I as B}from"../../../../chunks/external-a03e8ebe.js";import{E as q}from"../../../../chunks/ExampleArea-f8063daf.js";import{S as L,P as H}from"../../../../chunks/svelte-splitpanes-e7a119d8.js";function Q(c){let t,r,a,n,l,p;return{c(){t=h("span"),r=$(`1
			`),a=h("br"),n=P(),l=h("em"),p=$("I have a min height of 20% & max height of 70%"),this.h()},l(e){t=_(e,"SPAN",{});var s=v(t);r=u(s,`1
			`),a=_(s,"BR",{}),n=E(s),l=_(s,"EM",{class:!0});var f=v(l);p=u(f,"I have a min height of 20% & max height of 70%"),f.forEach(m),s.forEach(m),this.h()},h(){j(l,"class","specs")},m(e,s){x(e,t,s),i(t,r),i(t,a),i(t,n),i(t,l),i(l,p)},p:B,d(e){e&&m(t)}}}function T(c){let t,r;return{c(){t=h("span"),r=$("2")},l(a){t=_(a,"SPAN",{});var n=v(t);r=u(n,"2"),n.forEach(m)},m(a,n){x(a,t,n),i(t,r)},p:B,d(a){a&&m(t)}}}function V(c){let t,r,a,n,l,p;return{c(){t=h("span"),r=$(`3
			`),a=h("br"),n=P(),l=h("em"),p=$("I have a max height of 70%"),this.h()},l(e){t=_(e,"SPAN",{});var s=v(t);r=u(s,`3
			`),a=_(s,"BR",{}),n=E(s),l=_(s,"EM",{class:!0});var f=v(l);p=u(f,"I have a max height of 70%"),f.forEach(m),s.forEach(m),this.h()},h(){j(l,"class","specs")},m(e,s){x(e,t,s),i(t,r),i(t,a),i(t,n),i(t,l),i(l,p)},p:B,d(e){e&&m(t)}}}function D(c){let t,r,a,n,l,p;return t=new H({props:{minSize:20,maxSize:70,$$slots:{default:[Q]},$$scope:{ctx:c}}}),a=new H({props:{$$slots:{default:[T]},$$scope:{ctx:c}}}),l=new H({props:{maxSize:70,$$slots:{default:[V]},$$scope:{ctx:c}}}),{c(){k(t.$$.fragment),r=P(),k(a.$$.fragment),n=P(),k(l.$$.fragment)},l(e){I(t.$$.fragment,e),r=E(e),I(a.$$.fragment,e),n=E(e),I(l.$$.fragment,e)},m(e,s){w(t,e,s),x(e,r,s),w(a,e,s),x(e,n,s),w(l,e,s),p=!0},p(e,s){const f={};s&1&&(f.$$scope={dirty:s,ctx:e}),t.$set(f);const S={};s&1&&(S.$$scope={dirty:s,ctx:e}),a.$set(S);const b={};s&1&&(b.$$scope={dirty:s,ctx:e}),l.$set(b)},i(e){p||(y(t.$$.fragment,e),y(a.$$.fragment,e),y(l.$$.fragment,e),p=!0)},o(e){A(t.$$.fragment,e),A(a.$$.fragment,e),A(l.$$.fragment,e),p=!1},d(e){C(t,e),e&&m(r),C(a,e),e&&m(n),C(l,e)}}}function F(c){let t,r;return t=new L({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[D]},$$scope:{ctx:c}}}),{c(){k(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,n){w(t,a,n),r=!0},p(a,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:a}),t.$set(l)},i(a){r||(y(t.$$.fragment,a),r=!0)},o(a){A(t.$$.fragment,a),r=!1},d(a){C(t,a)}}}class G extends M{constructor(t){super(),N(this,t,null,F,Y,{})}}const J=`<script>
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
`,K="../../src/routes/examples/min-max/code.svelte",O={id:K,code:J,component:G};function U(c){let t,r,a,n,l,p,e,s=!1+"",f,S,b,g,R;return g=new q({props:{example:O}}),{c(){t=h("h2"),r=$("Horizontal layout, push other panes, min & max use, doubleclick"),a=P(),n=h("p"),l=$("You can double click a splitter to maximize the next pane!"),p=h("br"),e=$(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),f=$(s),S=$("."),b=P(),k(g.$$.fragment)},l(o){t=_(o,"H2",{});var d=v(t);r=u(d,"Horizontal layout, push other panes, min & max use, doubleclick"),d.forEach(m),a=E(o),n=_(o,"P",{});var z=v(n);l=u(z,"You can double click a splitter to maximize the next pane!"),p=_(z,"BR",{}),e=u(z,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),f=u(z,s),S=u(z,"."),z.forEach(m),b=E(o),I(g.$$.fragment,o)},m(o,d){x(o,t,d),i(t,r),x(o,a,d),x(o,n,d),i(n,l),i(n,p),i(n,e),i(n,f),i(n,S),x(o,b,d),w(g,o,d),R=!0},p:B,i(o){R||(y(g.$$.fragment,o),R=!0)},o(o){A(g.$$.fragment,o),R=!1},d(o){o&&m(t),o&&m(a),o&&m(n),o&&m(b),C(g,o)}}}class tt extends M{constructor(t){super(),N(this,t,null,U,Y,{})}}export{tt as default};
