import{S as ne,i as ae,s as te,e as g,J as x,a as y,b as j,d as v,K as z,g as c,f as w,h as D,I as H,j as $,k as o,a8 as fe,F as ge,L as je,U as O,C as ve,X as _e,O as U,P as V,Q as X,Y as ye,n as J,o as N,R as B,D as ue,V as we}from"../chunks/external.27885121.js";import{E as xe}from"../chunks/ExampleArea.a44de483.js";import{S as ze,P as $e}from"../chunks/svelte-splitpanes.b61ac8f4.js";function be(p){let e,t,n=p[0]+`
`,i,a,s,r,_;return{c(){e=g("div"),t=g("pre"),i=x(n),a=y(),s=g("textarea"),this.h()},l(d){e=j(d,"DIV",{class:!0});var m=v(e);t=j(m,"PRE",{"aria-hidden":!0,style:!0,class:!0});var l=v(t);i=z(l,n),l.forEach(c),a=w(m),s=j(m,"TEXTAREA",{style:!0,class:!0}),v(s).forEach(c),m.forEach(c),this.h()},h(){D(t,"aria-hidden","true"),H(t,"min-height",p[2]),H(t,"max-height",p[1]),D(t,"class","svelte-1gm0t61"),s.readOnly=!0,H(s,"outline","none"),D(s,"class","svelte-1gm0t61"),D(e,"class","container svelte-1gm0t61")},m(d,m){$(d,e,m),o(e,t),o(t,i),o(e,a),o(e,s),fe(s,p[0]),r||(_=ge(s,"input",p[5]),r=!0)},p(d,[m]){m&1&&n!==(n=d[0]+`
`)&&je(i,n),m&4&&H(t,"min-height",d[2]),m&2&&H(t,"max-height",d[1]),m&1&&fe(s,d[0])},i:O,o:O,d(d){d&&c(e),r=!1,_()}}}function ke(p,e,t){let n,i,{value:a=""}=e,{minRows:s=1}=e,{maxRows:r=40}=e;const _=l=>l.split(/\r?\n/);function d(l,f){const k=_(l);return k.length=f,k.reduce(function(T,L){return T+`
`+L})}function m(){a=this.value,t(0,a),t(4,r)}return p.$$set=l=>{"value"in l&&t(0,a=l.value),"minRows"in l&&t(3,s=l.minRows),"maxRows"in l&&t(4,r=l.maxRows)},p.$$.update=()=>{p.$$.dirty&17&&t(0,a=d(a,r)),p.$$.dirty&8&&t(2,n=`${1+s*1.2}em`),p.$$.dirty&16&&t(1,i=r?`${1+r*1.2}em`:"auto")},[a,i,n,s,r,m]}class Ee extends ne{constructor(e){super(),ae(this,e,ke,be,te,{value:0,minRows:3,maxRows:4})}}function Me(p,e,t){const n=p.slice();return n[3]=e[t],n[5]=t,n}function Te(p){let e,t=p[5]+1+"",n,i;return{c(){e=g("span"),n=x(t),i=y()},l(a){e=j(a,"SPAN",{});var s=v(e);n=z(s,t),s.forEach(c),i=w(a)},m(a,s){$(a,e,s),o(e,n),$(a,i,s)},p:O,d(a){a&&c(e),a&&c(i)}}}function Le(p){let e,t;return e=new $e({props:{minSize:10,$$slots:{default:[Te]},$$scope:{ctx:p}}}),{c(){U(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,i){X(e,n,i),t=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){B(e,n)}}}function Re(p){let e,t,n={length:3},i=[];for(let a=0;a<n.length;a+=1)i[a]=Le(Me(p,n,a));return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=ue()},l(a){for(let s=0;s<i.length;s+=1)i[s].l(a);e=ue()},m(a,s){for(let r=0;r<i.length;r+=1)i[r].m(a,s);$(a,e,s),t=!0},p:O,i(a){if(!t){for(let s=0;s<n.length;s+=1)J(i[s]);t=!0}},o(a){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)N(i[s]);t=!1},d(a){we(i,a),a&&c(e)}}}function Se(p){let e,t,n,i,a,s,r,_;e=new ze({props:{style:"height: 400px",$$slots:{default:[Re]},$$scope:{ctx:p}}}),e.$on("ready",p[1]),e.$on("resize",p[1]),e.$on("resized",p[1]),e.$on("pane-click",p[1]),e.$on("pane-maximize",p[1]),e.$on("pane-add",p[1]),e.$on("pane-remove",p[1]),e.$on("splitter-click",p[1]);function d(l){p[2](l)}let m={minRows:4,maxRows:40};return p[0]!==void 0&&(m.value=p[0]),s=new Ee({props:m}),ve.push(()=>_e(s,"value",d)),{c(){U(e.$$.fragment),t=y(),n=g("p"),i=x("Try resizing panes and check the logs bellow."),a=y(),U(s.$$.fragment)},l(l){V(e.$$.fragment,l),t=w(l),n=j(l,"P",{});var f=v(n);i=z(f,"Try resizing panes and check the logs bellow."),f.forEach(c),a=w(l),V(s.$$.fragment,l)},m(l,f){X(e,l,f),$(l,t,f),$(l,n,f),o(n,i),$(l,a,f),X(s,l,f),_=!0},p(l,[f]){const k={};f&64&&(k.$$scope={dirty:f,ctx:l}),e.$set(k);const E={};!r&&f&1&&(r=!0,E.value=l[0],ye(()=>r=!1)),s.$set(E)},i(l){_||(J(e.$$.fragment,l),J(s.$$.fragment,l),_=!0)},o(l){N(e.$$.fragment,l),N(s.$$.fragment,l),_=!1},d(l){B(e,l),l&&c(t),l&&c(n),l&&c(a),B(s,l)}}}function Ae(p,e,t){let n="// Event name: Event params   (Last event at the top)";function i(s){s.detail?t(0,n=s.type+" "+JSON.stringify(s.detail)+`
`+n):t(0,n=s.type+`
`+n)}function a(s){n=s,t(0,n)}return[n,i,a]}class Pe extends ne{constructor(e){super(),ae(this,e,Ae,Se,te,{})}}const Ie=`<script>
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
`,Oe={code:Ie,highlightedHTML:He,component:Pe};function Je(p){let e,t,n,i,a,s,r,_,d,m,l,f,k,E,T,L,R,F,K,S,Q,Y,A,G,W,P,Z,ee,I,se,q,M,C;return M=new xe({props:{example:Oe}}),{c(){e=g("h2"),t=x("Listening to emitted events"),n=y(),i=g("p"),a=x("Here is the list of events that are emitted from splitpanes:"),s=y(),r=g("ul"),_=g("li"),d=x("ready has no parameter and fires when splitpanes is ready"),m=y(),l=g("li"),f=x(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),k=y(),E=g("li"),T=x(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),L=y(),R=g("li"),F=x("pane-click returns the clicked pane object with its dimensions."),K=y(),S=g("li"),Q=x("pane-maximize returns the maximized pane object with its dimensions."),Y=y(),A=g("li"),G=x("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),W=y(),P=g("li"),Z=x(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ee=y(),I=g("li"),se=x(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),q=y(),U(M.$$.fragment)},l(h){e=j(h,"H2",{});var b=v(e);t=z(b,"Listening to emitted events"),b.forEach(c),n=w(h),i=j(h,"P",{});var le=v(i);a=z(le,"Here is the list of events that are emitted from splitpanes:"),le.forEach(c),s=w(h),r=j(h,"UL",{});var u=v(r);_=j(u,"LI",{});var ie=v(_);d=z(ie,"ready has no parameter and fires when splitpanes is ready"),ie.forEach(c),m=w(u),l=j(u,"LI",{});var re=v(l);f=z(re,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),re.forEach(c),k=w(u),E=j(u,"LI",{});var pe=v(E);T=z(pe,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),pe.forEach(c),L=w(u),R=j(u,"LI",{});var oe=v(R);F=z(oe,"pane-click returns the clicked pane object with its dimensions."),oe.forEach(c),K=w(u),S=j(u,"LI",{});var ce=v(S);Q=z(ce,"pane-maximize returns the maximized pane object with its dimensions."),ce.forEach(c),Y=w(u),A=j(u,"LI",{});var he=v(A);G=z(he,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),he.forEach(c),W=w(u),P=j(u,"LI",{});var me=v(P);Z=z(me,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),me.forEach(c),ee=w(u),I=j(u,"LI",{});var de=v(I);se=z(de,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),de.forEach(c),u.forEach(c),q=w(h),V(M.$$.fragment,h)},m(h,b){$(h,e,b),o(e,t),$(h,n,b),$(h,i,b),o(i,a),$(h,s,b),$(h,r,b),o(r,_),o(_,d),o(r,m),o(r,l),o(l,f),o(r,k),o(r,E),o(E,T),o(r,L),o(r,R),o(R,F),o(r,K),o(r,S),o(S,Q),o(r,Y),o(r,A),o(A,G),o(r,W),o(r,P),o(P,Z),o(r,ee),o(r,I),o(I,se),$(h,q,b),X(M,h,b),C=!0},p:O,i(h){C||(J(M.$$.fragment,h),C=!0)},o(h){N(M.$$.fragment,h),C=!1},d(h){h&&c(e),h&&c(n),h&&c(i),h&&c(s),h&&c(r),h&&c(q),B(M,h)}}}class De extends ne{constructor(e){super(),ae(this,e,null,Je,te,{})}}export{De as default};
