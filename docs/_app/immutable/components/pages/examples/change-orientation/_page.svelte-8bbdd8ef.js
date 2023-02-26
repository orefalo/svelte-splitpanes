import{S as j,i as q,s as y,Q as B,a as d,R as P,f as z,T,j as c,n as k,o as b,V as H,g as f,L as h,M as _,N as D,D as R,I as A,J as I,e as v,b as x,d as V,k as w}from"../../../../chunks/external-0cbe0899.js";import{E as J}from"../../../../chunks/ExampleArea-d9e86d6b.js";import{S as L,P as M}from"../../../../chunks/svelte-splitpanes-1a0ab212.js";import{B as W}from"../../../../chunks/Button-c6153949.js";function Q(a,e,i){const t=a.slice();return t[4]=e[i],t[6]=i,t}function F(a){let e=a[0]?"Turn to Vertical":"Turn to Horizontal",i;return{c(){i=h(e)},l(t){i=_(t,e)},m(t,n){c(t,i,n)},p(t,n){n&1&&e!==(e=t[0]?"Turn to Vertical":"Turn to Horizontal")&&D(i,e)},d(t){t&&f(i)}}}function G(a){let e=a[1]?"Hide first splitter":"Show first Splitter",i;return{c(){i=h(e)},l(t){i=_(t,e)},m(t,n){c(t,i,n)},p(t,n){n&2&&e!==(e=t[1]?"Hide first splitter":"Show first Splitter")&&D(i,e)},d(t){t&&f(i)}}}function K(a){let e,i=a[6]+1+"",t,n;return{c(){e=v("span"),t=h(i),n=d()},l(l){e=x(l,"SPAN",{});var o=V(e);t=_(o,i),o.forEach(f),n=z(l)},m(l,o){c(l,e,o),w(e,t),c(l,n,o)},p:A,d(l){l&&f(e),l&&f(n)}}}function O(a){let e,i;return e=new M({props:{minSize:5,$$slots:{default:[K]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,n){T(e,t,n),i=!0},p(t,n){const l={};n&128&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){i||(k(e.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),i=!1},d(t){H(e,t)}}}function U(a){let e,i,t={length:3},n=[];for(let l=0;l<t.length;l+=1)n[l]=O(Q(a,t,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let o=0;o<n.length;o+=1)n[o].l(l);e=R()},m(l,o){for(let r=0;r<n.length;r+=1)n[r].m(l,o);c(l,e,o),i=!0},p:A,i(l){if(!i){for(let o=0;o<t.length;o+=1)k(n[o]);i=!0}},o(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)b(n[o]);i=!1},d(l){I(n,l),l&&f(e)}}}function X(a){let e,i,t,n,l,o;return e=new W({props:{$$slots:{default:[F]},$$scope:{ctx:a}}}),e.$on("click",a[2]),t=new W({props:{$$slots:{default:[G]},$$scope:{ctx:a}}}),t.$on("click",a[3]),l=new L({props:{style:"height: 400px",firstSplitter:a[1],horizontal:a[0],$$slots:{default:[U]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment),i=d(),B(t.$$.fragment),n=d(),B(l.$$.fragment)},l(r){P(e.$$.fragment,r),i=z(r),P(t.$$.fragment,r),n=z(r),P(l.$$.fragment,r)},m(r,p){T(e,r,p),c(r,i,p),T(t,r,p),c(r,n,p),T(l,r,p),o=!0},p(r,[p]){const g={};p&129&&(g.$$scope={dirty:p,ctx:r}),e.$set(g);const S={};p&130&&(S.$$scope={dirty:p,ctx:r}),t.$set(S);const $={};p&2&&($.firstSplitter=r[1]),p&1&&($.horizontal=r[0]),p&128&&($.$$scope={dirty:p,ctx:r}),l.$set($)},i(r){o||(k(e.$$.fragment,r),k(t.$$.fragment,r),k(l.$$.fragment,r),o=!0)},o(r){b(e.$$.fragment,r),b(t.$$.fragment,r),b(l.$$.fragment,r),o=!1},d(r){H(e,r),r&&f(i),H(t,r),r&&f(n),H(l,r)}}}function Y(a,e,i){let t=!1,n=!1;return[t,n,()=>{i(0,t=!t)},()=>{i(1,n=!n)}]}class Z extends j{constructor(e){super(),q(this,e,Y,X,y,{})}}const tt=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let horizontal = false;
	let firstSplitter = false;
<\/script>

<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button
>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button
>
<Splitpanes style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,et="../../src/routes/examples/change-orientation/code.svelte",nt={id:et,code:tt,component:Z};function lt(a){let e,i,t,n,l,o,r,p,g,S,$,m,E;return m=new J({props:{example:nt}}),{c(){e=v("h2"),i=h("Change orientation & first splitter"),t=d(),n=v("p"),l=h("When changing direction, all the panes current width or height will flip to adapt to the new layout."),o=d(),r=v("p"),p=h("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),g=v("br"),S=h(`
	The first splitter does not allow to resize the next pane.`),$=d(),B(m.$$.fragment)},l(s){e=x(s,"H2",{});var u=V(e);i=_(u,"Change orientation & first splitter"),u.forEach(f),t=z(s),n=x(s,"P",{});var N=V(n);l=_(N,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),N.forEach(f),o=z(s),r=x(s,"P",{});var C=V(r);p=_(C,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),g=x(C,"BR",{}),S=_(C,`
	The first splitter does not allow to resize the next pane.`),C.forEach(f),$=z(s),P(m.$$.fragment,s)},m(s,u){c(s,e,u),w(e,i),c(s,t,u),c(s,n,u),w(n,l),c(s,o,u),c(s,r,u),w(r,p),w(r,g),w(r,S),c(s,$,u),T(m,s,u),E=!0},p:A,i(s){E||(k(m.$$.fragment,s),E=!0)},o(s){b(m.$$.fragment,s),E=!1},d(s){s&&f(e),s&&f(t),s&&f(n),s&&f(o),s&&f(r),s&&f($),H(m,s)}}}class at extends j{constructor(e){super(),q(this,e,null,lt,y,{})}}export{at as default};
