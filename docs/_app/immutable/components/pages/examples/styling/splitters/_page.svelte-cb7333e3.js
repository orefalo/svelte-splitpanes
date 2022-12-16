import{S as Y,i as D,s as G,k as h,q as k,a as P,w as d,l as g,m as E,r as C,h as r,c as z,x as b,b as m,C as u,y as S,f as x,t as v,z as y,n as J,B as F}from"../../../../../chunks/index-15259a8c.js";import{S as X,P as N}from"../../../../../chunks/Pane-669f295b.js";import{C as R}from"../../../../../chunks/CodeArea-0c99e4dd.js";function K(f){let e,p;return{c(){e=h("span"),p=k("1")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"1"),a.forEach(r)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&r(e)}}}function L(f){let e,p;return{c(){e=h("span"),p=k("2")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"2"),a.forEach(r)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&r(e)}}}function O(f){let e,p;return{c(){e=h("span"),p=k("3")},l(t){e=g(t,"SPAN",{});var a=E(e);p=C(a,"3"),a.forEach(r)},m(t,a){m(t,e,a),u(e,p)},p:F,d(t){t&&r(e)}}}function Q(f){let e,p,t,a,n,i;return e=new N({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),n=new N({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=P(),d(t.$$.fragment),a=P(),d(n.$$.fragment)},l(l){b(e.$$.fragment,l),p=z(l),b(t.$$.fragment,l),a=z(l),b(n.$$.fragment,l)},m(l,o){S(e,l,o),m(l,p,o),S(t,l,o),m(l,a,o),S(n,l,o),i=!0},p(l,o){const c={};o&4&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const A={};o&4&&(A.$$scope={dirty:o,ctx:l}),t.$set(A);const _={};o&4&&(_.$$scope={dirty:o,ctx:l}),n.$set(_)},i(l){i||(x(e.$$.fragment,l),x(t.$$.fragment,l),x(n.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),v(t.$$.fragment,l),v(n.$$.fragment,l),i=!1},d(l){y(e,l),l&&r(p),y(t,l),l&&r(a),y(n,l)}}}function U(f){let e,p;return e=new X({props:{theme:"my-theme",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){S(e,t,a),p=!0},p(t,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){p||(x(e.$$.fragment,t),p=!0)},o(t){v(e.$$.fragment,t),p=!1},d(t){y(e,t)}}}function V(f){let e,p,t;return{c(){e=h("em"),p=h("p"),t=k("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(a){e=g(a,"EM",{class:!0});var n=E(e);p=g(n,"P",{});var i=E(p);t=C(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(r),n.forEach(r),this.h()},h(){J(e,"class","specs")},m(a,n){m(a,e,n),u(e,p),u(p,t)},p:F,d(a){a&&r(e)}}}function W(f){let e,p,t,a;return e=new N({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),t=new N({props:{$$slots:{default:[V]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment),p=P(),d(t.$$.fragment)},l(n){b(e.$$.fragment,n),p=z(n),b(t.$$.fragment,n)},m(n,i){S(e,n,i),m(n,p,i),S(t,n,i),a=!0},p(n,i){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),e.$set(l);const o={};i&4&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){a||(x(e.$$.fragment,n),x(t.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),a=!1},d(n){y(e,n),n&&r(p),y(t,n)}}}function Z(f){let e,p,t,a,n,i,l,o,c,A,_,H,j,w,q,B,T;return c=new R({props:{id:"styling_splitters",code:f[1]}}),w=new X({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),B=new R({props:{id:"styling_splitters_alternative",code:f[0]}}),{c(){e=h("h2"),p=k("Styling Splitters"),t=P(),a=h("p"),n=k("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=h("br"),l=k("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),o=P(),d(c.$$.fragment),A=P(),_=h("p"),H=k('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),j=P(),d(w.$$.fragment),q=P(),d(B.$$.fragment)},l(s){e=g(s,"H2",{});var $=E(e);p=C($,"Styling Splitters"),$.forEach(r),t=z(s),a=g(s,"P",{});var I=E(a);n=C(I,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),i=g(I,"BR",{}),l=C(I,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),I.forEach(r),o=z(s),b(c.$$.fragment,s),A=z(s),_=g(s,"P",{});var M=E(_);H=C(M,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),M.forEach(r),j=z(s),b(w.$$.fragment,s),q=z(s),b(B.$$.fragment,s)},m(s,$){m(s,e,$),u(e,p),m(s,t,$),m(s,a,$),u(a,n),u(a,i),u(a,l),m(s,o,$),S(c,s,$),m(s,A,$),m(s,_,$),u(_,H),m(s,j,$),S(w,s,$),m(s,q,$),S(B,s,$),T=!0},p(s,[$]){const I={};$&4&&(I.$$scope={dirty:$,ctx:s}),w.$set(I)},i(s){T||(x(c.$$.fragment,s),x(w.$$.fragment,s),x(B.$$.fragment,s),T=!0)},o(s){v(c.$$.fragment,s),v(w.$$.fragment,s),v(B.$$.fragment,s),T=!1},d(s){s&&r(e),s&&r(t),s&&r(a),s&&r(o),y(c,s),s&&r(A),s&&r(_),s&&r(j),y(w,s),s&&r(q),y(B,s)}}}function ee(f){return[`
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
