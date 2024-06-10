import{S as w,i as k,s as y,P as g,Q as h,R as $,n as u,o as j,U as _,a as C,f as v,j as i,g as f,e as x,b as d,I as P,K as z}from"../chunks/external.74a18536.js";import{E as N}from"../chunks/ExampleArea.11f0f408.js";import{S as q,P as S}from"../chunks/svelte-splitpanes.bce76399.js";const A=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:A},Symbol.toStringTag,{value:"Module"}));function O(r){let s,e="1";return{c(){s=x("span"),s.textContent=e},l(t){s=d(t,"SPAN",{"data-svelte-h":!0}),P(s)!=="svelte-4rug0j"&&(s.textContent=e)},m(t,n){i(t,s,n)},p:z,d(t){t&&f(s)}}}function E(r){let s,e="Note how double clicking has no resizing effects..";return{c(){s=x("p"),s.textContent=e},l(t){s=d(t,"P",{"data-svelte-h":!0}),P(s)!=="svelte-mf2ycj"&&(s.textContent=e)},m(t,n){i(t,s,n)},p:z,d(t){t&&f(s)}}}function F(r){let s,e="3";return{c(){s=x("span"),s.textContent=e},l(t){s=d(t,"SPAN",{"data-svelte-h":!0}),P(s)!=="svelte-100q5wx"&&(s.textContent=e)},m(t,n){i(t,s,n)},p:z,d(t){t&&f(s)}}}function H(r){let s,e,t,n,c,o;return s=new S({props:{size:33,$$slots:{default:[O]},$$scope:{ctx:r}}}),t=new S({props:{size:33,$$slots:{default:[E]},$$scope:{ctx:r}}}),c=new S({props:{size:34,$$slots:{default:[F]},$$scope:{ctx:r}}}),{c(){g(s.$$.fragment),e=C(),g(t.$$.fragment),n=C(),g(c.$$.fragment)},l(a){h(s.$$.fragment,a),e=v(a),h(t.$$.fragment,a),n=v(a),h(c.$$.fragment,a)},m(a,p){$(s,a,p),i(a,e,p),$(t,a,p),i(a,n,p),$(c,a,p),o=!0},p(a,p){const l={};p&1&&(l.$$scope={dirty:p,ctx:a}),s.$set(l);const m={};p&1&&(m.$$scope={dirty:p,ctx:a}),t.$set(m);const b={};p&1&&(b.$$scope={dirty:p,ctx:a}),c.$set(b)},i(a){o||(u(s.$$.fragment,a),u(t.$$.fragment,a),u(c.$$.fragment,a),o=!0)},o(a){j(s.$$.fragment,a),j(t.$$.fragment,a),j(c.$$.fragment,a),o=!1},d(a){a&&(f(e),f(n)),_(s,a),_(t,a),_(c,a)}}}function I(r){let s,e;return s=new q({props:{horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[H]},$$scope:{ctx:r}}}),{c(){g(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){$(s,t,n),e=!0},p(t,[n]){const c={};n&1&&(c.$$scope={dirty:n,ctx:t}),s.$set(c)},i(t){e||(u(s.$$.fragment,t),e=!0)},o(t){j(s.$$.fragment,t),e=!1},d(t){_(s,t)}}}class M extends w{constructor(s){super(),k(this,s,null,I,y,{})}}const T=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size={33}>
		<span>1</span>
	</Pane>
	<Pane size={33}>
		<p>Note how double clicking has no resizing effects..</p>
	</Pane>
	<Pane size={34}>
		<span>3</span>
	</Pane>
</Splitpanes>
`,B=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">dblClickSplitter</span>=<span class="hljs-string">{false}</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{33}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Note how double clicking has no resizing effects..<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{34}</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,D={code:T,highlightedHTML:B,component:M};function K(r){let s,e="Disable double click",t,n,c=`By default, double clicking the splitter will expand its nearest pane. In this example, we demonstrate how to turn
	this feature OFF`,o,a,p;return a=new N({props:{example:D}}),{c(){s=x("h2"),s.textContent=e,t=C(),n=x("p"),n.textContent=c,o=C(),g(a.$$.fragment)},l(l){s=d(l,"H2",{"data-svelte-h":!0}),P(s)!=="svelte-55691z"&&(s.textContent=e),t=v(l),n=d(l,"P",{"data-svelte-h":!0}),P(n)!=="svelte-1oo279b"&&(n.textContent=c),o=v(l),h(a.$$.fragment,l)},m(l,m){i(l,s,m),i(l,t,m),i(l,n,m),i(l,o,m),$(a,l,m),p=!0},p:z,i(l){p||(u(a.$$.fragment,l),p=!0)},o(l){j(a.$$.fragment,l),p=!1},d(l){l&&(f(s),f(t),f(n),f(o)),_(a,l)}}}class G extends w{constructor(s){super(),k(this,s,null,K,y,{})}}export{G as component,U as universal};
