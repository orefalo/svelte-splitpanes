import{S as G,i as V,s as W,O as _,P as $,Q as x,n as v,o as z,R as S,a as y,f as w,j as h,g as r,e as b,J as m,b as d,d as g,K as f,h as ss,k as j,U as L}from"../chunks/external.27885121.js";import{H as U,E as ts}from"../chunks/ExampleArea.a44de483.js";import{S as Z,P as I}from"../chunks/svelte-splitpanes.b61ac8f4.js";function as(o){let s,l;return{c(){s=b("span"),l=m("1")},l(t){s=d(t,"SPAN",{});var a=g(s);l=f(a,"1"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:L,d(t){t&&r(s)}}}function ns(o){let s,l;return{c(){s=b("span"),l=m("2")},l(t){s=d(t,"SPAN",{});var a=g(s);l=f(a,"2"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:L,d(t){t&&r(s)}}}function es(o){let s,l;return{c(){s=b("span"),l=m("3")},l(t){s=d(t,"SPAN",{});var a=g(s);l=f(a,"3"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:L,d(t){t&&r(s)}}}function ls(o){let s,l,t,a,e,i;return s=new I({props:{$$slots:{default:[as]},$$scope:{ctx:o}}}),t=new I({props:{$$slots:{default:[ns]},$$scope:{ctx:o}}}),e=new I({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment),l=y(),_(t.$$.fragment),a=y(),_(e.$$.fragment)},l(p){$(s.$$.fragment,p),l=w(p),$(t.$$.fragment,p),a=w(p),$(e.$$.fragment,p)},m(p,c){x(s,p,c),h(p,l,c),x(t,p,c),h(p,a,c),x(e,p,c),i=!0},p(p,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:p}),s.$set(E);const H={};c&1&&(H.$$scope={dirty:c,ctx:p}),t.$set(H);const P={};c&1&&(P.$$scope={dirty:c,ctx:p}),e.$set(P)},i(p){i||(v(s.$$.fragment,p),v(t.$$.fragment,p),v(e.$$.fragment,p),i=!0)},o(p){z(s.$$.fragment,p),z(t.$$.fragment,p),z(e.$$.fragment,p),i=!1},d(p){S(s,p),p&&r(l),S(t,p),p&&r(a),S(e,p)}}}function ps(o){let s,l;return s=new Z({props:{theme:"my-theme",$$slots:{default:[ls]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){x(s,t,a),l=!0},p(t,a){const e={};a&1&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(v(s.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}function rs(o){let s,l,t;return{c(){s=b("em"),l=b("p"),t=m("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(a){s=d(a,"EM",{class:!0});var e=g(s);l=d(e,"P",{});var i=g(l);t=f(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(r),e.forEach(r),this.h()},h(){ss(s,"class","specs")},m(a,e){h(a,s,e),j(s,l),j(l,t)},p:L,d(a){a&&r(s)}}}function cs(o){let s,l,t,a;return s=new I({props:{$$slots:{default:[ps]},$$scope:{ctx:o}}}),t=new I({props:{$$slots:{default:[rs]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment),l=y(),_(t.$$.fragment)},l(e){$(s.$$.fragment,e),l=w(e),$(t.$$.fragment,e)},m(e,i){x(s,e,i),h(e,l,i),x(t,e,i),a=!0},p(e,i){const p={};i&1&&(p.$$scope={dirty:i,ctx:e}),s.$set(p);const c={};i&1&&(c.$$scope={dirty:i,ctx:e}),t.$set(c)},i(e){a||(v(s.$$.fragment,e),v(t.$$.fragment,e),a=!0)},o(e){z(s.$$.fragment,e),z(t.$$.fragment,e),a=!1},d(e){S(s,e),e&&r(l),S(t,e)}}}function is(o){let s,l;return s=new Z({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[cs]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){x(s,t,a),l=!0},p(t,[a]){const e={};a&1&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(v(s.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}class os extends G{constructor(s){super(),V(this,s,null,is,W,{})}}const hs=`<script>
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
`,us=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,js={code:hs,highlightedHTML:us,component:os},ms=`.splitpanes.default-theme {
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
`,fs=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> {
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
`,bs=`.splitpanes.default-theme .splitpanes__pane {
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
}`,ds=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__pane</span> {
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
}`,D={code:ms,highlightedHTML:fs,css:bs,cssHighlightedHTML:ds};function gs(o){let s,l,t,a,e,i,p,c,E,H,P,k,B,T,R,X,C,Y,M,J,N,q,F;return k=new U({props:{lang:"scss",highlighted:D.highlightedHTML}}),C=new U({props:{lang:"scss",highlighted:D.cssHighlightedHTML}}),q=new ts({props:{example:js}}),{c(){s=b("h2"),l=m("Styling Splitters"),t=y(),a=b("p"),e=m("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=b("br"),p=m("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),c=b("b"),E=m("warning"),H=m(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),P=y(),_(k.$$.fragment),B=y(),T=b("p"),R=m("Alternatively, here is the default theme compiled to CSS:"),X=y(),_(C.$$.fragment),Y=y(),M=b("p"),J=m('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),N=y(),_(q.$$.fragment)},l(n){s=d(n,"H2",{});var u=g(s);l=f(u,"Styling Splitters"),u.forEach(r),t=w(n),a=d(n,"P",{});var A=g(a);e=f(A,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=d(A,"BR",{}),p=f(A,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),c=d(A,"B",{});var K=g(c);E=f(K,"warning"),K.forEach(r),H=f(A,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),A.forEach(r),P=w(n),$(k.$$.fragment,n),B=w(n),T=d(n,"P",{});var O=g(T);R=f(O,"Alternatively, here is the default theme compiled to CSS:"),O.forEach(r),X=w(n),$(C.$$.fragment,n),Y=w(n),M=d(n,"P",{});var Q=g(M);J=f(Q,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),Q.forEach(r),N=w(n),$(q.$$.fragment,n)},m(n,u){h(n,s,u),j(s,l),h(n,t,u),h(n,a,u),j(a,e),j(a,i),j(a,p),j(a,c),j(c,E),j(a,H),h(n,P,u),x(k,n,u),h(n,B,u),h(n,T,u),j(T,R),h(n,X,u),x(C,n,u),h(n,Y,u),h(n,M,u),j(M,J),h(n,N,u),x(q,n,u),F=!0},p:L,i(n){F||(v(k.$$.fragment,n),v(C.$$.fragment,n),v(q.$$.fragment,n),F=!0)},o(n){z(k.$$.fragment,n),z(C.$$.fragment,n),z(q.$$.fragment,n),F=!1},d(n){n&&r(s),n&&r(t),n&&r(a),n&&r(P),S(k,n),n&&r(B),n&&r(T),n&&r(X),S(C,n),n&&r(Y),n&&r(M),n&&r(N),S(q,n)}}}class vs extends G{constructor(s){super(),V(this,s,null,gs,W,{})}}export{vs as default};
