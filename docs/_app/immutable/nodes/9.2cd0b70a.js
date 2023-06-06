import{S as E,i as M,s as R,Y as L,C as T,Z as q,O as v,a as x,P as w,f as k,Q as b,j as u,_ as O,n as P,o as S,T as y,g as c,e as _,I as $,b as j,d as A,J as d,k as f,L as H,W as N}from"../chunks/external.f7ab61d0.js";import{E as B}from"../chunks/ExampleArea.af539383.js";import{S as I,P as C}from"../chunks/svelte-splitpanes.e4cd390e.js";const J=!0,ns=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));function Q(o){let a,p=Math.round(o[0][0])+"",e,n;return{c(){a=_("span"),e=$(p),n=$("%")},l(r){a=j(r,"SPAN",{});var i=A(a);e=d(i,p),n=d(i,"%"),i.forEach(c)},m(r,i){u(r,a,i),f(a,e),f(a,n)},p(r,i){i&1&&p!==(p=Math.round(r[0][0])+"")&&N(e,p)},d(r){r&&c(a)}}}function W(o){let a,p;return{c(){a=_("span"),p=$("Auto-Calculated")},l(e){a=j(e,"SPAN",{});var n=A(a);p=d(n,"Auto-Calculated"),n.forEach(c)},m(e,n){u(e,a,n),f(a,p)},p:H,d(e){e&&c(a)}}}function Y(o){let a,p,e,n,r;function i(s){o[2](s)}let m={$$slots:{default:[Q]},$$scope:{ctx:o}};return o[0][0]!==void 0&&(m.size=o[0][0]),a=new C({props:m}),T.push(()=>q(a,"size",i)),n=new C({props:{$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){v(a.$$.fragment),e=x(),v(n.$$.fragment)},l(s){w(a.$$.fragment,s),e=k(s),w(n.$$.fragment,s)},m(s,l){b(a,s,l),u(s,e,l),b(n,s,l),r=!0},p(s,l){const h={};l&9&&(h.$$scope={dirty:l,ctx:s}),!p&&l&1&&(p=!0,h.size=s[0][0],O(()=>p=!1)),a.$set(h);const t={};l&8&&(t.$$scope={dirty:l,ctx:s}),n.$set(t)},i(s){r||(P(a.$$.fragment,s),P(n.$$.fragment,s),r=!0)},o(s){S(a.$$.fragment,s),S(n.$$.fragment,s),r=!1},d(s){y(a,s),s&&c(e),y(n,s)}}}function Z(o){let a,p,e,n,r;function i(s){o[1](s)}let m={float:!0,min:0,step:.01,max:100};return o[0]!==void 0&&(m.values=o[0]),a=new L({props:m}),T.push(()=>q(a,"values",i)),n=new I({props:{style:"height: 400px",$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){v(a.$$.fragment),e=x(),v(n.$$.fragment)},l(s){w(a.$$.fragment,s),e=k(s),w(n.$$.fragment,s)},m(s,l){b(a,s,l),u(s,e,l),b(n,s,l),r=!0},p(s,[l]){const h={};!p&&l&1&&(p=!0,h.values=s[0],O(()=>p=!1)),a.$set(h);const t={};l&9&&(t.$$scope={dirty:l,ctx:s}),n.$set(t)},i(s){r||(P(a.$$.fragment,s),P(n.$$.fragment,s),r=!0)},o(s){S(a.$$.fragment,s),S(n.$$.fragment,s),r=!1},d(s){y(a,s),s&&c(e),y(n,s)}}}function D(o,a,p){let e=[50];function n(i){e=i,p(0,e)}function r(i){o.$$.not_equal(e[0],i)&&(e[0]=i,p(0,e))}return[e,n,r]}class F extends E{constructor(a){super(),M(this,a,D,Z,R,{})}}const G=`<script>
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
`,K=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,U={code:G,highlightedHTML:K,component:F};function V(o){let a,p,e,n,r,i,m,s,l,h;return l=new B({props:{example:U}}),{c(){a=_("h2"),p=$("Programmatic resizing"),e=x(),n=_("p"),r=$(`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),i=_("br"),m=$(`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),s=x(),v(l.$$.fragment)},l(t){a=j(t,"H2",{});var g=A(a);p=d(g,"Programmatic resizing"),g.forEach(c),e=k(t),n=j(t,"P",{});var z=A(n);r=d(z,`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),i=j(z,"BR",{}),m=d(z,`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),z.forEach(c),s=k(t),w(l.$$.fragment,t)},m(t,g){u(t,a,g),f(a,p),u(t,e,g),u(t,n,g),f(n,r),f(n,i),f(n,m),u(t,s,g),b(l,t,g),h=!0},p:H,i(t){h||(P(l.$$.fragment,t),h=!0)},o(t){S(l.$$.fragment,t),h=!1},d(t){t&&c(a),t&&c(e),t&&c(n),t&&c(s),y(l,t)}}}class es extends E{constructor(a){super(),M(this,a,null,V,R,{})}}export{es as component,ns as universal};
