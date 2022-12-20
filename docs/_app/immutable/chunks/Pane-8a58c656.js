import{S as be,i as Me,s as Re,J as Ee,k as ce,l as fe,m as ue,h as H,n as C,N as O,b as le,P as Ce,Q as ke,R as De,f as Ne,t as Ae,T as nt,E as U,U as it,o as Fe,V as Le,W as ee,A as st,G as Te,a as lt,c as ot,F as at,X as rt,Y as ct}from"./index-15259a8c.js";import{w as re}from"./index-99a31a4d.js";function ft(r){let o,a,u;const w=r[17].default,z=Ee(w,r,r[16],null);return{c(){o=ce("div"),z&&z.c(),this.h()},l(h){o=fe(h,"DIV",{id:!0,class:!0,style:!0});var d=ue(o);z&&z.l(d),d.forEach(H),this.h()},h(){C(o,"id",r[0]),C(o,"class",a=`splitpanes ${r[3]||""} ${r[4]||""}`),C(o,"style",r[2]),O(o,"splitpanes--horizontal",r[1]),O(o,"splitpanes--vertical",!r[1]),O(o,"splitpanes--dragging",r[7]||r[8]),O(o,"splitpanes--freeze",!r[6])},m(h,d){le(h,o,d),z&&z.m(o,null),r[18](o),u=!0},p(h,d){z&&z.p&&(!u||d[0]&65536)&&Ce(z,w,h,h[16],u?De(w,h[16],d,null):ke(h[16]),null),(!u||d[0]&1)&&C(o,"id",h[0]),(!u||d[0]&24&&a!==(a=`splitpanes ${h[3]||""} ${h[4]||""}`))&&C(o,"class",a),(!u||d[0]&4)&&C(o,"style",h[2]),(!u||d[0]&26)&&O(o,"splitpanes--horizontal",h[1]),(!u||d[0]&26)&&O(o,"splitpanes--vertical",!h[1]),(!u||d[0]&408)&&O(o,"splitpanes--dragging",h[7]||h[8]),(!u||d[0]&88)&&O(o,"splitpanes--freeze",!h[6])},i(h){u||(Ne(z,h),u=!0)},o(h){Ae(z,h),u=!1},d(h){h&&H(o),z&&z.d(h),r[18](null)}}}const Be={};function se(r){if(!r.endsWith("px"))return;const o=parseFloat(r.slice(0,r.length-2));return isNaN(o)?void 0:o}function xe(r){const o=r,a=r,{clientX:u,clientY:w}="ontouchstart"in window&&a.touches?a.touches[0]:o;return{x:u,y:w}}function ut(r,o,a){let u,w,z,{$$slots:h={},$$scope:d}=o,{id:L=void 0}=o,{horizontal:v=!1}=o,{pushOtherPanes:p=!0}=o,{dblClickSplitter:y=!0}=o,{rtl:q="auto"}=o,{firstSplitter:Y=!1}=o,{style:X=null}=o,{theme:J="default-theme"}=o,{class:Q=""}=o;const x=nt();let b,R=!1,I=!1,Z=!1,F=!1,k=!1,N=-1,D=-1,V,l=new Array,K=re(v);U(r,K,e=>a(30,z=e));const j=re(Y);U(r,j,e=>a(29,w=e));const T=re(void 0);U(r,T,e=>a(28,u=e));let B=null,$=null,m=null;function W(e){return l.findIndex(i=>i.key===e)}it(Be,{showFirstSplitter:j,veryFirstPaneKey:T,isHorizontal:K,onPaneInit:e=>(u===void 0&&ee(T,u=e,u),{onSplitterDown:i=>{const n=W(e);n>0&&We(i,n-1)},onSplitterClick:i=>{const n=W(e);n>0&&He(i,n)},onSplitterDblClick:i=>{y&&me(i,W(e))}}),onPaneAdd:Oe,onPaneClick:Ve,onPaneRemove:Ie});async function Oe(e){let i=-1;Array.from(e.element.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&i++,n===e.element)),i===0&&ee(T,u=e.key,u),l.splice(i,0,e);for(let n=0;n<l.length;n++)l[n].index=n;R&&(await _e(),e.isReady=!0,x("pane-add",{index:i,panes:G()}))}async function Ie(e){const i=l.findIndex(n=>n.key===e);if(i>=0){const n=l.splice(i,1)[0];for(let t=0;t<l.length;t++)l[t].index=t;i===0&&ee(T,u=l.length>0?l[0].key:void 0,u),R&&(await _e(),x("pane-remove",{removed:n,panes:G()}))}}function Ve(e,i){x("pane-click",l.find(n=>{n.key==i}))}Fe(()=>{$e(),ve();for(let e=0;e<l.length;e++)l[e].isReady=!0;R=!0,x("ready"),setTimeout(()=>{a(6,Z=!0)},0)}),Le(()=>{R&&he(),R=!1});function de(e){if(q==="auto")try{return e.direction==="rtl"}catch{}return q===!0}function Ke(){document.body.style.cursor=K?"col-resize":"row-resize",document.addEventListener("mousemove",te,{passive:!1}),document.addEventListener("mouseup",ne),"ontouchstart"in window&&(document.addEventListener("touchmove",te,{passive:!1}),document.addEventListener("touchend",ne))}function he(){document.body.style.cursor="",document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",ne),"ontouchstart"in window&&(document.removeEventListener("touchmove",te),document.removeEventListener("touchend",ne))}const oe=e=>e.nodeType===Node.ELEMENT_NODE&&e.classList.contains("splitpanes__splitter");function pe(e,i,n){let t=e[v?"y":"x"];return n&&!v&&(t=i-t),t}function We(e,i){a(7,F=!0),N=i;const n=N+1,t=l[n];t.setSplitterActive(!0);let P=t.element;for(;P!=null&&(P=P.previousSibling,!oe(P)););P==null&&console.error("Splitpane Error: Active splitter wasn't found!"),B=P;const c=window.getComputedStyle(b),s=xe(e);$=ae(s,B)[v?"y":"x"];const f=de(c),S=ze(b,c)[v?"height":"width"],E=ae(s,b);m=pe(E,S,f),Ke()}function te(e){if(F){e.preventDefault(),a(8,k=!0);const i=window.getComputedStyle(b),n=xe(e),t=ae(n,b,i);Ge(t,i),x("resize",G())}}function ne(){k&&x("resized",G()),a(7,F=!1);const e=N+1;l[e].setSplitterActive(!1),setTimeout(()=>{a(8,k=!1),he()},100)}function He(e,i){"ontouchstart"in window&&(e.preventDefault(),y&&(D===i?(V&&clearTimeout(V),V=null,me(e,i),D=-1):(D=i,V=setTimeout(()=>{D=-1},500)))),k||x("splitter-click",l[i])}function me(e,i){const n=i,t=l[n];let _=0;for(let s=0;s<l.length;s++){const f=l[s];s!==n&&(_+=f.min())}const P=Math.min(Math.max(0,100-_),t.max()),c=_+P;if(c>=100)for(let s=0;s<l.length;s++){const f=l[s];s!==n?f.setSz(f.min()):f.setSz(100-_)}else{let s=100-c;t.setSz(P);const f=S=>{const E=S.min(),M=S.max(),g=Math.min(Math.max(0,s),M-E);S.setSz(E+g),s-=g};for(let S=n-1;S>=0;S--)f(l[S]);for(let S=n+1;S<l.length;S++)f(l[S]);s!=0&&console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.")}x("pane-maximize",t),x("resized",G()),a(7,F=!1)}function G(){const e=new Array(l.length);for(let i=0;i<l.length;i++){const n=l[i];e[i]={min:n.min(),max:n.max(),size:n.sz(),snap:n.snap()}}return e}const Se=(e,i=!0)=>{if(e.getPropertyValue("box-sizing")==="border-box")return;const n=se(e.getPropertyValue("border-left-width"));if(n===void 0){console.error("Splitpanes Error: Fail to parse container `border-left-width`.");return}const t=se(e.getPropertyValue("border-top-width"));if(t===void 0){console.error("Splitpanes Error: Fail to parse container `border-top-width`.");return}const _={left:n,top:t};if(i){const P=se(e.getPropertyValue("border-right-width"));if(P===void 0){console.error("Splitpanes Error: Fail to parse container `border-right-width`.");return}const c=se(e.getPropertyValue("border-bottom-width"));if(c===void 0){console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");return}const s=_;s.right=P,s.bottom=c}return _};function qe(e,i){i||(i=window.getComputedStyle(e));const n=e.getBoundingClientRect(),t=Se(i,!1)||{left:0,top:0};return{x:n.left+t.left,y:n.top+t.top}}function ze(e,i){i||(i=window.getComputedStyle(e));const n=e.getBoundingClientRect(),t=Se(i,!0)||{left:0,top:0,right:0,bottom:0};return{width:n.width-t.left-t.right,height:n.height-t.top-t.bottom,x:n.left+t.left,y:n.top+t.top}}function ae(e,i,n){const t=qe(i,n);return{x:e.x-t.x,y:e.y-t.y}}function Ye(e,i,n){const t=g=>g.getBoundingClientRect()[v?"height":"width"];if(B==null)return e;const _=t(B),P=_-$;let c=0,s=B.previousSibling;for(;s!=null;)oe(s)&&(c+=t(s)),s=s.previousSibling;let f=0,S=B.nextSibling;for(;S!=null;)oe(S)&&(f+=t(S)),S=S.nextSibling;const E=c+(n&&!v?P:$)+(e-m)*_/i,M=c+_+f;return(e-E)/(i-M)}function je(e,i){const n=de(i),t=ze(b,i)[v?"height":"width"],_=pe(e,t,n);return Ye(_,t,n)*100}function Ge(e,i){const n=N;let t={prevPanesSize:Pe(n),nextPanesSize:ge(n),prevReachedMinPanes:0,nextReachedMinPanes:0};const _=0+(p?0:t.prevPanesSize),P=100-(p?0:t.nextPanesSize);let c=[n,n+1],s=l[c[0]]||null,f=l[c[1]]||null;const S=Math.max(Math.min(je(e,i),P),_),E=t.prevPanesSize+s.min()+s.snap(),M=100-(t.nextPanesSize+f.min()+f.snap());let g=S,A=!1;S<=E?S>t.prevPanesSize+s.min()&&(g=Math.max(s.min()+t.prevPanesSize,100-(f.max()+t.nextPanesSize)),A=!0):S>=M&&S<100-t.nextPanesSize-f.min()&&(g=Math.min(100-(f.min()+t.nextPanesSize),s.max()+t.prevPanesSize),A=!0);const ie=s.max()<100&&g>=s.max()+t.prevPanesSize,tt=f.max()<100&&g<=100-(f.max()+t.nextPanesSize);if(ie||tt)ie?(s.setSz(s.max()),f.setSz(Math.max(100-s.max()-t.prevPanesSize-t.nextPanesSize,0))):(s.setSz(Math.max(100-f.max()-t.prevPanesSize-t.nextPanesSize,0)),f.setSz(f.max()));else{if(p&&!A){const we=Ue(t,g);if(!we)return;({sums:t,panesToResize:c}=we),s=l[c[0]]||null,f=l[c[1]]||null}s!==null&&s.setSz(Math.min(Math.max(g-t.prevPanesSize-t.prevReachedMinPanes,s.min()),s.max())),f!==null&&f.setSz(Math.min(Math.max(100-g-t.nextPanesSize-t.nextReachedMinPanes,f.min()),f.max()))}}function Ue(e,i){var _,P;const n=N,t=[n,n+1];if(i<e.prevPanesSize+l[t[0]].min()){if(t[0]=(_=Xe(n))==null?void 0:_.index,e.prevReachedMinPanes=0,t[0]<n)for(let c=0;c<l.length;c++){const s=l[c];c>t[0]&&c<=n&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}if(e.prevPanesSize=Pe(t[0]),t[0]===void 0){e.prevReachedMinPanes=0,l[0].setSz(l[0].min());for(let c=0;c<l.length;c++){const s=l[c];c>0&&c<=n&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}return l[t[1]].setSz(100-e.prevReachedMinPanes-l[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-l[t[1]].min()){if(t[1]=(P=Je(n))==null?void 0:P.index,e.nextReachedMinPanes=0,t[1]>n+1)for(let s=0;s<l.length;s++){const f=l[s];s>n&&s<t[1]&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}e.nextPanesSize=ge(t[1]-1);const c=l.length;if(t[1]===void 0){e.nextReachedMinPanes=0,l[c-1].setSz(l[c-1].min());for(let s=0;s<l.length;s++){const f=l[s];s<c-1&&s>=n+1&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}return l[t[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-l[c-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:t}}function Pe(e){return l.reduce((i,n,t)=>i+(t<e?n.sz():0),0)}function ge(e){return l.reduce((i,n,t)=>i+(t>e+1?n.sz():0),0)}function Xe(e){return[...l].reverse().find(n=>n.index<e&&n.sz()>n.min())||null}function Je(e){return l.find(n=>n.index>e+1&&n.sz()>n.min())||null}async function _e(){I=!0,await st(),I&&(ve(),I=!1)}function ve(){Qe(),R&&x("resized",G())}function Qe(){const e=l.length;let i=100,n=0,t=0,_=0,P=[],c=[];for(let M=0;M<e;M++){const g=l[M],A=g.sz();g.givenSize==null?g.isReady?(_+=A,A>=g.max()&&P.push(g),A<=g.min()&&c.push(g)):t+=1:(i-=A,n++,P.push(g),c.push(g))}const s=e-n,f=s-t;let S,E;if(f>0?(S=_/f,_+=t*S,E=i/_):(S=i/s,E=1),i>.1){i=100;for(let M=0;M<e;M++){const g=l[M];if(g.givenSize==null){const A=g.isReady?g.sz():S,ie=Math.max(Math.min(A*E,g.max()),g.min());g.setSz(ie)}i-=g.sz()}Math.abs(i)>.1&&(i=Ze(i,P,c))}Math.abs(i)>.1&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")}function Ze(e,i,n){const t=l.length;let _=e/(t-(e>0?i.length:n.length));if(l.length===1)l[0].setSz(100),e=0;else for(let P=0;P<l.length;P++){const c=l[P],s=c.sz();if(e>0&&!i.includes(c)){const f=Math.max(Math.min(s+_,c.max()),c.min()),S=f-s;e-=S,c.setSz(f)}else if(!n.includes(c)){const f=Math.max(Math.min(s+_,c.max()),c.min()),S=f-s;e-=S,c.setSz(f)}}return e}function $e(){var e;if(b){const i=Array.from(b.children);for(let n=0;n<i.length;n++){const t=i[n],_=t.classList.contains("splitpanes__pane"),P=t.classList.contains("splitpanes__splitter");if(!_&&!P){(e=t.parentNode)==null||e.removeChild(t),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function et(e){Te[e?"unshift":"push"](()=>{b=e,a(5,b)})}return r.$$set=e=>{"id"in e&&a(0,L=e.id),"horizontal"in e&&a(1,v=e.horizontal),"pushOtherPanes"in e&&a(12,p=e.pushOtherPanes),"dblClickSplitter"in e&&a(13,y=e.dblClickSplitter),"rtl"in e&&a(14,q=e.rtl),"firstSplitter"in e&&a(15,Y=e.firstSplitter),"style"in e&&a(2,X=e.style),"theme"in e&&a(3,J=e.theme),"class"in e&&a(4,Q=e.class),"$$scope"in e&&a(16,d=e.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2&&ee(K,z=v,z),r.$$.dirty[0]&32768&&ee(j,w=Y,w)},[L,v,X,J,Q,b,Z,F,k,K,j,T,p,y,q,Y,d,h,et]}class zt extends be{constructor(o){super(),Me(this,o,ut,ft,Re,{id:0,horizontal:1,pushOtherPanes:12,dblClickSplitter:13,rtl:14,firstSplitter:15,style:2,theme:3,class:4},null,[-1,-1,-1])}}function ye(r){let o,a,u,w;return{c(){o=ce("div"),this.h()},l(z){o=fe(z,"DIV",{class:!0}),ue(o).forEach(H),this.h()},h(){C(o,"class",a="splitpanes__splitter "+(r[2]?"splitpanes__splitter__active":""))},m(z,h){le(z,o,h),u||(w=ct(r[11].call(null,o)),u=!0)},p(z,h){h&4&&a!==(a="splitpanes__splitter "+(z[2]?"splitpanes__splitter__active":""))&&C(o,"class",a)},d(z){z&&H(o),u=!1,w()}}}function dt(r){let o,a,u,w,z,h,d=(r[4]!==r[9]||r[5])&&ye(r);const L=r[20].default,v=Ee(L,r,r[19],null);return{c(){d&&d.c(),o=lt(),a=ce("div"),v&&v.c(),this.h()},l(p){d&&d.l(p),o=ot(p),a=fe(p,"DIV",{class:!0,style:!0});var y=ue(a);v&&v.l(y),y.forEach(H),this.h()},h(){C(a,"class",u=`splitpanes__pane ${r[0]||""}`),C(a,"style",r[3])},m(p,y){d&&d.m(p,y),le(p,o,y),le(p,a,y),v&&v.m(a,null),r[21](a),w=!0,z||(h=at(a,"click",r[10]),z=!0)},p(p,[y]){p[4]!==p[9]||p[5]?d?d.p(p,y):(d=ye(p),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),v&&v.p&&(!w||y&524288)&&Ce(v,L,p,p[19],w?De(L,p[19],y,null):ke(p[19]),null),(!w||y&1&&u!==(u=`splitpanes__pane ${p[0]||""}`))&&C(a,"class",u),(!w||y&8)&&C(a,"style",p[3])},i(p){w||(Ne(v,p),w=!0)},o(p){Ae(v,p),w=!1},d(p){d&&d.d(p),p&&H(o),p&&H(a),v&&v.d(p),r[21](null),z=!1,h()}}}function ht(r,o,a){let u,w,z,h,d,{$$slots:L={},$$scope:v}=o;const{onPaneInit:p,onPaneAdd:y,onPaneRemove:q,onPaneClick:Y,isHorizontal:X,showFirstSplitter:J,veryFirstPaneKey:Q}=rt(Be);U(r,X,m=>a(18,z=m)),U(r,J,m=>a(5,d=m)),U(r,Q,m=>a(4,h=m));let{size:x=null}=o,{minSize:b=0}=o,{maxSize:R=100}=o,{snapSize:I=0}=o,{class:Z=""}=o;const F=typeof window<"u",k={};let N,D=x??0,V=!1;const{onSplitterDown:l,onSplitterClick:K,onSplitterDblClick:j}=p(k);function T(m){Y(m,k)}const B=m=>{m.onmousedown=l,"ontouchstart"in window&&(m.ontouchstart=l),m.onclick=K,m.ondblclick=j};Fe(()=>{y({key:k,element:N,givenSize:x,sz:()=>D,setSz:W=>{a(16,D=W),x!=null&&a(12,x=D)},min:()=>b,max:()=>R,snap:()=>I,setSplitterActive:W=>{a(2,V=W)},isReady:!1})}),Le(()=>{q(k)});function $(m){Te[m?"unshift":"push"](()=>{N=m,a(1,N)})}return r.$$set=m=>{"size"in m&&a(12,x=m.size),"minSize"in m&&a(13,b=m.minSize),"maxSize"in m&&a(14,R=m.maxSize),"snapSize"in m&&a(15,I=m.snapSize),"class"in m&&a(0,Z=m.class),"$$scope"in m&&a(19,v=m.$$scope)},r.$$.update=()=>{r.$$.dirty&4096&&x!=null&&a(16,D=x),r.$$.dirty&262144&&a(17,u=z?"height":"width"),r.$$.dirty&225280&&a(3,w=[!F&&b>0?`min-${u}: ${b}%;`:void 0,!F&&R<100?`max-${u}: ${R}%;`:void 0,F||x!=null?`${u}: ${D}%;`:void 0].filter(m=>m!==void 0).join(" ")||void 0)},[Z,N,V,w,h,d,X,J,Q,k,T,B,x,b,R,I,D,u,z,v,L,$]}class Pt extends be{constructor(o){super(),Me(this,o,ht,dt,Re,{size:12,minSize:13,maxSize:14,snapSize:15,class:0})}}export{Pt as P,zt as S};
