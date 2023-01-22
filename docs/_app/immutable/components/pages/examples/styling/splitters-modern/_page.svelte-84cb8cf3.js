import{S as D,i as V,s as A,e as b,P,f as y,z as _,h as w,j as C,Q as x,l as i,k as B,A as g,o as u,p as z,B as d,t as h,b as S,C as v,M as T}from"../../../../../chunks/external-069c0b55.js";import{S as F,P as E}from"../../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as j}from"../../../../../chunks/CodeArea-8a6a8f55.js";function q(f){let e,r;return{c(){e=b("p"),r=P("MenuBar")},l(t){e=w(t,"P",{});var s=C(e);r=x(s,"MenuBar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:T,d(t){t&&i(e)}}}function H(f){let e,r;return{c(){e=b("p"),r=P("ToolBar")},l(t){e=w(t,"P",{});var s=C(e);r=x(s,"ToolBar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:T,d(t){t&&i(e)}}}function Q(f){let e,r,t,s;return{c(){e=b("p"),r=P("Folder"),t=b("br"),s=P(`
					Try those -->`)},l(o){e=w(o,"P",{});var m=C(e);r=x(m,"Folder"),t=w(m,"BR",{}),s=x(m,`
					Try those -->`),m.forEach(i)},m(o,m){u(o,e,m),z(e,r),z(e,t),z(e,s)},p:T,d(o){o&&i(e)}}}function R(f){let e,r;return{c(){e=b("p"),r=P("Views")},l(t){e=w(t,"P",{});var s=C(e);r=x(s,"Views"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:T,d(t){t&&i(e)}}}function G(f){let e,r;return{c(){e=b("p"),r=P("Details")},l(t){e=w(t,"P",{});var s=C(e);r=x(s,"Details"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:T,d(t){t&&i(e)}}}function I(f){let e,r,t,s,o,m;return e=new E({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),t=new E({props:{$$slots:{default:[R]},$$scope:{ctx:f}}}),o=new E({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=y(),_(t.$$.fragment),s=y(),_(o.$$.fragment)},l(p){g(e.$$.fragment,p),r=B(p),g(t.$$.fragment,p),s=B(p),g(o.$$.fragment,p)},m(p,$){d(e,p,$),u(p,r,$),d(t,p,$),u(p,s,$),d(o,p,$),m=!0},p(p,$){const n={};$&2&&(n.$$scope={dirty:$,ctx:p}),e.$set(n);const l={};$&2&&(l.$$scope={dirty:$,ctx:p}),t.$set(l);const a={};$&2&&(a.$$scope={dirty:$,ctx:p}),o.$set(a)},i(p){m||(h(e.$$.fragment,p),h(t.$$.fragment,p),h(o.$$.fragment,p),m=!0)},o(p){S(e.$$.fragment,p),S(t.$$.fragment,p),S(o.$$.fragment,p),m=!1},d(p){v(e,p),p&&i(r),v(t,p),p&&i(s),v(o,p)}}}function J(f){let e,r;return e=new F({props:{theme:"modern-theme",$$slots:{default:[I]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function K(f){let e,r;return{c(){e=b("p"),r=P("statusbar")},l(t){e=w(t,"P",{});var s=C(e);r=x(s,"statusbar"),s.forEach(i)},m(t,s){u(t,e,s),z(e,r)},p:T,d(t){t&&i(e)}}}function L(f){let e,r,t,s,o,m,p,$;return e=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[q]},$$scope:{ctx:f}}}),t=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[H]},$$scope:{ctx:f}}}),o=new E({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),p=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=y(),_(t.$$.fragment),s=y(),_(o.$$.fragment),m=y(),_(p.$$.fragment)},l(n){g(e.$$.fragment,n),r=B(n),g(t.$$.fragment,n),s=B(n),g(o.$$.fragment,n),m=B(n),g(p.$$.fragment,n)},m(n,l){d(e,n,l),u(n,r,l),d(t,n,l),u(n,s,l),d(o,n,l),u(n,m,l),d(p,n,l),$=!0},p(n,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:n}),e.$set(a);const c={};l&2&&(c.$$scope={dirty:l,ctx:n}),t.$set(c);const k={};l&2&&(k.$$scope={dirty:l,ctx:n}),o.$set(k);const M={};l&2&&(M.$$scope={dirty:l,ctx:n}),p.$set(M)},i(n){$||(h(e.$$.fragment,n),h(t.$$.fragment,n),h(o.$$.fragment,n),h(p.$$.fragment,n),$=!0)},o(n){S(e.$$.fragment,n),S(t.$$.fragment,n),S(o.$$.fragment,n),S(p.$$.fragment,n),$=!1},d(n){v(e,n),n&&i(r),v(t,n),n&&i(s),v(o,n),n&&i(m),v(p,n)}}}function N(f){let e,r,t,s,o,m,p,$,n,l;return p=new F({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[L]},$$scope:{ctx:f}}}),n=new j({props:{id:"style_splitters_modern",code:f[0]}}),{c(){e=b("h2"),r=P("Styling Splitters - Modern"),t=y(),s=b("p"),o=P(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),m=y(),_(p.$$.fragment),$=y(),_(n.$$.fragment)},l(a){e=w(a,"H2",{});var c=C(e);r=x(c,"Styling Splitters - Modern"),c.forEach(i),t=B(a),s=w(a,"P",{});var k=C(s);o=x(k,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),k.forEach(i),m=B(a),g(p.$$.fragment,a),$=B(a),g(n.$$.fragment,a)},m(a,c){u(a,e,c),z(e,r),u(a,t,c),u(a,s,c),z(s,o),u(a,m,c),d(p,a,c),u(a,$,c),d(n,a,c),l=!0},p(a,[c]){const k={};c&2&&(k.$$scope={dirty:c,ctx:a}),p.$set(k)},i(a){l||(h(p.$$.fragment,a),h(n.$$.fragment,a),l=!0)},o(a){S(p.$$.fragment,a),S(n.$$.fragment,a),l=!1},d(a){a&&i(e),a&&i(t),a&&i(s),a&&i(m),v(p,a),a&&i($),v(n,a)}}}function O(f){return[`
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
`]}class Y extends D{constructor(e){super(),V(this,e,O,N,A,{})}}export{Y as default};
