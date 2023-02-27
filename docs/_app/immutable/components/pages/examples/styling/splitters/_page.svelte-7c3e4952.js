import{S as Q,i as V,s as D,Q as S,R as y,T as b,n as v,o as x,V as w,a as E,f as I,j as c,g as p,e as _,L as u,b as d,d as g,M as h,h as J,k as m,I as N}from"../../../../../chunks/external-72760700.js";import{C as K,E as O}from"../../../../../chunks/ExampleArea-7f653be5.js";import{S as G,P as j,d as U}from"../../../../../chunks/svelte-splitpanes-10cfb389.js";function W(f){let t,a;return{c(){t=_("span"),a=u("1")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"1"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function X(f){let t,a;return{c(){t=_("span"),a=u("2")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"2"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function Y(f){let t,a;return{c(){t=_("span"),a=u("3")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"3"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function Z(f){let t,a,e,n,s,i;return t=new j({props:{$$slots:{default:[W]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[X]},$$scope:{ctx:f}}}),s=new j({props:{$$slots:{default:[Y]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment),a=E(),S(e.$$.fragment),n=E(),S(s.$$.fragment)},l(l){y(t.$$.fragment,l),a=I(l),y(e.$$.fragment,l),n=I(l),y(s.$$.fragment,l)},m(l,o){b(t,l,o),c(l,a,o),b(e,l,o),c(l,n,o),b(s,l,o),i=!0},p(l,o){const T={};o&1&&(T.$$scope={dirty:o,ctx:l}),t.$set(T);const A={};o&1&&(A.$$scope={dirty:o,ctx:l}),e.$set(A);const P={};o&1&&(P.$$scope={dirty:o,ctx:l}),s.$set(P)},i(l){i||(v(t.$$.fragment,l),v(e.$$.fragment,l),v(s.$$.fragment,l),i=!0)},o(l){x(t.$$.fragment,l),x(e.$$.fragment,l),x(s.$$.fragment,l),i=!1},d(l){w(t,l),l&&p(a),w(e,l),l&&p(n),w(s,l)}}}function tt(f){let t,a;return t=new G({props:{theme:"my-theme",$$slots:{default:[Z]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,n){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function et(f){let t,a,e;return{c(){t=_("em"),a=_("p"),e=u("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(n){t=d(n,"EM",{class:!0});var s=g(t);a=d(s,"P",{});var i=g(a);e=h(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(p),s.forEach(p),this.h()},h(){J(t,"class","specs")},m(n,s){c(n,t,s),m(t,a),m(a,e)},p:N,d(n){n&&p(t)}}}function nt(f){let t,a,e,n;return t=new j({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment),a=E(),S(e.$$.fragment)},l(s){y(t.$$.fragment,s),a=I(s),y(e.$$.fragment,s)},m(s,i){b(t,s,i),c(s,a,i),b(e,s,i),n=!0},p(s,i){const l={};i&1&&(l.$$scope={dirty:i,ctx:s}),t.$set(l);const o={};i&1&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){n||(v(t.$$.fragment,s),v(e.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),x(e.$$.fragment,s),n=!1},d(s){w(t,s),s&&p(a),w(e,s)}}}function st(f){let t,a;return t=new G({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[nt]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}class at extends Q{constructor(t){super(),V(this,t,null,st,D,{})}}const lt=`<script>
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
`,rt="../../src/routes/examples/styling/splitters/code.svelte",pt={id:rt,code:lt,component:at};function ot(f){let t,a,e,n,s,i,l,o,T,A,P,C,M,k,F,R,z,q;return C=new K({props:{id:"styling_splitters",code:U}}),z=new O({props:{example:pt}}),{c(){t=_("h2"),a=u("Styling Splitters"),e=E(),n=_("p"),s=u("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=_("br"),l=u("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=_("b"),T=u("warning"),A=u(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),P=E(),S(C.$$.fragment),M=E(),k=_("p"),F=u('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),R=E(),S(z.$$.fragment)},l(r){t=d(r,"H2",{});var $=g(t);a=h($,"Styling Splitters"),$.forEach(p),e=I(r),n=d(r,"P",{});var B=g(n);s=h(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=d(B,"BR",{}),l=h(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=d(B,"B",{});var H=g(o);T=h(H,"warning"),H.forEach(p),A=h(B,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),B.forEach(p),P=I(r),y(C.$$.fragment,r),M=I(r),k=d(r,"P",{});var L=g(k);F=h(L,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),L.forEach(p),R=I(r),y(z.$$.fragment,r)},m(r,$){c(r,t,$),m(t,a),c(r,e,$),c(r,n,$),m(n,s),m(n,i),m(n,l),m(n,o),m(o,T),m(n,A),c(r,P,$),b(C,r,$),c(r,M,$),c(r,k,$),m(k,F),c(r,R,$),b(z,r,$),q=!0},p:N,i(r){q||(v(C.$$.fragment,r),v(z.$$.fragment,r),q=!0)},o(r){x(C.$$.fragment,r),x(z.$$.fragment,r),q=!1},d(r){r&&p(t),r&&p(e),r&&p(n),r&&p(P),w(C,r),r&&p(M),r&&p(k),r&&p(R),w(z,r)}}}class mt extends Q{constructor(t){super(),V(this,t,null,ot,D,{})}}export{mt as default};
