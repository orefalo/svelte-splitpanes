import{S as j,i as q,s as Q,e as d,P as u,f as z,z as I,h as b,j as k,Q as h,l as p,k as P,A as w,o as _,p as r,B as C,t as y,b as A,C as B,m as Y,M as R}from"../../../../chunks/external-069c0b55.js";import{S as D,P as N}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as F}from"../../../../chunks/CodeArea-8a6a8f55.js";function G(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`1
			`),l=d("br"),n=z(),i=d("em"),m=u("I have a min height of 20% & max height of 70%"),this.h()},l(t){e=b(t,"SPAN",{});var a=k(e);o=h(a,`1
			`),l=b(a,"BR",{}),n=P(a),i=b(a,"EM",{class:!0});var $=k(i);m=h($,"I have a min height of 20% & max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){Y(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:R,d(t){t&&p(e)}}}function J(c){let e,o;return{c(){e=d("span"),o=u("2")},l(l){e=b(l,"SPAN",{});var n=k(e);o=h(n,"2"),n.forEach(p)},m(l,n){_(l,e,n),r(e,o)},p:R,d(l){l&&p(e)}}}function K(c){let e,o,l,n,i,m;return{c(){e=d("span"),o=u(`3

			`),l=d("br"),n=z(),i=d("em"),m=u("I have a max height of 70%"),this.h()},l(t){e=b(t,"SPAN",{});var a=k(e);o=h(a,`3

			`),l=b(a,"BR",{}),n=P(a),i=b(a,"EM",{class:!0});var $=k(i);m=h($,"I have a max height of 70%"),$.forEach(p),a.forEach(p),this.h()},h(){Y(i,"class","specs")},m(t,a){_(t,e,a),r(e,o),r(e,l),r(e,n),r(e,i),r(i,m)},p:R,d(t){t&&p(e)}}}function L(c){let e,o,l,n,i,m;return e=new N({props:{minSize:20,maxSize:70,$$slots:{default:[G]},$$scope:{ctx:c}}}),l=new N({props:{$$slots:{default:[J]},$$scope:{ctx:c}}}),i=new N({props:{maxSize:70,$$slots:{default:[K]},$$scope:{ctx:c}}}),{c(){I(e.$$.fragment),o=z(),I(l.$$.fragment),n=z(),I(i.$$.fragment)},l(t){w(e.$$.fragment,t),o=P(t),w(l.$$.fragment,t),n=P(t),w(i.$$.fragment,t)},m(t,a){C(e,t,a),_(t,o,a),C(l,t,a),_(t,n,a),C(i,t,a),m=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($);const E={};a&2&&(E.$$scope={dirty:a,ctx:t}),l.$set(E);const S={};a&2&&(S.$$scope={dirty:a,ctx:t}),i.$set(S)},i(t){m||(y(e.$$.fragment,t),y(l.$$.fragment,t),y(i.$$.fragment,t),m=!0)},o(t){A(e.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){B(e,t),t&&p(o),B(l,t),t&&p(n),B(i,t)}}}function O(c){let e,o,l,n,i,m,t,a=!1+"",$,E,S,v,H,g,M;return v=new D({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[L]},$$scope:{ctx:c}}}),g=new F({props:{id:"min_max",code:c[0]}}),{c(){e=d("h2"),o=u("Horizontal layout, push other panes, min & max use, doubleclick"),l=z(),n=d("p"),i=u("You can double click a splitter to maximize the next pane!"),m=d("br"),t=u(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=u(a),E=u("."),S=z(),I(v.$$.fragment),H=z(),I(g.$$.fragment)},l(s){e=b(s,"H2",{});var f=k(e);o=h(f,"Horizontal layout, push other panes, min & max use, doubleclick"),f.forEach(p),l=P(s),n=b(s,"P",{});var x=k(n);i=h(x,"You can double click a splitter to maximize the next pane!"),m=b(x,"BR",{}),t=h(x,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=h(x,a),E=h(x,"."),x.forEach(p),S=P(s),w(v.$$.fragment,s),H=P(s),w(g.$$.fragment,s)},m(s,f){_(s,e,f),r(e,o),_(s,l,f),_(s,n,f),r(n,i),r(n,m),r(n,t),r(n,$),r(n,E),_(s,S,f),C(v,s,f),_(s,H,f),C(g,s,f),M=!0},p(s,[f]){const x={};f&2&&(x.$$scope={dirty:f,ctx:s}),v.$set(x)},i(s){M||(y(v.$$.fragment,s),y(g.$$.fragment,s),M=!0)},o(s){A(v.$$.fragment,s),A(g.$$.fragment,s),M=!1},d(s){s&&p(e),s&&p(l),s&&p(n),s&&p(S),B(v,s),s&&p(H),B(g,s)}}}function T(c){return[`
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
</Splitpanes>`]}class X extends j{constructor(e){super(),q(this,e,T,O,Q,{})}}export{X as default};
