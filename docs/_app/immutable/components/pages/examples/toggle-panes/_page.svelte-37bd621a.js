import{S as q,i as z,s as M,e as h,P as k,f as S,z as g,h as C,j as A,Q as w,l as $,k as b,A as d,o as u,p as B,B as P,t as m,b as c,C as v,R as Q,$ as R,a0 as D,M as H}from"../../../../chunks/external-069c0b55.js";import{S as F,P as E}from"../../../../chunks/svelte-splitpanes-b27990ef.js";import{C as G}from"../../../../chunks/CodeArea-8a6a8f55.js";import{B as I}from"../../../../chunks/Button-c1406589.js";function J(p){let e=p[0]?"Hide":"Show",a;return{c(){a=k(e)},l(t){a=w(t,e)},m(t,s){u(t,a,s)},p(t,s){s&1&&e!==(e=t[0]?"Hide":"Show")&&Q(a,e)},d(t){t&&$(a)}}}function K(p){let e,a;return{c(){e=h("span"),a=k("1")},l(t){e=C(t,"SPAN",{});var s=A(e);a=w(s,"1"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function j(p){let e,a;return e=new E({props:{$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,s){P(e,t,s),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){v(e,t)}}}function L(p){let e,a;return{c(){e=h("span"),a=k("2")},l(t){e=C(t,"SPAN",{});var s=A(e);a=w(s,"2"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function O(p){let e,a;return{c(){e=h("span"),a=k("3")},l(t){e=C(t,"SPAN",{});var s=A(e);a=w(s,"3"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function U(p){let e,a,t,s,i;e=new E({props:{$$slots:{default:[K]},$$scope:{ctx:p}}});let l=p[0]&&j(p);return s=new E({props:{$$slots:{default:[O]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment),a=S(),l&&l.c(),t=S(),g(s.$$.fragment)},l(f){d(e.$$.fragment,f),a=b(f),l&&l.l(f),t=b(f),d(s.$$.fragment,f)},m(f,o){P(e,f,o),u(f,a,o),l&&l.m(f,o),u(f,t,o),P(s,f,o),i=!0},p(f,o){const _={};o&8&&(_.$$scope={dirty:o,ctx:f}),e.$set(_),f[0]?l?o&1&&m(l,1):(l=j(f),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(R(),c(l,1,1,()=>{l=null}),D());const n={};o&8&&(n.$$scope={dirty:o,ctx:f}),s.$set(n)},i(f){i||(m(e.$$.fragment,f),m(l),m(s.$$.fragment,f),i=!0)},o(f){c(e.$$.fragment,f),c(l),c(s.$$.fragment,f),i=!1},d(f){v(e,f),f&&$(a),l&&l.d(f),f&&$(t),v(s,f)}}}function V(p){let e,a,t,s,i,l,f,o,_;return s=new I({props:{$$slots:{default:[J]},$$scope:{ctx:p}}}),s.$on("click",p[1]),l=new F({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[U]},$$scope:{ctx:p}}}),o=new G({props:{id:"toggle_panes",code:p[2]}}),{c(){e=h("h2"),a=k("Toggle a pane on/off"),t=S(),g(s.$$.fragment),i=S(),g(l.$$.fragment),f=S(),g(o.$$.fragment)},l(n){e=C(n,"H2",{});var r=A(e);a=w(r,"Toggle a pane on/off"),r.forEach($),t=b(n),d(s.$$.fragment,n),i=b(n),d(l.$$.fragment,n),f=b(n),d(o.$$.fragment,n)},m(n,r){u(n,e,r),B(e,a),u(n,t,r),P(s,n,r),u(n,i,r),P(l,n,r),u(n,f,r),P(o,n,r),_=!0},p(n,[r]){const N={};r&9&&(N.$$scope={dirty:r,ctx:n}),s.$set(N);const T={};r&9&&(T.$$scope={dirty:r,ctx:n}),l.$set(T)},i(n){_||(m(s.$$.fragment,n),m(l.$$.fragment,n),m(o.$$.fragment,n),_=!0)},o(n){c(s.$$.fragment,n),c(l.$$.fragment,n),c(o.$$.fragment,n),_=!1},d(n){n&&$(e),n&&$(t),v(s,n),n&&$(i),v(l,n),n&&$(f),v(o,n)}}}function W(p,e,a){function t(){a(0,s=!s)}let s=!0;return[s,t,`
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
</Splitpanes>`]}class y extends q{constructor(e){super(),z(this,e,W,V,M,{})}}export{y as default};
