import{S as te,i as le,s as se,k as v,l as b,m as j,h as d,n as c,b as V,C as h,B as ee,D as Ae,E as Pe,q as A,a as L,r as P,c as R,u as x,p as Ve,F as Ce,G as we,H as $e,w as de,x as ue,y as _e,I as De,f as Y,t as Z,z as ge,J as ze,K as Oe,e as ye,L as Be,M as Ge,N as U,O as He,P as Ue,Q as xe,R as Fe}from"../../chunks/index-15259a8c.js";import{j as B}from"../../chunks/singletons-5b10adf0.js";import{p as Me}from"../../chunks/stores-a1f3eb77.js";const Je="<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#011627;color:#d6deeb}.hljs-keyword{color:#c792ea;font-style:italic}.hljs-built_in{color:#addb67;font-style:italic}.hljs-type{color:#82aaff}.hljs-literal{color:#ff5874}.hljs-number{color:#f78c6c}.hljs-regexp{color:#5ca7e4}.hljs-string{color:#ecc48d}.hljs-subst{color:#d3423e}.hljs-symbol{color:#82aaff}.hljs-class{color:#ffcb8b}.hljs-function{color:#82aaff}.hljs-title{color:#dcdcaa;font-style:italic}.hljs-params{color:#7fdbca}.hljs-comment{color:#637777;font-style:italic}.hljs-doctag{color:#7fdbca}.hljs-meta,.hljs-meta .hljs-keyword{color:#82aaff}.hljs-meta .hljs-string{color:#ecc48d}.hljs-section{color:#82b1ff}.hljs-attr,.hljs-name,.hljs-tag{color:#7fdbca}.hljs-attribute{color:#80cbc4}.hljs-variable{color:#addb67}.hljs-bullet{color:#d9f5dd}.hljs-code{color:#80cbc4}.hljs-emphasis{color:#c792ea;font-style:italic}.hljs-strong{color:#addb67;font-weight:700}.hljs-formula{color:#c792ea}.hljs-link{color:#ff869a}.hljs-quote{color:#697098;font-style:italic}.hljs-selector-tag{color:#ff6363}.hljs-selector-id{color:#fad430}.hljs-selector-class{color:#addb67;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#c792ea;font-style:italic}.hljs-template-tag{color:#c792ea}.hljs-template-variable{color:#addb67}.hljs-addition{color:#addb67ff;font-style:italic}.hljs-deletion{color:#ef535090;font-style:italic}</style>",Ke=Je,Se=l=>l.endsWith("/")?l.slice(0,-1):l,me=(l,e)=>Se(B+l)===Se(e.url.pathname);function Ee(l,e,t){const s=l.slice();return s[2]=e[t],s}function Te(l,e,t){const s=l.slice();return s[5]=e[t].title,s[6]=e[t].path,s}function Le(l){let e,t,s=l[5]+"",n,a,o,r;return{c(){e=v("li"),t=v("a"),n=A(s),r=L(),this.h()},l(f){e=b(f,"LI",{class:!0});var i=j(e);t=b(i,"A",{"data-sveltekit-preload-data":!0,class:!0,"aria-current":!0,href:!0});var _=j(t);n=P(_,s),_.forEach(d),r=R(i),i.forEach(d),this.h()},h(){c(t,"data-sveltekit-preload-data",""),c(t,"class","page svelte-6bn3ki"),c(t,"aria-current",a=me(l[6],l[1])?"page":void 0),c(t,"href",o=B+l[6]),c(e,"class","svelte-6bn3ki")},m(f,i){V(f,e,i),h(e,t),h(t,n),h(e,r)},p(f,i){i&1&&s!==(s=f[5]+"")&&x(n,s),i&3&&a!==(a=me(f[6],f[1])?"page":void 0)&&c(t,"aria-current",a),i&1&&o!==(o=B+f[6])&&c(t,"href",o)},d(f){f&&d(e)}}}function Re(l){let e,t,s=l[2].title+"",n,a,o,r,f=l[2].pages,i=[];for(let _=0;_<f.length;_+=1)i[_]=Le(Te(l,f,_));return{c(){e=v("li"),t=v("span"),n=A(s),a=L(),o=v("ul");for(let _=0;_<i.length;_+=1)i[_].c();r=L(),this.h()},l(_){e=b(_,"LI",{class:!0});var m=j(e);t=b(m,"SPAN",{class:!0});var u=j(t);n=P(u,s),u.forEach(d),a=R(m),o=b(m,"UL",{class:!0});var k=j(o);for(let g=0;g<i.length;g+=1)i[g].l(k);k.forEach(d),r=R(m),m.forEach(d),this.h()},h(){c(t,"class","section svelte-6bn3ki"),c(o,"class","svelte-6bn3ki"),c(e,"class","svelte-6bn3ki")},m(_,m){V(_,e,m),h(e,t),h(t,n),h(e,a),h(e,o);for(let u=0;u<i.length;u+=1)i[u].m(o,null);h(e,r)},p(_,m){if(m&1&&s!==(s=_[2].title+"")&&x(n,s),m&3){f=_[2].pages;let u;for(u=0;u<f.length;u+=1){const k=Te(_,f,u);i[u]?i[u].p(k,m):(i[u]=Le(k),i[u].c(),i[u].m(o,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=f.length}},d(_){_&&d(e),Ae(i,_)}}}function Qe(l){let e,t,s=l[0],n=[];for(let a=0;a<s.length;a+=1)n[a]=Re(Ee(l,s,a));return{c(){e=v("nav"),t=v("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"NAV",{"aria-label":!0,class:!0});var o=j(e);t=b(o,"UL",{class:!0});var r=j(t);for(let f=0;f<n.length;f+=1)n[f].l(r);r.forEach(d),o.forEach(d),this.h()},h(){c(t,"class","sidebar svelte-6bn3ki"),c(e,"aria-label","Docs"),c(e,"class","svelte-6bn3ki")},m(a,o){V(a,e,o),h(e,t);for(let r=0;r<n.length;r+=1)n[r].m(t,null)},p(a,[o]){if(o&3){s=a[0];let r;for(r=0;r<s.length;r+=1){const f=Ee(a,s,r);n[r]?n[r].p(f,o):(n[r]=Re(f),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},i:ee,o:ee,d(a){a&&d(e),Ae(n,a)}}}function We(l,e,t){let s;Pe(l,Me,a=>t(1,s=a));let{contents:n=[]}=e;return l.$$set=a=>{"contents"in a&&t(0,n=a.contents)},[n,s]}class Xe extends te{constructor(e){super(),le(this,e,We,Qe,se,{contents:0})}}function Ye(l){let e,t,s,n,a,o;return{c(){e=v("button"),t=v("span"),s=A(l[1]),this.h()},l(r){e=b(r,"BUTTON",{"aria-pressed":!0,class:!0});var f=j(e);t=b(f,"SPAN",{style:!0});var i=j(t);s=P(i,l[1]),i.forEach(d),f.forEach(d),this.h()},h(){Ve(t,"display","none"),c(e,"aria-pressed",n=l[0]?"true":"false"),c(e,"class","svelte-ki38mm")},m(r,f){V(r,e,f),h(e,t),h(t,s),a||(o=Ce(e,"click",l[2]),a=!0)},p(r,[f]){f&2&&x(s,r[1]),f&1&&n!==(n=r[0]?"true":"false")&&c(e,"aria-pressed",n)},i:ee,o:ee,d(r){r&&d(e),a=!1,o()}}}function Ze(l,e,t){let{pressed:s}=e,{label:n}=e;const a=()=>t(0,s=!s);return l.$$set=o=>{"pressed"in o&&t(0,s=o.pressed),"label"in o&&t(1,n=o.label)},[s,n,a]}class et extends te{constructor(e){super(),le(this,e,Ze,Ye,se,{pressed:0,label:1})}}function tt(l){let e,t,s,n,a,o,r,f,i,_,m;function u(g){l[1](g)}let k={label:"RTL direction"};return l[0]!==void 0&&(k.pressed=l[0]),o=new et({props:k}),we.push(()=>$e(o,"pressed",u,l[0])),{c(){e=v("div"),t=A(`Splitpane direction:
	`),s=v("span"),n=A("LTR"),a=L(),de(o.$$.fragment),f=L(),i=v("span"),_=A("RTL"),this.h()},l(g){e=b(g,"DIV",{class:!0});var T=j(e);t=P(T,`Splitpane direction:
	`),s=b(T,"SPAN",{"aria-hidden":!0});var $=j(s);n=P($,"LTR"),$.forEach(d),a=R(T),ue(o.$$.fragment,T),f=R(T),i=b(T,"SPAN",{"aria-hidden":!0});var q=j(i);_=P(q,"RTL"),q.forEach(d),T.forEach(d),this.h()},h(){c(s,"aria-hidden","true"),c(i,"aria-hidden","true"),c(e,"class","input-output-toggle svelte-snxs5h")},m(g,T){V(g,e,T),h(e,t),h(e,s),h(s,n),h(e,a),_e(o,e,null),h(e,f),h(e,i),h(i,_),m=!0},p(g,[T]){const $={};!r&&T&1&&(r=!0,$.pressed=g[0],De(()=>r=!1)),o.$set($)},i(g){m||(Y(o.$$.fragment,g),m=!0)},o(g){Z(o.$$.fragment,g),m=!1},d(g){g&&d(e),ge(o)}}}function lt(l,e,t){let{isRTL:s}=e;function n(a){s=a,t(0,s)}return l.$$set=a=>{"isRTL"in a&&t(0,s=a.isRTL)},[s,n]}class st extends te{constructor(e){super(),le(this,e,lt,tt,se,{isRTL:0})}}function Ie(l){let e,t=l[2].title+"",s,n;return{c(){e=v("a"),s=A(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var o=j(e);s=P(o,t),o.forEach(d),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=B+l[2].path),c(e,"class","svelte-1xp6paq")},m(a,o){V(a,e,o),h(e,s)},p(a,o){o&4&&t!==(t=a[2].title+"")&&x(s,t),o&4&&n!==(n=B+a[2].path)&&c(e,"href",n)},d(a){a&&d(e)}}}function qe(l){let e,t=l[1].title+"",s,n;return{c(){e=v("a"),s=A(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var o=j(e);s=P(o,t),o.forEach(d),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=B+l[1].path),c(e,"class","svelte-1xp6paq")},m(a,o){V(a,e,o),h(e,s)},p(a,o){o&2&&t!==(t=a[1].title+"")&&x(s,t),o&2&&n!==(n=B+a[1].path)&&c(e,"href",n)},d(a){a&&d(e)}}}function at(l){let e,t,s,n,a,o,r,f,i,_,m,u,k,g,T,$,q,C,ae,ne,oe,z,D,G,O,ve,re,ie,H,ce,M,fe,w;document.title=e="Svelte-Splitpanes"+(l[3]?` - ${l[3].title}`:"");const he=l[9].default,I=ze(he,l,l[8],null);let y=l[2]&&Ie(l),S=l[1]&&qe(l);H=new Xe({props:{contents:l[4]}});function Ne(p){l[10](p)}let be={};return l[0]!==void 0&&(be.isRTL=l[0]),M=new st({props:be}),we.push(()=>$e(M,"isRTL",Ne,l[0])),{c(){t=v("meta"),s=new Oe(!1),n=ye(),a=L(),o=v("div"),r=v("div"),f=L(),i=v("main"),I&&I.c(),_=L(),m=v("div"),u=v("div"),k=v("span"),g=A("previous"),T=L(),y&&y.c(),$=L(),q=v("div"),C=v("span"),ae=A("next"),ne=L(),S&&S.c(),oe=L(),z=v("div"),D=v("div"),G=v("h1"),O=v("img"),re=A(" Svelte-Splitpane"),ie=L(),de(H.$$.fragment),ce=L(),de(M.$$.fragment),this.h()},l(p){const E=Be("svelte-1cl4sjo",document.head);t=b(E,"META",{name:!0,content:!0}),s=Ge(E,!1),n=ye(),E.forEach(d),a=R(p),o=b(p,"DIV",{class:!0});var N=j(o);r=b(N,"DIV",{role:!0,class:!0}),j(r).forEach(d),f=R(N),i=b(N,"MAIN",{class:!0});var F=j(i);I&&I.l(F),_=R(F),m=b(F,"DIV",{class:!0});var J=j(m);u=b(J,"DIV",{class:!0});var K=j(u);k=b(K,"SPAN",{class:!0});var je=j(k);g=P(je,"previous"),je.forEach(d),T=R(K),y&&y.l(K),K.forEach(d),$=R(J),q=b(J,"DIV",{class:!0});var Q=j(q);C=b(Q,"SPAN",{class:!0});var ke=j(C);ae=P(ke,"next"),ke.forEach(d),ne=R(Q),S&&S.l(Q),Q.forEach(d),J.forEach(d),F.forEach(d),oe=R(N),z=b(N,"DIV",{class:!0});var W=j(z);D=b(W,"DIV",{role:!0,class:!0});var X=j(D);G=b(X,"H1",{class:!0});var pe=j(G);O=b(pe,"IMG",{src:!0,alt:!0,width:!0,height:!0}),re=P(pe," Svelte-Splitpane"),pe.forEach(d),ie=R(X),ue(H.$$.fragment,X),X.forEach(d),ce=R(W),ue(M.$$.fragment,W),W.forEach(d),N.forEach(d),this.h()},h(){c(t,"name","description"),c(t,"content","A Fantastic pane splitter for Svelte"),s.a=n,c(r,"role","presentation"),c(r,"class","toc-container-space svelte-1xp6paq"),c(k,"class","svelte-1xp6paq"),U(k,"faded",!l[2]),c(u,"class","svelte-1xp6paq"),c(C,"class","svelte-1xp6paq"),U(C,"faded",!l[1]),c(q,"class","svelte-1xp6paq"),c(m,"class","controls svelte-1xp6paq"),c(i,"class","svelte-1xp6paq"),U(i,"rtl-containers",l[0]),He(O.src,ve=B+"/favicon.svg")||c(O,"src",ve),c(O,"alt","Icon"),c(O,"width","30"),c(O,"height","30"),c(G,"class","toc-head svelte-1xp6paq"),c(D,"role","presentation"),c(D,"class","toc-contents-wrap svelte-1xp6paq"),c(z,"class","toc-container svelte-1xp6paq"),c(o,"class","page-container svelte-1xp6paq")},m(p,E){h(document.head,t),s.m(Ke,document.head),h(document.head,n),V(p,a,E),V(p,o,E),h(o,r),h(o,f),h(o,i),I&&I.m(i,null),h(i,_),h(i,m),h(m,u),h(u,k),h(k,g),h(u,T),y&&y.m(u,null),h(m,$),h(m,q),h(q,C),h(C,ae),h(q,ne),S&&S.m(q,null),h(o,oe),h(o,z),h(z,D),h(D,G),h(G,O),h(G,re),h(D,ie),_e(H,D,null),h(z,ce),_e(M,z,null),w=!0},p(p,[E]){(!w||E&8)&&e!==(e="Svelte-Splitpanes"+(p[3]?` - ${p[3].title}`:""))&&(document.title=e),I&&I.p&&(!w||E&256)&&Ue(I,he,p,p[8],w?Fe(he,p[8],E,null):xe(p[8]),null),(!w||E&4)&&U(k,"faded",!p[2]),p[2]?y?y.p(p,E):(y=Ie(p),y.c(),y.m(u,null)):y&&(y.d(1),y=null),(!w||E&2)&&U(C,"faded",!p[1]),p[1]?S?S.p(p,E):(S=qe(p),S.c(),S.m(q,null)):S&&(S.d(1),S=null),(!w||E&1)&&U(i,"rtl-containers",p[0]);const N={};!fe&&E&1&&(fe=!0,N.isRTL=p[0],De(()=>fe=!1)),M.$set(N)},i(p){w||(Y(I,p),Y(H.$$.fragment,p),Y(M.$$.fragment,p),w=!0)},o(p){Z(I,p),Z(H.$$.fragment,p),Z(M.$$.fragment,p),w=!1},d(p){d(t),d(n),p&&s.d(),p&&d(a),p&&d(o),I&&I.d(p),y&&y.d(),S&&S.d(),ge(H),ge(M)}}}function nt(l,e,t){let s,n,a,o,r,f;Pe(l,Me,g=>t(7,f=g));let{$$slots:i={},$$scope:_}=e,m=!1;const u=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Min-Max",path:"/examples/min-max"},{title:"Default Size",path:"/examples/default-size"},{title:"Lock Layout",path:"/examples/lock-layout"},{title:"Push Other Panes",path:"/examples/push-other-panes"},{title:"Add Remove Splitter",path:"/examples/add-remove-splitter"},{title:"ChangeOrientation",path:"/examples/change-orientation"},{title:"Prog Resize",path:"/examples/prog-resize"},{title:"Toggle Panes",path:"/examples/toggle-panes"},{title:"Listen To Events",path:"/examples/listen-to-events"}]},{title:"Snap",pages:[{title:"Simple Snap",path:"/examples/snap/simple"},{title:"Middle Snap",path:"/examples/snap/middle"},{title:"Min-Max Snap",path:"/examples/snap/min-max"}]},{title:"Styling",pages:[{title:"Style Splitters",path:"/examples/styling/splitters"},{title:"Style Splitters Modern",path:"/examples/styling/splitters-modern"}]}];function k(g){m=g,t(0,m)}return l.$$set=g=>{"$$scope"in g&&t(8,_=g.$$scope)},l.$$.update=()=>{l.$$.dirty&192&&t(5,n=s.findIndex(({path:g})=>me(g,f))),l.$$.dirty&96&&t(3,a=n>=0?s[n]:void 0),l.$$.dirty&96&&t(2,o=n>=1?s[n-1]:void 0),l.$$.dirty&96&&t(1,r=n>=0&&n<s.length-1?s[n+1]:void 0)},t(6,s=u.map(g=>g.pages).flat()),[m,r,o,a,u,n,s,f,_,i,k]}class ct extends te{constructor(e){super(),le(this,e,nt,at,se,{})}}export{ct as default};
