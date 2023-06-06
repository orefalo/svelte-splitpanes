import{S as j,i as d,s as x,O as f,P as m,Q as u,n as i,o as h,T as g,D as $,j as o,L as _,X as E,g as c,e as S,I as v,a as P,b as y,d as w,J as b,f as k,k as z}from"../chunks/external.f7ab61d0.js";import{E as L}from"../chunks/ExampleArea.af539383.js";import{S as q,P as O}from"../chunks/svelte-splitpanes.e4cd390e.js";const T=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function A(p,s,l){const t=p.slice();return t[0]=s[l],t[2]=l,t}function C(p){let s,l=p[2]+1+"",t,e;return{c(){s=S("span"),t=v(l),e=P()},l(a){s=y(a,"SPAN",{});var n=w(s);t=b(n,l),n.forEach(c),e=k(a)},m(a,n){o(a,s,n),z(s,t),o(a,e,n)},p:_,d(a){a&&c(s),a&&c(e)}}}function H(p){let s,l;return s=new O({props:{minSize:5,$$slots:{default:[C]},$$scope:{ctx:p}}}),{c(){f(s.$$.fragment)},l(t){m(s.$$.fragment,t)},m(t,e){u(s,t,e),l=!0},p(t,e){const a={};e&8&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){l||(i(s.$$.fragment,t),l=!0)},o(t){h(s.$$.fragment,t),l=!1},d(t){g(s,t)}}}function M(p){let s,l,t={length:8},e=[];for(let a=0;a<t.length;a+=1)e[a]=H(A(p,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=$()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);s=$()},m(a,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,n);o(a,s,n),l=!0},p:_,i(a){if(!l){for(let n=0;n<t.length;n+=1)i(e[n]);l=!0}},o(a){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)h(e[n]);l=!1},d(a){E(e,a),a&&c(s)}}}function B(p){let s,l;return s=new q({props:{style:"height: 400px",$$slots:{default:[M]},$$scope:{ctx:p}}}),{c(){f(s.$$.fragment)},l(t){m(s.$$.fragment,t)},m(t,e){u(s,t,e),l=!0},p(t,[e]){const a={};e&8&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){l||(i(s.$$.fragment,t),l=!0)},o(t){h(s.$$.fragment,t),l=!1},d(t){g(s,t)}}}class D extends j{constructor(s){super(),d(this,s,null,B,x,{})}}const I=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	{#each { length: 8 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each { length: 8 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,N={code:I,highlightedHTML:J,component:D};function Q(p){let s,l,t,e,a;return e=new L({props:{example:N}}),{c(){s=S("h2"),l=v("Lots of splitters & push other panes - all panes have a min width of 5%"),t=P(),f(e.$$.fragment)},l(n){s=y(n,"H2",{});var r=w(s);l=b(r,"Lots of splitters & push other panes - all panes have a min width of 5%"),r.forEach(c),t=k(n),m(e.$$.fragment,n)},m(n,r){o(n,s,r),z(s,l),o(n,t,r),u(e,n,r),a=!0},p:_,i(n){a||(i(e.$$.fragment,n),a=!0)},o(n){h(e.$$.fragment,n),a=!1},d(n){n&&c(s),n&&c(t),g(e,n)}}}class R extends j{constructor(s){super(),d(this,s,null,Q,x,{})}}export{R as component,K as universal};
