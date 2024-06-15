import{S as Y,i as E,s as N,P as m,Q as f,R as b,n as g,o as _,U as d,a as $,f as x,j as o,g as h,e as v,b as z,I as w,h as O,K as H}from"../chunks/external.B2hlO00i.js";import{H as I,E as B}from"../chunks/ExampleArea.HEABVkjj.js";import{S as F,P as q}from"../chunks/svelte-splitpanes.D-hhWatK.js";const K=!0,hs=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));function Q(i){let s,p="1";return{c(){s=v("span"),s.textContent=p},l(t){s=z(t,"SPAN",{"data-svelte-h":!0}),w(s)!=="svelte-4rug0j"&&(s.textContent=p)},m(t,l){o(t,s,l)},p:H,d(t){t&&h(s)}}}function R(i){let s,p="2";return{c(){s=v("span"),s.textContent=p},l(t){s=z(t,"SPAN",{"data-svelte-h":!0}),w(s)!=="svelte-1o38sr4"&&(s.textContent=p)},m(t,l){o(t,s,l)},p:H,d(t){t&&h(s)}}}function U(i){let s,p="3";return{c(){s=v("span"),s.textContent=p},l(t){s=z(t,"SPAN",{"data-svelte-h":!0}),w(s)!=="svelte-100q5wx"&&(s.textContent=p)},m(t,l){o(t,s,l)},p:H,d(t){t&&h(s)}}}function D(i){let s,p,t,l,e,c;return s=new q({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),t=new q({props:{$$slots:{default:[R]},$$scope:{ctx:i}}}),e=new q({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){m(s.$$.fragment),p=$(),m(t.$$.fragment),l=$(),m(e.$$.fragment)},l(n){f(s.$$.fragment,n),p=x(n),f(t.$$.fragment,n),l=x(n),f(e.$$.fragment,n)},m(n,r){b(s,n,r),o(n,p,r),b(t,n,r),o(n,l,r),b(e,n,r),c=!0},p(n,r){const j={};r&1&&(j.$$scope={dirty:r,ctx:n}),s.$set(j);const C={};r&1&&(C.$$scope={dirty:r,ctx:n}),t.$set(C);const S={};r&1&&(S.$$scope={dirty:r,ctx:n}),e.$set(S)},i(n){c||(g(s.$$.fragment,n),g(t.$$.fragment,n),g(e.$$.fragment,n),c=!0)},o(n){_(s.$$.fragment,n),_(t.$$.fragment,n),_(e.$$.fragment,n),c=!1},d(n){n&&(h(p),h(l)),d(s,n),d(t,n),d(e,n)}}}function G(i){let s,p;return s=new F({props:{theme:"my-theme",$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){m(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,l){b(s,t,l),p=!0},p(t,l){const e={};l&1&&(e.$$scope={dirty:l,ctx:t}),s.$set(e)},i(t){p||(g(s.$$.fragment,t),p=!0)},o(t){_(s.$$.fragment,t),p=!1},d(t){d(s,t)}}}function J(i){let s,p="<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>";return{c(){s=v("em"),s.innerHTML=p,this.h()},l(t){s=z(t,"EM",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-3kuw5k"&&(s.innerHTML=p),this.h()},h(){O(s,"class","specs")},m(t,l){o(t,s,l)},p:H,d(t){t&&h(s)}}}function V(i){let s,p,t,l;return s=new q({props:{$$slots:{default:[G]},$$scope:{ctx:i}}}),t=new q({props:{$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){m(s.$$.fragment),p=$(),m(t.$$.fragment)},l(e){f(s.$$.fragment,e),p=x(e),f(t.$$.fragment,e)},m(e,c){b(s,e,c),o(e,p,c),b(t,e,c),l=!0},p(e,c){const n={};c&1&&(n.$$scope={dirty:c,ctx:e}),s.$set(n);const r={};c&1&&(r.$$scope={dirty:c,ctx:e}),t.$set(r)},i(e){l||(g(s.$$.fragment,e),g(t.$$.fragment,e),l=!0)},o(e){_(s.$$.fragment,e),_(t.$$.fragment,e),l=!1},d(e){e&&h(p),d(s,e),d(t,e)}}}function W(i){let s,p;return s=new F({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[V]},$$scope:{ctx:i}}}),{c(){m(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,l){b(s,t,l),p=!0},p(t,[l]){const e={};l&1&&(e.$$scope={dirty:l,ctx:t}),s.$set(e)},i(t){p||(g(s.$$.fragment,t),p=!0)},o(t){_(s.$$.fragment,t),p=!1},d(t){d(s,t)}}}class Z extends Y{constructor(s){super(),E(this,s,null,W,N,{})}}const ss=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
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
`,ts=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;my-theme&quot;</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;my-theme&quot;</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>
		&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">global</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="language-css">
	<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.my-theme</span> {
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
				<span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
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
	<span class="hljs-selector-class">.my-theme</span> {
		&amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">left</span>: -<span class="hljs-number">30px</span>;
			<span class="hljs-attribute">right</span>: -<span class="hljs-number">30px</span>;
			<span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
			<span class="hljs-attribute">cursor</span>: col-resize;
		}
		&amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">top</span>: -<span class="hljs-number">30px</span>;
			<span class="hljs-attribute">bottom</span>: -<span class="hljs-number">30px</span>;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
			<span class="hljs-attribute">cursor</span>: row-resize;
		}
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,as={code:ss,highlightedHTML:ts,component:Z},ns=`.splitpanes.default-theme {
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
`,es=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> {
	<span class="hljs-selector-class">.splitpanes__pane</span> {
		<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f2f2f2</span>;
	}
	<span class="hljs-selector-class">.splitpanes__splitter</span> {
		<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
		<span class="hljs-attribute">box-sizing</span>: border-box;
		<span class="hljs-attribute">position</span>: relative;
		<span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
		&amp;<span class="hljs-selector-pseudo">:before</span>,
		&amp;<span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
			<span class="hljs-attribute">position</span>: absolute;
			<span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
			<span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
			<span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.15</span>);
			<span class="hljs-attribute">transition</span>: background-color <span class="hljs-number">0.3s</span>;
		}
		&amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span>,
		&amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.25</span>);
		}
		&amp;<span class="hljs-selector-pseudo">:first</span>-child {
			<span class="hljs-attribute">cursor</span>: auto;
		}
	}
}
<span class="hljs-selector-class">.default-theme</span> {
	&amp;<span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
		<span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
	}
	&amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
	<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
		<span class="hljs-attribute">width</span>: <span class="hljs-number">7px</span>;
		<span class="hljs-attribute">border-left</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
		<span class="hljs-attribute">cursor</span>: col-resize;
		&amp;<span class="hljs-selector-pseudo">:before</span>,
		&amp;<span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
			<span class="hljs-attribute">width</span>: <span class="hljs-number">1px</span>;
			<span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
		}
		&amp;<span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">2px</span>;
		}
		&amp;<span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">margin-left</span>: <span class="hljs-number">1px</span>;
		}
	}
	&amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
	<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
		<span class="hljs-attribute">height</span>: <span class="hljs-number">7px</span>;
		<span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
		<span class="hljs-attribute">cursor</span>: row-resize;
		&amp;<span class="hljs-selector-pseudo">:before</span>,
		&amp;<span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(-<span class="hljs-number">50%</span>);
			<span class="hljs-attribute">width</span>: <span class="hljs-number">30px</span>;
			<span class="hljs-attribute">height</span>: <span class="hljs-number">1px</span>;
		}
		&amp;<span class="hljs-selector-pseudo">:before</span> {
			<span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">2px</span>;
		}
		&amp;<span class="hljs-selector-pseudo">:after</span> {
			<span class="hljs-attribute">margin-top</span>: <span class="hljs-number">1px</span>;
		}
	}
}
`,ls=`.splitpanes.default-theme .splitpanes__pane {
  background-color: #f2f2f2;
}
.splitpanes.default-theme .splitpanes__splitter {
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
}
.splitpanes.default-theme .splitpanes__splitter:before, .splitpanes.default-theme .splitpanes__splitter:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s;
}
.splitpanes.default-theme .splitpanes__splitter:hover:before, .splitpanes.default-theme .splitpanes__splitter:hover:after {
  background-color: rgba(0, 0, 0, 0.25);
}
.splitpanes.default-theme .splitpanes__splitter:first-child {
  cursor: auto;
}

.default-theme.splitpanes .splitpanes .splitpanes__splitter {
  z-index: 1;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter,
.default-theme .splitpanes--vertical > .splitpanes__splitter {
  width: 7px;
  border-left: 1px solid #eee;
  cursor: col-resize;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:before, .default-theme.splitpanes--vertical > .splitpanes__splitter:after,
.default-theme .splitpanes--vertical > .splitpanes__splitter:before,
.default-theme .splitpanes--vertical > .splitpanes__splitter:after {
  transform: translateY(-50%);
  width: 1px;
  height: 30px;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:before,
.default-theme .splitpanes--vertical > .splitpanes__splitter:before {
  margin-left: -2px;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:after,
.default-theme .splitpanes--vertical > .splitpanes__splitter:after {
  margin-left: 1px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter,
.default-theme .splitpanes--horizontal > .splitpanes__splitter {
  height: 7px;
  border-top: 1px solid #eee;
  cursor: row-resize;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:before, .default-theme.splitpanes--horizontal > .splitpanes__splitter:after,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:before,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:after {
  transform: translateX(-50%);
  width: 30px;
  height: 1px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:before,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:before {
  margin-top: -2px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:after,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:after {
  margin-top: 1px;
}`,ps=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__pane</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f2f2f2</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">box-sizing</span>: border-box;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;&quot;</span>;
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.15</span>);
  <span class="hljs-attribute">transition</span>: background-color <span class="hljs-number">0.3s</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.25</span>);
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:first</span>-child {
  <span class="hljs-attribute">cursor</span>: auto;
}

<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">7px</span>;
  <span class="hljs-attribute">border-left</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
  <span class="hljs-attribute">cursor</span>: col-resize;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
  <span class="hljs-attribute">width</span>: <span class="hljs-number">1px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
  <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">2px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">1px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">7px</span>;
  <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
  <span class="hljs-attribute">cursor</span>: row-resize;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(-<span class="hljs-number">50%</span>);
  <span class="hljs-attribute">width</span>: <span class="hljs-number">30px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">1px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
  <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">2px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">1px</span>;
}`,X={code:ns,highlightedHTML:es,css:ls,cssHighlightedHTML:ps};function rs(i){let s,p="Styling Splitters",t,l,e="Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component.<br/>\n	The default style is called `default-theme`, its SCSS definition can be found below (<b>warning</b>: This is for\n	reference only! If you decide to copy this CSS code, you must rename the &quot;.default-theme&quot; specifier to something else,\n	so it wouldn&#39;t conflict the library theme CSS definition):",c,n,r,j,C="Alternatively, here is the default theme compiled to CSS:",S,k,T,y,A='By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`',M,P,L;return n=new I({props:{lang:"scss",highlighted:X.highlightedHTML}}),k=new I({props:{lang:"scss",highlighted:X.cssHighlightedHTML}}),P=new B({props:{example:as}}),{c(){s=v("h2"),s.textContent=p,t=$(),l=v("p"),l.innerHTML=e,c=$(),m(n.$$.fragment),r=$(),j=v("p"),j.textContent=C,S=$(),m(k.$$.fragment),T=$(),y=v("p"),y.textContent=A,M=$(),m(P.$$.fragment)},l(a){s=z(a,"H2",{"data-svelte-h":!0}),w(s)!=="svelte-1miri38"&&(s.textContent=p),t=x(a),l=z(a,"P",{"data-svelte-h":!0}),w(l)!=="svelte-1af2sqc"&&(l.innerHTML=e),c=x(a),f(n.$$.fragment,a),r=x(a),j=z(a,"P",{"data-svelte-h":!0}),w(j)!=="svelte-1geu27k"&&(j.textContent=C),S=x(a),f(k.$$.fragment,a),T=x(a),y=z(a,"P",{"data-svelte-h":!0}),w(y)!=="svelte-7m77bz"&&(y.textContent=A),M=x(a),f(P.$$.fragment,a)},m(a,u){o(a,s,u),o(a,t,u),o(a,l,u),o(a,c,u),b(n,a,u),o(a,r,u),o(a,j,u),o(a,S,u),b(k,a,u),o(a,T,u),o(a,y,u),o(a,M,u),b(P,a,u),L=!0},p:H,i(a){L||(g(n.$$.fragment,a),g(k.$$.fragment,a),g(P.$$.fragment,a),L=!0)},o(a){_(n.$$.fragment,a),_(k.$$.fragment,a),_(P.$$.fragment,a),L=!1},d(a){a&&(h(s),h(t),h(l),h(c),h(r),h(j),h(S),h(T),h(y),h(M)),d(n,a),d(k,a),d(P,a)}}}class us extends Y{constructor(s){super(),E(this,s,null,rs,N,{})}}export{us as component,hs as universal};
