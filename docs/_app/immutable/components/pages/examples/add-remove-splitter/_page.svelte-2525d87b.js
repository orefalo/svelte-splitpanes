import{S as q,i as y,s as G,e as O,P as k,f as g,z as d,h as R,j as V,Q as S,l as c,k as b,A as N,o as $,p as j,B as A,t as m,b as h,C as E,G as w,$ as H,a0 as Q,N as x,M as F}from"../../../../chunks/external-069c0b55.js";import{S as I,P as J}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as K}from"../../../../chunks/CodeArea-8a6a8f55.js";import{B as C}from"../../../../chunks/Button-c1406589.js";function M(f,e,a){const t=f.slice();return t[4]=e[a],t[6]=a,t}function L(f){let e;return{c(){e=k("+ ADD PANE")},l(a){e=S(a,"+ ADD PANE")},m(a,t){$(a,e,t)},d(a){a&&c(e)}}}function T(f){let e;return{c(){e=k("- REMOVE PANE")},l(a){e=S(a,"- REMOVE PANE")},m(a,t){$(a,e,t)},d(a){a&&c(e)}}}function U(f){let e,a=f[6]+1+"",t,n;return{c(){e=O("span"),t=k(a),n=g()},l(i){e=R(i,"SPAN",{});var l=V(e);t=S(l,a),l.forEach(c),n=b(i)},m(i,l){$(i,e,l),j(e,t),$(i,n,l)},p:F,d(i){i&&c(e),i&&c(n)}}}function z(f){let e,a;return e=new J({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},p(t,n){const i={};n&128&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){E(e,t)}}}function W(f){let e,a,t={length:f[0]},n=[];for(let l=0;l<t.length;l+=1)n[l]=z(M(f,t,l));const i=l=>h(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=w()},l(l){for(let o=0;o<n.length;o+=1)n[o].l(l);e=w()},m(l,o){for(let r=0;r<n.length;r+=1)n[r].m(l,o);$(l,e,o),a=!0},p(l,o){if(o&1){t={length:l[0]};let r;for(r=0;r<t.length;r+=1){const u=M(l,t,r);n[r]?(n[r].p(u,o),m(n[r],1)):(n[r]=z(u),n[r].c(),m(n[r],1),n[r].m(e.parentNode,e))}for(H(),r=t.length;r<n.length;r+=1)i(r);Q()}},i(l){if(!a){for(let o=0;o<t.length;o+=1)m(n[o]);a=!0}},o(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)h(n[o]);a=!1},d(l){x(n,l),l&&c(e)}}}function X(f){let e,a,t,n,i,l,o,r,u,_,P;return n=new C({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),n.$on("click",f[2]),l=new C({props:{disabled:f[0]<=0,$$slots:{default:[T]},$$scope:{ctx:f}}}),l.$on("click",f[3]),r=new I({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),_=new K({props:{id:"add_remove_splitter",code:f[1]}}),{c(){e=O("h2"),a=k("Adding splitters programmatically"),t=g(),d(n.$$.fragment),i=g(),d(l.$$.fragment),o=g(),d(r.$$.fragment),u=g(),d(_.$$.fragment)},l(s){e=R(s,"H2",{});var p=V(e);a=S(p,"Adding splitters programmatically"),p.forEach(c),t=b(s),N(n.$$.fragment,s),i=b(s),N(l.$$.fragment,s),o=b(s),N(r.$$.fragment,s),u=b(s),N(_.$$.fragment,s)},m(s,p){$(s,e,p),j(e,a),$(s,t,p),A(n,s,p),$(s,i,p),A(l,s,p),$(s,o,p),A(r,s,p),$(s,u,p),A(_,s,p),P=!0},p(s,[p]){const v={};p&128&&(v.$$scope={dirty:p,ctx:s}),n.$set(v);const B={};p&1&&(B.disabled=s[0]<=0),p&128&&(B.$$scope={dirty:p,ctx:s}),l.$set(B);const D={};p&129&&(D.$$scope={dirty:p,ctx:s}),r.$set(D)},i(s){P||(m(n.$$.fragment,s),m(l.$$.fragment,s),m(r.$$.fragment,s),m(_.$$.fragment,s),P=!0)},o(s){h(n.$$.fragment,s),h(l.$$.fragment,s),h(r.$$.fragment,s),h(_.$$.fragment,s),P=!1},d(s){s&&c(e),s&&c(t),E(n,s),s&&c(i),E(l,s),s&&c(o),E(r,s),s&&c(u),E(_,s)}}}function Y(f,e,a){let t=3;return[t,`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	let panesNumber = 3;
</script>
<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={panesNumber <= 0}
	on:click={() => {
		if (panesNumber > 0) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`,()=>{t>=0&&a(0,t++,t)},()=>{t>0&&a(0,t--,t)}]}class se extends q{constructor(e){super(),y(this,e,Y,X,G,{})}}export{se as default};
