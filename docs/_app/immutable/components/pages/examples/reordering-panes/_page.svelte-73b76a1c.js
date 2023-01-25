import{S as q,i as G,s as H,e as R,P as b,f as h,z as d,h as E,j as N,Q as w,l as $,k as g,A as k,o as u,p as j,B as S,t as m,b as _,C as P,G as v,$ as M,ab as Q,a0 as T,ac as x,T as C,R as D}from"../../../../chunks/external-46145e60.js";import{S as F,P as I}from"../../../../chunks/svelte-splitpanes-316a4b8a.js";import{C as J}from"../../../../chunks/CodeArea-233b0951.js";import{B as K}from"../../../../chunks/Button-c759137b.js";function z(i,e,a){const t=i.slice();return t[3]=e[a],t}function L(i){let e;return{c(){e=b("Switch")},l(a){e=w(a,"Switch")},m(a,t){u(a,e,t)},d(a){a&&$(e)}}}function O(i){let e,a=i[3].color+"",t,c;return{c(){e=R("span"),t=b(a),c=h(),this.h()},l(s){e=E(s,"SPAN",{});var n=N(e);t=w(n,a),n.forEach($),c=g(s),this.h()},h(){C(e,"color",i[3].color)},m(s,n){u(s,e,n),j(e,t),u(s,c,n)},p(s,n){n&1&&a!==(a=s[3].color+"")&&D(t,a),n&1&&C(e,"color",s[3].color)},d(s){s&&$(e),s&&$(c)}}}function A(i,e){let a,t,c;return t=new I({props:{minSize:10,$$slots:{default:[O]},$$scope:{ctx:e}}}),{key:i,first:null,c(){a=v(),d(t.$$.fragment),this.h()},l(s){a=v(),k(t.$$.fragment,s),this.h()},h(){this.first=a},m(s,n){u(s,a,n),S(t,s,n),c=!0},p(s,n){e=s;const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(s){c||(m(t.$$.fragment,s),c=!0)},o(s){_(t.$$.fragment,s),c=!1},d(s){s&&$(a),P(t,s)}}}function U(i){let e=[],a=new Map,t,c,s=i[0];const n=r=>r[3];for(let r=0;r<s.length;r+=1){let l=z(i,s,r),p=n(l);a.set(p,e[r]=A(p,l))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=v()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);t=v()},m(r,l){for(let p=0;p<e.length;p+=1)e[p].m(r,l);u(r,t,l),c=!0},p(r,l){l&1&&(s=r[0],M(),e=Q(e,l,n,1,r,s,a,t.parentNode,x,A,t,z),T())},i(r){if(!c){for(let l=0;l<s.length;l+=1)m(e[l]);c=!0}},o(r){for(let l=0;l<e.length;l+=1)_(e[l]);c=!1},d(r){for(let l=0;l<e.length;l+=1)e[l].d(r);r&&$(t)}}}function V(i){let e,a,t,c,s,n,r,l,p;return c=new K({props:{$$slots:{default:[L]},$$scope:{ctx:i}}}),c.$on("click",i[2]),n=new F({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:i}}}),l=new J({props:{id:"reordering_panes",code:i[1]}}),{c(){e=R("h2"),a=b("Reordering Panes"),t=h(),d(c.$$.fragment),s=h(),d(n.$$.fragment),r=h(),d(l.$$.fragment)},l(o){e=E(o,"H2",{});var f=N(e);a=w(f,"Reordering Panes"),f.forEach($),t=g(o),k(c.$$.fragment,o),s=g(o),k(n.$$.fragment,o),r=g(o),k(l.$$.fragment,o)},m(o,f){u(o,e,f),j(e,a),u(o,t,f),S(c,o,f),u(o,s,f),S(n,o,f),u(o,r,f),S(l,o,f),p=!0},p(o,[f]){const y={};f&64&&(y.$$scope={dirty:f,ctx:o}),c.$set(y);const B={};f&65&&(B.$$scope={dirty:f,ctx:o}),n.$set(B)},i(o){p||(m(c.$$.fragment,o),m(n.$$.fragment,o),m(l.$$.fragment,o),p=!0)},o(o){_(c.$$.fragment,o),_(n.$$.fragment,o),_(l.$$.fragment,o),p=!1},d(o){o&&$(e),o&&$(t),P(c,o),o&&$(s),P(n,o),o&&$(r),P(l,o)}}}function W(i,e,a){let t=[{color:"red"},{color:"blue"}];return[t,`
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
</Splitpanes>`,()=>{const n=t[0];a(0,t[0]=t[1],t),a(0,t[1]=n,t)}]}class te extends q{constructor(e){super(),G(this,e,W,V,H,{})}}export{te as default};
