import{S as I,i as J,s as K,e as v,P as g,f as S,z as B,h as T,j,Q as d,l as f,k as w,A as H,o as p,p as z,B as C,t as k,b,C as E,R as D,G as M,M as F,N as L}from"../../../../chunks/external-069c0b55.js";import{S as O,P as U}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as X}from"../../../../chunks/CodeArea-8a6a8f55.js";import{B as Q}from"../../../../chunks/Button-c1406589.js";function Y(a,l,r){const e=a.slice();return e[5]=l[r],e[7]=r,e}function Z(a){let l=a[0]?"Turn to Vertical":"Turn to Horizontal",r;return{c(){r=g(l)},l(e){r=d(e,l)},m(e,n){p(e,r,n)},p(e,n){n&1&&l!==(l=e[0]?"Turn to Vertical":"Turn to Horizontal")&&D(r,l)},d(e){e&&f(r)}}}function tt(a){let l=a[1]?"Hide first splitter":"Show first Splitter",r;return{c(){r=g(l)},l(e){r=d(e,l)},m(e,n){p(e,r,n)},p(e,n){n&2&&l!==(l=e[1]?"Hide first splitter":"Show first Splitter")&&D(r,l)},d(e){e&&f(r)}}}function et(a){let l,r=a[7]+1+"",e,n;return{c(){l=v("span"),e=g(r),n=S()},l(i){l=T(i,"SPAN",{});var s=j(l);e=d(s,r),s.forEach(f),n=w(i)},m(i,s){p(i,l,s),z(l,e),p(i,n,s)},p:F,d(i){i&&f(l),i&&f(n)}}}function lt(a){let l,r;return l=new U({props:{minSize:5,$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){B(l.$$.fragment)},l(e){H(l.$$.fragment,e)},m(e,n){C(l,e,n),r=!0},p(e,n){const i={};n&256&&(i.$$scope={dirty:n,ctx:e}),l.$set(i)},i(e){r||(k(l.$$.fragment,e),r=!0)},o(e){b(l.$$.fragment,e),r=!1},d(e){E(l,e)}}}function nt(a){let l,r,e={length:3},n=[];for(let i=0;i<e.length;i+=1)n[i]=lt(Y(a,e,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();l=M()},l(i){for(let s=0;s<n.length;s+=1)n[s].l(i);l=M()},m(i,s){for(let c=0;c<n.length;c+=1)n[c].m(i,s);p(i,l,s),r=!0},p:F,i(i){if(!r){for(let s=0;s<e.length;s+=1)k(n[s]);r=!0}},o(i){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)b(n[s]);r=!1},d(i){L(n,i),i&&f(l)}}}function it(a){let l,r,e,n,i,s,c,q,y,G,x,$,A,u,V,h,N,m,R;return $=new Q({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}}),$.$on("click",a[3]),u=new Q({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),u.$on("click",a[4]),h=new O({props:{class:"default-theme",style:"height: 400px",firstSplitter:a[1],horizontal:a[0],$$slots:{default:[nt]},$$scope:{ctx:a}}}),m=new X({props:{id:"change_orientation",code:a[2]}}),{c(){l=v("h2"),r=g("Change orientation & first splitter"),e=S(),n=v("p"),i=g("When changing direction, all the panes current width or height will flip to adapt to the new layout."),s=S(),c=v("p"),q=g("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),y=v("br"),G=g(`
	The first splitter does not allow to resize the next pane.`),x=S(),B($.$$.fragment),A=S(),B(u.$$.fragment),V=S(),B(h.$$.fragment),N=S(),B(m.$$.fragment)},l(t){l=T(t,"H2",{});var o=j(l);r=d(o,"Change orientation & first splitter"),o.forEach(f),e=w(t),n=T(t,"P",{});var P=j(n);i=d(P,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),P.forEach(f),s=w(t),c=T(t,"P",{});var _=j(c);q=d(_,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),y=T(_,"BR",{}),G=d(_,`
	The first splitter does not allow to resize the next pane.`),_.forEach(f),x=w(t),H($.$$.fragment,t),A=w(t),H(u.$$.fragment,t),V=w(t),H(h.$$.fragment,t),N=w(t),H(m.$$.fragment,t)},m(t,o){p(t,l,o),z(l,r),p(t,e,o),p(t,n,o),z(n,i),p(t,s,o),p(t,c,o),z(c,q),z(c,y),z(c,G),p(t,x,o),C($,t,o),p(t,A,o),C(u,t,o),p(t,V,o),C(h,t,o),p(t,N,o),C(m,t,o),R=!0},p(t,[o]){const P={};o&257&&(P.$$scope={dirty:o,ctx:t}),$.$set(P);const _={};o&258&&(_.$$scope={dirty:o,ctx:t}),u.$set(_);const W={};o&2&&(W.firstSplitter=t[1]),o&1&&(W.horizontal=t[0]),o&256&&(W.$$scope={dirty:o,ctx:t}),h.$set(W)},i(t){R||(k($.$$.fragment,t),k(u.$$.fragment,t),k(h.$$.fragment,t),k(m.$$.fragment,t),R=!0)},o(t){b($.$$.fragment,t),b(u.$$.fragment,t),b(h.$$.fragment,t),b(m.$$.fragment,t),R=!1},d(t){t&&f(l),t&&f(e),t&&f(n),t&&f(s),t&&f(c),t&&f(x),E($,t),t&&f(A),E(u,t),t&&f(V),E(h,t),t&&f(N),E(m,t)}}}function rt(a,l,r){let e=!1,n=!1;return[e,n,`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let horizontal = false;
	let firstSplitter = false;
</script>
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
<Splitpanes class="default-theme" style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`,()=>{r(0,e=!e)},()=>{r(1,n=!n)}]}class pt extends I{constructor(l){super(),J(this,l,rt,it,K,{})}}export{pt as default};
