import{S as y,i as b,s as k,P as j,Q as d,R as x,n as m,o as f,U as S,_ as w,D as P,j as h,K as v,g as i,$ as z,e as u,X as D,a as g,b as _,d as q,Y as E,f as $,I as C,k as A}from"../chunks/external.b1ef9387.js";import{E as H}from"../chunks/ExampleArea.0b78e257.js";import{S as L,P as M}from"../chunks/svelte-splitpanes.9181211e.js";const O=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function T(c,t,l){const s=c.slice();return s[0]=t[l],s[2]=l,s}function B(c){let t,l=c[2]+1+"",s,e,a,n="Double click splitter ->",p;return{c(){t=u("span"),s=D(l),e=g(),a=u("p"),a.textContent=n,p=g()},l(r){t=_(r,"SPAN",{});var o=q(t);s=E(o,l),o.forEach(i),e=$(r),a=_(r,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1atcipd"&&(a.textContent=n),p=$(r)},m(r,o){h(r,t,o),A(t,s),h(r,e,o),h(r,a,o),h(r,p,o)},p:v,d(r){r&&(i(t),i(e),i(a),i(p))}}}function I(c){let t,l;return t=new M({props:{minSize:5,$$slots:{default:[B]},$$scope:{ctx:c}}}),{c(){j(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,e){x(t,s,e),l=!0},p(s,e){const a={};e&8&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){l||(m(t.$$.fragment,s),l=!0)},o(s){f(t.$$.fragment,s),l=!1},d(s){S(t,s)}}}function K(c){let t,l,s=w({length:8}),e=[];for(let a=0;a<s.length;a+=1)e[a]=I(T(c,s,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=P()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);t=P()},m(a,n){for(let p=0;p<e.length;p+=1)e[p]&&e[p].m(a,n);h(a,t,n),l=!0},p:v,i(a){if(!l){for(let n=0;n<s.length;n+=1)m(e[n]);l=!0}},o(a){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)f(e[n]);l=!1},d(a){a&&i(t),z(e,a)}}}function N(c){let t,l;return t=new L({props:{style:"height: 400px",$$slots:{default:[K]},$$scope:{ctx:c}}}),{c(){j(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,e){x(t,s,e),l=!0},p(s,[e]){const a={};e&8&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){l||(m(t.$$.fragment,s),l=!0)},o(s){f(t.$$.fragment,s),l=!1},d(s){S(t,s)}}}class Q extends y{constructor(t){super(),b(this,t,null,N,k,{})}}const R=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	{#each { length: 8 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
			<p>Double click splitter -></p>
		</Pane>
	{/each}
</Splitpanes>
`,U=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each { length: 8 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Double click splitter -&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:R,highlightedHTML:U,component:Q};function Y(c){let t,l="Lots of splitters & push other panes - all panes have a min width of 5%",s,e,a;return e=new H({props:{example:X}}),{c(){t=u("h2"),t.textContent=l,s=g(),j(e.$$.fragment)},l(n){t=_(n,"H2",{"data-svelte-h":!0}),C(t)!=="svelte-1ifg03p"&&(t.textContent=l),s=$(n),d(e.$$.fragment,n)},m(n,p){h(n,t,p),h(n,s,p),x(e,n,p),a=!0},p:v,i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){f(e.$$.fragment,n),a=!1},d(n){n&&(i(t),i(s)),S(e,n)}}}class W extends y{constructor(t){super(),b(this,t,null,Y,k,{})}}export{W as component,V as universal};
