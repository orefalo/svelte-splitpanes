import{S as re,i as fe,s as ue,a3 as C,a as ce,a4 as S,d as I,g as m,f as he,h as p,j as M,k as H,K as j,v as ge,a5 as ie,q as se,a6 as Be,c as ye,_ as ne,e as le,b as te,W as g,F as W,u as ke,l as Ce,m as Se,n as A,T as Ae,V as He,o as T,$ as ve,G as Ee,P as Me,Q as Te,R as Ge,U as Xe,a7 as Ye,a8 as De,C as Oe,z as Re}from"./external.DZLUqJ0z.js";function qe(n){let e,i,a,f,o;return{c(){e=C("defs"),i=C("filter"),a=C("feGaussianBlur"),f=ce(),o=C("circle"),this.h()},l(c){e=S(c,"defs",{});var b=I(e);i=S(b,"filter",{id:!0,x:!0,y:!0});var _=I(i);a=S(_,"feGaussianBlur",{in:!0,stdDeviation:!0}),I(a).forEach(m),_.forEach(m),b.forEach(m),f=he(c),o=S(c,"circle",{cx:!0,cy:!0,r:!0,opacity:!0,filter:!0,class:!0}),I(o).forEach(m),this.h()},h(){p(a,"in","SourceGraphic"),p(a,"stdDeviation",n[2]),p(i,"id","f1"),p(i,"x","0"),p(i,"y","0"),p(o,"cx",n[0]),p(o,"cy",n[1]),p(o,"r",n[3]),p(o,"opacity",n[4]),p(o,"filter","url(#f1)"),p(o,"class","svelte-bu5axf")},m(c,b){M(c,e,b),H(e,i),H(i,a),M(c,f,b),M(c,o,b)},p(c,[b]){b&4&&p(a,"stdDeviation",c[2]),b&1&&p(o,"cx",c[0]),b&2&&p(o,"cy",c[1]),b&8&&p(o,"r",c[3]),b&16&&p(o,"opacity",c[4])},i:j,o:j,d(c){c&&(m(e),m(f),m(o))}}}function Ne(n,e,i){let a,f,{x:o,y:c,sizeIn:b,size:_,speed:h,rippleBlur:d,opacityIn:r}=e;ge(()=>{t.set(0),w.set(_)});const w=ie(b,{duration:h});se(n,w,l=>i(3,a=l));const t=ie(r,{duration:h+h*2.5,easing:Be});return se(n,t,l=>i(4,f=l)),n.$$set=l=>{"x"in l&&i(0,o=l.x),"y"in l&&i(1,c=l.y),"sizeIn"in l&&i(7,b=l.sizeIn),"size"in l&&i(8,_=l.size),"speed"in l&&i(9,h=l.speed),"rippleBlur"in l&&i(2,d=l.rippleBlur),"opacityIn"in l&&i(10,r=l.opacityIn)},[o,c,d,a,f,w,t,b,_,h,r]}class Pe extends re{constructor(e){super(),fe(this,e,Ne,qe,ue,{x:0,y:1,sizeIn:7,size:8,speed:9,rippleBlur:2,opacityIn:10})}}function oe(n,e,i){const a=n.slice();return a[43]=e[i],a}function ae(n){let e,i;return e=new Pe({props:{x:n[43].x,y:n[43].y,size:n[43].size,speed:n[1],sizeIn:n[11],opacityIn:n[12],rippleBlur:n[0]}}),{c(){Me(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,f){Ge(e,a,f),i=!0},p(a,f){const o={};f[0]&524288&&(o.x=a[43].x),f[0]&524288&&(o.y=a[43].y),f[0]&524288&&(o.size=a[43].size),f[0]&2&&(o.speed=a[1]),f[0]&2048&&(o.sizeIn=a[11]),f[0]&4096&&(o.opacityIn=a[12]),f[0]&1&&(o.rippleBlur=a[0]),e.$set(o)},i(a){i||(A(e.$$.fragment,a),i=!0)},o(a){T(e.$$.fragment,a),i=!1},d(a){Xe(e,a)}}}function Ue(n){let e,i,a,f,o,c,b;const _=n[30].default,h=ye(_,n,n[29],null);let d=ne(n[19]),r=[];for(let t=0;t<d.length;t+=1)r[t]=ae(oe(n,d,t));const w=t=>T(r[t],1,1,()=>{r[t]=null});return{c(){e=le("button"),i=le("span"),h&&h.c(),a=ce(),f=C("svg");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=te(t,"BUTTON",{style:!0,class:!0});var l=I(e);i=te(l,"SPAN",{class:!0});var u=I(i);h&&h.l(u),u.forEach(m),a=he(l),f=S(l,"svg",{class:!0});var z=I(f);for(let B=0;B<r.length;B+=1)r[B].l(z);z.forEach(m),l.forEach(m),this.h()},h(){p(i,"class","svelte-wm8m3k"),p(f,"class","svelte-wm8m3k"),e.disabled=n[16],g(e,"--color",n[2]),g(e,"--font-size",n[3]),g(e,"--bg-color",n[4]),g(e,"--bg-hover",n[5]),g(e,"--bg-active",n[6]),g(e,"--radius",n[8]),g(e,"--ripple",n[7]),g(e,"--height",n[9]+"px"),g(e,"--width",n[10]+"px"),g(e,"--shadow",n[20][n[13]]),g(e,"--shadow-h",n[20][n[14]]),g(e,"--shadow-a",n[20][n[15]]),p(e,"class","svelte-wm8m3k")},m(t,l){M(t,e,l),H(e,i),h&&h.m(i,null),H(e,a),H(e,f);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(f,null);n[32](e),o=!0,c||(b=[W(e,"click",n[31]),W(e,"touchstart",n[21]),W(e,"mousedown",n[22])],c=!0)},p(t,l){if(h&&h.p&&(!o||l[0]&536870912)&&ke(h,_,t,t[29],o?Se(_,t[29],l,null):Ce(t[29]),null),l[0]&530435){d=ne(t[19]);let u;for(u=0;u<d.length;u+=1){const z=oe(t,d,u);r[u]?(r[u].p(z,l),A(r[u],1)):(r[u]=ae(z),r[u].c(),A(r[u],1),r[u].m(f,null))}for(Ae(),u=d.length;u<r.length;u+=1)w(u);He()}(!o||l[0]&65536)&&(e.disabled=t[16]),(!o||l[0]&4)&&g(e,"--color",t[2]),(!o||l[0]&8)&&g(e,"--font-size",t[3]),(!o||l[0]&16)&&g(e,"--bg-color",t[4]),(!o||l[0]&32)&&g(e,"--bg-hover",t[5]),(!o||l[0]&64)&&g(e,"--bg-active",t[6]),(!o||l[0]&256)&&g(e,"--radius",t[8]),(!o||l[0]&128)&&g(e,"--ripple",t[7]),(!o||l[0]&512)&&g(e,"--height",t[9]+"px"),(!o||l[0]&1024)&&g(e,"--width",t[10]+"px"),(!o||l[0]&8192)&&g(e,"--shadow",t[20][t[13]]),(!o||l[0]&16384)&&g(e,"--shadow-h",t[20][t[14]]),(!o||l[0]&32768)&&g(e,"--shadow-a",t[20][t[15]])},i(t){if(!o){A(h,t);for(let l=0;l<d.length;l+=1)A(r[l]);o=!0}},o(t){T(h,t),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)T(r[l]);o=!1},d(t){t&&m(e),h&&h.d(t),ve(r,t),n[32](null),c=!1,Ee(b)}}}function We(n,e,i){let a,f=j,o=()=>(f(),f=Ye(y,s=>i(19,a=s)),y);n.$$.on_destroy.push(()=>f());let{$$slots:c={},$$scope:b}=e,{rippleBlur:_=0,speed:h=900,color:d="#fff",fontSize:r=".875rem",bgColor:w="74, 64, 212",bgHover:t=w,bgActive:l=w,rippleColor:u="#838de7",round:z="0.2rem",height:B=36,width:F=140,sizeIn:K=20,opacityIn:Q=.5,shadow:V=5,shadowHover:J=5,shadowActive:L=2,disabled:Z=!1}=e;const be={none:"none",1:"0 0 0 1px rgba(0, 0, 0, 0.05)",2:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",3:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",4:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",5:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",6:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",7:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};function pe(){const s=Re([]);return{subscribe:s.subscribe,add:U=>{s.update(Ie=>[...Ie,U])},clear:()=>{s.update(()=>[])}}}const y=pe();o();let G,k,v,E,X,Y,D,O,R,q,N,x;const $={x:50,y:50},_e=()=>{clearTimeout(x),x=setTimeout(()=>{y.clear()},h+h*2)};let P;function ee(s,U){U=="touch"?(P=!0,y.add({x:s.pageX-q,y:s.pageY-R,size:N})):(P||y.add({x:s.clientX-q,y:s.clientY-R,size:N}),P=!1),_e()}ge(()=>{i(23,v=k.offsetWidth),i(24,E=k.offsetHeight),G=k.getBoundingClientRect(),R=G.top,q=G.left});function de(s){ee(s.touches[0],"touch")}function me(s){ee(s,"click")}function we(s){De.call(this,n,s)}function ze(s){Oe[s?"unshift":"push"](()=>{k=s,i(18,k)})}return n.$$set=s=>{"rippleBlur"in s&&i(0,_=s.rippleBlur),"speed"in s&&i(1,h=s.speed),"color"in s&&i(2,d=s.color),"fontSize"in s&&i(3,r=s.fontSize),"bgColor"in s&&i(4,w=s.bgColor),"bgHover"in s&&i(5,t=s.bgHover),"bgActive"in s&&i(6,l=s.bgActive),"rippleColor"in s&&i(7,u=s.rippleColor),"round"in s&&i(8,z=s.round),"height"in s&&i(9,B=s.height),"width"in s&&i(10,F=s.width),"sizeIn"in s&&i(11,K=s.sizeIn),"opacityIn"in s&&i(12,Q=s.opacityIn),"shadow"in s&&i(13,V=s.shadow),"shadowHover"in s&&i(14,J=s.shadowHover),"shadowActive"in s&&i(15,L=s.shadowActive),"disabled"in s&&i(16,Z=s.disabled),"$$scope"in s&&i(29,b=s.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&528482304&&(i(25,X=Math.abs(v/2-$.x)),i(26,Y=Math.abs(E/2-$.y)),i(27,D=v/2+X),i(28,O=E/2+Y),N=Math.sqrt(Math.pow(D,2.2)+Math.pow(O,2.2)))},[_,h,d,r,w,t,l,u,z,B,F,K,Q,V,J,L,Z,y,k,a,be,de,me,v,E,X,Y,D,O,b,c,we,ze]}class Fe extends re{constructor(e){super(),fe(this,e,We,Ue,ue,{rippleBlur:0,speed:1,color:2,fontSize:3,bgColor:4,bgHover:5,bgActive:6,rippleColor:7,round:8,height:9,width:10,sizeIn:11,opacityIn:12,shadow:13,shadowHover:14,shadowActive:15,disabled:16,ripples:17},null,[-1,-1])}get ripples(){return this.$$.ctx[17]}}export{Fe as B};