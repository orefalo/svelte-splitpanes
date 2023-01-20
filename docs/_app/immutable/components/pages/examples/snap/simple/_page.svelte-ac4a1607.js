import{S as U,i as j,s as q,U as A,k as w,q as C,a as c,w as S,l as b,m as k,r as E,h as $,c as z,x,b as o,C as I,y as P,f as d,t as g,z as h,V as y,p as D,D as H}from"../../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as N}from"../../../../../chunks/CodeArea-5e3138e2.js";function V(u){let s,r;return{c(){s=w("span"),r=C("I have a snap size of 10%"),this.h()},l(a){s=b(a,"SPAN",{style:!0});var n=k(s);r=E(n,"I have a snap size of 10%"),n.forEach($),this.h()},h(){D(s,"font-size","20px")},m(a,n){o(a,s,n),I(s,r)},p:H,d(a){a&&$(s)}}}function B(u){let s,r,a,n,f,m;return s=new y({props:{snapSize:10,$$slots:{default:[V]},$$scope:{ctx:u}}}),a=new y({}),f=new y({}),{c(){S(s.$$.fragment),r=c(),S(a.$$.fragment),n=c(),S(f.$$.fragment)},l(e){x(s.$$.fragment,e),r=z(e),x(a.$$.fragment,e),n=z(e),x(f.$$.fragment,e)},m(e,p){P(s,e,p),o(e,r,p),P(a,e,p),o(e,n,p),P(f,e,p),m=!0},p(e,p){const l={};p&2&&(l.$$scope={dirty:p,ctx:e}),s.$set(l)},i(e){m||(d(s.$$.fragment,e),d(a.$$.fragment,e),d(f.$$.fragment,e),m=!0)},o(e){g(s.$$.fragment,e),g(a.$$.fragment,e),g(f.$$.fragment,e),m=!1},d(e){h(s,e),e&&$(r),h(a,e),e&&$(n),h(f,e)}}}function F(u){let s,r,a,n,f,m,e,p,l,v;return e=new A({props:{style:"height: 400px",$$slots:{default:[B]},$$scope:{ctx:u}}}),l=new N({props:{id:"simple_snap",code:u[0]}}),{c(){s=w("h2"),r=C("Simple snap"),a=c(),n=w("p"),f=C("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),m=c(),S(e.$$.fragment),p=c(),S(l.$$.fragment)},l(t){s=b(t,"H2",{});var i=k(s);r=E(i,"Simple snap"),i.forEach($),a=z(t),n=b(t,"P",{});var _=k(n);f=E(_,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),_.forEach($),m=z(t),x(e.$$.fragment,t),p=z(t),x(l.$$.fragment,t)},m(t,i){o(t,s,i),I(s,r),o(t,a,i),o(t,n,i),I(n,f),o(t,m,i),P(e,t,i),o(t,p,i),P(l,t,i),v=!0},p(t,[i]){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),e.$set(_)},i(t){v||(d(e.$$.fragment,t),d(l.$$.fragment,t),v=!0)},o(t){g(e.$$.fragment,t),g(l.$$.fragment,t),v=!1},d(t){t&&$(s),t&&$(a),t&&$(n),t&&$(m),h(e,t),t&&$(p),h(l,t)}}}function G(u){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>`]}class L extends U{constructor(s){super(),j(this,s,G,F,q,{})}}export{L as default};
