import{S as E,i as M,s as R,e as z,P as x,f as h,z as v,h as S,j as B,Q as P,l as $,k as I,A as b,o,p as _,B as w,t as g,b as y,C as d,T as Y,M as j}from"../../../../../chunks/external-069c0b55.js";import{S as k,P as A}from"../../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as q}from"../../../../../chunks/CodeArea-8a6a8f55.js";function H(u){let a,r,n,i,p,m;return{c(){a=z("span"),r=x("I have a snap size of 10%"),n=z("br"),i=x(`
			I have a min size of 10%`),p=z("br"),m=x(`
			I have a max size of 70%`),this.h()},l(e){a=S(e,"SPAN",{style:!0});var s=B(a);r=P(s,"I have a snap size of 10%"),n=S(s,"BR",{}),i=P(s,`
			I have a min size of 10%`),p=S(s,"BR",{}),m=P(s,`
			I have a max size of 70%`),s.forEach($),this.h()},h(){Y(a,"font-size","20px")},m(e,s){o(e,a,s),_(a,r),_(a,n),_(a,i),_(a,p),_(a,m)},p:j,d(e){e&&$(a)}}}function N(u){let a,r,n,i,p,m;return a=new A({}),n=new A({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[H]},$$scope:{ctx:u}}}),p=new A({}),{c(){v(a.$$.fragment),r=h(),v(n.$$.fragment),i=h(),v(p.$$.fragment)},l(e){b(a.$$.fragment,e),r=I(e),b(n.$$.fragment,e),i=I(e),b(p.$$.fragment,e)},m(e,s){w(a,e,s),o(e,r,s),w(n,e,s),o(e,i,s),w(p,e,s),m=!0},p(e,s){const l={};s&2&&(l.$$scope={dirty:s,ctx:e}),n.$set(l)},i(e){m||(g(a.$$.fragment,e),g(n.$$.fragment,e),g(p.$$.fragment,e),m=!0)},o(e){y(a.$$.fragment,e),y(n.$$.fragment,e),y(p.$$.fragment,e),m=!1},d(e){d(a,e),e&&$(r),d(n,e),e&&$(i),d(p,e)}}}function Q(u){let a,r,n,i,p,m,e,s,l,C;return e=new k({props:{style:"height: 400px",$$slots:{default:[N]},$$scope:{ctx:u}}}),l=new q({props:{id:"min_max_snap",code:u[0]}}),{c(){a=z("h2"),r=x("Min & max with snap"),n=h(),i=z("p"),p=x("You can also snap to the panel maximum and minimum size."),m=h(),v(e.$$.fragment),s=h(),v(l.$$.fragment)},l(t){a=S(t,"H2",{});var f=B(a);r=P(f,"Min & max with snap"),f.forEach($),n=I(t),i=S(t,"P",{});var c=B(i);p=P(c,"You can also snap to the panel maximum and minimum size."),c.forEach($),m=I(t),b(e.$$.fragment,t),s=I(t),b(l.$$.fragment,t)},m(t,f){o(t,a,f),_(a,r),o(t,n,f),o(t,i,f),_(i,p),o(t,m,f),w(e,t,f),o(t,s,f),w(l,t,f),C=!0},p(t,[f]){const c={};f&2&&(c.$$scope={dirty:f,ctx:t}),e.$set(c)},i(t){C||(g(e.$$.fragment,t),g(l.$$.fragment,t),C=!0)},o(t){y(e.$$.fragment,t),y(l.$$.fragment,t),C=!1},d(t){t&&$(a),t&&$(n),t&&$(i),t&&$(m),d(e,t),t&&$(s),d(l,t)}}}function T(u){return[`
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
</Splitpanes>`]}class J extends E{constructor(a){super(),M(this,a,T,Q,R,{})}}export{J as default};
