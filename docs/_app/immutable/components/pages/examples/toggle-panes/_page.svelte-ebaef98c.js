import{S as q,i as I,s as L,e as h,L as k,a as S,Q as g,b as C,d as N,M as w,g as $,f as b,R as d,j as u,k as A,T as v,n as m,o as c,V as P,N as M,$ as Q,a0 as R,I as E}from"../../../../chunks/external-b827b9fd.js";import{S as V,P as B}from"../../../../chunks/svelte-splitpanes-e5e78b7f.js";import{C as z}from"../../../../chunks/CodeArea-6af4aaf3.js";import{B as D}from"../../../../chunks/Button-1988e876.js";function F(p){let e=p[0]?"Hide":"Show",a;return{c(){a=k(e)},l(t){a=w(t,e)},m(t,n){u(t,a,n)},p(t,n){n&1&&e!==(e=t[0]?"Hide":"Show")&&M(a,e)},d(t){t&&$(a)}}}function G(p){let e,a;return{c(){e=h("span"),a=k("1")},l(t){e=C(t,"SPAN",{});var n=N(e);a=w(n,"1"),n.forEach($)},m(t,n){u(t,e,n),A(e,a)},p:E,d(t){t&&$(e)}}}function j(p){let e,a;return e=new B({props:{$$slots:{default:[J]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,n){v(e,t,n),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function J(p){let e,a;return{c(){e=h("span"),a=k("2")},l(t){e=C(t,"SPAN",{});var n=N(e);a=w(n,"2"),n.forEach($)},m(t,n){u(t,e,n),A(e,a)},p:E,d(t){t&&$(e)}}}function K(p){let e,a;return{c(){e=h("span"),a=k("3")},l(t){e=C(t,"SPAN",{});var n=N(e);a=w(n,"3"),n.forEach($)},m(t,n){u(t,e,n),A(e,a)},p:E,d(t){t&&$(e)}}}function O(p){let e,a,t,n,i;e=new B({props:{$$slots:{default:[G]},$$scope:{ctx:p}}});let l=p[0]&&j(p);return n=new B({props:{$$slots:{default:[K]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment),a=S(),l&&l.c(),t=S(),g(n.$$.fragment)},l(f){d(e.$$.fragment,f),a=b(f),l&&l.l(f),t=b(f),d(n.$$.fragment,f)},m(f,o){v(e,f,o),u(f,a,o),l&&l.m(f,o),u(f,t,o),v(n,f,o),i=!0},p(f,o){const _={};o&8&&(_.$$scope={dirty:o,ctx:f}),e.$set(_),f[0]?l?o&1&&m(l,1):(l=j(f),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(Q(),c(l,1,1,()=>{l=null}),R());const s={};o&8&&(s.$$scope={dirty:o,ctx:f}),n.$set(s)},i(f){i||(m(e.$$.fragment,f),m(l),m(n.$$.fragment,f),i=!0)},o(f){c(e.$$.fragment,f),c(l),c(n.$$.fragment,f),i=!1},d(f){P(e,f),f&&$(a),l&&l.d(f),f&&$(t),P(n,f)}}}function U(p){let e,a,t,n,i,l,f,o,_;return n=new D({props:{$$slots:{default:[F]},$$scope:{ctx:p}}}),n.$on("click",p[1]),l=new V({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:p}}}),o=new z({props:{id:"toggle_panes",code:p[2]}}),{c(){e=h("h2"),a=k("Toggle a pane on/off"),t=S(),g(n.$$.fragment),i=S(),g(l.$$.fragment),f=S(),g(o.$$.fragment)},l(s){e=C(s,"H2",{});var r=N(e);a=w(r,"Toggle a pane on/off"),r.forEach($),t=b(s),d(n.$$.fragment,s),i=b(s),d(l.$$.fragment,s),f=b(s),d(o.$$.fragment,s)},m(s,r){u(s,e,r),A(e,a),u(s,t,r),v(n,s,r),u(s,i,r),v(l,s,r),u(s,f,r),v(o,s,r),_=!0},p(s,[r]){const H={};r&9&&(H.$$scope={dirty:r,ctx:s}),n.$set(H);const T={};r&9&&(T.$$scope={dirty:r,ctx:s}),l.$set(T)},i(s){_||(m(n.$$.fragment,s),m(l.$$.fragment,s),m(o.$$.fragment,s),_=!0)},o(s){c(n.$$.fragment,s),c(l.$$.fragment,s),c(o.$$.fragment,s),_=!1},d(s){s&&$(e),s&&$(t),P(n,s),s&&$(i),P(l,s),s&&$(f),P(o,s)}}}function W(p,e,a){function t(){a(0,n=!n)}let n=!0;return[n,t,`
<script>
import { Pane, Splitpanes } from 'svelte-splitpanes'

let visible = true;

function onClick() {
    visible = !visible;
}
</script>
<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>
<Splitpanes class="default-theme" style="height: 400px">
    <Pane>
        <span>1</span>
    </Pane>
	{#if visible}
    <Pane>
        <span>2</span>
    </Pane>
	{/if}
    <Pane>
        <span>3</span>
    </Pane>
</Splitpanes>`]}class y extends q{constructor(e){super(),I(this,e,W,U,L,{})}}export{y as default};
