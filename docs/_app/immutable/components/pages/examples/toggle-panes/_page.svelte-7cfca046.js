import{S as z,i as D,s as U,U as V,k as h,q as w,a as S,w as g,l as C,m as A,r as k,h as $,c as b,x as d,b as u,C as B,y as v,f as m,t as c,z as P,u as j,V as E,g as x,d as F,D as H}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as G}from"../../../../chunks/CodeArea-5e3138e2.js";import{B as I}from"../../../../chunks/Button-881cd9b6.js";function J(p){let e=p[0]?"Hide":"Show",a;return{c(){a=w(e)},l(t){a=k(t,e)},m(t,s){u(t,a,s)},p(t,s){s&1&&e!==(e=t[0]?"Hide":"Show")&&j(a,e)},d(t){t&&$(a)}}}function K(p){let e,a;return{c(){e=h("span"),a=w("1")},l(t){e=C(t,"SPAN",{});var s=A(e);a=k(s,"1"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function T(p){let e,a;return e=new E({props:{$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,s){v(e,t,s),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function L(p){let e,a;return{c(){e=h("span"),a=w("2")},l(t){e=C(t,"SPAN",{});var s=A(e);a=k(s,"2"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function M(p){let e,a;return{c(){e=h("span"),a=w("3")},l(t){e=C(t,"SPAN",{});var s=A(e);a=k(s,"3"),s.forEach($)},m(t,s){u(t,e,s),B(e,a)},p:H,d(t){t&&$(e)}}}function O(p){let e,a,t,s,i;e=new E({props:{$$slots:{default:[K]},$$scope:{ctx:p}}});let l=p[0]&&T(p);return s=new E({props:{$$slots:{default:[M]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment),a=S(),l&&l.c(),t=S(),g(s.$$.fragment)},l(f){d(e.$$.fragment,f),a=b(f),l&&l.l(f),t=b(f),d(s.$$.fragment,f)},m(f,o){v(e,f,o),u(f,a,o),l&&l.m(f,o),u(f,t,o),v(s,f,o),i=!0},p(f,o){const _={};o&8&&(_.$$scope={dirty:o,ctx:f}),e.$set(_),f[0]?l?o&1&&m(l,1):(l=T(f),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(x(),c(l,1,1,()=>{l=null}),F());const n={};o&8&&(n.$$scope={dirty:o,ctx:f}),s.$set(n)},i(f){i||(m(e.$$.fragment,f),m(l),m(s.$$.fragment,f),i=!0)},o(f){c(e.$$.fragment,f),c(l),c(s.$$.fragment,f),i=!1},d(f){P(e,f),f&&$(a),l&&l.d(f),f&&$(t),P(s,f)}}}function Q(p){let e,a,t,s,i,l,f,o,_;return s=new I({props:{$$slots:{default:[J]},$$scope:{ctx:p}}}),s.$on("click",p[1]),l=new V({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:p}}}),o=new G({props:{id:"toggle_panes",code:p[2]}}),{c(){e=h("h2"),a=w("Toggle a pane on/off"),t=S(),g(s.$$.fragment),i=S(),g(l.$$.fragment),f=S(),g(o.$$.fragment)},l(n){e=C(n,"H2",{});var r=A(e);a=k(r,"Toggle a pane on/off"),r.forEach($),t=b(n),d(s.$$.fragment,n),i=b(n),d(l.$$.fragment,n),f=b(n),d(o.$$.fragment,n)},m(n,r){u(n,e,r),B(e,a),u(n,t,r),v(s,n,r),u(n,i,r),v(l,n,r),u(n,f,r),v(o,n,r),_=!0},p(n,[r]){const N={};r&9&&(N.$$scope={dirty:r,ctx:n}),s.$set(N);const q={};r&9&&(q.$$scope={dirty:r,ctx:n}),l.$set(q)},i(n){_||(m(s.$$.fragment,n),m(l.$$.fragment,n),m(o.$$.fragment,n),_=!0)},o(n){c(s.$$.fragment,n),c(l.$$.fragment,n),c(o.$$.fragment,n),_=!1},d(n){n&&$(e),n&&$(t),P(s,n),n&&$(i),P(l,n),n&&$(f),P(o,n)}}}function R(p,e,a){function t(){a(0,s=!s)}let s=!0;return[s,t,`
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
</Splitpanes>`]}class Z extends z{constructor(e){super(),D(this,e,R,Q,U,{})}}export{Z as default};
