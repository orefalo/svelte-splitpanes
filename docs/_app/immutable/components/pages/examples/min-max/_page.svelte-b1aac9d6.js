import{S as Y,i as D,s as U,U as V,k as d,q as u,a as z,w,l as x,m as k,r as h,h as o,c as P,x as I,b as _,C as r,y,f as C,t as A,z as B,V as R,n as M,D as q}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as j}from"../../../../chunks/CodeArea-5e3138e2.js";function F(c){let e,p,l,n,i,m;return{c(){e=d("span"),p=u(`1
			`),l=d("br"),n=z(),i=d("em"),m=u("I have a min height of 20% & max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);p=h(a,`1
			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a min height of 20% & max height of 70%"),$.forEach(o),a.forEach(o),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),r(e,p),r(e,l),r(e,n),r(e,i),r(i,m)},p:q,d(t){t&&o(e)}}}function G(c){let e,p;return{c(){e=d("span"),p=u("2")},l(l){e=x(l,"SPAN",{});var n=k(e);p=h(n,"2"),n.forEach(o)},m(l,n){_(l,e,n),r(e,p)},p:q,d(l){l&&o(e)}}}function J(c){let e,p,l,n,i,m;return{c(){e=d("span"),p=u(`3

			`),l=d("br"),n=z(),i=d("em"),m=u("I have a max height of 70%"),this.h()},l(t){e=x(t,"SPAN",{});var a=k(e);p=h(a,`3

			`),l=x(a,"BR",{}),n=P(a),i=x(a,"EM",{class:!0});var $=k(i);m=h($,"I have a max height of 70%"),$.forEach(o),a.forEach(o),this.h()},h(){M(i,"class","specs")},m(t,a){_(t,e,a),r(e,p),r(e,l),r(e,n),r(e,i),r(i,m)},p:q,d(t){t&&o(e)}}}function K(c){let e,p,l,n,i,m;return e=new R({props:{minSize:20,maxSize:70,$$slots:{default:[F]},$$scope:{ctx:c}}}),l=new R({props:{$$slots:{default:[G]},$$scope:{ctx:c}}}),i=new R({props:{maxSize:70,$$slots:{default:[J]},$$scope:{ctx:c}}}),{c(){w(e.$$.fragment),p=z(),w(l.$$.fragment),n=z(),w(i.$$.fragment)},l(t){I(e.$$.fragment,t),p=P(t),I(l.$$.fragment,t),n=P(t),I(i.$$.fragment,t)},m(t,a){y(e,t,a),_(t,p,a),y(l,t,a),_(t,n,a),y(i,t,a),m=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($);const E={};a&2&&(E.$$scope={dirty:a,ctx:t}),l.$set(E);const g={};a&2&&(g.$$scope={dirty:a,ctx:t}),i.$set(g)},i(t){m||(C(e.$$.fragment,t),C(l.$$.fragment,t),C(i.$$.fragment,t),m=!0)},o(t){A(e.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){B(e,t),t&&o(p),B(l,t),t&&o(n),B(i,t)}}}function L(c){let e,p,l,n,i,m,t,a=!1+"",$,E,g,v,H,S,N;return v=new V({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[K]},$$scope:{ctx:c}}}),S=new j({props:{id:"min_max",code:c[0]}}),{c(){e=d("h2"),p=u("Horizontal layout, push other panes, min & max use, doubleclick"),l=z(),n=d("p"),i=u("You can double click a splitter to maximize the next pane!"),m=d("br"),t=u(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=u(a),E=u("."),g=z(),w(v.$$.fragment),H=z(),w(S.$$.fragment)},l(s){e=x(s,"H2",{});var f=k(e);p=h(f,"Horizontal layout, push other panes, min & max use, doubleclick"),f.forEach(o),l=P(s),n=x(s,"P",{});var b=k(n);i=h(b,"You can double click a splitter to maximize the next pane!"),m=x(b,"BR",{}),t=h(b,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=h(b,a),E=h(b,"."),b.forEach(o),g=P(s),I(v.$$.fragment,s),H=P(s),I(S.$$.fragment,s)},m(s,f){_(s,e,f),r(e,p),_(s,l,f),_(s,n,f),r(n,i),r(n,m),r(n,t),r(n,$),r(n,E),_(s,g,f),y(v,s,f),_(s,H,f),y(S,s,f),N=!0},p(s,[f]){const b={};f&2&&(b.$$scope={dirty:f,ctx:s}),v.$set(b)},i(s){N||(C(v.$$.fragment,s),C(S.$$.fragment,s),N=!0)},o(s){A(v.$$.fragment,s),A(S.$$.fragment,s),N=!1},d(s){s&&o(e),s&&o(l),s&&o(n),s&&o(g),B(v,s),s&&o(H),B(S,s)}}}function O(c){return[`
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
</Splitpanes>`]}class W extends Y{constructor(e){super(),D(this,e,O,L,U,{})}}export{W as default};
