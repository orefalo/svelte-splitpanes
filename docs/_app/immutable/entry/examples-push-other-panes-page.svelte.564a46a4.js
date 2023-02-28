import{S as j,i as d,s as x,O as f,P as m,Q as u,n as i,o as h,R as g,D as $,j as o,U as _,V as q,g as c,e as S,J as P,a as v,b as y,d as w,K as k,f as E,k as b}from"../chunks/external.43361b74.js";import{E as z}from"../chunks/ExampleArea.048388e3.js";import{S as L,P as A}from"../chunks/svelte-splitpanes.12713c7c.js";function C(p,s,l){const a=p.slice();return a[0]=s[l],a[2]=l,a}function H(p){let s,l=p[2]+1+"",a,n;return{c(){s=S("span"),a=P(l),n=v()},l(t){s=y(t,"SPAN",{});var e=w(s);a=k(e,l),e.forEach(c),n=E(t)},m(t,e){o(t,s,e),b(s,a),o(t,n,e)},p:_,d(t){t&&c(s),t&&c(n)}}}function B(p){let s,l;return s=new A({props:{minSize:5,$$slots:{default:[H]},$$scope:{ctx:p}}}),{c(){f(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,n){u(s,a,n),l=!0},p(a,n){const t={};n&8&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){l||(i(s.$$.fragment,a),l=!0)},o(a){h(s.$$.fragment,a),l=!1},d(a){g(s,a)}}}function D(p){let s,l,a={length:8},n=[];for(let t=0;t<a.length;t+=1)n[t]=B(C(p,a,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=$()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);s=$()},m(t,e){for(let r=0;r<n.length;r+=1)n[r].m(t,e);o(t,s,e),l=!0},p:_,i(t){if(!l){for(let e=0;e<a.length;e+=1)i(n[e]);l=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)h(n[e]);l=!1},d(t){q(n,t),t&&c(s)}}}function J(p){let s,l;return s=new L({props:{style:"height: 400px",$$slots:{default:[D]},$$scope:{ctx:p}}}),{c(){f(s.$$.fragment)},l(a){m(s.$$.fragment,a)},m(a,n){u(s,a,n),l=!0},p(a,[n]){const t={};n&8&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){l||(i(s.$$.fragment,a),l=!0)},o(a){h(s.$$.fragment,a),l=!1},d(a){g(s,a)}}}class K extends j{constructor(s){super(),d(this,s,null,J,x,{})}}const M=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes style="height: 400px">
	{#each { length: 8 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,N=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each { length: 8 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,O={code:M,highlightedHTML:N,component:K};function Q(p){let s,l,a,n,t;return n=new z({props:{example:O}}),{c(){s=S("h2"),l=P("Lots of splitters & push other panes - all panes have a min width of 5%"),a=v(),f(n.$$.fragment)},l(e){s=y(e,"H2",{});var r=w(s);l=k(r,"Lots of splitters & push other panes - all panes have a min width of 5%"),r.forEach(c),a=E(e),m(n.$$.fragment,e)},m(e,r){o(e,s,r),b(s,l),o(e,a,r),u(n,e,r),t=!0},p:_,i(e){t||(i(n.$$.fragment,e),t=!0)},o(e){h(n.$$.fragment,e),t=!1},d(e){e&&c(s),e&&c(a),g(n,e)}}}class V extends j{constructor(s){super(),d(this,s,null,Q,x,{})}}export{V as default};
