import{S as te,i as se,s as le,P as _e,e as S,t as P,k as v,w as H,c as z,a as k,h as E,d as p,m as d,x as N,g as m,J as c,y as R,q as I,o as A,B as T,b as G,O as V,l as ke,Q as qe,R as Ye,T as Xe,v as Kt,U as Ft,V as qt,W as ss,F as ls,f as F,X as Pt,L as ns,M as rs,N as as,n as Et,p as yt,Y as is,Z as fs,D as ps,_ as os,$ as kt,j as Ve,a0 as us,a1 as es,a2 as ts,a3 as Gt}from"../chunks/vendor-a5413b4a.js";import{S as ie,P as Y}from"../chunks/Pane-dfd5fd89.js";function $s(i){let e,l,t,s,r,a;return{c(){e=S("span"),l=P(`1
			`),t=S("br"),s=v(),r=S("em"),a=P("I have a min height of 20% & max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);l=E(f,`1
			`),t=z(f,"BR",{}),s=d(f),r=z(f,"EM",{class:!0});var u=k(r);a=E(u,"I have a min height of 20% & max height of 70%"),u.forEach(p),f.forEach(p),this.h()},h(){G(r,"class","specs")},m(n,f){m(n,e,f),c(e,l),c(e,t),c(e,s),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function ms(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function cs(i){let e,l,t,s,r,a;return{c(){e=S("span"),l=P(`3

			`),t=S("br"),s=v(),r=S("em"),a=P("I have a max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);l=E(f,`3

			`),t=z(f,"BR",{}),s=d(f),r=z(f,"EM",{class:!0});var u=k(r);a=E(u,"I have a max height of 70%"),u.forEach(p),f.forEach(p),this.h()},h(){G(r,"class","specs")},m(n,f){m(n,e,f),c(e,l),c(e,t),c(e,s),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function hs(i){let e,l,t,s,r,a;return e=new Y({props:{minSize:"20",maxSize:"70",$$slots:{default:[$s]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[ms]},$$scope:{ctx:i}}}),r=new Y({props:{maxSize:"70",$$slots:{default:[cs]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function _s(i){let e,l,t,s,r,a,n,f=!1+"",u,o,h,g,_,w,L;return g=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[hs]},$$scope:{ctx:i}}}),w=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Horizontal layout, push other panes, min & max use, doubleclick"),t=v(),s=S("p"),r=P("You can double click a splitter to maximize the next pane!"),a=S("br"),n=P(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=P(f),o=P("."),h=v(),H(g.$$.fragment),_=v(),H(w.$$.fragment)},l(b){e=z(b,"H2",{});var x=k(e);l=E(x,"Horizontal layout, push other panes, min & max use, doubleclick"),x.forEach(p),t=d(b),s=z(b,"P",{});var y=k(s);r=E(y,"You can double click a splitter to maximize the next pane!"),a=z(y,"BR",{}),n=E(y,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=E(y,f),o=E(y,"."),y.forEach(p),h=d(b),N(g.$$.fragment,b),_=d(b),N(w.$$.fragment,b)},m(b,x){m(b,e,x),c(e,l),m(b,t,x),m(b,s,x),c(s,r),c(s,a),c(s,n),c(s,u),c(s,o),m(b,h,x),R(g,b,x),m(b,_,x),R(w,b,x),L=!0},p(b,[x]){const y={};x&2&&(y.$$scope={dirty:x,ctx:b}),g.$set(y)},i(b){L||(I(g.$$.fragment,b),I(w.$$.fragment,b),L=!0)},o(b){A(g.$$.fragment,b),A(w.$$.fragment,b),L=!1},d(b){b&&p(e),b&&p(t),b&&p(s),b&&p(h),T(g,b),b&&p(_),T(w,b)}}}function gs(i){return[`
<Splitpanes class="default-theme" horizontal={true} style="height: 400px">
    <Pane minSize="20" maxSize="70">
        <span>1
            <br />
            <em class="specs">I have a min height of 20% &amp; max height of 70%</em>
        </span>
    </Pane>
    <Pane>
        <span>2</span>
    </Pane>
    <Pane maxSize="70">
        <span
            >3

            <br />
            <em class="specs">I have a max height of 70%</em>
        </span>
    </Pane>
</Splitpanes>`]}class bs extends te{constructor(e){super();se(this,e,gs,_s,le,{})}}function vs(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ds(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ws(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ss(i){let e,l,t,s,r,a;return e=new Y({props:{size:"65",$$slots:{default:[vs]},$$scope:{ctx:i}}}),t=new Y({props:{size:"10",$$slots:{default:[ds]},$$scope:{ctx:i}}}),r=new Y({props:{size:"25",$$slots:{default:[ws]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function zs(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,L,b;return _=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Ss]},$$scope:{ctx:i}}}),L=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Default pane size"),t=v(),s=S("p"),r=P(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=S("br"),n=v(),f=S("b"),u=P(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),o=S("br"),h=P(" Note that setting a default value is different than setting a min or max value."),g=v(),H(_.$$.fragment),w=v(),H(L.$$.fragment)},l(x){e=z(x,"H2",{});var y=k(e);l=E(y,"Default pane size"),y.forEach(p),t=d(x),s=z(x,"P",{});var D=k(s);r=E(D,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=z(D,"BR",{}),n=d(D),f=z(D,"B",{});var B=k(f);u=E(B,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),B.forEach(p),o=z(D,"BR",{}),h=E(D," Note that setting a default value is different than setting a min or max value."),D.forEach(p),g=d(x),N(_.$$.fragment,x),w=d(x),N(L.$$.fragment,x)},m(x,y){m(x,e,y),c(e,l),m(x,t,y),m(x,s,y),c(s,r),c(s,a),c(s,n),c(s,f),c(f,u),c(s,o),c(s,h),m(x,g,y),R(_,x,y),m(x,w,y),R(L,x,y),b=!0},p(x,[y]){const D={};y&2&&(D.$$scope={dirty:y,ctx:x}),_.$set(D)},i(x){b||(I(_.$$.fragment,x),I(L.$$.fragment,x),b=!0)},o(x){A(_.$$.fragment,x),A(L.$$.fragment,x),b=!1},d(x){x&&p(e),x&&p(t),x&&p(s),x&&p(g),T(_,x),x&&p(w),T(L,x)}}}function Ps(i){return[`
<Splitpanes class="default-theme" horizontal style="height: 400px">
    <Pane size="65">
        <span>1</span>
    </Pane>
    <Pane size="10">
        <span>2</span>
    </Pane>
    <Pane size="25">
        <span>3</span>
    </Pane>
</Splitpanes>`]}class Es extends te{constructor(e){super();se(this,e,Ps,zs,le,{})}}function ys(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ks(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function xs(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Is(i){let e,l;return{c(){e=S("span"),l=P("4")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"4"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function As(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[ks]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[xs]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Is]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function Bs(i){let e,l;return e=new ie({props:{$$slots:{default:[As]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Hs(i){let e,l;return{c(){e=S("span"),l=P("5")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"5"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ns(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[ys]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Bs]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Hs]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function Rs(i){let e,l,t,s,r,a,n;return s=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[Ns]},$$scope:{ctx:i}}}),a=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Locking layout by prevent pushing other panes"),t=v(),H(s.$$.fragment),r=v(),H(a.$$.fragment)},l(f){e=z(f,"H2",{});var u=k(e);l=E(u,"Locking layout by prevent pushing other panes"),u.forEach(p),t=d(f),N(s.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,u){m(f,e,u),c(e,l),m(f,t,u),R(s,f,u),m(f,r,u),R(a,f,u),n=!0},p(f,[u]){const o={};u&2&&(o.$$scope={dirty:u,ctx:f}),s.$set(o)},i(f){n||(I(s.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(s.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),T(s,f),f&&p(r),T(a,f)}}}function Ts(i){return[`
<Splitpanes class="default-theme" horizontal style="height: 400px" pushOtherPanes={false}>
    <Pane>
        <span>1</span>
    </Pane>
    <Pane>
        <Splitpanes pushOtherPanes={false}>
            <Pane>
                <span>2</span>
            </Pane>
            <Pane>
                <span>3</span>
            </Pane>
            <Pane>
                <span>4</span>
            </Pane>
        </Splitpanes>
    </Pane>
    <Pane>
        <span>5</span>
    </Pane>
</Splitpanes>`]}class Ls extends te{constructor(e){super();se(this,e,Ts,Rs,le,{})}}function Ms(i,e,l){const t=i.slice();return t[1]=e[l],t[3]=l,t}function Cs(i){let e,l=i[3]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=v()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function js(i){let e,l;return e=new Y({props:{minSize:"5",$$slots:{default:[Cs]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Ds(i){let e,l,t={length:8},s=[];for(let r=0;r<t.length;r+=1)s[r]=js(Ms(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function Os(i){let e,l,t,s,r,a,n;return s=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Ds]},$$scope:{ctx:i}}}),a=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Lots of splitters & push other panes - all panes have a min width of 5%"),t=v(),H(s.$$.fragment),r=v(),H(a.$$.fragment)},l(f){e=z(f,"H2",{});var u=k(e);l=E(u,"Lots of splitters & push other panes - all panes have a min width of 5%"),u.forEach(p),t=d(f),N(s.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,u){m(f,e,u),c(e,l),m(f,t,u),R(s,f,u),m(f,r,u),R(a,f,u),n=!0},p(f,[u]){const o={};u&16&&(o.$$scope={dirty:u,ctx:f}),s.$set(o)},i(f){n||(I(s.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(s.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),T(s,f),f&&p(r),T(a,f)}}}function Vs(i){return[`
<Splitpanes class="default-theme" style="height: 400px">
    {#each { length: 8 } as _, i}
        <Pane minSize="5">
            <span>{i + 1}</span>
        </Pane>
    {/each}
</Splitpanes>`]}class Ys extends te{constructor(e){super();se(this,e,Vs,Os,le,{})}}function Xs(i){let e,l,t,s,r;return{c(){e=Ye("defs"),l=Ye("filter"),t=Ye("feGaussianBlur"),s=v(),r=Ye("circle"),this.h()},l(a){e=Xe(a,"defs",{});var n=k(e);l=Xe(n,"filter",{id:!0,x:!0,y:!0});var f=k(l);t=Xe(f,"feGaussianBlur",{in:!0,stdDeviation:!0}),k(t).forEach(p),f.forEach(p),n.forEach(p),s=d(a),r=Xe(a,"circle",{cx:!0,cy:!0,r:!0,opacity:!0,filter:!0,class:!0}),k(r).forEach(p),this.h()},h(){G(t,"in","SourceGraphic"),G(t,"stdDeviation",i[2]),G(l,"id","f1"),G(l,"x","0"),G(l,"y","0"),G(r,"cx",i[0]),G(r,"cy",i[1]),G(r,"r",i[3]),G(r,"opacity",i[4]),G(r,"filter","url(#f1)"),G(r,"class","svelte-1lfi58h")},m(a,n){m(a,e,n),c(e,l),c(l,t),m(a,s,n),m(a,r,n)},p(a,[n]){n&4&&G(t,"stdDeviation",a[2]),n&1&&G(r,"cx",a[0]),n&2&&G(r,"cy",a[1]),n&8&&G(r,"r",a[3]),n&16&&G(r,"opacity",a[4])},i:V,o:V,d(a){a&&p(e),a&&p(s),a&&p(r)}}}function Fs(i,e,l){let t,s,{x:r,y:a,sizeIn:n,size:f,speed:u,rippleBlur:o,opacityIn:h}=e;Kt(()=>{_.set(0),g.set(f)});const g=Ft(n,{duration:u}),_=Ft(h,{duration:u+u*2.5,easing:ss});return qt(i,g,w=>l(3,t=w)),qt(i,_,w=>l(4,s=w)),i.$$set=w=>{"x"in w&&l(0,r=w.x),"y"in w&&l(1,a=w.y),"sizeIn"in w&&l(7,n=w.sizeIn),"size"in w&&l(8,f=w.size),"speed"in w&&l(9,u=w.speed),"rippleBlur"in w&&l(2,o=w.rippleBlur),"opacityIn"in w&&l(10,h=w.opacityIn)},[r,a,o,t,s,g,_,n,f,u,h]}class qs extends te{constructor(e){super();se(this,e,Fs,Xs,le,{x:0,y:1,sizeIn:7,size:8,speed:9,rippleBlur:2,opacityIn:10})}}function Ut(i,e,l){const t=i.slice();return t[47]=e[l],t[49]=l,t}function Wt(i){let e,l;return e=new qs({props:{x:i[47].x,y:i[47].y,size:i[47].size,speed:i[1],sizeIn:i[11],opacityIn:i[12],rippleBlur:i[0]}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s[0]&524288&&(r.x=t[47].x),s[0]&524288&&(r.y=t[47].y),s[0]&524288&&(r.size=t[47].size),s[0]&2&&(r.speed=t[1]),s[0]&2048&&(r.sizeIn=t[11]),s[0]&4096&&(r.opacityIn=t[12]),s[0]&1&&(r.rippleBlur=t[0]),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Gs(i){let e,l,t,s,r,a,n;const f=i[29].default,u=ls(f,i,i[28],null);let o=i[19],h=[];for(let _=0;_<o.length;_+=1)h[_]=Wt(Ut(i,o,_));const g=_=>A(h[_],1,1,()=>{h[_]=null});return{c(){e=S("button"),l=S("span"),u&&u.c(),t=v(),s=Ye("svg");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=z(_,"BUTTON",{style:!0,class:!0});var w=k(e);l=z(w,"SPAN",{class:!0});var L=k(l);u&&u.l(L),L.forEach(p),t=d(w),s=Xe(w,"svg",{class:!0});var b=k(s);for(let x=0;x<h.length;x+=1)h[x].l(b);b.forEach(p),w.forEach(p),this.h()},h(){G(l,"class","svelte-163hmn7"),G(s,"class","svelte-163hmn7"),e.disabled=i[16],F(e,"--color",i[2]),F(e,"--font-size",i[3]),F(e,"--bg-color",i[4]),F(e,"--bg-hover",i[5]),F(e,"--bg-active",i[6]),F(e,"--radius",i[8]),F(e,"--ripple",i[7]),F(e,"--height",i[9]+"px"),F(e,"--width",i[10]+"px"),F(e,"--shadow",i[20][i[13]]),F(e,"--shadow-h",i[20][i[14]]),F(e,"--shadow-a",i[20][i[15]]),G(e,"class","svelte-163hmn7")},m(_,w){m(_,e,w),c(e,l),u&&u.m(l,null),c(e,t),c(e,s);for(let L=0;L<h.length;L+=1)h[L].m(s,null);i[31](e),r=!0,a||(n=[Pt(e,"click",i[30]),Pt(e,"touchstart",i[32]),Pt(e,"mousedown",i[33])],a=!0)},p(_,w){if(u&&u.p&&(!r||w[0]&268435456)&&ns(u,f,_,_[28],r?as(f,_[28],w,null):rs(_[28]),null),w[0]&530435){o=_[19];let L;for(L=0;L<o.length;L+=1){const b=Ut(_,o,L);h[L]?(h[L].p(b,w),I(h[L],1)):(h[L]=Wt(b),h[L].c(),I(h[L],1),h[L].m(s,null))}for(Et(),L=o.length;L<h.length;L+=1)g(L);yt()}(!r||w[0]&65536)&&(e.disabled=_[16]),(!r||w[0]&4)&&F(e,"--color",_[2]),(!r||w[0]&8)&&F(e,"--font-size",_[3]),(!r||w[0]&16)&&F(e,"--bg-color",_[4]),(!r||w[0]&32)&&F(e,"--bg-hover",_[5]),(!r||w[0]&64)&&F(e,"--bg-active",_[6]),(!r||w[0]&256)&&F(e,"--radius",_[8]),(!r||w[0]&128)&&F(e,"--ripple",_[7]),(!r||w[0]&512)&&F(e,"--height",_[9]+"px"),(!r||w[0]&1024)&&F(e,"--width",_[10]+"px"),(!r||w[0]&8192)&&F(e,"--shadow",_[20][_[13]]),(!r||w[0]&16384)&&F(e,"--shadow-h",_[20][_[14]]),(!r||w[0]&32768)&&F(e,"--shadow-a",_[20][_[15]])},i(_){if(!r){I(u,_);for(let w=0;w<o.length;w+=1)I(h[w]);r=!0}},o(_){A(u,_),h=h.filter(Boolean);for(let w=0;w<h.length;w+=1)A(h[w]);r=!1},d(_){_&&p(e),u&&u.d(_),qe(h,_),i[31](null),a=!1,is(n)}}}function Us(i,e,l){let t,s=V,r=()=>(s(),s=fs(ne,M=>l(19,t=M)),ne);i.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:n}=e,{rippleBlur:f=0,speed:u=900,color:o="#fff",fontSize:h=".875rem",bgColor:g="74, 64, 212",bgHover:_=g,bgActive:w=g,rippleColor:L="#838de7",round:b="0.2rem",height:x=36,width:y=140,sizeIn:D=20,opacityIn:B=.5,shadow:O=5,shadowHover:K=5,shadowActive:J=2,disabled:ee=!1}=e,Pe={none:"none",1:"0 0 0 1px rgba(0, 0, 0, 0.05)",2:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",3:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",4:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",5:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",6:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",7:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};function fe(){const M=ps([]);return{subscribe:M.subscribe,add:de=>{M.update(Se=>[...Se,de])},clear:()=>{M.update(de=>[])}}}const ne=fe();r();let ge,Q,$e,pe,U,me,re,oe,ce,Z,ue,be,ae={x:50,y:50};const he=()=>{clearTimeout(be),be=setTimeout(()=>{ne.clear()},u+u*2)};let Ee;function we(M,de){de=="touch"?(Ee=!0,ne.add({x:M.pageX-Z,y:M.pageY-ce,size:ue})):(Ee||ne.add({x:M.clientX-Z,y:M.clientY-ce,size:ue}),Ee=!1),he()}Kt(()=>{l(22,$e=Q.offsetWidth),l(23,pe=Q.offsetHeight),ge=Q.getBoundingClientRect(),ce=ge.y,Z=ge.x});function C(M){os.call(this,i,M)}function W(M){kt[M?"unshift":"push"](()=>{Q=M,l(18,Q)})}const ve=M=>we(M.touches[0],"touch"),q=M=>we(M,"click");return i.$$set=M=>{"rippleBlur"in M&&l(0,f=M.rippleBlur),"speed"in M&&l(1,u=M.speed),"color"in M&&l(2,o=M.color),"fontSize"in M&&l(3,h=M.fontSize),"bgColor"in M&&l(4,g=M.bgColor),"bgHover"in M&&l(5,_=M.bgHover),"bgActive"in M&&l(6,w=M.bgActive),"rippleColor"in M&&l(7,L=M.rippleColor),"round"in M&&l(8,b=M.round),"height"in M&&l(9,x=M.height),"width"in M&&l(10,y=M.width),"sizeIn"in M&&l(11,D=M.sizeIn),"opacityIn"in M&&l(12,B=M.opacityIn),"shadow"in M&&l(13,O=M.shadow),"shadowHover"in M&&l(14,K=M.shadowHover),"shadowActive"in M&&l(15,J=M.shadowActive),"disabled"in M&&l(16,ee=M.disabled),"$$scope"in M&&l(28,n=M.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&264241152&&(l(24,U=Math.abs($e/2-ae.x)),l(25,me=Math.abs(pe/2-ae.y)),l(26,re=$e/2+U),l(27,oe=pe/2+me),ue=Math.sqrt(Math.pow(re,2.2)+Math.pow(oe,2.2)))},[f,u,o,h,g,_,w,L,b,x,y,D,B,O,K,J,ee,ne,Q,t,Pe,we,$e,pe,U,me,re,oe,n,a,C,W,ve,q]}class Fe extends te{constructor(e){super();se(this,e,Us,Gs,le,{rippleBlur:0,speed:1,color:2,fontSize:3,bgColor:4,bgHover:5,bgActive:6,rippleColor:7,round:8,height:9,width:10,sizeIn:11,opacityIn:12,shadow:13,shadowHover:14,shadowActive:15,disabled:16,ripples:17},null,[-1,-1])}get ripples(){return this.$$.ctx[17]}}function Jt(i,e,l){const t=i.slice();return t[4]=e[l],t[6]=l,t}function Ws(i){let e;return{c(){e=P("+ ADD PANE")},l(l){e=E(l,"+ ADD PANE")},m(l,t){m(l,e,t)},d(l){l&&p(e)}}}function Js(i){let e;return{c(){e=P("- REMOVE PANE")},l(l){e=E(l,"- REMOVE PANE")},m(l,t){m(l,e,t)},d(l){l&&p(e)}}}function Qs(i){let e,l=i[6]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=v()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function Qt(i){let e,l;return e=new Y({props:{minSize:"10",$$slots:{default:[Qs]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Zs(i){let e,l,t={length:i[0]},s=[];for(let a=0;a<t.length;a+=1)s[a]=Qt(Jt(i,t,a));const r=a=>A(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ke()},l(a){for(let n=0;n<s.length;n+=1)s[n].l(a);e=ke()},m(a,n){for(let f=0;f<s.length;f+=1)s[f].m(a,n);m(a,e,n),l=!0},p(a,n){if(n&1){t={length:a[0]};let f;for(f=0;f<t.length;f+=1){const u=Jt(a,t,f);s[f]?(s[f].p(u,n),I(s[f],1)):(s[f]=Qt(u),s[f].c(),I(s[f],1),s[f].m(e.parentNode,e))}for(Et(),f=t.length;f<s.length;f+=1)r(f);yt()}},i(a){if(!l){for(let n=0;n<t.length;n+=1)I(s[n]);l=!0}},o(a){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)A(s[n]);l=!1},d(a){qe(s,a),a&&p(e)}}}function Ks(i){let e,l,t,s,r,a,n,f,u,o,h;return s=new Fe({props:{$$slots:{default:[Ws]},$$scope:{ctx:i}}}),s.$on("click",i[2]),a=new Fe({props:{disabled:i[0]<=0,$$slots:{default:[Js]},$$scope:{ctx:i}}}),a.$on("click",i[3]),f=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Zs]},$$scope:{ctx:i}}}),o=new _e({props:{code:i[1]}}),{c(){e=S("h2"),l=P("Adding splitters programmatically"),t=v(),H(s.$$.fragment),r=v(),H(a.$$.fragment),n=v(),H(f.$$.fragment),u=v(),H(o.$$.fragment)},l(g){e=z(g,"H2",{});var _=k(e);l=E(_,"Adding splitters programmatically"),_.forEach(p),t=d(g),N(s.$$.fragment,g),r=d(g),N(a.$$.fragment,g),n=d(g),N(f.$$.fragment,g),u=d(g),N(o.$$.fragment,g)},m(g,_){m(g,e,_),c(e,l),m(g,t,_),R(s,g,_),m(g,r,_),R(a,g,_),m(g,n,_),R(f,g,_),m(g,u,_),R(o,g,_),h=!0},p(g,[_]){const w={};_&128&&(w.$$scope={dirty:_,ctx:g}),s.$set(w);const L={};_&1&&(L.disabled=g[0]<=0),_&128&&(L.$$scope={dirty:_,ctx:g}),a.$set(L);const b={};_&129&&(b.$$scope={dirty:_,ctx:g}),f.$set(b)},i(g){h||(I(s.$$.fragment,g),I(a.$$.fragment,g),I(f.$$.fragment,g),I(o.$$.fragment,g),h=!0)},o(g){A(s.$$.fragment,g),A(a.$$.fragment,g),A(f.$$.fragment,g),A(o.$$.fragment,g),h=!1},d(g){g&&p(e),g&&p(t),T(s,g),g&&p(r),T(a,g),g&&p(n),T(f,g),g&&p(u),T(o,g)}}}function el(i,e,l){let t=3;return[t,`
<script>
    let panesNumber = 3;
<\/script>    
<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={panesNumber <= 0}
	on:click={() => {
		if (panesNumber > 0) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize="10">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`,()=>{t>=0&&l(0,t++,t)},()=>{t>0&&l(0,t--,t)}]}class tl extends te{constructor(e){super();se(this,e,el,Ks,le,{})}}function sl(i,e,l){const t=i.slice();return t[5]=e[l],t[7]=l,t}function ll(i){let e=i[0]?"Turn to Vertical":"Turn to Horizontal",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&1&&e!==(e=t[0]?"Turn to Vertical":"Turn to Horizontal")&&Ve(l,e)},d(t){t&&p(l)}}}function nl(i){let e=i[1]?"Hide first splitter":"Show first Splitter",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&2&&e!==(e=t[1]?"Hide first splitter":"Show first Splitter")&&Ve(l,e)},d(t){t&&p(l)}}}function rl(i){let e,l=i[7]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=v()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function al(i){let e,l;return e=new Y({props:{minSize:"5",$$slots:{default:[rl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&256&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function il(i){let e,l,t={length:3},s=[];for(let r=0;r<t.length;r+=1)s[r]=al(sl(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function fl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,L,b,x,y,D;return g=new Fe({props:{$$slots:{default:[ll]},$$scope:{ctx:i}}}),g.$on("click",i[3]),w=new Fe({props:{$$slots:{default:[nl]},$$scope:{ctx:i}}}),w.$on("click",i[4]),b=new ie({props:{class:"default-theme",style:"height: 400px",firstSplitter:i[1],horizontal:i[0],$$slots:{default:[il]},$$scope:{ctx:i}}}),y=new _e({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Change orientation & first splitter"),t=v(),s=S("p"),r=P("When changing direction, all the panes current width or height will flip to adapt to the new layout."),a=v(),n=S("p"),f=P("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),u=S("br"),o=P(`
	The first splitter does not allow to resize the next pane.`),h=v(),H(g.$$.fragment),_=v(),H(w.$$.fragment),L=v(),H(b.$$.fragment),x=v(),H(y.$$.fragment)},l(B){e=z(B,"H2",{});var O=k(e);l=E(O,"Change orientation & first splitter"),O.forEach(p),t=d(B),s=z(B,"P",{});var K=k(s);r=E(K,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),K.forEach(p),a=d(B),n=z(B,"P",{});var J=k(n);f=E(J,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),u=z(J,"BR",{}),o=E(J,`
	The first splitter does not allow to resize the next pane.`),J.forEach(p),h=d(B),N(g.$$.fragment,B),_=d(B),N(w.$$.fragment,B),L=d(B),N(b.$$.fragment,B),x=d(B),N(y.$$.fragment,B)},m(B,O){m(B,e,O),c(e,l),m(B,t,O),m(B,s,O),c(s,r),m(B,a,O),m(B,n,O),c(n,f),c(n,u),c(n,o),m(B,h,O),R(g,B,O),m(B,_,O),R(w,B,O),m(B,L,O),R(b,B,O),m(B,x,O),R(y,B,O),D=!0},p(B,[O]){const K={};O&257&&(K.$$scope={dirty:O,ctx:B}),g.$set(K);const J={};O&258&&(J.$$scope={dirty:O,ctx:B}),w.$set(J);const ee={};O&2&&(ee.firstSplitter=B[1]),O&1&&(ee.horizontal=B[0]),O&256&&(ee.$$scope={dirty:O,ctx:B}),b.$set(ee)},i(B){D||(I(g.$$.fragment,B),I(w.$$.fragment,B),I(b.$$.fragment,B),I(y.$$.fragment,B),D=!0)},o(B){A(g.$$.fragment,B),A(w.$$.fragment,B),A(b.$$.fragment,B),A(y.$$.fragment,B),D=!1},d(B){B&&p(e),B&&p(t),B&&p(s),B&&p(a),B&&p(n),B&&p(h),T(g,B),B&&p(_),T(w,B),B&&p(L),T(b,B),B&&p(x),T(y,B)}}}function pl(i,e,l){let t=!1,s=!1;return[t,s,`
<script>
	let horizontal = false;
	let firstSplitter = false;
<\/script>
<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button
>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button
>
<Splitpanes class="default-theme" style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize="5">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`,()=>{l(0,t=!t)},()=>{l(1,s=!s)}]}class ol extends te{constructor(e){super();se(this,e,pl,fl,le,{})}}function ul(i){let e,l=i[0][0]+"",t,s;return{c(){e=S("span"),t=P(l),s=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),s=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,s)},p(r,a){a&1&&l!==(l=r[0][0]+"")&&Ve(t,l)},d(r){r&&p(e)}}}function $l(i){let e,l=100-i[0][0]+"",t,s;return{c(){e=S("span"),t=P(l),s=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),s=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,s)},p(r,a){a&1&&l!==(l=100-r[0][0]+"")&&Ve(t,l)},d(r){r&&p(e)}}}function ml(i){let e,l,t,s;return e=new Y({props:{size:i[0][0]+"",$$slots:{default:[ul]},$$scope:{ctx:i}}}),t=new Y({props:{size:100-i[0][0]+"",$$slots:{default:[$l]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment)},l(r){N(e.$$.fragment,r),l=d(r),N(t.$$.fragment,r)},m(r,a){R(e,r,a),m(r,l,a),R(t,r,a),s=!0},p(r,a){const n={};a&1&&(n.size=r[0][0]+""),a&9&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&1&&(f.size=100-r[0][0]+""),a&9&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){s||(I(e.$$.fragment,r),I(t.$$.fragment,r),s=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),s=!1},d(r){T(e,r),r&&p(l),T(t,r)}}}function cl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_;function w(b){i[2](b)}let L={float:!0,min:0,max:100};return i[0]!==void 0&&(L.values=i[0]),n=new us({props:L}),kt.push(()=>es(n,"values",w)),o=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[ml]},$$scope:{ctx:i}}}),g=new _e({props:{code:i[1]}}),{c(){e=S("h2"),l=P("Programmatic resizing"),t=v(),s=S("p"),r=P("This example shows the programmatic way of resizing panes. And how it works both ways."),a=v(),H(n.$$.fragment),u=v(),H(o.$$.fragment),h=v(),H(g.$$.fragment)},l(b){e=z(b,"H2",{});var x=k(e);l=E(x,"Programmatic resizing"),x.forEach(p),t=d(b),s=z(b,"P",{});var y=k(s);r=E(y,"This example shows the programmatic way of resizing panes. And how it works both ways."),y.forEach(p),a=d(b),N(n.$$.fragment,b),u=d(b),N(o.$$.fragment,b),h=d(b),N(g.$$.fragment,b)},m(b,x){m(b,e,x),c(e,l),m(b,t,x),m(b,s,x),c(s,r),m(b,a,x),R(n,b,x),m(b,u,x),R(o,b,x),m(b,h,x),R(g,b,x),_=!0},p(b,[x]){const y={};!f&&x&1&&(f=!0,y.values=b[0],ts(()=>f=!1)),n.$set(y);const D={};x&9&&(D.$$scope={dirty:x,ctx:b}),o.$set(D)},i(b){_||(I(n.$$.fragment,b),I(o.$$.fragment,b),I(g.$$.fragment,b),_=!0)},o(b){A(n.$$.fragment,b),A(o.$$.fragment,b),A(g.$$.fragment,b),_=!1},d(b){b&&p(e),b&&p(t),b&&p(s),b&&p(a),T(n,b),b&&p(u),T(o,b),b&&p(h),T(g,b)}}}function hl(i,e,l){let t=[50],s=`
<script>
    let value = [50, 100];
<\/script>
<Slider bind:value />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane size={value[0] + ''}>
		<span>{value[0]}%</span>
	</Pane>
	<Pane size={100 - value[0] + ''}>
		<span>{100 - value[0]}%</span>
	</Pane>
</Splitpanes>`;function r(a){t=a,l(0,t)}return[t,s,r]}class _l extends te{constructor(e){super();se(this,e,hl,cl,le,{})}}function gl(i){let e=i[0]?"Hide":"Show",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&1&&e!==(e=t[0]?"Hide":"Show")&&Ve(l,e)},d(t){t&&p(l)}}}function bl(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Zt(i){let e,l;return e=new Y({props:{$$slots:{default:[vl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function vl(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function dl(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function wl(i){let e,l,t,s,r;e=new Y({props:{$$slots:{default:[bl]},$$scope:{ctx:i}}});let a=i[0]&&Zt(i);return s=new Y({props:{$$slots:{default:[dl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),a&&a.c(),t=v(),H(s.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),a&&a.l(n),t=d(n),N(s.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),a&&a.m(n,f),m(n,t,f),R(s,n,f),r=!0},p(n,f){const u={};f&8&&(u.$$scope={dirty:f,ctx:n}),e.$set(u),n[0]?a?f&1&&I(a,1):(a=Zt(n),a.c(),I(a,1),a.m(t.parentNode,t)):a&&(Et(),A(a,1,1,()=>{a=null}),yt());const o={};f&8&&(o.$$scope={dirty:f,ctx:n}),s.$set(o)},i(n){r||(I(e.$$.fragment,n),I(a),I(s.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),A(a),A(s.$$.fragment,n),r=!1},d(n){T(e,n),n&&p(l),a&&a.d(n),n&&p(t),T(s,n)}}}function Sl(i){let e,l,t,s,r,a,n,f,u;return s=new Fe({props:{$$slots:{default:[gl]},$$scope:{ctx:i}}}),s.$on("click",i[1]),a=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[wl]},$$scope:{ctx:i}}}),f=new _e({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Toggle a pane on/off"),t=v(),H(s.$$.fragment),r=v(),H(a.$$.fragment),n=v(),H(f.$$.fragment)},l(o){e=z(o,"H2",{});var h=k(e);l=E(h,"Toggle a pane on/off"),h.forEach(p),t=d(o),N(s.$$.fragment,o),r=d(o),N(a.$$.fragment,o),n=d(o),N(f.$$.fragment,o)},m(o,h){m(o,e,h),c(e,l),m(o,t,h),R(s,o,h),m(o,r,h),R(a,o,h),m(o,n,h),R(f,o,h),u=!0},p(o,[h]){const g={};h&9&&(g.$$scope={dirty:h,ctx:o}),s.$set(g);const _={};h&9&&(_.$$scope={dirty:h,ctx:o}),a.$set(_)},i(o){u||(I(s.$$.fragment,o),I(a.$$.fragment,o),I(f.$$.fragment,o),u=!0)},o(o){A(s.$$.fragment,o),A(a.$$.fragment,o),A(f.$$.fragment,o),u=!1},d(o){o&&p(e),o&&p(t),T(s,o),o&&p(r),T(a,o),o&&p(n),T(f,o)}}}function zl(i,e,l){function t(){l(0,s=!s)}let s=!0;return[s,t,`
<script>
let visible = true;

function onClick() {
    visible = !visible;
}
<\/script>
<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>
<Splitpanes class="default-theme" style="height: 400px">
    <Pane>
        <span>1</span>
    </Pane>
	{#if visible}
    <Pane>
        <span>2</span>
    </Pane>
	{/if}
    <Pane>
        <span>3</span>
    </Pane>
</Splitpanes>`]}class Pl extends te{constructor(e){super();se(this,e,zl,Sl,le,{})}}function El(i){let e,l,t=i[0]+`
`,s,r,a,n,f;return{c(){e=S("div"),l=S("pre"),s=P(t),r=v(),a=S("textarea"),this.h()},l(u){e=z(u,"DIV",{class:!0});var o=k(e);l=z(o,"PRE",{"aria-hidden":!0,style:!0,class:!0});var h=k(l);s=E(h,t),h.forEach(p),r=d(o),a=z(o,"TEXTAREA",{style:!0,class:!0}),k(a).forEach(p),o.forEach(p),this.h()},h(){G(l,"aria-hidden","true"),F(l,"min-height",i[2]),F(l,"max-height",i[1]),G(l,"class","svelte-1gm0t61"),a.readOnly=!0,F(a,"outline","none"),G(a,"class","svelte-1gm0t61"),G(e,"class","container svelte-1gm0t61")},m(u,o){m(u,e,o),c(e,l),c(l,s),c(e,r),c(e,a),Gt(a,i[0]),n||(f=Pt(a,"input",i[5]),n=!0)},p(u,[o]){o&1&&t!==(t=u[0]+`
`)&&Ve(s,t),o&4&&F(l,"min-height",u[2]),o&2&&F(l,"max-height",u[1]),o&1&&Gt(a,u[0])},i:V,o:V,d(u){u&&p(e),n=!1,f()}}}function yl(i,e,l){let t,s,{value:r=""}=e,{minRows:a=1}=e,{maxRows:n=40}=e;const f=h=>h.split(/\r?\n/);function u(h,g){const _=f(h);return _.length=g,_.reduce(function(L,b){return L+`
`+b})}function o(){r=this.value,l(0,r),l(4,n)}return i.$$set=h=>{"value"in h&&l(0,r=h.value),"minRows"in h&&l(3,a=h.minRows),"maxRows"in h&&l(4,n=h.maxRows)},i.$$.update=()=>{i.$$.dirty&17&&l(0,r=u(r,n)),i.$$.dirty&8&&l(2,t=`${1+a*1.2}em`),i.$$.dirty&16&&l(1,s=n?`${1+n*1.2}em`:"auto")},[r,s,t,a,n,o]}class kl extends te{constructor(e){super();se(this,e,yl,El,le,{value:0,minRows:3,maxRows:4})}}function xl(i,e,l){const t=i.slice();return t[4]=e[l],t[6]=l,t}function Il(i){let e,l=i[6]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=v()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function Al(i){let e,l;return e=new Y({props:{minSize:"10",$$slots:{default:[Il]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Bl(i){let e,l,t={length:3},s=[];for(let r=0;r<t.length;r+=1)s[r]=Al(xl(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function Hl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,L,b,x,y,D,B,O,K,J,ee,Pe,fe,ne,ge,Q,$e,pe,U,me,re,oe,ce,Z,ue,be,ae,he;U=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Bl]},$$scope:{ctx:i}}}),U.$on("ready",i[1]),U.$on("resize",i[1]),U.$on("resized",i[1]),U.$on("pane-click",i[1]),U.$on("pane-maximize",i[1]),U.$on("pane-add",i[1]),U.$on("pane-remove",i[1]),U.$on("splitter-click",i[1]);function Ee(C){i[3](C)}let we={minRows:4,maxRows:40};return i[0]!==void 0&&(we.value=i[0]),Z=new kl({props:we}),kt.push(()=>es(Z,"value",Ee)),ae=new _e({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Listening to emitted events"),t=v(),s=S("p"),r=P("Here is the list of events that are emitted from splitpanes:"),a=v(),n=S("ul"),f=S("li"),u=P("ready has no parameter and fires when splitpanes is ready"),o=v(),h=S("li"),g=P(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),_=v(),w=S("li"),L=P(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),b=v(),x=S("li"),y=P("pane-click returns the clicked pane object with its dimensions."),D=v(),B=S("li"),O=P("pane-maximize returns the maximized pane object with its dimensions."),K=v(),J=S("li"),ee=P("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),Pe=v(),fe=S("li"),ne=P(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ge=v(),Q=S("li"),$e=P(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),pe=v(),H(U.$$.fragment),me=v(),re=S("p"),oe=P("Try resizing panes and check the logs bellow."),ce=v(),H(Z.$$.fragment),be=v(),H(ae.$$.fragment)},l(C){e=z(C,"H2",{});var W=k(e);l=E(W,"Listening to emitted events"),W.forEach(p),t=d(C),s=z(C,"P",{});var ve=k(s);r=E(ve,"Here is the list of events that are emitted from splitpanes:"),ve.forEach(p),a=d(C),n=z(C,"UL",{});var q=k(n);f=z(q,"LI",{});var M=k(f);u=E(M,"ready has no parameter and fires when splitpanes is ready"),M.forEach(p),o=d(q),h=z(q,"LI",{});var de=k(h);g=E(de,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),de.forEach(p),_=d(q),w=z(q,"LI",{});var Se=k(w);L=E(Se,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),Se.forEach(p),b=d(q),x=z(q,"LI",{});var je=k(x);y=E(je,"pane-click returns the clicked pane object with its dimensions."),je.forEach(p),D=d(q),B=z(q,"LI",{});var De=k(B);O=E(De,"pane-maximize returns the maximized pane object with its dimensions."),De.forEach(p),K=d(q),J=z(q,"LI",{});var ye=k(J);ee=E(ye,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ye.forEach(p),Pe=d(q),fe=z(q,"LI",{});var Oe=k(fe);ne=E(Oe,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),Oe.forEach(p),ge=d(q),Q=z(q,"LI",{});var xe=k(Q);$e=E(xe,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),xe.forEach(p),q.forEach(p),pe=d(C),N(U.$$.fragment,C),me=d(C),re=z(C,"P",{});var ze=k(re);oe=E(ze,"Try resizing panes and check the logs bellow."),ze.forEach(p),ce=d(C),N(Z.$$.fragment,C),be=d(C),N(ae.$$.fragment,C)},m(C,W){m(C,e,W),c(e,l),m(C,t,W),m(C,s,W),c(s,r),m(C,a,W),m(C,n,W),c(n,f),c(f,u),c(n,o),c(n,h),c(h,g),c(n,_),c(n,w),c(w,L),c(n,b),c(n,x),c(x,y),c(n,D),c(n,B),c(B,O),c(n,K),c(n,J),c(J,ee),c(n,Pe),c(n,fe),c(fe,ne),c(n,ge),c(n,Q),c(Q,$e),m(C,pe,W),R(U,C,W),m(C,me,W),m(C,re,W),c(re,oe),m(C,ce,W),R(Z,C,W),m(C,be,W),R(ae,C,W),he=!0},p(C,[W]){const ve={};W&128&&(ve.$$scope={dirty:W,ctx:C}),U.$set(ve);const q={};!ue&&W&1&&(ue=!0,q.value=C[0],ts(()=>ue=!1)),Z.$set(q)},i(C){he||(I(U.$$.fragment,C),I(Z.$$.fragment,C),I(ae.$$.fragment,C),he=!0)},o(C){A(U.$$.fragment,C),A(Z.$$.fragment,C),A(ae.$$.fragment,C),he=!1},d(C){C&&p(e),C&&p(t),C&&p(s),C&&p(a),C&&p(n),C&&p(pe),T(U,C),C&&p(me),C&&p(re),C&&p(ce),T(Z,C),C&&p(be),T(ae,C)}}}function Nl(i,e,l){let t="// Event name: Event params   (Last event at the top)";function s(n){n.detail?l(0,t=n.type+" "+JSON.stringify(n.detail)+`
`+t):l(0,t=n.type+`
`+t)}let r=`
<script>
	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '
' + val;
		else val = event.type + '
' + val;
	}
<\/script>
<Splitpanes
	class="default-theme"
	style="height: 400px"
	on:ready={handleMessage}
	on:resize={handleMessage}
	on:resized={handleMessage}
	on:pane-click={handleMessage}
	on:pane-maximize={handleMessage}
	on:pane-add={handleMessage}
	on:pane-remove={handleMessage}
	on:splitter-click={handleMessage}
>
	{#each { length: 3 } as _, i}
		<Pane minSize="10">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
<p>Try resizing panes and check the logs bellow.</p>
<TextArea bind:value={val} minRows={4} maxRows={40} />    
`;function a(n){t=n,l(0,t)}return[t,s,r,a]}class Rl extends te{constructor(e){super();se(this,e,Nl,Hl,le,{})}}function Tl(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ll(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ml(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Cl(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[Tl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ll]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ml]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&4&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&4&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&4&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function jl(i){let e,l;return e=new ie({props:{theme:"my-theme",$$slots:{default:[Cl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Dl(i){let e,l,t;return{c(){e=S("em"),l=S("p"),t=P("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(s){e=z(s,"EM",{class:!0});var r=k(e);l=z(r,"P",{});var a=k(l);t=E(a,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),a.forEach(p),r.forEach(p),this.h()},h(){G(e,"class","specs")},m(s,r){m(s,e,r),c(e,l),c(l,t)},p:V,d(s){s&&p(e)}}}function Ol(i){let e,l,t,s;return e=new Y({props:{$$slots:{default:[jl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Dl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment)},l(r){N(e.$$.fragment,r),l=d(r),N(t.$$.fragment,r)},m(r,a){R(e,r,a),m(r,l,a),R(t,r,a),s=!0},p(r,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&4&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){s||(I(e.$$.fragment,r),I(t.$$.fragment,r),s=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),s=!1},d(r){T(e,r),r&&p(l),T(t,r)}}}function Vl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,L,b,x;return u=new _e({props:{code:i[1]}}),w=new ie({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Ol]},$$scope:{ctx:i}}}),b=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Styling Splitters"),t=v(),s=S("p"),r=P("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=S("br"),n=P("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),f=v(),H(u.$$.fragment),o=v(),h=S("p"),g=P('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),_=v(),H(w.$$.fragment),L=v(),H(b.$$.fragment)},l(y){e=z(y,"H2",{});var D=k(e);l=E(D,"Styling Splitters"),D.forEach(p),t=d(y),s=z(y,"P",{});var B=k(s);r=E(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=z(B,"BR",{}),n=E(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),B.forEach(p),f=d(y),N(u.$$.fragment,y),o=d(y),h=z(y,"P",{});var O=k(h);g=E(O,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),O.forEach(p),_=d(y),N(w.$$.fragment,y),L=d(y),N(b.$$.fragment,y)},m(y,D){m(y,e,D),c(e,l),m(y,t,D),m(y,s,D),c(s,r),c(s,a),c(s,n),m(y,f,D),R(u,y,D),m(y,o,D),m(y,h,D),c(h,g),m(y,_,D),R(w,y,D),m(y,L,D),R(b,y,D),x=!0},p(y,[D]){const B={};D&4&&(B.$$scope={dirty:D,ctx:y}),w.$set(B)},i(y){x||(I(u.$$.fragment,y),I(w.$$.fragment,y),I(b.$$.fragment,y),x=!0)},o(y){A(u.$$.fragment,y),A(w.$$.fragment,y),A(b.$$.fragment,y),x=!1},d(y){y&&p(e),y&&p(t),y&&p(s),y&&p(f),T(u,y),y&&p(o),y&&p(h),y&&p(_),T(w,y),y&&p(L),T(b,y)}}}function Yl(i){return[`
<Splitpanes theme="my-theme" horizontal style="height: 400px">
	<Pane>
		<Splitpanes theme="my-theme">
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<style global lang="scss">:global(.splitpanes.my-theme) :global(.splitpanes__pane) {
  background-color: #f8f8f8;
}
:global(.splitpanes.my-theme) :global(.splitpanes__splitter) {
  background-color: #ccc;
  position: relative;
}
:global(.splitpanes.my-theme) :global(.splitpanes__splitter:before) {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(255, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
}
:global(.splitpanes.my-theme) :global(.splitpanes__splitter:hover:before) {
  opacity: 1;
}

:global(.my-theme.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  left: -30px;
  right: -30px;
  height: 100%;
  cursor: col-resize;
}
:global(.my-theme.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
  top: -30px;
  bottom: -30px;
  width: 100%;
  cursor: row-resize;
}</style>
`,`
.splitpanes.default-theme {
    .splitpanes__pane {
        background-color: #f2f2f2;
    }
    .splitpanes__splitter {
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        flex-shrink: 0;
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: rgba(0, 0, 0, 0.15);
            transition: background-color 0.3s;
        }
        &:hover:before,
        &:hover:after {
            background-color: rgba(0, 0, 0, 0.25);
        }
        &:first-child {
            cursor: auto;
        }
    }
}
.default-theme {
    &.splitpanes .splitpanes .splitpanes__splitter {
        z-index: 1;
    }
    &.splitpanes--vertical > .splitpanes__splitter,
    .splitpanes--vertical > .splitpanes__splitter {
        width: 7px;
        border-left: 1px solid #eee;
        margin-left: -1px;
        cursor: col-resize;
        &:before,
        &:after {
            transform: translateY(-50%);
            width: 1px;
            height: 30px;
        }
        &:before {
            margin-left: -2px;
        }
        &:after {
            margin-left: 1px;
        }
    }
    &.splitpanes--horizontal > .splitpanes__splitter,
    .splitpanes--horizontal > .splitpanes__splitter {
        height: 7px;
        border-top: 1px solid #eee;
        margin-top: -1px;
        cursor: row-resize;
        &:before,
        &:after {
            transform: translateX(-50%);
            width: 30px;
            height: 1px;
        }
        &:before {
            margin-top: -2px;
        }
        &:after {
            margin-top: 1px;
        }
    }
}
`]}class Xl extends te{constructor(e){super();se(this,e,Yl,Vl,le,{})}}function Fl(i){let e,l;return{c(){e=S("p"),l=P("MenuBar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"MenuBar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ql(i){let e,l;return{c(){e=S("p"),l=P("ToolBar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"ToolBar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Gl(i){let e,l,t,s;return{c(){e=S("p"),l=P("Folder"),t=S("br"),s=P(`
					Try those -->`)},l(r){e=z(r,"P",{});var a=k(e);l=E(a,"Folder"),t=z(a,"BR",{}),s=E(a,`
					Try those -->`),a.forEach(p)},m(r,a){m(r,e,a),c(e,l),c(e,t),c(e,s)},p:V,d(r){r&&p(e)}}}function Ul(i){let e,l;return{c(){e=S("p"),l=P("Views")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"Views"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Wl(i){let e,l;return{c(){e=S("p"),l=P("Details")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"Details"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Jl(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[Gl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ul]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Wl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){R(e,n,f),m(n,l,f),R(t,n,f),m(n,s,f),R(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){T(e,n),n&&p(l),T(t,n),n&&p(s),T(r,n)}}}function Ql(i){let e,l;return e=new ie({props:{theme:"modern-theme",$$slots:{default:[Jl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){R(e,t,s),l=!0},p(t,s){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Zl(i){let e,l;return{c(){e=S("p"),l=P("statusbar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"statusbar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Kl(i){let e,l,t,s,r,a,n,f;return e=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Fl]},$$scope:{ctx:i}}}),t=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[ql]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ql]},$$scope:{ctx:i}}}),n=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Zl]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=v(),H(t.$$.fragment),s=v(),H(r.$$.fragment),a=v(),H(n.$$.fragment)},l(u){N(e.$$.fragment,u),l=d(u),N(t.$$.fragment,u),s=d(u),N(r.$$.fragment,u),a=d(u),N(n.$$.fragment,u)},m(u,o){R(e,u,o),m(u,l,o),R(t,u,o),m(u,s,o),R(r,u,o),m(u,a,o),R(n,u,o),f=!0},p(u,o){const h={};o&2&&(h.$$scope={dirty:o,ctx:u}),e.$set(h);const g={};o&2&&(g.$$scope={dirty:o,ctx:u}),t.$set(g);const _={};o&2&&(_.$$scope={dirty:o,ctx:u}),r.$set(_);const w={};o&2&&(w.$$scope={dirty:o,ctx:u}),n.$set(w)},i(u){f||(I(e.$$.fragment,u),I(t.$$.fragment,u),I(r.$$.fragment,u),I(n.$$.fragment,u),f=!0)},o(u){A(e.$$.fragment,u),A(t.$$.fragment,u),A(r.$$.fragment,u),A(n.$$.fragment,u),f=!1},d(u){T(e,u),u&&p(l),T(t,u),u&&p(s),T(r,u),u&&p(a),T(n,u)}}}function en(i){let e,l,t,s,r,a,n,f,u,o;return n=new ie({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[Kl]},$$scope:{ctx:i}}}),u=new _e({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Styling Splitters - Modern"),t=v(),s=S("p"),r=P(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),a=v(),H(n.$$.fragment),f=v(),H(u.$$.fragment)},l(h){e=z(h,"H2",{});var g=k(e);l=E(g,"Styling Splitters - Modern"),g.forEach(p),t=d(h),s=z(h,"P",{});var _=k(s);r=E(_,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),_.forEach(p),a=d(h),N(n.$$.fragment,h),f=d(h),N(u.$$.fragment,h)},m(h,g){m(h,e,g),c(e,l),m(h,t,g),m(h,s,g),c(s,r),m(h,a,g),R(n,h,g),m(h,f,g),R(u,h,g),o=!0},p(h,[g]){const _={};g&2&&(_.$$scope={dirty:g,ctx:h}),n.$set(_)},i(h){o||(I(n.$$.fragment,h),I(u.$$.fragment,h),o=!0)},o(h){A(n.$$.fragment,h),A(u.$$.fragment,h),o=!1},d(h){h&&p(e),h&&p(t),h&&p(s),h&&p(a),T(n,h),h&&p(f),T(u,h)}}}function tn(i){return[`
<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size="6" minSize="6" maxSize="6">
		<p>MenuBar</p>
	</Pane>
	<Pane size="6" minSize="6" maxSize="6">
		<p>ToolBar</p>
	</Pane>
	<Pane>
		<Splitpanes theme="modern-theme">
			<Pane>
				<p>
					Folder<br />
					Try those -->
				</p>
			</Pane>
			<Pane>
				<p>Views</p>
			</Pane>
			<Pane>
				<p>Details</p>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane size="6" minSize="6" maxSize="6">
		<p>statusbar</p>
	</Pane>
</Splitpanes>

<style global lang="scss">:global(.splitpanes.modern-theme) :global(.splitpanes__pane) {
  background-color: #f8f8f8;
}
:global(.splitpanes.modern-theme) :global(.splitpanes__splitter) {
  background-color: #ccc;
  position: relative;
}
:global(.splitpanes.modern-theme) :global(.splitpanes__splitter:before) {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: #2db9d2;
  opacity: 0;
  z-index: 1;
}
:global(.splitpanes.modern-theme) :global(.splitpanes__splitter:hover:before) {
  opacity: 1;
}

:global(.modern-theme.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  left: -3px;
  right: -3px;
  height: 100%;
  cursor: col-resize;
}
:global(.modern-theme.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
  top: -3px;
  bottom: -3px;
  width: 100%;
  cursor: row-resize;
}

:global(.splitpanes.no-splitter) :global(.splitpanes__pane) {
  background-color: #f8f8f8;
}
:global(.splitpanes.no-splitter) :global(.splitpanes__splitter) {
  background-color: #ccc;
  position: relative;
}

:global(.no-splitter.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
  width: 0.125rem;
  pointer-events: none;
  cursor: none;
}
:global(.no-splitter.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  height: 0.125rem;
  pointer-events: none;
  cursor: none;
}</style>
`]}class sn extends te{constructor(e){super();se(this,e,tn,en,le,{})}}function ln(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,L,b,x,y,D,B,O,K,J,ee,Pe,fe,ne,ge,Q,$e,pe,U,me,re,oe,ce,Z,ue,be,ae,he,Ee,we,C,W,ve,q,M,de,Se,je,De,ye,Oe,xe,ze,Ge,Ue,We,Ie,Je,Qe,Ze,Ae,Ke,et,tt,Be,st,lt,nt,He,rt,at,it,Ne,ft,pt,ot,Re,ut,$t,mt,Te,ct,ht,_t,Le,gt,bt,vt,Me,dt,wt,St,Ce,zt;return ze=new bs({}),Ie=new Es({}),Ae=new Ls({}),Be=new Ys({}),He=new tl({}),Ne=new ol({}),Re=new _l({}),Te=new Pl({}),Le=new Rl({}),Me=new Xl({}),Ce=new sn({}),{c(){e=S("h1"),l=P("Svelte-Splitpane demo"),t=v(),s=S("a"),r=P("https://github.com/orefalo/svelte-splitpanes"),a=v(),n=S("h2"),f=P("Features"),u=v(),o=S("ul"),h=S("li"),g=P("Size is less than 4 kb"),_=v(),w=S("li"),L=P("Support both dynamic horizontal and vertical splits"),b=v(),x=S("li"),y=P("Support defaults, min and max sizes"),D=v(),B=S("li"),O=P("Support multiple splits"),K=v(),J=S("li"),ee=P("Support lifecyle events"),Pe=v(),fe=S("li"),ne=P("Support custom divider size or overlay"),ge=v(),Q=S("li"),$e=P("Support splitter pane pushing"),pe=v(),U=S("li"),me=P("Support RTL rendering with auto-detection"),re=v(),oe=S("li"),ce=P("Support first splitter on/off"),Z=v(),ue=S("li"),be=P("Support pane toggle"),ae=v(),he=S("li"),Ee=P("Support programmatic resizing"),we=v(),C=S("li"),W=P("Support programmatic splitter add/remove"),ve=v(),q=S("li"),M=P("Support for legacy browser such as IE 11"),de=v(),Se=S("li"),je=P("Support for touch devices"),De=v(),ye=S("li"),Oe=P("Sveltekit & Typescript friendly"),xe=v(),H(ze.$$.fragment),Ge=v(),Ue=S("hr"),We=v(),H(Ie.$$.fragment),Je=v(),Qe=S("hr"),Ze=v(),H(Ae.$$.fragment),Ke=v(),et=S("hr"),tt=v(),H(Be.$$.fragment),st=v(),lt=S("hr"),nt=v(),H(He.$$.fragment),rt=v(),at=S("hr"),it=v(),H(Ne.$$.fragment),ft=v(),pt=S("hr"),ot=v(),H(Re.$$.fragment),ut=v(),$t=S("hr"),mt=v(),H(Te.$$.fragment),ct=v(),ht=S("hr"),_t=v(),H(Le.$$.fragment),gt=v(),bt=S("hr"),vt=v(),H(Me.$$.fragment),dt=v(),wt=S("hr"),St=v(),H(Ce.$$.fragment),this.h()},l($){e=z($,"H1",{});var j=k(e);l=E(j,"Svelte-Splitpane demo"),j.forEach(p),t=d($),s=z($,"A",{href:!0});var xt=k(s);r=E(xt,"https://github.com/orefalo/svelte-splitpanes"),xt.forEach(p),a=d($),n=z($,"H2",{});var It=k(n);f=E(It,"Features"),It.forEach(p),u=d($),o=z($,"UL",{});var X=k(o);h=z(X,"LI",{});var At=k(h);g=E(At,"Size is less than 4 kb"),At.forEach(p),_=d(X),w=z(X,"LI",{});var Bt=k(w);L=E(Bt,"Support both dynamic horizontal and vertical splits"),Bt.forEach(p),b=d(X),x=z(X,"LI",{});var Ht=k(x);y=E(Ht,"Support defaults, min and max sizes"),Ht.forEach(p),D=d(X),B=z(X,"LI",{});var Nt=k(B);O=E(Nt,"Support multiple splits"),Nt.forEach(p),K=d(X),J=z(X,"LI",{});var Rt=k(J);ee=E(Rt,"Support lifecyle events"),Rt.forEach(p),Pe=d(X),fe=z(X,"LI",{});var Tt=k(fe);ne=E(Tt,"Support custom divider size or overlay"),Tt.forEach(p),ge=d(X),Q=z(X,"LI",{});var Lt=k(Q);$e=E(Lt,"Support splitter pane pushing"),Lt.forEach(p),pe=d(X),U=z(X,"LI",{});var Mt=k(U);me=E(Mt,"Support RTL rendering with auto-detection"),Mt.forEach(p),re=d(X),oe=z(X,"LI",{});var Ct=k(oe);ce=E(Ct,"Support first splitter on/off"),Ct.forEach(p),Z=d(X),ue=z(X,"LI",{});var jt=k(ue);be=E(jt,"Support pane toggle"),jt.forEach(p),ae=d(X),he=z(X,"LI",{});var Dt=k(he);Ee=E(Dt,"Support programmatic resizing"),Dt.forEach(p),we=d(X),C=z(X,"LI",{});var Ot=k(C);W=E(Ot,"Support programmatic splitter add/remove"),Ot.forEach(p),ve=d(X),q=z(X,"LI",{});var Vt=k(q);M=E(Vt,"Support for legacy browser such as IE 11"),Vt.forEach(p),de=d(X),Se=z(X,"LI",{});var Yt=k(Se);je=E(Yt,"Support for touch devices"),Yt.forEach(p),De=d(X),ye=z(X,"LI",{});var Xt=k(ye);Oe=E(Xt,"Sveltekit & Typescript friendly"),Xt.forEach(p),X.forEach(p),xe=d($),N(ze.$$.fragment,$),Ge=d($),Ue=z($,"HR",{}),We=d($),N(Ie.$$.fragment,$),Je=d($),Qe=z($,"HR",{}),Ze=d($),N(Ae.$$.fragment,$),Ke=d($),et=z($,"HR",{}),tt=d($),N(Be.$$.fragment,$),st=d($),lt=z($,"HR",{}),nt=d($),N(He.$$.fragment,$),rt=d($),at=z($,"HR",{}),it=d($),N(Ne.$$.fragment,$),ft=d($),pt=z($,"HR",{}),ot=d($),N(Re.$$.fragment,$),ut=d($),$t=z($,"HR",{}),mt=d($),N(Te.$$.fragment,$),ct=d($),ht=z($,"HR",{}),_t=d($),N(Le.$$.fragment,$),gt=d($),bt=z($,"HR",{}),vt=d($),N(Me.$$.fragment,$),dt=d($),wt=z($,"HR",{}),St=d($),N(Ce.$$.fragment,$),this.h()},h(){G(s,"href","https://github.com/orefalo/svelte-splitpanes")},m($,j){m($,e,j),c(e,l),m($,t,j),m($,s,j),c(s,r),m($,a,j),m($,n,j),c(n,f),m($,u,j),m($,o,j),c(o,h),c(h,g),c(o,_),c(o,w),c(w,L),c(o,b),c(o,x),c(x,y),c(o,D),c(o,B),c(B,O),c(o,K),c(o,J),c(J,ee),c(o,Pe),c(o,fe),c(fe,ne),c(o,ge),c(o,Q),c(Q,$e),c(o,pe),c(o,U),c(U,me),c(o,re),c(o,oe),c(oe,ce),c(o,Z),c(o,ue),c(ue,be),c(o,ae),c(o,he),c(he,Ee),c(o,we),c(o,C),c(C,W),c(o,ve),c(o,q),c(q,M),c(o,de),c(o,Se),c(Se,je),c(o,De),c(o,ye),c(ye,Oe),m($,xe,j),R(ze,$,j),m($,Ge,j),m($,Ue,j),m($,We,j),R(Ie,$,j),m($,Je,j),m($,Qe,j),m($,Ze,j),R(Ae,$,j),m($,Ke,j),m($,et,j),m($,tt,j),R(Be,$,j),m($,st,j),m($,lt,j),m($,nt,j),R(He,$,j),m($,rt,j),m($,at,j),m($,it,j),R(Ne,$,j),m($,ft,j),m($,pt,j),m($,ot,j),R(Re,$,j),m($,ut,j),m($,$t,j),m($,mt,j),R(Te,$,j),m($,ct,j),m($,ht,j),m($,_t,j),R(Le,$,j),m($,gt,j),m($,bt,j),m($,vt,j),R(Me,$,j),m($,dt,j),m($,wt,j),m($,St,j),R(Ce,$,j),zt=!0},p:V,i($){zt||(I(ze.$$.fragment,$),I(Ie.$$.fragment,$),I(Ae.$$.fragment,$),I(Be.$$.fragment,$),I(He.$$.fragment,$),I(Ne.$$.fragment,$),I(Re.$$.fragment,$),I(Te.$$.fragment,$),I(Le.$$.fragment,$),I(Me.$$.fragment,$),I(Ce.$$.fragment,$),zt=!0)},o($){A(ze.$$.fragment,$),A(Ie.$$.fragment,$),A(Ae.$$.fragment,$),A(Be.$$.fragment,$),A(He.$$.fragment,$),A(Ne.$$.fragment,$),A(Re.$$.fragment,$),A(Te.$$.fragment,$),A(Le.$$.fragment,$),A(Me.$$.fragment,$),A(Ce.$$.fragment,$),zt=!1},d($){$&&p(e),$&&p(t),$&&p(s),$&&p(a),$&&p(n),$&&p(u),$&&p(o),$&&p(xe),T(ze,$),$&&p(Ge),$&&p(Ue),$&&p(We),T(Ie,$),$&&p(Je),$&&p(Qe),$&&p(Ze),T(Ae,$),$&&p(Ke),$&&p(et),$&&p(tt),T(Be,$),$&&p(st),$&&p(lt),$&&p(nt),T(He,$),$&&p(rt),$&&p(at),$&&p(it),T(Ne,$),$&&p(ft),$&&p(pt),$&&p(ot),T(Re,$),$&&p(ut),$&&p($t),$&&p(mt),T(Te,$),$&&p(ct),$&&p(ht),$&&p(_t),T(Le,$),$&&p(gt),$&&p(bt),$&&p(vt),T(Me,$),$&&p(dt),$&&p(wt),$&&p(St),T(Ce,$)}}}class an extends te{constructor(e){super();se(this,e,null,ln,le,{})}}export{an as default};
