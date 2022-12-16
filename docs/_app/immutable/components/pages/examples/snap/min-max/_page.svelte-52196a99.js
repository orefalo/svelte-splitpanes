import{S as q,i as A,s as M,k as z,q as x,a as h,w as v,l as S,m as E,r as I,h as $,c as P,x as w,b as o,C as _,y as b,f as y,t as g,z as d,p as R,B as Y}from"../../../../../chunks/index-15259a8c.js";import{S as k,P as B}from"../../../../../chunks/Pane-669f295b.js";import{C as H}from"../../../../../chunks/CodeArea-0c99e4dd.js";function N(u){let a,r,s,i,m,p;return{c(){a=z("span"),r=x("I have a snap size of 10%"),s=z("br"),i=x(`
			I have a min size of 10%`),m=z("br"),p=x(`
			I have a max size of 70%`),this.h()},l(e){a=S(e,"SPAN",{style:!0});var n=E(a);r=I(n,"I have a snap size of 10%"),s=S(n,"BR",{}),i=I(n,`
			I have a min size of 10%`),m=S(n,"BR",{}),p=I(n,`
			I have a max size of 70%`),n.forEach($),this.h()},h(){R(a,"font-size","20px")},m(e,n){o(e,a,n),_(a,r),_(a,s),_(a,i),_(a,m),_(a,p)},p:Y,d(e){e&&$(a)}}}function j(u){let a,r,s,i,m,p;return a=new B({}),s=new B({props:{snapSize:10,minSize:10,maxSize:70,$$slots:{default:[N]},$$scope:{ctx:u}}}),m=new B({}),{c(){v(a.$$.fragment),r=h(),v(s.$$.fragment),i=h(),v(m.$$.fragment)},l(e){w(a.$$.fragment,e),r=P(e),w(s.$$.fragment,e),i=P(e),w(m.$$.fragment,e)},m(e,n){b(a,e,n),o(e,r,n),b(s,e,n),o(e,i,n),b(m,e,n),p=!0},p(e,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){p||(y(a.$$.fragment,e),y(s.$$.fragment,e),y(m.$$.fragment,e),p=!0)},o(e){g(a.$$.fragment,e),g(s.$$.fragment,e),g(m.$$.fragment,e),p=!1},d(e){d(a,e),e&&$(r),d(s,e),e&&$(i),d(m,e)}}}function D(u){let a,r,s,i,m,p,e,n,l,C;return e=new k({props:{style:"height: 400px",$$slots:{default:[j]},$$scope:{ctx:u}}}),l=new H({props:{id:"min_max_snap",code:u[0]}}),{c(){a=z("h2"),r=x("Min & max with snap"),s=h(),i=z("p"),m=x("You can also snap to the panel maximum and minimum size."),p=h(),v(e.$$.fragment),n=h(),v(l.$$.fragment)},l(t){a=S(t,"H2",{});var f=E(a);r=I(f,"Min & max with snap"),f.forEach($),s=P(t),i=S(t,"P",{});var c=E(i);m=I(c,"You can also snap to the panel maximum and minimum size."),c.forEach($),p=P(t),w(e.$$.fragment,t),n=P(t),w(l.$$.fragment,t)},m(t,f){o(t,a,f),_(a,r),o(t,s,f),o(t,i,f),_(i,m),o(t,p,f),b(e,t,f),o(t,n,f),b(l,t,f),C=!0},p(t,[f]){const c={};f&2&&(c.$$scope={dirty:f,ctx:t}),e.$set(c)},i(t){C||(y(e.$$.fragment,t),y(l.$$.fragment,t),C=!0)},o(t){g(e.$$.fragment,t),g(l.$$.fragment,t),C=!1},d(t){t&&$(a),t&&$(s),t&&$(i),t&&$(p),d(e,t),t&&$(n),d(l,t)}}}function F(u){return[`
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
