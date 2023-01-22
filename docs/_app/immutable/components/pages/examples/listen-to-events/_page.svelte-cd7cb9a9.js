import{S as ze,i as Ee,s as ke,e as v,P as z,f as y,h as g,j as w,Q as E,l as p,k as $,m as Q,T as O,o as b,p as f,a9 as $e,J as je,R as Le,M as Z,F as Re,U as Te,z as X,A as K,B as W,V as Se,t as B,b as U,C as Y,G as be,N as Me}from"../../../../chunks/external-069c0b55.js";import{S as Pe,P as Ae}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as Ie}from"../../../../chunks/CodeArea-8a6a8f55.js";function He(o){let t,s,a=o[0]+`
`,l,n,i,r,k;return{c(){t=v("div"),s=v("pre"),l=z(a),n=y(),i=v("textarea"),this.h()},l(d){t=g(d,"DIV",{class:!0});var c=w(t);s=g(c,"PRE",{"aria-hidden":!0,style:!0,class:!0});var h=w(s);l=E(h,a),h.forEach(p),n=$(c),i=g(c,"TEXTAREA",{style:!0,class:!0}),w(i).forEach(p),c.forEach(p),this.h()},h(){Q(s,"aria-hidden","true"),O(s,"min-height",o[2]),O(s,"max-height",o[1]),Q(s,"class","svelte-1gm0t61"),i.readOnly=!0,O(i,"outline","none"),Q(i,"class","svelte-1gm0t61"),Q(t,"class","container svelte-1gm0t61")},m(d,c){b(d,t,c),f(t,s),f(s,l),f(t,n),f(t,i),$e(i,o[0]),r||(k=je(i,"input",o[5]),r=!0)},p(d,[c]){c&1&&a!==(a=d[0]+`
`)&&Le(l,a),c&4&&O(s,"min-height",d[2]),c&2&&O(s,"max-height",d[1]),c&1&&$e(i,d[0])},i:Z,o:Z,d(d){d&&p(t),r=!1,k()}}}function Ce(o,t,s){let a,l,{value:n=""}=t,{minRows:i=1}=t,{maxRows:r=40}=t;const k=h=>h.split(/\r?\n/);function d(h,S){const L=k(h);return L.length=S,L.reduce(function(M,P){return M+`
`+P})}function c(){n=this.value,s(0,n),s(4,r)}return o.$$set=h=>{"value"in h&&s(0,n=h.value),"minRows"in h&&s(3,i=h.minRows),"maxRows"in h&&s(4,r=h.maxRows)},o.$$.update=()=>{o.$$.dirty&17&&s(0,n=d(n,r)),o.$$.dirty&8&&s(2,a=`${1+i*1.2}em`),o.$$.dirty&16&&s(1,l=r?`${1+r*1.2}em`:"auto")},[n,l,a,i,r,c]}class Ne extends ze{constructor(t){super(),Ee(this,t,Ce,He,ke,{value:0,minRows:3,maxRows:4})}}function Je(o,t,s){const a=o.slice();return a[4]=t[s],a[6]=s,a}function Oe(o){let t,s=o[6]+1+"",a,l;return{c(){t=v("span"),a=z(s),l=y()},l(n){t=g(n,"SPAN",{});var i=w(t);a=E(i,s),i.forEach(p),l=$(n)},m(n,i){b(n,t,i),f(t,a),b(n,l,i)},p:Z,d(n){n&&p(t),n&&p(l)}}}function Be(o){let t,s;return t=new Ae({props:{minSize:10,$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){X(t.$$.fragment)},l(a){K(t.$$.fragment,a)},m(a,l){W(t,a,l),s=!0},p(a,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:a}),t.$set(n)},i(a){s||(B(t.$$.fragment,a),s=!0)},o(a){U(t.$$.fragment,a),s=!1},d(a){Y(t,a)}}}function Ue(o){let t,s,a={length:3},l=[];for(let n=0;n<a.length;n+=1)l[n]=Be(Je(o,a,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=be()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);t=be()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);b(n,t,i),s=!0},p:Z,i(n){if(!s){for(let i=0;i<a.length;i+=1)B(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)U(l[i]);s=!1},d(n){Me(l,n),n&&p(t)}}}function Ve(o){let t,s,a,l,n,i,r,k,d,c,h,S,L,R,M,P,A,ee,te,I,ne,ae,H,se,ie,C,re,le,N,oe,V,_,q,T,fe,D,x,pe,F,j,G;_=new Pe({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),_.$on("ready",o[1]),_.$on("resize",o[1]),_.$on("resized",o[1]),_.$on("pane-click",o[1]),_.$on("pane-maximize",o[1]),_.$on("pane-add",o[1]),_.$on("pane-remove",o[1]),_.$on("splitter-click",o[1]);function xe(e){o[3](e)}let me={minRows:4,maxRows:40};return o[0]!==void 0&&(me.value=o[0]),x=new Ne({props:me}),Re.push(()=>Te(x,"value",xe,o[0])),j=new Ie({props:{id:"listen_to_events",code:o[2]}}),{c(){t=v("h2"),s=z("Listening to emitted events"),a=y(),l=v("p"),n=z("Here is the list of events that are emitted from splitpanes:"),i=y(),r=v("ul"),k=v("li"),d=z("ready has no parameter and fires when splitpanes is ready"),c=y(),h=v("li"),S=z(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),L=y(),R=v("li"),M=z(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),P=y(),A=v("li"),ee=z("pane-click returns the clicked pane object with its dimensions."),te=y(),I=v("li"),ne=z("pane-maximize returns the maximized pane object with its dimensions."),ae=y(),H=v("li"),se=z("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ie=y(),C=v("li"),re=z(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),le=y(),N=v("li"),oe=z(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),V=y(),X(_.$$.fragment),q=y(),T=v("p"),fe=z("Try resizing panes and check the logs bellow."),D=y(),X(x.$$.fragment),F=y(),X(j.$$.fragment)},l(e){t=g(e,"H2",{});var m=w(t);s=E(m,"Listening to emitted events"),m.forEach(p),a=$(e),l=g(e,"P",{});var J=w(l);n=E(J,"Here is the list of events that are emitted from splitpanes:"),J.forEach(p),i=$(e),r=g(e,"UL",{});var u=w(r);k=g(u,"LI",{});var he=w(k);d=E(he,"ready has no parameter and fires when splitpanes is ready"),he.forEach(p),c=$(u),h=g(u,"LI",{});var ue=w(h);S=E(ue,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),ue.forEach(p),L=$(u),R=g(u,"LI",{});var ce=w(R);M=E(ce,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),ce.forEach(p),P=$(u),A=g(u,"LI",{});var de=w(A);ee=E(de,"pane-click returns the clicked pane object with its dimensions."),de.forEach(p),te=$(u),I=g(u,"LI",{});var _e=w(I);ne=E(_e,"pane-maximize returns the maximized pane object with its dimensions."),_e.forEach(p),ae=$(u),H=g(u,"LI",{});var ve=w(H);se=E(ve,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ve.forEach(p),ie=$(u),C=g(u,"LI",{});var ge=w(C);re=E(ge,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ge.forEach(p),le=$(u),N=g(u,"LI",{});var we=w(N);oe=E(we,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),we.forEach(p),u.forEach(p),V=$(e),K(_.$$.fragment,e),q=$(e),T=g(e,"P",{});var ye=w(T);fe=E(ye,"Try resizing panes and check the logs bellow."),ye.forEach(p),D=$(e),K(x.$$.fragment,e),F=$(e),K(j.$$.fragment,e)},m(e,m){b(e,t,m),f(t,s),b(e,a,m),b(e,l,m),f(l,n),b(e,i,m),b(e,r,m),f(r,k),f(k,d),f(r,c),f(r,h),f(h,S),f(r,L),f(r,R),f(R,M),f(r,P),f(r,A),f(A,ee),f(r,te),f(r,I),f(I,ne),f(r,ae),f(r,H),f(H,se),f(r,ie),f(r,C),f(C,re),f(r,le),f(r,N),f(N,oe),b(e,V,m),W(_,e,m),b(e,q,m),b(e,T,m),f(T,fe),b(e,D,m),W(x,e,m),b(e,F,m),W(j,e,m),G=!0},p(e,[m]){const J={};m&128&&(J.$$scope={dirty:m,ctx:e}),_.$set(J);const u={};!pe&&m&1&&(pe=!0,u.value=e[0],Se(()=>pe=!1)),x.$set(u)},i(e){G||(B(_.$$.fragment,e),B(x.$$.fragment,e),B(j.$$.fragment,e),G=!0)},o(e){U(_.$$.fragment,e),U(x.$$.fragment,e),U(j.$$.fragment,e),G=!1},d(e){e&&p(t),e&&p(a),e&&p(l),e&&p(i),e&&p(r),e&&p(V),Y(_,e),e&&p(q),e&&p(T),e&&p(D),Y(x,e),e&&p(F),Y(j,e)}}}function qe(o,t,s){let a="// Event name: Event params   (Last event at the top)";function l(r){r.detail?s(0,a=r.type+" "+JSON.stringify(r.detail)+`
`+a):s(0,a=r.type+`
`+a)}let n=`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\\n' + val;
		else val = event.type + '\\n' + val;
	}
</script>
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
`;function i(r){a=r,s(0,a)}return[a,l,n,i]}class Qe extends ze{constructor(t){super(),Ee(this,t,qe,Ve,ke,{})}}export{Qe as default};
