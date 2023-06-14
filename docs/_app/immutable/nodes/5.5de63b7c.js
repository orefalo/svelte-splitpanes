import{S as T,i as C,s as H,O as S,P as D,Q as b,n as E,o as k,T as q,a as z,f as v,j as f,g as i,e as m,I as $,b as u,d as j,J as g,k as c,L as A}from"../chunks/external.d956c198.js";import{E as L}from"../chunks/ExampleArea.4a3e9740.js";import{S as M,P as B}from"../chunks/svelte-splitpanes.690467bb.js";const R=!0,ts=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));function J(h){let a,r,e,n,l;return{c(){a=m("span"),r=$("1"),e=z(),n=m("p"),l=$("Default size of 65%")},l(t){a=u(t,"SPAN",{});var s=j(a);r=g(s,"1"),s.forEach(i),e=v(t),n=u(t,"P",{});var p=j(n);l=g(p,"Default size of 65%"),p.forEach(i)},m(t,s){f(t,a,s),c(a,r),f(t,e,s),f(t,n,s),c(n,l)},p:A,d(t){t&&i(a),t&&i(e),t&&i(n)}}}function Q(h){let a,r,e,n,l;return{c(){a=m("span"),r=$("2"),e=z(),n=m("p"),l=$("Default size of 10%")},l(t){a=u(t,"SPAN",{});var s=j(a);r=g(s,"2"),s.forEach(i),e=v(t),n=u(t,"P",{});var p=j(n);l=g(p,"Default size of 10%"),p.forEach(i)},m(t,s){f(t,a,s),c(a,r),f(t,e,s),f(t,n,s),c(n,l)},p:A,d(t){t&&i(a),t&&i(e),t&&i(n)}}}function F(h){let a,r,e,n,l;return{c(){a=m("span"),r=$("3"),e=z(),n=m("p"),l=$("Default size of 25%")},l(t){a=u(t,"SPAN",{});var s=j(a);r=g(s,"3"),s.forEach(i),e=v(t),n=u(t,"P",{});var p=j(n);l=g(p,"Default size of 25%"),p.forEach(i)},m(t,s){f(t,a,s),c(a,r),f(t,e,s),f(t,n,s),c(n,l)},p:A,d(t){t&&i(a),t&&i(e),t&&i(n)}}}function G(h){let a,r,e,n,l,t;return a=new B({props:{size:65,$$slots:{default:[J]},$$scope:{ctx:h}}}),e=new B({props:{size:10,$$slots:{default:[Q]},$$scope:{ctx:h}}}),l=new B({props:{size:25,$$slots:{default:[F]},$$scope:{ctx:h}}}),{c(){S(a.$$.fragment),r=z(),S(e.$$.fragment),n=z(),S(l.$$.fragment)},l(s){D(a.$$.fragment,s),r=v(s),D(e.$$.fragment,s),n=v(s),D(l.$$.fragment,s)},m(s,p){b(a,s,p),f(s,r,p),b(e,s,p),f(s,n,p),b(l,s,p),t=!0},p(s,p){const y={};p&1&&(y.$$scope={dirty:p,ctx:s}),a.$set(y);const w={};p&1&&(w.$$scope={dirty:p,ctx:s}),e.$set(w);const x={};p&1&&(x.$$scope={dirty:p,ctx:s}),l.$set(x)},i(s){t||(E(a.$$.fragment,s),E(e.$$.fragment,s),E(l.$$.fragment,s),t=!0)},o(s){k(a.$$.fragment,s),k(e.$$.fragment,s),k(l.$$.fragment,s),t=!1},d(s){q(a,s),s&&i(r),q(e,s),s&&i(n),q(l,s)}}}function K(h){let a,r;return a=new M({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[G]},$$scope:{ctx:h}}}),{c(){S(a.$$.fragment)},l(e){D(a.$$.fragment,e)},m(e,n){b(a,e,n),r=!0},p(e,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){r||(E(a.$$.fragment,e),r=!0)},o(e){k(a.$$.fragment,e),r=!1},d(e){q(a,e)}}}class U extends T{constructor(a){super(),C(this,a,null,K,H,{})}}const V=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
		<p>Default size of 65%</p>
	</Pane>
	<Pane size={10}>
		<span>2</span>
		<p>Default size of 10%</p>
	</Pane>
	<Pane size={25}>
		<span>3</span>
		<p>Default size of 25%</p>
	</Pane>
</Splitpanes>
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{65}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 65%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 10%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{25}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Default size of 25%<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:V,highlightedHTML:W,component:U};function Y(h){let a,r,e,n,l,t,s,p,y,w,x,I,d,N;return d=new L({props:{example:X}}),{c(){a=m("h2"),r=$("Default pane size"),e=z(),n=m("p"),l=$(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),t=m("br"),s=z(),p=m("b"),y=$(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),w=m("br"),x=$(" Note that setting a default value is different than setting a min or max value."),I=z(),S(d.$$.fragment)},l(o){a=u(o,"H2",{});var _=j(a);r=g(_,"Default pane size"),_.forEach(i),e=v(o),n=u(o,"P",{});var P=j(n);l=g(P,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),t=u(P,"BR",{}),s=v(P),p=u(P,"B",{});var O=j(p);y=g(O,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),O.forEach(i),w=u(P,"BR",{}),x=g(P," Note that setting a default value is different than setting a min or max value."),P.forEach(i),I=v(o),D(d.$$.fragment,o)},m(o,_){f(o,a,_),c(a,r),f(o,e,_),f(o,n,_),c(n,l),c(n,t),c(n,s),c(n,p),c(p,y),c(n,w),c(n,x),f(o,I,_),b(d,o,_),N=!0},p:A,i(o){N||(E(d.$$.fragment,o),N=!0)},o(o){k(d.$$.fragment,o),N=!1},d(o){o&&i(a),o&&i(e),o&&i(n),o&&i(I),q(d,o)}}}class ns extends T{constructor(a){super(),C(this,a,null,Y,H,{})}}export{ns as component,ts as universal};
