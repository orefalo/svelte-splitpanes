import{S as E,i as z,s as L,O as v,P,Q as b,n as f,o as m,T as y,D,j as h,L as k,X as q,g as o,e as u,I as g,a as _,b as $,d as j,J as d,f as x,k as S}from"../chunks/external.d956c198.js";import{E as O}from"../chunks/ExampleArea.4a3e9740.js";import{S as T,P as A}from"../chunks/svelte-splitpanes.690467bb.js";const C=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));function H(c,s,l){const t=c.slice();return t[0]=s[l],t[2]=l,t}function M(c){let s,l=c[2]+1+"",t,a,e,n,p;return{c(){s=u("span"),t=g(l),a=_(),e=u("p"),n=g("Double click splitter ->"),p=_()},l(r){s=$(r,"SPAN",{});var i=j(s);t=d(i,l),i.forEach(o),a=x(r),e=$(r,"P",{});var w=j(e);n=d(w,"Double click splitter ->"),w.forEach(o),p=x(r)},m(r,i){h(r,s,i),S(s,t),h(r,a,i),h(r,e,i),S(e,n),h(r,p,i)},p:k,d(r){r&&o(s),r&&o(a),r&&o(e),r&&o(p)}}}function B(c){let s,l;return s=new A({props:{minSize:5,$$slots:{default:[M]},$$scope:{ctx:c}}}),{c(){v(s.$$.fragment)},l(t){P(s.$$.fragment,t)},m(t,a){b(s,t,a),l=!0},p(t,a){const e={};a&8&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(f(s.$$.fragment,t),l=!0)},o(t){m(s.$$.fragment,t),l=!1},d(t){y(s,t)}}}function I(c){let s,l,t={length:8},a=[];for(let e=0;e<t.length;e+=1)a[e]=B(H(c,t,e));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();s=D()},l(e){for(let n=0;n<a.length;n+=1)a[n].l(e);s=D()},m(e,n){for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(e,n);h(e,s,n),l=!0},p:k,i(e){if(!l){for(let n=0;n<t.length;n+=1)f(a[n]);l=!0}},o(e){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)m(a[n]);l=!1},d(e){q(a,e),e&&o(s)}}}function J(c){let s,l;return s=new T({props:{style:"height: 400px",$$slots:{default:[I]},$$scope:{ctx:c}}}),{c(){v(s.$$.fragment)},l(t){P(s.$$.fragment,t)},m(t,a){b(s,t,a),l=!0},p(t,[a]){const e={};a&8&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){l||(f(s.$$.fragment,t),l=!0)},o(t){m(s.$$.fragment,t),l=!1},d(t){y(s,t)}}}class N extends E{constructor(s){super(),z(this,s,null,J,L,{})}}const Q=`<script>
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
`,X=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
`,F={code:Q,highlightedHTML:X,component:N};function G(c){let s,l,t,a,e;return a=new O({props:{example:F}}),{c(){s=u("h2"),l=g("Lots of splitters & push other panes - all panes have a min width of 5%"),t=_(),v(a.$$.fragment)},l(n){s=$(n,"H2",{});var p=j(s);l=d(p,"Lots of splitters & push other panes - all panes have a min width of 5%"),p.forEach(o),t=x(n),P(a.$$.fragment,n)},m(n,p){h(n,s,p),S(s,l),h(n,t,p),b(a,n,p),e=!0},p:k,i(n){e||(f(a.$$.fragment,n),e=!0)},o(n){m(a.$$.fragment,n),e=!1},d(n){n&&o(s),n&&o(t),y(a,n)}}}class W extends E{constructor(s){super(),z(this,s,null,G,L,{})}}export{W as component,V as universal};
