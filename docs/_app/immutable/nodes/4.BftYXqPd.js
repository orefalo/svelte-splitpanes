import{S as C,i as M,s as V,P as d,a as g,Q as x,f as _,R as z,j as f,n as j,o as S,g as c,U as w,X as P,Y as T,Z as q,_ as E,D as H,K as b,$ as L,e as k,b as v,d as A,k as O,I as B}from"../chunks/external.D6DzbhJx.js";import{E as D}from"../chunks/ExampleArea.CG0T9HS5.js";import{S as I,P as K}from"../chunks/svelte-splitpanes.DVC8h31e.js";import{B as y}from"../chunks/Button.DbOIIiSF.js";const N=!0,rt=Object.freeze(Object.defineProperty({__proto__:null,prerender:N},Symbol.toStringTag,{value:"Module"}));function Q(r,s,l){const t=r.slice();return t[4]=s[l],t[6]=l,t}function R(r){let s=r[0]?"Turn to Vertical":"Turn to Horizontal",l;return{c(){l=P(s)},l(t){l=T(t,s)},m(t,n){f(t,l,n)},p(t,n){n&1&&s!==(s=t[0]?"Turn to Vertical":"Turn to Horizontal")&&q(l,s)},d(t){t&&c(l)}}}function U(r){let s=r[1]?"Hide first splitter":"Show first Splitter",l;return{c(){l=P(s)},l(t){l=T(t,s)},m(t,n){f(t,l,n)},p(t,n){n&2&&s!==(s=t[1]?"Hide first splitter":"Show first Splitter")&&q(l,s)},d(t){t&&c(l)}}}function W(r){let s,l=r[6]+1+"",t,n;return{c(){s=k("span"),t=P(l),n=g()},l(a){s=v(a,"SPAN",{});var p=A(s);t=T(p,l),p.forEach(c),n=_(a)},m(a,p){f(a,s,p),O(s,t),f(a,n,p)},p:b,d(a){a&&(c(s),c(n))}}}function X(r){let s,l;return s=new K({props:{minSize:5,$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){d(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,n){z(s,t,n),l=!0},p(t,n){const a={};n&128&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){l||(j(s.$$.fragment,t),l=!0)},o(t){S(s.$$.fragment,t),l=!1},d(t){w(s,t)}}}function Y(r){let s,l,t=E({length:3}),n=[];for(let a=0;a<t.length;a+=1)n[a]=X(Q(r,t,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();s=H()},l(a){for(let p=0;p<n.length;p+=1)n[p].l(a);s=H()},m(a,p){for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(a,p);f(a,s,p),l=!0},p:b,i(a){if(!l){for(let p=0;p<t.length;p+=1)j(n[p]);l=!0}},o(a){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)S(n[p]);l=!1},d(a){a&&c(s),L(n,a)}}}function Z(r){let s,l,t,n,a,p;return s=new y({props:{$$slots:{default:[R]},$$scope:{ctx:r}}}),s.$on("click",r[2]),t=new y({props:{$$slots:{default:[U]},$$scope:{ctx:r}}}),t.$on("click",r[3]),a=new I({props:{style:"height: 400px",firstSplitter:r[1],horizontal:r[0],$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){d(s.$$.fragment),l=g(),d(t.$$.fragment),n=g(),d(a.$$.fragment)},l(e){x(s.$$.fragment,e),l=_(e),x(t.$$.fragment,e),n=_(e),x(a.$$.fragment,e)},m(e,o){z(s,e,o),f(e,l,o),z(t,e,o),f(e,n,o),z(a,e,o),p=!0},p(e,[o]){const m={};o&129&&(m.$$scope={dirty:o,ctx:e}),s.$set(m);const h={};o&130&&(h.$$scope={dirty:o,ctx:e}),t.$set(h);const u={};o&2&&(u.firstSplitter=e[1]),o&1&&(u.horizontal=e[0]),o&128&&(u.$$scope={dirty:o,ctx:e}),a.$set(u)},i(e){p||(j(s.$$.fragment,e),j(t.$$.fragment,e),j(a.$$.fragment,e),p=!0)},o(e){S(s.$$.fragment,e),S(t.$$.fragment,e),S(a.$$.fragment,e),p=!1},d(e){e&&(c(l),c(n)),w(s,e),w(t,e),w(a,e)}}}function F(r,s,l){let t=!1,n=!1;return[t,n,()=>{l(0,t=!t)},()=>{l(1,n=!n)}]}class G extends C{constructor(s){super(),M(this,s,F,Z,V,{})}}const J=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let horizontal = false;
	let firstSplitter = false;
<\/script>

<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button>
<Splitpanes style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
`,tt=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> horizontal = <span class="hljs-literal">false</span>;
	<span class="hljs-keyword">let</span> firstSplitter = <span class="hljs-literal">false</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		horizontal = !horizontal;
	}}&gt;{horizontal ? &#x27;Turn to Vertical&#x27; : &#x27;Turn to Horizontal&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
	<span class="hljs-attr">on:click</span>=<span class="hljs-string">{()</span> =&gt;</span> {
		firstSplitter = !firstSplitter;
	}}&gt;{firstSplitter ? &#x27;Hide first splitter&#x27; : &#x27;Show first Splitter&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> {<span class="hljs-attr">firstSplitter</span>} {<span class="hljs-attr">horizontal</span>}&gt;</span>
	{#each { length: 3 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{5}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,st={code:J,highlightedHTML:tt,component:G};function nt(r){let s,l="Change orientation & first splitter",t,n,a="When changing direction, all the panes current width or height will flip to adapt to the new layout.",p,e,o=`Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane.<br/>
	The first splitter does not allow to resize the next pane.`,m,h,u;return h=new D({props:{example:st}}),{c(){s=k("h2"),s.textContent=l,t=g(),n=k("p"),n.textContent=a,p=g(),e=k("p"),e.innerHTML=o,m=g(),d(h.$$.fragment)},l(i){s=v(i,"H2",{"data-svelte-h":!0}),B(s)!=="svelte-y44nzx"&&(s.textContent=l),t=_(i),n=v(i,"P",{"data-svelte-h":!0}),B(n)!=="svelte-ndz3uw"&&(n.textContent=a),p=_(i),e=v(i,"P",{"data-svelte-h":!0}),B(e)!=="svelte-48wmo4"&&(e.innerHTML=o),m=_(i),x(h.$$.fragment,i)},m(i,$){f(i,s,$),f(i,t,$),f(i,n,$),f(i,p,$),f(i,e,$),f(i,m,$),z(h,i,$),u=!0},p:b,i(i){u||(j(h.$$.fragment,i),u=!0)},o(i){S(h.$$.fragment,i),u=!1},d(i){i&&(c(s),c(t),c(n),c(p),c(e),c(m)),w(h,i)}}}class it extends C{constructor(s){super(),M(this,s,null,nt,V,{})}}export{it as component,rt as universal};
