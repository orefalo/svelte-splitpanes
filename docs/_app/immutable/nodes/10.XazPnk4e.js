import{S as k,i as M,s as A,a0 as E,C as R,a1 as T,P as h,a as v,Q as f,f as w,R as $,j as g,a2 as q,n as d,o as _,g as u,U as j,e as x,b,I as P,K as H,X as S,d as L,Y as C,k as y,Z as N}from"../chunks/external.B2hlO00i.js";import{E as O}from"../chunks/ExampleArea.HEABVkjj.js";import{S as I,P as z}from"../chunks/svelte-splitpanes.D-hhWatK.js";const K=!0,as=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));function Q(i){let a,l=Math.round(i[0][0])+"",t,e;return{c(){a=x("span"),t=S(l),e=S("%")},l(p){a=b(p,"SPAN",{});var r=L(a);t=C(r,l),e=C(r,"%"),r.forEach(u)},m(p,r){g(p,a,r),y(a,t),y(a,e)},p(p,r){r&1&&l!==(l=Math.round(p[0][0])+"")&&N(t,l)},d(p){p&&u(a)}}}function U(i){let a,l="Auto-Calculated";return{c(){a=x("span"),a.textContent=l},l(t){a=b(t,"SPAN",{"data-svelte-h":!0}),P(a)!=="svelte-1x3o7ww"&&(a.textContent=l)},m(t,e){g(t,a,e)},p:H,d(t){t&&u(a)}}}function X(i){let a,l,t,e,p;function r(s){i[2](s)}let o={$$slots:{default:[Q]},$$scope:{ctx:i}};return i[0][0]!==void 0&&(o.size=i[0][0]),a=new z({props:o}),R.push(()=>T(a,"size",r)),e=new z({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){h(a.$$.fragment),t=v(),h(e.$$.fragment)},l(s){f(a.$$.fragment,s),t=w(s),f(e.$$.fragment,s)},m(s,n){$(a,s,n),g(s,t,n),$(e,s,n),p=!0},p(s,n){const c={};n&9&&(c.$$scope={dirty:n,ctx:s}),!l&&n&1&&(l=!0,c.size=s[0][0],q(()=>l=!1)),a.$set(c);const m={};n&8&&(m.$$scope={dirty:n,ctx:s}),e.$set(m)},i(s){p||(d(a.$$.fragment,s),d(e.$$.fragment,s),p=!0)},o(s){_(a.$$.fragment,s),_(e.$$.fragment,s),p=!1},d(s){s&&u(t),j(a,s),j(e,s)}}}function Y(i){let a,l,t,e,p;function r(s){i[1](s)}let o={float:!0,min:0,step:.01,max:100};return i[0]!==void 0&&(o.values=i[0]),a=new E({props:o}),R.push(()=>T(a,"values",r)),e=new I({props:{style:"height: 400px",$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){h(a.$$.fragment),t=v(),h(e.$$.fragment)},l(s){f(a.$$.fragment,s),t=w(s),f(e.$$.fragment,s)},m(s,n){$(a,s,n),g(s,t,n),$(e,s,n),p=!0},p(s,[n]){const c={};!l&&n&1&&(l=!0,c.values=s[0],q(()=>l=!1)),a.$set(c);const m={};n&9&&(m.$$scope={dirty:n,ctx:s}),e.$set(m)},i(s){p||(d(a.$$.fragment,s),d(e.$$.fragment,s),p=!0)},o(s){_(a.$$.fragment,s),_(e.$$.fragment,s),p=!1},d(s){s&&u(t),j(a,s),j(e,s)}}}function Z(i,a,l){let t=[50];function e(r){t=r,l(0,t)}function p(r){i.$$.not_equal(t[0],r)&&(t[0]=r,l(0,t))}return[t,e,p]}class B extends k{constructor(a){super(),M(this,a,Z,Y,A,{})}}const D=`<script>
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
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,G={code:D,highlightedHTML:F,component:B};function J(i){let a,l="Programmatic resizing",t,e,p=`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	<br/>
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`,r,o,s;return o=new O({props:{example:G}}),{c(){a=x("h2"),a.textContent=l,t=v(),e=x("p"),e.innerHTML=p,r=v(),h(o.$$.fragment)},l(n){a=b(n,"H2",{"data-svelte-h":!0}),P(a)!=="svelte-fwbuix"&&(a.textContent=l),t=w(n),e=b(n,"P",{"data-svelte-h":!0}),P(e)!=="svelte-7s1y2"&&(e.innerHTML=p),r=w(n),f(o.$$.fragment,n)},m(n,c){g(n,a,c),g(n,t,c),g(n,e,c),g(n,r,c),$(o,n,c),s=!0},p:H,i(n){s||(d(o.$$.fragment,n),s=!0)},o(n){_(o.$$.fragment,n),s=!1},d(n){n&&(u(a),u(t),u(e),u(r)),j(o,n)}}}class ns extends k{constructor(a){super(),M(this,a,null,J,A,{})}}export{ns as component,as as universal};
