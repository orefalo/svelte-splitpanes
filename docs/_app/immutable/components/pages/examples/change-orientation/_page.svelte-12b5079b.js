import{S as J,i as K,s as L,U as M,k as B,q as g,a as S,w as P,l as T,m as D,r as d,h as f,c as w,x as H,b as p,C as z,y as C,f as k,t as b,z as E,u as G,e as j,D as I,E as O,V as Q}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as X}from"../../../../chunks/CodeArea-5e3138e2.js";import{B as F}from"../../../../chunks/Button-881cd9b6.js";function Y(a,l,r){const e=a.slice();return e[5]=l[r],e[7]=r,e}function Z(a){let l=a[0]?"Turn to Vertical":"Turn to Horizontal",r;return{c(){r=g(l)},l(e){r=d(e,l)},m(e,n){p(e,r,n)},p(e,n){n&1&&l!==(l=e[0]?"Turn to Vertical":"Turn to Horizontal")&&G(r,l)},d(e){e&&f(r)}}}function tt(a){let l=a[1]?"Hide first splitter":"Show first Splitter",r;return{c(){r=g(l)},l(e){r=d(e,l)},m(e,n){p(e,r,n)},p(e,n){n&2&&l!==(l=e[1]?"Hide first splitter":"Show first Splitter")&&G(r,l)},d(e){e&&f(r)}}}function et(a){let l,r=a[7]+1+"",e,n;return{c(){l=B("span"),e=g(r),n=S()},l(i){l=T(i,"SPAN",{});var s=D(l);e=d(s,r),s.forEach(f),n=w(i)},m(i,s){p(i,l,s),z(l,e),p(i,n,s)},p:I,d(i){i&&f(l),i&&f(n)}}}function lt(a){let l,r;return l=new Q({props:{minSize:5,$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){P(l.$$.fragment)},l(e){H(l.$$.fragment,e)},m(e,n){C(l,e,n),r=!0},p(e,n){const i={};n&256&&(i.$$scope={dirty:n,ctx:e}),l.$set(i)},i(e){r||(k(l.$$.fragment,e),r=!0)},o(e){b(l.$$.fragment,e),r=!1},d(e){E(l,e)}}}function nt(a){let l,r,e={length:3},n=[];for(let i=0;i<e.length;i+=1)n[i]=lt(Y(a,e,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();l=j()},l(i){for(let s=0;s<n.length;s+=1)n[s].l(i);l=j()},m(i,s){for(let c=0;c<n.length;c+=1)n[c].m(i,s);p(i,l,s),r=!0},p:I,i(i){if(!r){for(let s=0;s<e.length;s+=1)k(n[s]);r=!0}},o(i){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)b(n[s]);r=!1},d(i){O(n,i),i&&f(l)}}}function it(a){let l,r,e,n,i,s,c,N,R,U,x,u,V,$,q,h,y,m,A;return u=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}}),u.$on("click",a[3]),$=new F({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),$.$on("click",a[4]),h=new M({props:{class:"default-theme",style:"height: 400px",firstSplitter:a[1],horizontal:a[0],$$slots:{default:[nt]},$$scope:{ctx:a}}}),m=new X({props:{id:"change_orientation",code:a[2]}}),{c(){l=B("h2"),r=g("Change orientation & first splitter"),e=S(),n=B("p"),i=g("When changing direction, all the panes current width or height will flip to adapt to the new layout."),s=S(),c=B("p"),N=g("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),R=B("br"),U=g(`
	The first splitter does not allow to resize the next pane.`),x=S(),P(u.$$.fragment),V=S(),P($.$$.fragment),q=S(),P(h.$$.fragment),y=S(),P(m.$$.fragment)},l(t){l=T(t,"H2",{});var o=D(l);r=d(o,"Change orientation & first splitter"),o.forEach(f),e=w(t),n=T(t,"P",{});var v=D(n);i=d(v,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),v.forEach(f),s=w(t),c=T(t,"P",{});var _=D(c);N=d(_,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),R=T(_,"BR",{}),U=d(_,`
	The first splitter does not allow to resize the next pane.`),_.forEach(f),x=w(t),H(u.$$.fragment,t),V=w(t),H($.$$.fragment,t),q=w(t),H(h.$$.fragment,t),y=w(t),H(m.$$.fragment,t)},m(t,o){p(t,l,o),z(l,r),p(t,e,o),p(t,n,o),z(n,i),p(t,s,o),p(t,c,o),z(c,N),z(c,R),z(c,U),p(t,x,o),C(u,t,o),p(t,V,o),C($,t,o),p(t,q,o),C(h,t,o),p(t,y,o),C(m,t,o),A=!0},p(t,[o]){const v={};o&257&&(v.$$scope={dirty:o,ctx:t}),u.$set(v);const _={};o&258&&(_.$$scope={dirty:o,ctx:t}),$.$set(_);const W={};o&2&&(W.firstSplitter=t[1]),o&1&&(W.horizontal=t[0]),o&256&&(W.$$scope={dirty:o,ctx:t}),h.$set(W)},i(t){A||(k(u.$$.fragment,t),k($.$$.fragment,t),k(h.$$.fragment,t),k(m.$$.fragment,t),A=!0)},o(t){b(u.$$.fragment,t),b($.$$.fragment,t),b(h.$$.fragment,t),b(m.$$.fragment,t),A=!1},d(t){t&&f(l),t&&f(e),t&&f(n),t&&f(s),t&&f(c),t&&f(x),E(u,t),t&&f(V),E($,t),t&&f(q),E(h,t),t&&f(y),E(m,t)}}}function rt(a,l,r){let e=!1,n=!1;return[e,n,`
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
</Splitpanes>`,()=>{r(0,e=!e)},()=>{r(1,n=!n)}]}class ft extends J{constructor(l){super(),K(this,l,rt,it,L,{})}}export{ft as default};
