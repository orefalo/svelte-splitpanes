import{S as ee,i as te,s as se,P as he,e as S,t as P,k as b,w as R,c as z,a as k,h as E,d as p,m as d,x as N,g as m,J as c,y as T,q as I,o as A,B as L,b as q,O as V,l as ke,Q as qe,R as Ye,T as Xe,v as Kt,U as Ft,V as qt,W as ss,F as ls,f as F,X as Pt,L as ns,M as rs,N as as,n as Et,p as yt,Y as is,Z as fs,D as ps,_ as os,$ as kt,j as Ve,a0 as us,a1 as es,a2 as ts,a3 as Gt}from"../chunks/vendor-e09f8588.js";import{S as ie,P as Y}from"../chunks/Pane-57e3e9bd.js";function $s(i){let e,l,t,s,r,a;return{c(){e=S("span"),l=P(`1
			`),t=S("br"),s=b(),r=S("em"),a=P("I have a min height of 20% & max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);l=E(f,`1
			`),t=z(f,"BR",{}),s=d(f),r=z(f,"EM",{class:!0});var u=k(r);a=E(u,"I have a min height of 20% & max height of 70%"),u.forEach(p),f.forEach(p),this.h()},h(){q(r,"class","specs")},m(n,f){m(n,e,f),c(e,l),c(e,t),c(e,s),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function ms(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function cs(i){let e,l,t,s,r,a;return{c(){e=S("span"),l=P(`3

			`),t=S("br"),s=b(),r=S("em"),a=P("I have a max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);l=E(f,`3

			`),t=z(f,"BR",{}),s=d(f),r=z(f,"EM",{class:!0});var u=k(r);a=E(u,"I have a max height of 70%"),u.forEach(p),f.forEach(p),this.h()},h(){q(r,"class","specs")},m(n,f){m(n,e,f),c(e,l),c(e,t),c(e,s),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function hs(i){let e,l,t,s,r,a;return e=new Y({props:{minSize:"20",maxSize:"70",$$slots:{default:[$s]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[ms]},$$scope:{ctx:i}}}),r=new Y({props:{maxSize:"70",$$slots:{default:[cs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function _s(i){let e,l,t,s,r,a,n,f=!1+"",u,o,h,g,_,w,M;return g=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[hs]},$$scope:{ctx:i}}}),w=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Horizontal layout, push other panes, min & max use, doubleclick"),t=b(),s=S("p"),r=P("You can double click a splitter to maximize the next pane!"),a=S("br"),n=P(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=P(f),o=P("."),h=b(),R(g.$$.fragment),_=b(),R(w.$$.fragment)},l(v){e=z(v,"H2",{});var x=k(e);l=E(x,"Horizontal layout, push other panes, min & max use, doubleclick"),x.forEach(p),t=d(v),s=z(v,"P",{});var y=k(s);r=E(y,"You can double click a splitter to maximize the next pane!"),a=z(y,"BR",{}),n=E(y,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),u=E(y,f),o=E(y,"."),y.forEach(p),h=d(v),N(g.$$.fragment,v),_=d(v),N(w.$$.fragment,v)},m(v,x){m(v,e,x),c(e,l),m(v,t,x),m(v,s,x),c(s,r),c(s,a),c(s,n),c(s,u),c(s,o),m(v,h,x),T(g,v,x),m(v,_,x),T(w,v,x),M=!0},p(v,[x]){const y={};x&2&&(y.$$scope={dirty:x,ctx:v}),g.$set(y)},i(v){M||(I(g.$$.fragment,v),I(w.$$.fragment,v),M=!0)},o(v){A(g.$$.fragment,v),A(w.$$.fragment,v),M=!1},d(v){v&&p(e),v&&p(t),v&&p(s),v&&p(h),L(g,v),v&&p(_),L(w,v)}}}function gs(i){return[`
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
</Splitpanes>`]}class vs extends ee{constructor(e){super();te(this,e,gs,_s,se,{})}}function bs(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ds(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ws(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ss(i){let e,l,t,s,r,a;return e=new Y({props:{size:"65",$$slots:{default:[bs]},$$scope:{ctx:i}}}),t=new Y({props:{size:"10",$$slots:{default:[ds]},$$scope:{ctx:i}}}),r=new Y({props:{size:"25",$$slots:{default:[ws]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function zs(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,M,v;return _=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Ss]},$$scope:{ctx:i}}}),M=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Default pane size"),t=b(),s=S("p"),r=P(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=S("br"),n=b(),f=S("b"),u=P(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),o=S("br"),h=P(" Note that setting a default value is different than setting a min or max value."),g=b(),R(_.$$.fragment),w=b(),R(M.$$.fragment)},l(x){e=z(x,"H2",{});var y=k(e);l=E(y,"Default pane size"),y.forEach(p),t=d(x),s=z(x,"P",{});var D=k(s);r=E(D,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=z(D,"BR",{}),n=d(D),f=z(D,"B",{});var B=k(f);u=E(B,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),B.forEach(p),o=z(D,"BR",{}),h=E(D," Note that setting a default value is different than setting a min or max value."),D.forEach(p),g=d(x),N(_.$$.fragment,x),w=d(x),N(M.$$.fragment,x)},m(x,y){m(x,e,y),c(e,l),m(x,t,y),m(x,s,y),c(s,r),c(s,a),c(s,n),c(s,f),c(f,u),c(s,o),c(s,h),m(x,g,y),T(_,x,y),m(x,w,y),T(M,x,y),v=!0},p(x,[y]){const D={};y&2&&(D.$$scope={dirty:y,ctx:x}),_.$set(D)},i(x){v||(I(_.$$.fragment,x),I(M.$$.fragment,x),v=!0)},o(x){A(_.$$.fragment,x),A(M.$$.fragment,x),v=!1},d(x){x&&p(e),x&&p(t),x&&p(s),x&&p(g),L(_,x),x&&p(w),L(M,x)}}}function Ps(i){return[`
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
</Splitpanes>`]}class Es extends ee{constructor(e){super();te(this,e,Ps,zs,se,{})}}function ys(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ks(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function xs(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Is(i){let e,l;return{c(){e=S("span"),l=P("4")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"4"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function As(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[ks]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[xs]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Is]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function Bs(i){let e,l;return e=new ie({props:{$$slots:{default:[As]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Hs(i){let e,l;return{c(){e=S("span"),l=P("5")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"5"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Rs(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[ys]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Bs]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Hs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function Ns(i){let e,l,t,s,r,a,n;return s=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[Rs]},$$scope:{ctx:i}}}),a=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Locking layout by prevent pushing other panes"),t=b(),R(s.$$.fragment),r=b(),R(a.$$.fragment)},l(f){e=z(f,"H2",{});var u=k(e);l=E(u,"Locking layout by prevent pushing other panes"),u.forEach(p),t=d(f),N(s.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,u){m(f,e,u),c(e,l),m(f,t,u),T(s,f,u),m(f,r,u),T(a,f,u),n=!0},p(f,[u]){const o={};u&2&&(o.$$scope={dirty:u,ctx:f}),s.$set(o)},i(f){n||(I(s.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(s.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),L(s,f),f&&p(r),L(a,f)}}}function Ts(i){return[`
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
</Splitpanes>`]}class Ls extends ee{constructor(e){super();te(this,e,Ts,Ns,se,{})}}function Ms(i,e,l){const t=i.slice();return t[1]=e[l],t[3]=l,t}function Cs(i){let e,l=i[3]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function js(i){let e,l;return e=new Y({props:{minSize:"5",$$slots:{default:[Cs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ds(i){let e,l,t={length:8},s=[];for(let r=0;r<t.length;r+=1)s[r]=js(Ms(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function Os(i){let e,l,t,s,r,a,n;return s=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Ds]},$$scope:{ctx:i}}}),a=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Lots of splitters & push other panes - all panes have a min width of 5%"),t=b(),R(s.$$.fragment),r=b(),R(a.$$.fragment)},l(f){e=z(f,"H2",{});var u=k(e);l=E(u,"Lots of splitters & push other panes - all panes have a min width of 5%"),u.forEach(p),t=d(f),N(s.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,u){m(f,e,u),c(e,l),m(f,t,u),T(s,f,u),m(f,r,u),T(a,f,u),n=!0},p(f,[u]){const o={};u&16&&(o.$$scope={dirty:u,ctx:f}),s.$set(o)},i(f){n||(I(s.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(s.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),L(s,f),f&&p(r),L(a,f)}}}function Vs(i){return[`
<Splitpanes class="default-theme" style="height: 400px">
    {#each { length: 8 } as _, i}
        <Pane minSize="5">
            <span>{i + 1}</span>
        </Pane>
    {/each}
</Splitpanes>`]}class Ys extends ee{constructor(e){super();te(this,e,Vs,Os,se,{})}}function Xs(i){let e,l,t,s,r;return{c(){e=Ye("defs"),l=Ye("filter"),t=Ye("feGaussianBlur"),s=b(),r=Ye("circle"),this.h()},l(a){e=Xe(a,"defs",{});var n=k(e);l=Xe(n,"filter",{id:!0,x:!0,y:!0});var f=k(l);t=Xe(f,"feGaussianBlur",{in:!0,stdDeviation:!0}),k(t).forEach(p),f.forEach(p),n.forEach(p),s=d(a),r=Xe(a,"circle",{cx:!0,cy:!0,r:!0,opacity:!0,filter:!0,class:!0}),k(r).forEach(p),this.h()},h(){q(t,"in","SourceGraphic"),q(t,"stdDeviation",i[2]),q(l,"id","f1"),q(l,"x","0"),q(l,"y","0"),q(r,"cx",i[0]),q(r,"cy",i[1]),q(r,"r",i[3]),q(r,"opacity",i[4]),q(r,"filter","url(#f1)"),q(r,"class","svelte-1lfi58h")},m(a,n){m(a,e,n),c(e,l),c(l,t),m(a,s,n),m(a,r,n)},p(a,[n]){n&4&&q(t,"stdDeviation",a[2]),n&1&&q(r,"cx",a[0]),n&2&&q(r,"cy",a[1]),n&8&&q(r,"r",a[3]),n&16&&q(r,"opacity",a[4])},i:V,o:V,d(a){a&&p(e),a&&p(s),a&&p(r)}}}function Fs(i,e,l){let t,s,{x:r,y:a,sizeIn:n,size:f,speed:u,rippleBlur:o,opacityIn:h}=e;Kt(()=>{_.set(0),g.set(f)});const g=Ft(n,{duration:u}),_=Ft(h,{duration:u+u*2.5,easing:ss});return qt(i,g,w=>l(3,t=w)),qt(i,_,w=>l(4,s=w)),i.$$set=w=>{"x"in w&&l(0,r=w.x),"y"in w&&l(1,a=w.y),"sizeIn"in w&&l(7,n=w.sizeIn),"size"in w&&l(8,f=w.size),"speed"in w&&l(9,u=w.speed),"rippleBlur"in w&&l(2,o=w.rippleBlur),"opacityIn"in w&&l(10,h=w.opacityIn)},[r,a,o,t,s,g,_,n,f,u,h]}class qs extends ee{constructor(e){super();te(this,e,Fs,Xs,se,{x:0,y:1,sizeIn:7,size:8,speed:9,rippleBlur:2,opacityIn:10})}}function Ut(i,e,l){const t=i.slice();return t[46]=e[l],t[48]=l,t}function Wt(i){let e,l;return e=new qs({props:{x:i[46].x,y:i[46].y,size:i[46].size,speed:i[1],sizeIn:i[11],opacityIn:i[12],rippleBlur:i[0]}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s[0]&262144&&(r.x=t[46].x),s[0]&262144&&(r.y=t[46].y),s[0]&262144&&(r.size=t[46].size),s[0]&2&&(r.speed=t[1]),s[0]&2048&&(r.sizeIn=t[11]),s[0]&4096&&(r.opacityIn=t[12]),s[0]&1&&(r.rippleBlur=t[0]),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Gs(i){let e,l,t,s,r,a,n;const f=i[28].default,u=ls(f,i,i[27],null);let o=i[18],h=[];for(let _=0;_<o.length;_+=1)h[_]=Wt(Ut(i,o,_));const g=_=>A(h[_],1,1,()=>{h[_]=null});return{c(){e=S("button"),l=S("span"),u&&u.c(),t=b(),s=Ye("svg");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=z(_,"BUTTON",{style:!0,class:!0});var w=k(e);l=z(w,"SPAN",{class:!0});var M=k(l);u&&u.l(M),M.forEach(p),t=d(w),s=Xe(w,"svg",{class:!0});var v=k(s);for(let x=0;x<h.length;x+=1)h[x].l(v);v.forEach(p),w.forEach(p),this.h()},h(){q(l,"class","svelte-c42aw5"),q(s,"class","svelte-c42aw5"),F(e,"--color",i[2]),F(e,"--font-size",i[3]),F(e,"--bg-color",i[4]),F(e,"--bg-hover",i[5]),F(e,"--bg-active",i[6]),F(e,"--radius",i[8]),F(e,"--ripple",i[7]),F(e,"--height",i[9]+"px"),F(e,"--width",i[10]+"px"),F(e,"--shadow",i[19][i[13]]),F(e,"--shadow-h",i[19][i[14]]),F(e,"--shadow-a",i[19][i[15]]),q(e,"class","svelte-c42aw5")},m(_,w){m(_,e,w),c(e,l),u&&u.m(l,null),c(e,t),c(e,s);for(let M=0;M<h.length;M+=1)h[M].m(s,null);i[30](e),r=!0,a||(n=[Pt(e,"click",i[29]),Pt(e,"touchstart",i[31]),Pt(e,"mousedown",i[32])],a=!0)},p(_,w){if(u&&u.p&&(!r||w[0]&134217728)&&ns(u,f,_,_[27],r?as(f,_[27],w,null):rs(_[27]),null),w[0]&268291){o=_[18];let M;for(M=0;M<o.length;M+=1){const v=Ut(_,o,M);h[M]?(h[M].p(v,w),I(h[M],1)):(h[M]=Wt(v),h[M].c(),I(h[M],1),h[M].m(s,null))}for(Et(),M=o.length;M<h.length;M+=1)g(M);yt()}(!r||w[0]&4)&&F(e,"--color",_[2]),(!r||w[0]&8)&&F(e,"--font-size",_[3]),(!r||w[0]&16)&&F(e,"--bg-color",_[4]),(!r||w[0]&32)&&F(e,"--bg-hover",_[5]),(!r||w[0]&64)&&F(e,"--bg-active",_[6]),(!r||w[0]&256)&&F(e,"--radius",_[8]),(!r||w[0]&128)&&F(e,"--ripple",_[7]),(!r||w[0]&512)&&F(e,"--height",_[9]+"px"),(!r||w[0]&1024)&&F(e,"--width",_[10]+"px"),(!r||w[0]&8192)&&F(e,"--shadow",_[19][_[13]]),(!r||w[0]&16384)&&F(e,"--shadow-h",_[19][_[14]]),(!r||w[0]&32768)&&F(e,"--shadow-a",_[19][_[15]])},i(_){if(!r){I(u,_);for(let w=0;w<o.length;w+=1)I(h[w]);r=!0}},o(_){A(u,_),h=h.filter(Boolean);for(let w=0;w<h.length;w+=1)A(h[w]);r=!1},d(_){_&&p(e),u&&u.d(_),qe(h,_),i[30](null),a=!1,is(n)}}}function Us(i,e,l){let t,s=V,r=()=>(s(),s=fs(J,H=>l(18,t=H)),J);i.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:n}=e,{rippleBlur:f=0,speed:u=900,color:o="#fff",fontSize:h=".875rem",bgColor:g="74, 64, 212",bgHover:_=g,bgActive:w=g,rippleColor:M="#838de7",round:v="0.2rem",height:x=36,width:y=140,sizeIn:D=20,opacityIn:B=.5,shadow:O=5,shadowHover:Z=5,shadowActive:W=2}=e,le={none:"none",1:"0 0 0 1px rgba(0, 0, 0, 0.05)",2:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",3:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",4:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",5:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",6:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",7:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};function we(){const H=ps([]);return{subscribe:H.subscribe,add:be=>{H.update(Pe=>[...Pe,be])},clear:()=>{H.update(be=>[])}}}const J=we();r();let _e,ne,K,oe,ue,G,$e,re,fe,me,Q,ce,ge={x:50,y:50};const pe=()=>{clearTimeout(ce),ce=setTimeout(()=>{J.clear()},u+u*2)};let ae;function Se(H,be){be=="touch"?(ae=!0,J.add({x:H.pageX-me,y:H.pageY-fe,size:Q})):(ae||J.add({x:H.clientX-me,y:H.clientY-fe,size:Q}),ae=!1),pe()}Kt(()=>{l(21,K=ne.offsetWidth),l(22,oe=ne.offsetHeight),_e=ne.getBoundingClientRect(),fe=_e.y,me=_e.x});function ze(H){os.call(this,i,H)}function C(H){kt[H?"unshift":"push"](()=>{ne=H,l(17,ne)})}const U=H=>Se(H.touches[0],"touch"),ve=H=>Se(H,"click");return i.$$set=H=>{"rippleBlur"in H&&l(0,f=H.rippleBlur),"speed"in H&&l(1,u=H.speed),"color"in H&&l(2,o=H.color),"fontSize"in H&&l(3,h=H.fontSize),"bgColor"in H&&l(4,g=H.bgColor),"bgHover"in H&&l(5,_=H.bgHover),"bgActive"in H&&l(6,w=H.bgActive),"rippleColor"in H&&l(7,M=H.rippleColor),"round"in H&&l(8,v=H.round),"height"in H&&l(9,x=H.height),"width"in H&&l(10,y=H.width),"sizeIn"in H&&l(11,D=H.sizeIn),"opacityIn"in H&&l(12,B=H.opacityIn),"shadow"in H&&l(13,O=H.shadow),"shadowHover"in H&&l(14,Z=H.shadowHover),"shadowActive"in H&&l(15,W=H.shadowActive),"$$scope"in H&&l(27,n=H.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&132120576&&(l(23,ue=Math.abs(K/2-ge.x)),l(24,G=Math.abs(oe/2-ge.y)),l(25,$e=K/2+ue),l(26,re=oe/2+G),Q=Math.sqrt(Math.pow($e,2.2)+Math.pow(re,2.2)))},[f,u,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,J,ne,t,le,Se,K,oe,ue,G,$e,re,n,a,ze,C,U,ve]}class Fe extends ee{constructor(e){super();te(this,e,Us,Gs,se,{rippleBlur:0,speed:1,color:2,fontSize:3,bgColor:4,bgHover:5,bgActive:6,rippleColor:7,round:8,height:9,width:10,sizeIn:11,opacityIn:12,shadow:13,shadowHover:14,shadowActive:15,ripples:16},null,[-1,-1])}get ripples(){return this.$$.ctx[16]}}function Jt(i,e,l){const t=i.slice();return t[4]=e[l],t[6]=l,t}function Ws(i){let e;return{c(){e=P("+ ADD PANE")},l(l){e=E(l,"+ ADD PANE")},m(l,t){m(l,e,t)},d(l){l&&p(e)}}}function Js(i){let e;return{c(){e=P("- REMOVE PANE")},l(l){e=E(l,"- REMOVE PANE")},m(l,t){m(l,e,t)},d(l){l&&p(e)}}}function Qs(i){let e,l=i[6]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function Qt(i){let e,l;return e=new Y({props:{minSize:"10",$$slots:{default:[Qs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Zs(i){let e,l,t={length:i[0]},s=[];for(let a=0;a<t.length;a+=1)s[a]=Qt(Jt(i,t,a));const r=a=>A(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ke()},l(a){for(let n=0;n<s.length;n+=1)s[n].l(a);e=ke()},m(a,n){for(let f=0;f<s.length;f+=1)s[f].m(a,n);m(a,e,n),l=!0},p(a,n){if(n&1){t={length:a[0]};let f;for(f=0;f<t.length;f+=1){const u=Jt(a,t,f);s[f]?(s[f].p(u,n),I(s[f],1)):(s[f]=Qt(u),s[f].c(),I(s[f],1),s[f].m(e.parentNode,e))}for(Et(),f=t.length;f<s.length;f+=1)r(f);yt()}},i(a){if(!l){for(let n=0;n<t.length;n+=1)I(s[n]);l=!0}},o(a){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)A(s[n]);l=!1},d(a){qe(s,a),a&&p(e)}}}function Ks(i){let e,l,t,s,r,a,n,f,u,o,h;return s=new Fe({props:{$$slots:{default:[Ws]},$$scope:{ctx:i}}}),s.$on("click",i[2]),a=new Fe({props:{$$slots:{default:[Js]},$$scope:{ctx:i}}}),a.$on("click",i[3]),f=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Zs]},$$scope:{ctx:i}}}),o=new he({props:{code:i[1]}}),{c(){e=S("h2"),l=P("Adding splitters programmatically"),t=b(),R(s.$$.fragment),r=b(),R(a.$$.fragment),n=b(),R(f.$$.fragment),u=b(),R(o.$$.fragment)},l(g){e=z(g,"H2",{});var _=k(e);l=E(_,"Adding splitters programmatically"),_.forEach(p),t=d(g),N(s.$$.fragment,g),r=d(g),N(a.$$.fragment,g),n=d(g),N(f.$$.fragment,g),u=d(g),N(o.$$.fragment,g)},m(g,_){m(g,e,_),c(e,l),m(g,t,_),T(s,g,_),m(g,r,_),T(a,g,_),m(g,n,_),T(f,g,_),m(g,u,_),T(o,g,_),h=!0},p(g,[_]){const w={};_&128&&(w.$$scope={dirty:_,ctx:g}),s.$set(w);const M={};_&128&&(M.$$scope={dirty:_,ctx:g}),a.$set(M);const v={};_&129&&(v.$$scope={dirty:_,ctx:g}),f.$set(v)},i(g){h||(I(s.$$.fragment,g),I(a.$$.fragment,g),I(f.$$.fragment,g),I(o.$$.fragment,g),h=!0)},o(g){A(s.$$.fragment,g),A(a.$$.fragment,g),A(f.$$.fragment,g),A(o.$$.fragment,g),h=!1},d(g){g&&p(e),g&&p(t),L(s,g),g&&p(r),L(a,g),g&&p(n),L(f,g),g&&p(u),L(o,g)}}}function el(i,e,l){let t=3;return[t,`
<script>
    let panesNumber = 3;
<\/script>    
<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
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
</Splitpanes>
<HighlightSvelte {code} />`,()=>{t>=0&&l(0,t++,t)},()=>{t>0&&l(0,t--,t)}]}class tl extends ee{constructor(e){super();te(this,e,el,Ks,se,{})}}function sl(i,e,l){const t=i.slice();return t[5]=e[l],t[7]=l,t}function ll(i){let e=i[0]?"Turn to Vertical":"Turn to Horizontal",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&1&&e!==(e=t[0]?"Turn to Vertical":"Turn to Horizontal")&&Ve(l,e)},d(t){t&&p(l)}}}function nl(i){let e=i[1]?"Hide first splitter":"Show first Splitter",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&2&&e!==(e=t[1]?"Hide first splitter":"Show first Splitter")&&Ve(l,e)},d(t){t&&p(l)}}}function rl(i){let e,l=i[7]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function al(i){let e,l;return e=new Y({props:{minSize:"5",$$slots:{default:[rl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&256&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function il(i){let e,l,t={length:3},s=[];for(let r=0;r<t.length;r+=1)s[r]=al(sl(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function fl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,M,v,x,y,D;return g=new Fe({props:{$$slots:{default:[ll]},$$scope:{ctx:i}}}),g.$on("click",i[3]),w=new Fe({props:{$$slots:{default:[nl]},$$scope:{ctx:i}}}),w.$on("click",i[4]),v=new ie({props:{class:"default-theme",style:"height: 400px",firstSplitter:i[1],horizontal:i[0],$$slots:{default:[il]},$$scope:{ctx:i}}}),y=new he({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Change orientation & first splitter"),t=b(),s=S("p"),r=P("When changing direction, all the panes current width or height will flip to adapt to the new layout."),a=b(),n=S("p"),f=P("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),u=S("br"),o=P(`
	The first splitter does not allow to resize the next pane.`),h=b(),R(g.$$.fragment),_=b(),R(w.$$.fragment),M=b(),R(v.$$.fragment),x=b(),R(y.$$.fragment)},l(B){e=z(B,"H2",{});var O=k(e);l=E(O,"Change orientation & first splitter"),O.forEach(p),t=d(B),s=z(B,"P",{});var Z=k(s);r=E(Z,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),Z.forEach(p),a=d(B),n=z(B,"P",{});var W=k(n);f=E(W,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),u=z(W,"BR",{}),o=E(W,`
	The first splitter does not allow to resize the next pane.`),W.forEach(p),h=d(B),N(g.$$.fragment,B),_=d(B),N(w.$$.fragment,B),M=d(B),N(v.$$.fragment,B),x=d(B),N(y.$$.fragment,B)},m(B,O){m(B,e,O),c(e,l),m(B,t,O),m(B,s,O),c(s,r),m(B,a,O),m(B,n,O),c(n,f),c(n,u),c(n,o),m(B,h,O),T(g,B,O),m(B,_,O),T(w,B,O),m(B,M,O),T(v,B,O),m(B,x,O),T(y,B,O),D=!0},p(B,[O]){const Z={};O&257&&(Z.$$scope={dirty:O,ctx:B}),g.$set(Z);const W={};O&258&&(W.$$scope={dirty:O,ctx:B}),w.$set(W);const le={};O&2&&(le.firstSplitter=B[1]),O&1&&(le.horizontal=B[0]),O&256&&(le.$$scope={dirty:O,ctx:B}),v.$set(le)},i(B){D||(I(g.$$.fragment,B),I(w.$$.fragment,B),I(v.$$.fragment,B),I(y.$$.fragment,B),D=!0)},o(B){A(g.$$.fragment,B),A(w.$$.fragment,B),A(v.$$.fragment,B),A(y.$$.fragment,B),D=!1},d(B){B&&p(e),B&&p(t),B&&p(s),B&&p(a),B&&p(n),B&&p(h),L(g,B),B&&p(_),L(w,B),B&&p(M),L(v,B),B&&p(x),L(y,B)}}}function pl(i,e,l){let t=!1,s=!1;return[t,s,`
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
</Splitpanes>`,()=>{l(0,t=!t)},()=>{l(1,s=!s)}]}class ol extends ee{constructor(e){super();te(this,e,pl,fl,se,{})}}function ul(i){let e,l=i[0][0]+"",t,s;return{c(){e=S("span"),t=P(l),s=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),s=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,s)},p(r,a){a&1&&l!==(l=r[0][0]+"")&&Ve(t,l)},d(r){r&&p(e)}}}function $l(i){let e,l=100-i[0][0]+"",t,s;return{c(){e=S("span"),t=P(l),s=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),s=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,s)},p(r,a){a&1&&l!==(l=100-r[0][0]+"")&&Ve(t,l)},d(r){r&&p(e)}}}function ml(i){let e,l,t,s;return e=new Y({props:{size:i[0][0]+"",$$slots:{default:[ul]},$$scope:{ctx:i}}}),t=new Y({props:{size:100-i[0][0]+"",$$slots:{default:[$l]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment)},l(r){N(e.$$.fragment,r),l=d(r),N(t.$$.fragment,r)},m(r,a){T(e,r,a),m(r,l,a),T(t,r,a),s=!0},p(r,a){const n={};a&1&&(n.size=r[0][0]+""),a&9&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&1&&(f.size=100-r[0][0]+""),a&9&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){s||(I(e.$$.fragment,r),I(t.$$.fragment,r),s=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),s=!1},d(r){L(e,r),r&&p(l),L(t,r)}}}function cl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_;function w(v){i[2](v)}let M={float:!0,min:0,max:100};return i[0]!==void 0&&(M.values=i[0]),n=new us({props:M}),kt.push(()=>es(n,"values",w)),o=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[ml]},$$scope:{ctx:i}}}),g=new he({props:{code:i[1]}}),{c(){e=S("h2"),l=P("Programmatic resizing"),t=b(),s=S("p"),r=P("This example shows the programmatic way of resizing panes. And how it works both ways."),a=b(),R(n.$$.fragment),u=b(),R(o.$$.fragment),h=b(),R(g.$$.fragment)},l(v){e=z(v,"H2",{});var x=k(e);l=E(x,"Programmatic resizing"),x.forEach(p),t=d(v),s=z(v,"P",{});var y=k(s);r=E(y,"This example shows the programmatic way of resizing panes. And how it works both ways."),y.forEach(p),a=d(v),N(n.$$.fragment,v),u=d(v),N(o.$$.fragment,v),h=d(v),N(g.$$.fragment,v)},m(v,x){m(v,e,x),c(e,l),m(v,t,x),m(v,s,x),c(s,r),m(v,a,x),T(n,v,x),m(v,u,x),T(o,v,x),m(v,h,x),T(g,v,x),_=!0},p(v,[x]){const y={};!f&&x&1&&(f=!0,y.values=v[0],ts(()=>f=!1)),n.$set(y);const D={};x&9&&(D.$$scope={dirty:x,ctx:v}),o.$set(D)},i(v){_||(I(n.$$.fragment,v),I(o.$$.fragment,v),I(g.$$.fragment,v),_=!0)},o(v){A(n.$$.fragment,v),A(o.$$.fragment,v),A(g.$$.fragment,v),_=!1},d(v){v&&p(e),v&&p(t),v&&p(s),v&&p(a),L(n,v),v&&p(u),L(o,v),v&&p(h),L(g,v)}}}function hl(i,e,l){let t=[50],s=`
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
</Splitpanes>`;function r(a){t=a,l(0,t)}return[t,s,r]}class _l extends ee{constructor(e){super();te(this,e,hl,cl,se,{})}}function gl(i){let e=i[0]?"Hide":"Show",l;return{c(){l=P(e)},l(t){l=E(t,e)},m(t,s){m(t,l,s)},p(t,s){s&1&&e!==(e=t[0]?"Hide":"Show")&&Ve(l,e)},d(t){t&&p(l)}}}function vl(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Zt(i){let e,l;return e=new Y({props:{$$slots:{default:[bl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function bl(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function dl(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function wl(i){let e,l,t,s,r;e=new Y({props:{$$slots:{default:[vl]},$$scope:{ctx:i}}});let a=i[0]&&Zt(i);return s=new Y({props:{$$slots:{default:[dl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),a&&a.c(),t=b(),R(s.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),a&&a.l(n),t=d(n),N(s.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),a&&a.m(n,f),m(n,t,f),T(s,n,f),r=!0},p(n,f){const u={};f&8&&(u.$$scope={dirty:f,ctx:n}),e.$set(u),n[0]?a?f&1&&I(a,1):(a=Zt(n),a.c(),I(a,1),a.m(t.parentNode,t)):a&&(Et(),A(a,1,1,()=>{a=null}),yt());const o={};f&8&&(o.$$scope={dirty:f,ctx:n}),s.$set(o)},i(n){r||(I(e.$$.fragment,n),I(a),I(s.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),A(a),A(s.$$.fragment,n),r=!1},d(n){L(e,n),n&&p(l),a&&a.d(n),n&&p(t),L(s,n)}}}function Sl(i){let e,l,t,s,r,a,n,f,u;return s=new Fe({props:{$$slots:{default:[gl]},$$scope:{ctx:i}}}),s.$on("click",i[1]),a=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[wl]},$$scope:{ctx:i}}}),f=new he({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Toggle a pane on/off"),t=b(),R(s.$$.fragment),r=b(),R(a.$$.fragment),n=b(),R(f.$$.fragment)},l(o){e=z(o,"H2",{});var h=k(e);l=E(h,"Toggle a pane on/off"),h.forEach(p),t=d(o),N(s.$$.fragment,o),r=d(o),N(a.$$.fragment,o),n=d(o),N(f.$$.fragment,o)},m(o,h){m(o,e,h),c(e,l),m(o,t,h),T(s,o,h),m(o,r,h),T(a,o,h),m(o,n,h),T(f,o,h),u=!0},p(o,[h]){const g={};h&9&&(g.$$scope={dirty:h,ctx:o}),s.$set(g);const _={};h&9&&(_.$$scope={dirty:h,ctx:o}),a.$set(_)},i(o){u||(I(s.$$.fragment,o),I(a.$$.fragment,o),I(f.$$.fragment,o),u=!0)},o(o){A(s.$$.fragment,o),A(a.$$.fragment,o),A(f.$$.fragment,o),u=!1},d(o){o&&p(e),o&&p(t),L(s,o),o&&p(r),L(a,o),o&&p(n),L(f,o)}}}function zl(i,e,l){function t(){l(0,s=!s)}let s=!0;return[s,t,`
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
</Splitpanes>`]}class Pl extends ee{constructor(e){super();te(this,e,zl,Sl,se,{})}}function El(i){let e,l,t=i[0]+`
`,s,r,a,n,f;return{c(){e=S("div"),l=S("pre"),s=P(t),r=b(),a=S("textarea"),this.h()},l(u){e=z(u,"DIV",{class:!0});var o=k(e);l=z(o,"PRE",{"aria-hidden":!0,style:!0,class:!0});var h=k(l);s=E(h,t),h.forEach(p),r=d(o),a=z(o,"TEXTAREA",{style:!0,class:!0}),k(a).forEach(p),o.forEach(p),this.h()},h(){q(l,"aria-hidden","true"),F(l,"min-height",i[2]),F(l,"max-height",i[1]),q(l,"class","svelte-1gm0t61"),a.readOnly=!0,F(a,"outline","none"),q(a,"class","svelte-1gm0t61"),q(e,"class","container svelte-1gm0t61")},m(u,o){m(u,e,o),c(e,l),c(l,s),c(e,r),c(e,a),Gt(a,i[0]),n||(f=Pt(a,"input",i[5]),n=!0)},p(u,[o]){o&1&&t!==(t=u[0]+`
`)&&Ve(s,t),o&4&&F(l,"min-height",u[2]),o&2&&F(l,"max-height",u[1]),o&1&&Gt(a,u[0])},i:V,o:V,d(u){u&&p(e),n=!1,f()}}}function yl(i,e,l){let t,s,{value:r=""}=e,{minRows:a=1}=e,{maxRows:n=40}=e;const f=h=>h.split(/\r?\n/);function u(h,g){const _=f(h);return _.length=g,_.reduce(function(M,v){return M+`
`+v})}function o(){r=this.value,l(0,r),l(4,n)}return i.$$set=h=>{"value"in h&&l(0,r=h.value),"minRows"in h&&l(3,a=h.minRows),"maxRows"in h&&l(4,n=h.maxRows)},i.$$.update=()=>{i.$$.dirty&17&&l(0,r=u(r,n)),i.$$.dirty&8&&l(2,t=`${1+a*1.2}em`),i.$$.dirty&16&&l(1,s=n?`${1+n*1.2}em`:"auto")},[r,s,t,a,n,o]}class kl extends ee{constructor(e){super();te(this,e,yl,El,se,{value:0,minRows:3,maxRows:4})}}function xl(i,e,l){const t=i.slice();return t[4]=e[l],t[6]=l,t}function Il(i){let e,l=i[6]+1+"",t,s;return{c(){e=S("span"),t=P(l),s=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,l),a.forEach(p),s=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,s,a)},p:V,d(r){r&&p(e),r&&p(s)}}}function Al(i){let e,l;return e=new Y({props:{minSize:"10",$$slots:{default:[Il]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Bl(i){let e,l,t={length:3},s=[];for(let r=0;r<t.length;r+=1)s[r]=Al(xl(i,t,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ke()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=ke()},m(r,a){for(let n=0;n<s.length;n+=1)s[n].m(r,a);m(r,e,a),l=!0},p:V,i(r){if(!l){for(let a=0;a<t.length;a+=1)I(s[a]);l=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)A(s[a]);l=!1},d(r){qe(s,r),r&&p(e)}}}function Hl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,le,we,J,_e,ne,K,oe,ue,G,$e,re,fe,me,Q,ce,ge,pe,ae;G=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Bl]},$$scope:{ctx:i}}}),G.$on("ready",i[1]),G.$on("resize",i[1]),G.$on("resized",i[1]),G.$on("pane-click",i[1]),G.$on("pane-maximize",i[1]),G.$on("pane-add",i[1]),G.$on("pane-remove",i[1]),G.$on("splitter-click",i[1]);function Se(C){i[3](C)}let ze={minRows:4,maxRows:40};return i[0]!==void 0&&(ze.value=i[0]),Q=new kl({props:ze}),kt.push(()=>es(Q,"value",Se)),pe=new he({props:{code:i[2]}}),{c(){e=S("h2"),l=P("Listening to emitted events"),t=b(),s=S("p"),r=P("Here is the list of events that are emitted from splitpanes:"),a=b(),n=S("ul"),f=S("li"),u=P("ready has no parameter and fires when splitpanes is ready"),o=b(),h=S("li"),g=P(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),_=b(),w=S("li"),M=P(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),v=b(),x=S("li"),y=P("pane-click returns the clicked pane object with its dimensions."),D=b(),B=S("li"),O=P("pane-maximize returns the maximized pane object with its dimensions."),Z=b(),W=S("li"),le=P("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),we=b(),J=S("li"),_e=P(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ne=b(),K=S("li"),oe=P(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),ue=b(),R(G.$$.fragment),$e=b(),re=S("p"),fe=P("Try resizing panes and check the logs bellow."),me=b(),R(Q.$$.fragment),ge=b(),R(pe.$$.fragment)},l(C){e=z(C,"H2",{});var U=k(e);l=E(U,"Listening to emitted events"),U.forEach(p),t=d(C),s=z(C,"P",{});var ve=k(s);r=E(ve,"Here is the list of events that are emitted from splitpanes:"),ve.forEach(p),a=d(C),n=z(C,"UL",{});var H=k(n);f=z(H,"LI",{});var be=k(f);u=E(be,"ready has no parameter and fires when splitpanes is ready"),be.forEach(p),o=d(H),h=z(H,"LI",{});var Pe=k(h);g=E(Pe,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),Pe.forEach(p),_=d(H),w=z(H,"LI",{});var Ee=k(w);M=E(Ee,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),Ee.forEach(p),v=d(H),x=z(H,"LI",{});var je=k(x);y=E(je,"pane-click returns the clicked pane object with its dimensions."),je.forEach(p),D=d(H),B=z(H,"LI",{});var De=k(B);O=E(De,"pane-maximize returns the maximized pane object with its dimensions."),De.forEach(p),Z=d(H),W=z(H,"LI",{});var ye=k(W);le=E(ye,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ye.forEach(p),we=d(H),J=z(H,"LI",{});var Oe=k(J);_e=E(Oe,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),Oe.forEach(p),ne=d(H),K=z(H,"LI",{});var xe=k(K);oe=E(xe,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),xe.forEach(p),H.forEach(p),ue=d(C),N(G.$$.fragment,C),$e=d(C),re=z(C,"P",{});var de=k(re);fe=E(de,"Try resizing panes and check the logs bellow."),de.forEach(p),me=d(C),N(Q.$$.fragment,C),ge=d(C),N(pe.$$.fragment,C)},m(C,U){m(C,e,U),c(e,l),m(C,t,U),m(C,s,U),c(s,r),m(C,a,U),m(C,n,U),c(n,f),c(f,u),c(n,o),c(n,h),c(h,g),c(n,_),c(n,w),c(w,M),c(n,v),c(n,x),c(x,y),c(n,D),c(n,B),c(B,O),c(n,Z),c(n,W),c(W,le),c(n,we),c(n,J),c(J,_e),c(n,ne),c(n,K),c(K,oe),m(C,ue,U),T(G,C,U),m(C,$e,U),m(C,re,U),c(re,fe),m(C,me,U),T(Q,C,U),m(C,ge,U),T(pe,C,U),ae=!0},p(C,[U]){const ve={};U&128&&(ve.$$scope={dirty:U,ctx:C}),G.$set(ve);const H={};!ce&&U&1&&(ce=!0,H.value=C[0],ts(()=>ce=!1)),Q.$set(H)},i(C){ae||(I(G.$$.fragment,C),I(Q.$$.fragment,C),I(pe.$$.fragment,C),ae=!0)},o(C){A(G.$$.fragment,C),A(Q.$$.fragment,C),A(pe.$$.fragment,C),ae=!1},d(C){C&&p(e),C&&p(t),C&&p(s),C&&p(a),C&&p(n),C&&p(ue),L(G,C),C&&p($e),C&&p(re),C&&p(me),L(Q,C),C&&p(ge),L(pe,C)}}}function Rl(i,e,l){let t="// Event name: Event params   (Last event at the top)";function s(n){n.detail?l(0,t=n.type+" "+JSON.stringify(n.detail)+`
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
`;function a(n){t=n,l(0,t)}return[t,s,r,a]}class Nl extends ee{constructor(e){super();te(this,e,Rl,Hl,se,{})}}function Tl(i){let e,l;return{c(){e=S("span"),l=P("1")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"1"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ll(i){let e,l;return{c(){e=S("span"),l=P("2")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"2"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Ml(i){let e,l;return{c(){e=S("span"),l=P("3")},l(t){e=z(t,"SPAN",{});var s=k(e);l=E(s,"3"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Cl(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[Tl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ll]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ml]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&4&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&4&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&4&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function jl(i){let e,l;return e=new ie({props:{theme:"my-theme",$$slots:{default:[Cl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Dl(i){let e,l,t;return{c(){e=S("em"),l=S("p"),t=P("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(s){e=z(s,"EM",{class:!0});var r=k(e);l=z(r,"P",{});var a=k(l);t=E(a,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),a.forEach(p),r.forEach(p),this.h()},h(){q(e,"class","specs")},m(s,r){m(s,e,r),c(e,l),c(l,t)},p:V,d(s){s&&p(e)}}}function Ol(i){let e,l,t,s;return e=new Y({props:{$$slots:{default:[jl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Dl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment)},l(r){N(e.$$.fragment,r),l=d(r),N(t.$$.fragment,r)},m(r,a){T(e,r,a),m(r,l,a),T(t,r,a),s=!0},p(r,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&4&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){s||(I(e.$$.fragment,r),I(t.$$.fragment,r),s=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),s=!1},d(r){L(e,r),r&&p(l),L(t,r)}}}function Vl(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,M,v,x;return u=new he({props:{code:i[1]}}),w=new ie({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Ol]},$$scope:{ctx:i}}}),v=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Styling Splitters"),t=b(),s=S("p"),r=P("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=S("br"),n=P("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),f=b(),R(u.$$.fragment),o=b(),h=S("p"),g=P('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),_=b(),R(w.$$.fragment),M=b(),R(v.$$.fragment)},l(y){e=z(y,"H2",{});var D=k(e);l=E(D,"Styling Splitters"),D.forEach(p),t=d(y),s=z(y,"P",{});var B=k(s);r=E(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=z(B,"BR",{}),n=E(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),B.forEach(p),f=d(y),N(u.$$.fragment,y),o=d(y),h=z(y,"P",{});var O=k(h);g=E(O,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),O.forEach(p),_=d(y),N(w.$$.fragment,y),M=d(y),N(v.$$.fragment,y)},m(y,D){m(y,e,D),c(e,l),m(y,t,D),m(y,s,D),c(s,r),c(s,a),c(s,n),m(y,f,D),T(u,y,D),m(y,o,D),m(y,h,D),c(h,g),m(y,_,D),T(w,y,D),m(y,M,D),T(v,y,D),x=!0},p(y,[D]){const B={};D&4&&(B.$$scope={dirty:D,ctx:y}),w.$set(B)},i(y){x||(I(u.$$.fragment,y),I(w.$$.fragment,y),I(v.$$.fragment,y),x=!0)},o(y){A(u.$$.fragment,y),A(w.$$.fragment,y),A(v.$$.fragment,y),x=!1},d(y){y&&p(e),y&&p(t),y&&p(s),y&&p(f),L(u,y),y&&p(o),y&&p(h),y&&p(_),L(w,y),y&&p(M),L(v,y)}}}function Yl(i){return[`
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
`]}class Xl extends ee{constructor(e){super();te(this,e,Yl,Vl,se,{})}}function Fl(i){let e,l;return{c(){e=S("p"),l=P("MenuBar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"MenuBar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function ql(i){let e,l;return{c(){e=S("p"),l=P("ToolBar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"ToolBar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Gl(i){let e,l,t,s;return{c(){e=S("p"),l=P("Folder"),t=S("br"),s=P(`
					Try those -->`)},l(r){e=z(r,"P",{});var a=k(e);l=E(a,"Folder"),t=z(a,"BR",{}),s=E(a,`
					Try those -->`),a.forEach(p)},m(r,a){m(r,e,a),c(e,l),c(e,t),c(e,s)},p:V,d(r){r&&p(e)}}}function Ul(i){let e,l;return{c(){e=S("p"),l=P("Views")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"Views"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Wl(i){let e,l;return{c(){e=S("p"),l=P("Details")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"Details"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Jl(i){let e,l,t,s,r,a;return e=new Y({props:{$$slots:{default:[Gl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ul]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Wl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),l=d(n),N(t.$$.fragment,n),s=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,l,f),T(t,n,f),m(n,s,f),T(r,n,f),a=!0},p(n,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:n}),e.$set(u);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(l),L(t,n),n&&p(s),L(r,n)}}}function Ql(i){let e,l;return e=new ie({props:{theme:"modern-theme",$$slots:{default:[Jl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Zl(i){let e,l;return{c(){e=S("p"),l=P("statusbar")},l(t){e=z(t,"P",{});var s=k(e);l=E(s,"statusbar"),s.forEach(p)},m(t,s){m(t,e,s),c(e,l)},p:V,d(t){t&&p(e)}}}function Kl(i){let e,l,t,s,r,a,n,f;return e=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Fl]},$$scope:{ctx:i}}}),t=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[ql]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ql]},$$scope:{ctx:i}}}),n=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Zl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),l=b(),R(t.$$.fragment),s=b(),R(r.$$.fragment),a=b(),R(n.$$.fragment)},l(u){N(e.$$.fragment,u),l=d(u),N(t.$$.fragment,u),s=d(u),N(r.$$.fragment,u),a=d(u),N(n.$$.fragment,u)},m(u,o){T(e,u,o),m(u,l,o),T(t,u,o),m(u,s,o),T(r,u,o),m(u,a,o),T(n,u,o),f=!0},p(u,o){const h={};o&2&&(h.$$scope={dirty:o,ctx:u}),e.$set(h);const g={};o&2&&(g.$$scope={dirty:o,ctx:u}),t.$set(g);const _={};o&2&&(_.$$scope={dirty:o,ctx:u}),r.$set(_);const w={};o&2&&(w.$$scope={dirty:o,ctx:u}),n.$set(w)},i(u){f||(I(e.$$.fragment,u),I(t.$$.fragment,u),I(r.$$.fragment,u),I(n.$$.fragment,u),f=!0)},o(u){A(e.$$.fragment,u),A(t.$$.fragment,u),A(r.$$.fragment,u),A(n.$$.fragment,u),f=!1},d(u){L(e,u),u&&p(l),L(t,u),u&&p(s),L(r,u),u&&p(a),L(n,u)}}}function en(i){let e,l,t,s,r,a,n,f,u,o;return n=new ie({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[Kl]},$$scope:{ctx:i}}}),u=new he({props:{code:i[0]}}),{c(){e=S("h2"),l=P("Styling Splitters - Modern"),t=b(),s=S("p"),r=P(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),a=b(),R(n.$$.fragment),f=b(),R(u.$$.fragment)},l(h){e=z(h,"H2",{});var g=k(e);l=E(g,"Styling Splitters - Modern"),g.forEach(p),t=d(h),s=z(h,"P",{});var _=k(s);r=E(_,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),_.forEach(p),a=d(h),N(n.$$.fragment,h),f=d(h),N(u.$$.fragment,h)},m(h,g){m(h,e,g),c(e,l),m(h,t,g),m(h,s,g),c(s,r),m(h,a,g),T(n,h,g),m(h,f,g),T(u,h,g),o=!0},p(h,[g]){const _={};g&2&&(_.$$scope={dirty:g,ctx:h}),n.$set(_)},i(h){o||(I(n.$$.fragment,h),I(u.$$.fragment,h),o=!0)},o(h){A(n.$$.fragment,h),A(u.$$.fragment,h),o=!1},d(h){h&&p(e),h&&p(t),h&&p(s),h&&p(a),L(n,h),h&&p(f),L(u,h)}}}function tn(i){return[`
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
`]}class sn extends ee{constructor(e){super();te(this,e,tn,en,se,{})}}function ln(i){let e,l,t,s,r,a,n,f,u,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,le,we,J,_e,ne,K,oe,ue,G,$e,re,fe,me,Q,ce,ge,pe,ae,Se,ze,C,U,ve,H,be,Pe,Ee,je,De,ye,Oe,xe,de,Ge,Ue,We,Ie,Je,Qe,Ze,Ae,Ke,et,tt,Be,st,lt,nt,He,rt,at,it,Re,ft,pt,ot,Ne,ut,$t,mt,Te,ct,ht,_t,Le,gt,vt,bt,Me,dt,wt,St,Ce,zt;return de=new vs({}),Ie=new Es({}),Ae=new Ls({}),Be=new Ys({}),He=new tl({}),Re=new ol({}),Ne=new _l({}),Te=new Pl({}),Le=new Nl({}),Me=new Xl({}),Ce=new sn({}),{c(){e=S("h1"),l=P("Svelte-Splitpane demo"),t=b(),s=S("a"),r=P("https://github.com/orefalo/svelte-splitpanes"),a=b(),n=S("h2"),f=P("Features"),u=b(),o=S("ul"),h=S("li"),g=P("Size is less than 4 kb"),_=b(),w=S("li"),M=P("Support both dynamic horizontal and vertical splits"),v=b(),x=S("li"),y=P("Support defaults, min and max sizes"),D=b(),B=S("li"),O=P("Support multiple splits"),Z=b(),W=S("li"),le=P("Support lifecyle events"),we=b(),J=S("li"),_e=P("Support custom divider size or overlay"),ne=b(),K=S("li"),oe=P("Support splitter pane pushing"),ue=b(),G=S("li"),$e=P("Support RTL rendering"),re=b(),fe=S("li"),me=P("Support first splitter on/off"),Q=b(),ce=S("li"),ge=P("Support pane toggle"),pe=b(),ae=S("li"),Se=P("Support programmatic resizing"),ze=b(),C=S("li"),U=P("Support programmatic splitter add/remove"),ve=b(),H=S("li"),be=P("Support for legacy browser such as IE 11"),Pe=b(),Ee=S("li"),je=P("Support for touch devices"),De=b(),ye=S("li"),Oe=P("Sveltekit & Typescript friendly"),xe=b(),R(de.$$.fragment),Ge=b(),Ue=S("hr"),We=b(),R(Ie.$$.fragment),Je=b(),Qe=S("hr"),Ze=b(),R(Ae.$$.fragment),Ke=b(),et=S("hr"),tt=b(),R(Be.$$.fragment),st=b(),lt=S("hr"),nt=b(),R(He.$$.fragment),rt=b(),at=S("hr"),it=b(),R(Re.$$.fragment),ft=b(),pt=S("hr"),ot=b(),R(Ne.$$.fragment),ut=b(),$t=S("hr"),mt=b(),R(Te.$$.fragment),ct=b(),ht=S("hr"),_t=b(),R(Le.$$.fragment),gt=b(),vt=S("hr"),bt=b(),R(Me.$$.fragment),dt=b(),wt=S("hr"),St=b(),R(Ce.$$.fragment),this.h()},l($){e=z($,"H1",{});var j=k(e);l=E(j,"Svelte-Splitpane demo"),j.forEach(p),t=d($),s=z($,"A",{href:!0});var xt=k(s);r=E(xt,"https://github.com/orefalo/svelte-splitpanes"),xt.forEach(p),a=d($),n=z($,"H2",{});var It=k(n);f=E(It,"Features"),It.forEach(p),u=d($),o=z($,"UL",{});var X=k(o);h=z(X,"LI",{});var At=k(h);g=E(At,"Size is less than 4 kb"),At.forEach(p),_=d(X),w=z(X,"LI",{});var Bt=k(w);M=E(Bt,"Support both dynamic horizontal and vertical splits"),Bt.forEach(p),v=d(X),x=z(X,"LI",{});var Ht=k(x);y=E(Ht,"Support defaults, min and max sizes"),Ht.forEach(p),D=d(X),B=z(X,"LI",{});var Rt=k(B);O=E(Rt,"Support multiple splits"),Rt.forEach(p),Z=d(X),W=z(X,"LI",{});var Nt=k(W);le=E(Nt,"Support lifecyle events"),Nt.forEach(p),we=d(X),J=z(X,"LI",{});var Tt=k(J);_e=E(Tt,"Support custom divider size or overlay"),Tt.forEach(p),ne=d(X),K=z(X,"LI",{});var Lt=k(K);oe=E(Lt,"Support splitter pane pushing"),Lt.forEach(p),ue=d(X),G=z(X,"LI",{});var Mt=k(G);$e=E(Mt,"Support RTL rendering"),Mt.forEach(p),re=d(X),fe=z(X,"LI",{});var Ct=k(fe);me=E(Ct,"Support first splitter on/off"),Ct.forEach(p),Q=d(X),ce=z(X,"LI",{});var jt=k(ce);ge=E(jt,"Support pane toggle"),jt.forEach(p),pe=d(X),ae=z(X,"LI",{});var Dt=k(ae);Se=E(Dt,"Support programmatic resizing"),Dt.forEach(p),ze=d(X),C=z(X,"LI",{});var Ot=k(C);U=E(Ot,"Support programmatic splitter add/remove"),Ot.forEach(p),ve=d(X),H=z(X,"LI",{});var Vt=k(H);be=E(Vt,"Support for legacy browser such as IE 11"),Vt.forEach(p),Pe=d(X),Ee=z(X,"LI",{});var Yt=k(Ee);je=E(Yt,"Support for touch devices"),Yt.forEach(p),De=d(X),ye=z(X,"LI",{});var Xt=k(ye);Oe=E(Xt,"Sveltekit & Typescript friendly"),Xt.forEach(p),X.forEach(p),xe=d($),N(de.$$.fragment,$),Ge=d($),Ue=z($,"HR",{}),We=d($),N(Ie.$$.fragment,$),Je=d($),Qe=z($,"HR",{}),Ze=d($),N(Ae.$$.fragment,$),Ke=d($),et=z($,"HR",{}),tt=d($),N(Be.$$.fragment,$),st=d($),lt=z($,"HR",{}),nt=d($),N(He.$$.fragment,$),rt=d($),at=z($,"HR",{}),it=d($),N(Re.$$.fragment,$),ft=d($),pt=z($,"HR",{}),ot=d($),N(Ne.$$.fragment,$),ut=d($),$t=z($,"HR",{}),mt=d($),N(Te.$$.fragment,$),ct=d($),ht=z($,"HR",{}),_t=d($),N(Le.$$.fragment,$),gt=d($),vt=z($,"HR",{}),bt=d($),N(Me.$$.fragment,$),dt=d($),wt=z($,"HR",{}),St=d($),N(Ce.$$.fragment,$),this.h()},h(){q(s,"href","https://github.com/orefalo/svelte-splitpanes")},m($,j){m($,e,j),c(e,l),m($,t,j),m($,s,j),c(s,r),m($,a,j),m($,n,j),c(n,f),m($,u,j),m($,o,j),c(o,h),c(h,g),c(o,_),c(o,w),c(w,M),c(o,v),c(o,x),c(x,y),c(o,D),c(o,B),c(B,O),c(o,Z),c(o,W),c(W,le),c(o,we),c(o,J),c(J,_e),c(o,ne),c(o,K),c(K,oe),c(o,ue),c(o,G),c(G,$e),c(o,re),c(o,fe),c(fe,me),c(o,Q),c(o,ce),c(ce,ge),c(o,pe),c(o,ae),c(ae,Se),c(o,ze),c(o,C),c(C,U),c(o,ve),c(o,H),c(H,be),c(o,Pe),c(o,Ee),c(Ee,je),c(o,De),c(o,ye),c(ye,Oe),m($,xe,j),T(de,$,j),m($,Ge,j),m($,Ue,j),m($,We,j),T(Ie,$,j),m($,Je,j),m($,Qe,j),m($,Ze,j),T(Ae,$,j),m($,Ke,j),m($,et,j),m($,tt,j),T(Be,$,j),m($,st,j),m($,lt,j),m($,nt,j),T(He,$,j),m($,rt,j),m($,at,j),m($,it,j),T(Re,$,j),m($,ft,j),m($,pt,j),m($,ot,j),T(Ne,$,j),m($,ut,j),m($,$t,j),m($,mt,j),T(Te,$,j),m($,ct,j),m($,ht,j),m($,_t,j),T(Le,$,j),m($,gt,j),m($,vt,j),m($,bt,j),T(Me,$,j),m($,dt,j),m($,wt,j),m($,St,j),T(Ce,$,j),zt=!0},p:V,i($){zt||(I(de.$$.fragment,$),I(Ie.$$.fragment,$),I(Ae.$$.fragment,$),I(Be.$$.fragment,$),I(He.$$.fragment,$),I(Re.$$.fragment,$),I(Ne.$$.fragment,$),I(Te.$$.fragment,$),I(Le.$$.fragment,$),I(Me.$$.fragment,$),I(Ce.$$.fragment,$),zt=!0)},o($){A(de.$$.fragment,$),A(Ie.$$.fragment,$),A(Ae.$$.fragment,$),A(Be.$$.fragment,$),A(He.$$.fragment,$),A(Re.$$.fragment,$),A(Ne.$$.fragment,$),A(Te.$$.fragment,$),A(Le.$$.fragment,$),A(Me.$$.fragment,$),A(Ce.$$.fragment,$),zt=!1},d($){$&&p(e),$&&p(t),$&&p(s),$&&p(a),$&&p(n),$&&p(u),$&&p(o),$&&p(xe),L(de,$),$&&p(Ge),$&&p(Ue),$&&p(We),L(Ie,$),$&&p(Je),$&&p(Qe),$&&p(Ze),L(Ae,$),$&&p(Ke),$&&p(et),$&&p(tt),L(Be,$),$&&p(st),$&&p(lt),$&&p(nt),L(He,$),$&&p(rt),$&&p(at),$&&p(it),L(Re,$),$&&p(ft),$&&p(pt),$&&p(ot),L(Ne,$),$&&p(ut),$&&p($t),$&&p(mt),L(Te,$),$&&p(ct),$&&p(ht),$&&p(_t),L(Le,$),$&&p(gt),$&&p(vt),$&&p(bt),L(Me,$),$&&p(dt),$&&p(wt),$&&p(St),L(Ce,$)}}}class an extends ee{constructor(e){super();te(this,e,null,ln,se,{})}}export{an as default};
