import{S as C,i as M,s as F,O as u,P as f,Q as g,n as $,o as _,R as b,a as k,f as y,j as m,g as o,e as v,J as d,b as S,d as x,K as z,k as j,U as T}from"../chunks/external.11f0258c.js";import{E as V}from"../chunks/ExampleArea.5a69be18.js";import{S as D,P as w}from"../chunks/svelte-splitpanes.1838cab8.js";function H(i){let s,l;return{c(){s=v("p"),l=d("MenuBar")},l(t){s=S(t,"P",{});var n=x(s);l=z(n,"MenuBar"),n.forEach(o)},m(t,n){m(t,s,n),j(s,l)},p:T,d(t){t&&o(s)}}}function R(i){let s,l;return{c(){s=v("p"),l=d("ToolBar")},l(t){s=S(t,"P",{});var n=x(s);l=z(n,"ToolBar"),n.forEach(o)},m(t,n){m(t,s,n),j(s,l)},p:T,d(t){t&&o(s)}}}function A(i){let s,l,t,n,p=">",h;return{c(){s=v("p"),l=d("Folder"),t=v("br"),n=d(`
					Try those --`),h=d(p)},l(e){s=S(e,"P",{});var r=x(s);l=z(r,"Folder"),t=S(r,"BR",{}),n=z(r,`
					Try those --`),h=z(r,p),r.forEach(o)},m(e,r){m(e,s,r),j(s,l),j(s,t),j(s,n),j(s,h)},p:T,d(e){e&&o(s)}}}function J(i){let s,l;return{c(){s=v("p"),l=d("Views")},l(t){s=S(t,"P",{});var n=x(s);l=z(n,"Views"),n.forEach(o)},m(t,n){m(t,s,n),j(s,l)},p:T,d(t){t&&o(s)}}}function K(i){let s,l;return{c(){s=v("p"),l=d("Details")},l(t){s=S(t,"P",{});var n=x(s);l=z(n,"Details"),n.forEach(o)},m(t,n){m(t,s,n),j(s,l)},p:T,d(t){t&&o(s)}}}function L(i){let s,l,t,n,p,h;return s=new w({props:{$$slots:{default:[A]},$$scope:{ctx:i}}}),t=new w({props:{$$slots:{default:[J]},$$scope:{ctx:i}}}),p=new w({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment),l=k(),u(t.$$.fragment),n=k(),u(p.$$.fragment)},l(e){f(s.$$.fragment,e),l=y(e),f(t.$$.fragment,e),n=y(e),f(p.$$.fragment,e)},m(e,r){g(s,e,r),m(e,l,r),g(t,e,r),m(e,n,r),g(p,e,r),h=!0},p(e,r){const a={};r&1&&(a.$$scope={dirty:r,ctx:e}),s.$set(a);const c={};r&1&&(c.$$scope={dirty:r,ctx:e}),t.$set(c);const P={};r&1&&(P.$$scope={dirty:r,ctx:e}),p.$set(P)},i(e){h||($(s.$$.fragment,e),$(t.$$.fragment,e),$(p.$$.fragment,e),h=!0)},o(e){_(s.$$.fragment,e),_(t.$$.fragment,e),_(p.$$.fragment,e),h=!1},d(e){b(s,e),e&&o(l),b(t,e),e&&o(n),b(p,e)}}}function O(i){let s,l;return s=new D({props:{theme:"modern-theme",$$slots:{default:[L]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,n){g(s,t,n),l=!0},p(t,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:t}),s.$set(p)},i(t){l||($(s.$$.fragment,t),l=!0)},o(t){_(s.$$.fragment,t),l=!1},d(t){b(s,t)}}}function Q(i){let s,l;return{c(){s=v("p"),l=d("statusbar")},l(t){s=S(t,"P",{});var n=x(s);l=z(n,"statusbar"),n.forEach(o)},m(t,n){m(t,s,n),j(s,l)},p:T,d(t){t&&o(s)}}}function U(i){let s,l,t,n,p,h,e,r;return s=new w({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[H]},$$scope:{ctx:i}}}),t=new w({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[R]},$$scope:{ctx:i}}}),p=new w({props:{$$slots:{default:[O]},$$scope:{ctx:i}}}),e=new w({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment),l=k(),u(t.$$.fragment),n=k(),u(p.$$.fragment),h=k(),u(e.$$.fragment)},l(a){f(s.$$.fragment,a),l=y(a),f(t.$$.fragment,a),n=y(a),f(p.$$.fragment,a),h=y(a),f(e.$$.fragment,a)},m(a,c){g(s,a,c),m(a,l,c),g(t,a,c),m(a,n,c),g(p,a,c),m(a,h,c),g(e,a,c),r=!0},p(a,c){const P={};c&1&&(P.$$scope={dirty:c,ctx:a}),s.$set(P);const E={};c&1&&(E.$$scope={dirty:c,ctx:a}),t.$set(E);const q={};c&1&&(q.$$scope={dirty:c,ctx:a}),p.$set(q);const B={};c&1&&(B.$$scope={dirty:c,ctx:a}),e.$set(B)},i(a){r||($(s.$$.fragment,a),$(t.$$.fragment,a),$(p.$$.fragment,a),$(e.$$.fragment,a),r=!0)},o(a){_(s.$$.fragment,a),_(t.$$.fragment,a),_(p.$$.fragment,a),_(e.$$.fragment,a),r=!1},d(a){b(s,a),a&&o(l),b(t,a),a&&o(n),b(p,a),a&&o(h),b(e,a)}}}function G(i){let s,l;return s=new D({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,n){g(s,t,n),l=!0},p(t,[n]){const p={};n&1&&(p.$$scope={dirty:n,ctx:t}),s.$set(p)},i(t){l||($(s.$$.fragment,t),l=!0)},o(t){_(s.$$.fragment,t),l=!1},d(t){b(s,t)}}}class I extends C{constructor(s){super(),M(this,s,null,G,F,{})}}const N=`<script>
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
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;no-splitter&quot;</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">dblClickSplitter</span>=<span class="hljs-string">{false}</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>MenuBar<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>ToolBar<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;modern-theme&quot;</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
					Folder<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
					Try those --{&#x27;&gt;&#x27;}
				<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Views<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Details<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>statusbar<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">global</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="language-css">
	<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.modern-theme</span> {
		<span class="hljs-selector-class">.splitpanes__pane</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f8f8f8</span>;
		}
		<span class="hljs-selector-class">.splitpanes__splitter</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ccc</span>;
			<span class="hljs-attribute">position</span>: relative;

			&amp;<span class="hljs-selector-pseudo">:before</span> {
				<span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
				<span class="hljs-attribute">position</span>: absolute;
				<span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
				<span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
				<span class="hljs-attribute">transition</span>: opacity <span class="hljs-number">0.4s</span>;
				<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#2db9d2</span>;
				<span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
				<span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
			}
			&amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span> {
				<span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
			}
			&amp;<span class="hljs-selector-class">.splitpanes__splitter__active</span> {
				<span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>; <span class="hljs-comment">/* Fix an issue of overlap fighting with a near hovered splitter */</span>
			}
		}
	}
	<span class="hljs-selector-class">.modern-theme</span> {
		&amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">left</span>: -<span class="hljs-number">3px</span>;
			<span class="hljs-attribute">right</span>: -<span class="hljs-number">3px</span>;
			<span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
			<span class="hljs-attribute">cursor</span>: col-resize;
		}
		&amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">top</span>: -<span class="hljs-number">3px</span>;
			<span class="hljs-attribute">bottom</span>: -<span class="hljs-number">3px</span>;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
			<span class="hljs-attribute">cursor</span>: row-resize;
		}
	}

	<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.no-splitter</span> {
		<span class="hljs-selector-class">.splitpanes__pane</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f8f8f8</span>;
		}
		<span class="hljs-selector-class">.splitpanes__splitter</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ccc</span>;
			<span class="hljs-attribute">position</span>: relative;
		}
	}
	<span class="hljs-selector-class">.no-splitter</span> {
		&amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">width</span>: <span class="hljs-number">0.125rem</span>;
			<span class="hljs-attribute">pointer-events</span>: none;
			<span class="hljs-attribute">cursor</span>: none;
		}
		&amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">height</span>: <span class="hljs-number">0.125rem</span>;
			<span class="hljs-attribute">pointer-events</span>: none;
			<span class="hljs-attribute">cursor</span>: none;
		}
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,X={code:N,highlightedHTML:W,component:I};function Y(i){let s,l,t,n,p,h,e,r;return e=new V({props:{example:X}}),{c(){s=v("h2"),l=d("Styling Splitters - Modern"),t=k(),n=v("p"),p=d(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),h=k(),u(e.$$.fragment)},l(a){s=S(a,"H2",{});var c=x(s);l=z(c,"Styling Splitters - Modern"),c.forEach(o),t=y(a),n=S(a,"P",{});var P=x(n);p=z(P,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),P.forEach(o),h=y(a),f(e.$$.fragment,a)},m(a,c){m(a,s,c),j(s,l),m(a,t,c),m(a,n,c),j(n,p),m(a,h,c),g(e,a,c),r=!0},p:T,i(a){r||($(e.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),r=!1},d(a){a&&o(s),a&&o(t),a&&o(n),a&&o(h),b(e,a)}}}class as extends C{constructor(s){super(),M(this,s,null,Y,F,{})}}export{as as default};
