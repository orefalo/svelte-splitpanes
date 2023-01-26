import{S as E,i as A,s as U,e as w,L as I,a as c,Q as S,b,d as j,M as k,g as $,f as P,R as d,j as o,k as C,T as g,n as z,o as v,V as x,O as q,I as H}from"../../../../../chunks/external-b827b9fd.js";import{S as L,P as y}from"../../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as M}from"../../../../../chunks/CodeArea-6af4aaf3.js";function N(u){let s,r;return{c(){s=w("span"),r=I("I have a snap size of 10%"),this.h()},l(a){s=b(a,"SPAN",{style:!0});var n=j(s);r=k(n,"I have a snap size of 10%"),n.forEach($),this.h()},h(){q(s,"font-size","20px")},m(a,n){o(a,s,n),C(s,r)},p:H,d(a){a&&$(s)}}}function O(u){let s,r,a,n,f,m;return s=new y({props:{snapSize:10,$$slots:{default:[N]},$$scope:{ctx:u}}}),a=new y({}),f=new y({}),{c(){S(s.$$.fragment),r=c(),S(a.$$.fragment),n=c(),S(f.$$.fragment)},l(e){d(s.$$.fragment,e),r=P(e),d(a.$$.fragment,e),n=P(e),d(f.$$.fragment,e)},m(e,p){g(s,e,p),o(e,r,p),g(a,e,p),o(e,n,p),g(f,e,p),m=!0},p(e,p){const l={};p&2&&(l.$$scope={dirty:p,ctx:e}),s.$set(l)},i(e){m||(z(s.$$.fragment,e),z(a.$$.fragment,e),z(f.$$.fragment,e),m=!0)},o(e){v(s.$$.fragment,e),v(a.$$.fragment,e),v(f.$$.fragment,e),m=!1},d(e){x(s,e),e&&$(r),x(a,e),e&&$(n),x(f,e)}}}function Q(u){let s,r,a,n,f,m,e,p,l,h;return e=new L({props:{style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:u}}}),l=new M({props:{id:"simple_snap",code:u[0]}}),{c(){s=w("h2"),r=I("Simple snap"),a=c(),n=w("p"),f=I("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),m=c(),S(e.$$.fragment),p=c(),S(l.$$.fragment)},l(t){s=b(t,"H2",{});var i=j(s);r=k(i,"Simple snap"),i.forEach($),a=P(t),n=b(t,"P",{});var _=j(n);f=k(_,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),_.forEach($),m=P(t),d(e.$$.fragment,t),p=P(t),d(l.$$.fragment,t)},m(t,i){o(t,s,i),C(s,r),o(t,a,i),o(t,n,i),C(n,f),o(t,m,i),g(e,t,i),o(t,p,i),g(l,t,i),h=!0},p(t,[i]){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),e.$set(_)},i(t){h||(z(e.$$.fragment,t),z(l.$$.fragment,t),h=!0)},o(t){v(e.$$.fragment,t),v(l.$$.fragment,t),h=!1},d(t){t&&$(s),t&&$(a),t&&$(n),t&&$(m),x(e,t),t&&$(p),x(l,t)}}}function R(u){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>`]}class D extends E{constructor(s){super(),A(this,s,R,Q,U,{})}}export{D as default};
