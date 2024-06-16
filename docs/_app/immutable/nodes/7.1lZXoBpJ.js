import{S as A,i as C,s as L,e as d,X as q,a as v,b as j,d as k,Y as N,g as m,f as _,h as b,W as x,j as g,k as y,a9 as H,F as I,Z as U,K as w,C as X,a1 as B,P as S,Q as T,I as M,R,a2 as F,n as $,o as z,U as E,_ as K,D as O,$ as Q}from"../chunks/external.DYoZMhMv.js";import{E as V}from"../chunks/ExampleArea.CvEsQBhe.js";import{S as W,P as Y}from"../chunks/svelte-splitpanes.B4siGReC.js";const Z=!0,ds=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z},Symbol.toStringTag,{value:"Module"}));function G(i){let s,t,n=i[0]+`
`,l,a,e,o,f;return{c(){s=d("div"),t=d("pre"),l=q(n),a=v(),e=d("textarea"),this.h()},l(h){s=j(h,"DIV",{class:!0});var c=k(s);t=j(c,"PRE",{"aria-hidden":!0,style:!0,class:!0});var p=k(t);l=N(p,n),p.forEach(m),a=_(c),e=j(c,"TEXTAREA",{style:!0,class:!0}),k(e).forEach(m),c.forEach(m),this.h()},h(){b(t,"aria-hidden","true"),x(t,"min-height",i[2]),x(t,"max-height",i[1]),b(t,"class","svelte-1gm0t61"),e.readOnly=!0,x(e,"outline","none"),b(e,"class","svelte-1gm0t61"),b(s,"class","container svelte-1gm0t61")},m(h,c){g(h,s,c),y(s,t),y(t,l),y(s,a),y(s,e),H(e,i[0]),o||(f=I(e,"input",i[5]),o=!0)},p(h,[c]){c&1&&n!==(n=h[0]+`
`)&&U(l,n),c&4&&x(t,"min-height",h[2]),c&2&&x(t,"max-height",h[1]),c&1&&H(e,h[0])},i:w,o:w,d(h){h&&m(s),o=!1,f()}}}function ss(i,s,t){let n,l,{value:a=""}=s,{minRows:e=1}=s,{maxRows:o=40}=s;const f=p=>p.split(/\r?\n/);function h(p,r){const u=f(p);return u.length=r,u.reduce(function(J,D){return J+`
`+D})}function c(){a=this.value,t(0,a),t(4,o)}return i.$$set=p=>{"value"in p&&t(0,a=p.value),"minRows"in p&&t(3,e=p.minRows),"maxRows"in p&&t(4,o=p.maxRows)},i.$$.update=()=>{i.$$.dirty&17&&t(0,a=h(a,o)),i.$$.dirty&8&&t(2,n=`${1+e*1.2}em`),i.$$.dirty&16&&t(1,l=o?`${1+o*1.2}em`:"auto")},[a,l,n,e,o,c]}class es extends A{constructor(s){super(),C(this,s,ss,G,L,{value:0,minRows:3,maxRows:4})}}function ns(i,s,t){const n=i.slice();return n[3]=s[t],n[5]=t,n}function as(i){let s,t=i[5]+1+"",n,l;return{c(){s=d("span"),n=q(t),l=v()},l(a){s=j(a,"SPAN",{});var e=k(s);n=N(e,t),e.forEach(m),l=_(a)},m(a,e){g(a,s,e),y(s,n),g(a,l,e)},p:w,d(a){a&&(m(s),m(l))}}}function ts(i){let s,t;return s=new Y({props:{minSize:10,$$slots:{default:[as]},$$scope:{ctx:i}}}),{c(){S(s.$$.fragment)},l(n){T(s.$$.fragment,n)},m(n,l){R(s,n,l),t=!0},p(n,l){const a={};l&64&&(a.$$scope={dirty:l,ctx:n}),s.$set(a)},i(n){t||($(s.$$.fragment,n),t=!0)},o(n){z(s.$$.fragment,n),t=!1},d(n){E(s,n)}}}function ls(i){let s,t,n=K({length:3}),l=[];for(let a=0;a<n.length;a+=1)l[a]=ts(ns(i,n,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();s=O()},l(a){for(let e=0;e<l.length;e+=1)l[e].l(a);s=O()},m(a,e){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(a,e);g(a,s,e),t=!0},p:w,i(a){if(!t){for(let e=0;e<n.length;e+=1)$(l[e]);t=!0}},o(a){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)z(l[e]);t=!1},d(a){a&&m(s),Q(l,a)}}}function ps(i){let s,t,n,l="Try resizing panes and check the logs bellow.",a,e,o,f;s=new W({props:{style:"height: 400px",$$slots:{default:[ls]},$$scope:{ctx:i}}}),s.$on("ready",i[1]),s.$on("resize",i[1]),s.$on("resized",i[1]),s.$on("pane-click",i[1]),s.$on("pane-maximize",i[1]),s.$on("pane-add",i[1]),s.$on("pane-remove",i[1]),s.$on("splitter-click",i[1]);function h(p){i[2](p)}let c={minRows:4,maxRows:40};return i[0]!==void 0&&(c.value=i[0]),e=new es({props:c}),X.push(()=>B(e,"value",h)),{c(){S(s.$$.fragment),t=v(),n=d("p"),n.textContent=l,a=v(),S(e.$$.fragment)},l(p){T(s.$$.fragment,p),t=_(p),n=j(p,"P",{"data-svelte-h":!0}),M(n)!=="svelte-duj1zz"&&(n.textContent=l),a=_(p),T(e.$$.fragment,p)},m(p,r){R(s,p,r),g(p,t,r),g(p,n,r),g(p,a,r),R(e,p,r),f=!0},p(p,[r]){const u={};r&64&&(u.$$scope={dirty:r,ctx:p}),s.$set(u);const P={};!o&&r&1&&(o=!0,P.value=p[0],F(()=>o=!1)),e.$set(P)},i(p){f||($(s.$$.fragment,p),$(e.$$.fragment,p),f=!0)},o(p){z(s.$$.fragment,p),z(e.$$.fragment,p),f=!1},d(p){p&&(m(t),m(n),m(a)),E(s,p),E(e,p)}}}function is(i,s,t){let n="// Event name: Event params   (Last event at the top)";function l(e){e.detail?t(0,n=e.type+" "+JSON.stringify(e.detail)+`
`+n):t(0,n=e.type+`
`+n)}function a(e){n=e,t(0,n)}return[n,l,a]}class rs extends A{constructor(s){super(),C(this,s,is,ps,L,{})}}const os=`<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import TextArea from '$comp/TextAreaAutosize.svelte';

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event: any) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\\n' + val;
		else val = event.type + '\\n' + val;
	}
<\/script>

<Splitpanes
	style="height: 400px"
	on:ready={handleMessage}
	on:resize={handleMessage}
	on:resized={handleMessage}
	on:pane-click={handleMessage}
	on:pane-maximize={handleMessage}
	on:pane-add={handleMessage}
	on:pane-remove={handleMessage}
	on:splitter-click={handleMessage}>
	{#each { length: 3 } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>

<p>Try resizing panes and check the logs bellow.</p>

<TextArea bind:value={val} minRows={4} maxRows={40} />
`,cs=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">TextArea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/TextAreaAutosize.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> val = <span class="hljs-string">&#x27;// Event name: Event params   (Last event at the top)&#x27;</span>;

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
		<span class="hljs-keyword">if</span> (event.<span class="hljs-property">detail</span>) val = event.<span class="hljs-property">type</span> + <span class="hljs-string">&#x27; &#x27;</span> + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event.<span class="hljs-property">detail</span>) + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;
		<span class="hljs-keyword">else</span> val = event.<span class="hljs-property">type</span> + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span>
	<span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>
	<span class="hljs-attr">on:ready</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:resize</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:resized</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:pane-click</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:pane-maximize</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:pane-add</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:pane-remove</span>=<span class="hljs-string">{handleMessage}</span>
	<span class="hljs-attr">on:splitter-click</span>=<span class="hljs-string">{handleMessage}</span>&gt;</span>
	{#each { length: 3 } as _, i}
		<span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
	{/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try resizing panes and check the logs bellow.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{val}</span> <span class="hljs-attr">minRows</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">maxRows</span>=<span class="hljs-string">{40}</span> /&gt;</span>
`,hs={code:os,highlightedHTML:cs,component:rs};function ms(i){let s,t="Listening to emitted events",n,l,a="Here is the list of events that are emitted from splitpanes:",e,o,f=`<li>ready has no parameter and fires when splitpanes is ready</li> <li>resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions</li> <li>resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.</li> <li>pane-click returns the clicked pane object with its dimensions.</li> <li>pane-maximize returns the maximized pane object with its dimensions.</li> <li>pane-add returns an object containing the index of the added pane and the new array of panes after resize.</li> <li>pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.</li> <li>splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.</li>`,h,c,p;return c=new V({props:{example:hs}}),{c(){s=d("h2"),s.textContent=t,n=v(),l=d("p"),l.textContent=a,e=v(),o=d("ul"),o.innerHTML=f,h=v(),S(c.$$.fragment)},l(r){s=j(r,"H2",{"data-svelte-h":!0}),M(s)!=="svelte-11dglzf"&&(s.textContent=t),n=_(r),l=j(r,"P",{"data-svelte-h":!0}),M(l)!=="svelte-1fepioh"&&(l.textContent=a),e=_(r),o=j(r,"UL",{"data-svelte-h":!0}),M(o)!=="svelte-cxrzub"&&(o.innerHTML=f),h=_(r),T(c.$$.fragment,r)},m(r,u){g(r,s,u),g(r,n,u),g(r,l,u),g(r,e,u),g(r,o,u),g(r,h,u),R(c,r,u),p=!0},p:w,i(r){p||($(c.$$.fragment,r),p=!0)},o(r){z(c.$$.fragment,r),p=!1},d(r){r&&(m(s),m(n),m(l),m(e),m(o),m(h)),E(c,r)}}}class js extends A{constructor(s){super(),C(this,s,null,ms,L,{})}}export{js as component,ds as universal};
