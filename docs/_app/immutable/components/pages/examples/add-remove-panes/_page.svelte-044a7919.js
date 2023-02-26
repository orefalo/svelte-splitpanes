import{S as x,i as D,s as w,Q as $,a as d,R as _,f as b,T as g,j as f,n as i,o as m,V as h,g as p,L as E,M as N,D as k,$ as C,a0 as j,J as q,e as M,b as R,d as V,k as O,I as z}from"../../../../chunks/external-0cbe0899.js";import{E as y}from"../../../../chunks/ExampleArea-d9e86d6b.js";import{S as H,P as I}from"../../../../chunks/svelte-splitpanes-1a0ab212.js";import{B as v}from"../../../../chunks/Button-c6153949.js";function S(c,e,l){const n=c.slice();return n[3]=e[l],n[5]=l,n}function J(c){let e;return{c(){e=E("+ ADD PANE")},l(l){e=N(l,"+ ADD PANE")},m(l,n){f(l,e,n)},d(l){l&&p(e)}}}function L(c){let e;return{c(){e=E("- REMOVE PANE")},l(l){e=N(l,"- REMOVE PANE")},m(l,n){f(l,e,n)},d(l){l&&p(e)}}}function Q(c){let e,l=c[5]+1+"",n,a;return{c(){e=M("span"),n=E(l),a=d()},l(o){e=R(o,"SPAN",{});var s=V(e);n=N(s,l),s.forEach(p),a=b(o)},m(o,s){f(o,e,s),O(e,n),f(o,a,s)},p:z,d(o){o&&p(e),o&&p(a)}}}function B(c){let e,l;return e=new I({props:{minSize:10,$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){$(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,a){g(e,n,a),l=!0},p(n,a){const o={};a&64&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){l||(i(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){h(e,n)}}}function T(c){let e,l,n={length:c[0]},a=[];for(let s=0;s<n.length;s+=1)a[s]=B(S(c,n,s));const o=s=>m(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=k()},l(s){for(let t=0;t<a.length;t+=1)a[t].l(s);e=k()},m(s,t){for(let r=0;r<a.length;r+=1)a[r].m(s,t);f(s,e,t),l=!0},p(s,t){if(t&1){n={length:s[0]};let r;for(r=0;r<n.length;r+=1){const u=S(s,n,r);a[r]?(a[r].p(u,t),i(a[r],1)):(a[r]=B(u),a[r].c(),i(a[r],1),a[r].m(e.parentNode,e))}for(C(),r=n.length;r<a.length;r+=1)o(r);j()}},i(s){if(!l){for(let t=0;t<n.length;t+=1)i(a[t]);l=!0}},o(s){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)m(a[t]);l=!1},d(s){q(a,s),s&&p(e)}}}function F(c){let e,l,n,a,o,s;return e=new v({props:{$$slots:{default:[J]},$$scope:{ctx:c}}}),e.$on("click",c[1]),n=new v({props:{disabled:c[0]<=0,$$slots:{default:[L]},$$scope:{ctx:c}}}),n.$on("click",c[2]),o=new H({props:{style:"height: 400px",$$slots:{default:[T]},$$scope:{ctx:c}}}),{c(){$(e.$$.fragment),l=d(),$(n.$$.fragment),a=d(),$(o.$$.fragment)},l(t){_(e.$$.fragment,t),l=b(t),_(n.$$.fragment,t),a=b(t),_(o.$$.fragment,t)},m(t,r){g(e,t,r),f(t,l,r),g(n,t,r),f(t,a,r),g(o,t,r),s=!0},p(t,[r]){const u={};r&64&&(u.$$scope={dirty:r,ctx:t}),e.$set(u);const A={};r&1&&(A.disabled=t[0]<=0),r&64&&(A.$$scope={dirty:r,ctx:t}),n.$set(A);const P={};r&65&&(P.$$scope={dirty:r,ctx:t}),o.$set(P)},i(t){s||(i(e.$$.fragment,t),i(n.$$.fragment,t),i(o.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),m(n.$$.fragment,t),m(o.$$.fragment,t),s=!1},d(t){h(e,t),t&&p(l),h(n,t),t&&p(a),h(o,t)}}}function G(c,e,l){let n=3;return[n,()=>{n>=0&&l(0,n++,n)},()=>{n>0&&l(0,n--,n)}]}class K extends x{constructor(e){super(),D(this,e,G,F,w,{})}}const U=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let panesNumber = 3;
<\/script>

<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={panesNumber <= 0}
	on:click={() => {
		if (panesNumber > 0) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,W="../../src/routes/examples/add-remove-panes/code.svelte",X={id:W,code:U,component:K};function Y(c){let e,l,n,a,o;return a=new y({props:{example:X}}),{c(){e=M("h2"),l=E("Adding and removing panes programmatically"),n=d(),$(a.$$.fragment)},l(s){e=R(s,"H2",{});var t=V(e);l=N(t,"Adding and removing panes programmatically"),t.forEach(p),n=b(s),_(a.$$.fragment,s)},m(s,t){f(s,e,t),O(e,l),f(s,n,t),g(a,s,t),o=!0},p:z,i(s){o||(i(a.$$.fragment,s),o=!0)},o(s){m(a.$$.fragment,s),o=!1},d(s){s&&p(e),s&&p(n),h(a,s)}}}class se extends x{constructor(e){super(),D(this,e,null,Y,w,{})}}export{se as default};
