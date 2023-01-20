import{S as ze,i as Ee,s as xe,k as v,q as z,a as y,l as g,m as w,r as E,h as p,c as $,n as F,p as O,b,C as f,a9 as $e,G as je,u as Le,D as Z,U as Re,H as Te,I as Se,w as K,x as Q,y as W,J as Ie,f as q,t as D,z as Y,e as be,E as Me,V as Ae}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as Pe}from"../../../../chunks/CodeArea-5e3138e2.js";function He(o){let t,s,a=o[0]+`
`,l,n,i,r,x;return{c(){t=v("div"),s=v("pre"),l=z(a),n=y(),i=v("textarea"),this.h()},l(d){t=g(d,"DIV",{class:!0});var h=w(t);s=g(h,"PRE",{"aria-hidden":!0,style:!0,class:!0});var u=w(s);l=E(u,a),u.forEach(p),n=$(h),i=g(h,"TEXTAREA",{style:!0,class:!0}),w(i).forEach(p),h.forEach(p),this.h()},h(){F(s,"aria-hidden","true"),O(s,"min-height",o[2]),O(s,"max-height",o[1]),F(s,"class","svelte-1gm0t61"),i.readOnly=!0,O(i,"outline","none"),F(i,"class","svelte-1gm0t61"),F(t,"class","container svelte-1gm0t61")},m(d,h){b(d,t,h),f(t,s),f(s,l),f(t,n),f(t,i),$e(i,o[0]),r||(x=je(i,"input",o[5]),r=!0)},p(d,[h]){h&1&&a!==(a=d[0]+`
`)&&Le(l,a),h&4&&O(s,"min-height",d[2]),h&2&&O(s,"max-height",d[1]),h&1&&$e(i,d[0])},i:Z,o:Z,d(d){d&&p(t),r=!1,x()}}}function Ce(o,t,s){let a,l,{value:n=""}=t,{minRows:i=1}=t,{maxRows:r=40}=t;const x=u=>u.split(/\r?\n/);function d(u,S){const L=x(u);return L.length=S,L.reduce(function(I,M){return I+`
`+M})}function h(){n=this.value,s(0,n),s(4,r)}return o.$$set=u=>{"value"in u&&s(0,n=u.value),"minRows"in u&&s(3,i=u.minRows),"maxRows"in u&&s(4,r=u.maxRows)},o.$$.update=()=>{o.$$.dirty&17&&s(0,n=d(n,r)),o.$$.dirty&8&&s(2,a=`${1+i*1.2}em`),o.$$.dirty&16&&s(1,l=r?`${1+r*1.2}em`:"auto")},[n,l,a,i,r,h]}class Je extends ze{constructor(t){super(),Ee(this,t,Ce,He,xe,{value:0,minRows:3,maxRows:4})}}function Ne(o,t,s){const a=o.slice();return a[4]=t[s],a[6]=s,a}function Oe(o){let t,s=o[6]+1+"",a,l;return{c(){t=v("span"),a=z(s),l=y()},l(n){t=g(n,"SPAN",{});var i=w(t);a=E(i,s),i.forEach(p),l=$(n)},m(n,i){b(n,t,i),f(t,a),b(n,l,i)},p:Z,d(n){n&&p(t),n&&p(l)}}}function qe(o){let t,s;return t=new Ae({props:{minSize:10,$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){K(t.$$.fragment)},l(a){Q(t.$$.fragment,a)},m(a,l){W(t,a,l),s=!0},p(a,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:a}),t.$set(n)},i(a){s||(q(t.$$.fragment,a),s=!0)},o(a){D(t.$$.fragment,a),s=!1},d(a){Y(t,a)}}}function De(o){let t,s,a={length:3},l=[];for(let n=0;n<a.length;n+=1)l[n]=qe(Ne(o,a,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=be()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);t=be()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);b(n,t,i),s=!0},p:Z,i(n){if(!s){for(let i=0;i<a.length;i+=1)q(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)D(l[i]);s=!1},d(n){Me(l,n),n&&p(t)}}}function Ue(o){let t,s,a,l,n,i,r,x,d,h,u,S,L,R,I,M,A,ee,te,P,ne,ae,H,se,ie,C,re,le,J,oe,U,_,V,T,fe,B,k,pe,G,j,X;_=new Re({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[De]},$$scope:{ctx:o}}}),_.$on("ready",o[1]),_.$on("resize",o[1]),_.$on("resized",o[1]),_.$on("pane-click",o[1]),_.$on("pane-maximize",o[1]),_.$on("pane-add",o[1]),_.$on("pane-remove",o[1]),_.$on("splitter-click",o[1]);function ke(e){o[3](e)}let me={minRows:4,maxRows:40};return o[0]!==void 0&&(me.value=o[0]),k=new Je({props:me}),Te.push(()=>Se(k,"value",ke,o[0])),j=new Pe({props:{id:"listen_to_events",code:o[2]}}),{c(){t=v("h2"),s=z("Listening to emitted events"),a=y(),l=v("p"),n=z("Here is the list of events that are emitted from splitpanes:"),i=y(),r=v("ul"),x=v("li"),d=z("ready has no parameter and fires when splitpanes is ready"),h=y(),u=v("li"),S=z(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),L=y(),R=v("li"),I=z(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),M=y(),A=v("li"),ee=z("pane-click returns the clicked pane object with its dimensions."),te=y(),P=v("li"),ne=z("pane-maximize returns the maximized pane object with its dimensions."),ae=y(),H=v("li"),se=z("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ie=y(),C=v("li"),re=z(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),le=y(),J=v("li"),oe=z(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),U=y(),K(_.$$.fragment),V=y(),T=v("p"),fe=z("Try resizing panes and check the logs bellow."),B=y(),K(k.$$.fragment),G=y(),K(j.$$.fragment)},l(e){t=g(e,"H2",{});var m=w(t);s=E(m,"Listening to emitted events"),m.forEach(p),a=$(e),l=g(e,"P",{});var N=w(l);n=E(N,"Here is the list of events that are emitted from splitpanes:"),N.forEach(p),i=$(e),r=g(e,"UL",{});var c=w(r);x=g(c,"LI",{});var ue=w(x);d=E(ue,"ready has no parameter and fires when splitpanes is ready"),ue.forEach(p),h=$(c),u=g(c,"LI",{});var ce=w(u);S=E(ce,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),ce.forEach(p),L=$(c),R=g(c,"LI",{});var he=w(R);I=E(he,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),he.forEach(p),M=$(c),A=g(c,"LI",{});var de=w(A);ee=E(de,"pane-click returns the clicked pane object with its dimensions."),de.forEach(p),te=$(c),P=g(c,"LI",{});var _e=w(P);ne=E(_e,"pane-maximize returns the maximized pane object with its dimensions."),_e.forEach(p),ae=$(c),H=g(c,"LI",{});var ve=w(H);se=E(ve,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ve.forEach(p),ie=$(c),C=g(c,"LI",{});var ge=w(C);re=E(ge,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ge.forEach(p),le=$(c),J=g(c,"LI",{});var we=w(J);oe=E(we,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),we.forEach(p),c.forEach(p),U=$(e),Q(_.$$.fragment,e),V=$(e),T=g(e,"P",{});var ye=w(T);fe=E(ye,"Try resizing panes and check the logs bellow."),ye.forEach(p),B=$(e),Q(k.$$.fragment,e),G=$(e),Q(j.$$.fragment,e)},m(e,m){b(e,t,m),f(t,s),b(e,a,m),b(e,l,m),f(l,n),b(e,i,m),b(e,r,m),f(r,x),f(x,d),f(r,h),f(r,u),f(u,S),f(r,L),f(r,R),f(R,I),f(r,M),f(r,A),f(A,ee),f(r,te),f(r,P),f(P,ne),f(r,ae),f(r,H),f(H,se),f(r,ie),f(r,C),f(C,re),f(r,le),f(r,J),f(J,oe),b(e,U,m),W(_,e,m),b(e,V,m),b(e,T,m),f(T,fe),b(e,B,m),W(k,e,m),b(e,G,m),W(j,e,m),X=!0},p(e,[m]){const N={};m&128&&(N.$$scope={dirty:m,ctx:e}),_.$set(N);const c={};!pe&&m&1&&(pe=!0,c.value=e[0],Ie(()=>pe=!1)),k.$set(c)},i(e){X||(q(_.$$.fragment,e),q(k.$$.fragment,e),q(j.$$.fragment,e),X=!0)},o(e){D(_.$$.fragment,e),D(k.$$.fragment,e),D(j.$$.fragment,e),X=!1},d(e){e&&p(t),e&&p(a),e&&p(l),e&&p(i),e&&p(r),e&&p(U),Y(_,e),e&&p(V),e&&p(T),e&&p(B),Y(k,e),e&&p(G),Y(j,e)}}}function Ve(o,t,s){let a="// Event name: Event params   (Last event at the top)";function l(r){r.detail?s(0,a=r.type+" "+JSON.stringify(r.detail)+`
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
`;function i(r){a=r,s(0,a)}return[a,l,n,i]}class Xe extends ze{constructor(t){super(),Ee(this,t,Ve,Ue,xe,{})}}export{Xe as default};
