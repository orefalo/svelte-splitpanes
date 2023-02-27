import{S as M,i as O,s as Q,O as S,P as y,Q as b,n as v,o as x,R as P,a as E,f as A,j as c,g as p,e as _,J as u,b as d,d as g,K as h,h as D,k as m,U as N}from"../chunks/external.475640e5.js";import{C as G,E as L}from"../chunks/ExampleArea.910fd3f7.js";import{S as U,P as j,d as V}from"../chunks/svelte-splitpanes.d35726cb.js";function W(f){let t,a;return{c(){t=_("span"),a=u("1")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"1"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function X(f){let t,a;return{c(){t=_("span"),a=u("2")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"2"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function Y(f){let t,a;return{c(){t=_("span"),a=u("3")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"3"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function Z(f){let t,a,e,n,s,i;return t=new j({props:{$$slots:{default:[W]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[X]},$$scope:{ctx:f}}}),s=new j({props:{$$slots:{default:[Y]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment),a=E(),S(e.$$.fragment),n=E(),S(s.$$.fragment)},l(l){y(t.$$.fragment,l),a=A(l),y(e.$$.fragment,l),n=A(l),y(s.$$.fragment,l)},m(l,o){b(t,l,o),c(l,a,o),b(e,l,o),c(l,n,o),b(s,l,o),i=!0},p(l,o){const I={};o&1&&(I.$$scope={dirty:o,ctx:l}),t.$set(I);const T={};o&1&&(T.$$scope={dirty:o,ctx:l}),e.$set(T);const w={};o&1&&(w.$$scope={dirty:o,ctx:l}),s.$set(w)},i(l){i||(v(t.$$.fragment,l),v(e.$$.fragment,l),v(s.$$.fragment,l),i=!0)},o(l){x(t.$$.fragment,l),x(e.$$.fragment,l),x(s.$$.fragment,l),i=!1},d(l){P(t,l),l&&p(a),P(e,l),l&&p(n),P(s,l)}}}function tt(f){let t,a;return t=new U({props:{theme:"my-theme",$$slots:{default:[Z]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,n){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){P(t,e)}}}function et(f){let t,a,e;return{c(){t=_("em"),a=_("p"),e=u("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(n){t=d(n,"EM",{class:!0});var s=g(t);a=d(s,"P",{});var i=g(a);e=h(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(p),s.forEach(p),this.h()},h(){D(t,"class","specs")},m(n,s){c(n,t,s),m(t,a),m(a,e)},p:N,d(n){n&&p(t)}}}function nt(f){let t,a,e,n;return t=new j({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment),a=E(),S(e.$$.fragment)},l(s){y(t.$$.fragment,s),a=A(s),y(e.$$.fragment,s)},m(s,i){b(t,s,i),c(s,a,i),b(e,s,i),n=!0},p(s,i){const l={};i&1&&(l.$$scope={dirty:i,ctx:s}),t.$set(l);const o={};i&1&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){n||(v(t.$$.fragment,s),v(e.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),x(e.$$.fragment,s),n=!1},d(s){P(t,s),s&&p(a),P(e,s)}}}function st(f){let t,a;return t=new U({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[nt]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){P(t,e)}}}class at extends M{constructor(t){super(),O(this,t,null,st,Q,{})}}const lt=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes theme="my-theme" horizontal style="height: 400px">
	<Pane>
		<Splitpanes theme="my-theme">
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<style global lang="scss">
	.splitpanes.my-theme {
		.splitpanes__pane {
			background-color: #f8f8f8;
		}
		.splitpanes__splitter {
			background-color: #ccc;
			position: relative;
			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				transition: opacity 0.4s;
				background-color: rgba(255, 0, 0, 0.3);
				opacity: 0;
				z-index: 1;
			}
			&:hover:before {
				opacity: 1;
			}
			&.splitpanes__splitter__active {
				z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
			}
		}
	}
	.my-theme {
		&.splitpanes--vertical > .splitpanes__splitter:before {
			left: -30px;
			right: -30px;
			height: 100%;
			cursor: col-resize;
		}
		&.splitpanes--horizontal > .splitpanes__splitter:before {
			top: -30px;
			bottom: -30px;
			width: 100%;
			cursor: row-resize;
		}
	}
</style>
`,rt="../../src/routes/examples/styling/splitters/code.svelte",pt={id:rt,code:lt,component:at};function ot(f){let t,a,e,n,s,i,l,o,I,T,w,C,R,k,H,q,z,F;return C=new G({props:{id:"styling_splitters",code:V}}),z=new L({props:{example:pt}}),{c(){t=_("h2"),a=u("Styling Splitters"),e=E(),n=_("p"),s=u("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=_("br"),l=u("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=_("b"),I=u("warning"),T=u(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),w=E(),S(C.$$.fragment),R=E(),k=_("p"),H=u('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),q=E(),S(z.$$.fragment)},l(r){t=d(r,"H2",{});var $=g(t);a=h($,"Styling Splitters"),$.forEach(p),e=A(r),n=d(r,"P",{});var B=g(n);s=h(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=d(B,"BR",{}),l=h(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=d(B,"B",{});var J=g(o);I=h(J,"warning"),J.forEach(p),T=h(B,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),B.forEach(p),w=A(r),y(C.$$.fragment,r),R=A(r),k=d(r,"P",{});var K=g(k);H=h(K,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),K.forEach(p),q=A(r),y(z.$$.fragment,r)},m(r,$){c(r,t,$),m(t,a),c(r,e,$),c(r,n,$),m(n,s),m(n,i),m(n,l),m(n,o),m(o,I),m(n,T),c(r,w,$),b(C,r,$),c(r,R,$),c(r,k,$),m(k,H),c(r,q,$),b(z,r,$),F=!0},p:N,i(r){F||(v(C.$$.fragment,r),v(z.$$.fragment,r),F=!0)},o(r){x(C.$$.fragment,r),x(z.$$.fragment,r),F=!1},d(r){r&&p(t),r&&p(e),r&&p(n),r&&p(w),P(C,r),r&&p(R),r&&p(k),r&&p(q),P(z,r)}}}class mt extends M{constructor(t){super(),O(this,t,null,ot,Q,{})}}export{mt as default};
