import{S as R,i as M,s as q,ab as H,C as N,X as T,O as w,a as A,P as b,f as C,Q as z,j as c,Y as j,n as P,o as S,R as x,g as f,e as h,J as g,b as v,d as k,K as d,k as _,U as B,L as J}from"../chunks/external.475640e5.js";import{E as K}from"../chunks/ExampleArea.910fd3f7.js";import{S as L,P as E}from"../chunks/svelte-splitpanes.d35726cb.js";function O(o){let t,r=Math.round(o[0][0])+"",n,a;return{c(){t=h("span"),n=g(r),a=g("%")},l(l){t=v(l,"SPAN",{});var p=k(t);n=d(p,r),a=d(p,"%"),p.forEach(f)},m(l,p){c(l,t,p),_(t,n),_(t,a)},p(l,p){p&1&&r!==(r=Math.round(l[0][0])+"")&&J(n,r)},d(l){l&&f(t)}}}function Q(o){let t,r;return{c(){t=h("span"),r=g("Auto-Calculated")},l(n){t=v(n,"SPAN",{});var a=k(t);r=d(a,"Auto-Calculated"),a.forEach(f)},m(n,a){c(n,t,a),_(t,r)},p:B,d(n){n&&f(t)}}}function U(o){let t,r,n,a,l;function p(e){o[2](e)}let m={$$slots:{default:[O]},$$scope:{ctx:o}};return o[0][0]!==void 0&&(m.size=o[0][0]),t=new E({props:m}),N.push(()=>T(t,"size",p)),a=new E({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){w(t.$$.fragment),n=A(),w(a.$$.fragment)},l(e){b(t.$$.fragment,e),n=C(e),b(a.$$.fragment,e)},m(e,i){z(t,e,i),c(e,n,i),z(a,e,i),l=!0},p(e,i){const u={};i&9&&(u.$$scope={dirty:i,ctx:e}),!r&&i&1&&(r=!0,u.size=e[0][0],j(()=>r=!1)),t.$set(u);const s={};i&8&&(s.$$scope={dirty:i,ctx:e}),a.$set(s)},i(e){l||(P(t.$$.fragment,e),P(a.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),S(a.$$.fragment,e),l=!1},d(e){x(t,e),e&&f(n),x(a,e)}}}function X(o){let t,r,n,a,l;function p(e){o[1](e)}let m={float:!0,min:0,step:.01,max:100};return o[0]!==void 0&&(m.values=o[0]),t=new H({props:m}),N.push(()=>T(t,"values",p)),a=new L({props:{style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){w(t.$$.fragment),n=A(),w(a.$$.fragment)},l(e){b(t.$$.fragment,e),n=C(e),b(a.$$.fragment,e)},m(e,i){z(t,e,i),c(e,n,i),z(a,e,i),l=!0},p(e,[i]){const u={};!r&&i&1&&(r=!0,u.values=e[0],j(()=>r=!1)),t.$set(u);const s={};i&9&&(s.$$scope={dirty:i,ctx:e}),a.$set(s)},i(e){l||(P(t.$$.fragment,e),P(a.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),S(a.$$.fragment,e),l=!1},d(e){x(t,e),e&&f(n),x(a,e)}}}function Y(o,t,r){let n=[50];function a(p){n=p,r(0,n)}function l(p){o.$$.not_equal(n[0],p)&&(n[0]=p,r(0,n))}return[n,a,l]}class D extends R{constructor(t){super(),M(this,t,Y,X,q,{})}}const F=`<script>
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
`,G="../../src/routes/examples/prog-resize/code.svelte",I={id:G,code:F,component:D};function V(o){let t,r,n,a,l,p,m,e,i,u;return i=new K({props:{example:I}}),{c(){t=h("h2"),r=g("Programmatic resizing"),n=A(),a=h("p"),l=g(`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),p=h("br"),m=g(`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),e=A(),w(i.$$.fragment)},l(s){t=v(s,"H2",{});var $=k(t);r=d($,"Programmatic resizing"),$.forEach(f),n=C(s),a=v(s,"P",{});var y=k(a);l=d(y,`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
	`),p=v(y,"BR",{}),m=d(y,`
	Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
	see in the example.`),y.forEach(f),e=C(s),b(i.$$.fragment,s)},m(s,$){c(s,t,$),_(t,r),c(s,n,$),c(s,a,$),_(a,l),_(a,p),_(a,m),c(s,e,$),z(i,s,$),u=!0},p:B,i(s){u||(P(i.$$.fragment,s),u=!0)},o(s){S(i.$$.fragment,s),u=!1},d(s){s&&f(t),s&&f(n),s&&f(a),s&&f(e),x(i,s)}}}class te extends R{constructor(t){super(),M(this,t,null,V,q,{})}}export{te as default};
