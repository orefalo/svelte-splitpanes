import{S as U,i as z,s as B,a as q,D as d,f as W,j as v,o as h,V as P,n as E,g,x as j,v as Q,e as X,b as Y,d as Z,h as O,W as p,X as F,Y as G,Z as H,T as D,A as J,C as T,O as R,P as b,Q as V,R as k,U as L}from"../chunks/external.4622f577.js";const K="modulepreload",M=function(o,e){return new URL(o,e).href},A={},u=function(e,i,n){if(!i||i.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(i.map(m=>{if(m=M(m,n),m in A)return;A[m]=!0;const t=m.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!n)for(let a=r.length-1;a>=0;a--){const c=r[a];if(c.href===m&&(!t||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${s}`))return;const _=document.createElement("link");if(_.rel=t?"stylesheet":K,t||(_.as="script",_.crossOrigin=""),_.href=m,document.head.appendChild(_),t)return new Promise((a,c)=>{_.addEventListener("load",a),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},re={};function x(o){let e,i,n;var r=o[1][0];function m(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,m(o)),o[12](e)),{c(){e&&b(e.$$.fragment),i=d()},l(t){e&&V(e.$$.fragment,t),i=d()},m(t,s){e&&k(e,t,s),v(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=R(r,m(t)),t[12](e),b(e.$$.fragment),E(e.$$.fragment,1),k(e,i.parentNode,i)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&h(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[12](null),e&&L(e,t)}}}function $(o){let e,i,n;var r=o[1][0];function m(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,m(o)),o[11](e)),{c(){e&&b(e.$$.fragment),i=d()},l(t){e&&V(e.$$.fragment,t),i=d()},m(t,s){e&&k(e,t,s),v(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=R(r,m(t)),t[11](e),b(e.$$.fragment),E(e.$$.fragment,1),k(e,i.parentNode,i)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&h(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[11](null),e&&L(e,t)}}}function ee(o){let e,i,n;var r=o[1][1];function m(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,m(o)),o[10](e)),{c(){e&&b(e.$$.fragment),i=d()},l(t){e&&V(e.$$.fragment,t),i=d()},m(t,s){e&&k(e,t,s),v(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=R(r,m(t)),t[10](e),b(e.$$.fragment),E(e.$$.fragment,1),k(e,i.parentNode,i)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&h(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[10](null),e&&L(e,t)}}}function I(o){let e,i=o[6]&&y(o);return{c(){e=X("div"),i&&i.c(),this.h()},l(n){e=Y(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Z(e);i&&i.l(r),r.forEach(g),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(n,r){v(n,e,r),i&&i.m(e,null)},p(n,r){n[6]?i?i.p(n,r):(i=y(n),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(n){n&&g(e),i&&i.d()}}}function y(o){let e;return{c(){e=F(o[7])},l(i){e=G(i,o[7])},m(i,n){v(i,e,n)},p(i,n){n&128&&H(e,i[7])},d(i){i&&g(e)}}}function te(o){let e,i,n,r,m;const t=[$,x],s=[];function l(a,c){return a[1][1]?0:1}e=l(o),i=s[e]=t[e](o);let _=o[5]&&I(o);return{c(){i.c(),n=q(),_&&_.c(),r=d()},l(a){i.l(a),n=W(a),_&&_.l(a),r=d()},m(a,c){s[e].m(a,c),v(a,n,c),_&&_.m(a,c),v(a,r,c),m=!0},p(a,[c]){let w=e;e=l(a),e===w?s[e].p(a,c):(D(),h(s[w],1,1,()=>{s[w]=null}),P(),i=s[e],i?i.p(a,c):(i=s[e]=t[e](a),i.c()),E(i,1),i.m(n.parentNode,n)),a[5]?_?_.p(a,c):(_=I(a),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(a){m||(E(i),m=!0)},o(a){h(i),m=!1},d(a){a&&(g(n),g(r)),s[e].d(a),_&&_.d(a)}}}function ie(o,e,i){let{stores:n}=e,{page:r}=e,{constructors:m}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:_=null}=e;j(n.page.notify);let a=!1,c=!1,w=null;Q(()=>{const f=n.page.subscribe(()=>{a&&(i(6,c=!0),J().then(()=>{i(7,w=document.title||"untitled page")}))});return i(5,a=!0),f});function N(f){T[f?"unshift":"push"](()=>{t[1]=f,i(0,t)})}function S(f){T[f?"unshift":"push"](()=>{t[0]=f,i(0,t)})}function C(f){T[f?"unshift":"push"](()=>{t[0]=f,i(0,t)})}return o.$$set=f=>{"stores"in f&&i(8,n=f.stores),"page"in f&&i(9,r=f.page),"constructors"in f&&i(1,m=f.constructors),"components"in f&&i(0,t=f.components),"form"in f&&i(2,s=f.form),"data_0"in f&&i(3,l=f.data_0),"data_1"in f&&i(4,_=f.data_1)},o.$$.update=()=>{o.$$.dirty&768&&n.page.set(r)},[t,m,s,l,_,a,c,w,n,r,N,S,C]}class se extends U{constructor(e){super(),z(this,e,ie,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>u(()=>import("../nodes/0.5ff6328a.js"),["../nodes/0.5ff6328a.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../assets/0.815942eb.css"],import.meta.url),()=>u(()=>import("../nodes/1.a9f56ae6.js"),["../nodes/1.a9f56ae6.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css"],import.meta.url),()=>u(()=>import("../nodes/2.a8e25b57.js"),["../nodes/2.a8e25b57.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css"],import.meta.url),()=>u(()=>import("../nodes/3.9ef8080c.js"),["../nodes/3.9ef8080c.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../chunks/Button.4b0bb986.js","../assets/Button.190dfb8a.css"],import.meta.url),()=>u(()=>import("../nodes/4.f6cf9b40.js"),["../nodes/4.f6cf9b40.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../chunks/Button.4b0bb986.js","../assets/Button.190dfb8a.css"],import.meta.url),()=>u(()=>import("../nodes/5.df89468a.js"),["../nodes/5.df89468a.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/6.0f210fce.js"),["../nodes/6.0f210fce.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/7.2bc99bc0.js"),["../nodes/7.2bc99bc0.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../assets/7.b54230ae.css"],import.meta.url),()=>u(()=>import("../nodes/8.5eec773e.js"),["../nodes/8.5eec773e.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/9.74fbd0cb.js"),["../nodes/9.74fbd0cb.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/10.9606e166.js"),["../nodes/10.9606e166.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/11.6a22f439.js"),["../nodes/11.6a22f439.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/12.64225c93.js"),["../nodes/12.64225c93.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../chunks/Button.4b0bb986.js","../assets/Button.190dfb8a.css"],import.meta.url),()=>u(()=>import("../nodes/13.5fdec83c.js"),["../nodes/13.5fdec83c.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/14.50b9b7d3.js"),["../nodes/14.50b9b7d3.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/15.b8681caf.js"),["../nodes/15.b8681caf.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url),()=>u(()=>import("../nodes/16.4ae23c45.js"),["../nodes/16.4ae23c45.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../assets/16.9a081897.css"],import.meta.url),()=>u(()=>import("../nodes/17.e3e6d368.js"),["../nodes/17.e3e6d368.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../assets/17.829a7071.css"],import.meta.url),()=>u(()=>import("../nodes/18.1942aeff.js"),["../nodes/18.1942aeff.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/ExampleArea.c8c51a26.js","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css","../chunks/Button.4b0bb986.js","../assets/Button.190dfb8a.css"],import.meta.url),()=>u(()=>import("../nodes/19.1e764a46.js"),["../nodes/19.1e764a46.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css"],import.meta.url),()=>u(()=>import("../nodes/20.37c27890.js"),["../nodes/20.37c27890.js","../chunks/external.4622f577.js","../assets/external.cf437b31.css","../chunks/svelte-splitpanes.f81db3d4.js","../assets/svelte-splitpanes.22acc214.css"],import.meta.url)],ae=[],le={"/":[2],"/examples/add-remove-panes":[3],"/examples/change-orientation":[4],"/examples/default-size":[5],"/examples/disable-dbl-click":[6],"/examples/listen-to-events":[7],"/examples/lock-layout":[8],"/examples/min-max":[9],"/examples/prog-resize":[10],"/examples/push-other-panes":[11],"/examples/reordering-panes":[12],"/examples/snap/middle":[13],"/examples/snap/min-max":[14],"/examples/snap/simple":[15],"/examples/styling/app-layout":[16],"/examples/styling/splitters":[17],"/examples/toggle-panes":[18],"/minified-size":[19],"/test":[20]},_e={handleError:({error:o})=>{console.error(o)}};export{le as dictionary,_e as hooks,re as matchers,oe as nodes,se as root,ae as server_loads};
