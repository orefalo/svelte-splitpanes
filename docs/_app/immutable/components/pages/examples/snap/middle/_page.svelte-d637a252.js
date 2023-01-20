import{S as q,i as A,s as E,U as M,k as P,q as v,a as h,w as o,l as y,m as w,r as C,h as i,c as x,x as u,b as m,C as I,y as _,f as c,t as d,z as g,V as S,p as b,D as k}from"../../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as D}from"../../../../../chunks/CodeArea-5e3138e2.js";function H(l){let s,r;return{c(){s=P("span"),r=v("I have a snap size of 10%"),this.h()},l(a){s=y(a,"SPAN",{style:!0});var n=w(s);r=C(n,"I have a snap size of 10%"),n.forEach(i),this.h()},h(){b(s,"font-size","20px")},m(a,n){m(a,s,n),I(s,r)},p:k,d(a){a&&i(s)}}}function N(l){let s,r,a,n,$,f;return s=new S({}),a=new S({props:{snapSize:10,$$slots:{default:[H]},$$scope:{ctx:l}}}),$=new S({}),{c(){o(s.$$.fragment),r=h(),o(a.$$.fragment),n=h(),o($.$$.fragment)},l(t){u(s.$$.fragment,t),r=x(t),u(a.$$.fragment,t),n=x(t),u($.$$.fragment,t)},m(t,e){_(s,t,e),m(t,r,e),_(a,t,e),m(t,n,e),_($,t,e),f=!0},p(t,e){const p={};e&2&&(p.$$scope={dirty:e,ctx:t}),a.$set(p)},i(t){f||(c(s.$$.fragment,t),c(a.$$.fragment,t),c($.$$.fragment,t),f=!0)},o(t){d(s.$$.fragment,t),d(a.$$.fragment,t),d($.$$.fragment,t),f=!1},d(t){g(s,t),t&&i(r),g(a,t),t&&i(n),g($,t)}}}function U(l){let s,r,a,n,$,f,t;return n=new M({props:{style:"height: 400px",$$slots:{default:[N]},$$scope:{ctx:l}}}),f=new D({props:{id:"middle_snap",code:l[0]}}),{c(){s=P("h2"),r=v("Middle snap"),a=h(),o(n.$$.fragment),$=h(),o(f.$$.fragment)},l(e){s=y(e,"H2",{});var p=w(s);r=C(p,"Middle snap"),p.forEach(i),a=x(e),u(n.$$.fragment,e),$=x(e),u(f.$$.fragment,e)},m(e,p){m(e,s,p),I(s,r),m(e,a,p),_(n,e,p),m(e,$,p),_(f,e,p),t=!0},p(e,[p]){const z={};p&2&&(z.$$scope={dirty:p,ctx:e}),n.$set(z)},i(e){t||(c(n.$$.fragment,e),c(f.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),d(f.$$.fragment,e),t=!1},d(e){e&&i(s),e&&i(a),g(n,e),e&&i($),g(f,e)}}}function V(l){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>	
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>`]}class F extends q{constructor(s){super(),A(this,s,V,U,E,{})}}export{F as default};
