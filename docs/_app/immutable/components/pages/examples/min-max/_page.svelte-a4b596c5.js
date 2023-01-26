import{S as j,i as q,s as L,e as d,L as u,a as z,Q as I,b,d as k,M as h,g as p,f as P,R as w,j as _,k as r,T as y,n as C,o as A,V as R,h as Y,I as N}from"../../../../chunks/external-b827b9fd.js";import{S as Q,P as M}from"../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as T}from"../../../../chunks/CodeArea-6af4aaf3.js";function V(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`1
			`),l=d("br"),n=z(),i=d("em"),m=u("I have a min height of 20% & max height of 70%"),this.h()},l(t){e=b(t,"SPAN",{});var a=k(e);o=h(a,`1
			`),l=b(a,"BR",{}),n=P(a),i=b(a,"EM",{class:!0});var $=k(i);m=h($,"I have a min height of 20% & max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){Y(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:N,d(t){t&&p(e)}}}function D(c){let e,o;return{c(){e=d("span"),o=u("2")},l(l){e=b(l,"SPAN",{});var n=k(e);o=h(n,"2"),n.forEach(p)},m(l,n){_(l,e,n),r(e,o)},p:N,d(l){l&&p(e)}}}function F(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`3

			`),l=d("br"),n=z(),i=d("em"),m=u("I have a max height of 70%"),this.h()},l(t){e=b(t,"SPAN",{});var a=k(e);o=h(a,`3

			`),l=b(a,"BR",{}),n=P(a),i=b(a,"EM",{class:!0});var $=k(i);m=h($,"I have a max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){Y(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:N,d(t){t&&p(e)}}}function G(c){let e,o,l,n,i,m;return e=new M({props:{minSize:20,maxSize:70,$$slots:{default:[V]},$$scope:{ctx:c}}}),l=new M({props:{$$slots:{default:[D]},$$scope:{ctx:c}}}),i=new M({props:{maxSize:70,$$slots:{default:[F]},$$scope:{ctx:c}}}),{c(){I(e.$$.fragment),o=z(),I(l.$$.fragment),n=z(),I(i.$$.fragment)},l(t){w(e.$$.fragment,t),o=P(t),w(l.$$.fragment,t),n=P(t),w(i.$$.fragment,t)},m(t,a){y(e,t,a),_(t,o,a),y(l,t,a),_(t,n,a),y(i,t,a),m=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($);const E={};a&2&&(E.$$scope={dirty:a,ctx:t}),l.$set(E);const v={};a&2&&(v.$$scope={dirty:a,ctx:t}),i.$set(v)},i(t){m||(C(e.$$.fragment,t),C(l.$$.fragment,t),C(i.$$.fragment,t),m=!0)},o(t){A(e.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){R(e,t),t&&p(o),R(l,t),t&&p(n),R(i,t)}}}function J(c){let e,o,l,n,i,m,t,a=!1+"",$,E,v,g,B,S,H;return g=new Q({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[G]},$$scope:{ctx:c}}}),S=new T({props:{id:"min_max",code:c[0]}}),{c(){e=d("h2"),o=u("Horizontal layout, push other panes, min & max use, doubleclick"),l=z(),n=d("p"),i=u("You can double click a splitter to maximize the next pane!"),m=d("br"),t=u(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=u(a),E=u("."),v=z(),I(g.$$.fragment),B=z(),I(S.$$.fragment)},l(s){e=b(s,"H2",{});var f=k(e);o=h(f,"Horizontal layout, push other panes, min & max use, doubleclick"),f.forEach(p),l=P(s),n=b(s,"P",{});var x=k(n);i=h(x,"You can double click a splitter to maximize the next pane!"),m=b(x,"BR",{}),t=h(x,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=h(x,a),E=h(x,"."),x.forEach(p),v=P(s),w(g.$$.fragment,s),B=P(s),w(S.$$.fragment,s)},m(s,f){_(s,e,f),r(e,o),_(s,l,f),_(s,n,f),r(n,i),r(n,m),r(n,t),r(n,$),r(n,E),_(s,v,f),y(g,s,f),_(s,B,f),y(S,s,f),H=!0},p(s,[f]){const x={};f&2&&(x.$$scope={dirty:f,ctx:s}),g.$set(x)},i(s){H||(C(g.$$.fragment,s),C(S.$$.fragment,s),H=!0)},o(s){A(g.$$.fragment,s),A(S.$$.fragment,s),H=!1},d(s){s&&p(e),s&&p(l),s&&p(n),s&&p(v),R(g,s),s&&p(B),R(S,s)}}}function K(c){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
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
</Splitpanes>`]}class X extends j{constructor(e){super(),q(this,e,K,J,L,{})}}export{X as default};
