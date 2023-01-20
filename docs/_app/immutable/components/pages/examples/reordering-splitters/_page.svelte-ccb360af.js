import{S as x,i as H,s as M,U,k as A,q as y,a as h,w as d,l as E,m as N,r as b,h as u,c as g,x as k,b as $,C as R,y as S,f as _,t as m,z as v,e as w,g as V,ac as j,d as D,V as F,ad as G,p as C,u as I}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as J}from"../../../../chunks/CodeArea-5e3138e2.js";import{B as K}from"../../../../chunks/Button-881cd9b6.js";function z(i,e,a){const t=i.slice();return t[3]=e[a],t}function L(i){let e;return{c(){e=y("Switch")},l(a){e=b(a,"Switch")},m(a,t){$(a,e,t)},d(a){a&&u(e)}}}function O(i){let e,a=i[3].color+"",t,c;return{c(){e=A("span"),t=y(a),c=h(),this.h()},l(s){e=E(s,"SPAN",{});var n=N(e);t=b(n,a),n.forEach(u),c=g(s),this.h()},h(){C(e,"color",i[3].color)},m(s,n){$(s,e,n),R(e,t),$(s,c,n)},p(s,n){n&1&&a!==(a=s[3].color+"")&&I(t,a),n&1&&C(e,"color",s[3].color)},d(s){s&&u(e),s&&u(c)}}}function q(i,e){let a,t,c;return t=new F({props:{minSize:10,$$slots:{default:[O]},$$scope:{ctx:e}}}),{key:i,first:null,c(){a=w(),d(t.$$.fragment),this.h()},l(s){a=w(),k(t.$$.fragment,s),this.h()},h(){this.first=a},m(s,n){$(s,a,n),S(t,s,n),c=!0},p(s,n){e=s;const o={};n&65&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(s){c||(_(t.$$.fragment,s),c=!0)},o(s){m(t.$$.fragment,s),c=!1},d(s){s&&u(a),v(t,s)}}}function Q(i){let e=[],a=new Map,t,c,s=i[0];const n=o=>o[3];for(let o=0;o<s.length;o+=1){let r=z(i,s,o),p=n(r);a.set(p,e[o]=q(p,r))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=w()},l(o){for(let r=0;r<e.length;r+=1)e[r].l(o);t=w()},m(o,r){for(let p=0;p<e.length;p+=1)e[p].m(o,r);$(o,t,r),c=!0},p(o,r){r&1&&(s=o[0],V(),e=j(e,r,n,1,o,s,a,t.parentNode,G,q,t,z),D())},i(o){if(!c){for(let r=0;r<s.length;r+=1)_(e[r]);c=!0}},o(o){for(let r=0;r<e.length;r+=1)m(e[r]);c=!1},d(o){for(let r=0;r<e.length;r+=1)e[r].d(o);o&&u(t)}}}function T(i){let e,a,t,c,s,n,o,r,p;return c=new K({props:{$$slots:{default:[L]},$$scope:{ctx:i}}}),c.$on("click",i[2]),n=new U({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:i}}}),r=new J({props:{id:"reordering_splitters",code:i[1]}}),{c(){e=A("h2"),a=y("Reordering Splitters"),t=h(),d(c.$$.fragment),s=h(),d(n.$$.fragment),o=h(),d(r.$$.fragment)},l(l){e=E(l,"H2",{});var f=N(e);a=b(f,"Reordering Splitters"),f.forEach(u),t=g(l),k(c.$$.fragment,l),s=g(l),k(n.$$.fragment,l),o=g(l),k(r.$$.fragment,l)},m(l,f){$(l,e,f),R(e,a),$(l,t,f),S(c,l,f),$(l,s,f),S(n,l,f),$(l,o,f),S(r,l,f),p=!0},p(l,[f]){const P={};f&64&&(P.$$scope={dirty:f,ctx:l}),c.$set(P);const B={};f&65&&(B.$$scope={dirty:f,ctx:l}),n.$set(B)},i(l){p||(_(c.$$.fragment,l),_(n.$$.fragment,l),_(r.$$.fragment,l),p=!0)},o(l){m(c.$$.fragment,l),m(n.$$.fragment,l),m(r.$$.fragment,l),p=!1},d(l){l&&u(e),l&&u(t),v(c,l),l&&u(s),v(n,l),l&&u(o),v(r,l)}}}function W(i,e,a){let t=[{color:"red"},{color:"blue"}];return[t,`
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
</Splitpanes>`,()=>{const n=t[0];a(0,t[0]=t[1],t),a(0,t[1]=n,t)}]}class ee extends x{constructor(e){super(),H(this,e,W,T,M,{})}}export{ee as default};
