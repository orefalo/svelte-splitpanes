import{S as V,i as D,s as R,e as z,L as w,a as k,Q as _,b as P,d as E,M as x,g as i,f as y,R as g,j as u,k as b,T as d,n as h,o as S,V as v,I as C}from"../../../../../chunks/external-b827b9fd.js";import{S as F,P as B}from"../../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as j}from"../../../../../chunks/CodeArea-6af4aaf3.js";function q(f){let e,r;return{c(){e=z("p"),r=w("MenuBar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"MenuBar"),s.forEach(i)},m(t,s){u(t,e,s),b(e,r)},p:C,d(t){t&&i(e)}}}function A(f){let e,r;return{c(){e=z("p"),r=w("ToolBar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"ToolBar"),s.forEach(i)},m(t,s){u(t,e,s),b(e,r)},p:C,d(t){t&&i(e)}}}function H(f){let e,r,t,s;return{c(){e=z("p"),r=w("Folder"),t=z("br"),s=w(`
					Try those -->`)},l(o){e=P(o,"P",{});var m=E(e);r=x(m,"Folder"),t=P(m,"BR",{}),s=x(m,`
					Try those -->`),m.forEach(i)},m(o,m){u(o,e,m),b(e,r),b(e,t),b(e,s)},p:C,d(o){o&&i(e)}}}function I(f){let e,r;return{c(){e=z("p"),r=w("Views")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"Views"),s.forEach(i)},m(t,s){u(t,e,s),b(e,r)},p:C,d(t){t&&i(e)}}}function L(f){let e,r;return{c(){e=z("p"),r=w("Details")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"Details"),s.forEach(i)},m(t,s){u(t,e,s),b(e,r)},p:C,d(t){t&&i(e)}}}function Q(f){let e,r,t,s,o,m;return e=new B({props:{$$slots:{default:[H]},$$scope:{ctx:f}}}),t=new B({props:{$$slots:{default:[I]},$$scope:{ctx:f}}}),o=new B({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=k(),_(t.$$.fragment),s=k(),_(o.$$.fragment)},l(p){g(e.$$.fragment,p),r=y(p),g(t.$$.fragment,p),s=y(p),g(o.$$.fragment,p)},m(p,$){d(e,p,$),u(p,r,$),d(t,p,$),u(p,s,$),d(o,p,$),m=!0},p(p,$){const n={};$&2&&(n.$$scope={dirty:$,ctx:p}),e.$set(n);const l={};$&2&&(l.$$scope={dirty:$,ctx:p}),t.$set(l);const a={};$&2&&(a.$$scope={dirty:$,ctx:p}),o.$set(a)},i(p){m||(h(e.$$.fragment,p),h(t.$$.fragment,p),h(o.$$.fragment,p),m=!0)},o(p){S(e.$$.fragment,p),S(t.$$.fragment,p),S(o.$$.fragment,p),m=!1},d(p){v(e,p),p&&i(r),v(t,p),p&&i(s),v(o,p)}}}function G(f){let e,r;return e=new F({props:{theme:"modern-theme",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function J(f){let e,r;return{c(){e=z("p"),r=w("statusbar")},l(t){e=P(t,"P",{});var s=E(e);r=x(s,"statusbar"),s.forEach(i)},m(t,s){u(t,e,s),b(e,r)},p:C,d(t){t&&i(e)}}}function K(f){let e,r,t,s,o,m,p,$;return e=new B({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[q]},$$scope:{ctx:f}}}),t=new B({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[A]},$$scope:{ctx:f}}}),o=new B({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),p=new B({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[J]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),r=k(),_(t.$$.fragment),s=k(),_(o.$$.fragment),m=k(),_(p.$$.fragment)},l(n){g(e.$$.fragment,n),r=y(n),g(t.$$.fragment,n),s=y(n),g(o.$$.fragment,n),m=y(n),g(p.$$.fragment,n)},m(n,l){d(e,n,l),u(n,r,l),d(t,n,l),u(n,s,l),d(o,n,l),u(n,m,l),d(p,n,l),$=!0},p(n,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:n}),e.$set(a);const c={};l&2&&(c.$$scope={dirty:l,ctx:n}),t.$set(c);const T={};l&2&&(T.$$scope={dirty:l,ctx:n}),o.$set(T);const M={};l&2&&(M.$$scope={dirty:l,ctx:n}),p.$set(M)},i(n){$||(h(e.$$.fragment,n),h(t.$$.fragment,n),h(o.$$.fragment,n),h(p.$$.fragment,n),$=!0)},o(n){S(e.$$.fragment,n),S(t.$$.fragment,n),S(o.$$.fragment,n),S(p.$$.fragment,n),$=!1},d(n){v(e,n),n&&i(r),v(t,n),n&&i(s),v(o,n),n&&i(m),v(p,n)}}}function N(f){let e,r,t,s,o,m,p,$,n,l;return p=new F({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[K]},$$scope:{ctx:f}}}),n=new j({props:{id:"style_splitters_modern",code:f[0]}}),{c(){e=z("h2"),r=w("Styling Splitters - Modern"),t=k(),s=z("p"),o=w(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),m=k(),_(p.$$.fragment),$=k(),_(n.$$.fragment)},l(a){e=P(a,"H2",{});var c=E(e);r=x(c,"Styling Splitters - Modern"),c.forEach(i),t=y(a),s=P(a,"P",{});var T=E(s);o=x(T,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),T.forEach(i),m=y(a),g(p.$$.fragment,a),$=y(a),g(n.$$.fragment,a)},m(a,c){u(a,e,c),b(e,r),u(a,t,c),u(a,s,c),b(s,o),u(a,m,c),d(p,a,c),u(a,$,c),d(n,a,c),l=!0},p(a,[c]){const T={};c&2&&(T.$$scope={dirty:c,ctx:a}),p.$set(T)},i(a){l||(h(p.$$.fragment,a),h(n.$$.fragment,a),l=!0)},o(a){S(p.$$.fragment,a),S(n.$$.fragment,a),l=!1},d(a){a&&i(e),a&&i(t),a&&i(s),a&&i(m),v(p,a),a&&i($),v(n,a)}}}function O(f){return[`
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
`]}class Y extends V{constructor(e){super(),D(this,e,O,N,R,{})}}export{Y as default};
