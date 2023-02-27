import{S as y,i as B,s as E,O as $,a as k,P as _,f as S,Q as d,j as p,n as u,o as m,R as h,g as i,J as v,K as P,D as g,M as H,ac as M,H as N,ad as j,e as R,b as z,d as A,I as b,k as C,L as q,U as D}from"../chunks/external.475640e5.js";import{E as I}from"../chunks/ExampleArea.910fd3f7.js";import{S as J,P as K}from"../chunks/svelte-splitpanes.d35726cb.js";import{B as L}from"../chunks/Button.3933f6b6.js";function w(c,t,s){const n=c.slice();return n[2]=t[s],n}function O(c){let t;return{c(){t=v("Switch")},l(s){t=P(s,"Switch")},m(s,n){p(s,t,n)},d(s){s&&i(t)}}}function Q(c){let t,s=c[2].color+"",n,l;return{c(){t=R("span"),n=v(s),l=k(),this.h()},l(e){t=z(e,"SPAN",{});var o=A(t);n=P(o,s),o.forEach(i),l=S(e),this.h()},h(){b(t,"color",c[2].color)},m(e,o){p(e,t,o),C(t,n),p(e,l,o)},p(e,o){o&1&&s!==(s=e[2].color+"")&&q(n,s),o&1&&b(t,"color",e[2].color)},d(e){e&&i(t),e&&i(l)}}}function x(c,t){let s,n,l;return n=new K({props:{minSize:10,$$slots:{default:[Q]},$$scope:{ctx:t}}}),{key:c,first:null,c(){s=g(),$(n.$$.fragment),this.h()},l(e){s=g(),_(n.$$.fragment,e),this.h()},h(){this.first=s},m(e,o){p(e,s,o),d(n,e,o),l=!0},p(e,o){t=e;const r={};o&33&&(r.$$scope={dirty:o,ctx:t}),n.$set(r)},i(e){l||(u(n.$$.fragment,e),l=!0)},o(e){m(n.$$.fragment,e),l=!1},d(e){e&&i(s),h(n,e)}}}function U(c){let t=[],s=new Map,n,l,e=c[0];const o=r=>r[2];for(let r=0;r<e.length;r+=1){let a=w(c,e,r),f=o(a);s.set(f,t[r]=x(f,a))}return{c(){for(let r=0;r<t.length;r+=1)t[r].c();n=g()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);n=g()},m(r,a){for(let f=0;f<t.length;f+=1)t[f].m(r,a);p(r,n,a),l=!0},p(r,a){a&1&&(e=r[0],H(),t=M(t,a,o,1,r,e,s,n.parentNode,j,x,n,w),N())},i(r){if(!l){for(let a=0;a<e.length;a+=1)u(t[a]);l=!0}},o(r){for(let a=0;a<t.length;a+=1)m(t[a]);l=!1},d(r){for(let a=0;a<t.length;a+=1)t[a].d(r);r&&i(n)}}}function F(c){let t,s,n,l;return t=new L({props:{$$slots:{default:[O]},$$scope:{ctx:c}}}),t.$on("click",c[1]),n=new J({props:{style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){$(t.$$.fragment),s=k(),$(n.$$.fragment)},l(e){_(t.$$.fragment,e),s=S(e),_(n.$$.fragment,e)},m(e,o){d(t,e,o),p(e,s,o),d(n,e,o),l=!0},p(e,[o]){const r={};o&32&&(r.$$scope={dirty:o,ctx:e}),t.$set(r);const a={};o&33&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(e){l||(u(t.$$.fragment,e),u(n.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),m(n.$$.fragment,e),l=!1},d(e){h(t,e),e&&i(s),h(n,e)}}}function G(c,t,s){let n=[{color:"red"},{color:"blue"}];return[n,()=>{const e=n[0];s(0,n[0]=n[1],n),s(0,n[1]=e,n)}]}class T extends y{constructor(t){super(),B(this,t,G,F,E,{})}}const V=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let ordered = [{ color: 'red' }, { color: 'blue' }];
<\/script>

<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button
>
<Splitpanes style="height: 400px">
	{#each ordered as val (val)}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>
`,W="../../src/routes/examples/reordering-panes/code.svelte",X={id:W,code:V,component:T};function Y(c){let t,s,n,l,e;return l=new I({props:{example:X}}),{c(){t=R("h2"),s=v("Reordering Panes"),n=k(),$(l.$$.fragment)},l(o){t=z(o,"H2",{});var r=A(t);s=P(r,"Reordering Panes"),r.forEach(i),n=S(o),_(l.$$.fragment,o)},m(o,r){p(o,t,r),C(t,s),p(o,n,r),d(l,o,r),e=!0},p:D,i(o){e||(u(l.$$.fragment,o),e=!0)},o(o){m(l.$$.fragment,o),e=!1},d(o){o&&i(t),o&&i(n),h(l,o)}}}class oe extends y{constructor(t){super(),B(this,t,null,Y,E,{})}}export{oe as default};
