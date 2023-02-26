import{S as ne,i as ae,s as se,e as _,L as b,a as y,b as v,d as g,M as x,g as c,f as $,h as U,O as H,j as z,k as p,aa as he,F as _e,N as ve,I as N,C as ge,P as we,Q as V,R as q,T as B,U as ye,n as O,o as C,V as F,D as de,J as $e}from"../../../../chunks/external-a03e8ebe.js";import{E as be}from"../../../../chunks/ExampleArea-f8063daf.js";import{S as xe,P as ze}from"../../../../chunks/svelte-splitpanes-e7a119d8.js";function Ee(o){let e,s,n=o[0]+`
`,r,a,t,l,w;return{c(){e=_("div"),s=_("pre"),r=b(n),a=y(),t=_("textarea"),this.h()},l(u){e=v(u,"DIV",{class:!0});var m=g(e);s=v(m,"PRE",{"aria-hidden":!0,style:!0,class:!0});var i=g(s);r=x(i,n),i.forEach(c),a=$(m),t=v(m,"TEXTAREA",{style:!0,class:!0}),g(t).forEach(c),m.forEach(c),this.h()},h(){U(s,"aria-hidden","true"),H(s,"min-height",o[2]),H(s,"max-height",o[1]),U(s,"class","svelte-1gm0t61"),t.readOnly=!0,H(t,"outline","none"),U(t,"class","svelte-1gm0t61"),U(e,"class","container svelte-1gm0t61")},m(u,m){z(u,e,m),p(e,s),p(s,r),p(e,a),p(e,t),he(t,o[0]),l||(w=_e(t,"input",o[5]),l=!0)},p(u,[m]){m&1&&n!==(n=u[0]+`
`)&&ve(r,n),m&4&&H(s,"min-height",u[2]),m&2&&H(s,"max-height",u[1]),m&1&&he(t,u[0])},i:N,o:N,d(u){u&&c(e),l=!1,w()}}}function ke(o,e,s){let n,r,{value:a=""}=e,{minRows:t=1}=e,{maxRows:l=40}=e;const w=i=>i.split(/\r?\n/);function u(i,h){const k=w(i);return k.length=h,k.reduce(function(R,T){return R+`
`+T})}function m(){a=this.value,s(0,a),s(4,l)}return o.$$set=i=>{"value"in i&&s(0,a=i.value),"minRows"in i&&s(3,t=i.minRows),"maxRows"in i&&s(4,l=i.maxRows)},o.$$.update=()=>{o.$$.dirty&17&&s(0,a=u(a,l)),o.$$.dirty&8&&s(2,n=`${1+t*1.2}em`),o.$$.dirty&16&&s(1,r=l?`${1+l*1.2}em`:"auto")},[a,r,n,t,l,m]}class je extends ne{constructor(e){super(),ae(this,e,ke,Ee,se,{value:0,minRows:3,maxRows:4})}}function Le(o,e,s){const n=o.slice();return n[3]=e[s],n[5]=s,n}function Re(o){let e,s=o[5]+1+"",n,r;return{c(){e=_("span"),n=b(s),r=y()},l(a){e=v(a,"SPAN",{});var t=g(e);n=x(t,s),t.forEach(c),r=$(a)},m(a,t){z(a,e,t),p(e,n),z(a,r,t)},p:N,d(a){a&&c(e),a&&c(r)}}}function Te(o){let e,s;return e=new ze({props:{minSize:10,$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){V(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,r){B(e,n,r),s=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){s||(O(e.$$.fragment,n),s=!0)},o(n){C(e.$$.fragment,n),s=!1},d(n){F(e,n)}}}function Ae(o){let e,s,n={length:3},r=[];for(let a=0;a<n.length;a+=1)r[a]=Te(Le(o,n,a));return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=de()},l(a){for(let t=0;t<r.length;t+=1)r[t].l(a);e=de()},m(a,t){for(let l=0;l<r.length;l+=1)r[l].m(a,t);z(a,e,t),s=!0},p:N,i(a){if(!s){for(let t=0;t<n.length;t+=1)O(r[t]);s=!0}},o(a){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)C(r[t]);s=!1},d(a){$e(r,a),a&&c(e)}}}function Se(o){let e,s,n,r,a,t,l,w;e=new xe({props:{style:"height: 400px",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),e.$on("ready",o[1]),e.$on("resize",o[1]),e.$on("resized",o[1]),e.$on("pane-click",o[1]),e.$on("pane-maximize",o[1]),e.$on("pane-add",o[1]),e.$on("pane-remove",o[1]),e.$on("splitter-click",o[1]);function u(i){o[2](i)}let m={minRows:4,maxRows:40};return o[0]!==void 0&&(m.value=o[0]),t=new je({props:m}),ge.push(()=>we(t,"value",u)),{c(){V(e.$$.fragment),s=y(),n=_("p"),r=b("Try resizing panes and check the logs bellow."),a=y(),V(t.$$.fragment)},l(i){q(e.$$.fragment,i),s=$(i),n=v(i,"P",{});var h=g(n);r=x(h,"Try resizing panes and check the logs bellow."),h.forEach(c),a=$(i),q(t.$$.fragment,i)},m(i,h){B(e,i,h),z(i,s,h),z(i,n,h),p(n,r),z(i,a,h),B(t,i,h),w=!0},p(i,[h]){const k={};h&64&&(k.$$scope={dirty:h,ctx:i}),e.$set(k);const j={};!l&&h&1&&(l=!0,j.value=i[0],ye(()=>l=!1)),t.$set(j)},i(i){w||(O(e.$$.fragment,i),O(t.$$.fragment,i),w=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),w=!1},d(i){F(e,i),i&&c(s),i&&c(n),i&&c(a),F(t,i)}}}function Me(o,e,s){let n="// Event name: Event params   (Last event at the top)";function r(t){t.detail?s(0,n=t.type+" "+JSON.stringify(t.detail)+`
`+n):s(0,n=t.type+`
`+n)}function a(t){n=t,s(0,n)}return[n,r,a]}class Pe extends ne{constructor(e){super(),ae(this,e,Me,Se,se,{})}}const Ie=`<script>
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
	on:splitter-click={handleMessage}
>
	{#each { length: 3 } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>

<p>Try resizing panes and check the logs bellow.</p>

<TextArea bind:value={val} minRows={4} maxRows={40} />
`,He="../../src/routes/examples/listen-to-events/code.svelte",Ne={id:He,code:Ie,component:Pe};function Oe(o){let e,s,n,r,a,t,l,w,u,m,i,h,k,j,R,T,A,Q,X,S,G,K,M,W,Y,P,Z,ee,I,te,J,L,D;return L=new be({props:{example:Ne}}),{c(){e=_("h2"),s=b("Listening to emitted events"),n=y(),r=_("p"),a=b("Here is the list of events that are emitted from splitpanes:"),t=y(),l=_("ul"),w=_("li"),u=b("ready has no parameter and fires when splitpanes is ready"),m=y(),i=_("li"),h=b(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),k=y(),j=_("li"),R=b(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),T=y(),A=_("li"),Q=b("pane-click returns the clicked pane object with its dimensions."),X=y(),S=_("li"),G=b("pane-maximize returns the maximized pane object with its dimensions."),K=y(),M=_("li"),W=b("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),Y=y(),P=_("li"),Z=b(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ee=y(),I=_("li"),te=b(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),J=y(),V(L.$$.fragment)},l(f){e=v(f,"H2",{});var E=g(e);s=x(E,"Listening to emitted events"),E.forEach(c),n=$(f),r=v(f,"P",{});var ie=g(r);a=x(ie,"Here is the list of events that are emitted from splitpanes:"),ie.forEach(c),t=$(f),l=v(f,"UL",{});var d=g(l);w=v(d,"LI",{});var re=g(w);u=x(re,"ready has no parameter and fires when splitpanes is ready"),re.forEach(c),m=$(d),i=v(d,"LI",{});var le=g(i);h=x(le,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),le.forEach(c),k=$(d),j=v(d,"LI",{});var oe=g(j);R=x(oe,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),oe.forEach(c),T=$(d),A=v(d,"LI",{});var pe=g(A);Q=x(pe,"pane-click returns the clicked pane object with its dimensions."),pe.forEach(c),X=$(d),S=v(d,"LI",{});var ce=g(S);G=x(ce,"pane-maximize returns the maximized pane object with its dimensions."),ce.forEach(c),K=$(d),M=v(d,"LI",{});var fe=g(M);W=x(fe,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),fe.forEach(c),Y=$(d),P=v(d,"LI",{});var me=g(P);Z=x(me,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),me.forEach(c),ee=$(d),I=v(d,"LI",{});var ue=g(I);te=x(ue,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),ue.forEach(c),d.forEach(c),J=$(f),q(L.$$.fragment,f)},m(f,E){z(f,e,E),p(e,s),z(f,n,E),z(f,r,E),p(r,a),z(f,t,E),z(f,l,E),p(l,w),p(w,u),p(l,m),p(l,i),p(i,h),p(l,k),p(l,j),p(j,R),p(l,T),p(l,A),p(A,Q),p(l,X),p(l,S),p(S,G),p(l,K),p(l,M),p(M,W),p(l,Y),p(l,P),p(P,Z),p(l,ee),p(l,I),p(I,te),z(f,J,E),B(L,f,E),D=!0},p:N,i(f){D||(O(L.$$.fragment,f),D=!0)},o(f){C(L.$$.fragment,f),D=!1},d(f){f&&c(e),f&&c(n),f&&c(r),f&&c(t),f&&c(l),f&&c(J),F(L,f)}}}class Ue extends ne{constructor(e){super(),ae(this,e,null,Oe,se,{})}}export{Ue as default};
