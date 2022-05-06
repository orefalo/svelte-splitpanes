import{S as ee,i as te,s as le,P as he,e as S,t as P,k as b,w as R,c as z,a as k,h as E,d as p,m as d,x as N,g as m,J as c,y as T,q as I,o as A,B as L,b as q,O as V,l as ke,Q as qe,R as Ye,T as Xe,v as Kt,U as Ft,V as qt,W as ll,F as sl,f as F,X as Pt,L as nl,M as rl,N as al,n as Et,p as yt,Y as il,Z as fl,D as pl,_ as ol,$ as kt,j as Ve,a0 as $l,a1 as el,a2 as tl,a3 as Gt}from"../chunks/vendor-e09f8588.js";import{S as ie,P as Y}from"../chunks/Pane-57e3e9bd.js";function ul(i){let e,s,t,l,r,a;return{c(){e=S("span"),s=P(`1
			`),t=S("br"),l=b(),r=S("em"),a=P("I have a min height of 20% & max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);s=E(f,`1
			`),t=z(f,"BR",{}),l=d(f),r=z(f,"EM",{class:!0});var $=k(r);a=E($,"I have a min height of 20% & max height of 70%"),$.forEach(p),f.forEach(p),this.h()},h(){q(r,"class","specs")},m(n,f){m(n,e,f),c(e,s),c(e,t),c(e,l),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function ml(i){let e,s;return{c(){e=S("span"),s=P("2")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"2"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function cl(i){let e,s,t,l,r,a;return{c(){e=S("span"),s=P(`3

			`),t=S("br"),l=b(),r=S("em"),a=P("I have a max height of 70%"),this.h()},l(n){e=z(n,"SPAN",{});var f=k(e);s=E(f,`3

			`),t=z(f,"BR",{}),l=d(f),r=z(f,"EM",{class:!0});var $=k(r);a=E($,"I have a max height of 70%"),$.forEach(p),f.forEach(p),this.h()},h(){q(r,"class","specs")},m(n,f){m(n,e,f),c(e,s),c(e,t),c(e,l),c(e,r),c(r,a)},p:V,d(n){n&&p(e)}}}function hl(i){let e,s,t,l,r,a;return e=new Y({props:{minSize:"20",maxSize:"70",$$slots:{default:[ul]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[ml]},$$scope:{ctx:i}}}),r=new Y({props:{maxSize:"70",$$slots:{default:[cl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&2&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function _l(i){let e,s,t,l,r,a,n,f=!1+"",$,o,h,g,_,w,M;return g=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[hl]},$$scope:{ctx:i}}}),w=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Horizontal layout, push other panes, min & max use, doubleclick"),t=b(),l=S("p"),r=P("You can double click a splitter to maximize the next pane!"),a=S("br"),n=P(`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=P(f),o=P("."),h=b(),R(g.$$.fragment),_=b(),R(w.$$.fragment)},l(v){e=z(v,"H2",{});var x=k(e);s=E(x,"Horizontal layout, push other panes, min & max use, doubleclick"),x.forEach(p),t=d(v),l=z(v,"P",{});var y=k(l);r=E(y,"You can double click a splitter to maximize the next pane!"),a=z(y,"BR",{}),n=E(y,`
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter=`),$=E(y,f),o=E(y,"."),y.forEach(p),h=d(v),N(g.$$.fragment,v),_=d(v),N(w.$$.fragment,v)},m(v,x){m(v,e,x),c(e,s),m(v,t,x),m(v,l,x),c(l,r),c(l,a),c(l,n),c(l,$),c(l,o),m(v,h,x),T(g,v,x),m(v,_,x),T(w,v,x),M=!0},p(v,[x]){const y={};x&2&&(y.$$scope={dirty:x,ctx:v}),g.$set(y)},i(v){M||(I(g.$$.fragment,v),I(w.$$.fragment,v),M=!0)},o(v){A(g.$$.fragment,v),A(w.$$.fragment,v),M=!1},d(v){v&&p(e),v&&p(t),v&&p(l),v&&p(h),L(g,v),v&&p(_),L(w,v)}}}function gl(i){return[`
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
</Splitpanes>`]}class vl extends ee{constructor(e){super();te(this,e,gl,_l,le,{})}}function bl(i){let e,s;return{c(){e=S("span"),s=P("1")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"1"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function dl(i){let e,s;return{c(){e=S("span"),s=P("2")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"2"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function wl(i){let e,s;return{c(){e=S("span"),s=P("3")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"3"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Sl(i){let e,s,t,l,r,a;return e=new Y({props:{size:"65",$$slots:{default:[bl]},$$scope:{ctx:i}}}),t=new Y({props:{size:"10",$$slots:{default:[dl]},$$scope:{ctx:i}}}),r=new Y({props:{size:"25",$$slots:{default:[wl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&2&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function zl(i){let e,s,t,l,r,a,n,f,$,o,h,g,_,w,M,v;return _=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Sl]},$$scope:{ctx:i}}}),M=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Default pane size"),t=b(),l=S("p"),r=P(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=S("br"),n=b(),f=S("b"),$=P(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),o=S("br"),h=P(" Note that setting a default value is different than setting a min or max value."),g=b(),R(_.$$.fragment),w=b(),R(M.$$.fragment)},l(x){e=z(x,"H2",{});var y=k(e);s=E(y,"Default pane size"),y.forEach(p),t=d(x),l=z(x,"P",{});var D=k(l);r=E(D,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),a=z(D,"BR",{}),n=d(D),f=z(D,"B",{});var B=k(f);$=E(B,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),B.forEach(p),o=z(D,"BR",{}),h=E(D," Note that setting a default value is different than setting a min or max value."),D.forEach(p),g=d(x),N(_.$$.fragment,x),w=d(x),N(M.$$.fragment,x)},m(x,y){m(x,e,y),c(e,s),m(x,t,y),m(x,l,y),c(l,r),c(l,a),c(l,n),c(l,f),c(f,$),c(l,o),c(l,h),m(x,g,y),T(_,x,y),m(x,w,y),T(M,x,y),v=!0},p(x,[y]){const D={};y&2&&(D.$$scope={dirty:y,ctx:x}),_.$set(D)},i(x){v||(I(_.$$.fragment,x),I(M.$$.fragment,x),v=!0)},o(x){A(_.$$.fragment,x),A(M.$$.fragment,x),v=!1},d(x){x&&p(e),x&&p(t),x&&p(l),x&&p(g),L(_,x),x&&p(w),L(M,x)}}}function Pl(i){return[`
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
</Splitpanes>`]}class El extends ee{constructor(e){super();te(this,e,Pl,zl,le,{})}}function yl(i){let e,s;return{c(){e=S("span"),s=P("1")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"1"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function kl(i){let e,s;return{c(){e=S("span"),s=P("2")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"2"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function xl(i){let e,s;return{c(){e=S("span"),s=P("3")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"3"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Il(i){let e,s;return{c(){e=S("span"),s=P("4")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"4"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Al(i){let e,s,t,l,r,a;return e=new Y({props:{$$slots:{default:[kl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[xl]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Il]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&2&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function Bl(i){let e,s;return e=new ie({props:{$$slots:{default:[Al]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Hl(i){let e,s;return{c(){e=S("span"),s=P("5")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"5"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Rl(i){let e,s,t,l,r,a;return e=new Y({props:{$$slots:{default:[yl]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Bl]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Hl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&2&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function Nl(i){let e,s,t,l,r,a,n;return l=new ie({props:{class:"default-theme",horizontal:!0,style:"height: 400px",pushOtherPanes:!1,$$slots:{default:[Rl]},$$scope:{ctx:i}}}),a=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Locking layout by prevent pushing other panes"),t=b(),R(l.$$.fragment),r=b(),R(a.$$.fragment)},l(f){e=z(f,"H2",{});var $=k(e);s=E($,"Locking layout by prevent pushing other panes"),$.forEach(p),t=d(f),N(l.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,$){m(f,e,$),c(e,s),m(f,t,$),T(l,f,$),m(f,r,$),T(a,f,$),n=!0},p(f,[$]){const o={};$&2&&(o.$$scope={dirty:$,ctx:f}),l.$set(o)},i(f){n||(I(l.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(l.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),L(l,f),f&&p(r),L(a,f)}}}function Tl(i){return[`
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
</Splitpanes>`]}class Ll extends ee{constructor(e){super();te(this,e,Tl,Nl,le,{})}}function Ml(i,e,s){const t=i.slice();return t[1]=e[s],t[3]=s,t}function Cl(i){let e,s=i[3]+1+"",t,l;return{c(){e=S("span"),t=P(s),l=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),a.forEach(p),l=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,l,a)},p:V,d(r){r&&p(e),r&&p(l)}}}function jl(i){let e,s;return e=new Y({props:{minSize:"5",$$slots:{default:[Cl]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Dl(i){let e,s,t={length:8},l=[];for(let r=0;r<t.length;r+=1)l[r]=jl(Ml(i,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ke()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=ke()},m(r,a){for(let n=0;n<l.length;n+=1)l[n].m(r,a);m(r,e,a),s=!0},p:V,i(r){if(!s){for(let a=0;a<t.length;a+=1)I(l[a]);s=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)A(l[a]);s=!1},d(r){qe(l,r),r&&p(e)}}}function Ol(i){let e,s,t,l,r,a,n;return l=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Dl]},$$scope:{ctx:i}}}),a=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Lots of splitters & push other panes - all panes have a min width of 5%"),t=b(),R(l.$$.fragment),r=b(),R(a.$$.fragment)},l(f){e=z(f,"H2",{});var $=k(e);s=E($,"Lots of splitters & push other panes - all panes have a min width of 5%"),$.forEach(p),t=d(f),N(l.$$.fragment,f),r=d(f),N(a.$$.fragment,f)},m(f,$){m(f,e,$),c(e,s),m(f,t,$),T(l,f,$),m(f,r,$),T(a,f,$),n=!0},p(f,[$]){const o={};$&16&&(o.$$scope={dirty:$,ctx:f}),l.$set(o)},i(f){n||(I(l.$$.fragment,f),I(a.$$.fragment,f),n=!0)},o(f){A(l.$$.fragment,f),A(a.$$.fragment,f),n=!1},d(f){f&&p(e),f&&p(t),L(l,f),f&&p(r),L(a,f)}}}function Vl(i){return[`
<Splitpanes class="default-theme" style="height: 400px">
    {#each { length: 8 } as _, i}
        <Pane minSize="5">
            <span>{i + 1}</span>
        </Pane>
    {/each}
</Splitpanes>`]}class Yl extends ee{constructor(e){super();te(this,e,Vl,Ol,le,{})}}function Xl(i){let e,s,t,l,r;return{c(){e=Ye("defs"),s=Ye("filter"),t=Ye("feGaussianBlur"),l=b(),r=Ye("circle"),this.h()},l(a){e=Xe(a,"defs",{});var n=k(e);s=Xe(n,"filter",{id:!0,x:!0,y:!0});var f=k(s);t=Xe(f,"feGaussianBlur",{in:!0,stdDeviation:!0}),k(t).forEach(p),f.forEach(p),n.forEach(p),l=d(a),r=Xe(a,"circle",{cx:!0,cy:!0,r:!0,opacity:!0,filter:!0,class:!0}),k(r).forEach(p),this.h()},h(){q(t,"in","SourceGraphic"),q(t,"stdDeviation",i[2]),q(s,"id","f1"),q(s,"x","0"),q(s,"y","0"),q(r,"cx",i[0]),q(r,"cy",i[1]),q(r,"r",i[3]),q(r,"opacity",i[4]),q(r,"filter","url(#f1)"),q(r,"class","svelte-1lfi58h")},m(a,n){m(a,e,n),c(e,s),c(s,t),m(a,l,n),m(a,r,n)},p(a,[n]){n&4&&q(t,"stdDeviation",a[2]),n&1&&q(r,"cx",a[0]),n&2&&q(r,"cy",a[1]),n&8&&q(r,"r",a[3]),n&16&&q(r,"opacity",a[4])},i:V,o:V,d(a){a&&p(e),a&&p(l),a&&p(r)}}}function Fl(i,e,s){let t,l,{x:r,y:a,sizeIn:n,size:f,speed:$,rippleBlur:o,opacityIn:h}=e;Kt(()=>{_.set(0),g.set(f)});const g=Ft(n,{duration:$}),_=Ft(h,{duration:$+$*2.5,easing:ll});return qt(i,g,w=>s(3,t=w)),qt(i,_,w=>s(4,l=w)),i.$$set=w=>{"x"in w&&s(0,r=w.x),"y"in w&&s(1,a=w.y),"sizeIn"in w&&s(7,n=w.sizeIn),"size"in w&&s(8,f=w.size),"speed"in w&&s(9,$=w.speed),"rippleBlur"in w&&s(2,o=w.rippleBlur),"opacityIn"in w&&s(10,h=w.opacityIn)},[r,a,o,t,l,g,_,n,f,$,h]}class ql extends ee{constructor(e){super();te(this,e,Fl,Xl,le,{x:0,y:1,sizeIn:7,size:8,speed:9,rippleBlur:2,opacityIn:10})}}function Ut(i,e,s){const t=i.slice();return t[46]=e[s],t[48]=s,t}function Wt(i){let e,s;return e=new ql({props:{x:i[46].x,y:i[46].y,size:i[46].size,speed:i[1],sizeIn:i[11],opacityIn:i[12],rippleBlur:i[0]}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l[0]&262144&&(r.x=t[46].x),l[0]&262144&&(r.y=t[46].y),l[0]&262144&&(r.size=t[46].size),l[0]&2&&(r.speed=t[1]),l[0]&2048&&(r.sizeIn=t[11]),l[0]&4096&&(r.opacityIn=t[12]),l[0]&1&&(r.rippleBlur=t[0]),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Gl(i){let e,s,t,l,r,a,n;const f=i[28].default,$=sl(f,i,i[27],null);let o=i[18],h=[];for(let _=0;_<o.length;_+=1)h[_]=Wt(Ut(i,o,_));const g=_=>A(h[_],1,1,()=>{h[_]=null});return{c(){e=S("button"),s=S("span"),$&&$.c(),t=b(),l=Ye("svg");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=z(_,"BUTTON",{style:!0,class:!0});var w=k(e);s=z(w,"SPAN",{class:!0});var M=k(s);$&&$.l(M),M.forEach(p),t=d(w),l=Xe(w,"svg",{class:!0});var v=k(l);for(let x=0;x<h.length;x+=1)h[x].l(v);v.forEach(p),w.forEach(p),this.h()},h(){q(s,"class","svelte-c42aw5"),q(l,"class","svelte-c42aw5"),F(e,"--color",i[2]),F(e,"--font-size",i[3]),F(e,"--bg-color",i[4]),F(e,"--bg-hover",i[5]),F(e,"--bg-active",i[6]),F(e,"--radius",i[8]),F(e,"--ripple",i[7]),F(e,"--height",i[9]+"px"),F(e,"--width",i[10]+"px"),F(e,"--shadow",i[19][i[13]]),F(e,"--shadow-h",i[19][i[14]]),F(e,"--shadow-a",i[19][i[15]]),q(e,"class","svelte-c42aw5")},m(_,w){m(_,e,w),c(e,s),$&&$.m(s,null),c(e,t),c(e,l);for(let M=0;M<h.length;M+=1)h[M].m(l,null);i[30](e),r=!0,a||(n=[Pt(e,"click",i[29]),Pt(e,"touchstart",i[31]),Pt(e,"mousedown",i[32])],a=!0)},p(_,w){if($&&$.p&&(!r||w[0]&134217728)&&nl($,f,_,_[27],r?al(f,_[27],w,null):rl(_[27]),null),w[0]&268291){o=_[18];let M;for(M=0;M<o.length;M+=1){const v=Ut(_,o,M);h[M]?(h[M].p(v,w),I(h[M],1)):(h[M]=Wt(v),h[M].c(),I(h[M],1),h[M].m(l,null))}for(Et(),M=o.length;M<h.length;M+=1)g(M);yt()}(!r||w[0]&4)&&F(e,"--color",_[2]),(!r||w[0]&8)&&F(e,"--font-size",_[3]),(!r||w[0]&16)&&F(e,"--bg-color",_[4]),(!r||w[0]&32)&&F(e,"--bg-hover",_[5]),(!r||w[0]&64)&&F(e,"--bg-active",_[6]),(!r||w[0]&256)&&F(e,"--radius",_[8]),(!r||w[0]&128)&&F(e,"--ripple",_[7]),(!r||w[0]&512)&&F(e,"--height",_[9]+"px"),(!r||w[0]&1024)&&F(e,"--width",_[10]+"px"),(!r||w[0]&8192)&&F(e,"--shadow",_[19][_[13]]),(!r||w[0]&16384)&&F(e,"--shadow-h",_[19][_[14]]),(!r||w[0]&32768)&&F(e,"--shadow-a",_[19][_[15]])},i(_){if(!r){I($,_);for(let w=0;w<o.length;w+=1)I(h[w]);r=!0}},o(_){A($,_),h=h.filter(Boolean);for(let w=0;w<h.length;w+=1)A(h[w]);r=!1},d(_){_&&p(e),$&&$.d(_),qe(h,_),i[30](null),a=!1,il(n)}}}function Ul(i,e,s){let t,l=V,r=()=>(l(),l=fl(J,H=>s(18,t=H)),J);i.$$.on_destroy.push(()=>l());let{$$slots:a={},$$scope:n}=e,{rippleBlur:f=0,speed:$=900,color:o="#fff",fontSize:h=".875rem",bgColor:g="74, 64, 212",bgHover:_=g,bgActive:w=g,rippleColor:M="#838de7",round:v="0.2rem",height:x=36,width:y=140,sizeIn:D=20,opacityIn:B=.5,shadow:O=5,shadowHover:Z=5,shadowActive:W=2}=e,se={none:"none",1:"0 0 0 1px rgba(0, 0, 0, 0.05)",2:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",3:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",4:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",5:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",6:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",7:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};function we(){const H=pl([]);return{subscribe:H.subscribe,add:be=>{H.update(Pe=>[...Pe,be])},clear:()=>{H.update(be=>[])}}}const J=we();r();let _e,ne,K,oe,$e,G,ue,re,fe,me,Q,ce,ge={x:50,y:50};const pe=()=>{clearTimeout(ce),ce=setTimeout(()=>{J.clear()},$+$*2)};let ae;function Se(H,be){be=="touch"?(ae=!0,J.add({x:H.pageX-me,y:H.pageY-fe,size:Q})):(ae||J.add({x:H.clientX-me,y:H.clientY-fe,size:Q}),ae=!1),pe()}Kt(()=>{s(21,K=ne.offsetWidth),s(22,oe=ne.offsetHeight),_e=ne.getBoundingClientRect(),fe=_e.y,me=_e.x});function ze(H){ol.call(this,i,H)}function C(H){kt[H?"unshift":"push"](()=>{ne=H,s(17,ne)})}const U=H=>Se(H.touches[0],"touch"),ve=H=>Se(H,"click");return i.$$set=H=>{"rippleBlur"in H&&s(0,f=H.rippleBlur),"speed"in H&&s(1,$=H.speed),"color"in H&&s(2,o=H.color),"fontSize"in H&&s(3,h=H.fontSize),"bgColor"in H&&s(4,g=H.bgColor),"bgHover"in H&&s(5,_=H.bgHover),"bgActive"in H&&s(6,w=H.bgActive),"rippleColor"in H&&s(7,M=H.rippleColor),"round"in H&&s(8,v=H.round),"height"in H&&s(9,x=H.height),"width"in H&&s(10,y=H.width),"sizeIn"in H&&s(11,D=H.sizeIn),"opacityIn"in H&&s(12,B=H.opacityIn),"shadow"in H&&s(13,O=H.shadow),"shadowHover"in H&&s(14,Z=H.shadowHover),"shadowActive"in H&&s(15,W=H.shadowActive),"$$scope"in H&&s(27,n=H.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&132120576&&(s(23,$e=Math.abs(K/2-ge.x)),s(24,G=Math.abs(oe/2-ge.y)),s(25,ue=K/2+$e),s(26,re=oe/2+G),Q=Math.sqrt(Math.pow(ue,2.2)+Math.pow(re,2.2)))},[f,$,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,J,ne,t,se,Se,K,oe,$e,G,ue,re,n,a,ze,C,U,ve]}class Fe extends ee{constructor(e){super();te(this,e,Ul,Gl,le,{rippleBlur:0,speed:1,color:2,fontSize:3,bgColor:4,bgHover:5,bgActive:6,rippleColor:7,round:8,height:9,width:10,sizeIn:11,opacityIn:12,shadow:13,shadowHover:14,shadowActive:15,ripples:16},null,[-1,-1])}get ripples(){return this.$$.ctx[16]}}function Jt(i,e,s){const t=i.slice();return t[4]=e[s],t[6]=s,t}function Wl(i){let e;return{c(){e=P("+ ADD PANE")},l(s){e=E(s,"+ ADD PANE")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function Jl(i){let e;return{c(){e=P("- REMOVE PANE")},l(s){e=E(s,"- REMOVE PANE")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function Ql(i){let e,s=i[6]+1+"",t,l;return{c(){e=S("span"),t=P(s),l=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),a.forEach(p),l=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,l,a)},p:V,d(r){r&&p(e),r&&p(l)}}}function Qt(i){let e,s;return e=new Y({props:{minSize:"10",$$slots:{default:[Ql]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Zl(i){let e,s,t={length:i[0]},l=[];for(let a=0;a<t.length;a+=1)l[a]=Qt(Jt(i,t,a));const r=a=>A(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=ke()},l(a){for(let n=0;n<l.length;n+=1)l[n].l(a);e=ke()},m(a,n){for(let f=0;f<l.length;f+=1)l[f].m(a,n);m(a,e,n),s=!0},p(a,n){if(n&1){t={length:a[0]};let f;for(f=0;f<t.length;f+=1){const $=Jt(a,t,f);l[f]?(l[f].p($,n),I(l[f],1)):(l[f]=Qt($),l[f].c(),I(l[f],1),l[f].m(e.parentNode,e))}for(Et(),f=t.length;f<l.length;f+=1)r(f);yt()}},i(a){if(!s){for(let n=0;n<t.length;n+=1)I(l[n]);s=!0}},o(a){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)A(l[n]);s=!1},d(a){qe(l,a),a&&p(e)}}}function Kl(i){let e,s,t,l,r,a,n,f,$,o,h;return l=new Fe({props:{$$slots:{default:[Wl]},$$scope:{ctx:i}}}),l.$on("click",i[2]),a=new Fe({props:{$$slots:{default:[Jl]},$$scope:{ctx:i}}}),a.$on("click",i[3]),f=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Zl]},$$scope:{ctx:i}}}),o=new he({props:{code:i[1]}}),{c(){e=S("h2"),s=P("Adding splitters programmatically"),t=b(),R(l.$$.fragment),r=b(),R(a.$$.fragment),n=b(),R(f.$$.fragment),$=b(),R(o.$$.fragment)},l(g){e=z(g,"H2",{});var _=k(e);s=E(_,"Adding splitters programmatically"),_.forEach(p),t=d(g),N(l.$$.fragment,g),r=d(g),N(a.$$.fragment,g),n=d(g),N(f.$$.fragment,g),$=d(g),N(o.$$.fragment,g)},m(g,_){m(g,e,_),c(e,s),m(g,t,_),T(l,g,_),m(g,r,_),T(a,g,_),m(g,n,_),T(f,g,_),m(g,$,_),T(o,g,_),h=!0},p(g,[_]){const w={};_&128&&(w.$$scope={dirty:_,ctx:g}),l.$set(w);const M={};_&128&&(M.$$scope={dirty:_,ctx:g}),a.$set(M);const v={};_&129&&(v.$$scope={dirty:_,ctx:g}),f.$set(v)},i(g){h||(I(l.$$.fragment,g),I(a.$$.fragment,g),I(f.$$.fragment,g),I(o.$$.fragment,g),h=!0)},o(g){A(l.$$.fragment,g),A(a.$$.fragment,g),A(f.$$.fragment,g),A(o.$$.fragment,g),h=!1},d(g){g&&p(e),g&&p(t),L(l,g),g&&p(r),L(a,g),g&&p(n),L(f,g),g&&p($),L(o,g)}}}function es(i,e,s){let t=3;return[t,`
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
<HighlightSvelte {code} />`,()=>{t>=0&&s(0,t++,t)},()=>{t>0&&s(0,t--,t)}]}class ts extends ee{constructor(e){super();te(this,e,es,Kl,le,{})}}function ls(i,e,s){const t=i.slice();return t[5]=e[s],t[7]=s,t}function ss(i){let e=i[0]?"Turn to Vertical":"Turn to Horizontal",s;return{c(){s=P(e)},l(t){s=E(t,e)},m(t,l){m(t,s,l)},p(t,l){l&1&&e!==(e=t[0]?"Turn to Vertical":"Turn to Horizontal")&&Ve(s,e)},d(t){t&&p(s)}}}function ns(i){let e=i[1]?"Hide first splitter":"Show first Splitter",s;return{c(){s=P(e)},l(t){s=E(t,e)},m(t,l){m(t,s,l)},p(t,l){l&2&&e!==(e=t[1]?"Hide first splitter":"Show first Splitter")&&Ve(s,e)},d(t){t&&p(s)}}}function rs(i){let e,s=i[7]+1+"",t,l;return{c(){e=S("span"),t=P(s),l=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),a.forEach(p),l=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,l,a)},p:V,d(r){r&&p(e),r&&p(l)}}}function as(i){let e,s;return e=new Y({props:{minSize:"5",$$slots:{default:[rs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&256&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function is(i){let e,s,t={length:3},l=[];for(let r=0;r<t.length;r+=1)l[r]=as(ls(i,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ke()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=ke()},m(r,a){for(let n=0;n<l.length;n+=1)l[n].m(r,a);m(r,e,a),s=!0},p:V,i(r){if(!s){for(let a=0;a<t.length;a+=1)I(l[a]);s=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)A(l[a]);s=!1},d(r){qe(l,r),r&&p(e)}}}function fs(i){let e,s,t,l,r,a,n,f,$,o,h,g,_,w,M,v,x,y,D;return g=new Fe({props:{$$slots:{default:[ss]},$$scope:{ctx:i}}}),g.$on("click",i[3]),w=new Fe({props:{$$slots:{default:[ns]},$$scope:{ctx:i}}}),w.$on("click",i[4]),v=new ie({props:{class:"default-theme",style:"height: 400px",firstSplitter:i[1],horizontal:i[0],$$slots:{default:[is]},$$scope:{ctx:i}}}),y=new he({props:{code:i[2]}}),{c(){e=S("h2"),s=P("Change orientation & first splitter"),t=b(),l=S("p"),r=P("When changing direction, all the panes current width or height will flip to adapt to the new layout."),a=b(),n=S("p"),f=P("Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),$=S("br"),o=P(`
	The first splitter does not allow to resize the next pane.`),h=b(),R(g.$$.fragment),_=b(),R(w.$$.fragment),M=b(),R(v.$$.fragment),x=b(),R(y.$$.fragment)},l(B){e=z(B,"H2",{});var O=k(e);s=E(O,"Change orientation & first splitter"),O.forEach(p),t=d(B),l=z(B,"P",{});var Z=k(l);r=E(Z,"When changing direction, all the panes current width or height will flip to adapt to the new layout."),Z.forEach(p),a=d(B),n=z(B,"P",{});var W=k(n);f=E(W,"Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane."),$=z(W,"BR",{}),o=E(W,`
	The first splitter does not allow to resize the next pane.`),W.forEach(p),h=d(B),N(g.$$.fragment,B),_=d(B),N(w.$$.fragment,B),M=d(B),N(v.$$.fragment,B),x=d(B),N(y.$$.fragment,B)},m(B,O){m(B,e,O),c(e,s),m(B,t,O),m(B,l,O),c(l,r),m(B,a,O),m(B,n,O),c(n,f),c(n,$),c(n,o),m(B,h,O),T(g,B,O),m(B,_,O),T(w,B,O),m(B,M,O),T(v,B,O),m(B,x,O),T(y,B,O),D=!0},p(B,[O]){const Z={};O&257&&(Z.$$scope={dirty:O,ctx:B}),g.$set(Z);const W={};O&258&&(W.$$scope={dirty:O,ctx:B}),w.$set(W);const se={};O&2&&(se.firstSplitter=B[1]),O&1&&(se.horizontal=B[0]),O&256&&(se.$$scope={dirty:O,ctx:B}),v.$set(se)},i(B){D||(I(g.$$.fragment,B),I(w.$$.fragment,B),I(v.$$.fragment,B),I(y.$$.fragment,B),D=!0)},o(B){A(g.$$.fragment,B),A(w.$$.fragment,B),A(v.$$.fragment,B),A(y.$$.fragment,B),D=!1},d(B){B&&p(e),B&&p(t),B&&p(l),B&&p(a),B&&p(n),B&&p(h),L(g,B),B&&p(_),L(w,B),B&&p(M),L(v,B),B&&p(x),L(y,B)}}}function ps(i,e,s){let t=!1,l=!1;return[t,l,`
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
</Splitpanes>`,()=>{s(0,t=!t)},()=>{s(1,l=!l)}]}class os extends ee{constructor(e){super();te(this,e,ps,fs,le,{})}}function $s(i){let e,s=i[0][0]+"",t,l;return{c(){e=S("span"),t=P(s),l=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),l=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,l)},p(r,a){a&1&&s!==(s=r[0][0]+"")&&Ve(t,s)},d(r){r&&p(e)}}}function us(i){let e,s=100-i[0][0]+"",t,l;return{c(){e=S("span"),t=P(s),l=P("%")},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),l=E(a,"%"),a.forEach(p)},m(r,a){m(r,e,a),c(e,t),c(e,l)},p(r,a){a&1&&s!==(s=100-r[0][0]+"")&&Ve(t,s)},d(r){r&&p(e)}}}function ms(i){let e,s,t,l;return e=new Y({props:{size:i[0][0]+"",$$slots:{default:[$s]},$$scope:{ctx:i}}}),t=new Y({props:{size:100-i[0][0]+"",$$slots:{default:[us]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment)},l(r){N(e.$$.fragment,r),s=d(r),N(t.$$.fragment,r)},m(r,a){T(e,r,a),m(r,s,a),T(t,r,a),l=!0},p(r,a){const n={};a&1&&(n.size=r[0][0]+""),a&9&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&1&&(f.size=100-r[0][0]+""),a&9&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){l||(I(e.$$.fragment,r),I(t.$$.fragment,r),l=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),l=!1},d(r){L(e,r),r&&p(s),L(t,r)}}}function cs(i){let e,s,t,l,r,a,n,f,$,o,h,g,_;function w(v){i[2](v)}let M={float:!0,min:0,max:100};return i[0]!==void 0&&(M.values=i[0]),n=new $l({props:M}),kt.push(()=>el(n,"values",w)),o=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[ms]},$$scope:{ctx:i}}}),g=new he({props:{code:i[1]}}),{c(){e=S("h2"),s=P("Programmatic resizing"),t=b(),l=S("p"),r=P("This example shows the programmatic way of resizing panes. And how it works both ways."),a=b(),R(n.$$.fragment),$=b(),R(o.$$.fragment),h=b(),R(g.$$.fragment)},l(v){e=z(v,"H2",{});var x=k(e);s=E(x,"Programmatic resizing"),x.forEach(p),t=d(v),l=z(v,"P",{});var y=k(l);r=E(y,"This example shows the programmatic way of resizing panes. And how it works both ways."),y.forEach(p),a=d(v),N(n.$$.fragment,v),$=d(v),N(o.$$.fragment,v),h=d(v),N(g.$$.fragment,v)},m(v,x){m(v,e,x),c(e,s),m(v,t,x),m(v,l,x),c(l,r),m(v,a,x),T(n,v,x),m(v,$,x),T(o,v,x),m(v,h,x),T(g,v,x),_=!0},p(v,[x]){const y={};!f&&x&1&&(f=!0,y.values=v[0],tl(()=>f=!1)),n.$set(y);const D={};x&9&&(D.$$scope={dirty:x,ctx:v}),o.$set(D)},i(v){_||(I(n.$$.fragment,v),I(o.$$.fragment,v),I(g.$$.fragment,v),_=!0)},o(v){A(n.$$.fragment,v),A(o.$$.fragment,v),A(g.$$.fragment,v),_=!1},d(v){v&&p(e),v&&p(t),v&&p(l),v&&p(a),L(n,v),v&&p($),L(o,v),v&&p(h),L(g,v)}}}function hs(i,e,s){let t=[50],l=`
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
</Splitpanes>`;function r(a){t=a,s(0,t)}return[t,l,r]}class _s extends ee{constructor(e){super();te(this,e,hs,cs,le,{})}}function gs(i){let e=i[0]?"Hide":"Show",s;return{c(){s=P(e)},l(t){s=E(t,e)},m(t,l){m(t,s,l)},p(t,l){l&1&&e!==(e=t[0]?"Hide":"Show")&&Ve(s,e)},d(t){t&&p(s)}}}function vs(i){let e,s;return{c(){e=S("span"),s=P("1")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"1"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Zt(i){let e,s;return e=new Y({props:{$$slots:{default:[bs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function bs(i){let e,s;return{c(){e=S("span"),s=P("2")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"2"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function ds(i){let e,s;return{c(){e=S("span"),s=P("3")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"3"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function ws(i){let e,s,t,l,r;e=new Y({props:{$$slots:{default:[vs]},$$scope:{ctx:i}}});let a=i[0]&&Zt(i);return l=new Y({props:{$$slots:{default:[ds]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),a&&a.c(),t=b(),R(l.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),a&&a.l(n),t=d(n),N(l.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),a&&a.m(n,f),m(n,t,f),T(l,n,f),r=!0},p(n,f){const $={};f&8&&($.$$scope={dirty:f,ctx:n}),e.$set($),n[0]?a?f&1&&I(a,1):(a=Zt(n),a.c(),I(a,1),a.m(t.parentNode,t)):a&&(Et(),A(a,1,1,()=>{a=null}),yt());const o={};f&8&&(o.$$scope={dirty:f,ctx:n}),l.$set(o)},i(n){r||(I(e.$$.fragment,n),I(a),I(l.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),A(a),A(l.$$.fragment,n),r=!1},d(n){L(e,n),n&&p(s),a&&a.d(n),n&&p(t),L(l,n)}}}function Ss(i){let e,s,t,l,r,a,n,f,$;return l=new Fe({props:{$$slots:{default:[gs]},$$scope:{ctx:i}}}),l.$on("click",i[1]),a=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[ws]},$$scope:{ctx:i}}}),f=new he({props:{code:i[2]}}),{c(){e=S("h2"),s=P("Toggle a pane on/off"),t=b(),R(l.$$.fragment),r=b(),R(a.$$.fragment),n=b(),R(f.$$.fragment)},l(o){e=z(o,"H2",{});var h=k(e);s=E(h,"Toggle a pane on/off"),h.forEach(p),t=d(o),N(l.$$.fragment,o),r=d(o),N(a.$$.fragment,o),n=d(o),N(f.$$.fragment,o)},m(o,h){m(o,e,h),c(e,s),m(o,t,h),T(l,o,h),m(o,r,h),T(a,o,h),m(o,n,h),T(f,o,h),$=!0},p(o,[h]){const g={};h&9&&(g.$$scope={dirty:h,ctx:o}),l.$set(g);const _={};h&9&&(_.$$scope={dirty:h,ctx:o}),a.$set(_)},i(o){$||(I(l.$$.fragment,o),I(a.$$.fragment,o),I(f.$$.fragment,o),$=!0)},o(o){A(l.$$.fragment,o),A(a.$$.fragment,o),A(f.$$.fragment,o),$=!1},d(o){o&&p(e),o&&p(t),L(l,o),o&&p(r),L(a,o),o&&p(n),L(f,o)}}}function zs(i,e,s){function t(){s(0,l=!l)}let l=!0;return[l,t,`
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
</Splitpanes>`]}class Ps extends ee{constructor(e){super();te(this,e,zs,Ss,le,{})}}function Es(i){let e,s,t=i[0]+`
`,l,r,a,n,f;return{c(){e=S("div"),s=S("pre"),l=P(t),r=b(),a=S("textarea"),this.h()},l($){e=z($,"DIV",{class:!0});var o=k(e);s=z(o,"PRE",{"aria-hidden":!0,style:!0,class:!0});var h=k(s);l=E(h,t),h.forEach(p),r=d(o),a=z(o,"TEXTAREA",{style:!0,class:!0}),k(a).forEach(p),o.forEach(p),this.h()},h(){q(s,"aria-hidden","true"),F(s,"min-height",i[2]),F(s,"max-height",i[1]),q(s,"class","svelte-1gm0t61"),a.readOnly=!0,F(a,"outline","none"),q(a,"class","svelte-1gm0t61"),q(e,"class","container svelte-1gm0t61")},m($,o){m($,e,o),c(e,s),c(s,l),c(e,r),c(e,a),Gt(a,i[0]),n||(f=Pt(a,"input",i[5]),n=!0)},p($,[o]){o&1&&t!==(t=$[0]+`
`)&&Ve(l,t),o&4&&F(s,"min-height",$[2]),o&2&&F(s,"max-height",$[1]),o&1&&Gt(a,$[0])},i:V,o:V,d($){$&&p(e),n=!1,f()}}}function ys(i,e,s){let t,l,{value:r=""}=e,{minRows:a=1}=e,{maxRows:n=40}=e;const f=h=>h.split(/\r?\n/);function $(h,g){const _=f(h);return _.length=g,_.reduce(function(M,v){return M+`
`+v})}function o(){r=this.value,s(0,r),s(4,n)}return i.$$set=h=>{"value"in h&&s(0,r=h.value),"minRows"in h&&s(3,a=h.minRows),"maxRows"in h&&s(4,n=h.maxRows)},i.$$.update=()=>{i.$$.dirty&17&&s(0,r=$(r,n)),i.$$.dirty&8&&s(2,t=`${1+a*1.2}em`),i.$$.dirty&16&&s(1,l=n?`${1+n*1.2}em`:"auto")},[r,l,t,a,n,o]}class ks extends ee{constructor(e){super();te(this,e,ys,Es,le,{value:0,minRows:3,maxRows:4})}}function xs(i,e,s){const t=i.slice();return t[4]=e[s],t[6]=s,t}function Is(i){let e,s=i[6]+1+"",t,l;return{c(){e=S("span"),t=P(s),l=b()},l(r){e=z(r,"SPAN",{});var a=k(e);t=E(a,s),a.forEach(p),l=d(r)},m(r,a){m(r,e,a),c(e,t),m(r,l,a)},p:V,d(r){r&&p(e),r&&p(l)}}}function As(i){let e,s;return e=new Y({props:{minSize:"10",$$slots:{default:[Is]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Bs(i){let e,s,t={length:3},l=[];for(let r=0;r<t.length;r+=1)l[r]=As(xs(i,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ke()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=ke()},m(r,a){for(let n=0;n<l.length;n+=1)l[n].m(r,a);m(r,e,a),s=!0},p:V,i(r){if(!s){for(let a=0;a<t.length;a+=1)I(l[a]);s=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)A(l[a]);s=!1},d(r){qe(l,r),r&&p(e)}}}function Hs(i){let e,s,t,l,r,a,n,f,$,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,se,we,J,_e,ne,K,oe,$e,G,ue,re,fe,me,Q,ce,ge,pe,ae;G=new ie({props:{class:"default-theme",style:"height: 400px",$$slots:{default:[Bs]},$$scope:{ctx:i}}}),G.$on("ready",i[1]),G.$on("resize",i[1]),G.$on("resized",i[1]),G.$on("pane-click",i[1]),G.$on("pane-maximize",i[1]),G.$on("pane-add",i[1]),G.$on("pane-remove",i[1]),G.$on("splitter-click",i[1]);function Se(C){i[3](C)}let ze={minRows:4,maxRows:40};return i[0]!==void 0&&(ze.value=i[0]),Q=new ks({props:ze}),kt.push(()=>el(Q,"value",Se)),pe=new he({props:{code:i[2]}}),{c(){e=S("h2"),s=P("Listening to emitted events"),t=b(),l=S("p"),r=P("Here is the list of events that are emitted from splitpanes:"),a=b(),n=S("ul"),f=S("li"),$=P("ready has no parameter and fires when splitpanes is ready"),o=b(),h=S("li"),g=P(`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),_=b(),w=S("li"),M=P(`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),v=b(),x=S("li"),y=P("pane-click returns the clicked pane object with its dimensions."),D=b(),B=S("li"),O=P("pane-maximize returns the maximized pane object with its dimensions."),Z=b(),W=S("li"),se=P("pane-add returns an object containing the index of the added pane and the new array of panes after resize."),we=b(),J=S("li"),_e=P(`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),ne=b(),K=S("li"),oe=P(`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),$e=b(),R(G.$$.fragment),ue=b(),re=S("p"),fe=P("Try resizing panes and check the logs bellow."),me=b(),R(Q.$$.fragment),ge=b(),R(pe.$$.fragment)},l(C){e=z(C,"H2",{});var U=k(e);s=E(U,"Listening to emitted events"),U.forEach(p),t=d(C),l=z(C,"P",{});var ve=k(l);r=E(ve,"Here is the list of events that are emitted from splitpanes:"),ve.forEach(p),a=d(C),n=z(C,"UL",{});var H=k(n);f=z(H,"LI",{});var be=k(f);$=E(be,"ready has no parameter and fires when splitpanes is ready"),be.forEach(p),o=d(H),h=z(H,"LI",{});var Pe=k(h);g=E(Pe,`resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions`),Pe.forEach(p),_=d(H),w=z(H,"LI",{});var Ee=k(w);M=E(Ee,`resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.`),Ee.forEach(p),v=d(H),x=z(H,"LI",{});var je=k(x);y=E(je,"pane-click returns the clicked pane object with its dimensions."),je.forEach(p),D=d(H),B=z(H,"LI",{});var De=k(B);O=E(De,"pane-maximize returns the maximized pane object with its dimensions."),De.forEach(p),Z=d(H),W=z(H,"LI",{});var ye=k(W);se=E(ye,"pane-add returns an object containing the index of the added pane and the new array of panes after resize."),ye.forEach(p),we=d(H),J=z(H,"LI",{});var Oe=k(J);_e=E(Oe,`pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.`),Oe.forEach(p),ne=d(H),K=z(H,"LI",{});var xe=k(K);oe=E(xe,`splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.`),xe.forEach(p),H.forEach(p),$e=d(C),N(G.$$.fragment,C),ue=d(C),re=z(C,"P",{});var de=k(re);fe=E(de,"Try resizing panes and check the logs bellow."),de.forEach(p),me=d(C),N(Q.$$.fragment,C),ge=d(C),N(pe.$$.fragment,C)},m(C,U){m(C,e,U),c(e,s),m(C,t,U),m(C,l,U),c(l,r),m(C,a,U),m(C,n,U),c(n,f),c(f,$),c(n,o),c(n,h),c(h,g),c(n,_),c(n,w),c(w,M),c(n,v),c(n,x),c(x,y),c(n,D),c(n,B),c(B,O),c(n,Z),c(n,W),c(W,se),c(n,we),c(n,J),c(J,_e),c(n,ne),c(n,K),c(K,oe),m(C,$e,U),T(G,C,U),m(C,ue,U),m(C,re,U),c(re,fe),m(C,me,U),T(Q,C,U),m(C,ge,U),T(pe,C,U),ae=!0},p(C,[U]){const ve={};U&128&&(ve.$$scope={dirty:U,ctx:C}),G.$set(ve);const H={};!ce&&U&1&&(ce=!0,H.value=C[0],tl(()=>ce=!1)),Q.$set(H)},i(C){ae||(I(G.$$.fragment,C),I(Q.$$.fragment,C),I(pe.$$.fragment,C),ae=!0)},o(C){A(G.$$.fragment,C),A(Q.$$.fragment,C),A(pe.$$.fragment,C),ae=!1},d(C){C&&p(e),C&&p(t),C&&p(l),C&&p(a),C&&p(n),C&&p($e),L(G,C),C&&p(ue),C&&p(re),C&&p(me),L(Q,C),C&&p(ge),L(pe,C)}}}function Rs(i,e,s){let t="// Event name: Event params   (Last event at the top)";function l(n){n.detail?s(0,t=n.type+" "+JSON.stringify(n.detail)+`
`+t):s(0,t=n.type+`
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
`;function a(n){t=n,s(0,t)}return[t,l,r,a]}class Ns extends ee{constructor(e){super();te(this,e,Rs,Hs,le,{})}}function Ts(i){let e,s;return{c(){e=S("span"),s=P("1")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"1"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Ls(i){let e,s;return{c(){e=S("span"),s=P("2")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"2"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Ms(i){let e,s;return{c(){e=S("span"),s=P("3")},l(t){e=z(t,"SPAN",{});var l=k(e);s=E(l,"3"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Cs(i){let e,s,t,l,r,a;return e=new Y({props:{$$slots:{default:[Ts]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ls]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ms]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&4&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&4&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&4&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function js(i){let e,s;return e=new ie({props:{theme:"my-theme",$$slots:{default:[Cs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Ds(i){let e,s,t;return{c(){e=S("em"),s=S("p"),t=P("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),this.h()},l(l){e=z(l,"EM",{class:!0});var r=k(e);s=z(r,"P",{});var a=k(s);t=E(a,"In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!"),a.forEach(p),r.forEach(p),this.h()},h(){q(e,"class","specs")},m(l,r){m(l,e,r),c(e,s),c(s,t)},p:V,d(l){l&&p(e)}}}function Os(i){let e,s,t,l;return e=new Y({props:{$$slots:{default:[js]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Ds]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment)},l(r){N(e.$$.fragment,r),s=d(r),N(t.$$.fragment,r)},m(r,a){T(e,r,a),m(r,s,a),T(t,r,a),l=!0},p(r,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:r}),e.$set(n);const f={};a&4&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){l||(I(e.$$.fragment,r),I(t.$$.fragment,r),l=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),l=!1},d(r){L(e,r),r&&p(s),L(t,r)}}}function Vs(i){let e,s,t,l,r,a,n,f,$,o,h,g,_,w,M,v,x;return $=new he({props:{code:i[1]}}),w=new ie({props:{theme:"my-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[Os]},$$scope:{ctx:i}}}),v=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Styling Splitters"),t=b(),l=S("p"),r=P("Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=S("br"),n=P("\n	The default style is called `default-theme`, its SCSS definition can be found below:"),f=b(),R($.$$.fragment),o=b(),h=S("p"),g=P('By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),_=b(),R(w.$$.fragment),M=b(),R(v.$$.fragment)},l(y){e=z(y,"H2",{});var D=k(e);s=E(D,"Styling Splitters"),D.forEach(p),t=d(y),l=z(y,"P",{});var B=k(l);r=E(B,"Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling\n	class and apply it to the SpliPanes component."),a=z(B,"BR",{}),n=E(B,"\n	The default style is called `default-theme`, its SCSS definition can be found below:"),B.forEach(p),f=d(y),N($.$$.fragment,y),o=d(y),h=z(y,"P",{});var O=k(h);g=E(O,'By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes\n	references our new `theme="my-theme"`'),O.forEach(p),_=d(y),N(w.$$.fragment,y),M=d(y),N(v.$$.fragment,y)},m(y,D){m(y,e,D),c(e,s),m(y,t,D),m(y,l,D),c(l,r),c(l,a),c(l,n),m(y,f,D),T($,y,D),m(y,o,D),m(y,h,D),c(h,g),m(y,_,D),T(w,y,D),m(y,M,D),T(v,y,D),x=!0},p(y,[D]){const B={};D&4&&(B.$$scope={dirty:D,ctx:y}),w.$set(B)},i(y){x||(I($.$$.fragment,y),I(w.$$.fragment,y),I(v.$$.fragment,y),x=!0)},o(y){A($.$$.fragment,y),A(w.$$.fragment,y),A(v.$$.fragment,y),x=!1},d(y){y&&p(e),y&&p(t),y&&p(l),y&&p(f),L($,y),y&&p(o),y&&p(h),y&&p(_),L(w,y),y&&p(M),L(v,y)}}}function Ys(i){return[`
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

:global(.my-theme.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
  top: -30px;
  bottom: -30px;
  width: 100%;
}
:global(.my-theme.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  left: -30px;
  right: -30px;
  height: 100%;
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
`]}class Xs extends ee{constructor(e){super();te(this,e,Ys,Vs,le,{})}}function Fs(i){let e,s;return{c(){e=S("p"),s=P("MenuBar")},l(t){e=z(t,"P",{});var l=k(e);s=E(l,"MenuBar"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function qs(i){let e,s;return{c(){e=S("p"),s=P("ToolBar")},l(t){e=z(t,"P",{});var l=k(e);s=E(l,"ToolBar"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Gs(i){let e,s,t,l;return{c(){e=S("p"),s=P("Folder"),t=S("br"),l=P(`
					Try those -->`)},l(r){e=z(r,"P",{});var a=k(e);s=E(a,"Folder"),t=z(a,"BR",{}),l=E(a,`
					Try those -->`),a.forEach(p)},m(r,a){m(r,e,a),c(e,s),c(e,t),c(e,l)},p:V,d(r){r&&p(e)}}}function Us(i){let e,s;return{c(){e=S("p"),s=P("Views")},l(t){e=z(t,"P",{});var l=k(e);s=E(l,"Views"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Ws(i){let e,s;return{c(){e=S("p"),s=P("Details")},l(t){e=z(t,"P",{});var l=k(e);s=E(l,"Details"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Js(i){let e,s,t,l,r,a;return e=new Y({props:{$$slots:{default:[Gs]},$$scope:{ctx:i}}}),t=new Y({props:{$$slots:{default:[Us]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Ws]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment)},l(n){N(e.$$.fragment,n),s=d(n),N(t.$$.fragment,n),l=d(n),N(r.$$.fragment,n)},m(n,f){T(e,n,f),m(n,s,f),T(t,n,f),m(n,l,f),T(r,n,f),a=!0},p(n,f){const $={};f&2&&($.$$scope={dirty:f,ctx:n}),e.$set($);const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o);const h={};f&2&&(h.$$scope={dirty:f,ctx:n}),r.$set(h)},i(n){a||(I(e.$$.fragment,n),I(t.$$.fragment,n),I(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){L(e,n),n&&p(s),L(t,n),n&&p(l),L(r,n)}}}function Qs(i){let e,s;return e=new ie({props:{theme:"modern-theme",$$slots:{default:[Js]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},p(t,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Zs(i){let e,s;return{c(){e=S("p"),s=P("statusbar")},l(t){e=z(t,"P",{});var l=k(e);s=E(l,"statusbar"),l.forEach(p)},m(t,l){m(t,e,l),c(e,s)},p:V,d(t){t&&p(e)}}}function Ks(i){let e,s,t,l,r,a,n,f;return e=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Fs]},$$scope:{ctx:i}}}),t=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[qs]},$$scope:{ctx:i}}}),r=new Y({props:{$$slots:{default:[Qs]},$$scope:{ctx:i}}}),n=new Y({props:{size:"6",minSize:"6",maxSize:"6",$$slots:{default:[Zs]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),s=b(),R(t.$$.fragment),l=b(),R(r.$$.fragment),a=b(),R(n.$$.fragment)},l($){N(e.$$.fragment,$),s=d($),N(t.$$.fragment,$),l=d($),N(r.$$.fragment,$),a=d($),N(n.$$.fragment,$)},m($,o){T(e,$,o),m($,s,o),T(t,$,o),m($,l,o),T(r,$,o),m($,a,o),T(n,$,o),f=!0},p($,o){const h={};o&2&&(h.$$scope={dirty:o,ctx:$}),e.$set(h);const g={};o&2&&(g.$$scope={dirty:o,ctx:$}),t.$set(g);const _={};o&2&&(_.$$scope={dirty:o,ctx:$}),r.$set(_);const w={};o&2&&(w.$$scope={dirty:o,ctx:$}),n.$set(w)},i($){f||(I(e.$$.fragment,$),I(t.$$.fragment,$),I(r.$$.fragment,$),I(n.$$.fragment,$),f=!0)},o($){A(e.$$.fragment,$),A(t.$$.fragment,$),A(r.$$.fragment,$),A(n.$$.fragment,$),f=!1},d($){L(e,$),$&&p(s),L(t,$),$&&p(l),L(r,$),$&&p(a),L(n,$)}}}function en(i){let e,s,t,l,r,a,n,f,$,o;return n=new ie({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[Ks]},$$scope:{ctx:i}}}),$=new he({props:{code:i[0]}}),{c(){e=S("h2"),s=P("Styling Splitters - Modern"),t=b(),l=S("p"),r=P(`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),a=b(),R(n.$$.fragment),f=b(),R($.$$.fragment)},l(h){e=z(h,"H2",{});var g=k(e);s=E(g,"Styling Splitters - Modern"),g.forEach(p),t=d(h),l=z(h,"P",{});var _=k(l);r=E(_,`This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.`),_.forEach(p),a=d(h),N(n.$$.fragment,h),f=d(h),N($.$$.fragment,h)},m(h,g){m(h,e,g),c(e,s),m(h,t,g),m(h,l,g),c(l,r),m(h,a,g),T(n,h,g),m(h,f,g),T($,h,g),o=!0},p(h,[g]){const _={};g&2&&(_.$$scope={dirty:g,ctx:h}),n.$set(_)},i(h){o||(I(n.$$.fragment,h),I($.$$.fragment,h),o=!0)},o(h){A(n.$$.fragment,h),A($.$$.fragment,h),o=!1},d(h){h&&p(e),h&&p(t),h&&p(l),h&&p(a),L(n,h),h&&p(f),L($,h)}}}function tn(i){return[`
<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
<Pane size=6 minSize=6 maxSize=6 >
    <p>MenuBar</p>
</Pane>
<Pane size=6 minSize=6 maxSize=6>
    <p>ToolBar</p>
</Pane>
<Pane>
    <Splitpanes theme="modern-theme">
        <Pane>
            <p>Folder<br/>
            Try those --></p>
        </Pane>
        <Pane>
            <p>Views</p>
        </Pane>
        <Pane>
            <p>Details</p>
        </Pane>
    </Splitpanes>
</Pane>
<Pane size=6 minSize=6 maxSize=6>
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

:global(.modern-theme.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
  top: -3px;
  bottom: -3px;
  width: 100%;
}
:global(.modern-theme.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  left: -3px;
  right: -3px;
  height: 100%;
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
}
:global(.no-splitter.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
  height: 0.125rem;
  pointer-events: none;
}</style>
`]}class ln extends ee{constructor(e){super();te(this,e,tn,en,le,{})}}function sn(i){let e,s,t,l,r,a,n,f,$,o,h,g,_,w,M,v,x,y,D,B,O,Z,W,se,we,J,_e,ne,K,oe,$e,G,ue,re,fe,me,Q,ce,ge,pe,ae,Se,ze,C,U,ve,H,be,Pe,Ee,je,De,ye,Oe,xe,de,Ge,Ue,We,Ie,Je,Qe,Ze,Ae,Ke,et,tt,Be,lt,st,nt,He,rt,at,it,Re,ft,pt,ot,Ne,$t,ut,mt,Te,ct,ht,_t,Le,gt,vt,bt,Me,dt,wt,St,Ce,zt;return de=new vl({}),Ie=new El({}),Ae=new Ll({}),Be=new Yl({}),He=new ts({}),Re=new os({}),Ne=new _s({}),Te=new Ps({}),Le=new Ns({}),Me=new Xs({}),Ce=new ln({}),{c(){e=S("h1"),s=P("Svelte-Splitpane demo"),t=b(),l=S("a"),r=P("https://github.com/orefalo/svelte-splitpanes"),a=b(),n=S("h2"),f=P("Features"),$=b(),o=S("ul"),h=S("li"),g=P("Size is less than 4 kb"),_=b(),w=S("li"),M=P("Support both dynamic horizontal and vertical splits"),v=b(),x=S("li"),y=P("Support defaults, min and max sizes"),D=b(),B=S("li"),O=P("Support multiple splits"),Z=b(),W=S("li"),se=P("Support lifecyle events"),we=b(),J=S("li"),_e=P("Support custom divider size or overlay"),ne=b(),K=S("li"),oe=P("Support splitter pane pushing"),$e=b(),G=S("li"),ue=P("Support RTL rendering"),re=b(),fe=S("li"),me=P("Support first splitter on/off"),Q=b(),ce=S("li"),ge=P("Support pane toggle"),pe=b(),ae=S("li"),Se=P("Support programmatic resizing"),ze=b(),C=S("li"),U=P("Support programmatic splitter add/remove"),ve=b(),H=S("li"),be=P("Support for legacy browser such as IE 11"),Pe=b(),Ee=S("li"),je=P("Support for touch devices"),De=b(),ye=S("li"),Oe=P("Sveltekit & Typescript friendly"),xe=b(),R(de.$$.fragment),Ge=b(),Ue=S("hr"),We=b(),R(Ie.$$.fragment),Je=b(),Qe=S("hr"),Ze=b(),R(Ae.$$.fragment),Ke=b(),et=S("hr"),tt=b(),R(Be.$$.fragment),lt=b(),st=S("hr"),nt=b(),R(He.$$.fragment),rt=b(),at=S("hr"),it=b(),R(Re.$$.fragment),ft=b(),pt=S("hr"),ot=b(),R(Ne.$$.fragment),$t=b(),ut=S("hr"),mt=b(),R(Te.$$.fragment),ct=b(),ht=S("hr"),_t=b(),R(Le.$$.fragment),gt=b(),vt=S("hr"),bt=b(),R(Me.$$.fragment),dt=b(),wt=S("hr"),St=b(),R(Ce.$$.fragment),this.h()},l(u){e=z(u,"H1",{});var j=k(e);s=E(j,"Svelte-Splitpane demo"),j.forEach(p),t=d(u),l=z(u,"A",{href:!0});var xt=k(l);r=E(xt,"https://github.com/orefalo/svelte-splitpanes"),xt.forEach(p),a=d(u),n=z(u,"H2",{});var It=k(n);f=E(It,"Features"),It.forEach(p),$=d(u),o=z(u,"UL",{});var X=k(o);h=z(X,"LI",{});var At=k(h);g=E(At,"Size is less than 4 kb"),At.forEach(p),_=d(X),w=z(X,"LI",{});var Bt=k(w);M=E(Bt,"Support both dynamic horizontal and vertical splits"),Bt.forEach(p),v=d(X),x=z(X,"LI",{});var Ht=k(x);y=E(Ht,"Support defaults, min and max sizes"),Ht.forEach(p),D=d(X),B=z(X,"LI",{});var Rt=k(B);O=E(Rt,"Support multiple splits"),Rt.forEach(p),Z=d(X),W=z(X,"LI",{});var Nt=k(W);se=E(Nt,"Support lifecyle events"),Nt.forEach(p),we=d(X),J=z(X,"LI",{});var Tt=k(J);_e=E(Tt,"Support custom divider size or overlay"),Tt.forEach(p),ne=d(X),K=z(X,"LI",{});var Lt=k(K);oe=E(Lt,"Support splitter pane pushing"),Lt.forEach(p),$e=d(X),G=z(X,"LI",{});var Mt=k(G);ue=E(Mt,"Support RTL rendering"),Mt.forEach(p),re=d(X),fe=z(X,"LI",{});var Ct=k(fe);me=E(Ct,"Support first splitter on/off"),Ct.forEach(p),Q=d(X),ce=z(X,"LI",{});var jt=k(ce);ge=E(jt,"Support pane toggle"),jt.forEach(p),pe=d(X),ae=z(X,"LI",{});var Dt=k(ae);Se=E(Dt,"Support programmatic resizing"),Dt.forEach(p),ze=d(X),C=z(X,"LI",{});var Ot=k(C);U=E(Ot,"Support programmatic splitter add/remove"),Ot.forEach(p),ve=d(X),H=z(X,"LI",{});var Vt=k(H);be=E(Vt,"Support for legacy browser such as IE 11"),Vt.forEach(p),Pe=d(X),Ee=z(X,"LI",{});var Yt=k(Ee);je=E(Yt,"Support for touch devices"),Yt.forEach(p),De=d(X),ye=z(X,"LI",{});var Xt=k(ye);Oe=E(Xt,"Sveltekit & Typescript friendly"),Xt.forEach(p),X.forEach(p),xe=d(u),N(de.$$.fragment,u),Ge=d(u),Ue=z(u,"HR",{}),We=d(u),N(Ie.$$.fragment,u),Je=d(u),Qe=z(u,"HR",{}),Ze=d(u),N(Ae.$$.fragment,u),Ke=d(u),et=z(u,"HR",{}),tt=d(u),N(Be.$$.fragment,u),lt=d(u),st=z(u,"HR",{}),nt=d(u),N(He.$$.fragment,u),rt=d(u),at=z(u,"HR",{}),it=d(u),N(Re.$$.fragment,u),ft=d(u),pt=z(u,"HR",{}),ot=d(u),N(Ne.$$.fragment,u),$t=d(u),ut=z(u,"HR",{}),mt=d(u),N(Te.$$.fragment,u),ct=d(u),ht=z(u,"HR",{}),_t=d(u),N(Le.$$.fragment,u),gt=d(u),vt=z(u,"HR",{}),bt=d(u),N(Me.$$.fragment,u),dt=d(u),wt=z(u,"HR",{}),St=d(u),N(Ce.$$.fragment,u),this.h()},h(){q(l,"href","https://github.com/orefalo/svelte-splitpanes")},m(u,j){m(u,e,j),c(e,s),m(u,t,j),m(u,l,j),c(l,r),m(u,a,j),m(u,n,j),c(n,f),m(u,$,j),m(u,o,j),c(o,h),c(h,g),c(o,_),c(o,w),c(w,M),c(o,v),c(o,x),c(x,y),c(o,D),c(o,B),c(B,O),c(o,Z),c(o,W),c(W,se),c(o,we),c(o,J),c(J,_e),c(o,ne),c(o,K),c(K,oe),c(o,$e),c(o,G),c(G,ue),c(o,re),c(o,fe),c(fe,me),c(o,Q),c(o,ce),c(ce,ge),c(o,pe),c(o,ae),c(ae,Se),c(o,ze),c(o,C),c(C,U),c(o,ve),c(o,H),c(H,be),c(o,Pe),c(o,Ee),c(Ee,je),c(o,De),c(o,ye),c(ye,Oe),m(u,xe,j),T(de,u,j),m(u,Ge,j),m(u,Ue,j),m(u,We,j),T(Ie,u,j),m(u,Je,j),m(u,Qe,j),m(u,Ze,j),T(Ae,u,j),m(u,Ke,j),m(u,et,j),m(u,tt,j),T(Be,u,j),m(u,lt,j),m(u,st,j),m(u,nt,j),T(He,u,j),m(u,rt,j),m(u,at,j),m(u,it,j),T(Re,u,j),m(u,ft,j),m(u,pt,j),m(u,ot,j),T(Ne,u,j),m(u,$t,j),m(u,ut,j),m(u,mt,j),T(Te,u,j),m(u,ct,j),m(u,ht,j),m(u,_t,j),T(Le,u,j),m(u,gt,j),m(u,vt,j),m(u,bt,j),T(Me,u,j),m(u,dt,j),m(u,wt,j),m(u,St,j),T(Ce,u,j),zt=!0},p:V,i(u){zt||(I(de.$$.fragment,u),I(Ie.$$.fragment,u),I(Ae.$$.fragment,u),I(Be.$$.fragment,u),I(He.$$.fragment,u),I(Re.$$.fragment,u),I(Ne.$$.fragment,u),I(Te.$$.fragment,u),I(Le.$$.fragment,u),I(Me.$$.fragment,u),I(Ce.$$.fragment,u),zt=!0)},o(u){A(de.$$.fragment,u),A(Ie.$$.fragment,u),A(Ae.$$.fragment,u),A(Be.$$.fragment,u),A(He.$$.fragment,u),A(Re.$$.fragment,u),A(Ne.$$.fragment,u),A(Te.$$.fragment,u),A(Le.$$.fragment,u),A(Me.$$.fragment,u),A(Ce.$$.fragment,u),zt=!1},d(u){u&&p(e),u&&p(t),u&&p(l),u&&p(a),u&&p(n),u&&p($),u&&p(o),u&&p(xe),L(de,u),u&&p(Ge),u&&p(Ue),u&&p(We),L(Ie,u),u&&p(Je),u&&p(Qe),u&&p(Ze),L(Ae,u),u&&p(Ke),u&&p(et),u&&p(tt),L(Be,u),u&&p(lt),u&&p(st),u&&p(nt),L(He,u),u&&p(rt),u&&p(at),u&&p(it),L(Re,u),u&&p(ft),u&&p(pt),u&&p(ot),L(Ne,u),u&&p($t),u&&p(ut),u&&p(mt),L(Te,u),u&&p(ct),u&&p(ht),u&&p(_t),L(Le,u),u&&p(gt),u&&p(vt),u&&p(bt),L(Me,u),u&&p(dt),u&&p(wt),u&&p(St),L(Ce,u)}}}class an extends ee{constructor(e){super();te(this,e,null,sn,le,{})}}export{an as default};
