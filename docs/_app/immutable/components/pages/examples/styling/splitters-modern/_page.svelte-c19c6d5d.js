import{S as F,i as V,s as q,U as D,k as b,q as w,a as k,w as _,l as P,m as E,r as x,h as i,c as C,x as g,b as u,C as z,y as d,f as h,t as v,z as S,V as T,D as B}from"../../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as A}from"../../../../../chunks/CodeArea-5e3138e2.js";function H(f){let e,r;return{c(){e=b("p"),r=w("MenuBar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"MenuBar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:B,d(t){t&&i(e)}}}function R(f){let e,r;return{c(){e=b("p"),r=w("ToolBar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"ToolBar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:B,d(t){t&&i(e)}}}function U(f){let e,r,t,s;return{c(){e=b("p"),r=w("Folder"),t=b("br"),s=w(`
					Try those -->`)},l(o){e=P(o,"P",{});var m=E(e);r=x(m,"Folder"),t=P(m,"BR",{}),s=x(m,`
					Try those -->`),m.forEach(i)},m(o,m){u(o,e,m),z(e,r),z(e,t),z(e,s)},p:B,d(o){o&&i(e)}}}function j(f){let e,r;return{c(){e=b("p"),r=w("Views")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"Views"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:B,d(t){t&&i(e)}}}function G(f){let e,r;return{c(){e=b("p"),r=w("Details")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"Details"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:B,d(t){t&&i(e)}}}function I(f){let e,r,t,s,o,m;return e=new T({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),t=new T({props:{$$slots:{default:[j]},$$scope:{ctx:f}}}),o=new T({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=k(),_(t.$$.fragment),s=k(),_(o.$$.fragment)},l(p){g(e.$$.fragment,p),r=C(p),g(t.$$.fragment,p),s=C(p),g(o.$$.fragment,p)},m(p,$){d(e,p,$),u(p,r,$),d(t,p,$),u(p,s,$),d(o,p,$),m=!0},p(p,$){const n={};$&2&&(n.$$scope={dirty:$,ctx:p}),e.$set(n);const l={};$&2&&(l.$$scope={dirty:$,ctx:p}),t.$set(l);const a={};$&2&&(a.$$scope={dirty:$,ctx:p}),o.$set(a)},i(p){m||(h(e.$$.fragment,p),h(t.$$.fragment,p),h(o.$$.fragment,p),m=!0)},o(p){v(e.$$.fragment,p),v(t.$$.fragment,p),v(o.$$.fragment,p),m=!1},d(p){S(e,p),p&&i(r),S(t,p),p&&i(s),S(o,p)}}}function J(f){let e,r;return e=new D({props:{theme:"modern-theme",$$slots:{default:[I]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function K(f){let e,r;return{c(){e=b("p"),r=w("statusbar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"statusbar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:B,d(t){t&&i(e)}}}function L(f){let e,r,t,s,o,m,p,$;return e=new T({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[H]},$$scope:{ctx:f}}}),t=new T({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[R]},$$scope:{ctx:f}}}),o=new T({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),p=new T({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=k(),_(t.$$.fragment),s=k(),_(o.$$.fragment),m=k(),_(p.$$.fragment)},l(n){g(e.$$.fragment,n),r=C(n),g(t.$$.fragment,n),s=C(n),g(o.$$.fragment,n),m=C(n),g(p.$$.fragment,n)},m(n,l){d(e,n,l),u(n,r,l),d(t,n,l),u(n,s,l),d(o,n,l),u(n,m,l),d(p,n,l),$=!0},p(n,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:n}),e.$set(a);const c={};l&2&&(c.$$scope={dirty:l,ctx:n}),t.$set(c);const y={};l&2&&(y.$$scope={dirty:l,ctx:n}),o.$set(y);const M={};l&2&&(M.$$scope={dirty:l,ctx:n}),p.$set(M)},i(n){$||(h(e.$$.fragment,n),h(t.$$.fragment,n),h(o.$$.fragment,n),h(p.$$.fragment,n),$=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),v(o.$$.fragment,n),v(p.$$.fragment,n),$=!1},d(n){S(e,n),n&&i(r),S(t,n),n&&i(s),S(o,n),n&&i(m),S(p,n)}}}function N(f){let e,r,t,s,o,m,p,$,n,l;return p=new D({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[L]},$$scope:{ctx:f}}}),n=new A({props:{id:"style_splitters_modern",code:f[0]}}),{c(){e=b("h2"),r=w("Styling Splitters - Modern"),t=k(),s=b("p"),o=w(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),m=k(),_(p.$$.fragment),$=k(),_(n.$$.fragment)},l(a){e=P(a,"H2",{});var c=E(e);r=x(c,"Styling Splitters - Modern"),c.forEach(i),t=C(a),s=P(a,"P",{});var y=E(s);o=x(y,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),y.forEach(i),m=C(a),g(p.$$.fragment,a),$=C(a),g(n.$$.fragment,a)},m(a,c){u(a,e,c),z(e,r),u(a,t,c),u(a,s,c),z(s,o),u(a,m,c),d(p,a,c),u(a,$,c),d(n,a,c),l=!0},p(a,[c]){const y={};c&2&&(y.$$scope={dirty:c,ctx:a}),p.$set(y)},i(a){l||(h(p.$$.fragment,a),h(n.$$.fragment,a),l=!0)},o(a){v(p.$$.fragment,a),v(n.$$.fragment,a),l=!1},d(a){a&&i(e),a&&i(t),a&&i(s),a&&i(m),S(p,a),a&&i($),S(n,a)}}}function O(f){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>MenuBar</p>
	</Pane>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>ToolBar</p>
	</Pane>
	<Pane>
		<Splitpanes theme="modern-theme">
			<Pane>
				<p>
					Folder<br />
					Try those -->
				</p>
			</Pane>
			<Pane>
				<p>Views</p>
			</Pane>
			<Pane>
				<p>Details</p>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>statusbar</p>
	</Pane>
</Splitpanes>

<style global lang="scss">
	.splitpanes.modern-theme {
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
				background-color: #2db9d2;
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
	.modern-theme {
		&.splitpanes--vertical > .splitpanes__splitter:before {
			left: -3px;
			right: -3px;
			height: 100%;
			cursor: col-resize;
		}
		&.splitpanes--horizontal > .splitpanes__splitter:before {
			top: -3px;
			bottom: -3px;
			width: 100%;
			cursor: row-resize;
		}
	}

	.splitpanes.no-splitter {
		.splitpanes__pane {
			background-color: #f8f8f8;
		}
		.splitpanes__splitter {
			background-color: #ccc;
			position: relative;
		}
	}
	.no-splitter {
		&.splitpanes--horizontal > .splitpanes__splitter:before {
			width: 0.125rem;
			pointer-events: none;
			cursor: none;
		}
		&.splitpanes--vertical > .splitpanes__splitter:before {
			height: 0.125rem;
			pointer-events: none;
			cursor: none;
		}
	}
</style>
`]}class X extends F{constructor(e){super(),V(this,e,O,N,q,{})}}export{X as default};
