import{L as V,S as ae,i as le,s as se,_ as ee,e as v,b,d as S,g as _,h as p,j as M,k as u,K as te,$ as Ie,q as Pe,aa as qe,X as j,a as R,Y as U,f as I,Z as F,W as ye,F as Me,C as Ae,a1 as xe,P as ue,I as B,Q as fe,R as de,a2 as $e,n as Z,o as J,U as he,c as Ne,M as Ve,D as be,ab as we,N as ze,t as H,ac as Oe,u as He,l as je,m as Ue}from"../chunks/external.DYoZMhMv.js";const Be=!0,lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Be},Symbol.toStringTag,{value:"Module"})),ke=s=>s.endsWith("/")?s.slice(0,-1):s,_e=(s,e)=>ke(V+s)===ke(e.url.pathname);function Se(s,e,t){const a=s.slice();return a[2]=e[t],a}function Le(s,e,t){const a=s.slice();return a[5]=e[t].title,a[6]=e[t].path,a}function Te(s){let e,t,a=s[5]+"",n,l,i,r;return{c(){e=v("li"),t=v("a"),n=j(a),r=R(),this.h()},l(c){e=b(c,"LI",{class:!0});var o=S(e);t=b(o,"A",{"data-sveltekit-preload-data":!0,class:!0,"aria-current":!0,href:!0});var h=S(t);n=U(h,a),h.forEach(_),r=I(o),o.forEach(_),this.h()},h(){p(t,"data-sveltekit-preload-data",""),p(t,"class","page svelte-6bn3ki"),p(t,"aria-current",l=_e(s[6],s[1])?"page":void 0),p(t,"href",i=V+s[6]),p(e,"class","svelte-6bn3ki")},m(c,o){M(c,e,o),u(e,t),u(t,n),u(e,r)},p(c,o){o&1&&a!==(a=c[5]+"")&&F(n,a),o&3&&l!==(l=_e(c[6],c[1])?"page":void 0)&&p(t,"aria-current",l),o&1&&i!==(i=V+c[6])&&p(t,"href",i)},d(c){c&&_(e)}}}function Ee(s){let e,t,a=s[2].title+"",n,l,i,r,c=ee(s[2].pages),o=[];for(let h=0;h<c.length;h+=1)o[h]=Te(Le(s,c,h));return{c(){e=v("li"),t=v("span"),n=j(a),l=R(),i=v("ul");for(let h=0;h<o.length;h+=1)o[h].c();r=R(),this.h()},l(h){e=b(h,"LI",{class:!0});var m=S(e);t=b(m,"SPAN",{class:!0});var f=S(t);n=U(f,a),f.forEach(_),l=I(m),i=b(m,"UL",{class:!0});var k=S(i);for(let g=0;g<o.length;g+=1)o[g].l(k);k.forEach(_),r=I(m),m.forEach(_),this.h()},h(){p(t,"class","section svelte-6bn3ki"),p(i,"class","svelte-6bn3ki"),p(e,"class","svelte-6bn3ki")},m(h,m){M(h,e,m),u(e,t),u(t,n),u(e,l),u(e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(i,null);u(e,r)},p(h,m){if(m&1&&a!==(a=h[2].title+"")&&F(n,a),m&3){c=ee(h[2].pages);let f;for(f=0;f<c.length;f+=1){const k=Le(h,c,f);o[f]?o[f].p(k,m):(o[f]=Te(k),o[f].c(),o[f].m(i,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=c.length}},d(h){h&&_(e),Ie(o,h)}}}function Fe(s){let e,t,a=ee(s[0]),n=[];for(let l=0;l<a.length;l+=1)n[l]=Ee(Se(s,a,l));return{c(){e=v("nav"),t=v("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=b(l,"NAV",{"aria-label":!0,class:!0});var i=S(e);t=b(i,"UL",{class:!0});var r=S(t);for(let c=0;c<n.length;c+=1)n[c].l(r);r.forEach(_),i.forEach(_),this.h()},h(){p(t,"class","sidebar svelte-6bn3ki"),p(e,"aria-label","Docs"),p(e,"class","svelte-6bn3ki")},m(l,i){M(l,e,i),u(e,t);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(l,[i]){if(i&3){a=ee(l[0]);let r;for(r=0;r<a.length;r+=1){const c=Se(l,a,r);n[r]?n[r].p(c,i):(n[r]=Ee(c),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},i:te,o:te,d(l){l&&_(e),Ie(n,l)}}}function Ge(s,e,t){let a;Pe(s,qe,l=>t(1,a=l));let{contents:n=[]}=e;return s.$$set=l=>{"contents"in l&&t(0,n=l.contents)},[n,a]}class We extends ae{constructor(e){super(),le(this,e,Ge,Fe,se,{contents:0})}}function Ke(s){let e,t,a,n,l,i;return{c(){e=v("button"),t=v("span"),a=j(s[1]),this.h()},l(r){e=b(r,"BUTTON",{"aria-pressed":!0,class:!0});var c=S(e);t=b(c,"SPAN",{style:!0});var o=S(t);a=U(o,s[1]),o.forEach(_),c.forEach(_),this.h()},h(){ye(t,"display","none"),p(e,"aria-pressed",n=s[0]?"true":"false"),p(e,"class","svelte-cxfede")},m(r,c){M(r,e,c),u(e,t),u(t,a),l||(i=Me(e,"click",s[2]),l=!0)},p(r,[c]){c&2&&F(a,r[1]),c&1&&n!==(n=r[0]?"true":"false")&&p(e,"aria-pressed",n)},i:te,o:te,d(r){r&&_(e),l=!1,i()}}}function Qe(s,e,t){let{pressed:a}=e,{label:n}=e;const l=()=>t(0,a=!a);return s.$$set=i=>{"pressed"in i&&t(0,a=i.pressed),"label"in i&&t(1,n=i.label)},[a,n,l]}class Xe extends ae{constructor(e){super(),le(this,e,Qe,Ke,se,{pressed:0,label:1})}}function Ye(s){let e,t,a,n="LTR",l,i,r,c,o,h="RTL",m;function f(g){s[1](g)}let k={label:"RTL direction"};return s[0]!==void 0&&(k.pressed=s[0]),i=new Xe({props:k}),Ae.push(()=>xe(i,"pressed",f)),{c(){e=v("div"),t=j(`Splitpane direction:
	`),a=v("span"),a.textContent=n,l=R(),ue(i.$$.fragment),c=R(),o=v("span"),o.textContent=h,this.h()},l(g){e=b(g,"DIV",{class:!0});var C=S(e);t=U(C,`Splitpane direction:
	`),a=b(C,"SPAN",{"aria-hidden":!0,"data-svelte-h":!0}),B(a)!=="svelte-l92ekb"&&(a.textContent=n),l=I(C),fe(i.$$.fragment,C),c=I(C),o=b(C,"SPAN",{"aria-hidden":!0,"data-svelte-h":!0}),B(o)!=="svelte-vcr1ub"&&(o.textContent=h),C.forEach(_),this.h()},h(){p(a,"aria-hidden","true"),p(o,"aria-hidden","true"),p(e,"class","input-output-toggle svelte-snxs5h")},m(g,C){M(g,e,C),u(e,t),u(e,a),u(e,l),de(i,e,null),u(e,c),u(e,o),m=!0},p(g,[C]){const O={};!r&&C&1&&(r=!0,O.pressed=g[0],$e(()=>r=!1)),i.$set(O)},i(g){m||(Z(i.$$.fragment,g),m=!0)},o(g){J(i.$$.fragment,g),m=!1},d(g){g&&_(e),he(i)}}}function Ze(s,e,t){let{isRTL:a}=e;function n(l){a=l,t(0,a)}return s.$$set=l=>{"isRTL"in l&&t(0,a=l.isRTL)},[a,n]}class Je extends ae{constructor(e){super(),le(this,e,Ze,Ye,se,{isRTL:0})}}function Ce(s){let e,t=s[2].title+"",a,n;return{c(){e=v("a"),a=j(t),this.h()},l(l){e=b(l,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var i=S(e);a=U(i,t),i.forEach(_),this.h()},h(){p(e,"data-sveltekit-preload-data",""),p(e,"href",n=V+s[2].path),p(e,"class","svelte-1xp6paq")},m(l,i){M(l,e,i),u(e,a)},p(l,i){i&4&&t!==(t=l[2].title+"")&&F(a,t),i&4&&n!==(n=V+l[2].path)&&p(e,"href",n)},d(l){l&&_(e)}}}function Re(s){let e,t=s[1].title+"",a,n;return{c(){e=v("a"),a=j(t),this.h()},l(l){e=b(l,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var i=S(e);a=U(i,t),i.forEach(_),this.h()},h(){p(e,"data-sveltekit-preload-data",""),p(e,"href",n=V+s[1].path),p(e,"class","svelte-1xp6paq")},m(l,i){M(l,e,i),u(e,a)},p(l,i){i&2&&t!==(t=l[1].title+"")&&F(a,t),i&2&&n!==(n=V+l[1].path)&&p(e,"href",n)},d(l){l&&_(e)}}}function et(s){let e,t,a,n,l,i,r,c,o,h,m,f,k,g="previous",C,O,A,x,ge="next",ne,ie,N,$,w,me=`<img src="${V}/favicon.svg" alt="Icon" width="30" height="30"/> Svelte-Splitpane`,re,z,oe,D,ce,q;document.title=e="Svelte-Splitpanes"+(s[3]?` - ${s[3].title}`:"");const pe=s[9].default,P=Ne(pe,s,s[8],null);let L=s[2]&&Ce(s),T=s[1]&&Re(s);z=new We({props:{contents:s[4]}});function De(d){s[10](d)}let ve={};return s[0]!==void 0&&(ve.isRTL=s[0]),D=new Je({props:ve}),Ae.push(()=>xe(D,"isRTL",De)),{c(){t=v("meta"),a=new Ve(!1),n=be(),l=R(),i=v("div"),r=v("div"),c=R(),o=v("main"),P&&P.c(),h=R(),m=v("div"),f=v("div"),k=v("span"),k.textContent=g,C=R(),L&&L.c(),O=R(),A=v("div"),x=v("span"),x.textContent=ge,ne=R(),T&&T.c(),ie=R(),N=v("div"),$=v("div"),w=v("h1"),w.innerHTML=me,re=R(),ue(z.$$.fragment),oe=R(),ue(D.$$.fragment),this.h()},l(d){const E=we("svelte-1cl4sjo",document.head);t=b(E,"META",{name:!0,content:!0}),a=ze(E,!1),n=be(),E.forEach(_),l=I(d),i=b(d,"DIV",{class:!0});var y=S(i);r=b(y,"DIV",{role:!0,class:!0}),S(r).forEach(_),c=I(y),o=b(y,"MAIN",{class:!0});var G=S(o);P&&P.l(G),h=I(G),m=b(G,"DIV",{class:!0});var W=S(m);f=b(W,"DIV",{class:!0});var K=S(f);k=b(K,"SPAN",{class:!0,"data-svelte-h":!0}),B(k)!=="svelte-mb3ar"&&(k.textContent=g),C=I(K),L&&L.l(K),K.forEach(_),O=I(W),A=b(W,"DIV",{class:!0});var Q=S(A);x=b(Q,"SPAN",{class:!0,"data-svelte-h":!0}),B(x)!=="svelte-12eob6n"&&(x.textContent=ge),ne=I(Q),T&&T.l(Q),Q.forEach(_),W.forEach(_),G.forEach(_),ie=I(y),N=b(y,"DIV",{class:!0});var X=S(N);$=b(X,"DIV",{role:!0,class:!0});var Y=S($);w=b(Y,"H1",{class:!0,"data-svelte-h":!0}),B(w)!=="svelte-1dzm4l3"&&(w.innerHTML=me),re=I(Y),fe(z.$$.fragment,Y),Y.forEach(_),oe=I(X),fe(D.$$.fragment,X),X.forEach(_),y.forEach(_),this.h()},h(){p(t,"name","description"),p(t,"content","A Fantastic pane splitter for Svelte"),a.a=n,p(r,"role","presentation"),p(r,"class","toc-container-space svelte-1xp6paq"),p(k,"class","svelte-1xp6paq"),H(k,"faded",!s[2]),p(f,"class","svelte-1xp6paq"),p(x,"class","svelte-1xp6paq"),H(x,"faded",!s[1]),p(A,"class","svelte-1xp6paq"),p(m,"class","controls svelte-1xp6paq"),p(o,"class","svelte-1xp6paq"),H(o,"rtl-containers",s[0]),p(w,"class","toc-head svelte-1xp6paq"),p($,"role","presentation"),p($,"class","toc-contents-wrap svelte-1xp6paq"),p(N,"class","toc-container svelte-1xp6paq"),p(i,"class","page-container svelte-1xp6paq")},m(d,E){u(document.head,t),a.m(Oe,document.head),u(document.head,n),M(d,l,E),M(d,i,E),u(i,r),u(i,c),u(i,o),P&&P.m(o,null),u(o,h),u(o,m),u(m,f),u(f,k),u(f,C),L&&L.m(f,null),u(m,O),u(m,A),u(A,x),u(A,ne),T&&T.m(A,null),u(i,ie),u(i,N),u(N,$),u($,w),u($,re),de(z,$,null),u(N,oe),de(D,N,null),q=!0},p(d,[E]){(!q||E&8)&&e!==(e="Svelte-Splitpanes"+(d[3]?` - ${d[3].title}`:""))&&(document.title=e),P&&P.p&&(!q||E&256)&&He(P,pe,d,d[8],q?Ue(pe,d[8],E,null):je(d[8]),null),(!q||E&4)&&H(k,"faded",!d[2]),d[2]?L?L.p(d,E):(L=Ce(d),L.c(),L.m(f,null)):L&&(L.d(1),L=null),(!q||E&2)&&H(x,"faded",!d[1]),d[1]?T?T.p(d,E):(T=Re(d),T.c(),T.m(A,null)):T&&(T.d(1),T=null),(!q||E&1)&&H(o,"rtl-containers",d[0]);const y={};!ce&&E&1&&(ce=!0,y.isRTL=d[0],$e(()=>ce=!1)),D.$set(y)},i(d){q||(Z(P,d),Z(z.$$.fragment,d),Z(D.$$.fragment,d),q=!0)},o(d){J(P,d),J(z.$$.fragment,d),J(D.$$.fragment,d),q=!1},d(d){d&&(a.d(),_(l),_(i)),_(t),_(n),P&&P.d(d),L&&L.d(),T&&T.d(),he(z),he(D)}}}function tt(s,e,t){let a,n,l,i,r,c;Pe(s,qe,g=>t(7,c=g));let{$$slots:o={},$$scope:h}=e,m=!1;const f=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Min-Max",path:"/examples/min-max"},{title:"Default Size",path:"/examples/default-size"},{title:"Disable Double Click",path:"/examples/disable-dbl-click"},{title:"Lock Layout",path:"/examples/lock-layout"},{title:"Push Other Panes",path:"/examples/push-other-panes"},{title:"Add Remove Panes",path:"/examples/add-remove-panes"},{title:"Reordering Panes",path:"/examples/reordering-panes"},{title:"ChangeOrientation",path:"/examples/change-orientation"},{title:"Prog Resize",path:"/examples/prog-resize"},{title:"Toggle Panes",path:"/examples/toggle-panes"},{title:"Listen To Events",path:"/examples/listen-to-events"}]},{title:"Snap",pages:[{title:"Simple Snap",path:"/examples/snap/simple"},{title:"Middle Snap",path:"/examples/snap/middle"},{title:"Min-Max Snap",path:"/examples/snap/min-max"}]},{title:"Styling",pages:[{title:"Style Splitters",path:"/examples/styling/splitters"},{title:"App Layout",path:"/examples/styling/app-layout"}]}];function k(g){m=g,t(0,m)}return s.$$set=g=>{"$$scope"in g&&t(8,h=g.$$scope)},s.$$.update=()=>{s.$$.dirty&192&&t(5,n=a.findIndex(({path:g})=>_e(g,c))),s.$$.dirty&96&&t(3,l=n>=0?a[n]:void 0),s.$$.dirty&96&&t(2,i=n>=1?a[n-1]:void 0),s.$$.dirty&96&&t(1,r=n>=0&&n<a.length-1?a[n+1]:void 0)},t(6,a=f.map(g=>g.pages).flat()),[m,r,i,l,f,n,a,c,h,o,k]}class st extends ae{constructor(e){super(),le(this,e,tt,et,se,{})}}export{st as component,lt as universal};