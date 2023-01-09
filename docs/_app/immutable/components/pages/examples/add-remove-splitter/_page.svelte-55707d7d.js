import{S as y,i as x,s as H,k as O,q as k,a as g,w as d,l as R,m as V,r as S,h as c,c as b,x as N,b as $,C as q,y as E,f as m,t as h,z as A,e as w,g as j,d as F,D as G,B as I}from"../../../../chunks/index-7f92752a.js";import{S as J,P as K}from"../../../../chunks/Pane-78ab3306.js";import{C as L}from"../../../../chunks/CodeArea-fc163efa.js";import{B as C}from"../../../../chunks/Button-8a569c61.js";function z(f,e,a){const t=f.slice();return t[4]=e[a],t[6]=a,t}function Q(f){let e;return{c(){e=k("+ ADD PANE")},l(a){e=S(a,"+ ADD PANE")},m(a,t){$(a,e,t)},d(a){a&&c(e)}}}function T(f){let e;return{c(){e=k("- REMOVE PANE")},l(a){e=S(a,"- REMOVE PANE")},m(a,t){$(a,e,t)},d(a){a&&c(e)}}}function U(f){let e,a=f[6]+1+"",t,n;return{c(){e=O("span"),t=k(a),n=g()},l(p){e=R(p,"SPAN",{});var l=V(e);t=S(l,a),l.forEach(c),n=b(p)},m(p,l){$(p,e,l),q(e,t),$(p,n,l)},p:I,d(p){p&&c(e),p&&c(n)}}}function M(f){let e,a;return e=new K({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),a=!0},p(t,n){const p={};n&128&&(p.$$scope={dirty:n,ctx:t}),e.$set(p)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function W(f){let e,a,t={length:f[0]},n=[];for(let l=0;l<t.length;l+=1)n[l]=M(z(f,t,l));const p=l=>h(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=w()},l(l){for(let o=0;o<n.length;o+=1)n[o].l(l);e=w()},m(l,o){for(let r=0;r<n.length;r+=1)n[r].m(l,o);$(l,e,o),a=!0},p(l,o){if(o&1){t={length:l[0]};let r;for(r=0;r<t.length;r+=1){const u=z(l,t,r);n[r]?(n[r].p(u,o),m(n[r],1)):(n[r]=M(u),n[r].c(),m(n[r],1),n[r].m(e.parentNode,e))}for(j(),r=t.length;r<n.length;r+=1)p(r);F()}},i(l){if(!a){for(let o=0;o<t.length;o+=1)m(n[o]);a=!0}},o(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)h(n[o]);a=!1},d(l){G(n,l),l&&c(e)}}}function X(f){let e,a,t,n,p,l,o,r,u,_,P;return n=new C({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),n.$on("click",f[2]),l=new C({props:{disabled:f[0]<=0,$$slots:{default:[T]},$$scope:{ctx:f}}}),l.$on("click",f[3]),r=new J({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),_=new L({props:{id:"add_remove_splitter",code:f[1]}}),{c(){e=O("h2"),a=k("Adding splitters programmatically"),t=g(),d(n.$$.fragment),p=g(),d(l.$$.fragment),o=g(),d(r.$$.fragment),u=g(),d(_.$$.fragment)},l(s){e=R(s,"H2",{});var i=V(e);a=S(i,"Adding splitters programmatically"),i.forEach(c),t=b(s),N(n.$$.fragment,s),p=b(s),N(l.$$.fragment,s),o=b(s),N(r.$$.fragment,s),u=b(s),N(_.$$.fragment,s)},m(s,i){$(s,e,i),q(e,a),$(s,t,i),E(n,s,i),$(s,p,i),E(l,s,i),$(s,o,i),E(r,s,i),$(s,u,i),E(_,s,i),P=!0},p(s,[i]){const D={};i&128&&(D.$$scope={dirty:i,ctx:s}),n.$set(D);const B={};i&1&&(B.disabled=s[0]<=0),i&128&&(B.$$scope={dirty:i,ctx:s}),l.$set(B);const v={};i&129&&(v.$$scope={dirty:i,ctx:s}),r.$set(v)},i(s){P||(m(n.$$.fragment,s),m(l.$$.fragment,s),m(r.$$.fragment,s),m(_.$$.fragment,s),P=!0)},o(s){h(n.$$.fragment,s),h(l.$$.fragment,s),h(r.$$.fragment,s),h(_.$$.fragment,s),P=!1},d(s){s&&c(e),s&&c(t),A(n,s),s&&c(p),A(l,s),s&&c(o),A(r,s),s&&c(u),A(_,s)}}}function Y(f,e,a){let t=3;return[t,`
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
</Splitpanes>`,()=>{t>=0&&a(0,t++,t)},()=>{t>0&&a(0,t--,t)}]}class se extends y{constructor(e){super(),x(this,e,Y,X,H,{})}}export{se as default};
