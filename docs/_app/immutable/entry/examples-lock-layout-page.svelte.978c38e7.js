import{S as b,i as q,s as z,O as o,P as m,Q as g,n as h,o as i,R as u,a as N,f as O,j as f,g as $,e as _,J as P,b as S,d,K as v,k as w,U as x}from"../chunks/external.2f6a823f.js";import{E as C}from"../chunks/ExampleArea.93fd3141.js";import{S as L,P as j}from"../chunks/svelte-splitpanes.af134a98.js";function H(r){let s,e;return{c(){s=_("span"),e=P("1")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"1"),t.forEach($)},m(a,t){f(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function J(r){let s,e;return{c(){s=_("span"),e=P("2")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"2"),t.forEach($)},m(a,t){f(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function K(r){let s,e;return{c(){s=_("span"),e=P("3")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"3"),t.forEach($)},m(a,t){f(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function M(r){let s,e;return{c(){s=_("span"),e=P("4")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"4"),t.forEach($)},m(a,t){f(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function Q(r){let s,e,a,t,p,l;return s=new j({props:{$$slots:{default:[J]},$$scope:{ctx:r}}}),a=new j({props:{$$slots:{default:[K]},$$scope:{ctx:r}}}),p=new j({props:{$$slots:{default:[M]},$$scope:{ctx:r}}}),{c(){o(s.$$.fragment),e=N(),o(a.$$.fragment),t=N(),o(p.$$.fragment)},l(n){m(s.$$.fragment,n),e=O(n),m(a.$$.fragment,n),t=O(n),m(p.$$.fragment,n)},m(n,c){g(s,n,c),f(n,e,c),g(a,n,c),f(n,t,c),g(p,n,c),l=!0},p(n,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:n}),s.$set(E);const A={};c&1&&(A.$$scope={dirty:c,ctx:n}),a.$set(A);const k={};c&1&&(k.$$scope={dirty:c,ctx:n}),p.$set(k)},i(n){l||(h(s.$$.fragment,n),h(a.$$.fragment,n),h(p.$$.fragment,n),l=!0)},o(n){i(s.$$.fragment,n),i(a.$$.fragment,n),i(p.$$.fragment,n),l=!1},d(n){u(s,n),n&&$(e),u(a,n),n&&$(t),u(p,n)}}}function R(r){let s,e;return s=new L({props:{$$slots:{default:[Q]},$$scope:{ctx:r}}}),{c(){o(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,t){g(s,a,t),e=!0},p(a,t){const p={};t&1&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(h(s.$$.fragment,a),e=!0)},o(a){i(s.$$.fragment,a),e=!1},d(a){u(s,a)}}}function T(r){let s,e;return{c(){s=_("span"),e=P("5")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"5"),t.forEach($)},m(a,t){f(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function U(r){let s,e,a,t,p,l;return s=new j({props:{$$slots:{default:[H]},$$scope:{ctx:r}}}),a=new j({props:{$$slots:{default:[R]},$$scope:{ctx:r}}}),p=new j({props:{$$slots:{default:[T]},$$scope:{ctx:r}}}),{c(){o(s.$$.fragment),e=N(),o(a.$$.fragment),t=N(),o(p.$$.fragment)},l(n){m(s.$$.fragment,n),e=O(n),m(a.$$.fragment,n),t=O(n),m(p.$$.fragment,n)},m(n,c){g(s,n,c),f(n,e,c),g(a,n,c),f(n,t,c),g(p,n,c),l=!0},p(n,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:n}),s.$set(E);const A={};c&1&&(A.$$scope={dirty:c,ctx:n}),a.$set(A);const k={};c&1&&(k.$$scope={dirty:c,ctx:n}),p.$set(k)},i(n){l||(h(s.$$.fragment,n),h(a.$$.fragment,n),h(p.$$.fragment,n),l=!0)},o(n){i(s.$$.fragment,n),i(a.$$.fragment,n),i(p.$$.fragment,n),l=!1},d(n){u(s,n),n&&$(e),u(a,n),n&&$(t),u(p,n)}}}function y(r){let s,e;return s=new L({props:{horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[U]},$$scope:{ctx:r}}}),{c(){o(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,t){g(s,a,t),e=!0},p(a,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(h(s.$$.fragment,a),e=!0)},o(a){i(s.$$.fragment,a),e=!1},d(a){u(s,a)}}}class B extends b{constructor(s){super(),q(this,s,null,y,z,{})}}const D=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" pushOtherPanes={false}>
	<Pane>
		<span>1</span>
	</Pane>
	<Pane>
		<Splitpanes>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
			<Pane>
				<span>4</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane>
		<span>5</span>
	</Pane>
</Splitpanes>
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">pushOtherPanes</span>=<span class="hljs-string">{false}</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,G={code:D,highlightedHTML:F,component:B};function I(r){let s,e,a,t,p;return t=new C({props:{example:G}}),{c(){s=_("h2"),e=P("Locking layout by prevent pushing other panes"),a=N(),o(t.$$.fragment)},l(l){s=S(l,"H2",{});var n=d(s);e=v(n,"Locking layout by prevent pushing other panes"),n.forEach($),a=O(l),m(t.$$.fragment,l)},m(l,n){f(l,s,n),w(s,e),f(l,a,n),g(t,l,n),p=!0},p:x,i(l){p||(h(t.$$.fragment,l),p=!0)},o(l){i(t.$$.fragment,l),p=!1},d(l){l&&$(s),l&&$(a),u(t,l)}}}class Y extends b{constructor(s){super(),q(this,s,null,I,z,{})}}export{Y as default};
