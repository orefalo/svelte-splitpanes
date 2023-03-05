import{S as R,i as E,s as M,a9 as N,C as q,X as T,O as v,a as y,P as w,f as k,Q as b,j as u,Y as H,n as P,o as S,R as x,g as c,e as j,J as $,b as _,d as A,K as d,k as f,U as L,L as B}from"../chunks/external.792f77d4.js";import{E as J}from"../chunks/ExampleArea.4fe963f5.js";import{S as K,P as C}from"../chunks/svelte-splitpanes.19c053f4.js";function O(o){let a,p=Math.round(o[0][0])+"",e,n;return{c(){a=j("span"),e=$(p),n=$("%")},l(i){a=_(i,"SPAN",{});var r=A(a);e=d(r,p),n=d(r,"%"),r.forEach(c)},m(i,r){u(i,a,r),f(a,e),f(a,n)},p(i,r){r&1&&p!==(p=Math.round(i[0][0])+"")&&B(e,p)},d(i){i&&c(a)}}}function Q(o){let a,p;return{c(){a=j("span"),p=$("Auto-Calculated")},l(e){a=_(e,"SPAN",{});var n=A(a);p=d(n,"Auto-Calculated"),n.forEach(c)},m(e,n){u(e,a,n),f(a,p)},p:L,d(e){e&&c(a)}}}function U(o){let a,p,e,n,i;function r(s){o[2](s)}let m={$$slots:{default:[O]},$$scope:{ctx:o}};return o[0][0]!==void 0&&(m.size=o[0][0]),a=new C({props:m}),q.push(()=>T(a,"size",r)),n=new C({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){v(a.$$.fragment),e=y(),v(n.$$.fragment)},l(s){w(a.$$.fragment,s),e=k(s),w(n.$$.fragment,s)},m(s,l){b(a,s,l),u(s,e,l),b(n,s,l),i=!0},p(s,l){const h={};l&9&&(h.$$scope={dirty:l,ctx:s}),!p&&l&1&&(p=!0,h.size=s[0][0],H(()=>p=!1)),a.$set(h);const t={};l&8&&(t.$$scope={dirty:l,ctx:s}),n.$set(t)},i(s){i||(P(a.$$.fragment,s),P(n.$$.fragment,s),i=!0)},o(s){S(a.$$.fragment,s),S(n.$$.fragment,s),i=!1},d(s){x(a,s),s&&c(e),x(n,s)}}}function X(o){let a,p,e,n,i;function r(s){o[1](s)}let m={float:!0,min:0,step:.01,max:100};return o[0]!==void 0&&(m.values=o[0]),a=new N({props:m}),q.push(()=>T(a,"values",r)),n=new K({props:{style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){v(a.$$.fragment),e=y(),v(n.$$.fragment)},l(s){w(a.$$.fragment,s),e=k(s),w(n.$$.fragment,s)},m(s,l){b(a,s,l),u(s,e,l),b(n,s,l),i=!0},p(s,[l]){const h={};!p&&l&1&&(p=!0,h.values=s[0],H(()=>p=!1)),a.$set(h);const t={};l&9&&(t.$$scope={dirty:l,ctx:s}),n.$set(t)},i(s){i||(P(a.$$.fragment,s),P(n.$$.fragment,s),i=!0)},o(s){S(a.$$.fragment,s),S(n.$$.fragment,s),i=!1},d(s){x(a,s),s&&c(e),x(n,s)}}}function Y(o,a,p){let e=[50];function n(r){e=r,p(0,e)}function i(r){o.$$.not_equal(e[0],r)&&(e[0]=r,p(0,e))}return[e,n,i]}class D extends R{constructor(a){super(),E(this,a,Y,X,M,{})}}const F=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import RangeSlider from 'svelte-range-slider-pips';

	let value = [50];
<\/script>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes style="height: 400px">
	<Pane bind:size={value[0]}>
		<span>{Math.round(value[0])}%</span>
	</Pane>
	<Pane>
		<span>Auto-Calculated</span>
	</Pane>
</Splitpanes>
`,G=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">RangeSlider</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-range-slider-pips&#x27;</span>;

	<span class="hljs-keyword">let</span> value = [<span class="hljs-number">50</span>];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">RangeSlider</span> <span class="hljs-attr">float</span> <span class="hljs-attr">bind:values</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">min</span>=<span class="hljs-string">{0}</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{0.01}</span> <span class="hljs-attr">max</span>=<span class="hljs-string">{100}</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">bind:size</span>=<span class="hljs-string">{value[0]}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{Math.round(value[0])}%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Auto-Calculated<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,I={code:F,highlightedHTML:G,component:D};function V(o){let a,p,e,n,i,r,m,s,l,h;return l=new J({props:{example:I}}),{c(){a=j("h2"),p=$("Programmatic resizing"),e=y(),n=j("p"),i=$(`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),r=j("br"),m=$(`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),s=y(),v(l.$$.fragment)},l(t){a=_(t,"H2",{});var g=A(a);p=d(g,"Programmatic resizing"),g.forEach(c),e=k(t),n=_(t,"P",{});var z=A(n);i=d(z,`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),r=_(z,"BR",{}),m=d(z,`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),z.forEach(c),s=k(t),w(l.$$.fragment,t)},m(t,g){u(t,a,g),f(a,p),u(t,e,g),u(t,n,g),f(n,i),f(n,r),f(n,m),u(t,s,g),b(l,t,g),h=!0},p:L,i(t){h||(P(l.$$.fragment,t),h=!0)},o(t){S(l.$$.fragment,t),h=!1},d(t){t&&c(a),t&&c(e),t&&c(n),t&&c(s),x(l,t)}}}class as extends R{constructor(a){super(),E(this,a,null,V,M,{})}}export{as as default};
