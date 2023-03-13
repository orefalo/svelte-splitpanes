import{S as D,i as H,s as J,O as x,P as y,Q as S,n as b,o as E,R as k,a as q,f as N,j as f,g as i,e as u,J as _,b as $,d as w,K as d,k as c,U as B}from"../chunks/external.27885121.js";import{E as K}from"../chunks/ExampleArea.a44de483.js";import{S as L,P as R}from"../chunks/svelte-splitpanes.b61ac8f4.js";function M(o){let s,e;return{c(){s=u("span"),e=_("1")},l(a){s=$(a,"SPAN",{});var t=w(s);e=d(t,"1"),t.forEach(i)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&i(s)}}}function O(o){let s,e;return{c(){s=u("span"),e=_("2")},l(a){s=$(a,"SPAN",{});var t=w(s);e=d(t,"2"),t.forEach(i)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&i(s)}}}function Q(o){let s,e;return{c(){s=u("span"),e=_("3")},l(a){s=$(a,"SPAN",{});var t=w(s);e=d(t,"3"),t.forEach(i)},m(a,t){f(a,s,t),c(s,e)},p:B,d(a){a&&i(s)}}}function T(o){let s,e,a,t,r,h;return s=new R({props:{size:65,$$slots:{default:[M]},$$scope:{ctx:o}}}),a=new R({props:{size:10,$$slots:{default:[O]},$$scope:{ctx:o}}}),r=new R({props:{size:25,$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){x(s.$$.fragment),e=q(),x(a.$$.fragment),t=q(),x(r.$$.fragment)},l(n){y(s.$$.fragment,n),e=N(n),y(a.$$.fragment,n),t=N(n),y(r.$$.fragment,n)},m(n,p){S(s,n,p),f(n,e,p),S(a,n,p),f(n,t,p),S(r,n,p),h=!0},p(n,p){const v={};p&1&&(v.$$scope={dirty:p,ctx:n}),s.$set(v);const P={};p&1&&(P.$$scope={dirty:p,ctx:n}),a.$set(P);const z={};p&1&&(z.$$scope={dirty:p,ctx:n}),r.$set(z)},i(n){h||(b(s.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),h=!0)},o(n){E(s.$$.fragment,n),E(a.$$.fragment,n),E(r.$$.fragment,n),h=!1},d(n){k(s,n),n&&i(e),k(a,n),n&&i(t),k(r,n)}}}function U(o){let s,e;return s=new L({props:{horizontal:!0,style:"height: 400px",$$slots:{default:[T]},$$scope:{ctx:o}}}),{c(){x(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,t){S(s,a,t),e=!0},p(a,[t]){const r={};t&1&&(r.$$scope={dirty:t,ctx:a}),s.$set(r)},i(a){e||(b(s.$$.fragment,a),e=!0)},o(a){E(s.$$.fragment,a),e=!1},d(a){k(s,a)}}}class F extends D{constructor(s){super(),H(this,s,null,U,J,{})}}const G=`<script>
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
`,V=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,W={code:G,highlightedHTML:V,component:F};function X(o){let s,e,a,t,r,h,n,p,v,P,z,A,g,I;return g=new K({props:{example:W}}),{c(){s=u("h2"),e=_("Default pane size"),a=q(),t=u("p"),r=_(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),h=u("br"),n=q(),p=u("b"),v=_(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),P=u("br"),z=_(" Note that setting a default value is different than setting a min or max value."),A=q(),x(g.$$.fragment)},l(l){s=$(l,"H2",{});var m=w(s);e=d(m,"Default pane size"),m.forEach(i),a=N(l),t=$(l,"P",{});var j=w(t);r=d(j,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),h=$(j,"BR",{}),n=N(j),p=$(j,"B",{});var C=w(p);v=d(C,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),C.forEach(i),P=$(j,"BR",{}),z=d(j," Note that setting a default value is different than setting a min or max value."),j.forEach(i),A=N(l),y(g.$$.fragment,l)},m(l,m){f(l,s,m),c(s,e),f(l,a,m),f(l,t,m),c(t,r),c(t,h),c(t,n),c(t,p),c(p,v),c(t,P),c(t,z),f(l,A,m),S(g,l,m),I=!0},p:B,i(l){I||(b(g.$$.fragment,l),I=!0)},o(l){E(g.$$.fragment,l),I=!1},d(l){l&&i(s),l&&i(a),l&&i(t),l&&i(A),k(g,l)}}}class as extends D{constructor(s){super(),H(this,s,null,X,J,{})}}export{as as default};
