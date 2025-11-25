import{f as a,I as b,k as s,q as n,p as P,i as S,m as $}from"../chunks/4agq1G7u.js";import{H as _,E as k}from"../chunks/D8nrRwXE.js";import{S as x,P as c}from"../chunks/DuKXqq9G.js";const w=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:w},Symbol.toStringTag,{value:"Module"}));var q=a("<span>1</span>"),H=a("<span>2</span>"),T=a("<span>3</span>"),C=a("<!> <!> <!>",1),M=a(`<em class="specs"><p>In this example the splitters are thin lines but the reactive touch zone is spread to 30
        pixels all around!</p></em>`),L=a("<!> <!>",1);function I(r){x(r,{theme:"my-theme",horizontal:!0,style:"height: 400px",children:(h,o)=>{var l=L(),p=b(l);c(p,{children:(j,y)=>{x(j,{theme:"my-theme",children:(u,B)=>{var m=C(),g=b(m);c(g,{children:(e,f)=>{var t=q();s(e,t)},$$slots:{default:!0}});var d=n(g,2);c(d,{children:(e,f)=>{var t=H();s(e,t)},$$slots:{default:!0}});var z=n(d,2);c(z,{children:(e,f)=>{var t=T();s(e,t)},$$slots:{default:!0}}),s(u,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=n(p,2);c(i,{children:(j,y)=>{var u=M();s(j,u)},$$slots:{default:!0}}),s(h,l)},$$slots:{default:!0}})}const A=`<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
<\/script>

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
  <Pane>
    <em class="specs">
      <p>
        In this example the splitters are thin lines but the reactive touch zone is spread to 30
        pixels all around!
      </p>
    </em>
  </Pane>
</Splitpanes>

<style global lang="scss">
  .splitpanes.my-theme {
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
        background-color: rgba(255, 0, 0, 0.3);
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
  .my-theme {
    &.splitpanes--vertical > .splitpanes__splitter:before {
      left: -30px;
      right: -30px;
      height: 100%;
      cursor: col-resize;
    }
    &.splitpanes--horizontal > .splitpanes__splitter:before {
      top: -30px;
      bottom: -30px;
      width: 100%;
      cursor: row-resize;
    }
  }
</style>
`,E=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;my-theme&quot;</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;my-theme&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">em</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;specs&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        In this example the splitters are thin lines but the reactive touch zone is spread to 30
        pixels all around!
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">global</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.my-theme</span> {
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
        <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
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
  <span class="hljs-selector-class">.my-theme</span> {
    &amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">left</span>: -<span class="hljs-number">30px</span>;
      <span class="hljs-attribute">right</span>: -<span class="hljs-number">30px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">cursor</span>: col-resize;
    }
    &amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">top</span>: -<span class="hljs-number">30px</span>;
      <span class="hljs-attribute">bottom</span>: -<span class="hljs-number">30px</span>;
      <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">cursor</span>: row-resize;
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,F={code:A,highlightedHTML:E,component:I},O=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> {
  <span class="hljs-selector-class">.splitpanes__pane</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f2f2f2</span>;
  }
  <span class="hljs-selector-class">.splitpanes__splitter</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
    &amp;<span class="hljs-selector-pseudo">:before</span>,
    &amp;<span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
      <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
      <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.15</span>);
      <span class="hljs-attribute">transition</span>: background-color <span class="hljs-number">0.3s</span>;
    }
    &amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span>,
    &amp;<span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.25</span>);
    }
    &amp;<span class="hljs-selector-pseudo">:first-child</span> {
      <span class="hljs-attribute">cursor</span>: auto;
    }
  }
}
<span class="hljs-selector-class">.default-theme</span> {
  &amp;<span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
  }
  &amp;<span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
  <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">7px</span>;
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
    <span class="hljs-attribute">cursor</span>: col-resize;
    &amp;<span class="hljs-selector-pseudo">:before</span>,
    &amp;<span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">1px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
    }
    &amp;<span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">2px</span>;
    }
    &amp;<span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">1px</span>;
    }
  }
  &amp;<span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
  <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">7px</span>;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
    <span class="hljs-attribute">cursor</span>: row-resize;
    &amp;<span class="hljs-selector-pseudo">:before</span>,
    &amp;<span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(-<span class="hljs-number">50%</span>);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">30px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">1px</span>;
    }
    &amp;<span class="hljs-selector-pseudo">:before</span> {
      <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">2px</span>;
    }
    &amp;<span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">1px</span>;
    }
  }
}
`,X=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__pane</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f2f2f2</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">box-sizing</span>: border-box;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;&quot;</span>;
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.15</span>);
  <span class="hljs-attribute">transition</span>: background-color <span class="hljs-number">0.3s</span>;
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.25</span>);
}
<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:first-child</span> {
  <span class="hljs-attribute">cursor</span>: auto;
}

<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes</span> <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">7px</span>;
  <span class="hljs-attribute">border-left</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
  <span class="hljs-attribute">cursor</span>: col-resize;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
  <span class="hljs-attribute">width</span>: <span class="hljs-number">1px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
  <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">2px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--vertical</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">1px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">7px</span>;
  <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
  <span class="hljs-attribute">cursor</span>: row-resize;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>, <span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(-<span class="hljs-number">50%</span>);
  <span class="hljs-attribute">width</span>: <span class="hljs-number">30px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">1px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:before</span> {
  <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">2px</span>;
}
<span class="hljs-selector-class">.default-theme</span><span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span>,
<span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes--horizontal</span> &gt; <span class="hljs-selector-class">.splitpanes__splitter</span><span class="hljs-selector-pseudo">:after</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">1px</span>;
}`,v={highlightedHTML:O,cssHighlightedHTML:X};var Y=a('<h2>Styling Splitters</h2> <p>Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to\n  select the proper styling class and apply it to the Splitpanes component. <br/> The default style is called `default-theme`, its SCSS definition can be found below ( <b>warning</b> : This is for reference only! If you decide to copy this CSS code, you must rename the ".default-theme"\n  specifier to something else, so it wouldn\'t conflict the library theme CSS definition):</p> <!> <p>Alternatively, here is the default theme compiled to CSS:</p> <!> <p>By altering the above styles, it is possible to achieve neat visual adjustments. Please note how\n  each Splitpanes references our new `theme="my-theme"`</p> <!>',1);function N(r,h){P(h,!1),S();var o=Y(),l=n(b(o),4);_(l,{lang:"scss",get highlighted(){return v.highlightedHTML}});var p=n(l,4);_(p,{lang:"scss",get highlighted(){return v.cssHighlightedHTML}});var i=n(p,4);k(i,{get example(){return F}}),s(r,o),$()}export{N as component,K as universal};
