import{S as re,i as ae,s as fe,a2 as S,a as ue,a3 as k,m as y,h as m,c as ce,n as b,b as M,C as A,B as Q,o as he,E as se,J as ye,k as ie,l as ne,p,F as J,P as Be,Q as Ie,R as Ce,f as v,g as Se,d as ke,t as D,D as ve,a4 as Ae,w as He,x as Ee,y as Me,z as De,a5 as Ge,a6 as Re,G as Te}from"./index-5c227a2d.js";import{w as Xe}from"./index-13779d32.js";import{t as te}from"./index-773e937a.js";function Ye(i){return--i*i*((1.70158+1)*i+1.70158)+1}function Oe(i){let e,s,r,f,o;return{c(){e=S("defs"),s=S("filter"),r=S("feGaussianBlur"),f=ue(),o=S("circle"),this.h()},l(u){e=k(u,"defs",{});var g=y(e);s=k(g,"filter",{id:!0,x:!0,y:!0});var _=y(s);r=k(_,"feGaussianBlur",{in:!0,stdDeviation:!0}),y(r).forEach(m),_.forEach(m),g.forEach(m),f=ce(u),o=k(u,"circle",{cx:!0,cy:!0,r:!0,opacity:!0,filter:!0,class:!0}),y(o).forEach(m),this.h()},h(){b(r,"in","SourceGraphic"),b(r,"stdDeviation",i[2]),b(s,"id","f1"),b(s,"x","0"),b(s,"y","0"),b(o,"cx",i[0]),b(o,"cy",i[1]),b(o,"r",i[3]),b(o,"opacity",i[4]),b(o,"filter","url(#f1)"),b(o,"class","svelte-1lfi58h")},m(u,g){M(u,e,g),A(e,s),A(s,r),M(u,f,g),M(u,o,g)},p(u,[g]){g&4&&b(r,"stdDeviation",u[2]),g&1&&b(o,"cx",u[0]),g&2&&b(o,"cy",u[1]),g&8&&b(o,"r",u[3]),g&16&&b(o,"opacity",u[4])},i:Q,o:Q,d(u){u&&m(e),u&&m(f),u&&m(o)}}}function qe(i,e,s){let r,f,{x:o,y:u,sizeIn:g,size:_,speed:h,rippleBlur:d,opacityIn:a}=e;he(()=>{l.set(0),w.set(_)});const w=te(g,{duration:h}),l=te(a,{duration:h+h*2.5,easing:Ye});return se(i,w,t=>s(3,r=t)),se(i,l,t=>s(4,f=t)),i.$$set=t=>{"x"in t&&s(0,o=t.x),"y"in t&&s(1,u=t.y),"sizeIn"in t&&s(7,g=t.sizeIn),"size"in t&&s(8,_=t.size),"speed"in t&&s(9,h=t.speed),"rippleBlur"in t&&s(2,d=t.rippleBlur),"opacityIn"in t&&s(10,a=t.opacityIn)},[o,u,d,r,f,w,l,g,_,h,a]}class Ne extends re{constructor(e){super(),ae(this,e,qe,Oe,fe,{x:0,y:1,sizeIn:7,size:8,speed:9,rippleBlur:2,opacityIn:10})}}function le(i,e,s){const r=i.slice();return r[43]=e[s],r}function oe(i){let e,s;return e=new Ne({props:{x:i[43].x,y:i[43].y,size:i[43].size,speed:i[1],sizeIn:i[11],opacityIn:i[12],rippleBlur:i[0]}}),{c(){He(e.$$.fragment)},l(r){Ee(e.$$.fragment,r)},m(r,f){Me(e,r,f),s=!0},p(r,f){const o={};f[0]&524288&&(o.x=r[43].x),f[0]&524288&&(o.y=r[43].y),f[0]&524288&&(o.size=r[43].size),f[0]&2&&(o.speed=r[1]),f[0]&2048&&(o.sizeIn=r[11]),f[0]&4096&&(o.opacityIn=r[12]),f[0]&1&&(o.rippleBlur=r[0]),e.$set(o)},i(r){s||(v(e.$$.fragment,r),s=!0)},o(r){D(e.$$.fragment,r),s=!1},d(r){De(e,r)}}}function Pe(i){let e,s,r,f,o,u,g;const _=i[30].default,h=ye(_,i,i[29],null);let d=i[19],a=[];for(let l=0;l<d.length;l+=1)a[l]=oe(le(i,d,l));const w=l=>D(a[l],1,1,()=>{a[l]=null});return{c(){e=ie("button"),s=ie("span"),h&&h.c(),r=ue(),f=S("svg");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=ne(l,"BUTTON",{style:!0,class:!0});var t=y(e);s=ne(t,"SPAN",{class:!0});var c=y(s);h&&h.l(c),c.forEach(m),r=ce(t),f=k(t,"svg",{class:!0});var z=y(f);for(let B=0;B<a.length;B+=1)a[B].l(z);z.forEach(m),t.forEach(m),this.h()},h(){b(s,"class","svelte-163hmn7"),b(f,"class","svelte-163hmn7"),e.disabled=i[16],p(e,"--color",i[2]),p(e,"--font-size",i[3]),p(e,"--bg-color",i[4]),p(e,"--bg-hover",i[5]),p(e,"--bg-active",i[6]),p(e,"--radius",i[8]),p(e,"--ripple",i[7]),p(e,"--height",i[9]+"px"),p(e,"--width",i[10]+"px"),p(e,"--shadow",i[20][i[13]]),p(e,"--shadow-h",i[20][i[14]]),p(e,"--shadow-a",i[20][i[15]]),b(e,"class","svelte-163hmn7")},m(l,t){M(l,e,t),A(e,s),h&&h.m(s,null),A(e,r),A(e,f);for(let c=0;c<a.length;c+=1)a[c].m(f,null);i[32](e),o=!0,u||(g=[J(e,"click",i[31]),J(e,"touchstart",i[21]),J(e,"mousedown",i[22])],u=!0)},p(l,t){if(h&&h.p&&(!o||t[0]&536870912)&&Be(h,_,l,l[29],o?Ce(_,l[29],t,null):Ie(l[29]),null),t[0]&530435){d=l[19];let c;for(c=0;c<d.length;c+=1){const z=le(l,d,c);a[c]?(a[c].p(z,t),v(a[c],1)):(a[c]=oe(z),a[c].c(),v(a[c],1),a[c].m(f,null))}for(Se(),c=d.length;c<a.length;c+=1)w(c);ke()}(!o||t[0]&65536)&&(e.disabled=l[16]),(!o||t[0]&4)&&p(e,"--color",l[2]),(!o||t[0]&8)&&p(e,"--font-size",l[3]),(!o||t[0]&16)&&p(e,"--bg-color",l[4]),(!o||t[0]&32)&&p(e,"--bg-hover",l[5]),(!o||t[0]&64)&&p(e,"--bg-active",l[6]),(!o||t[0]&256)&&p(e,"--radius",l[8]),(!o||t[0]&128)&&p(e,"--ripple",l[7]),(!o||t[0]&512)&&p(e,"--height",l[9]+"px"),(!o||t[0]&1024)&&p(e,"--width",l[10]+"px"),(!o||t[0]&8192)&&p(e,"--shadow",l[20][l[13]]),(!o||t[0]&16384)&&p(e,"--shadow-h",l[20][l[14]]),(!o||t[0]&32768)&&p(e,"--shadow-a",l[20][l[15]])},i(l){if(!o){v(h,l);for(let t=0;t<d.length;t+=1)v(a[t]);o=!0}},o(l){D(h,l),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)D(a[t]);o=!1},d(l){l&&m(e),h&&h.d(l),ve(a,l),i[32](null),u=!1,Ae(g)}}}function Fe(i,e,s){let r,f=Q,o=()=>(f(),f=Ge(I,n=>s(19,r=n)),I);i.$$.on_destroy.push(()=>f());let{$$slots:u={},$$scope:g}=e,{rippleBlur:_=0,speed:h=900,color:d="#fff",fontSize:a=".875rem",bgColor:w="74, 64, 212",bgHover:l=w,bgActive:t=w,rippleColor:c="#838de7",round:z="0.2rem",height:B=36,width:U=140,sizeIn:W=20,opacityIn:j=.5,shadow:K=5,shadowHover:L=5,shadowActive:V=2,disabled:Z=!1}=e,pe={none:"none",1:"0 0 0 1px rgba(0, 0, 0, 0.05)",2:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",3:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",4:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",5:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",6:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",7:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};function ge(){const n=Xe([]);return{subscribe:n.subscribe,add:F=>{n.update(ze=>[...ze,F])},clear:()=>{n.update(()=>[])}}}const I=ge();o();let G,C,H,E,R,T,X,Y,O,q,N,x,$={x:50,y:50};const be=()=>{clearTimeout(x),x=setTimeout(()=>{I.clear()},h+h*2)};let P;function ee(n,F){F=="touch"?(P=!0,I.add({x:n.pageX-q,y:n.pageY-O,size:N})):(P||I.add({x:n.clientX-q,y:n.clientY-O,size:N}),P=!1),be()}he(()=>{s(23,H=C.offsetWidth),s(24,E=C.offsetHeight),G=C.getBoundingClientRect(),O=G.y,q=G.x});function _e(n){ee(n.touches[0],"touch")}function de(n){ee(n,"click")}function me(n){Re.call(this,i,n)}function we(n){Te[n?"unshift":"push"](()=>{C=n,s(18,C)})}return i.$$set=n=>{"rippleBlur"in n&&s(0,_=n.rippleBlur),"speed"in n&&s(1,h=n.speed),"color"in n&&s(2,d=n.color),"fontSize"in n&&s(3,a=n.fontSize),"bgColor"in n&&s(4,w=n.bgColor),"bgHover"in n&&s(5,l=n.bgHover),"bgActive"in n&&s(6,t=n.bgActive),"rippleColor"in n&&s(7,c=n.rippleColor),"round"in n&&s(8,z=n.round),"height"in n&&s(9,B=n.height),"width"in n&&s(10,U=n.width),"sizeIn"in n&&s(11,W=n.sizeIn),"opacityIn"in n&&s(12,j=n.opacityIn),"shadow"in n&&s(13,K=n.shadow),"shadowHover"in n&&s(14,L=n.shadowHover),"shadowActive"in n&&s(15,V=n.shadowActive),"disabled"in n&&s(16,Z=n.disabled),"$$scope"in n&&s(29,g=n.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&528482304&&(s(25,R=Math.abs(H/2-$.x)),s(26,T=Math.abs(E/2-$.y)),s(27,X=H/2+R),s(28,Y=E/2+T),N=Math.sqrt(Math.pow(X,2.2)+Math.pow(Y,2.2)))},[_,h,d,a,w,l,t,c,z,B,U,W,j,K,L,V,Z,I,C,r,pe,_e,de,H,E,R,T,X,Y,g,u,me,we]}class We extends re{constructor(e){super(),ae(this,e,Fe,Pe,fe,{rippleBlur:0,speed:1,color:2,fontSize:3,bgColor:4,bgHover:5,bgActive:6,rippleColor:7,round:8,height:9,width:10,sizeIn:11,opacityIn:12,shadow:13,shadowHover:14,shadowActive:15,disabled:16,ripples:17},null,[-1,-1])}get ripples(){return this.$$.ctx[17]}}export{We as B};