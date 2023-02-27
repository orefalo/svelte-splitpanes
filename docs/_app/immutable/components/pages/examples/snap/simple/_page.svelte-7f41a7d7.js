import{S as j,i as k,s as A,Q as c,R as u,T as _,n as x,o as g,V as S,a as d,f as h,j as $,g as l,e as v,L as z,b as y,d as w,M as E,O as U,k as I,I as C}from"../../../../../chunks/external-72760700.js";import{E as q}from"../../../../../chunks/ExampleArea-7f653be5.js";import{S as H,P}from"../../../../../chunks/svelte-splitpanes-10cfb389.js";function L(m){let e,p;return{c(){e=v("span"),p=z("I have a snap size of 10%"),this.h()},l(n){e=y(n,"SPAN",{style:!0});var a=w(e);p=E(a,"I have a snap size of 10%"),a.forEach(l),this.h()},h(){U(e,"font-size","20px")},m(n,a){$(n,e,a),I(e,p)},p:C,d(n){n&&l(e)}}}function M(m){let e,p,n,a,r,f;return e=new P({props:{snapSize:10,$$slots:{default:[L]},$$scope:{ctx:m}}}),n=new P({}),r=new P({}),{c(){c(e.$$.fragment),p=d(),c(n.$$.fragment),a=d(),c(r.$$.fragment)},l(t){u(e.$$.fragment,t),p=h(t),u(n.$$.fragment,t),a=h(t),u(r.$$.fragment,t)},m(t,i){_(e,t,i),$(t,p,i),_(n,t,i),$(t,a,i),_(r,t,i),f=!0},p(t,i){const s={};i&1&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){f||(x(e.$$.fragment,t),x(n.$$.fragment,t),x(r.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(n.$$.fragment,t),g(r.$$.fragment,t),f=!1},d(t){S(e,t),t&&l(p),S(n,t),t&&l(a),S(r,t)}}}function N(m){let e,p;return e=new H({props:{style:"height: 400px",$$slots:{default:[M]},$$scope:{ctx:m}}}),{c(){c(e.$$.fragment)},l(n){u(e.$$.fragment,n)},m(n,a){_(e,n,a),p=!0},p(n,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:n}),e.$set(r)},i(n){p||(x(e.$$.fragment,n),p=!0)},o(n){g(e.$$.fragment,n),p=!1},d(n){S(e,n)}}}class O extends j{constructor(e){super(),k(this,e,null,N,A,{})}}const Q=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />

	<Pane />
</Splitpanes>
`,R="../../src/routes/examples/snap/simple/code.svelte",T={id:R,code:Q,component:O};function V(m){let e,p,n,a,r,f,t,i;return t=new q({props:{example:T}}),{c(){e=v("h2"),p=z("Simple snap"),n=d(),a=v("p"),r=z("Using snapSize on a pane makes it snap to his adjacent splitters and borders."),f=d(),c(t.$$.fragment)},l(s){e=y(s,"H2",{});var o=w(e);p=E(o,"Simple snap"),o.forEach(l),n=h(s),a=y(s,"P",{});var b=w(a);r=E(b,"Using snapSize on a pane makes it snap to his adjacent splitters and borders."),b.forEach(l),f=h(s),u(t.$$.fragment,s)},m(s,o){$(s,e,o),I(e,p),$(s,n,o),$(s,a,o),I(a,r),$(s,f,o),_(t,s,o),i=!0},p:C,i(s){i||(x(t.$$.fragment,s),i=!0)},o(s){g(t.$$.fragment,s),i=!1},d(s){s&&l(e),s&&l(n),s&&l(a),s&&l(f),S(t,s)}}}class G extends j{constructor(e){super(),k(this,e,null,V,A,{})}}export{G as default};
