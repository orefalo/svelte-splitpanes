import{f as a,I as h,k as s,q as t}from"../chunks/D9fOklKB.js";import{E as x}from"../chunks/CMw-sgcZ.js";import{S,P as p}from"../chunks/BeMtSZS_.js";const $=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:$},Symbol.toStringTag,{value:"Module"}));var y=a("<p>MenuBar - This is a splitpane, note how the splitters made static using CSS</p>"),k=a("<p>ToolBar - This is another fixed size, locked splitpane</p>"),w=a("<p>Folder <br/> You can move those --&gt;</p>"),q=a("<p>Sample content</p>"),T=a("<p>Details <br/> &lt;-- You can move those</p>"),C=a("<!> <!> <!>",1),B=a("<p>statusbar - and yet, another splitpane, same technique</p>"),M=a("<!> <!> <!> <!>",1);function Y(o){S(o,{theme:"no-splitter",horizontal:!0,style:"height: 400px",dblClickSplitter:!1,children:(c,j)=>{var m=M(),g=h(m);p(g,{size:6,minSize:6,maxSize:6,children:(n,i)=>{var l=y();s(n,l)},$$slots:{default:!0}});var u=t(g,2);p(u,{size:6,minSize:6,maxSize:6,children:(n,i)=>{var l=k();s(n,l)},$$slots:{default:!0}});var b=t(u,2);p(b,{children:(n,i)=>{S(n,{theme:"modern-theme",children:(l,A)=>{var d=C(),_=h(d);p(_,{children:(e,v)=>{var r=w();s(e,r)},$$slots:{default:!0}});var f=t(_,2);p(f,{children:(e,v)=>{var r=q();s(e,r)},$$slots:{default:!0}});var P=t(f,2);p(P,{children:(e,v)=>{var r=T();s(e,r)},$$slots:{default:!0}}),s(l,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=t(b,2);p(z,{size:6,minSize:6,maxSize:6,children:(n,i)=>{var l=B();s(n,l)},$$slots:{default:!0}}),s(c,m)},$$slots:{default:!0}})}const F=`<script>
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
          You can move those --&gt;
        </p>
      </Pane>
      <Pane>
        <p>Sample content</p>
      </Pane>
      <Pane>
        <p>
          Details
          <br />
          &lt;-- You can move those
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
`,D=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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
          You can move those --<span class="hljs-symbol">&amp;gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Sample content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
          Details
          <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
          <span class="hljs-symbol">&amp;lt;</span>-- You can move those
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
`,E={code:F,highlightedHTML:D,component:Y};var O=a(`<h2>Styling Splitters - Modern</h2> <p>This examples uses CSS styles to pixel size panes and lock them in place. applied to panes in
  order to achieve the desired layout.</p> <!>`,1);function J(o){var c=O(),j=t(h(c),4);x(j,{get example(){return E}}),s(o,c)}export{J as component,G as universal};
