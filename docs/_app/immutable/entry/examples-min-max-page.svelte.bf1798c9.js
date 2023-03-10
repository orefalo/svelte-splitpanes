import{S as R,i as B,s as M,O as k,P as E,Q as I,n as w,o as y,R as q,a as P,f as z,j,g as i,e as u,J as f,b as $,d as b,K as g,h as N,k as r,U as C}from"../chunks/external.11f0258c.js";import{E as Y}from"../chunks/ExampleArea.5a69be18.js";import{S as J,P as H}from"../chunks/svelte-splitpanes.1838cab8.js";function K(o){let s,p,t,n,l,h;return{c(){s=u("span"),p=f(`1
			`),t=u("br"),n=P(),l=u("em"),h=f("I have a min height of 20% & max height of 70%"),this.h()},l(a){s=$(a,"SPAN",{});var e=b(s);p=g(e,`1
			`),t=$(e,"BR",{}),n=z(e),l=$(e,"EM",{class:!0});var m=b(l);h=g(m,"I have a min height of 20% & max height of 70%"),m.forEach(i),e.forEach(i),this.h()},h(){N(l,"class","specs")},m(a,e){j(a,s,e),r(s,p),r(s,t),r(s,n),r(s,l),r(l,h)},p:C,d(a){a&&i(s)}}}function L(o){let s,p;return{c(){s=u("span"),p=f("2")},l(t){s=$(t,"SPAN",{});var n=b(s);p=g(n,"2"),n.forEach(i)},m(t,n){j(t,s,n),r(s,p)},p:C,d(t){t&&i(s)}}}function O(o){let s,p,t,n,l,h;return{c(){s=u("span"),p=f(`3
			`),t=u("br"),n=P(),l=u("em"),h=f("I have a max height of 70%"),this.h()},l(a){s=$(a,"SPAN",{});var e=b(s);p=g(e,`3
			`),t=$(e,"BR",{}),n=z(e),l=$(e,"EM",{class:!0});var m=b(l);h=g(m,"I have a max height of 70%"),m.forEach(i),e.forEach(i),this.h()},h(){N(l,"class","specs")},m(a,e){j(a,s,e),r(s,p),r(s,t),r(s,n),r(s,l),r(l,h)},p:C,d(a){a&&i(s)}}}function Q(o){let s,p,t,n,l,h;return s=new H({props:{minSize:20,maxSize:70,$$slots:{default:[K]},$$scope:{ctx:o}}}),t=new H({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),l=new H({props:{maxSize:70,$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){k(s.$$.fragment),p=P(),k(t.$$.fragment),n=P(),k(l.$$.fragment)},l(a){E(s.$$.fragment,a),p=z(a),E(t.$$.fragment,a),n=z(a),E(l.$$.fragment,a)},m(a,e){I(s,a,e),j(a,p,e),I(t,a,e),j(a,n,e),I(l,a,e),h=!0},p(a,e){const m={};e&1&&(m.$$scope={dirty:e,ctx:a}),s.$set(m);const S={};e&1&&(S.$$scope={dirty:e,ctx:a}),t.$set(S);const x={};e&1&&(x.$$scope={dirty:e,ctx:a}),l.$set(x)},i(a){h||(w(s.$$.fragment,a),w(t.$$.fragment,a),w(l.$$.fragment,a),h=!0)},o(a){y(s.$$.fragment,a),y(t.$$.fragment,a),y(l.$$.fragment,a),h=!1},d(a){q(s,a),a&&i(p),q(t,a),a&&i(n),q(l,a)}}}function T(o){let s,p;return s=new J({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){k(s.$$.fragment)},l(t){E(s.$$.fragment,t)},m(t,n){I(s,t,n),p=!0},p(t,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:t}),s.$set(l)},i(t){p||(w(s.$$.fragment,t),p=!0)},o(t){y(s.$$.fragment,t),p=!1},d(t){q(s,t)}}}class U extends R{constructor(s){super(),B(this,s,null,T,M,{})}}const D=`<script>
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
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,G={code:D,highlightedHTML:F,component:U};function V(o){let s,p,t,n,l,h,a,e=!1+"",m,S,x,d,A;return d=new Y({props:{example:G}}),{c(){s=u("h2"),p=f("Horizontal layout, push other panes, min & max use, doubleclick"),t=P(),n=u("p"),l=f("You can double click a splitter to maximize the next pane!"),h=u("br"),a=f(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),m=f(e),S=f("."),x=P(),k(d.$$.fragment)},l(c){s=$(c,"H2",{});var _=b(s);p=g(_,"Horizontal layout, push other panes, min & max use, doubleclick"),_.forEach(i),t=z(c),n=$(c,"P",{});var v=b(n);l=g(v,"You can double click a splitter to maximize the next pane!"),h=$(v,"BR",{}),a=g(v,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),m=g(v,e),S=g(v,"."),v.forEach(i),x=z(c),E(d.$$.fragment,c)},m(c,_){j(c,s,_),r(s,p),j(c,t,_),j(c,n,_),r(n,l),r(n,h),r(n,a),r(n,m),r(n,S),j(c,x,_),I(d,c,_),A=!0},p:C,i(c){A||(w(d.$$.fragment,c),A=!0)},o(c){y(d.$$.fragment,c),A=!1},d(c){c&&i(s),c&&i(t),c&&i(n),c&&i(x),q(d,c)}}}class ss extends R{constructor(s){super(),B(this,s,null,V,M,{})}}export{ss as default};
