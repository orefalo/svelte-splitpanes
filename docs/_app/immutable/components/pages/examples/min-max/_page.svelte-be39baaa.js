import{S as Y,i as j,s as D,k as d,q as u,a as z,w,l as x,m as k,r as h,h as p,c as P,x as I,b as _,C as r,y,f as C,t as A,z as B,n as M,B as q}from"../../../../chunks/index-5c227a2d.js";import{S as F,P as R}from"../../../../chunks/Pane-462d9bc5.js";import{C as G}from"../../../../chunks/CodeArea-89796faf.js";function J(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`1
			`),l=d("br"),n=z(),i=d("em"),m=u("I have a min height of 20% & max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);o=h(a,`1
			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a min height of 20% & max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:q,d(t){t&&p(e)}}}function K(c){let e,o;return{c(){e=d("span"),o=u("2")},l(l){e=x(l,"SPAN",{});var n=k(e);o=h(n,"2"),n.forEach(p)},m(l,n){_(l,e,n),r(e,o)},p:q,d(l){l&&p(e)}}}function L(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`3

			`),l=d("br"),n=z(),i=d("em"),m=u("I have a max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);o=h(a,`3

			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:q,d(t){t&&p(e)}}}function O(c){let e,o,l,n,i,m;return e=new R({props:{minSize:20,maxSize:70,$$slots:{default:[J]},$$scope:{ctx:c}}}),l=new R({props:{$$slots:{default:[K]},$$scope:{ctx:c}}}),i=new R({props:{maxSize:70,$$slots:{default:[L]},$$scope:{ctx:c}}}),{c(){w(e.$$.fragment),o=z(),w(l.$$.fragment),n=z(),w(i.$$.fragment)},l(t){I(e.$$.fragment,t),o=P(t),I(l.$$.fragment,t),n=P(t),I(i.$$.fragment,t)},m(t,a){y(e,t,a),_(t,o,a),y(l,t,a),_(t,n,a),y(i,t,a),m=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($);const E={};a&2&&(E.$$scope={dirty:a,ctx:t}),l.$set(E);const S={};a&2&&(S.$$scope={dirty:a,ctx:t}),i.$set(S)},i(t){m||(C(e.$$.fragment,t),C(l.$$.fragment,t),C(i.$$.fragment,t),m=!0)},o(t){A(e.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){B(e,t),t&&p(o),B(l,t),t&&p(n),B(i,t)}}}function Q(c){let e,o,l,n,i,m,t,a=!1+"",$,E,S,v,H,g,N;return v=new F({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:c}}}),g=new G({props:{id:"min_max",code:c[0]}}),{c(){e=d("h2"),o=u("Horizontal layout, push other panes, min & max use, doubleclick"),l=z(),n=d("p"),i=u("You can double click a splitter to maximize the next pane!"),m=d("br"),t=u(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=u(a),E=u("."),S=z(),w(v.$$.fragment),H=z(),w(g.$$.fragment)},l(s){e=x(s,"H2",{});var f=k(e);o=h(f,"Horizontal layout, push other panes, min & max use, doubleclick"),f.forEach(p),l=P(s),n=x(s,"P",{});var b=k(n);i=h(b,"You can double click a splitter to maximize the next pane!"),m=x(b,"BR",{}),t=h(b,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=h(b,a),E=h(b,"."),b.forEach(p),S=P(s),I(v.$$.fragment,s),H=P(s),I(g.$$.fragment,s)},m(s,f){_(s,e,f),r(e,o),_(s,l,f),_(s,n,f),r(n,i),r(n,m),r(n,t),r(n,$),r(n,E),_(s,S,f),y(v,s,f),_(s,H,f),y(g,s,f),N=!0},p(s,[f]){const b={};f&2&&(b.$$scope={dirty:f,ctx:s}),v.$set(b)},i(s){N||(C(v.$$.fragment,s),C(g.$$.fragment,s),N=!0)},o(s){A(v.$$.fragment,s),A(g.$$.fragment,s),N=!1},d(s){s&&p(e),s&&p(l),s&&p(n),s&&p(S),B(v,s),s&&p(H),B(g,s)}}}function T(c){return[`
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
</Splitpanes>`]}class X extends Y{constructor(e){super(),j(this,e,T,Q,D,{})}}export{X as default};
