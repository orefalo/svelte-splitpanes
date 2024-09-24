import{S as w,i as B,s as y,P as u,a as j,Q as $,f as _,R as g,j as i,n as r,o as m,g as f,U as h,X as H,Y as q,Z as A,T as N,V as T,e as v,b as x,I as d,K as P}from"../chunks/external.BVU14SuU.js";import{E as z}from"../chunks/ExampleArea.hE5zviRz.js";import{S as E,P as b}from"../chunks/svelte-splitpanes.DbPk6hiF.js";import{B as M}from"../chunks/Button.C6dc7c4Y.js";const O=!0,ns=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function I(o){let s=o[0]?"Hide":"Show",e;return{c(){e=H(s)},l(n){e=q(n,s)},m(n,t){i(n,e,t)},p(n,t){t&1&&s!==(s=n[0]?"Hide":"Show")&&A(e,s)},d(n){n&&f(e)}}}function K(o){let s,e="1";return{c(){s=v("span"),s.textContent=e},l(n){s=x(n,"SPAN",{"data-svelte-h":!0}),d(s)!=="svelte-4rug0j"&&(s.textContent=e)},m(n,t){i(n,s,t)},p:P,d(n){n&&f(s)}}}function k(o){let s,e;return s=new b({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment)},l(n){$(s.$$.fragment,n)},m(n,t){g(s,n,t),e=!0},i(n){e||(r(s.$$.fragment,n),e=!0)},o(n){m(s.$$.fragment,n),e=!1},d(n){h(s,n)}}}function L(o){let s,e="2";return{c(){s=v("span"),s.textContent=e},l(n){s=x(n,"SPAN",{"data-svelte-h":!0}),d(s)!=="svelte-1o38sr4"&&(s.textContent=e)},m(n,t){i(n,s,t)},p:P,d(n){n&&f(s)}}}function Q(o){let s,e="3";return{c(){s=v("span"),s.textContent=e},l(n){s=x(n,"SPAN",{"data-svelte-h":!0}),d(s)!=="svelte-100q5wx"&&(s.textContent=e)},m(n,t){i(n,s,t)},p:P,d(n){n&&f(s)}}}function R(o){let s,e,n,t,p;s=new b({props:{$$slots:{default:[K]},$$scope:{ctx:o}}});let a=o[0]&&k(o);return t=new b({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment),e=j(),a&&a.c(),n=j(),u(t.$$.fragment)},l(l){$(s.$$.fragment,l),e=_(l),a&&a.l(l),n=_(l),$(t.$$.fragment,l)},m(l,c){g(s,l,c),i(l,e,c),a&&a.m(l,c),i(l,n,c),g(t,l,c),p=!0},p(l,c){const C={};c&4&&(C.$$scope={dirty:c,ctx:l}),s.$set(C),l[0]?a?c&1&&r(a,1):(a=k(l),a.c(),r(a,1),a.m(n.parentNode,n)):a&&(N(),m(a,1,1,()=>{a=null}),T());const S={};c&4&&(S.$$scope={dirty:c,ctx:l}),t.$set(S)},i(l){p||(r(s.$$.fragment,l),r(a),r(t.$$.fragment,l),p=!0)},o(l){m(s.$$.fragment,l),m(a),m(t.$$.fragment,l),p=!1},d(l){l&&(f(e),f(n)),h(s,l),a&&a.d(l),h(t,l)}}}function U(o){let s,e,n,t;return s=new M({props:{$$slots:{default:[I]},$$scope:{ctx:o}}}),s.$on("click",o[1]),n=new E({props:{style:"height: 400px",$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){u(s.$$.fragment),e=j(),u(n.$$.fragment)},l(p){$(s.$$.fragment,p),e=_(p),$(n.$$.fragment,p)},m(p,a){g(s,p,a),i(p,e,a),g(n,p,a),t=!0},p(p,[a]){const l={};a&5&&(l.$$scope={dirty:a,ctx:p}),s.$set(l);const c={};a&5&&(c.$$scope={dirty:a,ctx:p}),n.$set(c)},i(p){t||(r(s.$$.fragment,p),r(n.$$.fragment,p),t=!0)},o(p){m(s.$$.fragment,p),m(n.$$.fragment,p),t=!1},d(p){p&&f(e),h(s,p),h(n,p)}}}function V(o,s,e){function n(){e(0,t=!t)}let t=!0;return[t,n]}class X extends w{constructor(s){super(),B(this,s,V,U,y,{})}}const Y=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  function onClick() {
    visible = !visible;
  }

  let visible = true;
<\/script>

<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>

<Splitpanes style="height: 400px">
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
</Splitpanes>
`,Z=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/Button.svelte&#x27;</span>;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">onClick</span>(<span class="hljs-params"></span>) {
    visible = !visible;
  }

  <span class="hljs-keyword">let</span> visible = <span class="hljs-literal">true</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">on:click</span>=<span class="hljs-string">{onClick}</span>&gt;</span>{visible ? &#x27;Hide&#x27; : &#x27;Show&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {#if visible}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/if}
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
`,D={code:Y,highlightedHTML:Z,component:X};function F(o){let s,e="Toggle a pane on/off",n,t,p;return t=new z({props:{example:D}}),{c(){s=v("h2"),s.textContent=e,n=j(),u(t.$$.fragment)},l(a){s=x(a,"H2",{"data-svelte-h":!0}),d(s)!=="svelte-1ctmzkw"&&(s.textContent=e),n=_(a),$(t.$$.fragment,a)},m(a,l){i(a,s,l),i(a,n,l),g(t,a,l),p=!0},p:P,i(a){p||(r(t.$$.fragment,a),p=!0)},o(a){m(t.$$.fragment,a),p=!1},d(a){a&&(f(s),f(n)),h(t,a)}}}class as extends w{constructor(s){super(),B(this,s,null,F,y,{})}}export{as as component,ns as universal};
