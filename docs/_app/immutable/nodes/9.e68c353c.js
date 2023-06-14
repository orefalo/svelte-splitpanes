import{S as M,i as B,s as N,O as k,P as y,Q as E,n as I,o as w,T as q,a as P,f as z,j,g as o,e as u,I as f,b as $,d as b,J as g,h as O,k as r,L as C}from"../chunks/external.c3018815.js";import{E as R}from"../chunks/ExampleArea.6fa185e2.js";import{S as T,P as H}from"../chunks/svelte-splitpanes.ade26b14.js";const L=!0,as=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function Y(m){let s,p,t,n,l,i;return{c(){s=u("span"),p=f(`1
			`),t=u("br"),n=P(),l=u("em"),i=f("I have a min height of 20% & max height of 70%"),this.h()},l(a){s=$(a,"SPAN",{});var e=b(s);p=g(e,`1
			`),t=$(e,"BR",{}),n=z(e),l=$(e,"EM",{class:!0});var h=b(l);i=g(h,"I have a min height of 20% & max height of 70%"),h.forEach(o),e.forEach(o),this.h()},h(){O(l,"class","specs")},m(a,e){j(a,s,e),r(s,p),r(s,t),r(s,n),r(s,l),r(l,i)},p:C,d(a){a&&o(s)}}}function J(m){let s,p;return{c(){s=u("span"),p=f("2")},l(t){s=$(t,"SPAN",{});var n=b(s);p=g(n,"2"),n.forEach(o)},m(t,n){j(t,s,n),r(s,p)},p:C,d(t){t&&o(s)}}}function Q(m){let s,p,t,n,l,i;return{c(){s=u("span"),p=f(`3
			`),t=u("br"),n=P(),l=u("em"),i=f("I have a max height of 70%"),this.h()},l(a){s=$(a,"SPAN",{});var e=b(s);p=g(e,`3
			`),t=$(e,"BR",{}),n=z(e),l=$(e,"EM",{class:!0});var h=b(l);i=g(h,"I have a max height of 70%"),h.forEach(o),e.forEach(o),this.h()},h(){O(l,"class","specs")},m(a,e){j(a,s,e),r(s,p),r(s,t),r(s,n),r(s,l),r(l,i)},p:C,d(a){a&&o(s)}}}function D(m){let s,p,t,n,l,i;return s=new H({props:{minSize:20,maxSize:70,$$slots:{default:[Y]},$$scope:{ctx:m}}}),t=new H({props:{$$slots:{default:[J]},$$scope:{ctx:m}}}),l=new H({props:{maxSize:70,$$slots:{default:[Q]},$$scope:{ctx:m}}}),{c(){k(s.$$.fragment),p=P(),k(t.$$.fragment),n=P(),k(l.$$.fragment)},l(a){y(s.$$.fragment,a),p=z(a),y(t.$$.fragment,a),n=z(a),y(l.$$.fragment,a)},m(a,e){E(s,a,e),j(a,p,e),E(t,a,e),j(a,n,e),E(l,a,e),i=!0},p(a,e){const h={};e&1&&(h.$$scope={dirty:e,ctx:a}),s.$set(h);const S={};e&1&&(S.$$scope={dirty:e,ctx:a}),t.$set(S);const x={};e&1&&(x.$$scope={dirty:e,ctx:a}),l.$set(x)},i(a){i||(I(s.$$.fragment,a),I(t.$$.fragment,a),I(l.$$.fragment,a),i=!0)},o(a){w(s.$$.fragment,a),w(t.$$.fragment,a),w(l.$$.fragment,a),i=!1},d(a){q(s,a),a&&o(p),q(t,a),a&&o(n),q(l,a)}}}function F(m){let s,p;return s=new T({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[D]},$$scope:{ctx:m}}}),{c(){k(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,n){E(s,t,n),p=!0},p(t,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),s.$set(l)},i(t){p||(I(s.$$.fragment,t),p=!0)},o(t){w(s.$$.fragment,t),p=!1},d(t){q(s,t)}}}class G extends M{constructor(s){super(),B(this,s,null,F,N,{})}}const K=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal={true} style="height: 400px">
	<Pane minSize={20} maxSize={70}>
		<span
			>1
			<br />
			<em class="specs">I have a min height of 20% &amp; max height of 70%</em>
		</span>
	</Pane>
	<Pane>
		<span>2</span>
	</Pane>
	<Pane maxSize={70}>
		<span
			>3
			<br />
			<em class="specs">I have a max height of 70%</em>
		</span>
	</Pane>
</Splitpanes>
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>
			&gt;</span>1
			<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a min height of 20% <span class="hljs-symbol">&amp;amp;</span> max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{70}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>
			&gt;</span>3
			<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>I have a max height of 70%<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,V={code:K,highlightedHTML:U,component:G};function W(m){let s,p,t,n,l,i,a,e=!1+"",h,S,x,d,A;return d=new R({props:{example:V}}),{c(){s=u("h2"),p=f("Horizontal layout, push other panes, min & max use, doubleclick"),t=P(),n=u("p"),l=f("You can double click a splitter to maximize the next pane!"),i=u("br"),a=f(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),h=f(e),S=f("."),x=P(),k(d.$$.fragment)},l(c){s=$(c,"H2",{});var _=b(s);p=g(_,"Horizontal layout, push other panes, min & max use, doubleclick"),_.forEach(o),t=z(c),n=$(c,"P",{});var v=b(n);l=g(v,"You can double click a splitter to maximize the next pane!"),i=$(v,"BR",{}),a=g(v,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),h=g(v,e),S=g(v,"."),v.forEach(o),x=z(c),y(d.$$.fragment,c)},m(c,_){j(c,s,_),r(s,p),j(c,t,_),j(c,n,_),r(n,l),r(n,i),r(n,a),r(n,h),r(n,S),j(c,x,_),E(d,c,_),A=!0},p:C,i(c){A||(I(d.$$.fragment,c),A=!0)},o(c){w(d.$$.fragment,c),A=!1},d(c){c&&o(s),c&&o(t),c&&o(n),c&&o(x),q(d,c)}}}class ts extends M{constructor(s){super(),B(this,s,null,W,N,{})}}export{ts as component,as as universal};
