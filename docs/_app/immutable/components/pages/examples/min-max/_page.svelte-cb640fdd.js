import{S as Y,i as j,s as D,k as d,q as u,a as z,w,l as x,m as k,r as h,h as r,c as P,x as I,b as _,C as p,y,f as C,t as A,z as B,n as M,B as q}from"../../../../chunks/index-15259a8c.js";import{S as F,P as R}from"../../../../chunks/Pane-669f295b.js";import{C as G}from"../../../../chunks/CodeArea-0c99e4dd.js";function J(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`1
			`),l=d("br"),n=z(),i=d("em"),m=u("I have a min height of 20% & max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);o=h(a,`1
			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a min height of 20% & max height of 70%"),$.forEach(r),a.forEach(r),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),p(e,o),p(e,l),p(e,n),p(e,i),p(i,m)},p:q,d(t){t&&r(e)}}}function K(c){let e,o;return{c(){e=d("span"),o=u("2")},l(l){e=x(l,"SPAN",{});var n=k(e);o=h(n,"2"),n.forEach(r)},m(l,n){_(l,e,n),p(e,o)},p:q,d(l){l&&r(e)}}}function L(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`3

			`),l=d("br"),n=z(),i=d("em"),m=u("I have a max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);o=h(a,`3

			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a max height of 70%"),$.forEach(r),a.forEach(r),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),p(e,o),p(e,l),p(e,n),p(e,i),p(i,m)},p:q,d(t){t&&r(e)}}}function O(c){let e,o,l,n,i,m;return e=new R({props:{minSize:20,maxSize:70,$$slots:{default:[J]},$$scope:{ctx:c}}}),l=new R({props:{$$slots:{default:[K]},$$scope:{ctx:c}}}),i=new R({props:{maxSize:70,$$slots:{default:[L]},$$scope:{ctx:c}}}),{c(){w(e.$$.fragment),o=z(),w(l.$$.fragment),n=z(),w(i.$$.fragment)},l(t){I(e.$$.fragment,t),o=P(t),I(l.$$.fragment,t),n=P(t),I(i.$$.fragment,t)},m(t,a){y(e,t,a),_(t,o,a),y(l,t,a),_(t,n,a),y(i,t,a),m=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($);const E={};a&2&&(E.$$scope={dirty:a,ctx:t}),l.$set(E);const v={};a&2&&(v.$$scope={dirty:a,ctx:t}),i.$set(v)},i(t){m||(C(e.$$.fragment,t),C(l.$$.fragment,t),C(i.$$.fragment,t),m=!0)},o(t){A(e.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){B(e,t),t&&r(o),B(l,t),t&&r(n),B(i,t)}}}function Q(c){let e,o,l,n,i,m,t,a=!1+"",$,E,v,g,H,S,N;return g=new F({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:c}}}),S=new G({props:{id:"min_max",code:c[0]}}),{c(){e=d("h2"),o=u("Horizontal layout, push other panes, min & max use, doubleclick"),l=z(),n=d("p"),i=u("You can double click a splitter to maximize the next pane!"),m=d("br"),t=u(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=u(a),E=u("."),v=z(),w(g.$$.fragment),H=z(),w(S.$$.fragment)},l(s){e=x(s,"H2",{});var f=k(e);o=h(f,"Horizontal layout, push other panes, min & max use, doubleclick"),f.forEach(r),l=P(s),n=x(s,"P",{});var b=k(n);i=h(b,"You can double click a splitter to maximize the next pane!"),m=x(b,"BR",{}),t=h(b,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=h(b,a),E=h(b,"."),b.forEach(r),v=P(s),I(g.$$.fragment,s),H=P(s),I(S.$$.fragment,s)},m(s,f){_(s,e,f),p(e,o),_(s,l,f),_(s,n,f),p(n,i),p(n,m),p(n,t),p(n,$),p(n,E),_(s,v,f),y(g,s,f),_(s,H,f),y(S,s,f),N=!0},p(s,[f]){const b={};f&2&&(b.$$scope={dirty:f,ctx:s}),g.$set(b)},i(s){N||(C(g.$$.fragment,s),C(S.$$.fragment,s),N=!0)},o(s){A(g.$$.fragment,s),A(S.$$.fragment,s),N=!1},d(s){s&&r(e),s&&r(l),s&&r(n),s&&r(v),B(g,s),s&&r(H),B(S,s)}}}function T(c){return[`
<Splitpanes class="default-theme" horizontal={true} style="height: 400px">
	<Pane minSize={20} maxSize={70}>
		<span
			>1
			<br />
			<em class="specs">I have a min height of 20% &amp; max height of 70%</em>
		</span>
	</Pane>
	<Pane>
		<span>2</span>
	</Pane>
	<Pane maxSize={70}>
		<span
			>3

			<br />
			<em class="specs">I have a max height of 70%</em>
		</span>
	</Pane>
</Splitpanes>`]}class X extends Y{constructor(e){super(),j(this,e,T,Q,D,{})}}export{X as default};
