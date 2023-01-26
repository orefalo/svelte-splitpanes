import{S as j,i as q,s as D,e as z,L as b,a as h,Q as d,b as A,d as E,M as w,g as $,f as g,R as k,j as u,k as M,T as S,n as m,o as _,V as v,D as P,$ as H,ab as L,a0 as O,ac as Q,O as C,N as T}from"../../../../chunks/external-b827b9fd.js";import{S as V,P as x}from"../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as F}from"../../../../chunks/CodeArea-6af4aaf3.js";import{B as G}from"../../../../chunks/Button-1988e876.js";function N(i,e,a){const t=i.slice();return t[3]=e[a],t}function I(i){let e;return{c(){e=b("Switch")},l(a){e=w(a,"Switch")},m(a,t){u(a,e,t)},d(a){a&&$(e)}}}function J(i){let e,a=i[3].color+"",t,c;return{c(){e=z("span"),t=b(a),c=h(),this.h()},l(s){e=A(s,"SPAN",{});var n=E(e);t=w(n,a),n.forEach($),c=g(s),this.h()},h(){C(e,"color",i[3].color)},m(s,n){u(s,e,n),M(e,t),u(s,c,n)},p(s,n){n&1&&a!==(a=s[3].color+"")&&T(t,a),n&1&&C(e,"color",s[3].color)},d(s){s&&$(e),s&&$(c)}}}function R(i,e){let a,t,c;return t=new x({props:{minSize:10,$$slots:{default:[J]},$$scope:{ctx:e}}}),{key:i,first:null,c(){a=P(),d(t.$$.fragment),this.h()},l(s){a=P(),k(t.$$.fragment,s),this.h()},h(){this.first=a},m(s,n){u(s,a,n),S(t,s,n),c=!0},p(s,n){e=s;const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(s){c||(m(t.$$.fragment,s),c=!0)},o(s){_(t.$$.fragment,s),c=!1},d(s){s&&$(a),v(t,s)}}}function K(i){let e=[],a=new Map,t,c,s=i[0];const n=r=>r[3];for(let r=0;r<s.length;r+=1){let l=N(i,s,r),p=n(l);a.set(p,e[r]=R(p,l))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=P()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);t=P()},m(r,l){for(let p=0;p<e.length;p+=1)e[p].m(r,l);u(r,t,l),c=!0},p(r,l){l&1&&(s=r[0],H(),e=L(e,l,n,1,r,s,a,t.parentNode,Q,R,t,N),O())},i(r){if(!c){for(let l=0;l<s.length;l+=1)m(e[l]);c=!0}},o(r){for(let l=0;l<e.length;l+=1)_(e[l]);c=!1},d(r){for(let l=0;l<e.length;l+=1)e[l].d(r);r&&$(t)}}}function U(i){let e,a,t,c,s,n,r,l,p;return c=new G({props:{$$slots:{default:[I]},$$scope:{ctx:i}}}),c.$on("click",i[2]),n=new V({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[K]},$$scope:{ctx:i}}}),l=new F({props:{id:"reordering_panes",code:i[1]}}),{c(){e=z("h2"),a=b("Reordering Panes"),t=h(),d(c.$$.fragment),s=h(),d(n.$$.fragment),r=h(),d(l.$$.fragment)},l(o){e=A(o,"H2",{});var f=E(e);a=w(f,"Reordering Panes"),f.forEach($),t=g(o),k(c.$$.fragment,o),s=g(o),k(n.$$.fragment,o),r=g(o),k(l.$$.fragment,o)},m(o,f){u(o,e,f),M(e,a),u(o,t,f),S(c,o,f),u(o,s,f),S(n,o,f),u(o,r,f),S(l,o,f),p=!0},p(o,[f]){const y={};f&64&&(y.$$scope={dirty:f,ctx:o}),c.$set(y);const B={};f&65&&(B.$$scope={dirty:f,ctx:o}),n.$set(B)},i(o){p||(m(c.$$.fragment,o),m(n.$$.fragment,o),m(l.$$.fragment,o),p=!0)},o(o){_(c.$$.fragment,o),_(n.$$.fragment,o),_(l.$$.fragment,o),p=!1},d(o){o&&$(e),o&&$(t),v(c,o),o&&$(s),v(n,o),o&&$(r),v(l,o)}}}function W(i,e,a){let t=[{color:"red"},{color:"blue"}];return[t,`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let ordered = 3;
</script>
<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each ordered as val (val)}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>`,()=>{const n=t[0];a(0,t[0]=t[1],t),a(0,t[1]=n,t)}]}class te extends j{constructor(e){super(),q(this,e,W,U,D,{})}}export{te as default};
