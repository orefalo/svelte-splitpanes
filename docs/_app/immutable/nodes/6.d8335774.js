import{S as ne,i as ae,s as te,e as g,I as x,a as y,b as j,d as v,J as z,g as c,f as w,h as D,V as O,j as b,k as o,a7 as fe,F as ge,W as je,L as H,C as ve,Z as _e,O as V,P as X,Q as B,_ as ye,n as J,o as N,T as F,D as ue,X as we}from"../chunks/external.768903b6.js";import{E as xe}from"../chunks/ExampleArea.aad150a6.js";import{S as ze,P as be}from"../chunks/svelte-splitpanes.87854b3a.js";const $e=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:$e},Symbol.toStringTag,{value:"Module"}));function ke(p){let e,t,n=p[0]+`
`,i,a,s,r,_;return{c(){e=g("div"),t=g("pre"),i=x(n),a=y(),s=g("textarea"),this.h()},l(d){e=j(d,"DIV",{class:!0});var m=v(e);t=j(m,"PRE",{"aria-hidden":!0,style:!0,class:!0});var l=v(t);i=z(l,n),l.forEach(c),a=w(m),s=j(m,"TEXTAREA",{style:!0,class:!0}),v(s).forEach(c),m.forEach(c),this.h()},h(){D(t,"aria-hidden","true"),O(t,"min-height",p[2]),O(t,"max-height",p[1]),D(t,"class","svelte-1gm0t61"),s.readOnly=!0,O(s,"outline","none"),D(s,"class","svelte-1gm0t61"),D(e,"class","container svelte-1gm0t61")},m(d,m){b(d,e,m),o(e,t),o(t,i),o(e,a),o(e,s),fe(s,p[0]),r||(_=ge(s,"input",p[5]),r=!0)},p(d,[m]){m&1&&n!==(n=d[0]+`
`)&&je(i,n),m&4&&O(t,"min-height",d[2]),m&2&&O(t,"max-height",d[1]),m&1&&fe(s,d[0])},i:H,o:H,d(d){d&&c(e),r=!1,_()}}}function Ee(p,e,t){let n,i,{value:a=""}=e,{minRows:s=1}=e,{maxRows:r=40}=e;const _=l=>l.split(/\r?\n/);function d(l,f){const k=_(l);return k.length=f,k.reduce(function(T,S){return T+`
`+S})}function m(){a=this.value,t(0,a),t(4,r)}return p.$$set=l=>{"value"in l&&t(0,a=l.value),"minRows"in l&&t(3,s=l.minRows),"maxRows"in l&&t(4,r=l.maxRows)},p.$$.update=()=>{p.$$.dirty&17&&t(0,a=d(a,r)),p.$$.dirty&8&&t(2,n=`${1+s*1.2}em`),p.$$.dirty&16&&t(1,i=r?`${1+r*1.2}em`:"auto")},[a,i,n,s,r,m]}class Me extends ne{constructor(e){super(),ae(this,e,Ee,ke,te,{value:0,minRows:3,maxRows:4})}}function Te(p,e,t){const n=p.slice();return n[3]=e[t],n[5]=t,n}function Se(p){let e,t=p[5]+1+"",n,i;return{c(){e=g("span"),n=x(t),i=y()},l(a){e=j(a,"SPAN",{});var s=v(e);n=z(s,t),s.forEach(c),i=w(a)},m(a,s){b(a,e,s),o(e,n),b(a,i,s)},p:H,d(a){a&&c(e),a&&c(i)}}}function Le(p){let e,t;return e=new be({props:{minSize:10,$$slots:{default:[Se]},$$scope:{ctx:p}}}),{c(){V(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,i){B(e,n,i),t=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Ae(p){let e,t,n={length:3},i=[];for(let a=0;a<n.length;a+=1)i[a]=Le(Te(p,n,a));return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=ue()},l(a){for(let s=0;s<i.length;s+=1)i[s].l(a);e=ue()},m(a,s){for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(a,s);b(a,e,s),t=!0},p:H,i(a){if(!t){for(let s=0;s<n.length;s+=1)J(i[s]);t=!0}},o(a){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)N(i[s]);t=!1},d(a){we(i,a),a&&c(e)}}}function Re(p){let e,t,n,i,a,s,r,_;e=new ze({props:{style:"height: 400px",$$slots:{default:[Ae]},$$scope:{ctx:p}}}),e.$on("ready",p[1]),e.$on("resize",p[1]),e.$on("resized",p[1]),e.$on("pane-click",p[1]),e.$on("pane-maximize",p[1]),e.$on("pane-add",p[1]),e.$on("pane-remove",p[1]),e.$on("splitter-click",p[1]);function d(l){p[2](l)}let m={minRows:4,maxRows:40};return p[0]!==void 0&&(m.value=p[0]),s=new Me({props:m}),ve.push(()=>_e(s,"value",d)),{c(){V(e.$$.fragment),t=y(),n=g("p"),i=x("Try resizing panes and check the logs bellow."),a=y(),V(s.$$.fragment)},l(l){X(e.$$.fragment,l),t=w(l),n=j(l,"P",{});var f=v(n);i=z(f,"Try resizing panes and check the logs bellow."),f.forEach(c),a=w(l),X(s.$$.fragment,l)},m(l,f){B(e,l,f),b(l,t,f),b(l,n,f),o(n,i),b(l,a,f),B(s,l,f),_=!0},p(l,[f]){const k={};f&64&&(k.$$scope={dirty:f,ctx:l}),e.$set(k);const E={};!r&&f&1&&(r=!0,E.value=l[0],ye(()=>r=!1)),s.$set(E)},i(l){_||(J(e.$$.fragment,l),J(s.$$.fragment,l),_=!0)},o(l){N(e.$$.fragment,l),N(s.$$.fragment,l),_=!1},d(l){F(e,l),l&&c(t),l&&c(n),l&&c(a),F(s,l)}}}function Pe(p,e,t){let n="// Event name: Event params   (Last event at the top)";function i(s){s.detail?t(0,n=s.type+" "+JSON.stringify(s.detail)+`
`+n):t(0,n=s.type+`
`+n)}function a(s){n=s,t(0,n)}return[n,i,a]}class Ie extends ne{constructor(e){super(),ae(this,e,Pe,Re,te,{})}}const Oe=`<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import TextArea from '$comp/TextAreaAutosize.svelte';

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event) {
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
`,He=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

	<span class="hljs-keyword">import</span> <span class="hljs-title class_">TextArea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/TextAreaAutosize.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> val = <span class="hljs-string">&#x27;// Event name: Event params   (Last event at the top)&#x27;</span>;

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event</span>) {
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
`,Je={code:Oe,highlightedHTML:He,component:Ie};function Ne(p){let e,t,n,i,a,s,r,_,d,m,l,f,k,E,T,S,L,Q,U,A,W,Z,R,G,K,P,Y,ee,I,se,q,M,C;return M=new xe({props:{example:Je}}),{c(){e=g("h2"),t=x("Listening to emitted events"),n=y(),i=g("p"),a=x("Here is the list of events that are emitted from splitpanes:"),s=y(),r=g("ul"),_=g("li"),d=x("ready has no parameter and fires when splitpanes is ready"),m=y(),l=g("li"),f=x(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),k=y(),E=g("li"),T=x(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),S=y(),L=g("li"),Q=x("pane-click returns the clicked pane object with its dimensions."),U=y(),A=g("li"),W=x("pane-maximize returns the maximized pane object with its dimensions."),Z=y(),R=g("li"),G=x("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),K=y(),P=g("li"),Y=x(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ee=y(),I=g("li"),se=x(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),q=y(),V(M.$$.fragment)},l(h){e=j(h,"H2",{});var $=v(e);t=z($,"Listening to emitted events"),$.forEach(c),n=w(h),i=j(h,"P",{});var le=v(i);a=z(le,"Here is the list of events that are emitted from splitpanes:"),le.forEach(c),s=w(h),r=j(h,"UL",{});var u=v(r);_=j(u,"LI",{});var ie=v(_);d=z(ie,"ready has no parameter and fires when splitpanes is ready"),ie.forEach(c),m=w(u),l=j(u,"LI",{});var re=v(l);f=z(re,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),re.forEach(c),k=w(u),E=j(u,"LI",{});var pe=v(E);T=z(pe,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),pe.forEach(c),S=w(u),L=j(u,"LI",{});var oe=v(L);Q=z(oe,"pane-click returns the clicked pane object with its dimensions."),oe.forEach(c),U=w(u),A=j(u,"LI",{});var ce=v(A);W=z(ce,"pane-maximize returns the maximized pane object with its dimensions."),ce.forEach(c),Z=w(u),R=j(u,"LI",{});var he=v(R);G=z(he,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),he.forEach(c),K=w(u),P=j(u,"LI",{});var me=v(P);Y=z(me,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),me.forEach(c),ee=w(u),I=j(u,"LI",{});var de=v(I);se=z(de,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),de.forEach(c),u.forEach(c),q=w(h),X(M.$$.fragment,h)},m(h,$){b(h,e,$),o(e,t),b(h,n,$),b(h,i,$),o(i,a),b(h,s,$),b(h,r,$),o(r,_),o(_,d),o(r,m),o(r,l),o(l,f),o(r,k),o(r,E),o(E,T),o(r,S),o(r,L),o(L,Q),o(r,U),o(r,A),o(A,W),o(r,Z),o(r,R),o(R,G),o(r,K),o(r,P),o(P,Y),o(r,ee),o(r,I),o(I,se),b(h,q,$),B(M,h,$),C=!0},p:H,i(h){C||(J(M.$$.fragment,h),C=!0)},o(h){N(M.$$.fragment,h),C=!1},d(h){h&&c(e),h&&c(n),h&&c(i),h&&c(s),h&&c(r),h&&c(q),F(M,h)}}}class Xe extends ne{constructor(e){super(),ae(this,e,null,Ne,te,{})}}export{Xe as component,Ve as universal};
