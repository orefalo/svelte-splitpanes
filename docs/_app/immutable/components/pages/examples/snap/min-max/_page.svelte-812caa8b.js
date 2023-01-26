import{S as R,i as A,s as B,e as z,L as x,a as h,Q as v,b as S,d as M,M as I,g as $,f as P,R as b,j as o,k as _,T as g,n as w,o as y,V as d,O as Y,I as j}from"../../../../../chunks/external-b827b9fd.js";import{S as k,P as E}from"../../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as q}from"../../../../../chunks/CodeArea-6af4aaf3.js";function H(u){let a,r,n,i,p,m;return{c(){a=z("span"),r=x("I have a snap size of 10%"),n=z("br"),i=x(`
			I have a min size of 10%`),p=z("br"),m=x(`
			I have a max size of 70%`),this.h()},l(e){a=S(e,"SPAN",{style:!0});var s=M(a);r=I(s,"I have a snap size of 10%"),n=S(s,"BR",{}),i=I(s,`
			I have a min size of 10%`),p=S(s,"BR",{}),m=I(s,`
			I have a max size of 70%`),s.forEach($),this.h()},h(){Y(a,"font-size","20px")},m(e,s){o(e,a,s),_(a,r),_(a,n),_(a,i),_(a,p),_(a,m)},p:j,d(e){e&&$(a)}}}function L(u){let a,r,n,i,p,m;return a=new E({}),n=new E({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[H]},$$scope:{ctx:u}}}),p=new E({}),{c(){v(a.$$.fragment),r=h(),v(n.$$.fragment),i=h(),v(p.$$.fragment)},l(e){b(a.$$.fragment,e),r=P(e),b(n.$$.fragment,e),i=P(e),b(p.$$.fragment,e)},m(e,s){g(a,e,s),o(e,r,s),g(n,e,s),o(e,i,s),g(p,e,s),m=!0},p(e,s){const l={};s&2&&(l.$$scope={dirty:s,ctx:e}),n.$set(l)},i(e){m||(w(a.$$.fragment,e),w(n.$$.fragment,e),w(p.$$.fragment,e),m=!0)},o(e){y(a.$$.fragment,e),y(n.$$.fragment,e),y(p.$$.fragment,e),m=!1},d(e){d(a,e),e&&$(r),d(n,e),e&&$(i),d(p,e)}}}function N(u){let a,r,n,i,p,m,e,s,l,C;return e=new k({props:{style:"height: 400px",$$slots:{default:[L]},$$scope:{ctx:u}}}),l=new q({props:{id:"min_max_snap",code:u[0]}}),{c(){a=z("h2"),r=x("Min & max with snap"),n=h(),i=z("p"),p=x("You can also snap to the panel maximum and minimum size."),m=h(),v(e.$$.fragment),s=h(),v(l.$$.fragment)},l(t){a=S(t,"H2",{});var f=M(a);r=I(f,"Min & max with snap"),f.forEach($),n=P(t),i=S(t,"P",{});var c=M(i);p=I(c,"You can also snap to the panel maximum and minimum size."),c.forEach($),m=P(t),b(e.$$.fragment,t),s=P(t),b(l.$$.fragment,t)},m(t,f){o(t,a,f),_(a,r),o(t,n,f),o(t,i,f),_(i,p),o(t,m,f),g(e,t,f),o(t,s,f),g(l,t,f),C=!0},p(t,[f]){const c={};f&2&&(c.$$scope={dirty:f,ctx:t}),e.$set(c)},i(t){C||(w(e.$$.fragment,t),w(l.$$.fragment,t),C=!0)},o(t){y(e.$$.fragment,t),y(l.$$.fragment,t),C=!1},d(t){t&&$(a),t&&$(n),t&&$(i),t&&$(m),d(e,t),t&&$(s),d(l,t)}}}function O(u){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10} minSize={10} maxSize={70}>
		<span style="font-size: 20px;">
			I have a snap size of 10%<br />
			I have a min size of 10%<br />
			I have a max size of 70%
		</span>
	</Pane>

	<Pane />
</Splitpanes>`]}class D extends R{constructor(a){super(),A(this,a,O,N,B,{})}}export{D as default};
