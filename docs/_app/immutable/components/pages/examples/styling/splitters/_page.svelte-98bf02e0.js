import{S as Y,i as D,s as G,k as h,q as k,a as w,w as d,l as g,m as E,r as C,h as l,c as z,x as b,b as m,C as u,y as S,f as x,t as v,z as y,n as J,B as F}from"../../../../../chunks/index-5c227a2d.js";import{S as X,P as N}from"../../../../../chunks/Pane-ea2de0f1.js";import{C as R}from"../../../../../chunks/CodeArea-89796faf.js";function K(f){let e,p;return{c(){e=h("span"),p=k("1")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"1"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&l(e)}}}function L(f){let e,p;return{c(){e=h("span"),p=k("2")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"2"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&l(e)}}}function O(f){let e,p;return{c(){e=h("span"),p=k("3")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"3"),a.forEach(l)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&l(e)}}}function Q(f){let e,p,t,a,n,i;return e=new N({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),n=new N({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=w(),d(t.$$.fragment),a=w(),d(n.$$.fragment)},l(r){b(e.$$.fragment,r),p=z(r),b(t.$$.fragment,r),a=z(r),b(n.$$.fragment,r)},m(r,o){S(e,r,o),m(r,p,o),S(t,r,o),m(r,a,o),S(n,r,o),i=!0},p(r,o){const c={};o&4&&(c.$$scope={dirty:o,ctx:r}),e.$set(c);const A={};o&4&&(A.$$scope={dirty:o,ctx:r}),t.$set(A);const _={};o&4&&(_.$$scope={dirty:o,ctx:r}),n.$set(_)},i(r){i||(x(e.$$.fragment,r),x(t.$$.fragment,r),x(n.$$.fragment,r),i=!0)},o(r){v(e.$$.fragment,r),v(t.$$.fragment,r),v(n.$$.fragment,r),i=!1},d(r){y(e,r),r&&l(p),y(t,r),r&&l(a),y(n,r)}}}function U(f){let e,p;return e=new X({props:{theme:"my-theme",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){S(e,t,a),p=!0},p(t,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){p||(x(e.$$.fragment,t),p=!0)},o(t){v(e.$$.fragment,t),p=!1},d(t){y(e,t)}}}function V(f){let e,p,t;return{c(){e=h("em"),p=h("p"),t=k("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(a){e=g(a,"EM",{class:!0});var n=E(e);p=g(n,"P",{});var i=E(p);t=C(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(l),n.forEach(l),this.h()},h(){J(e,"class","specs")},m(a,n){m(a,e,n),u(e,p),u(p,t)},p:F,d(a){a&&l(e)}}}function W(f){let e,p,t,a;return e=new N({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[V]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=w(),d(t.$$.fragment)},l(n){b(e.$$.fragment,n),p=z(n),b(t.$$.fragment,n)},m(n,i){S(e,n,i),m(n,p,i),S(t,n,i),a=!0},p(n,i){const r={};i&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r);const o={};i&4&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){a||(x(e.$$.fragment,n),x(t.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),a=!1},d(n){y(e,n),n&&l(p),y(t,n)}}}function Z(f){let e,p,t,a,n,i,r,o,c,A,_,H,j,P,q,B,T;return c=new R({props:{id:"styling_splitters",code:f[1]}}),P=new X({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),B=new R({props:{id:"styling_splitters_alternative",code:f[0]}}),{c(){e=h("h2"),p=k("Styling Splitters"),t=w(),a=h("p"),n=k("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=h("br"),r=k("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),o=w(),d(c.$$.fragment),A=w(),_=h("p"),H=k('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),j=w(),d(P.$$.fragment),q=w(),d(B.$$.fragment)},l(s){e=g(s,"H2",{});var $=E(e);p=C($,"Styling Splitters"),$.forEach(l),t=z(s),a=g(s,"P",{});var I=E(a);n=C(I,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=g(I,"BR",{}),r=C(I,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),I.forEach(l),o=z(s),b(c.$$.fragment,s),A=z(s),_=g(s,"P",{});var M=E(_);H=C(M,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),M.forEach(l),j=z(s),b(P.$$.fragment,s),q=z(s),b(B.$$.fragment,s)},m(s,$){m(s,e,$),u(e,p),m(s,t,$),m(s,a,$),u(a,n),u(a,i),u(a,r),m(s,o,$),S(c,s,$),m(s,A,$),m(s,_,$),u(_,H),m(s,j,$),S(P,s,$),m(s,q,$),S(B,s,$),T=!0},p(s,[$]){const I={};$&4&&(I.$$scope={dirty:$,ctx:s}),P.$set(I)},i(s){T||(x(c.$$.fragment,s),x(P.$$.fragment,s),x(B.$$.fragment,s),T=!0)},o(s){v(c.$$.fragment,s),v(P.$$.fragment,s),v(B.$$.fragment,s),T=!1},d(s){s&&l(e),s&&l(t),s&&l(a),s&&l(o),y(c,s),s&&l(A),s&&l(_),s&&l(j),y(P,s),s&&l(q),y(B,s)}}}function ee(f){return[`
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
`]}class ne extends Y{constructor(e){super(),D(this,e,ee,Z,G,{})}}export{ne as default};
