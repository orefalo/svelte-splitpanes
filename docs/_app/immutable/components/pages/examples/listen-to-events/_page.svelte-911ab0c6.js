import{S as ze,i as Ee,s as xe,e as v,L as z,a as y,b as g,d as w,M as E,g as p,f as $,h as X,O as J,j as b,k as f,a9 as $e,F as je,N as Le,I as Z,C as Re,P as Te,Q as G,R as K,T as W,U as Se,n as D,o as U,V as Y,D as be,J as Me}from"../../../../chunks/external-e6fb7a5e.js";import{S as Pe,P as Ie}from"../../../../chunks/svelte-splitpanes-6e1e1d54.js";import{C as Ae}from"../../../../chunks/CodeArea-622cf22a.js";function He(o){let t,s,a=o[0]+`
`,l,n,i,r,x;return{c(){t=v("div"),s=v("pre"),l=z(a),n=y(),i=v("textarea"),this.h()},l(d){t=g(d,"DIV",{class:!0});var u=w(t);s=g(u,"PRE",{"aria-hidden":!0,style:!0,class:!0});var c=w(s);l=E(c,a),c.forEach(p),n=$(u),i=g(u,"TEXTAREA",{style:!0,class:!0}),w(i).forEach(p),u.forEach(p),this.h()},h(){X(s,"aria-hidden","true"),J(s,"min-height",o[2]),J(s,"max-height",o[1]),X(s,"class","svelte-1gm0t61"),i.readOnly=!0,J(i,"outline","none"),X(i,"class","svelte-1gm0t61"),X(t,"class","container svelte-1gm0t61")},m(d,u){b(d,t,u),f(t,s),f(s,l),f(t,n),f(t,i),$e(i,o[0]),r||(x=je(i,"input",o[5]),r=!0)},p(d,[u]){u&1&&a!==(a=d[0]+`
`)&&Le(l,a),u&4&&J(s,"min-height",d[2]),u&2&&J(s,"max-height",d[1]),u&1&&$e(i,d[0])},i:Z,o:Z,d(d){d&&p(t),r=!1,x()}}}function Ce(o,t,s){let a,l,{value:n=""}=t,{minRows:i=1}=t,{maxRows:r=40}=t;const x=c=>c.split(/\r?\n/);function d(c,S){const L=x(c);return L.length=S,L.reduce(function(M,P){return M+`
`+P})}function u(){n=this.value,s(0,n),s(4,r)}return o.$$set=c=>{"value"in c&&s(0,n=c.value),"minRows"in c&&s(3,i=c.minRows),"maxRows"in c&&s(4,r=c.maxRows)},o.$$.update=()=>{o.$$.dirty&17&&s(0,n=d(n,r)),o.$$.dirty&8&&s(2,a=`${1+i*1.2}em`),o.$$.dirty&16&&s(1,l=r?`${1+r*1.2}em`:"auto")},[n,l,a,i,r,u]}class Ne extends ze{constructor(t){super(),Ee(this,t,Ce,He,xe,{value:0,minRows:3,maxRows:4})}}function Oe(o,t,s){const a=o.slice();return a[4]=t[s],a[6]=s,a}function Je(o){let t,s=o[6]+1+"",a,l;return{c(){t=v("span"),a=z(s),l=y()},l(n){t=g(n,"SPAN",{});var i=w(t);a=E(i,s),i.forEach(p),l=$(n)},m(n,i){b(n,t,i),f(t,a),b(n,l,i)},p:Z,d(n){n&&p(t),n&&p(l)}}}function De(o){let t,s;return t=new Ie({props:{minSize:10,$$slots:{default:[Je]},$$scope:{ctx:o}}}),{c(){G(t.$$.fragment)},l(a){K(t.$$.fragment,a)},m(a,l){W(t,a,l),s=!0},p(a,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:a}),t.$set(n)},i(a){s||(D(t.$$.fragment,a),s=!0)},o(a){U(t.$$.fragment,a),s=!1},d(a){Y(t,a)}}}function Ue(o){let t,s,a={length:3},l=[];for(let n=0;n<a.length;n+=1)l[n]=De(Oe(o,a,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=be()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);t=be()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);b(n,t,i),s=!0},p:Z,i(n){if(!s){for(let i=0;i<a.length;i+=1)D(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)U(l[i]);s=!1},d(n){Me(l,n),n&&p(t)}}}function Ve(o){let t,s,a,l,n,i,r,x,d,u,c,S,L,R,M,P,I,ee,te,A,ne,ae,H,se,ie,C,re,le,N,oe,V,_,q,T,fe,B,k,pe,F,j,Q;_=new Pe({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),_.$on("ready",o[1]),_.$on("resize",o[1]),_.$on("resized",o[1]),_.$on("pane-click",o[1]),_.$on("pane-maximize",o[1]),_.$on("pane-add",o[1]),_.$on("pane-remove",o[1]),_.$on("splitter-click",o[1]);function ke(e){o[3](e)}let me={minRows:4,maxRows:40};return o[0]!==void 0&&(me.value=o[0]),k=new Ne({props:me}),Re.push(()=>Te(k,"value",ke)),j=new Ae({props:{id:"listen_to_events",code:o[2]}}),{c(){t=v("h2"),s=z("Listening to emitted events"),a=y(),l=v("p"),n=z("Here is the list of events that are emitted from splitpanes:"),i=y(),r=v("ul"),x=v("li"),d=z("ready has no parameter and fires when splitpanes is ready"),u=y(),c=v("li"),S=z(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),L=y(),R=v("li"),M=z(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),P=y(),I=v("li"),ee=z("pane-click returns the clicked pane object with its dimensions."),te=y(),A=v("li"),ne=z("pane-maximize returns the maximized pane object with its dimensions."),ae=y(),H=v("li"),se=z("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ie=y(),C=v("li"),re=z(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),le=y(),N=v("li"),oe=z(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),V=y(),G(_.$$.fragment),q=y(),T=v("p"),fe=z("Try resizing panes and check the logs bellow."),B=y(),G(k.$$.fragment),F=y(),G(j.$$.fragment)},l(e){t=g(e,"H2",{});var m=w(t);s=E(m,"Listening to emitted events"),m.forEach(p),a=$(e),l=g(e,"P",{});var O=w(l);n=E(O,"Here is the list of events that are emitted from splitpanes:"),O.forEach(p),i=$(e),r=g(e,"UL",{});var h=w(r);x=g(h,"LI",{});var ce=w(x);d=E(ce,"ready has no parameter and fires when splitpanes is ready"),ce.forEach(p),u=$(h),c=g(h,"LI",{});var he=w(c);S=E(he,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),he.forEach(p),L=$(h),R=g(h,"LI",{});var ue=w(R);M=E(ue,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),ue.forEach(p),P=$(h),I=g(h,"LI",{});var de=w(I);ee=E(de,"pane-click returns the clicked pane object with its dimensions."),de.forEach(p),te=$(h),A=g(h,"LI",{});var _e=w(A);ne=E(_e,"pane-maximize returns the maximized pane object with its dimensions."),_e.forEach(p),ae=$(h),H=g(h,"LI",{});var ve=w(H);se=E(ve,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ve.forEach(p),ie=$(h),C=g(h,"LI",{});var ge=w(C);re=E(ge,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ge.forEach(p),le=$(h),N=g(h,"LI",{});var we=w(N);oe=E(we,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),we.forEach(p),h.forEach(p),V=$(e),K(_.$$.fragment,e),q=$(e),T=g(e,"P",{});var ye=w(T);fe=E(ye,"Try resizing panes and check the logs bellow."),ye.forEach(p),B=$(e),K(k.$$.fragment,e),F=$(e),K(j.$$.fragment,e)},m(e,m){b(e,t,m),f(t,s),b(e,a,m),b(e,l,m),f(l,n),b(e,i,m),b(e,r,m),f(r,x),f(x,d),f(r,u),f(r,c),f(c,S),f(r,L),f(r,R),f(R,M),f(r,P),f(r,I),f(I,ee),f(r,te),f(r,A),f(A,ne),f(r,ae),f(r,H),f(H,se),f(r,ie),f(r,C),f(C,re),f(r,le),f(r,N),f(N,oe),b(e,V,m),W(_,e,m),b(e,q,m),b(e,T,m),f(T,fe),b(e,B,m),W(k,e,m),b(e,F,m),W(j,e,m),Q=!0},p(e,[m]){const O={};m&128&&(O.$$scope={dirty:m,ctx:e}),_.$set(O);const h={};!pe&&m&1&&(pe=!0,h.value=e[0],Se(()=>pe=!1)),k.$set(h)},i(e){Q||(D(_.$$.fragment,e),D(k.$$.fragment,e),D(j.$$.fragment,e),Q=!0)},o(e){U(_.$$.fragment,e),U(k.$$.fragment,e),U(j.$$.fragment,e),Q=!1},d(e){e&&p(t),e&&p(a),e&&p(l),e&&p(i),e&&p(r),e&&p(V),Y(_,e),e&&p(q),e&&p(T),e&&p(B),Y(k,e),e&&p(F),Y(j,e)}}}function qe(o,t,s){let a="// Event name: Event params   (Last event at the top)";function l(r){r.detail?s(0,a=r.type+" "+JSON.stringify(r.detail)+`
`+a):s(0,a=r.type+`
`+a)}let n=`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\\n' + val;
		else val = event.type + '\\n' + val;
	}
<\/script>
<Splitpanes
	class="default-theme"
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
`;function i(r){a=r,s(0,a)}return[a,l,n,i]}class Xe extends ze{constructor(t){super(),Ee(this,t,qe,Ve,xe,{})}}export{Xe as default};
