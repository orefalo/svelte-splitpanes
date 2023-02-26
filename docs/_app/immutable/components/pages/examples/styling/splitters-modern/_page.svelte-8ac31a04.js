import{S as F,i as V,s as D,Q as u,R as _,T as g,n as d,o as h,V as v,a as T,f as k,j as c,g as i,e as z,L as S,b as w,d as x,M as b,k as m,I as y}from"../../../../../chunks/external-0cbe0899.js";import{E as j}from"../../../../../chunks/ExampleArea-d9e86d6b.js";import{S as R,P as E}from"../../../../../chunks/svelte-splitpanes-1a0ab212.js";function q($){let t,p;return{c(){t=z("p"),p=S("MenuBar")},l(e){t=w(e,"P",{});var s=x(t);p=b(s,"MenuBar"),s.forEach(i)},m(e,s){c(e,t,s),m(t,p)},p:y,d(e){e&&i(t)}}}function A($){let t,p;return{c(){t=z("p"),p=S("ToolBar")},l(e){t=w(e,"P",{});var s=x(t);p=b(s,"ToolBar"),s.forEach(i)},m(e,s){c(e,t,s),m(t,p)},p:y,d(e){e&&i(t)}}}function H($){let t,p,e,s,a=">",f;return{c(){t=z("p"),p=S("Folder"),e=z("br"),s=S(`
					Try those --`),f=S(a)},l(r){t=w(r,"P",{});var o=x(t);p=b(o,"Folder"),e=w(o,"BR",{}),s=b(o,`
					Try those --`),f=b(o,a),o.forEach(i)},m(r,o){c(r,t,o),m(t,p),m(t,e),m(t,s),m(t,f)},p:y,d(r){r&&i(t)}}}function I($){let t,p;return{c(){t=z("p"),p=S("Views")},l(e){t=w(e,"P",{});var s=x(t);p=b(s,"Views"),s.forEach(i)},m(e,s){c(e,t,s),m(t,p)},p:y,d(e){e&&i(t)}}}function L($){let t,p;return{c(){t=z("p"),p=S("Details")},l(e){t=w(e,"P",{});var s=x(t);p=b(s,"Details"),s.forEach(i)},m(e,s){c(e,t,s),m(t,p)},p:y,d(e){e&&i(t)}}}function Q($){let t,p,e,s,a,f;return t=new E({props:{$$slots:{default:[H]},$$scope:{ctx:$}}}),e=new E({props:{$$slots:{default:[I]},$$scope:{ctx:$}}}),a=new E({props:{$$slots:{default:[L]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment),p=T(),u(e.$$.fragment),s=T(),u(a.$$.fragment)},l(r){_(t.$$.fragment,r),p=k(r),_(e.$$.fragment,r),s=k(r),_(a.$$.fragment,r)},m(r,o){g(t,r,o),c(r,p,o),g(e,r,o),c(r,s,o),g(a,r,o),f=!0},p(r,o){const n={};o&1&&(n.$$scope={dirty:o,ctx:r}),t.$set(n);const l={};o&1&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const P={};o&1&&(P.$$scope={dirty:o,ctx:r}),a.$set(P)},i(r){f||(d(t.$$.fragment,r),d(e.$$.fragment,r),d(a.$$.fragment,r),f=!0)},o(r){h(t.$$.fragment,r),h(e.$$.fragment,r),h(a.$$.fragment,r),f=!1},d(r){v(t,r),r&&i(p),v(e,r),r&&i(s),v(a,r)}}}function G($){let t,p;return t=new R({props:{theme:"modern-theme",$$slots:{default:[Q]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){g(t,e,s),p=!0},p(e,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){p||(d(t.$$.fragment,e),p=!0)},o(e){h(t.$$.fragment,e),p=!1},d(e){v(t,e)}}}function J($){let t,p;return{c(){t=z("p"),p=S("statusbar")},l(e){t=w(e,"P",{});var s=x(t);p=b(s,"statusbar"),s.forEach(i)},m(e,s){c(e,t,s),m(t,p)},p:y,d(e){e&&i(t)}}}function K($){let t,p,e,s,a,f,r,o;return t=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[q]},$$scope:{ctx:$}}}),e=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[A]},$$scope:{ctx:$}}}),a=new E({props:{$$slots:{default:[G]},$$scope:{ctx:$}}}),r=new E({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[J]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment),p=T(),u(e.$$.fragment),s=T(),u(a.$$.fragment),f=T(),u(r.$$.fragment)},l(n){_(t.$$.fragment,n),p=k(n),_(e.$$.fragment,n),s=k(n),_(a.$$.fragment,n),f=k(n),_(r.$$.fragment,n)},m(n,l){g(t,n,l),c(n,p,l),g(e,n,l),c(n,s,l),g(a,n,l),c(n,f,l),g(r,n,l),o=!0},p(n,l){const P={};l&1&&(P.$$scope={dirty:l,ctx:n}),t.$set(P);const B={};l&1&&(B.$$scope={dirty:l,ctx:n}),e.$set(B);const C={};l&1&&(C.$$scope={dirty:l,ctx:n}),a.$set(C);const M={};l&1&&(M.$$scope={dirty:l,ctx:n}),r.$set(M)},i(n){o||(d(t.$$.fragment,n),d(e.$$.fragment,n),d(a.$$.fragment,n),d(r.$$.fragment,n),o=!0)},o(n){h(t.$$.fragment,n),h(e.$$.fragment,n),h(a.$$.fragment,n),h(r.$$.fragment,n),o=!1},d(n){v(t,n),n&&i(p),v(e,n),n&&i(s),v(a,n),n&&i(f),v(r,n)}}}function N($){let t,p;return t=new R({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[K]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){g(t,e,s),p=!0},p(e,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){p||(d(t.$$.fragment,e),p=!0)},o(e){h(t.$$.fragment,e),p=!1},d(e){v(t,e)}}}class O extends F{constructor(t){super(),V(this,t,null,N,D,{})}}const U=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

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
					Try those --{'>'}
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
`,W="../../src/routes/examples/styling/splitters-modern/code.svelte",X={id:W,code:U,component:O};function Y($){let t,p,e,s,a,f,r,o;return r=new j({props:{example:X}}),{c(){t=z("h2"),p=S("Styling Splitters - Modern"),e=T(),s=z("p"),a=S(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),f=T(),u(r.$$.fragment)},l(n){t=w(n,"H2",{});var l=x(t);p=b(l,"Styling Splitters - Modern"),l.forEach(i),e=k(n),s=w(n,"P",{});var P=x(s);a=b(P,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),P.forEach(i),f=k(n),_(r.$$.fragment,n)},m(n,l){c(n,t,l),m(t,p),c(n,e,l),c(n,s,l),m(s,a),c(n,f,l),g(r,n,l),o=!0},p:y,i(n){o||(d(r.$$.fragment,n),o=!0)},o(n){h(r.$$.fragment,n),o=!1},d(n){n&&i(t),n&&i(e),n&&i(s),n&&i(f),v(r,n)}}}class nt extends F{constructor(t){super(),V(this,t,null,Y,D,{})}}export{nt as default};
