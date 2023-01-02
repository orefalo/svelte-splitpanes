import{S as Ee,i as ke,s as De,J as Ne,k as de,l as he,m as pe,h as K,n as D,N as G,b as oe,P as Ae,Q as Fe,R as Le,f as Oe,t as Te,T as ln,E as X,U as an,o as Be,V as Ie,j as on,W as Y,A as rn,G as Ve,a as cn,c as fn,F as un,X as dn,Y as hn}from"./index-5c227a2d.js";import{w as ue}from"./index-13779d32.js";function pn(c){let a,o,u;const y=c[17].default,g=Ne(y,c,c[16],null);return{c(){a=de("div"),g&&g.c(),this.h()},l(S){a=he(S,"DIV",{id:!0,class:!0,style:!0});var h=pe(a);g&&g.l(h),h.forEach(K),this.h()},h(){D(a,"id",c[0]),D(a,"class",o=`splitpanes ${c[3]||""} ${c[4]||""}`),D(a,"style",c[2]),G(a,"splitpanes--horizontal",c[1]),G(a,"splitpanes--vertical",!c[1]),G(a,"splitpanes--dragging",c[7]||c[8]),G(a,"splitpanes--freeze",!c[6])},m(S,h){oe(S,a,h),g&&g.m(a,null),c[18](a),u=!0},p(S,h){g&&g.p&&(!u||h[0]&65536)&&Ae(g,y,S,S[16],u?Le(y,S[16],h,null):Fe(S[16]),null),(!u||h[0]&1)&&D(a,"id",S[0]),(!u||h[0]&24&&o!==(o=`splitpanes ${S[3]||""} ${S[4]||""}`))&&D(a,"class",o),(!u||h[0]&4)&&D(a,"style",S[2]),(!u||h[0]&26)&&G(a,"splitpanes--horizontal",S[1]),(!u||h[0]&26)&&G(a,"splitpanes--vertical",!S[1]),(!u||h[0]&408)&&G(a,"splitpanes--dragging",S[7]||S[8]),(!u||h[0]&88)&&G(a,"splitpanes--freeze",!S[6])},i(S){u||(Oe(g,S),u=!0)},o(S){Te(g,S),u=!1},d(S){S&&K(a),g&&g.d(S),c[18](null)}}}const Ge={};function ae(c){if(!c.endsWith("px"))return;const a=parseFloat(c.slice(0,c.length-2));return isNaN(a)?void 0:a}function Re(c){const a=c,o=c,{clientX:u,clientY:y}="ontouchstart"in window&&o.touches?o.touches[0]:a;return{x:u,y}}function mn(c,a,o){let u,y,g,{$$slots:S={},$$scope:h}=a,{id:T=void 0}=a,{horizontal:_=!1}=a,{pushOtherPanes:z=!0}=a,{dblClickSplitter:b=!0}=a,{rtl:W="auto"}=a,{firstSplitter:H=!1}=a,{style:ne=null}=a,{theme:J="default-theme"}=a,{class:Q=""}=a;const R=ln();let w,C=!1,F=!1,U=!1,B=!1,L=!1,E=-1,O=-1,k,s=new Array,I=ue(_);X(c,I,e=>o(30,g=e));const j=ue(H);X(c,j,e=>o(29,y=e));const N=ue(void 0);X(c,N,e=>o(28,u=e));let V=null,Z=null,te=null;function $(e){return s.findIndex(n=>n.key===e)}an(Ge,{showFirstSplitter:j,veryFirstPaneKey:N,isHorizontal:I,onPaneInit:e=>(u===void 0&&Y(N,u=e,u),{onSplitterDown:n=>{const t=$(e);t>0&&Ue(n,t-1)},onSplitterClick:n=>{const t=$(e);t>0&&je(n,t)},onSplitterDblClick:n=>{b&&Pe(n,$(e))}}),onPaneAdd:p,onPaneClick:Ke,onPaneRemove:ee,reportGivenSizeChange:We});async function p(e){let n=-1;Array.from(e.element.parentNode.children).some(t=>(t.className.includes("splitpanes__pane")&&n++,t===e.element)),n===0&&Y(N,u=e.key,u),s.splice(n,0,e);for(let t=0;t<s.length;t++)s[t].index=t;C&&(await fe(),e.isReady=!0,R("pane-add",{index:n,panes:q()}))}async function ee(e){const n=s.findIndex(t=>t.key===e);if(n>=0){const t=s.splice(n,1)[0];for(let i=0;i<s.length;i++)s[i].index=i;n===0&&Y(N,u=s.length>0?s[0].key:void 0,u),C&&(await fe(),R("pane-remove",{removed:t,panes:q()}))}}function Ke(e,n){R("pane-click",s.find(t=>t.key===n))}function We(e,n){let t;for(let d=0;d<s.length;d++)if(s[d].key===e){t=d;break}s[t].setSz(n),fe()}Be(()=>{xe(),be();for(let e=0;e<s.length;e++)s[e].isReady=!0;C=!0,R("ready"),setTimeout(()=>{o(6,U=!0)},0)}),Ie(()=>{C&&ze(),C=!1}),on(()=>{xe()});function Se(e){if(W==="auto")try{return e.direction==="rtl"}catch{}return W===!0}function He(){document.body.style.cursor=I?"col-resize":"row-resize",document.addEventListener("mousemove",ie,{passive:!1}),document.addEventListener("mouseup",se),"ontouchstart"in window&&(document.addEventListener("touchmove",ie,{passive:!1}),document.addEventListener("touchend",se))}function ze(){document.body.style.cursor="",document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",se),"ontouchstart"in window&&(document.removeEventListener("touchmove",ie),document.removeEventListener("touchend",se))}const re=e=>e.nodeType===Node.ELEMENT_NODE&&e.classList.contains("splitpanes__splitter");function ge(e,n,t){let i=e[_?"y":"x"];return t&&!_&&(i=n-i),i}function Ue(e,n){o(7,B=!0),E=n;const t=E+1,i=s[t];i.setSplitterActive(!0);let m=i.element;for(;m!=null&&(m=m.previousSibling,!re(m)););m==null&&console.error("Splitpane Error: Active splitter wasn't found!"),V=m;const r=window.getComputedStyle(w),l=Re(e);Z=ce(l,V)[_?"y":"x"];const f=Se(r),P=ve(w,r)[_?"height":"width"],x=ce(l,w);te=ge(x,P,f),He()}function ie(e){if(B){e.preventDefault(),o(8,L=!0);const n=window.getComputedStyle(w),t=Re(e),i=ce(t,w,n);Je(i,n),R("resize",q())}}function se(){L&&R("resized",q()),o(7,B=!1);const e=E+1;s[e].setSplitterActive(!1),setTimeout(()=>{o(8,L=!1),ze()},100)}function je(e,n){"ontouchstart"in window&&(e.preventDefault(),b&&(O===n?(k&&clearTimeout(k),k=null,Pe(e,n),O=-1):(O=n,k=setTimeout(()=>{O=-1},500)))),L||R("splitter-click",s[n])}function Pe(e,n){const t=s[n];let i=0;for(let r=0;r<s.length;r++){const l=s[r];r!==n&&(i+=l.min())}const d=Math.min(Math.max(0,100-i),t.max()),m=i+d;if(m>=100)for(let r=0;r<s.length;r++){const l=s[r];r!==n?l.setSz(l.min()):l.setSz(100-i)}else{let r=100-m;t.setSz(d);const l=f=>{const P=f.min(),x=f.max(),M=Math.min(Math.max(0,r),x-P);f.setSz(P+M),r-=M};for(let f=n-1;f>=0;f--)l(s[f]);for(let f=n+1;f<s.length;f++)l(s[f]);r!=0&&console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.")}R("pane-maximize",t),R("resized",q()),o(7,B=!1)}function q(){const e=new Array(s.length);for(let n=0;n<s.length;n++){const t=s[n];e[n]={min:t.min(),max:t.max(),size:t.sz(),snap:t.snap()}}return e}const _e=(e,n=!0)=>{if(e.getPropertyValue("box-sizing")==="border-box")return;const t=ae(e.getPropertyValue("border-left-width"));if(t===void 0){console.error("Splitpanes Error: Fail to parse container `border-left-width`.");return}const i=ae(e.getPropertyValue("border-top-width"));if(i===void 0){console.error("Splitpanes Error: Fail to parse container `border-top-width`.");return}const d={left:t,top:i};if(n){const m=ae(e.getPropertyValue("border-right-width"));if(m===void 0){console.error("Splitpanes Error: Fail to parse container `border-right-width`.");return}const r=ae(e.getPropertyValue("border-bottom-width"));if(r===void 0){console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");return}const l=d;l.right=m,l.bottom=r}return d};function qe(e,n){n||(n=window.getComputedStyle(e));const t=e.getBoundingClientRect(),i=_e(n,!1)||{left:0,top:0};return{x:t.left+i.left,y:t.top+i.top}}function ve(e,n){n||(n=window.getComputedStyle(e));const t=e.getBoundingClientRect(),i=_e(n,!0)||{left:0,top:0,right:0,bottom:0};return{width:t.width-i.left-i.right,height:t.height-i.top-i.bottom,x:t.left+i.left,y:t.top+i.top}}function ce(e,n,t){const i=qe(n,t);return{x:e.x-i.x,y:e.y-i.y}}function Ye(e,n,t){const i=v=>v.getBoundingClientRect()[_?"height":"width"];if(V==null)return e;const d=i(V),m=d-Z;let r=0,l=V.previousSibling;for(;l!=null;)re(l)&&(r+=i(l)),l=l.previousSibling;let f=0,P=V.nextSibling;for(;P!=null;)re(P)&&(f+=i(P)),P=P.nextSibling;const x=r+(t&&!_?m:Z)+(e-te)*d/n,M=r+d+f;return(e-x)/(n-M)}function Xe(e,n){const t=Se(n),i=ve(w,n)[_?"height":"width"],d=ge(e,i,t);return Ye(d,i,t)*100}function Je(e,n){const t=E;let i={prevPanesSize:we(t),nextPanesSize:ye(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const d=0+(z?0:i.prevPanesSize),m=100-(z?0:i.nextPanesSize);let r=[t,t+1],l=s[r[0]]||null,f=s[r[1]]||null;const P=Math.max(Math.min(Xe(e,n),m),d),x=i.prevPanesSize+l.min()+l.snap(),M=100-(i.nextPanesSize+f.min()+f.snap());let v=P,A=!1;P<=x?P>i.prevPanesSize+l.min()&&(v=Math.max(l.min()+i.prevPanesSize,100-(f.max()+i.nextPanesSize)),A=!0):P>=M&&P<100-i.nextPanesSize-f.min()&&(v=Math.min(100-(f.min()+i.nextPanesSize),l.max()+i.prevPanesSize),A=!0);const le=l.max()<100&&v>=l.max()+i.prevPanesSize,sn=f.max()<100&&v<=100-(f.max()+i.nextPanesSize);if(le||sn)le?(l.setSz(l.max()),f.setSz(Math.max(100-l.max()-i.prevPanesSize-i.nextPanesSize,0))):(l.setSz(Math.max(100-f.max()-i.prevPanesSize-i.nextPanesSize,0)),f.setSz(f.max()));else{if(z&&!A){const Me=Qe(i,v);if(!Me)return;({sums:i,panesToResize:r}=Me),l=s[r[0]]||null,f=s[r[1]]||null}l!==null&&l.setSz(Math.min(Math.max(v-i.prevPanesSize-i.prevReachedMinPanes,l.min()),l.max())),f!==null&&f.setSz(Math.min(Math.max(100-v-i.nextPanesSize-i.nextReachedMinPanes,f.min()),f.max()))}}function Qe(e,n){var d,m;const t=E,i=[t,t+1];if(n<e.prevPanesSize+s[i[0]].min()){if(i[0]=(d=Ze(t))==null?void 0:d.index,e.prevReachedMinPanes=0,i[0]<t)for(let r=0;r<s.length;r++){const l=s[r];r>i[0]&&r<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=we(i[0]),i[0]===void 0){e.prevReachedMinPanes=0,s[0].setSz(s[0].min());for(let r=0;r<s.length;r++){const l=s[r];r>0&&r<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return s[i[1]].setSz(100-e.prevReachedMinPanes-s[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(n>100-e.nextPanesSize-s[i[1]].min()){if(i[1]=(m=$e(t))==null?void 0:m.index,e.nextReachedMinPanes=0,i[1]>t+1)for(let l=0;l<s.length;l++){const f=s[l];l>t&&l<i[1]&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}e.nextPanesSize=ye(i[1]-1);const r=s.length;if(i[1]===void 0){e.nextReachedMinPanes=0,s[r-1].setSz(s[r-1].min());for(let l=0;l<s.length;l++){const f=s[l];l<r-1&&l>=t+1&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}return s[i[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-s[r-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:i}}function we(e){return s.reduce((n,t,i)=>n+(i<e?t.sz():0),0)}function ye(e){return s.reduce((n,t,i)=>n+(i>e+1?t.sz():0),0)}function Ze(e){return[...s].reverse().find(t=>t.index<e&&t.sz()>t.min())||null}function $e(e){return s.find(t=>t.index>e+1&&t.sz()>t.min())||null}async function fe(){F=!0,await rn(),F&&(be(),F=!1)}function be(){en(),C&&R("resized",q())}function en(){const e=s.length;let n=100,t=0,i=0,d=0,m=[],r=[];for(let M=0;M<e;M++){const v=s[M],A=v.sz();v.givenSize==null?v.isReady?(d+=A,A>=v.max()&&m.push(v),A<=v.min()&&r.push(v)):i+=1:(n-=A,t++,m.push(v),r.push(v))}const l=e-t,f=l-i;let P,x;if(f>0?(P=d/f,P>.1&&n>.1?(d+=i*P,x=n/d):(P=0,x=1)):(P=n/l,x=1),n+d>.1){n=100;for(let M=0;M<e;M++){const v=s[M];if(v.givenSize==null){const A=v.isReady?v.sz():P,le=Math.max(Math.min(A*x,v.max()),v.min());v.setSz(le)}n-=v.sz()}Math.abs(n)>.1&&(n=nn(n,m,r))}isFinite(n)?Math.abs(n)>.1&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."):console.warn("Splitpanes: Internal error, sizes might be NaN as a result.")}function nn(e,n,t){const d=s.length-(e>0?n.length:t.length);if(d<=0)return e;const m=e/d;if(s.length===1)s[0].setSz(100),e=0;else for(let r=0;r<s.length;r++){const l=s[r],f=l.sz();if(e>0&&!n.includes(l)){const P=Math.max(Math.min(f+m,l.max()),l.min()),x=P-f;e-=x,l.setSz(P)}else if(!t.includes(l)){const P=Math.max(Math.min(f+m,l.max()),l.min()),x=P-f;e-=x,l.setSz(P)}}return e}function xe(){var i;const{children:e}=w;let n=0,t=!1;for(let d=0;d<e.length;d++){const m=e.item(d),r=m.classList.contains("splitpanes__pane"),l=m.classList.contains("splitpanes__splitter");if(!r&&!l){(i=m.parentNode)==null||i.removeChild(m),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}else r&&(!t&&s[n].element!==m&&(t=!0),n++)}if(t){const d=[];for(let m=0;m<e.length;m++){const r=e.item(m);if(r.classList.contains("splitpanes__pane")){const f=s.find(P=>P.element===r);f!=null?(f.index=d.length,d.push(f)):console.warn("Splitpanes: Internal error - found a <Pane> elements which isn't tracked.")}}s=d,Y(N,u=s.length>0?s[0].key:void 0,u)}}function tn(e){Ve[e?"unshift":"push"](()=>{w=e,o(5,w)})}return c.$$set=e=>{"id"in e&&o(0,T=e.id),"horizontal"in e&&o(1,_=e.horizontal),"pushOtherPanes"in e&&o(12,z=e.pushOtherPanes),"dblClickSplitter"in e&&o(13,b=e.dblClickSplitter),"rtl"in e&&o(14,W=e.rtl),"firstSplitter"in e&&o(15,H=e.firstSplitter),"style"in e&&o(2,ne=e.style),"theme"in e&&o(3,J=e.theme),"class"in e&&o(4,Q=e.class),"$$scope"in e&&o(16,h=e.$$scope)},c.$$.update=()=>{c.$$.dirty[0]&2&&Y(I,g=_,g),c.$$.dirty[0]&32768&&Y(j,y=H,y)},[T,_,ne,J,Q,w,U,B,L,I,j,N,z,b,W,H,h,S,tn]}class _n extends Ee{constructor(a){super(),ke(this,a,mn,pn,De,{id:0,horizontal:1,pushOtherPanes:12,dblClickSplitter:13,rtl:14,firstSplitter:15,style:2,theme:3,class:4},null,[-1,-1,-1])}}function Ce(c){let a,o,u,y;return{c(){a=de("div"),this.h()},l(g){a=he(g,"DIV",{class:!0}),pe(a).forEach(K),this.h()},h(){D(a,"class",o="splitpanes__splitter "+(c[2]?"splitpanes__splitter__active":""))},m(g,S){oe(g,a,S),u||(y=hn(c[11].call(null,a)),u=!0)},p(g,S){S[0]&4&&o!==(o="splitpanes__splitter "+(g[2]?"splitpanes__splitter__active":""))&&D(a,"class",o)},d(g){g&&K(a),u=!1,y()}}}function Sn(c){let a,o,u,y,g,S,h=(c[4]!==c[9]||c[5])&&Ce(c);const T=c[20].default,_=Ne(T,c,c[19],null);return{c(){h&&h.c(),a=cn(),o=de("div"),_&&_.c(),this.h()},l(z){h&&h.l(z),a=fn(z),o=he(z,"DIV",{class:!0,style:!0});var b=pe(o);_&&_.l(b),b.forEach(K),this.h()},h(){D(o,"class",u=`splitpanes__pane ${c[0]||""}`),D(o,"style",c[3])},m(z,b){h&&h.m(z,b),oe(z,a,b),oe(z,o,b),_&&_.m(o,null),c[21](o),y=!0,g||(S=un(o,"click",c[10]),g=!0)},p(z,b){z[4]!==z[9]||z[5]?h?h.p(z,b):(h=Ce(z),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),_&&_.p&&(!y||b[0]&524288)&&Ae(_,T,z,z[19],y?Le(T,z[19],b,null):Fe(z[19]),null),(!y||b[0]&1&&u!==(u=`splitpanes__pane ${z[0]||""}`))&&D(o,"class",u),(!y||b[0]&8)&&D(o,"style",z[3])},i(z){y||(Oe(_,z),y=!0)},o(z){Te(_,z),y=!1},d(z){h&&h.d(z),z&&K(a),z&&K(o),_&&_.d(z),c[21](null),g=!1,S()}}}function zn(c,a,o){let u,y,g,S,h,{$$slots:T={},$$scope:_}=a;const{onPaneInit:z,onPaneAdd:b,onPaneRemove:W,onPaneClick:H,reportGivenSizeChange:ne,isHorizontal:J,showFirstSplitter:Q,veryFirstPaneKey:R}=dn(Ge);X(c,J,p=>o(18,g=p)),X(c,Q,p=>o(5,h=p)),X(c,R,p=>o(4,S=p));let{size:w=null}=a,{minSize:C=0}=a,{maxSize:F=100}=a,{snapSize:U=0}=a,{class:B=""}=a;const L=typeof window<"u",E={};let O,k=w??0,s=!1,I=!1;const j=p=>{I&&p!=null&&p!=k&&ne(E,p)},{onSplitterDown:N,onSplitterClick:V,onSplitterDblClick:Z}=z(E);function te(p){H(p,E)}const $=p=>{p.onmousedown=N,"ontouchstart"in window&&(p.ontouchstart=N),p.onclick=V,p.ondblclick=Z};Be(()=>{b({key:E,element:O,givenSize:w,sz:()=>k,setSz:ee=>{o(16,k=ee),w!=null&&w!=k&&o(12,w=k)},min:()=>C,max:()=>F,snap:()=>U,setSplitterActive:ee=>{o(2,s=ee)},isReady:!1}),I=!0}),Ie(()=>{W(E)});function me(p){Ve[p?"unshift":"push"](()=>{O=p,o(1,O)})}return c.$$set=p=>{"size"in p&&o(12,w=p.size),"minSize"in p&&o(13,C=p.minSize),"maxSize"in p&&o(14,F=p.maxSize),"snapSize"in p&&o(15,U=p.snapSize),"class"in p&&o(0,B=p.class),"$$scope"in p&&o(19,_=p.$$scope)},c.$$.update=()=>{c.$$.dirty[0]&4096&&j(w),c.$$.dirty[0]&262144&&o(17,u=g?"height":"width"),c.$$.dirty[0]&225280&&o(3,y=[!L&&(w!=null||C>0)?`min-${u}: ${w??C}%;`:void 0,!L&&(w!=null||F<100)?`max-${u}: ${w??F}%;`:void 0,L||w!=null?`${u}: ${k}%;`:void 0].filter(p=>p!==void 0).join(" ")||void 0)},[B,O,s,y,S,h,J,Q,R,E,te,$,w,C,F,U,k,u,g,_,T,me]}class vn extends Ee{constructor(a){super(),ke(this,a,zn,Sn,De,{size:12,minSize:13,maxSize:14,snapSize:15,class:0},null,[-1,-1])}}export{vn as P,_n as S};