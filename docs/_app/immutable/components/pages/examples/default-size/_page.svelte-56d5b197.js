import{S as V,i as j,s as F,U as G,k as _,q as z,a as b,w as E,l as d,m as x,r as g,h as i,c as S,x as N,b as m,C as $,y as q,f as A,t as C,z as I,V as R,D as H}from"../../../../chunks/svelte-splitpanes-01df2d15.js";import{C as J}from"../../../../chunks/CodeArea-5e3138e2.js";function K(p){let e,l;return{c(){e=_("span"),l=z("1")},l(a){e=d(a,"SPAN",{});var s=x(e);l=g(s,"1"),s.forEach(i)},m(a,s){m(a,e,s),$(e,l)},p:H,d(a){a&&i(e)}}}function L(p){let e,l;return{c(){e=_("span"),l=z("2")},l(a){e=d(a,"SPAN",{});var s=x(e);l=g(s,"2"),s.forEach(i)},m(a,s){m(a,e,s),$(e,l)},p:H,d(a){a&&i(e)}}}function M(p){let e,l;return{c(){e=_("span"),l=z("3")},l(a){e=d(a,"SPAN",{});var s=x(e);l=g(s,"3"),s.forEach(i)},m(a,s){m(a,e,s),$(e,l)},p:H,d(a){a&&i(e)}}}function O(p){let e,l,a,s,f,c;return e=new R({props:{size:65,$$slots:{default:[K]},$$scope:{ctx:p}}}),a=new R({props:{size:10,$$slots:{default:[L]},$$scope:{ctx:p}}}),f=new R({props:{size:25,$$slots:{default:[M]},$$scope:{ctx:p}}}),{c(){E(e.$$.fragment),l=b(),E(a.$$.fragment),s=b(),E(f.$$.fragment)},l(t){N(e.$$.fragment,t),l=S(t),N(a.$$.fragment,t),s=S(t),N(f.$$.fragment,t)},m(t,r){q(e,t,r),m(t,l,r),q(a,t,r),m(t,s,r),q(f,t,r),c=!0},p(t,r){const P={};r&2&&(P.$$scope={dirty:r,ctx:t}),e.$set(P);const w={};r&2&&(w.$$scope={dirty:r,ctx:t}),a.$set(w);const y={};r&2&&(y.$$scope={dirty:r,ctx:t}),f.$set(y)},i(t){c||(A(e.$$.fragment,t),A(a.$$.fragment,t),A(f.$$.fragment,t),c=!0)},o(t){C(e.$$.fragment,t),C(a.$$.fragment,t),C(f.$$.fragment,t),c=!1},d(t){I(e,t),t&&i(l),I(a,t),t&&i(s),I(f,t)}}}function Q(p){let e,l,a,s,f,c,t,r,P,w,y,k,h,B,v,D;return h=new G({props:{class:"default-theme",horizontal:!0,style:"height: 400px",$$slots:{default:[O]},$$scope:{ctx:p}}}),v=new J({props:{id:"default_size",code:p[0]}}),{c(){e=_("h2"),l=z("Default pane size"),a=b(),s=_("p"),f=z(`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),c=_("br"),t=b(),r=_("b"),P=z(`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),w=_("br"),y=z(" Note that setting a default value is different than setting a min or max value."),k=b(),E(h.$$.fragment),B=b(),E(v.$$.fragment)},l(n){e=d(n,"H2",{});var o=x(e);l=g(o,"Default pane size"),o.forEach(i),a=S(n),s=d(n,"P",{});var u=x(s);f=g(u,`Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).`),c=d(u,"BR",{}),t=S(u),r=d(u,"B",{});var U=x(r);P=g(U,`If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.`),U.forEach(i),w=d(u,"BR",{}),y=g(u," Note that setting a default value is different than setting a min or max value."),u.forEach(i),k=S(n),N(h.$$.fragment,n),B=S(n),N(v.$$.fragment,n)},m(n,o){m(n,e,o),$(e,l),m(n,a,o),m(n,s,o),$(s,f),$(s,c),$(s,t),$(s,r),$(r,P),$(s,w),$(s,y),m(n,k,o),q(h,n,o),m(n,B,o),q(v,n,o),D=!0},p(n,[o]){const u={};o&2&&(u.$$scope={dirty:o,ctx:n}),h.$set(u)},i(n){D||(A(h.$$.fragment,n),A(v.$$.fragment,n),D=!0)},o(n){C(h.$$.fragment,n),C(v.$$.fragment,n),D=!1},d(n){n&&i(e),n&&i(a),n&&i(s),n&&i(k),I(h,n),n&&i(B),I(v,n)}}}function T(p){return[`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
</script>	
<Splitpanes class="default-theme" horizontal style="height: 400px">
    <Pane size={65}>
        <span>1</span>
    </Pane>
    <Pane size={10}>
        <span>2</span>
    </Pane>
    <Pane size={25}>
        <span>3</span>
    </Pane>
</Splitpanes>`]}class Y extends V{constructor(e){super(),j(this,e,T,Q,F,{})}}export{Y as default};
