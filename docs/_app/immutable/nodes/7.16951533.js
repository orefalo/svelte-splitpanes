import{S as N,i as z,s as L,O as f,P as m,Q as g,n as h,o as i,T as u,a as O,f as k,j as o,g as $,e as _,I as P,b as S,d,J as v,k as w,L as x}from"../chunks/external.768903b6.js";import{E as T}from"../chunks/ExampleArea.aad150a6.js";import{S as q,P as j}from"../chunks/svelte-splitpanes.87854b3a.js";const y=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:y},Symbol.toStringTag,{value:"Module"}));function C(r){let s,e;return{c(){s=_("span"),e=P("1")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"1"),t.forEach($)},m(a,t){o(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function H(r){let s,e;return{c(){s=_("span"),e=P("2")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"2"),t.forEach($)},m(a,t){o(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function M(r){let s,e;return{c(){s=_("span"),e=P("3")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"3"),t.forEach($)},m(a,t){o(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function I(r){let s,e;return{c(){s=_("span"),e=P("4")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"4"),t.forEach($)},m(a,t){o(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function J(r){let s,e,a,t,p,l;return s=new j({props:{$$slots:{default:[H]},$$scope:{ctx:r}}}),a=new j({props:{$$slots:{default:[M]},$$scope:{ctx:r}}}),p=new j({props:{$$slots:{default:[I]},$$scope:{ctx:r}}}),{c(){f(s.$$.fragment),e=O(),f(a.$$.fragment),t=O(),f(p.$$.fragment)},l(n){m(s.$$.fragment,n),e=k(n),m(a.$$.fragment,n),t=k(n),m(p.$$.fragment,n)},m(n,c){g(s,n,c),o(n,e,c),g(a,n,c),o(n,t,c),g(p,n,c),l=!0},p(n,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:n}),s.$set(E);const b={};c&1&&(b.$$scope={dirty:c,ctx:n}),a.$set(b);const A={};c&1&&(A.$$scope={dirty:c,ctx:n}),p.$set(A)},i(n){l||(h(s.$$.fragment,n),h(a.$$.fragment,n),h(p.$$.fragment,n),l=!0)},o(n){i(s.$$.fragment,n),i(a.$$.fragment,n),i(p.$$.fragment,n),l=!1},d(n){u(s,n),n&&$(e),u(a,n),n&&$(t),u(p,n)}}}function Q(r){let s,e;return s=new q({props:{$$slots:{default:[J]},$$scope:{ctx:r}}}),{c(){f(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,t){g(s,a,t),e=!0},p(a,t){const p={};t&1&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(h(s.$$.fragment,a),e=!0)},o(a){i(s.$$.fragment,a),e=!1},d(a){u(s,a)}}}function B(r){let s,e;return{c(){s=_("span"),e=P("5")},l(a){s=S(a,"SPAN",{});var t=d(s);e=v(t,"5"),t.forEach($)},m(a,t){o(a,s,t),w(s,e)},p:x,d(a){a&&$(s)}}}function D(r){let s,e,a,t,p,l;return s=new j({props:{$$slots:{default:[C]},$$scope:{ctx:r}}}),a=new j({props:{$$slots:{default:[Q]},$$scope:{ctx:r}}}),p=new j({props:{$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){f(s.$$.fragment),e=O(),f(a.$$.fragment),t=O(),f(p.$$.fragment)},l(n){m(s.$$.fragment,n),e=k(n),m(a.$$.fragment,n),t=k(n),m(p.$$.fragment,n)},m(n,c){g(s,n,c),o(n,e,c),g(a,n,c),o(n,t,c),g(p,n,c),l=!0},p(n,c){const E={};c&1&&(E.$$scope={dirty:c,ctx:n}),s.$set(E);const b={};c&1&&(b.$$scope={dirty:c,ctx:n}),a.$set(b);const A={};c&1&&(A.$$scope={dirty:c,ctx:n}),p.$set(A)},i(n){l||(h(s.$$.fragment,n),h(a.$$.fragment,n),h(p.$$.fragment,n),l=!0)},o(n){i(s.$$.fragment,n),i(a.$$.fragment,n),i(p.$$.fragment,n),l=!1},d(n){u(s,n),n&&$(e),u(a,n),n&&$(t),u(p,n)}}}function F(r){let s,e;return s=new q({props:{horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[D]},$$scope:{ctx:r}}}),{c(){f(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,t){g(s,a,t),e=!0},p(a,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(h(s.$$.fragment,a),e=!0)},o(a){i(s.$$.fragment,a),e=!1},d(a){u(s,a)}}}class G extends N{constructor(s){super(),z(this,s,null,F,L,{})}}const K=`<script>
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
`,R=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,U={code:K,highlightedHTML:R,component:G};function V(r){let s,e,a,t,p;return t=new T({props:{example:U}}),{c(){s=_("h2"),e=P("Locking layout by prevent pushing other panes"),a=O(),f(t.$$.fragment)},l(l){s=S(l,"H2",{});var n=d(s);e=v(n,"Locking layout by prevent pushing other panes"),n.forEach($),a=k(l),m(t.$$.fragment,l)},m(l,n){o(l,s,n),w(s,e),o(l,a,n),g(t,l,n),p=!0},p:x,i(l){p||(h(t.$$.fragment,l),p=!0)},o(l){i(t.$$.fragment,l),p=!1},d(l){l&&$(s),l&&$(a),u(t,l)}}}class ss extends N{constructor(s){super(),z(this,s,null,V,L,{})}}export{ss as component,Z as universal};
