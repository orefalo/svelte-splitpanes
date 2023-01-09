import{S as q,i as A,s as E,k as z,q as v,a as S,w as o,l as y,m as w,r as C,h as i,c as h,x as u,b as m,C as I,y as _,f as c,t as d,z as g,p as M,B as b}from"../../../../../chunks/index-7f92752a.js";import{S as k,P as x}from"../../../../../chunks/Pane-78ab3306.js";import{C as B}from"../../../../../chunks/CodeArea-fc163efa.js";function H(l){let s,r;return{c(){s=z("span"),r=v("I have a snap size of 10%"),this.h()},l(a){s=y(a,"SPAN",{style:!0});var n=w(s);r=C(n,"I have a snap size of 10%"),n.forEach(i),this.h()},h(){M(s,"font-size","20px")},m(a,n){m(a,s,n),I(s,r)},p:b,d(a){a&&i(s)}}}function N(l){let s,r,a,n,f,$;return s=new x({}),a=new x({props:{snapSize:10,$$slots:{default:[H]},$$scope:{ctx:l}}}),f=new x({}),{c(){o(s.$$.fragment),r=S(),o(a.$$.fragment),n=S(),o(f.$$.fragment)},l(t){u(s.$$.fragment,t),r=h(t),u(a.$$.fragment,t),n=h(t),u(f.$$.fragment,t)},m(t,e){_(s,t,e),m(t,r,e),_(a,t,e),m(t,n,e),_(f,t,e),$=!0},p(t,e){const p={};e&2&&(p.$$scope={dirty:e,ctx:t}),a.$set(p)},i(t){$||(c(s.$$.fragment,t),c(a.$$.fragment,t),c(f.$$.fragment,t),$=!0)},o(t){d(s.$$.fragment,t),d(a.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){g(s,t),t&&i(r),g(a,t),t&&i(n),g(f,t)}}}function j(l){let s,r,a,n,f,$,t;return n=new k({props:{style:"height: 400px",$$slots:{default:[N]},$$scope:{ctx:l}}}),$=new B({props:{id:"middle_snap",code:l[0]}}),{c(){s=z("h2"),r=v("Middle snap"),a=S(),o(n.$$.fragment),f=S(),o($.$$.fragment)},l(e){s=y(e,"H2",{});var p=w(s);r=C(p,"Middle snap"),p.forEach(i),a=h(e),u(n.$$.fragment,e),f=h(e),u($.$$.fragment,e)},m(e,p){m(e,s,p),I(s,r),m(e,a,p),_(n,e,p),m(e,f,p),_($,e,p),t=!0},p(e,[p]){const P={};p&2&&(P.$$scope={dirty:p,ctx:e}),n.$set(P)},i(e){t||(c(n.$$.fragment,e),c($.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),d($.$$.fragment,e),t=!1},d(e){e&&i(s),e&&i(a),g(n,e),e&&i(f),g($,e)}}}function D(l){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>	
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>`]}class K extends q{constructor(s){super(),A(this,s,D,j,E,{})}}export{K as default};
