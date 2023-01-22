import{S as q,i as G,s as H,e as R,P as w,f as h,z as d,h as E,j as N,Q as P,l as $,k as g,A as S,o as u,p as j,B as k,t as m,b as _,C as v,G as b,$ as M,ab as Q,a0 as T,ac as x,T as C,R as D}from"../../../../chunks/external-069c0b55.js";import{S as F,P as I}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as J}from"../../../../chunks/CodeArea-8a6a8f55.js";import{B as K}from"../../../../chunks/Button-c1406589.js";function z(c,e,a){const t=c.slice();return t[3]=e[a],t}function L(c){let e;return{c(){e=w("Switch")},l(a){e=P(a,"Switch")},m(a,t){u(a,e,t)},d(a){a&&$(e)}}}function O(c){let e,a=c[3].color+"",t,i;return{c(){e=R("span"),t=w(a),i=h(),this.h()},l(s){e=E(s,"SPAN",{});var n=N(e);t=P(n,a),n.forEach($),i=g(s),this.h()},h(){C(e,"color",c[3].color)},m(s,n){u(s,e,n),j(e,t),u(s,i,n)},p(s,n){n&1&&a!==(a=s[3].color+"")&&D(t,a),n&1&&C(e,"color",s[3].color)},d(s){s&&$(e),s&&$(i)}}}function A(c,e){let a,t,i;return t=new I({props:{minSize:10,$$slots:{default:[O]},$$scope:{ctx:e}}}),{key:c,first:null,c(){a=b(),d(t.$$.fragment),this.h()},l(s){a=b(),S(t.$$.fragment,s),this.h()},h(){this.first=a},m(s,n){u(s,a,n),k(t,s,n),i=!0},p(s,n){e=s;const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(s){i||(m(t.$$.fragment,s),i=!0)},o(s){_(t.$$.fragment,s),i=!1},d(s){s&&$(a),v(t,s)}}}function U(c){let e=[],a=new Map,t,i,s=c[0];const n=r=>r[3];for(let r=0;r<s.length;r+=1){let o=z(c,s,r),p=n(o);a.set(p,e[r]=A(p,o))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=b()},l(r){for(let o=0;o<e.length;o+=1)e[o].l(r);t=b()},m(r,o){for(let p=0;p<e.length;p+=1)e[p].m(r,o);u(r,t,o),i=!0},p(r,o){o&1&&(s=r[0],M(),e=Q(e,o,n,1,r,s,a,t.parentNode,x,A,t,z),T())},i(r){if(!i){for(let o=0;o<s.length;o+=1)m(e[o]);i=!0}},o(r){for(let o=0;o<e.length;o+=1)_(e[o]);i=!1},d(r){for(let o=0;o<e.length;o+=1)e[o].d(r);r&&$(t)}}}function V(c){let e,a,t,i,s,n,r,o,p;return i=new K({props:{$$slots:{default:[L]},$$scope:{ctx:c}}}),i.$on("click",c[2]),n=new F({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:c}}}),o=new J({props:{id:"reordering_splitters",code:c[1]}}),{c(){e=R("h2"),a=w("Reordering Splitters"),t=h(),d(i.$$.fragment),s=h(),d(n.$$.fragment),r=h(),d(o.$$.fragment)},l(l){e=E(l,"H2",{});var f=N(e);a=P(f,"Reordering Splitters"),f.forEach($),t=g(l),S(i.$$.fragment,l),s=g(l),S(n.$$.fragment,l),r=g(l),S(o.$$.fragment,l)},m(l,f){u(l,e,f),j(e,a),u(l,t,f),k(i,l,f),u(l,s,f),k(n,l,f),u(l,r,f),k(o,l,f),p=!0},p(l,[f]){const y={};f&64&&(y.$$scope={dirty:f,ctx:l}),i.$set(y);const B={};f&65&&(B.$$scope={dirty:f,ctx:l}),n.$set(B)},i(l){p||(m(i.$$.fragment,l),m(n.$$.fragment,l),m(o.$$.fragment,l),p=!0)},o(l){_(i.$$.fragment,l),_(n.$$.fragment,l),_(o.$$.fragment,l),p=!1},d(l){l&&$(e),l&&$(t),v(i,l),l&&$(s),v(n,l),l&&$(r),v(o,l)}}}function W(c,e,a){let t=[{color:"red"},{color:"blue"}];return[t,`
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
