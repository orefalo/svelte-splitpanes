import{f as a,J as m,k as s,q as n,p as S,i as $,m as w,R as x,D as v}from"../chunks/C1nF5lnu.js";import{H as z,E as q}from"../chunks/C1nUHx1m.js";import{S as y,P as r}from"../chunks/BBnGXyr3.js";const H=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));var T=a("<span>1</span>"),C=a("<span>2</span>"),M=a("<span>3</span>"),L=a("<!> <!> <!>",1),I=a(`<em class="specs"><p>In this example the splitters are thin lines but the reactive touch zone is spread to 30
        pixels all around!</p></em>`),X=a("<!> <!>",1);function Y(i){y(i,{theme:"my-theme",horizontal:!0,style:"height: 400px",children:(o,h)=>{var l=X(),e=m(l);r(e,{children:(u,k)=>{y(u,{theme:"my-theme",children:(b,G)=>{var d=L(),f=m(d);r(f,{children:(p,_)=>{var t=T();s(p,t)},$$slots:{default:!0}});var g=n(f,2);r(g,{children:(p,_)=>{var t=C();s(p,t)},$$slots:{default:!0}});var P=n(g,2);r(P,{children:(p,_)=>{var t=M();s(p,t)},$$slots:{default:!0}}),s(b,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=n(e,2);r(j,{children:(u,k)=>{var b=I();s(u,b)},$$slots:{default:!0}}),s(o,l)},$$slots:{default:!0}})}const A=`<script>
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
`,F={code:A,highlightedHTML:E,component:Y},O=`.splitpanes.default-theme {
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
`,B=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> {
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
`,D=`.splitpanes.default-theme .splitpanes__pane {
  background-color: #f2f2f2;
}
.splitpanes.default-theme .splitpanes__splitter {
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
}
.splitpanes.default-theme .splitpanes__splitter:before, .splitpanes.default-theme .splitpanes__splitter:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s;
}
.splitpanes.default-theme .splitpanes__splitter:hover:before, .splitpanes.default-theme .splitpanes__splitter:hover:after {
  background-color: rgba(0, 0, 0, 0.25);
}
.splitpanes.default-theme .splitpanes__splitter:first-child {
  cursor: auto;
}

.default-theme.splitpanes .splitpanes .splitpanes__splitter {
  z-index: 1;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter,
.default-theme .splitpanes--vertical > .splitpanes__splitter {
  width: 7px;
  border-left: 1px solid #eee;
  cursor: col-resize;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:before, .default-theme.splitpanes--vertical > .splitpanes__splitter:after,
.default-theme .splitpanes--vertical > .splitpanes__splitter:before,
.default-theme .splitpanes--vertical > .splitpanes__splitter:after {
  transform: translateY(-50%);
  width: 1px;
  height: 30px;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:before,
.default-theme .splitpanes--vertical > .splitpanes__splitter:before {
  margin-left: -2px;
}
.default-theme.splitpanes--vertical > .splitpanes__splitter:after,
.default-theme .splitpanes--vertical > .splitpanes__splitter:after {
  margin-left: 1px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter,
.default-theme .splitpanes--horizontal > .splitpanes__splitter {
  height: 7px;
  border-top: 1px solid #eee;
  cursor: row-resize;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:before, .default-theme.splitpanes--horizontal > .splitpanes__splitter:after,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:before,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:after {
  transform: translateX(-50%);
  width: 30px;
  height: 1px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:before,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:before {
  margin-top: -2px;
}
.default-theme.splitpanes--horizontal > .splitpanes__splitter:after,
.default-theme .splitpanes--horizontal > .splitpanes__splitter:after {
  margin-top: 1px;
}`,J=`<span class="hljs-selector-class">.splitpanes</span><span class="hljs-selector-class">.default-theme</span> <span class="hljs-selector-class">.splitpanes__pane</span> {
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
}`,c={code:O,highlightedHTML:B,css:D,cssHighlightedHTML:J};var R=a('<h2>Styling Splitters</h2> <p>Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to\n  select the proper styling class and apply it to the Splitpanes component. <br/> The default style is called `default-theme`, its SCSS definition can be found below ( <b>warning</b> : This is for reference only! If you decide to copy this CSS code, you must rename the ".default-theme"\n  specifier to something else, so it wouldn\'t conflict the library theme CSS definition):</p> <!> <p>Alternatively, here is the default theme compiled to CSS:</p> <!> <p>By altering the above styles, it is possible to achieve neat visual adjustments. Please note how\n  each Splitpanes references our new `theme="my-theme"`</p> <!>',1);function V(i,o){S(o,!1),$();var h=R(),l=n(m(h),4);z(l,{lang:"scss",get highlighted(){return v(c),x(()=>c.highlightedHTML)}});var e=n(l,4);z(e,{lang:"scss",get highlighted(){return v(c),x(()=>c.cssHighlightedHTML)}});var j=n(e,4);q(j,{get example(){return F}}),s(i,h),w()}export{V as component,U as universal};
