import{S as M,i as A,s as E,e as v,L as z,a as S,Q as o,b as y,d as w,M as I,g as i,f as P,R as u,j as m,k as C,T as _,n as c,o as d,V as g,O as b,I as j}from"../../../../../chunks/external-b827b9fd.js";import{S as k,P as h}from"../../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as q}from"../../../../../chunks/CodeArea-6af4aaf3.js";function H(l){let s,r;return{c(){s=v("span"),r=z("I have a snap size of 10%"),this.h()},l(a){s=y(a,"SPAN",{style:!0});var n=w(s);r=I(n,"I have a snap size of 10%"),n.forEach(i),this.h()},h(){b(s,"font-size","20px")},m(a,n){m(a,s,n),C(s,r)},p:j,d(a){a&&i(s)}}}function L(l){let s,r,a,n,f,$;return s=new h({}),a=new h({props:{snapSize:10,$$slots:{default:[H]},$$scope:{ctx:l}}}),f=new h({}),{c(){o(s.$$.fragment),r=S(),o(a.$$.fragment),n=S(),o(f.$$.fragment)},l(t){u(s.$$.fragment,t),r=P(t),u(a.$$.fragment,t),n=P(t),u(f.$$.fragment,t)},m(t,e){_(s,t,e),m(t,r,e),_(a,t,e),m(t,n,e),_(f,t,e),$=!0},p(t,e){const p={};e&2&&(p.$$scope={dirty:e,ctx:t}),a.$set(p)},i(t){$||(c(s.$$.fragment,t),c(a.$$.fragment,t),c(f.$$.fragment,t),$=!0)},o(t){d(s.$$.fragment,t),d(a.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){g(s,t),t&&i(r),g(a,t),t&&i(n),g(f,t)}}}function N(l){let s,r,a,n,f,$,t;return n=new k({props:{style:"height: 400px",$$slots:{default:[L]},$$scope:{ctx:l}}}),$=new q({props:{id:"middle_snap",code:l[0]}}),{c(){s=v("h2"),r=z("Middle snap"),a=S(),o(n.$$.fragment),f=S(),o($.$$.fragment)},l(e){s=y(e,"H2",{});var p=w(s);r=I(p,"Middle snap"),p.forEach(i),a=P(e),u(n.$$.fragment,e),f=P(e),u($.$$.fragment,e)},m(e,p){m(e,s,p),C(s,r),m(e,a,p),_(n,e,p),m(e,f,p),_($,e,p),t=!0},p(e,[p]){const x={};p&2&&(x.$$scope={dirty:p,ctx:e}),n.$set(x)},i(e){t||(c(n.$$.fragment,e),c($.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),d($.$$.fragment,e),t=!1},d(e){e&&i(s),e&&i(a),g(n,e),e&&i(f),g($,e)}}}function O(l){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>	
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>`]}class V extends M{constructor(s){super(),A(this,s,O,N,E,{})}}export{V as default};
