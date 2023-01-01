import{S as z,i as j,s as x,k as h,q as w,a as S,w as g,l as C,m as B,r as k,h as $,c as b,x as d,b as u,C as A,y as v,f as m,t as c,z as P,u as D,g as F,d as G,B as H}from"../../../../chunks/index-5c227a2d.js";import{S as I,P as E}from"../../../../chunks/Pane-ea2de0f1.js";import{C as J}from"../../../../chunks/CodeArea-c342b5cb.js";import{B as K}from"../../../../chunks/Button-d5e6a969.js";function L(p){let e=p[0]?"Hide":"Show",a;return{c(){a=w(e)},l(t){a=k(t,e)},m(t,s){u(t,a,s)},p(t,s){s&1&&e!==(e=t[0]?"Hide":"Show")&&D(a,e)},d(t){t&&$(a)}}}function M(p){let e,a;return{c(){e=h("span"),a=w("1")},l(t){e=C(t,"SPAN",{});var s=B(e);a=k(s,"1"),s.forEach($)},m(t,s){u(t,e,s),A(e,a)},p:H,d(t){t&&$(e)}}}function T(p){let e,a;return e=new E({props:{$$slots:{default:[O]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,s){v(e,t,s),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function O(p){let e,a;return{c(){e=h("span"),a=w("2")},l(t){e=C(t,"SPAN",{});var s=B(e);a=k(s,"2"),s.forEach($)},m(t,s){u(t,e,s),A(e,a)},p:H,d(t){t&&$(e)}}}function Q(p){let e,a;return{c(){e=h("span"),a=w("3")},l(t){e=C(t,"SPAN",{});var s=B(e);a=k(s,"3"),s.forEach($)},m(t,s){u(t,e,s),A(e,a)},p:H,d(t){t&&$(e)}}}function R(p){let e,a,t,s,i;e=new E({props:{$$slots:{default:[M]},$$scope:{ctx:p}}});let l=p[0]&&T(p);return s=new E({props:{$$slots:{default:[Q]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment),a=S(),l&&l.c(),t=S(),g(s.$$.fragment)},l(f){d(e.$$.fragment,f),a=b(f),l&&l.l(f),t=b(f),d(s.$$.fragment,f)},m(f,o){v(e,f,o),u(f,a,o),l&&l.m(f,o),u(f,t,o),v(s,f,o),i=!0},p(f,o){const _={};o&8&&(_.$$scope={dirty:o,ctx:f}),e.$set(_),f[0]?l?o&1&&m(l,1):(l=T(f),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(F(),c(l,1,1,()=>{l=null}),G());const n={};o&8&&(n.$$scope={dirty:o,ctx:f}),s.$set(n)},i(f){i||(m(e.$$.fragment,f),m(l),m(s.$$.fragment,f),i=!0)},o(f){c(e.$$.fragment,f),c(l),c(s.$$.fragment,f),i=!1},d(f){P(e,f),f&&$(a),l&&l.d(f),f&&$(t),P(s,f)}}}function U(p){let e,a,t,s,i,l,f,o,_;return s=new K({props:{$$slots:{default:[L]},$$scope:{ctx:p}}}),s.$on("click",p[1]),l=new I({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[R]},$$scope:{ctx:p}}}),o=new J({props:{id:"toggle_panes",code:p[2]}}),{c(){e=h("h2"),a=w("Toggle a pane on/off"),t=S(),g(s.$$.fragment),i=S(),g(l.$$.fragment),f=S(),g(o.$$.fragment)},l(n){e=C(n,"H2",{});var r=B(e);a=k(r,"Toggle a pane on/off"),r.forEach($),t=b(n),d(s.$$.fragment,n),i=b(n),d(l.$$.fragment,n),f=b(n),d(o.$$.fragment,n)},m(n,r){u(n,e,r),A(e,a),u(n,t,r),v(s,n,r),u(n,i,r),v(l,n,r),u(n,f,r),v(o,n,r),_=!0},p(n,[r]){const N={};r&9&&(N.$$scope={dirty:r,ctx:n}),s.$set(N);const q={};r&9&&(q.$$scope={dirty:r,ctx:n}),l.$set(q)},i(n){_||(m(s.$$.fragment,n),m(l.$$.fragment,n),m(o.$$.fragment,n),_=!0)},o(n){c(s.$$.fragment,n),c(l.$$.fragment,n),c(o.$$.fragment,n),_=!1},d(n){n&&$(e),n&&$(t),P(s,n),n&&$(i),P(l,n),n&&$(f),P(o,n)}}}function V(p,e,a){function t(){a(0,s=!s)}let s=!0;return[s,t,`
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
</Splitpanes>`]}class y extends z{constructor(e){super(),j(this,e,V,U,x,{})}}export{y as default};
