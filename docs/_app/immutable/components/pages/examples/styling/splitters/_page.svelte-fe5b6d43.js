import{S as Q,i as V,s as X,Q as b,R as S,T as y,n as x,o as v,V as w,a as E,f as k,j as c,g as p,e as _,L as $,b as d,d as g,M as h,h as D,k as m,I as N}from"../../../../../chunks/external-a03e8ebe.js";import{C as G,E as J}from"../../../../../chunks/ExampleArea-f8063daf.js";import{S as Y,P as j}from"../../../../../chunks/svelte-splitpanes-e7a119d8.js";function K(f){let t,a;return{c(){t=_("span"),a=$("1")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"1"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function O(f){let t,a;return{c(){t=_("span"),a=$("2")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"2"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function U(f){let t,a;return{c(){t=_("span"),a=$("3")},l(e){t=d(e,"SPAN",{});var n=g(t);a=h(n,"3"),n.forEach(p)},m(e,n){c(e,t,n),m(t,a)},p:N,d(e){e&&p(t)}}}function W(f){let t,a,e,n,s,i;return t=new j({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),s=new j({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){b(t.$$.fragment),a=E(),b(e.$$.fragment),n=E(),b(s.$$.fragment)},l(r){S(t.$$.fragment,r),a=k(r),S(e.$$.fragment,r),n=k(r),S(s.$$.fragment,r)},m(r,o){y(t,r,o),c(r,a,o),y(e,r,o),c(r,n,o),y(s,r,o),i=!0},p(r,o){const I={};o&1&&(I.$$scope={dirty:o,ctx:r}),t.$set(I);const A={};o&1&&(A.$$scope={dirty:o,ctx:r}),e.$set(A);const P={};o&1&&(P.$$scope={dirty:o,ctx:r}),s.$set(P)},i(r){i||(x(t.$$.fragment,r),x(e.$$.fragment,r),x(s.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),v(e.$$.fragment,r),v(s.$$.fragment,r),i=!1},d(r){w(t,r),r&&p(a),w(e,r),r&&p(n),w(s,r)}}}function Z(f){let t,a;return t=new Y({props:{theme:"my-theme",$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){b(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){y(t,e,n),a=!0},p(e,n){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(x(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function tt(f){let t,a,e;return{c(){t=_("em"),a=_("p"),e=$("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(n){t=d(n,"EM",{class:!0});var s=g(t);a=d(s,"P",{});var i=g(a);e=h(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(p),s.forEach(p),this.h()},h(){D(t,"class","specs")},m(n,s){c(n,t,s),m(t,a),m(a,e)},p:N,d(n){n&&p(t)}}}function et(f){let t,a,e,n;return t=new j({props:{$$slots:{default:[Z]},$$scope:{ctx:f}}}),e=new j({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),{c(){b(t.$$.fragment),a=E(),b(e.$$.fragment)},l(s){S(t.$$.fragment,s),a=k(s),S(e.$$.fragment,s)},m(s,i){y(t,s,i),c(s,a,i),y(e,s,i),n=!0},p(s,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:s}),t.$set(r);const o={};i&1&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){n||(x(t.$$.fragment,s),x(e.$$.fragment,s),n=!0)},o(s){v(t.$$.fragment,s),v(e.$$.fragment,s),n=!1},d(s){w(t,s),s&&p(a),w(e,s)}}}function nt(f){let t,a;return t=new Y({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[et]},$$scope:{ctx:f}}}),{c(){b(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){y(t,e,n),a=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(x(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}class st extends Q{constructor(t){super(),V(this,t,null,nt,X,{})}}const at=`<script>
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
`,rt="../../src/routes/examples/styling/splitters/code.svelte",lt={id:rt,code:at,component:st};function pt(f){let t,a,e,n,s,i,r,o,I,A,P,z,M,T,F,R,C,q;return z=new G({props:{id:"styling_splitters",code:f[0]}}),C=new J({props:{example:lt}}),{c(){t=_("h2"),a=$("Styling Splitters"),e=E(),n=_("p"),s=$("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=_("br"),r=$("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=_("b"),I=$("warning"),A=$(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),P=E(),b(z.$$.fragment),M=E(),T=_("p"),F=$('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),R=E(),b(C.$$.fragment)},l(l){t=d(l,"H2",{});var u=g(t);a=h(u,"Styling Splitters"),u.forEach(p),e=k(l),n=d(l,"P",{});var B=g(n);s=h(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=d(B,"BR",{}),r=h(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),o=d(B,"B",{});var H=g(o);I=h(H,"warning"),H.forEach(p),A=h(B,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),B.forEach(p),P=k(l),S(z.$$.fragment,l),M=k(l),T=d(l,"P",{});var L=g(T);F=h(L,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),L.forEach(p),R=k(l),S(C.$$.fragment,l)},m(l,u){c(l,t,u),m(t,a),c(l,e,u),c(l,n,u),m(n,s),m(n,i),m(n,r),m(n,o),m(o,I),m(n,A),c(l,P,u),y(z,l,u),c(l,M,u),c(l,T,u),m(T,F),c(l,R,u),y(C,l,u),q=!0},p:N,i(l){q||(x(z.$$.fragment,l),x(C.$$.fragment,l),q=!0)},o(l){v(z.$$.fragment,l),v(C.$$.fragment,l),q=!1},d(l){l&&p(t),l&&p(e),l&&p(n),l&&p(P),w(z,l),l&&p(M),l&&p(T),l&&p(R),w(C,l)}}}function ot(f){return[`
.splitpanes.default-theme {
    .splitpanes__pane {
        background-color: #f2f2f2;
    }
    .splitpanes__splitter {
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        flex-shrink: 0;
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: rgba(0, 0, 0, 0.15);
            transition: background-color 0.3s;
        }
        &:hover:before,
        &:hover:after {
            background-color: rgba(0, 0, 0, 0.25);
        }
        &:first-child {
            cursor: auto;
        }
    }
}
.default-theme {
    &.splitpanes .splitpanes .splitpanes__splitter {
        z-index: 1;
    }
    &.splitpanes--vertical > .splitpanes__splitter,
    .splitpanes--vertical > .splitpanes__splitter {
        width: 7px;
        border-left: 1px solid #eee;
        cursor: col-resize;
        &:before,
        &:after {
            transform: translateY(-50%);
            width: 1px;
            height: 30px;
        }
        &:before {
            margin-left: -2px;
        }
        &:after {
            margin-left: 1px;
        }
    }
    &.splitpanes--horizontal > .splitpanes__splitter,
    .splitpanes--horizontal > .splitpanes__splitter {
        height: 7px;
        border-top: 1px solid #eee;
        cursor: row-resize;
        &:before,
        &:after {
            transform: translateX(-50%);
            width: 30px;
            height: 1px;
        }
        &:before {
            margin-top: -2px;
        }
        &:after {
            margin-top: 1px;
        }
    }
}
`]}class mt extends Q{constructor(t){super(),V(this,t,ot,pt,X,{})}}export{mt as default};
