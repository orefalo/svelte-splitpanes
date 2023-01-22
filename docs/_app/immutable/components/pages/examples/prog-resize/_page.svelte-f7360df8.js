import{S as U,i as V,s as D,aa as G,F as H,U as I,e as v,P as b,f as C,z as y,h as z,j as k,Q as P,l as c,k as A,A as E,o as S,p as $,B as M,V as O,t as R,b as N,C as T,M as J,R as K}from"../../../../chunks/external-069c0b55.js";import{S as L,P as F}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as W}from"../../../../chunks/CodeArea-8a6a8f55.js";function X(l){let e,r=Math.round(l[0][0])+"",t,a;return{c(){e=v("span"),t=b(r),a=b("%")},l(i){e=z(i,"SPAN",{});var o=k(e);t=P(o,r),a=P(o,"%"),o.forEach(c)},m(i,o){S(i,e,o),$(e,t),$(e,a)},p(i,o){o&1&&r!==(r=Math.round(i[0][0])+"")&&K(t,r)},d(i){i&&c(e)}}}function Y(l){let e,r;return{c(){e=v("span"),r=b("Auto-Calculated")},l(t){e=z(t,"SPAN",{});var a=k(e);r=P(a,"Auto-Calculated"),a.forEach(c)},m(t,a){S(t,e,a),$(e,r)},p:J,d(t){t&&c(e)}}}function Z(l){let e,r,t,a,i;function o(n){l[3](n)}let u={$$slots:{default:[X]},$$scope:{ctx:l}};return l[0][0]!==void 0&&(u.size=l[0][0]),e=new F({props:u}),H.push(()=>I(e,"size",o,l[0][0])),a=new F({props:{$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment),t=C(),y(a.$$.fragment)},l(n){E(e.$$.fragment,n),t=A(n),E(a.$$.fragment,n)},m(n,p){M(e,n,p),S(n,t,p),M(a,n,p),i=!0},p(n,p){const f={};p&17&&(f.$$scope={dirty:p,ctx:n}),!r&&p&1&&(r=!0,f.size=n[0][0],O(()=>r=!1)),e.$set(f);const w={};p&16&&(w.$$scope={dirty:p,ctx:n}),a.$set(w)},i(n){i||(R(e.$$.fragment,n),R(a.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),N(a.$$.fragment,n),i=!1},d(n){T(e,n),n&&c(t),T(a,n)}}}function ee(l){let e,r,t,a,i,o,u,n,p,f,w,x,g,B,_,q;function Q(s){l[2](s)}let j={float:!0,min:0,step:.01,max:100};return l[0]!==void 0&&(j.values=l[0]),f=new G({props:j}),H.push(()=>I(f,"values",Q,l[0])),g=new L({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Z]},$$scope:{ctx:l}}}),_=new W({props:{id:"prog_resize",code:l[1]}}),{c(){e=v("h2"),r=b("Programmatic resizing"),t=C(),a=v("section"),i=v("p"),o=b(`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
		`),u=v("br"),n=b(`
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
		see in the example.`),p=C(),y(f.$$.fragment),x=C(),y(g.$$.fragment),B=C(),y(_.$$.fragment)},l(s){e=z(s,"H2",{});var d=k(e);r=P(d,"Programmatic resizing"),d.forEach(c),t=A(s),a=z(s,"SECTION",{});var m=k(a);i=z(m,"P",{});var h=k(i);o=P(h,`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
		`),u=z(h,"BR",{}),n=P(h,`
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
		see in the example.`),h.forEach(c),p=A(m),E(f.$$.fragment,m),x=A(m),E(g.$$.fragment,m),B=A(m),E(_.$$.fragment,m),m.forEach(c)},m(s,d){S(s,e,d),$(e,r),S(s,t,d),S(s,a,d),$(a,i),$(i,o),$(i,u),$(i,n),$(a,p),M(f,a,null),$(a,x),M(g,a,null),$(a,B),M(_,a,null),q=!0},p(s,[d]){const m={};!w&&d&1&&(w=!0,m.values=s[0],O(()=>w=!1)),f.$set(m);const h={};d&17&&(h.$$scope={dirty:d,ctx:s}),g.$set(h)},i(s){q||(R(f.$$.fragment,s),R(g.$$.fragment,s),R(_.$$.fragment,s),q=!0)},o(s){N(f.$$.fragment,s),N(g.$$.fragment,s),N(_.$$.fragment,s),q=!1},d(s){s&&c(e),s&&c(t),s&&c(a),T(f),T(g),T(_)}}}function ae(l,e,r){let t=[50];const a=`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	
    let value = [50];
</script>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value[0]}>
		<span>{Math.round(value[0])}%</span>
	</Pane>
	<Pane>
		<span>Auto-Calculated</span>
	</Pane>
</Splitpanes>

<CodeArea id="prog_resize" {code} />`;function i(u){t=u,r(0,t)}function o(u){l.$$.not_equal(t[0],u)&&(t[0]=u,r(0,t))}return[t,a,i,o]}class ie extends U{constructor(e){super(),V(this,e,ae,ee,D,{})}}export{ie as default};
