import{S as x,i as H,s as M,k as A,q as y,a as h,w as d,l as E,m as N,r as b,h as u,c as g,x as S,b as $,C as R,y as k,f as m,t as _,z as v,e as w,g as j,ad as D,d as F,ae as G,p as C,u as I}from"../../../../chunks/index-5c227a2d.js";import{S as J,P as K}from"../../../../chunks/Pane-462d9bc5.js";import{C as L}from"../../../../chunks/CodeArea-89796faf.js";import{B as O}from"../../../../chunks/Button-d5e6a969.js";function z(c,e,a){const t=c.slice();return t[3]=e[a],t}function Q(c){let e;return{c(){e=y("Switch")},l(a){e=b(a,"Switch")},m(a,t){$(a,e,t)},d(a){a&&u(e)}}}function T(c){let e,a=c[3].color+"",t,i;return{c(){e=A("span"),t=y(a),i=h(),this.h()},l(s){e=E(s,"SPAN",{});var n=N(e);t=b(n,a),n.forEach(u),i=g(s),this.h()},h(){C(e,"color",c[3].color)},m(s,n){$(s,e,n),R(e,t),$(s,i,n)},p(s,n){n&1&&a!==(a=s[3].color+"")&&I(t,a),n&1&&C(e,"color",s[3].color)},d(s){s&&u(e),s&&u(i)}}}function q(c,e){let a,t,i;return t=new K({props:{minSize:10,$$slots:{default:[T]},$$scope:{ctx:e}}}),{key:c,first:null,c(){a=w(),d(t.$$.fragment),this.h()},l(s){a=w(),S(t.$$.fragment,s),this.h()},h(){this.first=a},m(s,n){$(s,a,n),k(t,s,n),i=!0},p(s,n){e=s;const o={};n&65&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(s){i||(m(t.$$.fragment,s),i=!0)},o(s){_(t.$$.fragment,s),i=!1},d(s){s&&u(a),v(t,s)}}}function U(c){let e=[],a=new Map,t,i,s=c[0];const n=o=>o[3];for(let o=0;o<s.length;o+=1){let r=z(c,s,o),p=n(r);a.set(p,e[o]=q(p,r))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=w()},l(o){for(let r=0;r<e.length;r+=1)e[r].l(o);t=w()},m(o,r){for(let p=0;p<e.length;p+=1)e[p].m(o,r);$(o,t,r),i=!0},p(o,r){r&1&&(s=o[0],j(),e=D(e,r,n,1,o,s,a,t.parentNode,G,q,t,z),F())},i(o){if(!i){for(let r=0;r<s.length;r+=1)m(e[r]);i=!0}},o(o){for(let r=0;r<e.length;r+=1)_(e[r]);i=!1},d(o){for(let r=0;r<e.length;r+=1)e[r].d(o);o&&u(t)}}}function V(c){let e,a,t,i,s,n,o,r,p;return i=new O({props:{$$slots:{default:[Q]},$$scope:{ctx:c}}}),i.$on("click",c[2]),n=new J({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:c}}}),r=new L({props:{id:"reordering_splitters",code:c[1]}}),{c(){e=A("h2"),a=y("Reordering Splitters"),t=h(),d(i.$$.fragment),s=h(),d(n.$$.fragment),o=h(),d(r.$$.fragment)},l(l){e=E(l,"H2",{});var f=N(e);a=b(f,"Reordering Splitters"),f.forEach(u),t=g(l),S(i.$$.fragment,l),s=g(l),S(n.$$.fragment,l),o=g(l),S(r.$$.fragment,l)},m(l,f){$(l,e,f),R(e,a),$(l,t,f),k(i,l,f),$(l,s,f),k(n,l,f),$(l,o,f),k(r,l,f),p=!0},p(l,[f]){const P={};f&64&&(P.$$scope={dirty:f,ctx:l}),i.$set(P);const B={};f&65&&(B.$$scope={dirty:f,ctx:l}),n.$set(B)},i(l){p||(m(i.$$.fragment,l),m(n.$$.fragment,l),m(r.$$.fragment,l),p=!0)},o(l){_(i.$$.fragment,l),_(n.$$.fragment,l),_(r.$$.fragment,l),p=!1},d(l){l&&u(e),l&&u(t),v(i,l),l&&u(s),v(n,l),l&&u(o),v(r,l)}}}function W(c,e,a){let t=[{color:"red"},{color:"blue"}];return[t,`
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
</Splitpanes>`,()=>{const n=t[0];a(0,t[0]=t[1],t),a(0,t[1]=n,t)}]}class te extends x{constructor(e){super(),H(this,e,W,V,M,{})}}export{te as default};
