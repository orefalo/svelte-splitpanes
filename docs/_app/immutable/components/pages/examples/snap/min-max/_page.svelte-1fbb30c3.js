import{S as q,i as A,s as M,k as z,q as x,a as h,w as v,l as S,m as E,r as P,h as $,c as I,x as w,b as o,C as _,y as b,f as y,t as g,z as d,p as R,B as Y}from"../../../../../chunks/index-5c227a2d.js";import{S as k,P as B}from"../../../../../chunks/Pane-462d9bc5.js";import{C as H}from"../../../../../chunks/CodeArea-89796faf.js";function N(u){let a,r,n,i,p,m;return{c(){a=z("span"),r=x("I have a snap size of 10%"),n=z("br"),i=x(`
			I have a min size of 10%`),p=z("br"),m=x(`
			I have a max size of 70%`),this.h()},l(e){a=S(e,"SPAN",{style:!0});var s=E(a);r=P(s,"I have a snap size of 10%"),n=S(s,"BR",{}),i=P(s,`
			I have a min size of 10%`),p=S(s,"BR",{}),m=P(s,`
			I have a max size of 70%`),s.forEach($),this.h()},h(){R(a,"font-size","20px")},m(e,s){o(e,a,s),_(a,r),_(a,n),_(a,i),_(a,p),_(a,m)},p:Y,d(e){e&&$(a)}}}function j(u){let a,r,n,i,p,m;return a=new B({}),n=new B({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[N]},$$scope:{ctx:u}}}),p=new B({}),{c(){v(a.$$.fragment),r=h(),v(n.$$.fragment),i=h(),v(p.$$.fragment)},l(e){w(a.$$.fragment,e),r=I(e),w(n.$$.fragment,e),i=I(e),w(p.$$.fragment,e)},m(e,s){b(a,e,s),o(e,r,s),b(n,e,s),o(e,i,s),b(p,e,s),m=!0},p(e,s){const l={};s&2&&(l.$$scope={dirty:s,ctx:e}),n.$set(l)},i(e){m||(y(a.$$.fragment,e),y(n.$$.fragment,e),y(p.$$.fragment,e),m=!0)},o(e){g(a.$$.fragment,e),g(n.$$.fragment,e),g(p.$$.fragment,e),m=!1},d(e){d(a,e),e&&$(r),d(n,e),e&&$(i),d(p,e)}}}function D(u){let a,r,n,i,p,m,e,s,l,C;return e=new k({props:{style:"height: 400px",$$slots:{default:[j]},$$scope:{ctx:u}}}),l=new H({props:{id:"min_max_snap",code:u[0]}}),{c(){a=z("h2"),r=x("Min & max with snap"),n=h(),i=z("p"),p=x("You can also snap to the panel maximum and minimum size."),m=h(),v(e.$$.fragment),s=h(),v(l.$$.fragment)},l(t){a=S(t,"H2",{});var f=E(a);r=P(f,"Min & max with snap"),f.forEach($),n=I(t),i=S(t,"P",{});var c=E(i);p=P(c,"You can also snap to the panel maximum and minimum size."),c.forEach($),m=I(t),w(e.$$.fragment,t),s=I(t),w(l.$$.fragment,t)},m(t,f){o(t,a,f),_(a,r),o(t,n,f),o(t,i,f),_(i,p),o(t,m,f),b(e,t,f),o(t,s,f),b(l,t,f),C=!0},p(t,[f]){const c={};f&2&&(c.$$scope={dirty:f,ctx:t}),e.$set(c)},i(t){C||(y(e.$$.fragment,t),y(l.$$.fragment,t),C=!0)},o(t){g(e.$$.fragment,t),g(l.$$.fragment,t),C=!1},d(t){t&&$(a),t&&$(n),t&&$(i),t&&$(m),d(e,t),t&&$(s),d(l,t)}}}function F(u){return[`
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
</Splitpanes>`]}class L extends q{constructor(a){super(),A(this,a,F,D,M,{})}}export{L as default};
