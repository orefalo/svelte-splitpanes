import{S as U,i as V,s as D,aa as F,C as H,P as L,e as v,L as z,a as C,Q as A,b,d as k,M as P,g as c,f as y,R as E,j as S,k as $,T as M,U as O,n as N,o as R,V as T,I as G,N as J}from"../../../../chunks/external-b827b9fd.js";import{S as K,P as B}from"../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as W}from"../../../../chunks/CodeArea-6af4aaf3.js";function X(l){let e,r=Math.round(l[0][0])+"",t,a;return{c(){e=v("span"),t=z(r),a=z("%")},l(i){e=b(i,"SPAN",{});var o=k(e);t=P(o,r),a=P(o,"%"),o.forEach(c)},m(i,o){S(i,e,o),$(e,t),$(e,a)},p(i,o){o&1&&r!==(r=Math.round(i[0][0])+"")&&J(t,r)},d(i){i&&c(e)}}}function Y(l){let e,r;return{c(){e=v("span"),r=z("Auto-Calculated")},l(t){e=b(t,"SPAN",{});var a=k(e);r=P(a,"Auto-Calculated"),a.forEach(c)},m(t,a){S(t,e,a),$(e,r)},p:G,d(t){t&&c(e)}}}function Z(l){let e,r,t,a,i;function o(n){l[3](n)}let u={$$slots:{default:[X]},$$scope:{ctx:l}};return l[0][0]!==void 0&&(u.size=l[0][0]),e=new B({props:u}),H.push(()=>L(e,"size",o,l[0][0])),a=new B({props:{$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){A(e.$$.fragment),t=C(),A(a.$$.fragment)},l(n){E(e.$$.fragment,n),t=y(n),E(a.$$.fragment,n)},m(n,p){M(e,n,p),S(n,t,p),M(a,n,p),i=!0},p(n,p){const f={};p&17&&(f.$$scope={dirty:p,ctx:n}),!r&&p&1&&(r=!0,f.size=n[0][0],O(()=>r=!1)),e.$set(f);const w={};p&16&&(w.$$scope={dirty:p,ctx:n}),a.$set(w)},i(n){i||(N(e.$$.fragment,n),N(a.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),R(a.$$.fragment,n),i=!1},d(n){T(e,n),n&&c(t),T(a,n)}}}function ee(l){let e,r,t,a,i,o,u,n,p,f,w,x,g,I,_,q;function Q(s){l[2](s)}let j={float:!0,min:0,step:.01,max:100};return l[0]!==void 0&&(j.values=l[0]),f=new F({props:j}),H.push(()=>L(f,"values",Q,l[0])),g=new K({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Z]},$$scope:{ctx:l}}}),_=new W({props:{id:"prog_resize",code:l[1]}}),{c(){e=v("h2"),r=z("Programmatic resizing"),t=C(),a=v("section"),i=v("p"),o=z(`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
		`),u=v("br"),n=z(`
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
		see in the example.`),p=C(),A(f.$$.fragment),x=C(),A(g.$$.fragment),I=C(),A(_.$$.fragment)},l(s){e=b(s,"H2",{});var d=k(e);r=P(d,"Programmatic resizing"),d.forEach(c),t=y(s),a=b(s,"SECTION",{});var m=k(a);i=b(m,"P",{});var h=k(i);o=P(h,`This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
		`),u=b(h,"BR",{}),n=P(h,`
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
		see in the example.`),h.forEach(c),p=y(m),E(f.$$.fragment,m),x=y(m),E(g.$$.fragment,m),I=y(m),E(_.$$.fragment,m),m.forEach(c)},m(s,d){S(s,e,d),$(e,r),S(s,t,d),S(s,a,d),$(a,i),$(i,o),$(i,u),$(i,n),$(a,p),M(f,a,null),$(a,x),M(g,a,null),$(a,I),M(_,a,null),q=!0},p(s,[d]){const m={};!w&&d&1&&(w=!0,m.values=s[0],O(()=>w=!1)),f.$set(m);const h={};d&17&&(h.$$scope={dirty:d,ctx:s}),g.$set(h)},i(s){q||(N(f.$$.fragment,s),N(g.$$.fragment,s),N(_.$$.fragment,s),q=!0)},o(s){R(f.$$.fragment,s),R(g.$$.fragment,s),R(_.$$.fragment,s),q=!1},d(s){s&&c(e),s&&c(t),s&&c(a),T(f),T(g),T(_)}}}function ae(l,e,r){let t=[50];const a=`
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
