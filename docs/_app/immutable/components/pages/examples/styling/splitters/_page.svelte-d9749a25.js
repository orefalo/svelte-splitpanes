import{S as Q,i as V,s as X,e as h,L as k,a as w,Q as d,b as g,d as E,M as C,g as l,f as z,R as b,j as m,k as u,T as S,n as v,o as x,V as y,h as Y,I as R}from"../../../../../chunks/external-b827b9fd.js";import{S as L,P as B}from"../../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as H}from"../../../../../chunks/CodeArea-6af4aaf3.js";function D(f){let e,p;return{c(){e=h("span"),p=k("1")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"1"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:R,d(t){t&&l(e)}}}function G(f){let e,p;return{c(){e=h("span"),p=k("2")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"2"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:R,d(t){t&&l(e)}}}function J(f){let e,p;return{c(){e=h("span"),p=k("3")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"3"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:R,d(t){t&&l(e)}}}function K(f){let e,p,t,a,n,i;return e=new B({props:{$$slots:{default:[D]},$$scope:{ctx:f}}}),t=new B({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),n=new B({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=w(),d(t.$$.fragment),a=w(),d(n.$$.fragment)},l(r){b(e.$$.fragment,r),p=z(r),b(t.$$.fragment,r),a=z(r),b(n.$$.fragment,r)},m(r,o){S(e,r,o),m(r,p,o),S(t,r,o),m(r,a,o),S(n,r,o),i=!0},p(r,o){const c={};o&4&&(c.$$scope={dirty:o,ctx:r}),e.$set(c);const A={};o&4&&(A.$$scope={dirty:o,ctx:r}),t.$set(A);const _={};o&4&&(_.$$scope={dirty:o,ctx:r}),n.$set(_)},i(r){i||(v(e.$$.fragment,r),v(t.$$.fragment,r),v(n.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),x(t.$$.fragment,r),x(n.$$.fragment,r),i=!1},d(r){y(e,r),r&&l(p),y(t,r),r&&l(a),y(n,r)}}}function O(f){let e,p;return e=new L({props:{theme:"my-theme",$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){S(e,t,a),p=!0},p(t,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){p||(v(e.$$.fragment,t),p=!0)},o(t){x(e.$$.fragment,t),p=!1},d(t){y(e,t)}}}function U(f){let e,p,t;return{c(){e=h("em"),p=h("p"),t=k("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(a){e=g(a,"EM",{class:!0});var n=E(e);p=g(n,"P",{});var i=E(p);t=C(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(l),n.forEach(l),this.h()},h(){Y(e,"class","specs")},m(a,n){m(a,e,n),u(e,p),u(p,t)},p:R,d(a){a&&l(e)}}}function W(f){let e,p,t,a;return e=new B({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),t=new B({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=w(),d(t.$$.fragment)},l(n){b(e.$$.fragment,n),p=z(n),b(t.$$.fragment,n)},m(n,i){S(e,n,i),m(n,p,i),S(t,n,i),a=!0},p(n,i){const r={};i&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r);const o={};i&4&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){a||(v(e.$$.fragment,n),v(t.$$.fragment,n),a=!0)},o(n){x(e.$$.fragment,n),x(t.$$.fragment,n),a=!1},d(n){y(e,n),n&&l(p),y(t,n)}}}function Z(f){let e,p,t,a,n,i,r,o,c,A,_,q,N,P,T,I,M;return c=new H({props:{id:"styling_splitters",code:f[1]}}),P=new L({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),I=new H({props:{id:"styling_splitters_alternative",code:f[0]}}),{c(){e=h("h2"),p=k("Styling Splitters"),t=w(),a=h("p"),n=k("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=h("br"),r=k("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),o=w(),d(c.$$.fragment),A=w(),_=h("p"),q=k('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),N=w(),d(P.$$.fragment),T=w(),d(I.$$.fragment)},l(s){e=g(s,"H2",{});var $=E(e);p=C($,"Styling Splitters"),$.forEach(l),t=z(s),a=g(s,"P",{});var j=E(a);n=C(j,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=g(j,"BR",{}),r=C(j,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),j.forEach(l),o=z(s),b(c.$$.fragment,s),A=z(s),_=g(s,"P",{});var F=E(_);q=C(F,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),F.forEach(l),N=z(s),b(P.$$.fragment,s),T=z(s),b(I.$$.fragment,s)},m(s,$){m(s,e,$),u(e,p),m(s,t,$),m(s,a,$),u(a,n),u(a,i),u(a,r),m(s,o,$),S(c,s,$),m(s,A,$),m(s,_,$),u(_,q),m(s,N,$),S(P,s,$),m(s,T,$),S(I,s,$),M=!0},p(s,[$]){const j={};$&4&&(j.$$scope={dirty:$,ctx:s}),P.$set(j)},i(s){M||(v(c.$$.fragment,s),v(P.$$.fragment,s),v(I.$$.fragment,s),M=!0)},o(s){x(c.$$.fragment,s),x(P.$$.fragment,s),x(I.$$.fragment,s),M=!1},d(s){s&&l(e),s&&l(t),s&&l(a),s&&l(o),y(c,s),s&&l(A),s&&l(_),s&&l(N),y(P,s),s&&l(T),y(I,s)}}}function ee(f){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>        
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
        margin-left: -1px;
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
        margin-top: -1px;
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
`]}class ne extends Q{constructor(e){super(),V(this,e,ee,Z,X,{})}}export{ne as default};
