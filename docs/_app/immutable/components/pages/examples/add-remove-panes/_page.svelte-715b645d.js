import{S as q,i as y,s as H,e as C,L as k,a as h,Q as d,b as O,d as z,M as S,g as c,f as b,R as N,j as $,k as j,T as E,n as m,o as g,V as A,D as w,$ as I,a0 as J,J as L,I as Q}from"../../../../chunks/external-b827b9fd.js";import{S as T,P as x}from"../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as F}from"../../../../chunks/CodeArea-6af4aaf3.js";import{B as M}from"../../../../chunks/Button-1988e876.js";function R(f,e,l){const t=f.slice();return t[4]=e[l],t[6]=l,t}function G(f){let e;return{c(){e=k("+ ADD PANE")},l(l){e=S(l,"+ ADD PANE")},m(l,t){$(l,e,t)},d(l){l&&c(e)}}}function K(f){let e;return{c(){e=k("- REMOVE PANE")},l(l){e=S(l,"- REMOVE PANE")},m(l,t){$(l,e,t)},d(l){l&&c(e)}}}function U(f){let e,l=f[6]+1+"",t,n;return{c(){e=C("span"),t=k(l),n=h()},l(i){e=O(i,"SPAN",{});var a=z(e);t=S(a,l),a.forEach(c),n=b(i)},m(i,a){$(i,e,a),j(e,t),$(i,n,a)},p:Q,d(i){i&&c(e),i&&c(n)}}}function V(f){let e,l;return e=new x({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const i={};n&128&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function W(f){let e,l,t={length:f[0]},n=[];for(let a=0;a<t.length;a+=1)n[a]=V(R(f,t,a));const i=a=>g(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=w()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=w()},m(a,o){for(let r=0;r<n.length;r+=1)n[r].m(a,o);$(a,e,o),l=!0},p(a,o){if(o&1){t={length:a[0]};let r;for(r=0;r<t.length;r+=1){const u=R(a,t,r);n[r]?(n[r].p(u,o),m(n[r],1)):(n[r]=V(u),n[r].c(),m(n[r],1),n[r].m(e.parentNode,e))}for(I(),r=t.length;r<n.length;r+=1)i(r);J()}},i(a){if(!l){for(let o=0;o<t.length;o+=1)m(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)g(n[o]);l=!1},d(a){L(n,a),a&&c(e)}}}function X(f){let e,l,t,n,i,a,o,r,u,_,P;return n=new M({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),n.$on("click",f[2]),a=new M({props:{disabled:f[0]<=0,$$slots:{default:[K]},$$scope:{ctx:f}}}),a.$on("click",f[3]),r=new T({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),_=new F({props:{id:"add_remove_panes",code:f[1]}}),{c(){e=C("h2"),l=k("Adding and removing panes programmatically"),t=h(),d(n.$$.fragment),i=h(),d(a.$$.fragment),o=h(),d(r.$$.fragment),u=h(),d(_.$$.fragment)},l(s){e=O(s,"H2",{});var p=z(e);l=S(p,"Adding and removing panes programmatically"),p.forEach(c),t=b(s),N(n.$$.fragment,s),i=b(s),N(a.$$.fragment,s),o=b(s),N(r.$$.fragment,s),u=b(s),N(_.$$.fragment,s)},m(s,p){$(s,e,p),j(e,l),$(s,t,p),E(n,s,p),$(s,i,p),E(a,s,p),$(s,o,p),E(r,s,p),$(s,u,p),E(_,s,p),P=!0},p(s,[p]){const B={};p&128&&(B.$$scope={dirty:p,ctx:s}),n.$set(B);const v={};p&1&&(v.disabled=s[0]<=0),p&128&&(v.$$scope={dirty:p,ctx:s}),a.$set(v);const D={};p&129&&(D.$$scope={dirty:p,ctx:s}),r.$set(D)},i(s){P||(m(n.$$.fragment,s),m(a.$$.fragment,s),m(r.$$.fragment,s),m(_.$$.fragment,s),P=!0)},o(s){g(n.$$.fragment,s),g(a.$$.fragment,s),g(r.$$.fragment,s),g(_.$$.fragment,s),P=!1},d(s){s&&c(e),s&&c(t),A(n,s),s&&c(i),A(a,s),s&&c(o),A(r,s),s&&c(u),A(_,s)}}}function Y(f,e,l){let t=3;return[t,`
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
</Splitpanes>`,()=>{t>=0&&l(0,t++,t)},()=>{t>0&&l(0,t--,t)}]}class se extends q{constructor(e){super(),y(this,e,Y,X,H,{})}}export{se as default};
