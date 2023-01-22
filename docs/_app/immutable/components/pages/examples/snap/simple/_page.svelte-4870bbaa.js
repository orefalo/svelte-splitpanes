import{S as E,i as I,s as U,e as w,P as C,f as c,z as S,h as b,j,Q as k,l as $,k as P,A as z,o,p as A,B as d,t as g,b as h,C as v,T as q,M as B}from"../../../../../chunks/external-069c0b55.js";import{S as H,P as y}from"../../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as M}from"../../../../../chunks/CodeArea-8a6a8f55.js";function N(u){let s,r;return{c(){s=w("span"),r=C("I have a snap size of 10%"),this.h()},l(a){s=b(a,"SPAN",{style:!0});var n=j(s);r=k(n,"I have a snap size of 10%"),n.forEach($),this.h()},h(){q(s,"font-size","20px")},m(a,n){o(a,s,n),A(s,r)},p:B,d(a){a&&$(s)}}}function Q(u){let s,r,a,n,f,m;return s=new y({props:{snapSize:10,$$slots:{default:[N]},$$scope:{ctx:u}}}),a=new y({}),f=new y({}),{c(){S(s.$$.fragment),r=c(),S(a.$$.fragment),n=c(),S(f.$$.fragment)},l(e){z(s.$$.fragment,e),r=P(e),z(a.$$.fragment,e),n=P(e),z(f.$$.fragment,e)},m(e,p){d(s,e,p),o(e,r,p),d(a,e,p),o(e,n,p),d(f,e,p),m=!0},p(e,p){const l={};p&2&&(l.$$scope={dirty:p,ctx:e}),s.$set(l)},i(e){m||(g(s.$$.fragment,e),g(a.$$.fragment,e),g(f.$$.fragment,e),m=!0)},o(e){h(s.$$.fragment,e),h(a.$$.fragment,e),h(f.$$.fragment,e),m=!1},d(e){v(s,e),e&&$(r),v(a,e),e&&$(n),v(f,e)}}}function T(u){let s,r,a,n,f,m,e,p,l,x;return e=new H({props:{style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:u}}}),l=new M({props:{id:"simple_snap",code:u[0]}}),{c(){s=w("h2"),r=C("Simple snap"),a=c(),n=w("p"),f=C("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),m=c(),S(e.$$.fragment),p=c(),S(l.$$.fragment)},l(t){s=b(t,"H2",{});var i=j(s);r=k(i,"Simple snap"),i.forEach($),a=P(t),n=b(t,"P",{});var _=j(n);f=k(_,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),_.forEach($),m=P(t),z(e.$$.fragment,t),p=P(t),z(l.$$.fragment,t)},m(t,i){o(t,s,i),A(s,r),o(t,a,i),o(t,n,i),A(n,f),o(t,m,i),d(e,t,i),o(t,p,i),d(l,t,i),x=!0},p(t,[i]){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),e.$set(_)},i(t){x||(g(e.$$.fragment,t),g(l.$$.fragment,t),x=!0)},o(t){h(e.$$.fragment,t),h(l.$$.fragment,t),x=!1},d(t){t&&$(s),t&&$(a),t&&$(n),t&&$(m),v(e,t),t&&$(p),v(l,t)}}}function D(u){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>`]}class K extends E{constructor(s){super(),I(this,s,D,T,U,{})}}export{K as default};
