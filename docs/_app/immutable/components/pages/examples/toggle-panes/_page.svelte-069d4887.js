import{S as z,i as j,s as x,k as h,q as w,a as S,w as g,l as C,m as B,r as k,h as p,c as b,x as d,b as u,C as A,y as v,f as m,t as c,z as P,u as D,g as F,d as G,B as H}from"../../../../chunks/index-15259a8c.js";import{S as I,P as E}from"../../../../chunks/Pane-669f295b.js";import{C as J}from"../../../../chunks/CodeArea-0c99e4dd.js";import{B as K}from"../../../../chunks/Button-4a3eb998.js";function L($){let e=$[0]?"Hide":"Show",a;return{c(){a=w(e)},l(t){a=k(t,e)},m(t,n){u(t,a,n)},p(t,n){n&1&&e!==(e=t[0]?"Hide":"Show")&&D(a,e)},d(t){t&&p(a)}}}function M($){let e,a;return{c(){e=h("span"),a=w("1")},l(t){e=C(t,"SPAN",{});var n=B(e);a=k(n,"1"),n.forEach(p)},m(t,n){u(t,e,n),A(e,a)},p:H,d(t){t&&p(e)}}}function T($){let e,a;return e=new E({props:{$$slots:{default:[O]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,n){v(e,t,n),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function O($){let e,a;return{c(){e=h("span"),a=w("2")},l(t){e=C(t,"SPAN",{});var n=B(e);a=k(n,"2"),n.forEach(p)},m(t,n){u(t,e,n),A(e,a)},p:H,d(t){t&&p(e)}}}function Q($){let e,a;return{c(){e=h("span"),a=w("3")},l(t){e=C(t,"SPAN",{});var n=B(e);a=k(n,"3"),n.forEach(p)},m(t,n){u(t,e,n),A(e,a)},p:H,d(t){t&&p(e)}}}function R($){let e,a,t,n,i;e=new E({props:{$$slots:{default:[M]},$$scope:{ctx:$}}});let l=$[0]&&T($);return n=new E({props:{$$slots:{default:[Q]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment),a=S(),l&&l.c(),t=S(),g(n.$$.fragment)},l(f){d(e.$$.fragment,f),a=b(f),l&&l.l(f),t=b(f),d(n.$$.fragment,f)},m(f,o){v(e,f,o),u(f,a,o),l&&l.m(f,o),u(f,t,o),v(n,f,o),i=!0},p(f,o){const _={};o&8&&(_.$$scope={dirty:o,ctx:f}),e.$set(_),f[0]?l?o&1&&m(l,1):(l=T(f),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(F(),c(l,1,1,()=>{l=null}),G());const s={};o&8&&(s.$$scope={dirty:o,ctx:f}),n.$set(s)},i(f){i||(m(e.$$.fragment,f),m(l),m(n.$$.fragment,f),i=!0)},o(f){c(e.$$.fragment,f),c(l),c(n.$$.fragment,f),i=!1},d(f){P(e,f),f&&p(a),l&&l.d(f),f&&p(t),P(n,f)}}}function U($){let e,a,t,n,i,l,f,o,_;return n=new K({props:{$$slots:{default:[L]},$$scope:{ctx:$}}}),n.$on("click",$[1]),l=new I({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[R]},$$scope:{ctx:$}}}),o=new J({props:{id:"toggle_panes",code:$[2]}}),{c(){e=h("h2"),a=w("Toggle a pane on/off"),t=S(),g(n.$$.fragment),i=S(),g(l.$$.fragment),f=S(),g(o.$$.fragment)},l(s){e=C(s,"H2",{});var r=B(e);a=k(r,"Toggle a pane on/off"),r.forEach(p),t=b(s),d(n.$$.fragment,s),i=b(s),d(l.$$.fragment,s),f=b(s),d(o.$$.fragment,s)},m(s,r){u(s,e,r),A(e,a),u(s,t,r),v(n,s,r),u(s,i,r),v(l,s,r),u(s,f,r),v(o,s,r),_=!0},p(s,[r]){const N={};r&9&&(N.$$scope={dirty:r,ctx:s}),n.$set(N);const q={};r&9&&(q.$$scope={dirty:r,ctx:s}),l.$set(q)},i(s){_||(m(n.$$.fragment,s),m(l.$$.fragment,s),m(o.$$.fragment,s),_=!0)},o(s){c(n.$$.fragment,s),c(l.$$.fragment,s),c(o.$$.fragment,s),_=!1},d(s){s&&p(e),s&&p(t),P(n,s),s&&p(i),P(l,s),s&&p(f),P(o,s)}}}function V($,e,a){function t(){a(0,n=!n)}let n=!0;return[n,t,`
<script>
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
