import{L as w,S as ae,i as se,s as ne,_ as ee,e as m,b,d as k,g as h,h as c,j as M,k as u,K as te,$ as qe,q as Ae,ac as De,X as j,a as R,Y as U,f as C,Z as H,W as Ve,F as we,C as $e,a1 as xe,P as he,I as le,Q as _e,R as ge,a2 as Me,n as Y,o as Z,U as ve,c as ze,M as Oe,D as Te,ad as je,N as Ue,t as G,J as Be,ae as Ge,u as He,l as Fe,m as We}from"../chunks/external.433b4fbf.js";const Je=!0,rt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Je},Symbol.toStringTag,{value:"Module"})),Le=s=>s.endsWith("/")?s.slice(0,-1):s,me=(s,e)=>Le(w+s)===Le(e.url.pathname);function Ee(s,e,t){const l=s.slice();return l[2]=e[t],l}function ye(s,e,t){const l=s.slice();return l[5]=e[t].title,l[6]=e[t].path,l}function Re(s){let e,t,l=s[5]+"",n,a,i,r;return{c(){e=m("li"),t=m("a"),n=j(l),r=R(),this.h()},l(p){e=b(p,"LI",{class:!0});var o=k(e);t=b(o,"A",{"data-sveltekit-preload-data":!0,class:!0,"aria-current":!0,href:!0});var _=k(t);n=U(_,l),_.forEach(h),r=C(o),o.forEach(h),this.h()},h(){c(t,"data-sveltekit-preload-data",""),c(t,"class","page svelte-6bn3ki"),c(t,"aria-current",a=me(s[6],s[1])?"page":void 0),c(t,"href",i=w+s[6]),c(e,"class","svelte-6bn3ki")},m(p,o){M(p,e,o),u(e,t),u(t,n),u(e,r)},p(p,o){o&1&&l!==(l=p[5]+"")&&H(n,l),o&3&&a!==(a=me(p[6],p[1])?"page":void 0)&&c(t,"aria-current",a),o&1&&i!==(i=w+p[6])&&c(t,"href",i)},d(p){p&&h(e)}}}function Ce(s){let e,t,l=s[2].title+"",n,a,i,r,p=ee(s[2].pages),o=[];for(let _=0;_<p.length;_+=1)o[_]=Re(ye(s,p,_));return{c(){e=m("li"),t=m("span"),n=j(l),a=R(),i=m("ul");for(let _=0;_<o.length;_+=1)o[_].c();r=R(),this.h()},l(_){e=b(_,"LI",{class:!0});var v=k(e);t=b(v,"SPAN",{class:!0});var f=k(t);n=U(f,l),f.forEach(h),a=C(v),i=b(v,"UL",{class:!0});var S=k(i);for(let g=0;g<o.length;g+=1)o[g].l(S);S.forEach(h),r=C(v),v.forEach(h),this.h()},h(){c(t,"class","section svelte-6bn3ki"),c(i,"class","svelte-6bn3ki"),c(e,"class","svelte-6bn3ki")},m(_,v){M(_,e,v),u(e,t),u(t,n),u(e,a),u(e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(i,null);u(e,r)},p(_,v){if(v&1&&l!==(l=_[2].title+"")&&H(n,l),v&3){p=ee(_[2].pages);let f;for(f=0;f<p.length;f+=1){const S=ye(_,p,f);o[f]?o[f].p(S,v):(o[f]=Re(S),o[f].c(),o[f].m(i,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=p.length}},d(_){_&&h(e),qe(o,_)}}}function Ke(s){let e,t,l=ee(s[0]),n=[];for(let a=0;a<l.length;a+=1)n[a]=Ce(Ee(s,l,a));return{c(){e=m("nav"),t=m("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"NAV",{"aria-label":!0,class:!0});var i=k(e);t=b(i,"UL",{class:!0});var r=k(t);for(let p=0;p<n.length;p+=1)n[p].l(r);r.forEach(h),i.forEach(h),this.h()},h(){c(t,"class","sidebar svelte-6bn3ki"),c(e,"aria-label","Docs"),c(e,"class","svelte-6bn3ki")},m(a,i){M(a,e,i),u(e,t);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(a,[i]){if(i&3){l=ee(a[0]);let r;for(r=0;r<l.length;r+=1){const p=Ee(a,l,r);n[r]?n[r].p(p,i):(n[r]=Ce(p),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},i:te,o:te,d(a){a&&h(e),qe(n,a)}}}function Qe(s,e,t){let l;Ae(s,De,a=>t(1,l=a));let{contents:n=[]}=e;return s.$$set=a=>{"contents"in a&&t(0,n=a.contents)},[n,l]}class Xe extends ae{constructor(e){super(),se(this,e,Qe,Ke,ne,{contents:0})}}function Ye(s){let e,t,l,n,a,i;return{c(){e=m("button"),t=m("span"),l=j(s[1]),this.h()},l(r){e=b(r,"BUTTON",{"aria-pressed":!0,class:!0});var p=k(e);t=b(p,"SPAN",{style:!0});var o=k(t);l=U(o,s[1]),o.forEach(h),p.forEach(h),this.h()},h(){Ve(t,"display","none"),c(e,"aria-pressed",n=s[0]?"true":"false"),c(e,"class","svelte-ki38mm")},m(r,p){M(r,e,p),u(e,t),u(t,l),a||(i=we(e,"click",s[2]),a=!0)},p(r,[p]){p&2&&H(l,r[1]),p&1&&n!==(n=r[0]?"true":"false")&&c(e,"aria-pressed",n)},i:te,o:te,d(r){r&&h(e),a=!1,i()}}}function Ze(s,e,t){let{pressed:l}=e,{label:n}=e;const a=()=>t(0,l=!l);return s.$$set=i=>{"pressed"in i&&t(0,l=i.pressed),"label"in i&&t(1,n=i.label)},[l,n,a]}class et extends ae{constructor(e){super(),se(this,e,Ze,Ye,ne,{pressed:0,label:1})}}function tt(s){let e,t,l,n="LTR",a,i,r,p,o,_="RTL",v;function f(g){s[1](g)}let S={label:"RTL direction"};return s[0]!==void 0&&(S.pressed=s[0]),i=new et({props:S}),$e.push(()=>xe(i,"pressed",f)),{c(){e=m("div"),t=j(`Splitpane direction:
	`),l=m("span"),l.textContent=n,a=R(),he(i.$$.fragment),p=R(),o=m("span"),o.textContent=_,this.h()},l(g){e=b(g,"DIV",{class:!0});var y=k(e);t=U(y,`Splitpane direction:
	`),l=b(y,"SPAN",{"aria-hidden":!0,["data-svelte-h"]:!0}),le(l)!=="svelte-l92ekb"&&(l.textContent=n),a=C(y),_e(i.$$.fragment,y),p=C(y),o=b(y,"SPAN",{"aria-hidden":!0,["data-svelte-h"]:!0}),le(o)!=="svelte-vcr1ub"&&(o.textContent=_),y.forEach(h),this.h()},h(){c(l,"aria-hidden","true"),c(o,"aria-hidden","true"),c(e,"class","input-output-toggle svelte-snxs5h")},m(g,y){M(g,e,y),u(e,t),u(e,l),u(e,a),ge(i,e,null),u(e,p),u(e,o),v=!0},p(g,[y]){const B={};!r&&y&1&&(r=!0,B.pressed=g[0],Me(()=>r=!1)),i.$set(B)},i(g){v||(Y(i.$$.fragment,g),v=!0)},o(g){Z(i.$$.fragment,g),v=!1},d(g){g&&h(e),ve(i)}}}function lt(s,e,t){let{isRTL:l}=e;function n(a){l=a,t(0,l)}return s.$$set=a=>{"isRTL"in a&&t(0,l=a.isRTL)},[l,n]}class at extends ae{constructor(e){super(),se(this,e,lt,tt,ne,{isRTL:0})}}function Ie(s){let e,t=s[2].title+"",l,n;return{c(){e=m("a"),l=j(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var i=k(e);l=U(i,t),i.forEach(h),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=w+s[2].path),c(e,"class","svelte-1xp6paq")},m(a,i){M(a,e,i),u(e,l)},p(a,i){i&4&&t!==(t=a[2].title+"")&&H(l,t),i&4&&n!==(n=w+a[2].path)&&c(e,"href",n)},d(a){a&&h(e)}}}function Pe(s){let e,t=s[1].title+"",l,n;return{c(){e=m("a"),l=j(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var i=k(e);l=U(i,t),i.forEach(h),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=w+s[1].path),c(e,"class","svelte-1xp6paq")},m(a,i){M(a,e,i),u(e,l)},p(a,i){i&2&&t!==(t=a[1].title+"")&&H(l,t),i&2&&n!==(n=w+a[1].path)&&c(e,"href",n)},d(a){a&&h(e)}}}function st(s){let e,t,l,n,a,i,r,p,o,_,v,f,S,g="previous",y,B,q,A,be="next",ie,re,N,D,z,V,ke,oe,ce,O,pe,$,ue,P;document.title=e="Svelte-Splitpanes"+(s[3]?` - ${s[3].title}`:"");const fe=s[9].default,I=ze(fe,s,s[8],null);let T=s[2]&&Ie(s),L=s[1]&&Pe(s);O=new Xe({props:{contents:s[4]}});function Ne(d){s[10](d)}let Se={};return s[0]!==void 0&&(Se.isRTL=s[0]),$=new at({props:Se}),$e.push(()=>xe($,"isRTL",Ne)),{c(){t=m("meta"),l=new Oe(!1),n=Te(),a=R(),i=m("div"),r=m("div"),p=R(),o=m("main"),I&&I.c(),_=R(),v=m("div"),f=m("div"),S=m("span"),S.textContent=g,y=R(),T&&T.c(),B=R(),q=m("div"),A=m("span"),A.textContent=be,ie=R(),L&&L.c(),re=R(),N=m("div"),D=m("div"),z=m("h1"),V=m("img"),oe=j(" Svelte-Splitpane"),ce=R(),he(O.$$.fragment),pe=R(),he($.$$.fragment),this.h()},l(d){const E=je("svelte-1cl4sjo",document.head);t=b(E,"META",{name:!0,content:!0}),l=Ue(E,!1),n=Te(),E.forEach(h),a=C(d),i=b(d,"DIV",{class:!0});var x=k(i);r=b(x,"DIV",{role:!0,class:!0}),k(r).forEach(h),p=C(x),o=b(x,"MAIN",{class:!0});var F=k(o);I&&I.l(F),_=C(F),v=b(F,"DIV",{class:!0});var W=k(v);f=b(W,"DIV",{class:!0});var J=k(f);S=b(J,"SPAN",{class:!0,["data-svelte-h"]:!0}),le(S)!=="svelte-mb3ar"&&(S.textContent=g),y=C(J),T&&T.l(J),J.forEach(h),B=C(W),q=b(W,"DIV",{class:!0});var K=k(q);A=b(K,"SPAN",{class:!0,["data-svelte-h"]:!0}),le(A)!=="svelte-12eob6n"&&(A.textContent=be),ie=C(K),L&&L.l(K),K.forEach(h),W.forEach(h),F.forEach(h),re=C(x),N=b(x,"DIV",{class:!0});var Q=k(N);D=b(Q,"DIV",{role:!0,class:!0});var X=k(D);z=b(X,"H1",{class:!0});var de=k(z);V=b(de,"IMG",{src:!0,alt:!0,width:!0,height:!0}),oe=U(de," Svelte-Splitpane"),de.forEach(h),ce=C(X),_e(O.$$.fragment,X),X.forEach(h),pe=C(Q),_e($.$$.fragment,Q),Q.forEach(h),x.forEach(h),this.h()},h(){c(t,"name","description"),c(t,"content","A Fantastic pane splitter for Svelte"),l.a=n,c(r,"role","presentation"),c(r,"class","toc-container-space svelte-1xp6paq"),c(S,"class","svelte-1xp6paq"),G(S,"faded",!s[2]),c(f,"class","svelte-1xp6paq"),c(A,"class","svelte-1xp6paq"),G(A,"faded",!s[1]),c(q,"class","svelte-1xp6paq"),c(v,"class","controls svelte-1xp6paq"),c(o,"class","svelte-1xp6paq"),G(o,"rtl-containers",s[0]),Be(V.src,ke=w+"/favicon.svg")||c(V,"src",ke),c(V,"alt","Icon"),c(V,"width","30"),c(V,"height","30"),c(z,"class","toc-head svelte-1xp6paq"),c(D,"role","presentation"),c(D,"class","toc-contents-wrap svelte-1xp6paq"),c(N,"class","toc-container svelte-1xp6paq"),c(i,"class","page-container svelte-1xp6paq")},m(d,E){u(document.head,t),l.m(Ge,document.head),u(document.head,n),M(d,a,E),M(d,i,E),u(i,r),u(i,p),u(i,o),I&&I.m(o,null),u(o,_),u(o,v),u(v,f),u(f,S),u(f,y),T&&T.m(f,null),u(v,B),u(v,q),u(q,A),u(q,ie),L&&L.m(q,null),u(i,re),u(i,N),u(N,D),u(D,z),u(z,V),u(z,oe),u(D,ce),ge(O,D,null),u(N,pe),ge($,N,null),P=!0},p(d,[E]){(!P||E&8)&&e!==(e="Svelte-Splitpanes"+(d[3]?` - ${d[3].title}`:""))&&(document.title=e),I&&I.p&&(!P||E&256)&&He(I,fe,d,d[8],P?We(fe,d[8],E,null):Fe(d[8]),null),(!P||E&4)&&G(S,"faded",!d[2]),d[2]?T?T.p(d,E):(T=Ie(d),T.c(),T.m(f,null)):T&&(T.d(1),T=null),(!P||E&2)&&G(A,"faded",!d[1]),d[1]?L?L.p(d,E):(L=Pe(d),L.c(),L.m(q,null)):L&&(L.d(1),L=null),(!P||E&1)&&G(o,"rtl-containers",d[0]);const x={};!ue&&E&1&&(ue=!0,x.isRTL=d[0],Me(()=>ue=!1)),$.$set(x)},i(d){P||(Y(I,d),Y(O.$$.fragment,d),Y($.$$.fragment,d),P=!0)},o(d){Z(I,d),Z(O.$$.fragment,d),Z($.$$.fragment,d),P=!1},d(d){d&&(l.d(),h(a),h(i)),h(t),h(n),I&&I.d(d),T&&T.d(),L&&L.d(),ve(O),ve($)}}}function nt(s,e,t){let l,n,a,i,r,p;Ae(s,De,g=>t(7,p=g));let{$$slots:o={},$$scope:_}=e,v=!1;const f=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Min-Max",path:"/examples/min-max"},{title:"Default Size",path:"/examples/default-size"},{title:"Disable Double Click",path:"/examples/disable-dbl-click"},{title:"Lock Layout",path:"/examples/lock-layout"},{title:"Push Other Panes",path:"/examples/push-other-panes"},{title:"Add Remove Panes",path:"/examples/add-remove-panes"},{title:"Reordering Panes",path:"/examples/reordering-panes"},{title:"ChangeOrientation",path:"/examples/change-orientation"},{title:"Prog Resize",path:"/examples/prog-resize"},{title:"Toggle Panes",path:"/examples/toggle-panes"},{title:"Listen To Events",path:"/examples/listen-to-events"}]},{title:"Snap",pages:[{title:"Simple Snap",path:"/examples/snap/simple"},{title:"Middle Snap",path:"/examples/snap/middle"},{title:"Min-Max Snap",path:"/examples/snap/min-max"}]},{title:"Styling",pages:[{title:"Style Splitters",path:"/examples/styling/splitters"},{title:"App Layout",path:"/examples/styling/app-layout"}]}];function S(g){v=g,t(0,v)}return s.$$set=g=>{"$$scope"in g&&t(8,_=g.$$scope)},s.$$.update=()=>{s.$$.dirty&192&&t(5,n=l.findIndex(({path:g})=>me(g,p))),s.$$.dirty&96&&t(3,a=n>=0?l[n]:void 0),s.$$.dirty&96&&t(2,i=n>=1?l[n-1]:void 0),s.$$.dirty&96&&t(1,r=n>=0&&n<l.length-1?l[n+1]:void 0)},t(6,l=f.map(g=>g.pages).flat()),[v,r,i,a,f,n,l,p,_,o,S]}class ot extends ae{constructor(e){super(),se(this,e,nt,st,ne,{})}}export{ot as component,rt as universal};