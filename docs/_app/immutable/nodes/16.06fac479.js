import{S as E,i as M,s as Y,O as g,P as $,Q as _,n as b,o as d,T as S,a as P,f as w,j as u,g as i,e as z,I as j,b as v,d as k,J as f,k as m,L as T}from"../chunks/external.c3018815.js";import{E as D}from"../chunks/ExampleArea.6fa185e2.js";import{S as F,P as y}from"../chunks/svelte-splitpanes.ade26b14.js";const O=!0,ns=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function H(h){let s,l;return{c(){s=z("p"),l=j("MenuBar - This is a splitpane, note how the splitters made static using CSS")},l(t){s=v(t,"P",{});var e=k(s);l=f(e,"MenuBar - This is a splitpane, note how the splitters made static using CSS"),e.forEach(i)},m(t,e){u(t,s,e),m(s,l)},p:T,d(t){t&&i(s)}}}function L(h){let s,l;return{c(){s=z("p"),l=j("ToolBar - This is another fixed size, locked splitpane")},l(t){s=v(t,"P",{});var e=k(s);l=f(e,"ToolBar - This is another fixed size, locked splitpane"),e.forEach(i)},m(t,e){u(t,s,e),m(s,l)},p:T,d(t){t&&i(s)}}}function R(h){let s,l,t,e,r=">",o;return{c(){s=z("p"),l=j("Folder"),t=z("br"),e=j(`
					You can move those --`),o=j(r)},l(n){s=v(n,"P",{});var p=k(s);l=f(p,"Folder"),t=v(p,"BR",{}),e=f(p,`
					You can move those --`),o=f(p,r),p.forEach(i)},m(n,p){u(n,s,p),m(s,l),m(s,t),m(s,e),m(s,o)},p:T,d(n){n&&i(s)}}}function A(h){let s,l;return{c(){s=z("p"),l=j("Sample content")},l(t){s=v(t,"P",{});var e=k(s);l=f(e,"Sample content"),e.forEach(i)},m(t,e){u(t,s,e),m(s,l)},p:T,d(t){t&&i(s)}}}function I(h){let s,l,t,e,r="<",o,n;return{c(){s=z("p"),l=j("Details"),t=z("br"),e=P(),o=j(r),n=j("-- You can move those")},l(p){s=v(p,"P",{});var a=k(s);l=f(a,"Details"),t=v(a,"BR",{}),e=w(a),o=f(a,r),n=f(a,"-- You can move those"),a.forEach(i)},m(p,a){u(p,s,a),m(s,l),m(s,t),m(s,e),m(s,o),m(s,n)},p:T,d(p){p&&i(s)}}}function J(h){let s,l,t,e,r,o;return s=new y({props:{$$slots:{default:[R]},$$scope:{ctx:h}}}),t=new y({props:{$$slots:{default:[A]},$$scope:{ctx:h}}}),r=new y({props:{$$slots:{default:[I]},$$scope:{ctx:h}}}),{c(){g(s.$$.fragment),l=P(),g(t.$$.fragment),e=P(),g(r.$$.fragment)},l(n){$(s.$$.fragment,n),l=w(n),$(t.$$.fragment,n),e=w(n),$(r.$$.fragment,n)},m(n,p){_(s,n,p),u(n,l,p),_(t,n,p),u(n,e,p),_(r,n,p),o=!0},p(n,p){const a={};p&1&&(a.$$scope={dirty:p,ctx:n}),s.$set(a);const c={};p&1&&(c.$$scope={dirty:p,ctx:n}),t.$set(c);const x={};p&1&&(x.$$scope={dirty:p,ctx:n}),r.$set(x)},i(n){o||(b(s.$$.fragment,n),b(t.$$.fragment,n),b(r.$$.fragment,n),o=!0)},o(n){d(s.$$.fragment,n),d(t.$$.fragment,n),d(r.$$.fragment,n),o=!1},d(n){S(s,n),n&&i(l),S(t,n),n&&i(e),S(r,n)}}}function Q(h){let s,l;return s=new F({props:{theme:"modern-theme",$$slots:{default:[J]},$$scope:{ctx:h}}}),{c(){g(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,e){_(s,t,e),l=!0},p(t,e){const r={};e&1&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){l||(b(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}function G(h){let s,l;return{c(){s=z("p"),l=j("statusbar - and yet, another splitpane, same technique")},l(t){s=v(t,"P",{});var e=k(s);l=f(e,"statusbar - and yet, another splitpane, same technique"),e.forEach(i)},m(t,e){u(t,s,e),m(s,l)},p:T,d(t){t&&i(s)}}}function K(h){let s,l,t,e,r,o,n,p;return s=new y({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[H]},$$scope:{ctx:h}}}),t=new y({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[L]},$$scope:{ctx:h}}}),r=new y({props:{$$slots:{default:[Q]},$$scope:{ctx:h}}}),n=new y({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[G]},$$scope:{ctx:h}}}),{c(){g(s.$$.fragment),l=P(),g(t.$$.fragment),e=P(),g(r.$$.fragment),o=P(),g(n.$$.fragment)},l(a){$(s.$$.fragment,a),l=w(a),$(t.$$.fragment,a),e=w(a),$(r.$$.fragment,a),o=w(a),$(n.$$.fragment,a)},m(a,c){_(s,a,c),u(a,l,c),_(t,a,c),u(a,e,c),_(r,a,c),u(a,o,c),_(n,a,c),p=!0},p(a,c){const x={};c&1&&(x.$$scope={dirty:c,ctx:a}),s.$set(x);const q={};c&1&&(q.$$scope={dirty:c,ctx:a}),t.$set(q);const C={};c&1&&(C.$$scope={dirty:c,ctx:a}),r.$set(C);const B={};c&1&&(B.$$scope={dirty:c,ctx:a}),n.$set(B)},i(a){p||(b(s.$$.fragment,a),b(t.$$.fragment,a),b(r.$$.fragment,a),b(n.$$.fragment,a),p=!0)},o(a){d(s.$$.fragment,a),d(t.$$.fragment,a),d(r.$$.fragment,a),d(n.$$.fragment,a),p=!1},d(a){S(s,a),a&&i(l),S(t,a),a&&i(e),S(r,a),a&&i(o),S(n,a)}}}function N(h){let s,l;return s=new F({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[K]},$$scope:{ctx:h}}}),{c(){g(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,e){_(s,t,e),l=!0},p(t,[e]){const r={};e&1&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){l||(b(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}class U extends E{constructor(s){super(),M(this,s,null,N,Y,{})}}const V=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>MenuBar - This is a splitpane, note how the splitters made static using CSS</p>
	</Pane>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>ToolBar - This is another fixed size, locked splitpane</p>
	</Pane>
	<Pane>
		<Splitpanes theme="modern-theme">
			<Pane>
				<p>
					Folder<br />
					You can move those --{'>'}
				</p>
			</Pane>
			<Pane>
				<p>Sample content</p>
			</Pane>
			<Pane>
				<p>
					Details<br />
					{'<'}-- You can move those
				</p>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane size={6} minSize={6} maxSize={6}>
		<p>statusbar - and yet, another splitpane, same technique</p>
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
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>MenuBar - This is a splitpane, note how the splitters made static using CSS<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>ToolBar - This is another fixed size, locked splitpane<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;modern-theme&quot;</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
					Folder<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
					You can move those --{&#x27;&gt;&#x27;}
				<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Sample content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
					Details<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
					{&#x27;&lt;&#x27;}-- You can move those
				<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>statusbar - and yet, another splitpane, same technique<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
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
`,X={code:V,highlightedHTML:W,component:U};function Z(h){let s,l,t,e,r,o,n,p;return n=new D({props:{example:X}}),{c(){s=z("h2"),l=j("Styling Splitters - Modern"),t=P(),e=z("p"),r=j(`This examples uses CSS styles to pixel size panes and lock them in place. applied to panes in order to achieve the
	desired layout.`),o=P(),g(n.$$.fragment)},l(a){s=v(a,"H2",{});var c=k(s);l=f(c,"Styling Splitters - Modern"),c.forEach(i),t=w(a),e=v(a,"P",{});var x=k(e);r=f(x,`This examples uses CSS styles to pixel size panes and lock them in place. applied to panes in order to achieve the
	desired layout.`),x.forEach(i),o=w(a),$(n.$$.fragment,a)},m(a,c){u(a,s,c),m(s,l),u(a,t,c),u(a,e,c),m(e,r),u(a,o,c),_(n,a,c),p=!0},p:T,i(a){p||(b(n.$$.fragment,a),p=!0)},o(a){d(n.$$.fragment,a),p=!1},d(a){a&&i(s),a&&i(t),a&&i(e),a&&i(o),S(n,a)}}}class es extends E{constructor(s){super(),M(this,s,null,Z,Y,{})}}export{es as component,ns as universal};
