import{S as O,i as q,s as L,U as z,k as w,q as A,a as d,w as m,l as E,m as N,r as k,h as r,c as v,x as c,b as u,C,y as i,f as _,t as g,z as P,V as S,D as x}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as D}from"../../../../chunks/CodeArea-5e3138e2.js";function H(f){let e,p;return{c(){e=w("span"),p=A("1")},l(t){e=E(t,"SPAN",{});var a=N(e);p=k(a,"1"),a.forEach(r)},m(t,a){u(t,e,a),C(e,p)},p:x,d(t){t&&r(e)}}}function U(f){let e,p;return{c(){e=w("span"),p=A("2")},l(t){e=E(t,"SPAN",{});var a=N(e);p=k(a,"2"),a.forEach(r)},m(t,a){u(t,e,a),C(e,p)},p:x,d(t){t&&r(e)}}}function V(f){let e,p;return{c(){e=w("span"),p=A("3")},l(t){e=E(t,"SPAN",{});var a=N(e);p=k(a,"3"),a.forEach(r)},m(t,a){u(t,e,a),C(e,p)},p:x,d(t){t&&r(e)}}}function j(f){let e,p;return{c(){e=w("span"),p=A("4")},l(t){e=E(t,"SPAN",{});var a=N(e);p=k(a,"4"),a.forEach(r)},m(t,a){u(t,e,a),C(e,p)},p:x,d(t){t&&r(e)}}}function B(f){let e,p,t,a,$,l;return e=new S({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),t=new S({props:{$$slots:{default:[V]},$$scope:{ctx:f}}}),$=new S({props:{$$slots:{default:[j]},$$scope:{ctx:f}}}),{c(){m(e.$$.fragment),p=d(),m(t.$$.fragment),a=d(),m($.$$.fragment)},l(n){c(e.$$.fragment,n),p=v(n),c(t.$$.fragment,n),a=v(n),c($.$$.fragment,n)},m(n,s){i(e,n,s),u(n,p,s),i(t,n,s),u(n,a,s),i($,n,s),l=!0},p(n,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o);const h={};s&2&&(h.$$scope={dirty:s,ctx:n}),t.$set(h);const b={};s&2&&(b.$$scope={dirty:s,ctx:n}),$.$set(b)},i(n){l||(_(e.$$.fragment,n),_(t.$$.fragment,n),_($.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),g(t.$$.fragment,n),g($.$$.fragment,n),l=!1},d(n){P(e,n),n&&r(p),P(t,n),n&&r(a),P($,n)}}}function F(f){let e,p;return e=new z({props:{$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){m(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){i(e,t,a),p=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),e.$set($)},i(t){p||(_(e.$$.fragment,t),p=!0)},o(t){g(e.$$.fragment,t),p=!1},d(t){P(e,t)}}}function G(f){let e,p;return{c(){e=w("span"),p=A("5")},l(t){e=E(t,"SPAN",{});var a=N(e);p=k(a,"5"),a.forEach(r)},m(t,a){u(t,e,a),C(e,p)},p:x,d(t){t&&r(e)}}}function I(f){let e,p,t,a,$,l;return e=new S({props:{$$slots:{default:[H]},$$scope:{ctx:f}}}),t=new S({props:{$$slots:{default:[F]},$$scope:{ctx:f}}}),$=new S({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),{c(){m(e.$$.fragment),p=d(),m(t.$$.fragment),a=d(),m($.$$.fragment)},l(n){c(e.$$.fragment,n),p=v(n),c(t.$$.fragment,n),a=v(n),c($.$$.fragment,n)},m(n,s){i(e,n,s),u(n,p,s),i(t,n,s),u(n,a,s),i($,n,s),l=!0},p(n,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o);const h={};s&2&&(h.$$scope={dirty:s,ctx:n}),t.$set(h);const b={};s&2&&(b.$$scope={dirty:s,ctx:n}),$.$set(b)},i(n){l||(_(e.$$.fragment,n),_(t.$$.fragment,n),_($.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),g(t.$$.fragment,n),g($.$$.fragment,n),l=!1},d(n){P(e,n),n&&r(p),P(t,n),n&&r(a),P($,n)}}}function J(f){let e,p,t,a,$,l,n;return a=new z({props:{class:"default-theme",horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[I]},$$scope:{ctx:f}}}),l=new D({props:{id:"lock_layout",code:f[0]}}),{c(){e=w("h2"),p=A("Locking layout by prevent pushing other panes"),t=d(),m(a.$$.fragment),$=d(),m(l.$$.fragment)},l(s){e=E(s,"H2",{});var o=N(e);p=k(o,"Locking layout by prevent pushing other panes"),o.forEach(r),t=v(s),c(a.$$.fragment,s),$=v(s),c(l.$$.fragment,s)},m(s,o){u(s,e,o),C(e,p),u(s,t,o),i(a,s,o),u(s,$,o),i(l,s,o),n=!0},p(s,[o]){const h={};o&2&&(h.$$scope={dirty:o,ctx:s}),a.$set(h)},i(s){n||(_(a.$$.fragment,s),_(l.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),g(l.$$.fragment,s),n=!1},d(s){s&&r(e),s&&r(t),P(a,s),s&&r($),P(l,s)}}}function K(f){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>
<Splitpanes class="default-theme" horizontal style="height: 400px" pushOtherPanes={false}>
    <Pane>
        <span>1</span>
    </Pane>
    <Pane>
        <Splitpanes pushOtherPanes={false}>
            <Pane>
                <span>2</span>
            </Pane>
            <Pane>
                <span>3</span>
            </Pane>
            <Pane>
                <span>4</span>
            </Pane>
        </Splitpanes>
    </Pane>
    <Pane>
        <span>5</span>
    </Pane>
</Splitpanes>`]}class R extends O{constructor(e){super(),q(this,e,K,J,L,{})}}export{R as default};
