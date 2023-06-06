import{S as C,i as D,s as H,O as w,P as x,Q as S,n as b,o as E,T as k,a as q,f as I,j as f,g as o,e as u,I as _,b as $,d as y,J as d,k as c,L as B}from"../chunks/external.1ef6ce2f.js";import{E as L}from"../chunks/ExampleArea.22d25f0c.js";import{S as M,P as O}from"../chunks/svelte-splitpanes.ba7b4a22.js";const R=!0,ts=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));function J(i){let s,e;return{c(){s=u("span"),e=_("1")},l(a){s=$(a,"SPAN",{});var t=y(s);e=d(t,"1"),t.forEach(o)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&o(s)}}}function Q(i){let s,e;return{c(){s=u("span"),e=_("2")},l(a){s=$(a,"SPAN",{});var t=y(s);e=d(t,"2"),t.forEach(o)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&o(s)}}}function F(i){let s,e;return{c(){s=u("span"),e=_("3")},l(a){s=$(a,"SPAN",{});var t=y(s);e=d(t,"3"),t.forEach(o)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&o(s)}}}function G(i){let s,e,a,t,r,h;return s=new O({props:{size:65,$$slots:{default:[J]},$$scope:{ctx:i}}}),a=new O({props:{size:10,$$slots:{default:[Q]},$$scope:{ctx:i}}}),r=new O({props:{size:25,$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){w(s.$$.fragment),e=q(),w(a.$$.fragment),t=q(),w(r.$$.fragment)},l(n){x(s.$$.fragment,n),e=I(n),x(a.$$.fragment,n),t=I(n),x(r.$$.fragment,n)},m(n,p){S(s,n,p),f(n,e,p),S(a,n,p),f(n,t,p),S(r,n,p),h=!0},p(n,p){const v={};p&1&&(v.$$scope={dirty:p,ctx:n}),s.$set(v);const P={};p&1&&(P.$$scope={dirty:p,ctx:n}),a.$set(P);const z={};p&1&&(z.$$scope={dirty:p,ctx:n}),r.$set(z)},i(n){h||(b(s.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),h=!0)},o(n){E(s.$$.fragment,n),E(a.$$.fragment,n),E(r.$$.fragment,n),h=!1},d(n){k(s,n),n&&o(e),k(a,n),n&&o(t),k(r,n)}}}function K(i){let s,e;return s=new M({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){w(s.$$.fragment)},l(a){x(s.$$.fragment,a)},m(a,t){S(s,a,t),e=!0},p(a,[t]){const r={};t&1&&(r.$$scope={dirty:t,ctx:a}),s.$set(r)},i(a){e||(b(s.$$.fragment,a),e=!0)},o(a){E(s.$$.fragment,a),e=!1},d(a){k(s,a)}}}class U extends C{constructor(s){super(),D(this,s,null,K,H,{})}}const V=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
	</Pane>
	<Pane size={10}>
		<span>2</span>
	</Pane>
	<Pane size={25}>
		<span>3</span>
	</Pane>
</Splitpanes>
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{65}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{10}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{25}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:V,highlightedHTML:W,component:U};function Y(i){let s,e,a,t,r,h,n,p,v,P,z,N,g,A;return g=new L({props:{example:X}}),{c(){s=u("h2"),e=_("Default pane size"),a=q(),t=u("p"),r=_(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),h=u("br"),n=q(),p=u("b"),v=_(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),P=u("br"),z=_(" Note that setting a default value is different than setting a min or max value."),N=q(),w(g.$$.fragment)},l(l){s=$(l,"H2",{});var m=y(s);e=d(m,"Default pane size"),m.forEach(o),a=I(l),t=$(l,"P",{});var j=y(t);r=d(j,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),h=$(j,"BR",{}),n=I(j),p=$(j,"B",{});var T=y(p);v=d(T,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),T.forEach(o),P=$(j,"BR",{}),z=d(j," Note that setting a default value is different than setting a min or max value."),j.forEach(o),N=I(l),x(g.$$.fragment,l)},m(l,m){f(l,s,m),c(s,e),f(l,a,m),f(l,t,m),c(t,r),c(t,h),c(t,n),c(t,p),c(p,v),c(t,P),c(t,z),f(l,N,m),S(g,l,m),A=!0},p:B,i(l){A||(b(g.$$.fragment,l),A=!0)},o(l){E(g.$$.fragment,l),A=!1},d(l){l&&o(s),l&&o(a),l&&o(t),l&&o(N),k(g,l)}}}class ns extends C{constructor(s){super(),D(this,s,null,Y,H,{})}}export{ns as component,ts as universal};
