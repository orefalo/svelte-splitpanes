import{S as B,i as M,s as Q,z as m,A as c,B as u,t as _,b as i,C as g,f as x,k as C,o as l,l as r,e as h,P as v,h as w,j as A,Q as z,p as E,M as N}from"../../../chunks/external-46145e60.js";import{S as D,P as S}from"../../../chunks/svelte-splitpanes-316a4b8a.js";function F(p){let e,a;return{c(){e=h("span"),a=v("1")},l(t){e=w(t,"SPAN",{});var n=A(e);a=z(n,"1"),n.forEach(r)},m(t,n){l(t,e,n),E(e,a)},p:N,d(t){t&&r(e)}}}function G(p){let e,a;return{c(){e=h("span"),a=v("2")},l(t){e=w(t,"SPAN",{});var n=A(e);a=z(n,"2"),n.forEach(r)},m(t,n){l(t,e,n),E(e,a)},p:N,d(t){t&&r(e)}}}function H(p){let e,a;return{c(){e=h("span"),a=v("3")},l(t){e=w(t,"SPAN",{});var n=A(e);a=z(n,"3"),n.forEach(r)},m(t,n){l(t,e,n),E(e,a)},p:N,d(t){t&&r(e)}}}function I(p){let e,a;return{c(){e=h("span"),a=v("4")},l(t){e=w(t,"SPAN",{});var n=A(e);a=z(n,"4"),n.forEach(r)},m(t,n){l(t,e,n),E(e,a)},p:N,d(t){t&&r(e)}}}function J(p){let e,a,t,n,f,d,o,P;return e=new S({props:{size:"65",$$slots:{default:[F]},$$scope:{ctx:p}}}),t=new S({props:{size:"10",$$slots:{default:[G]},$$scope:{ctx:p}}}),f=new S({props:{$$slots:{default:[H]},$$scope:{ctx:p}}}),o=new S({props:{$$slots:{default:[I]},$$scope:{ctx:p}}}),{c(){m(e.$$.fragment),a=x(),m(t.$$.fragment),n=x(),m(f.$$.fragment),d=x(),m(o.$$.fragment)},l(s){c(e.$$.fragment,s),a=C(s),c(t.$$.fragment,s),n=C(s),c(f.$$.fragment,s),d=C(s),c(o.$$.fragment,s)},m(s,$){u(e,s,$),l(s,a,$),u(t,s,$),l(s,n,$),u(f,s,$),l(s,d,$),u(o,s,$),P=!0},p(s,$){const b={};$&1&&(b.$$scope={dirty:$,ctx:s}),e.$set(b);const j={};$&1&&(j.$$scope={dirty:$,ctx:s}),t.$set(j);const k={};$&1&&(k.$$scope={dirty:$,ctx:s}),f.$set(k);const q={};$&1&&(q.$$scope={dirty:$,ctx:s}),o.$set(q)},i(s){P||(_(e.$$.fragment,s),_(t.$$.fragment,s),_(f.$$.fragment,s),_(o.$$.fragment,s),P=!0)},o(s){i(e.$$.fragment,s),i(t.$$.fragment,s),i(f.$$.fragment,s),i(o.$$.fragment,s),P=!1},d(s){g(e,s),s&&r(a),g(t,s),s&&r(n),g(f,s),s&&r(d),g(o,s)}}}function K(p){let e,a;return e=new D({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[J]},$$scope:{ctx:p}}}),{c(){m(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),a=!0},p(t,[n]){const f={};n&1&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){i(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}class R extends B{constructor(e){super(),M(this,e,null,K,Q,{})}}export{R as default};