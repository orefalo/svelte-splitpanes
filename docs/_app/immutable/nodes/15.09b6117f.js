import{S as U,i as V,s as W,O as g,P as $,Q as x,n as v,o as z,T as S,a as y,f as w,j as h,g as r,e as b,I as m,b as _,d,J as f,h as ss,k as j,L as A}from"../chunks/external.a92f57e2.js";import{H as G,E as ts}from"../chunks/ExampleArea.c0fd3cca.js";import{S as Z,P as L}from"../chunks/svelte-splitpanes.d91c4d32.js";const as=!0,zs=Object.freeze(Object.defineProperty({__proto__:null,prerender:as},Symbol.toStringTag,{value:"Module"}));function ns(o){let s,l;return{c(){s=b("span"),l=m("1")},l(t){s=_(t,"SPAN",{});var a=d(s);l=f(a,"1"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:A,d(t){t&&r(s)}}}function es(o){let s,l;return{c(){s=b("span"),l=m("2")},l(t){s=_(t,"SPAN",{});var a=d(s);l=f(a,"2"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:A,d(t){t&&r(s)}}}function ls(o){let s,l;return{c(){s=b("span"),l=m("3")},l(t){s=_(t,"SPAN",{});var a=d(s);l=f(a,"3"),a.forEach(r)},m(t,a){h(t,s,a),j(s,l)},p:A,d(t){t&&r(s)}}}function ps(o){let s,l,t,a,e,i;return s=new L({props:{$$slots:{default:[ns]},$$scope:{ctx:o}}}),t=new L({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),e=new L({props:{$$slots:{default:[ls]},$$scope:{ctx:o}}}),{c(){g(s.$$.fragment),l=y(),g(t.$$.fragment),a=y(),g(e.$$.fragment)},l(p){$(s.$$.fragment,p),l=w(p),$(t.$$.fragment,p),a=w(p),$(e.$$.fragment,p)},m(p,c){x(s,p,c),h(p,l,c),x(t,p,c),h(p,a,c),x(e,p,c),i=!0},p(p,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:p}),s.$set(E);const T={};c&1&&(T.$$scope={dirty:c,ctx:p}),t.$set(T);const P={};c&1&&(P.$$scope={dirty:c,ctx:p}),e.$set(P)},i(p){i||(v(s.$$.fragment,p),v(t.$$.fragment,p),v(e.$$.fragment,p),i=!0)},o(p){z(s.$$.fragment,p),z(t.$$.fragment,p),z(e.$$.fragment,p),i=!1},d(p){S(s,p),p&&r(l),S(t,p),p&&r(a),S(e,p)}}}function rs(o){let s,l;return s=new Z({props:{theme:"my-theme",$$slots:{default:[ps]},$$scope:{ctx:o}}}),{c(){g(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){x(s,t,a),l=!0},p(t,a){const e={};a&1&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(v(s.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}function cs(o){let s,l,t;return{c(){s=b("em"),l=b("p"),t=m("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(a){s=_(a,"EM",{class:!0});var e=d(s);l=_(e,"P",{});var i=d(l);t=f(i,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),i.forEach(r),e.forEach(r),this.h()},h(){ss(s,"class","specs")},m(a,e){h(a,s,e),j(s,l),j(l,t)},p:A,d(a){a&&r(s)}}}function is(o){let s,l,t,a;return s=new L({props:{$$slots:{default:[rs]},$$scope:{ctx:o}}}),t=new L({props:{$$slots:{default:[cs]},$$scope:{ctx:o}}}),{c(){g(s.$$.fragment),l=y(),g(t.$$.fragment)},l(e){$(s.$$.fragment,e),l=w(e),$(t.$$.fragment,e)},m(e,i){x(s,e,i),h(e,l,i),x(t,e,i),a=!0},p(e,i){const p={};i&1&&(p.$$scope={dirty:i,ctx:e}),s.$set(p);const c={};i&1&&(c.$$scope={dirty:i,ctx:e}),t.$set(c)},i(e){a||(v(s.$$.fragment,e),v(t.$$.fragment,e),a=!0)},o(e){z(s.$$.fragment,e),z(t.$$.fragment,e),a=!1},d(e){S(s,e),e&&r(l),S(t,e)}}}function os(o){let s,l;return s=new Z({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[is]},$$scope:{ctx:o}}}),{c(){g(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){x(s,t,a),l=!0},p(t,[a]){const e={};a&1&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(v(s.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),l=!1},d(t){S(s,t)}}}class hs extends U{constructor(s){super(),V(this,s,null,os,W,{})}}const us=`<script>
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
`,js=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,ms={code:us,highlightedHTML:js,component:hs},fs=`.splitpanes.default-theme {
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
`,bs=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> {
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
`,_s=`.splitpanes.default-theme .splitpanes__pane {
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
}`,K={code:fs,highlightedHTML:bs,css:_s,cssHighlightedHTML:ds};function gs(o){let s,l,t,a,e,i,p,c,E,T,P,k,B,H,F,X,C,Y,M,J,N,q,O;return k=new G({props:{lang:"scss",highlighted:K.highlightedHTML}}),C=new G({props:{lang:"scss",highlighted:K.cssHighlightedHTML}}),q=new ts({props:{example:ms}}),{c(){s=b("h2"),l=m("Styling Splitters"),t=y(),a=b("p"),e=m("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=b("br"),p=m("\n	The default style is called `default-theme`, its SCSS definition can be found below ("),c=b("b"),E=m("warning"),T=m(`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),P=y(),g(k.$$.fragment),B=y(),H=b("p"),F=m("Alternatively, here is the default theme compiled to CSS:"),X=y(),g(C.$$.fragment),Y=y(),M=b("p"),J=m('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),N=y(),g(q.$$.fragment)},l(n){s=_(n,"H2",{});var u=d(s);l=f(u,"Styling Splitters"),u.forEach(r),t=w(n),a=_(n,"P",{});var I=d(a);e=f(I,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the Splitpanes component."),i=_(I,"BR",{}),p=f(I,"\n	The default style is called `default-theme`, its SCSS definition can be found below ("),c=_(I,"B",{});var Q=d(c);E=f(Q,"warning"),Q.forEach(r),T=f(I,`: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):`),I.forEach(r),P=w(n),$(k.$$.fragment,n),B=w(n),H=_(n,"P",{});var R=d(H);F=f(R,"Alternatively, here is the default theme compiled to CSS:"),R.forEach(r),X=w(n),$(C.$$.fragment,n),Y=w(n),M=_(n,"P",{});var D=d(M);J=f(D,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),D.forEach(r),N=w(n),$(q.$$.fragment,n)},m(n,u){h(n,s,u),j(s,l),h(n,t,u),h(n,a,u),j(a,e),j(a,i),j(a,p),j(a,c),j(c,E),j(a,T),h(n,P,u),x(k,n,u),h(n,B,u),h(n,H,u),j(H,F),h(n,X,u),x(C,n,u),h(n,Y,u),h(n,M,u),j(M,J),h(n,N,u),x(q,n,u),O=!0},p:A,i(n){O||(v(k.$$.fragment,n),v(C.$$.fragment,n),v(q.$$.fragment,n),O=!0)},o(n){z(k.$$.fragment,n),z(C.$$.fragment,n),z(q.$$.fragment,n),O=!1},d(n){n&&r(s),n&&r(t),n&&r(a),n&&r(P),S(k,n),n&&r(B),n&&r(H),n&&r(X),S(C,n),n&&r(Y),n&&r(M),n&&r(N),S(q,n)}}}class Ss extends U{constructor(s){super(),V(this,s,null,gs,W,{})}}export{Ss as component,zs as universal};
