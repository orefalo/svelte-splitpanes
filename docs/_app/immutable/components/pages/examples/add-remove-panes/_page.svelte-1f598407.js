import{S as q,i as y,s as G,e as O,P as k,f as g,z as d,h as R,j as V,Q as S,l as c,k as b,A as N,o as $,p as j,B as A,t as m,b as h,C as E,G as w,$ as H,a0 as Q,N as x,M as F}from"../../../../chunks/external-17ccdb8b.js";import{S as I,P as J}from"../../../../chunks/svelte-splitpanes-37e93f85.js";import{C as K}from"../../../../chunks/CodeArea-9f682d07.js";import{B as C}from"../../../../chunks/Button-40cfbb21.js";function M(f,e,l){const t=f.slice();return t[4]=e[l],t[6]=l,t}function L(f){let e;return{c(){e=k("+ ADD PANE")},l(l){e=S(l,"+ ADD PANE")},m(l,t){$(l,e,t)},d(l){l&&c(e)}}}function T(f){let e;return{c(){e=k("- REMOVE PANE")},l(l){e=S(l,"- REMOVE PANE")},m(l,t){$(l,e,t)},d(l){l&&c(e)}}}function U(f){let e,l=f[6]+1+"",t,n;return{c(){e=O("span"),t=k(l),n=g()},l(i){e=R(i,"SPAN",{});var a=V(e);t=S(a,l),a.forEach(c),n=b(i)},m(i,a){$(i,e,a),j(e,t),$(i,n,a)},p:F,d(i){i&&c(e),i&&c(n)}}}function z(f){let e,l;return e=new J({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){A(e,t,n),l=!0},p(t,n){const i={};n&128&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function W(f){let e,l,t={length:f[0]},n=[];for(let a=0;a<t.length;a+=1)n[a]=z(M(f,t,a));const i=a=>h(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=w()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=w()},m(a,o){for(let r=0;r<n.length;r+=1)n[r].m(a,o);$(a,e,o),l=!0},p(a,o){if(o&1){t={length:a[0]};let r;for(r=0;r<t.length;r+=1){const u=M(a,t,r);n[r]?(n[r].p(u,o),m(n[r],1)):(n[r]=z(u),n[r].c(),m(n[r],1),n[r].m(e.parentNode,e))}for(H(),r=t.length;r<n.length;r+=1)i(r);Q()}},i(a){if(!l){for(let o=0;o<t.length;o+=1)m(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)h(n[o]);l=!1},d(a){x(n,a),a&&c(e)}}}function X(f){let e,l,t,n,i,a,o,r,u,_,P;return n=new C({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),n.$on("click",f[2]),a=new C({props:{disabled:f[0]<=0,$$slots:{default:[T]},$$scope:{ctx:f}}}),a.$on("click",f[3]),r=new I({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),_=new K({props:{id:"add_remove_panes",code:f[1]}}),{c(){e=O("h2"),l=k("Adding and removing panes programmatically"),t=g(),d(n.$$.fragment),i=g(),d(a.$$.fragment),o=g(),d(r.$$.fragment),u=g(),d(_.$$.fragment)},l(s){e=R(s,"H2",{});var p=V(e);l=S(p,"Adding and removing panes programmatically"),p.forEach(c),t=b(s),N(n.$$.fragment,s),i=b(s),N(a.$$.fragment,s),o=b(s),N(r.$$.fragment,s),u=b(s),N(_.$$.fragment,s)},m(s,p){$(s,e,p),j(e,l),$(s,t,p),A(n,s,p),$(s,i,p),A(a,s,p),$(s,o,p),A(r,s,p),$(s,u,p),A(_,s,p),P=!0},p(s,[p]){const B={};p&128&&(B.$$scope={dirty:p,ctx:s}),n.$set(B);const v={};p&1&&(v.disabled=s[0]<=0),p&128&&(v.$$scope={dirty:p,ctx:s}),a.$set(v);const D={};p&129&&(D.$$scope={dirty:p,ctx:s}),r.$set(D)},i(s){P||(m(n.$$.fragment,s),m(a.$$.fragment,s),m(r.$$.fragment,s),m(_.$$.fragment,s),P=!0)},o(s){h(n.$$.fragment,s),h(a.$$.fragment,s),h(r.$$.fragment,s),h(_.$$.fragment,s),P=!1},d(s){s&&c(e),s&&c(t),E(n,s),s&&c(i),E(a,s),s&&c(o),E(r,s),s&&c(u),E(_,s)}}}function Y(f,e,l){let t=3;return[t,`
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
</Splitpanes>`,()=>{t>=0&&l(0,t++,t)},()=>{t>0&&l(0,t--,t)}]}class se extends q{constructor(e){super(),y(this,e,Y,X,G,{})}}export{se as default};
