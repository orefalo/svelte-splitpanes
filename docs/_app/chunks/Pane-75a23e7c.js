var qe=Object.defineProperty,Fe=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var Z=(r,i,c)=>i in r?qe(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,$=(r,i)=>{for(var c in i||(i={}))Be.call(i,c)&&Z(r,c,i[c]);if(Q)for(var c of Q(i))Te.call(i,c)&&Z(r,c,i[c]);return r},ee=(r,i)=>Fe(r,He(i));import{S as ne,i as te,s as ie,F as se,e as ae,c as le,a as oe,d as V,b,a4 as N,g as re,L as ce,M as ue,N as fe,q as me,o as de,a5 as Ve,V as he,r as Ie,E as X,v as ze,a6 as pe,a7 as Ue,D as Xe,$ as Se,X as Ye,a8 as je}from"./vendor-e09f8588.js";function Ke(r){let i,c,h;const M=r[12].default,S=se(M,r,r[11],null);return{c(){i=ae("div"),S&&S.c(),this.h()},l(z){i=le(z,"DIV",{id:!0,class:!0,style:!0});var f=oe(i);S&&S.l(f),f.forEach(V),this.h()},h(){b(i,"id",r[0]),b(i,"class",c=`splitpanes ${r[3]||""}`),b(i,"style",r[2]),N(i,"splitpanes--horizontal",r[1]),N(i,"splitpanes--vertical",!r[1]),N(i,"splitpanes--dragging",r[5])},m(z,f){re(z,i,f),S&&S.m(i,null),r[13](i),h=!0},p(z,f){S&&S.p&&(!h||f[0]&2048)&&ce(S,M,z,z[11],h?fe(M,z[11],f,null):ue(z[11]),null),(!h||f[0]&1)&&b(i,"id",z[0]),(!h||f[0]&8&&c!==(c=`splitpanes ${z[3]||""}`))&&b(i,"class",c),(!h||f[0]&4)&&b(i,"style",z[2]),f[0]&10&&N(i,"splitpanes--horizontal",z[1]),f[0]&10&&N(i,"splitpanes--vertical",!z[1]),f[0]&40&&N(i,"splitpanes--dragging",z[5])},i(z){h||(me(S,z),h=!0)},o(z){de(S,z),h=!1},d(z){z&&V(i),S&&S.d(z),r[13](null)}}}const ge={};function We(r){var i;r.onmousedown=null,r.onclick=null,r.ondblclick=null,(i=r.parentNode)==null||i.removeChild(r)}function Ge(r,i,c){let h,{$$slots:M={},$$scope:S}=i,{id:z=void 0}=i,{horizontal:f=!1}=i,{pushOtherPanes:p=!0}=i,{dblClickSplitter:v=!0}=i,{rtl:y=!1}=i,{firstSplitter:C=!1}=i,{style:k=null}=i,{class:D=""}=i;const _=Ve();let x,w=!1,R=!1,E=!1,L=-1,g=-1,A,l=new Array,q=Xe(f);he(r,q,e=>c(20,h=e)),Ie(ge,{isHorizontal:q,onPaneClick:xe,onPaneAdd:ve,onPaneRemove:_e});async function ve(e){let t=-1;Array.from(e.element.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&t++,n===e.element)),l.splice(t,0,e);for(let n=0;n<l.length;n++){const a=l[n];a.index=n}w&&(await X(),T(),I(l[t],void 0),_("pane-add",{index:t,panes:l.map(n=>({min:n.min,max:n.max,size:n.sz()}))}))}async function _e(e){const t=l.findIndex(a=>a.uid===e),n=l.splice(t,1)[0];for(let a=0;a<l.length;a++){const d=l[a];d.index=a}await X(),T(),I(void 0,ee($({},n),{index:t})),_("pane-remove",{removed:n,panes:l.map(a=>({min:a.min(),max:a.max(),size:a.sz()}))})}function xe(e,t){_("pane-click",l.find(n=>{n.uid==t}))}ze(()=>{Le(),T(),I(),_("ready"),w=!0}),pe(()=>{w=!1});function Pe(){document.addEventListener("mousemove",F,{passive:!1}),document.addEventListener("mouseup",H),"ontouchstart"in window&&(document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",H))}function Me(){document.removeEventListener("mousemove",F,{passive:!1}),document.removeEventListener("mouseup",H),"ontouchstart"in window&&(document.removeEventListener("touchmove",F,{passive:!1}),document.removeEventListener("touchend",H))}function Y(e,t){Pe(),R=!0,L=t}function F(e){R&&(e.preventDefault(),c(5,E=!0),Ce(ye(e)),_("resize",l.map(t=>({min:t.min(),max:t.max(),size:t.sz()}))))}function H(){E&&_("resized",l.map(e=>({min:e.min(),max:e.max(),size:e.sz()}))),R=!1,setTimeout(()=>{c(5,E=!1),Me()},100)}function we(e,t){"ontouchstart"in window&&(e.preventDefault(),v&&(g===t?(A&&clearTimeout(A),A=null,j(e,t),g=-1):(g=t,A=setTimeout(()=>{g=-1},500)))),E||_("splitter-click",l[t])}function j(e,t){let n=0;for(let u=0;u<l.length;u++){const s=l[u],o=u===t?s.max():s.min();s.setSz(o),u!==t&&(n+=s.min())}const a=l[t],d=a.sz()-n;a.setSz(d),_("pane-maximize",a),K("resized",l.map(u=>({min:u.min(),max:u.max(),size:u.sz()})))}function K(e,t){_(e,t)}function ye(e){const t=x.getBoundingClientRect(),{clientX:n,clientY:a}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:n-t.left,y:a-t.top}}function be(e){let t=e[f?"y":"x"];const n=x[f?"clientHeight":"clientWidth"];return y&&!f&&(t=n-t),t*100/n}function Ce(e){const t=L;let n={prevPanesSize:W(t),nextPanesSize:B(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const a=0+(p?0:n.prevPanesSize),d=100-(p?0:n.nextPanesSize),u=Math.max(Math.min(be(e),d),a);let s=[t,t+1],o=l[s[0]]||null,m=l[s[1]]||null;const P=o.max()<100&&u>=o.max()+n.prevPanesSize,O=m.max()<100&&u<=100-(m.max()+B(t+1));if(P||O)P?(o.setSz(o.max()),m.setSz(Math.max(100-o.max()-n.prevPanesSize-n.nextPanesSize,0))):(o.setSz(Math.max(100-m.max()-n.prevPanesSize-B(t+1),0)),m.setSz(m.max));else{if(p){const J=Re(n,u);if(!J)return;({sums:n,panesToResize:s}=J),o=l[s[0]]||null,m=l[s[1]]||null}o!==null&&o.setSz(Math.min(Math.max(u-n.prevPanesSize-n.prevReachedMinPanes,o.min()),o.max())),m!==null&&m.setSz(Math.min(Math.max(100-u-n.nextPanesSize-n.nextReachedMinPanes,m.min()),m.max()))}}function Re(e,t){var d,u;const n=L,a=[n,n+1];if(t<e.prevPanesSize+l[a[0]].min()){if(a[0]=(d=ke(n))==null?void 0:d.index,e.prevReachedMinPanes=0,a[0]<n)for(let s=0;s<l.length;s++){const o=l[s];s>a[0]&&s<=n&&(o.setSz(o.min()),e.prevReachedMinPanes+=o.min())}if(e.prevPanesSize=W(a[0]),a[0]===void 0){e.prevReachedMinPanes=0,l[0].setSz(l[0].min());for(let s=0;s<l.length;s++){const o=l[s];s>0&&s<=n&&(o.setSz(o.min()),e.prevReachedMinPanes+=o.min())}return l[a[1]].setSz(100-e.prevReachedMinPanes-l[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(t>100-e.nextPanesSize-l[a[1]].min()){if(a[1]=(u=Ee(n))==null?void 0:u.index,e.nextReachedMinPanes=0,a[1]>n+1)for(let o=0;o<l.length;o++){const m=l[o];o>n&&o<a[1]&&(m.sz=m.min,e.nextReachedMinPanes+=m.min())}e.nextPanesSize=B(a[1]-1);const s=l.length;if(a[1]===void 0){e.nextReachedMinPanes=0,l[s-1].sz=l[s-1].min;for(let o=0;o<l.length;o++){const m=l[o];o<s-1&&o>=n+1&&(m.sz=m.min,e.nextReachedMinPanes+=m.min())}return l[a[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-l[s-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:a}}function W(e){return l.reduce((t,n,a)=>t+(a<e?n.sz():0),0)}function B(e){return l.reduce((t,n,a)=>t+(a>e+1?n.sz():0),0)}function ke(e){return[...l].reverse().find(n=>n.index<e&&n.sz()>n.min())||null}function Ee(e){return l.find(n=>n.index>e+1&&n.sz()>n.min())||null}function G(e,t,n=!1){var u;const a=e-1,d=document.createElement("div");d.classList.add("splitpanes__splitter"),n||(d.onmousedown=s=>Y(s,a),typeof window!="undefined"&&"ontouchstart"in window&&(d.ontouchstart=s=>Y(s,a)),d.onclick=s=>we(s,a+1)),v&&(d.ondblclick=s=>j(s,a+1)),(u=t.parentNode)==null||u.insertBefore(d,t)}function T(){if(x){const e=Array.from(x.children);let t=0;for(let n=0;n<e.length;n++){const a=e[n];a.className.includes("splitpanes__splitter")&&We(a),a.className.includes("splitpanes__pane")&&(t>0?G(t,a):C&&G(t,a,!0),t++)}}}function I(e,t){!e&&!t?Ae():l.some(n=>n.givenSize!==null||n.min()||n.max()<100)?Ne(e):De(),w&&K("resized",l.map(n=>({min:n.min(),max:n.max(),size:n.sz()})))}function De(){const e=l.length,t=100/e;let n=0,a=Array(),d=Array();for(let u=0;u<l.length;u++){const s=l[u],o=s.min(),m=s.max(),P=Math.max(Math.min(t,m),o);s.setSz(P),n-=P,P>=m&&a.push(s.uid),P<=o&&d.push(s.uid)}n>.1&&U(n,a,d)}function Ae(){let e=100,t=Array(),n=Array(),a=0;for(let u=0;u<l.length;u++){const s=l[u],o=s.sz();e-=o,s.givenSize!==null&&a++,o>=s.max()&&t.push(s.uid),o<=s.min()&&n.push(s.uid)}let d=100;if(e>.1){for(let u=0;u<l.length;u++){const s=l[u];if(s.givenSize===null){const o=l.length,m=Math.max(Math.min(e/(o-a),s.max()),s.min());s.setSz(m)}d-=s.sz()}d>.1&&U(e,t,n)}}function Ne(e){const t=l.length;let n=100/t,a=0,d=new Array,u=new Array;e&&e.givenSize!==null&&(n=(100-parseFloat(e.givenSize))/(t-1));for(let s=0;s<l.length;s++){const o=l[s],m=o.sz();a-=m,m>=o.max()&&d.push(o.uid),m<=o.min()&&u.push(o.uid)}if(!(Math.abs(a)<.1)){for(let s=0;s<l.length;s++){const o=l[s],m=o.max(),P=o.min();e&&e.givenSize!==null&&e.uid===o.uid||o.setSz(Math.max(Math.min(n,m),P));const O=o.sz();a-=O,O>=m&&d.push(o.uid),O<=P&&u.push(o.uid)}a>.1&&U(a,d,u)}}async function U(e,t,n){const a=l.length;let d;e>0?d=e/(a-t.length):d=e/(a-n.length);for(let u=0;u<l.length;u++){const s=l[u],o=s.sz();if(e>0&&!t.includes(s.uid)){const m=Math.max(Math.min(o+d,s.max()),s.min());e-=m-o,s.setSz(m)}else if(!n.includes(s.uid)){const m=Math.max(Math.min(o+d,s.max()),s.min());e-=m-o,s.setSz(m)}}Math.abs(e)>.1&&(await X(),w&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function Le(){var e;if(x){const t=Array.from(x.children);for(let n=0;n<t.length;n++){const a=t[n],d=a.classList.contains("splitpanes__pane"),u=a.classList.contains("splitpanes__splitter");if(!d&&!u){(e=a.parentNode)==null||e.removeChild(a),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function Oe(e){Se[e?"unshift":"push"](()=>{x=e,c(4,x)})}return r.$$set=e=>{"id"in e&&c(0,z=e.id),"horizontal"in e&&c(1,f=e.horizontal),"pushOtherPanes"in e&&c(7,p=e.pushOtherPanes),"dblClickSplitter"in e&&c(8,v=e.dblClickSplitter),"rtl"in e&&c(9,y=e.rtl),"firstSplitter"in e&&c(10,C=e.firstSplitter),"style"in e&&c(2,k=e.style),"class"in e&&c(3,D=e.class),"$$scope"in e&&c(11,S=e.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1024&&T(),r.$$.dirty[0]&2&&Ue(q,h=f,h)},[z,f,k,D,x,E,q,p,v,y,C,S,M,Oe]}class tn extends ne{constructor(i){super();te(this,i,Ge,Ke,ie,{id:0,horizontal:1,pushOtherPanes:7,dblClickSplitter:8,rtl:9,firstSplitter:10,style:2,class:3},null,[-1,-1])}}function Je(r){let i=r.length;for(;i--;)r[i]=Math.floor(Math.random()*256);return r}const Qe=(r=21)=>{let i="";const c=Je(new Uint8Array(r));for(;r--;){const h=63&c[r];i+=h<36?h.toString(36):h<62?(h-26).toString(36).toUpperCase():h<63?"_":"-"}return i};function Ze(r){let i,c,h,M,S;const z=r[9].default,f=se(z,r,r[8],null);return{c(){i=ae("div"),f&&f.c(),this.h()},l(p){i=le(p,"DIV",{class:!0,style:!0});var v=oe(i);f&&f.l(v),v.forEach(V),this.h()},h(){b(i,"class","splitpanes__pane"),b(i,"style",c=(r[2]?"height:":"width:")+r[1]+"%")},m(p,v){re(p,i,v),f&&f.m(i,null),r[10](i),h=!0,M||(S=Ye(i,"click",r[4]),M=!0)},p(p,[v]){f&&f.p&&(!h||v&256)&&ce(f,z,p,p[8],h?fe(z,p[8],v,null):ue(p[8]),null),(!h||v&6&&c!==(c=(p[2]?"height:":"width:")+p[1]+"%"))&&b(i,"style",c)},i(p){h||(me(f,p),h=!0)},o(p){de(f,p),h=!1},d(p){p&&V(i),f&&f.d(p),r[10](null),M=!1,S()}}}function $e(r,i,c){let h,{$$slots:M={},$$scope:S}=i;const{onPaneAdd:z,onPaneRemove:f,onPaneClick:p,isHorizontal:v}=je(ge);he(r,v,g=>c(2,h=g));let{size:y=null}=i,{minSize:C="0"}=i,{maxSize:k="100"}=i;const D=Qe();let _,x,w,R;function E(g){p(g,D)}ze(()=>{w=isNaN(parseFloat(C))?0:w,R=isNaN(parseFloat(k))?100:R,z({uid:D,element:_,givenSize:y,sz:()=>x,setSz:A=>{c(1,x=A)},min:()=>w,max:()=>R})}),pe(()=>{f(D)});function L(g){Se[g?"unshift":"push"](()=>{_=g,c(0,_)})}return r.$$set=g=>{"size"in g&&c(5,y=g.size),"minSize"in g&&c(6,C=g.minSize),"maxSize"in g&&c(7,k=g.maxSize),"$$scope"in g&&c(8,S=g.$$scope)},r.$$.update=()=>{r.$$.dirty&224&&(c(1,x=y===null?0:parseFloat(y)),w=parseFloat(C),R=parseFloat(k))},[_,x,h,v,E,y,C,k,S,M,L]}class sn extends ne{constructor(i){super();te(this,i,$e,Ze,ie,{size:5,minSize:6,maxSize:7})}}export{sn as P,tn as S};
