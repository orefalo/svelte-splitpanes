import{S as D,i as G,s as J,e as _,L as u,a as C,Q as S,b as d,d as b,M as h,g as l,f as k,R as y,j as m,k as $,T as v,n as x,o as w,V as P,h as K,I as H}from"../../../../../chunks/external-d10ce526.js";import{S as Y,P as N}from"../../../../../chunks/svelte-splitpanes-f31bdccb.js";import{C as X}from"../../../../../chunks/CodeArea-e2a25823.js";function O(f){let e,r;return{c(){e=_("span"),r=u("1")},l(t){e=d(t,"SPAN",{});var s=b(e);r=h(s,"1"),s.forEach(l)},m(t,s){m(t,e,s),$(e,r)},p:H,d(t){t&&l(e)}}}function U(f){let e,r;return{c(){e=_("span"),r=u("2")},l(t){e=d(t,"SPAN",{});var s=b(e);r=h(s,"2"),s.forEach(l)},m(t,s){m(t,e,s),$(e,r)},p:H,d(t){t&&l(e)}}}function W(f){let e,r;return{c(){e=_("span"),r=u("3")},l(t){e=d(t,"SPAN",{});var s=b(e);r=h(s,"3"),s.forEach(l)},m(t,s){m(t,e,s),$(e,r)},p:H,d(t){t&&l(e)}}}function Z(f){let e,r,t,s,a,o;return e=new N({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),a=new N({props:{$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment),r=C(),S(t.$$.fragment),s=C(),S(a.$$.fragment)},l(p){y(e.$$.fragment,p),r=k(p),y(t.$$.fragment,p),s=k(p),y(a.$$.fragment,p)},m(p,i){v(e,p,i),m(p,r,i),v(t,p,i),m(p,s,i),v(a,p,i),o=!0},p(p,i){const A={};i&4&&(A.$$scope={dirty:i,ctx:p}),e.$set(A);const B={};i&4&&(B.$$scope={dirty:i,ctx:p}),t.$set(B);const E={};i&4&&(E.$$scope={dirty:i,ctx:p}),a.$set(E)},i(p){o||(x(e.$$.fragment,p),x(t.$$.fragment,p),x(a.$$.fragment,p),o=!0)},o(p){w(e.$$.fragment,p),w(t.$$.fragment,p),w(a.$$.fragment,p),o=!1},d(p){P(e,p),p&&l(r),P(t,p),p&&l(s),P(a,p)}}}function ee(f){let e,r;return e=new Y({props:{theme:"my-theme",$$slots:{default:[Z]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){v(e,t,s),r=!0},p(t,s){const a={};s&4&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){r||(x(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function te(f){let e,r,t;return{c(){e=_("em"),r=_("p"),t=u("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(s){e=d(s,"EM",{class:!0});var a=b(e);r=d(a,"P",{});var o=b(r);t=h(o,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),o.forEach(l),a.forEach(l),this.h()},h(){K(e,"class","specs")},m(s,a){m(s,e,a),$(e,r),$(r,t)},p:H,d(s){s&&l(e)}}}function se(f){let e,r,t,s;return e=new N({props:{$$slots:{default:[ee]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment),r=C(),S(t.$$.fragment)},l(a){y(e.$$.fragment,a),r=k(a),y(t.$$.fragment,a)},m(a,o){v(e,a,o),m(a,r,o),v(t,a,o),s=!0},p(a,o){const p={};o&4&&(p.$$scope={dirty:o,ctx:a}),e.$set(p);const i={};o&4&&(i.$$scope={dirty:o,ctx:a}),t.$set(i)},i(a){s||(x(e.$$.fragment,a),x(t.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),s=!1},d(a){P(e,a),a&&l(r),P(t,a)}}}function ne(f){let e,r,t,s,a,o,p,i,A,B,E,I,M,j,L,R,z,q,T,F;return I=new X({props:{id:"styling_splitters",code:f[1]}}),z=new Y({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[se]},$$scope:{ctx:f}}}),T=new X({props:{id:"styling_splitters_alternative",code:f[0]}}),{c(){e=_("h2"),r=u("Styling Splitters"),t=C(),s=_("p"),a=u("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),o=_("br"),p=u("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),i=_("b"),A=u("warning"),B=u(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),E=C(),S(I.$$.fragment),M=C(),j=_("p"),L=u('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),R=C(),S(z.$$.fragment),q=C(),S(T.$$.fragment)},l(n){e=d(n,"H2",{});var c=b(e);r=h(c,"Styling Splitters"),c.forEach(l),t=k(n),s=d(n,"P",{});var g=b(s);a=h(g,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),o=d(g,"BR",{}),p=h(g,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),i=d(g,"B",{});var Q=b(i);A=h(Q,"warning"),Q.forEach(l),B=h(g,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),g.forEach(l),E=k(n),y(I.$$.fragment,n),M=k(n),j=d(n,"P",{});var V=b(j);L=h(V,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),V.forEach(l),R=k(n),y(z.$$.fragment,n),q=k(n),y(T.$$.fragment,n)},m(n,c){m(n,e,c),$(e,r),m(n,t,c),m(n,s,c),$(s,a),$(s,o),$(s,p),$(s,i),$(i,A),$(s,B),m(n,E,c),v(I,n,c),m(n,M,c),m(n,j,c),$(j,L),m(n,R,c),v(z,n,c),m(n,q,c),v(T,n,c),F=!0},p(n,[c]){const g={};c&4&&(g.$$scope={dirty:c,ctx:n}),z.$set(g)},i(n){F||(x(I.$$.fragment,n),x(z.$$.fragment,n),x(T.$$.fragment,n),F=!0)},o(n){w(I.$$.fragment,n),w(z.$$.fragment,n),w(T.$$.fragment,n),F=!1},d(n){n&&l(e),n&&l(t),n&&l(s),n&&l(E),P(I,n),n&&l(M),n&&l(j),n&&l(R),P(z,n),n&&l(q),P(T,n)}}}function ae(f){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
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
`,`
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
`]}class ie extends D{constructor(e){super(),G(this,e,ae,ne,J,{})}}export{ie as default};
