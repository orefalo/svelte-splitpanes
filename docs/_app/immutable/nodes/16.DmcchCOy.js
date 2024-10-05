import{S as B,i as F,s as M,P as u,Q as j,R as g,n as f,o as $,U as _,a as v,f as S,j as m,g as h,e as b,b as d,I as k,K as P,X as C,d as D,Y as w,k as x}from"../chunks/external.OMNCa6bn.js";import{E as R}from"../chunks/ExampleArea.CfnMKFS3.js";import{S as E,P as z}from"../chunks/svelte-splitpanes.BZFpAnX9.js";const H=!0,es=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function O(i){let s,l="MenuBar - This is a splitpane, note how the splitters made static using CSS";return{c(){s=b("p"),s.textContent=l},l(n){s=d(n,"P",{"data-svelte-h":!0}),k(s)!=="svelte-3kdbz5"&&(s.textContent=l)},m(n,e){m(n,s,e)},p:P,d(n){n&&h(s)}}}function A(i){let s,l="ToolBar - This is another fixed size, locked splitpane";return{c(){s=b("p"),s.textContent=l},l(n){s=d(n,"P",{"data-svelte-h":!0}),k(s)!=="svelte-21u7wq"&&(s.textContent=l)},m(n,e){m(n,s,e)},p:P,d(n){n&&h(s)}}}function I(i){let s,l,n,e,c=">",o;return{c(){s=b("p"),l=C(`Folder
          `),n=b("br"),e=C(`
          You can move those --`),o=C(c)},l(t){s=d(t,"P",{});var p=D(s);l=w(p,`Folder
          `),n=d(p,"BR",{}),e=w(p,`
          You can move those --`),o=w(p,c),p.forEach(h)},m(t,p){m(t,s,p),x(s,l),x(s,n),x(s,e),x(s,o)},p:P,d(t){t&&h(s)}}}function K(i){let s,l="Sample content";return{c(){s=b("p"),s.textContent=l},l(n){s=d(n,"P",{"data-svelte-h":!0}),k(s)!=="svelte-13tau5d"&&(s.textContent=l)},m(n,e){m(n,s,e)},p:P,d(n){n&&h(s)}}}function L(i){let s,l,n,e,c="<",o,t;return{c(){s=b("p"),l=C(`Details
          `),n=b("br"),e=v(),o=C(c),t=C("-- You can move those")},l(p){s=d(p,"P",{});var a=D(s);l=w(a,`Details
          `),n=d(a,"BR",{}),e=S(a),o=w(a,c),t=w(a,"-- You can move those"),a.forEach(h)},m(p,a){m(p,s,a),x(s,l),x(s,n),x(s,e),x(s,o),x(s,t)},p:P,d(p){p&&h(s)}}}function Q(i){let s,l,n,e,c,o;return s=new z({props:{$$slots:{default:[I]},$$scope:{ctx:i}}}),n=new z({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),c=new z({props:{$$slots:{default:[L]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment),l=v(),u(n.$$.fragment),e=v(),u(c.$$.fragment)},l(t){j(s.$$.fragment,t),l=S(t),j(n.$$.fragment,t),e=S(t),j(c.$$.fragment,t)},m(t,p){g(s,t,p),m(t,l,p),g(n,t,p),m(t,e,p),g(c,t,p),o=!0},p(t,p){const a={};p&1&&(a.$$scope={dirty:p,ctx:t}),s.$set(a);const r={};p&1&&(r.$$scope={dirty:p,ctx:t}),n.$set(r);const q={};p&1&&(q.$$scope={dirty:p,ctx:t}),c.$set(q)},i(t){o||(f(s.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),o=!0)},o(t){$(s.$$.fragment,t),$(n.$$.fragment,t),$(c.$$.fragment,t),o=!1},d(t){t&&(h(l),h(e)),_(s,t),_(n,t),_(c,t)}}}function U(i){let s,l;return s=new E({props:{theme:"modern-theme",$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment)},l(n){j(s.$$.fragment,n)},m(n,e){g(s,n,e),l=!0},p(n,e){const c={};e&1&&(c.$$scope={dirty:e,ctx:n}),s.$set(c)},i(n){l||(f(s.$$.fragment,n),l=!0)},o(n){$(s.$$.fragment,n),l=!1},d(n){_(s,n)}}}function X(i){let s,l="statusbar - and yet, another splitpane, same technique";return{c(){s=b("p"),s.textContent=l},l(n){s=d(n,"P",{"data-svelte-h":!0}),k(s)!=="svelte-15qotaw"&&(s.textContent=l)},m(n,e){m(n,s,e)},p:P,d(n){n&&h(s)}}}function G(i){let s,l,n,e,c,o,t,p;return s=new z({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[O]},$$scope:{ctx:i}}}),n=new z({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[A]},$$scope:{ctx:i}}}),c=new z({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),t=new z({props:{size:6,minSize:6,maxSize:6,$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment),l=v(),u(n.$$.fragment),e=v(),u(c.$$.fragment),o=v(),u(t.$$.fragment)},l(a){j(s.$$.fragment,a),l=S(a),j(n.$$.fragment,a),e=S(a),j(c.$$.fragment,a),o=S(a),j(t.$$.fragment,a)},m(a,r){g(s,a,r),m(a,l,r),g(n,a,r),m(a,e,r),g(c,a,r),m(a,o,r),g(t,a,r),p=!0},p(a,r){const q={};r&1&&(q.$$scope={dirty:r,ctx:a}),s.$set(q);const y={};r&1&&(y.$$scope={dirty:r,ctx:a}),n.$set(y);const T={};r&1&&(T.$$scope={dirty:r,ctx:a}),c.$set(T);const Y={};r&1&&(Y.$$scope={dirty:r,ctx:a}),t.$set(Y)},i(a){p||(f(s.$$.fragment,a),f(n.$$.fragment,a),f(c.$$.fragment,a),f(t.$$.fragment,a),p=!0)},o(a){$(s.$$.fragment,a),$(n.$$.fragment,a),$(c.$$.fragment,a),$(t.$$.fragment,a),p=!1},d(a){a&&(h(l),h(e),h(o)),_(s,a),_(n,a),_(c,a),_(t,a)}}}function J(i){let s,l;return s=new E({props:{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){u(s.$$.fragment)},l(n){j(s.$$.fragment,n)},m(n,e){g(s,n,e),l=!0},p(n,[e]){const c={};e&1&&(c.$$scope={dirty:e,ctx:n}),s.$set(c)},i(n){l||(f(s.$$.fragment,n),l=!0)},o(n){$(s.$$.fragment,n),l=!1},d(n){_(s,n)}}}class N extends B{constructor(s){super(),F(this,s,null,J,M,{})}}const V=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>MenuBar - This is a splitpane, note how the splitters made static using CSS</p>
  </Pane>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>ToolBar - This is another fixed size, locked splitpane</p>
  </Pane>
  <Pane>
    <Splitpanes theme="modern-theme">
      <Pane>
        <p>
          Folder
          <br />
          You can move those --{'>'}
        </p>
      </Pane>
      <Pane>
        <p>Sample content</p>
      </Pane>
      <Pane>
        <p>
          Details
          <br />
          {'<'}-- You can move those
        </p>
      </Pane>
    </Splitpanes>
  </Pane>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>statusbar - and yet, another splitpane, same technique</p>
  </Pane>
</Splitpanes>

<style global lang="scss">
  .splitpanes.modern-theme {
    .splitpanes__pane {
      background-color: #f8f8f8;
    }
    .splitpanes__splitter {
      background-color: #ccc;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        transition: opacity 0.4s;
        background-color: #2db9d2;
        opacity: 0;
        z-index: 1;
      }
      &:hover:before {
        opacity: 1;
      }
      &.splitpanes__splitter__active {
        z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
      }
    }
  }
  .modern-theme {
    &.splitpanes--vertical > .splitpanes__splitter:before {
      left: -3px;
      right: -3px;
      height: 100%;
      cursor: col-resize;
    }
    &.splitpanes--horizontal > .splitpanes__splitter:before {
      top: -3px;
      bottom: -3px;
      width: 100%;
      cursor: row-resize;
    }
  }

  .splitpanes.no-splitter {
    .splitpanes__pane {
      background-color: #f8f8f8;
    }
    .splitpanes__splitter {
      background-color: #ccc;
      position: relative;
    }
  }
  .no-splitter {
    &.splitpanes--horizontal > .splitpanes__splitter:before {
      width: 0.125rem;
      pointer-events: none;
      cursor: none;
    }
    &.splitpanes--vertical > .splitpanes__splitter:before {
      height: 0.125rem;
      pointer-events: none;
      cursor: none;
    }
  }
</style>
`,W=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;no-splitter&quot;</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span> <span class="hljs-attr">dblClickSplitter</span>=<span class="hljs-string">{false}</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>MenuBar - This is a splitpane, note how the splitters made static using CSS<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>ToolBar - This is another fixed size, locked splitpane<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;modern-theme&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
          Folder
          <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
          You can move those --{&#x27;&gt;&#x27;}
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Sample content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
          Details
          <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
          {&#x27;&lt;&#x27;}-- You can move those
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{6}</span> <span class="hljs-attr">maxSize</span>=<span class="hljs-string">{6}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>statusbar - and yet, another splitpane, same technique<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">global</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.modern-theme</span> {
    <span class="hljs-selector-class">.splitpanes__pane</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f8f8f8</span>;
    }
    <span class="hljs-selector-class">.splitpanes__splitter</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ccc</span>;
      <span class="hljs-attribute">position</span>: relative;

      &amp;<span class="hljs-selector-pseudo">:before</span> {
        <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
        <span class="hljs-attribute">position</span>: absolute;
        <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">transition</span>: opacity <span class="hljs-number">0.4s</span>;
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#2db9d2</span>;
        <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
      }
      &amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span> {
        <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
      }
      &amp;<span class="hljs-selector-class">.splitpanes__splitter__active</span> {
        <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>; <span class="hljs-comment">/* Fix an issue of overlap fighting with a near hovered splitter */</span>
      }
    }
  }
  <span class="hljs-selector-class">.modern-theme</span> {
    &amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">left</span>: -<span class="hljs-number">3px</span>;
      <span class="hljs-attribute">right</span>: -<span class="hljs-number">3px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">cursor</span>: col-resize;
    }
    &amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">top</span>: -<span class="hljs-number">3px</span>;
      <span class="hljs-attribute">bottom</span>: -<span class="hljs-number">3px</span>;
      <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">cursor</span>: row-resize;
    }
  }

  <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.no-splitter</span> {
    <span class="hljs-selector-class">.splitpanes__pane</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f8f8f8</span>;
    }
    <span class="hljs-selector-class">.splitpanes__splitter</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ccc</span>;
      <span class="hljs-attribute">position</span>: relative;
    }
  }
  <span class="hljs-selector-class">.no-splitter</span> {
    &amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">width</span>: <span class="hljs-number">0.125rem</span>;
      <span class="hljs-attribute">pointer-events</span>: none;
      <span class="hljs-attribute">cursor</span>: none;
    }
    &amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">height</span>: <span class="hljs-number">0.125rem</span>;
      <span class="hljs-attribute">pointer-events</span>: none;
      <span class="hljs-attribute">cursor</span>: none;
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,Z={code:V,highlightedHTML:W,component:N};function ss(i){let s,l="Styling Splitters - Modern",n,e,c=`This examples uses CSS styles to pixel size panes and lock them in place. applied to panes in
  order to achieve the desired layout.`,o,t,p;return t=new R({props:{example:Z}}),{c(){s=b("h2"),s.textContent=l,n=v(),e=b("p"),e.textContent=c,o=v(),u(t.$$.fragment)},l(a){s=d(a,"H2",{"data-svelte-h":!0}),k(s)!=="svelte-19kgt5i"&&(s.textContent=l),n=S(a),e=d(a,"P",{"data-svelte-h":!0}),k(e)!=="svelte-1jcvbhe"&&(e.textContent=c),o=S(a),j(t.$$.fragment,a)},m(a,r){m(a,s,r),m(a,n,r),m(a,e,r),m(a,o,r),g(t,a,r),p=!0},p:P,i(a){p||(f(t.$$.fragment,a),p=!0)},o(a){$(t.$$.fragment,a),p=!1},d(a){a&&(h(s),h(n),h(e),h(o)),_(t,a)}}}class ls extends B{constructor(s){super(),F(this,s,null,ss,M,{})}}export{ls as component,es as universal};
