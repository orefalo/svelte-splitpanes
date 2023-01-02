import{S as j,i as q,s as A,k as w,q as C,a as c,w as S,l as b,m as k,r as E,h as $,c as z,x as P,b as o,C as I,y as x,f as d,t as g,z as h,p as U,B}from"../../../../../chunks/index-5c227a2d.js";import{S as H,P as y}from"../../../../../chunks/Pane-ea2de0f1.js";import{C as N}from"../../../../../chunks/CodeArea-89796faf.js";function D(u){let s,i;return{c(){s=w("span"),i=C("I have a snap size of 10%"),this.h()},l(a){s=b(a,"SPAN",{style:!0});var n=k(s);i=E(n,"I have a snap size of 10%"),n.forEach($),this.h()},h(){U(s,"font-size","20px")},m(a,n){o(a,s,n),I(s,i)},p:B,d(a){a&&$(s)}}}function F(u){let s,i,a,n,f,m;return s=new y({props:{snapSize:10,$$slots:{default:[D]},$$scope:{ctx:u}}}),a=new y({}),f=new y({}),{c(){S(s.$$.fragment),i=c(),S(a.$$.fragment),n=c(),S(f.$$.fragment)},l(e){P(s.$$.fragment,e),i=z(e),P(a.$$.fragment,e),n=z(e),P(f.$$.fragment,e)},m(e,p){x(s,e,p),o(e,i,p),x(a,e,p),o(e,n,p),x(f,e,p),m=!0},p(e,p){const l={};p&2&&(l.$$scope={dirty:p,ctx:e}),s.$set(l)},i(e){m||(d(s.$$.fragment,e),d(a.$$.fragment,e),d(f.$$.fragment,e),m=!0)},o(e){g(s.$$.fragment,e),g(a.$$.fragment,e),g(f.$$.fragment,e),m=!1},d(e){h(s,e),e&&$(i),h(a,e),e&&$(n),h(f,e)}}}function G(u){let s,i,a,n,f,m,e,p,l,v;return e=new H({props:{style:"height: 400px",$$slots:{default:[F]},$$scope:{ctx:u}}}),l=new N({props:{id:"simple_snap",code:u[0]}}),{c(){s=w("h2"),i=C("Simple snap"),a=c(),n=w("p"),f=C("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),m=c(),S(e.$$.fragment),p=c(),S(l.$$.fragment)},l(t){s=b(t,"H2",{});var r=k(s);i=E(r,"Simple snap"),r.forEach($),a=z(t),n=b(t,"P",{});var _=k(n);f=E(_,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),_.forEach($),m=z(t),P(e.$$.fragment,t),p=z(t),P(l.$$.fragment,t)},m(t,r){o(t,s,r),I(s,i),o(t,a,r),o(t,n,r),I(n,f),o(t,m,r),x(e,t,r),o(t,p,r),x(l,t,r),v=!0},p(t,[r]){const _={};r&2&&(_.$$scope={dirty:r,ctx:t}),e.$set(_)},i(t){v||(d(e.$$.fragment,t),d(l.$$.fragment,t),v=!0)},o(t){g(e.$$.fragment,t),g(l.$$.fragment,t),v=!1},d(t){t&&$(s),t&&$(a),t&&$(n),t&&$(m),h(e,t),t&&$(p),h(l,t)}}}function J(u){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>`]}class O extends j{constructor(s){super(),q(this,s,J,G,A,{})}}export{O as default};
