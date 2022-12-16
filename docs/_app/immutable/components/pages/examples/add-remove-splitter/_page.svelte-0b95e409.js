import{S as y,i as x,s as H,k as O,q as P,a as g,w as d,l as R,m as V,r as S,h as p,c as b,x as N,b as $,C as q,y as E,f as m,t as h,z as A,e as v,g as j,d as F,D as G,B as I}from"../../../../chunks/index-15259a8c.js";import{S as J,P as K}from"../../../../chunks/Pane-669f295b.js";import{C as L}from"../../../../chunks/CodeArea-0c99e4dd.js";import{B as C}from"../../../../chunks/Button-4a3eb998.js";function z(f,e,a){const t=f.slice();return t[4]=e[a],t[6]=a,t}function Q(f){let e;return{c(){e=P("+ ADD PANE")},l(a){e=S(a,"+ ADD PANE")},m(a,t){$(a,e,t)},d(a){a&&p(e)}}}function T(f){let e;return{c(){e=P("- REMOVE PANE")},l(a){e=S(a,"- REMOVE PANE")},m(a,t){$(a,e,t)},d(a){a&&p(e)}}}function U(f){let e,a=f[6]+1+"",t,n;return{c(){e=O("span"),t=P(a),n=g()},l(c){e=R(c,"SPAN",{});var l=V(e);t=S(l,a),l.forEach(p),n=b(c)},m(c,l){$(c,e,l),q(e,t),$(c,n,l)},p:I,d(c){c&&p(e),c&&p(n)}}}function M(f){let e,a;return e=new K({props:{minSize:10,$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){d(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),a=!0},p(t,n){const c={};n&128&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function W(f){let e,a,t={length:f[0]},n=[];for(let l=0;l<t.length;l+=1)n[l]=M(z(f,t,l));const c=l=>h(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=v()},l(l){for(let o=0;o<n.length;o+=1)n[o].l(l);e=v()},m(l,o){for(let r=0;r<n.length;r+=1)n[r].m(l,o);$(l,e,o),a=!0},p(l,o){if(o&1){t={length:l[0]};let r;for(r=0;r<t.length;r+=1){const u=z(l,t,r);n[r]?(n[r].p(u,o),m(n[r],1)):(n[r]=M(u),n[r].c(),m(n[r],1),n[r].m(e.parentNode,e))}for(j(),r=t.length;r<n.length;r+=1)c(r);F()}},i(l){if(!a){for(let o=0;o<t.length;o+=1)m(n[o]);a=!0}},o(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)h(n[o]);a=!1},d(l){G(n,l),l&&p(e)}}}function X(f){let e,a,t,n,c,l,o,r,u,_,k;return n=new C({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),n.$on("click",f[2]),l=new C({props:{disabled:f[0]<=0,$$slots:{default:[T]},$$scope:{ctx:f}}}),l.$on("click",f[3]),r=new J({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[W]},$$scope:{ctx:f}}}),_=new L({props:{id:"add_remove_splitter",code:f[1]}}),{c(){e=O("h2"),a=P("Adding splitters programmatically"),t=g(),d(n.$$.fragment),c=g(),d(l.$$.fragment),o=g(),d(r.$$.fragment),u=g(),d(_.$$.fragment)},l(s){e=R(s,"H2",{});var i=V(e);a=S(i,"Adding splitters programmatically"),i.forEach(p),t=b(s),N(n.$$.fragment,s),c=b(s),N(l.$$.fragment,s),o=b(s),N(r.$$.fragment,s),u=b(s),N(_.$$.fragment,s)},m(s,i){$(s,e,i),q(e,a),$(s,t,i),E(n,s,i),$(s,c,i),E(l,s,i),$(s,o,i),E(r,s,i),$(s,u,i),E(_,s,i),k=!0},p(s,[i]){const D={};i&128&&(D.$$scope={dirty:i,ctx:s}),n.$set(D);const B={};i&1&&(B.disabled=s[0]<=0),i&128&&(B.$$scope={dirty:i,ctx:s}),l.$set(B);const w={};i&129&&(w.$$scope={dirty:i,ctx:s}),r.$set(w)},i(s){k||(m(n.$$.fragment,s),m(l.$$.fragment,s),m(r.$$.fragment,s),m(_.$$.fragment,s),k=!0)},o(s){h(n.$$.fragment,s),h(l.$$.fragment,s),h(r.$$.fragment,s),h(_.$$.fragment,s),k=!1},d(s){s&&p(e),s&&p(t),A(n,s),s&&p(c),A(l,s),s&&p(o),A(r,s),s&&p(u),A(_,s)}}}function Y(f,e,a){let t=3;return[t,`
<script>
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
