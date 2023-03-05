import{S as B,i as S,s as R,O as h,a as j,P as $,f as d,Q as g,j as i,n as m,o as u,R as _,g as c,J as b,K as N,D as k,M as O,H as V,V as q,e as x,b as D,d as y,k as T,U as M}from"../chunks/external.da5a27b8.js";import{E as z}from"../chunks/ExampleArea.8e072f23.js";import{S as H,P as C}from"../chunks/svelte-splitpanes.8e3f4076.js";import{B as v}from"../chunks/Button.54c781eb.js";function w(r,s,l){const e=r.slice();return e[4]=s[l],e[6]=l,e}function J(r){let s;return{c(){s=b("+ ADD PANE")},l(l){s=N(l,"+ ADD PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function K(r){let s;return{c(){s=b("- REMOVE PANE")},l(l){s=N(l,"- REMOVE PANE")},m(l,e){i(l,s,e)},d(l){l&&c(s)}}}function L(r){let s,l=r[6]+1+"",e,t;return{c(){s=x("span"),e=b(l),t=j()},l(o){s=D(o,"SPAN",{});var a=y(s);e=N(a,l),a.forEach(c),t=d(o)},m(o,a){i(o,s,a),T(s,e),i(o,t,a)},p:M,d(o){o&&c(s),o&&c(t)}}}function A(r){let s,l;return s=new C({props:{minSize:10,$$slots:{default:[L]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,t){g(s,e,t),l=!0},p(e,t){const o={};t&128&&(o.$$scope={dirty:t,ctx:e}),s.$set(o)},i(e){l||(m(s.$$.fragment,e),l=!0)},o(e){u(s.$$.fragment,e),l=!1},d(e){_(s,e)}}}function Q(r){let s,l,e={length:r[0]},t=[];for(let a=0;a<e.length;a+=1)t[a]=A(w(r,e,a));const o=a=>u(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();s=k()},l(a){for(let n=0;n<t.length;n+=1)t[n].l(a);s=k()},m(a,n){for(let p=0;p<t.length;p+=1)t[p].m(a,n);i(a,s,n),l=!0},p(a,n){if(n&1){e={length:a[0]};let p;for(p=0;p<e.length;p+=1){const f=w(a,e,p);t[p]?(t[p].p(f,n),m(t[p],1)):(t[p]=A(f),t[p].c(),m(t[p],1),t[p].m(s.parentNode,s))}for(O(),p=e.length;p<t.length;p+=1)o(p);V()}},i(a){if(!l){for(let n=0;n<e.length;n+=1)m(t[n]);l=!0}},o(a){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)u(t[n]);l=!1},d(a){q(t,a),a&&c(s)}}}function U(r){let s,l,e,t,o,a;return s=new v({props:{$$slots:{default:[J]},$$scope:{ctx:r}}}),s.$on("click",r[2]),e=new v({props:{disabled:!r[1],$$slots:{default:[K]},$$scope:{ctx:r}}}),e.$on("click",r[3]),o=new H({props:{style:"height: 400px",$$slots:{default:[Q]},$$scope:{ctx:r}}}),{c(){h(s.$$.fragment),l=j(),h(e.$$.fragment),t=j(),h(o.$$.fragment)},l(n){$(s.$$.fragment,n),l=d(n),$(e.$$.fragment,n),t=d(n),$(o.$$.fragment,n)},m(n,p){g(s,n,p),i(n,l,p),g(e,n,p),i(n,t,p),g(o,n,p),a=!0},p(n,[p]){const f={};p&128&&(f.$$scope={dirty:p,ctx:n}),s.$set(f);const E={};p&2&&(E.disabled=!n[1]),p&128&&(E.$$scope={dirty:p,ctx:n}),e.$set(E);const P={};p&129&&(P.$$scope={dirty:p,ctx:n}),o.$set(P)},i(n){a||(m(s.$$.fragment,n),m(e.$$.fragment,n),m(o.$$.fragment,n),a=!0)},o(n){u(s.$$.fragment,n),u(e.$$.fragment,n),u(o.$$.fragment,n),a=!1},d(n){_(s,n),n&&c(l),_(e,n),n&&c(t),_(o,n)}}}function F(r,s,l){let e,t=3;const o=()=>{l(0,t++,t)},a=()=>{e&&l(0,t--,t)};return r.$$.update=()=>{r.$$.dirty&1&&l(1,e=t>0)},[t,e,o,a]}class G extends B{constructor(s){super(),S(this,s,F,U,R,{})}}const I=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let panesNumber = 3;
	$: allowToRemove = panesNumber > 0;
<\/script>

<Button
	on:click={() => {
		panesNumber++;
	}}>+ ADD PANE</Button>
<Button
	disabled={!allowToRemove}
	on:click={() => {
		if (allowToRemove) panesNumber--;
	}}>- REMOVE PANE</Button>

<Splitpanes style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> panesNumber = <span class="hljs-number">3</span>;
	<span class="hljs-attr">$</span>: allowToRemove = panesNumber &gt; <span class="hljs-number">0</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		panesNumber++;
	}}&gt;+ ADD PANE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">disabled</span>=<span class="hljs-string">{!allowToRemove}</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		if (allowToRemove) panesNumber--;
	}}&gt;- REMOVE PANE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
	{#each { length: panesNumber } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,X={code:I,highlightedHTML:W,component:G};function Y(r){let s,l,e,t,o;return t=new z({props:{example:X}}),{c(){s=x("h2"),l=b("Adding and removing panes programmatically"),e=j(),h(t.$$.fragment)},l(a){s=D(a,"H2",{});var n=y(s);l=N(n,"Adding and removing panes programmatically"),n.forEach(c),e=d(a),$(t.$$.fragment,a)},m(a,n){i(a,s,n),T(s,l),i(a,e,n),g(t,a,n),o=!0},p:M,i(a){o||(m(t.$$.fragment,a),o=!0)},o(a){u(t.$$.fragment,a),o=!1},d(a){a&&c(s),a&&c(e),_(t,a)}}}class as extends B{constructor(s){super(),S(this,s,null,Y,R,{})}}export{as as default};
