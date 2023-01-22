import{S as I,i as M,s as E,e as z,P as v,f as P,z as o,h as y,j as w,Q as C,l as i,k as S,A as u,o as m,p as A,B as _,t as c,b as d,C as g,T as b,M as j}from"../../../../../chunks/external-069c0b55.js";import{S as k,P as h}from"../../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as q}from"../../../../../chunks/CodeArea-8a6a8f55.js";function B(l){let s,r;return{c(){s=z("span"),r=v("I have a snap size of 10%"),this.h()},l(a){s=y(a,"SPAN",{style:!0});var n=w(s);r=C(n,"I have a snap size of 10%"),n.forEach(i),this.h()},h(){b(s,"font-size","20px")},m(a,n){m(a,s,n),A(s,r)},p:j,d(a){a&&i(s)}}}function H(l){let s,r,a,n,f,$;return s=new h({}),a=new h({props:{snapSize:10,$$slots:{default:[B]},$$scope:{ctx:l}}}),f=new h({}),{c(){o(s.$$.fragment),r=P(),o(a.$$.fragment),n=P(),o(f.$$.fragment)},l(t){u(s.$$.fragment,t),r=S(t),u(a.$$.fragment,t),n=S(t),u(f.$$.fragment,t)},m(t,e){_(s,t,e),m(t,r,e),_(a,t,e),m(t,n,e),_(f,t,e),$=!0},p(t,e){const p={};e&2&&(p.$$scope={dirty:e,ctx:t}),a.$set(p)},i(t){$||(c(s.$$.fragment,t),c(a.$$.fragment,t),c(f.$$.fragment,t),$=!0)},o(t){d(s.$$.fragment,t),d(a.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){g(s,t),t&&i(r),g(a,t),t&&i(n),g(f,t)}}}function N(l){let s,r,a,n,f,$,t;return n=new k({props:{style:"height: 400px",$$slots:{default:[H]},$$scope:{ctx:l}}}),$=new q({props:{id:"middle_snap",code:l[0]}}),{c(){s=z("h2"),r=v("Middle snap"),a=P(),o(n.$$.fragment),f=P(),o($.$$.fragment)},l(e){s=y(e,"H2",{});var p=w(s);r=C(p,"Middle snap"),p.forEach(i),a=S(e),u(n.$$.fragment,e),f=S(e),u($.$$.fragment,e)},m(e,p){m(e,s,p),A(s,r),m(e,a,p),_(n,e,p),m(e,f,p),_($,e,p),t=!0},p(e,[p]){const x={};p&2&&(x.$$scope={dirty:p,ctx:e}),n.$set(x)},i(e){t||(c(n.$$.fragment,e),c($.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),d($.$$.fragment,e),t=!1},d(e){e&&i(s),e&&i(a),g(n,e),e&&i(f),g($,e)}}}function Q(l){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>	
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>`]}class G extends I{constructor(s){super(),M(this,s,Q,N,E,{})}}export{G as default};
