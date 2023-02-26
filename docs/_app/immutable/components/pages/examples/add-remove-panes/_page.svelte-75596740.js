import{S as B,i as R,s as x,Q as $,a as d,R as _,f as b,T as g,j as f,n as i,o as m,V as h,g as c,L as E,M as N,D as P,$ as y,a0 as z,J as C,e as D,b as T,d as M,k as V,I as O}from"../../../../chunks/external-a03e8ebe.js";import{E as j}from"../../../../chunks/ExampleArea-f8063daf.js";import{S as q,P as H}from"../../../../chunks/svelte-splitpanes-e7a119d8.js";import{B as k}from"../../../../chunks/Button-18f509b2.js";function S(p,e,o){const a=p.slice();return a[4]=e[o],a[6]=o,a}function I(p){let e;return{c(){e=E("+ ADD PANE")},l(o){e=N(o,"+ ADD PANE")},m(o,a){f(o,e,a)},d(o){o&&c(e)}}}function J(p){let e;return{c(){e=E("- REMOVE PANE")},l(o){e=N(o,"- REMOVE PANE")},m(o,a){f(o,e,a)},d(o){o&&c(e)}}}function L(p){let e,o=p[6]+1+"",a,n;return{c(){e=D("span"),a=E(o),n=d()},l(r){e=T(r,"SPAN",{});var s=M(e);a=N(s,o),s.forEach(c),n=b(r)},m(r,s){f(r,e,s),V(e,a),f(r,n,s)},p:O,d(r){r&&c(e),r&&c(n)}}}function w(p){let e,o;return e=new H({props:{minSize:10,$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){$(e.$$.fragment)},l(a){_(e.$$.fragment,a)},m(a,n){g(e,a,n),o=!0},p(a,n){const r={};n&128&&(r.$$scope={dirty:n,ctx:a}),e.$set(r)},i(a){o||(i(e.$$.fragment,a),o=!0)},o(a){m(e.$$.fragment,a),o=!1},d(a){h(e,a)}}}function Q(p){let e,o,a={length:p[0]},n=[];for(let s=0;s<a.length;s+=1)n[s]=w(S(p,a,s));const r=s=>m(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=P()},l(s){for(let t=0;t<n.length;t+=1)n[t].l(s);e=P()},m(s,t){for(let l=0;l<n.length;l+=1)n[l].m(s,t);f(s,e,t),o=!0},p(s,t){if(t&1){a={length:s[0]};let l;for(l=0;l<a.length;l+=1){const u=S(s,a,l);n[l]?(n[l].p(u,t),i(n[l],1)):(n[l]=w(u),n[l].c(),i(n[l],1),n[l].m(e.parentNode,e))}for(y(),l=a.length;l<n.length;l+=1)r(l);z()}},i(s){if(!o){for(let t=0;t<a.length;t+=1)i(n[t]);o=!0}},o(s){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)m(n[t]);o=!1},d(s){C(n,s),s&&c(e)}}}function F(p){let e,o,a,n,r,s;return e=new k({props:{$$slots:{default:[I]},$$scope:{ctx:p}}}),e.$on("click",p[2]),a=new k({props:{disabled:!p[1],$$slots:{default:[J]},$$scope:{ctx:p}}}),a.$on("click",p[3]),r=new q({props:{style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:p}}}),{c(){$(e.$$.fragment),o=d(),$(a.$$.fragment),n=d(),$(r.$$.fragment)},l(t){_(e.$$.fragment,t),o=b(t),_(a.$$.fragment,t),n=b(t),_(r.$$.fragment,t)},m(t,l){g(e,t,l),f(t,o,l),g(a,t,l),f(t,n,l),g(r,t,l),s=!0},p(t,[l]){const u={};l&128&&(u.$$scope={dirty:l,ctx:t}),e.$set(u);const v={};l&2&&(v.disabled=!t[1]),l&128&&(v.$$scope={dirty:l,ctx:t}),a.$set(v);const A={};l&129&&(A.$$scope={dirty:l,ctx:t}),r.$set(A)},i(t){s||(i(e.$$.fragment,t),i(a.$$.fragment,t),i(r.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),m(r.$$.fragment,t),s=!1},d(t){h(e,t),t&&c(o),h(a,t),t&&c(n),h(r,t)}}}function G(p,e,o){let a,n=3;const r=()=>{o(0,n++,n)},s=()=>{a&&o(0,n--,n)};return p.$$.update=()=>{p.$$.dirty&1&&o(1,a=n>0)},[n,a,r,s]}class K extends B{constructor(e){super(),R(this,e,G,F,x,{})}}const U=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let panesNumber = 3;
	$: allowToRemove = panesNumber > 0;
<\/script>

<Button
	on:click={() => {
		panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={!allowToRemove}
	on:click={() => {
		if (allowToRemove) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,W="../../src/routes/examples/add-remove-panes/code.svelte",X={id:W,code:U,component:K};function Y(p){let e,o,a,n,r;return n=new j({props:{example:X}}),{c(){e=D("h2"),o=E("Adding and removing panes programmatically"),a=d(),$(n.$$.fragment)},l(s){e=T(s,"H2",{});var t=M(e);o=N(t,"Adding and removing panes programmatically"),t.forEach(c),a=b(s),_(n.$$.fragment,s)},m(s,t){f(s,e,t),V(e,o),f(s,a,t),g(n,s,t),r=!0},p:O,i(s){r||(i(n.$$.fragment,s),r=!0)},o(s){m(n.$$.fragment,s),r=!1},d(s){s&&c(e),s&&c(a),h(n,s)}}}class se extends B{constructor(e){super(),R(this,e,null,Y,x,{})}}export{se as default};
