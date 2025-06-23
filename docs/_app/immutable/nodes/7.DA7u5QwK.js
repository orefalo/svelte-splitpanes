import{p as A,a as f,l as x,e as P,f as u,q as w,r as b,t as R,a6 as E,k as o,m as L,D as v,B as h,C as y,E as S,a7 as q,z as O,v as d,W as H,J as _,I as J,U as C,V as N}from"../chunks/C1nF5lnu.js";import{E as B}from"../chunks/C1nUHx1m.js";import{S as D,P as I}from"../chunks/BBnGXyr3.js";const U=!0,ts=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));var V=u('<div class="container svelte-1cx9x18"><pre aria-hidden="true" class="svelte-1cx9x18"> </pre> <textarea readonly="" style="outline: none;" class="svelte-1cx9x18"></textarea></div>');function W(l,s){A(s,!1);const n=y(),p=y();let e=f(s,"value",12,""),g=f(s,"minRows",8,1),a=f(s,"maxRows",8,40);const z=r=>r.split(/\r?\n/);function m(r,M){const c=z(r);return c.length=M,c.reduce(function($,T){return $+`
`+T})}x(()=>(v(e()),v(a())),()=>{e(m(e(),a()))}),x(()=>v(g()),()=>{h(n,`${1+g()*1.2}em`)}),x(()=>v(a()),()=>{h(p,a()?`${1+a()*1.2}em`:"auto")}),P();var i=V(),t=b(i),k=b(t,!0);S(t);var j=w(t,2);q(j),S(i),R(()=>{O(t,`min-height: ${d(n)??""}; max-height: ${d(p)??""}`),H(k,e()+`
`)}),E(j,e),o(l,i),L()}var F=u("<span></span>"),G=u("<!> <p>Try resizing panes and check the logs bellow.</p> <!>",1);function K(l){let s=y("// Event name: Event params   (Last event at the top)");function n(a){a.detail?h(s,a.type+" "+JSON.stringify(a.detail)+`
`+d(s)):h(s,a.type+`
`+d(s))}var p=G(),e=_(p);D(e,{style:"height: 400px",$$events:{ready:n,resize:n,resized:n,"pane-click":n,"pane-maximize":n,"pane-add":n,"pane-remove":n,"splitter-click":n},children:(a,z)=>{var m=J(),i=_(m);C(i,0,()=>({length:3}),N,(t,k,j)=>{I(t,{minSize:10,children:(r,M)=>{var c=F();c.textContent=j+1,o(r,c)},$$slots:{default:!0}})}),o(a,m)},$$slots:{default:!0}});var g=w(e,4);W(g,{minRows:4,maxRows:40,get value(){return d(s)},set value(a){h(s,a)},$$legacy:!0}),o(l,p)}const Q=`<script lang="ts">
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import TextArea from '$comp/TextAreaAutosize.svelte';

  let val = '// Event name: Event params   (Last event at the top)';

  function handleMessage(event: any) {
    if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\\n' + val;
    else val = event.type + '\\n' + val;
  }
<\/script>

<Splitpanes
  style="height: 400px"
  on:ready={handleMessage}
  on:resize={handleMessage}
  on:resized={handleMessage}
  on:pane-click={handleMessage}
  on:pane-maximize={handleMessage}
  on:pane-add={handleMessage}
  on:pane-remove={handleMessage}
  on:splitter-click={handleMessage}>
  {#each { length: 3 } as _, i}
    <Pane minSize={10}>
      <span>{i + 1}</span>
    </Pane>
  {/each}
</Splitpanes>

<p>Try resizing panes and check the logs bellow.</p>

<TextArea bind:value={val} minRows={4} maxRows={40} />
`,X=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pane</span>, <span class="hljs-title class_">Splitpanes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-splitpanes&#x27;</span>;

  <span class="hljs-keyword">import</span> <span class="hljs-title class_">TextArea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/TextAreaAutosize.svelte&#x27;</span>;

  <span class="hljs-keyword">let</span> val = <span class="hljs-string">&#x27;// Event name: Event params   (Last event at the top)&#x27;</span>;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
    <span class="hljs-keyword">if</span> (event.<span class="hljs-property">detail</span>) val = event.<span class="hljs-property">type</span> + <span class="hljs-string">&#x27; &#x27;</span> + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event.<span class="hljs-property">detail</span>) + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;
    <span class="hljs-keyword">else</span> val = event.<span class="hljs-property">type</span> + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Splitpanes</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 400px&quot;</span>
  <span class="hljs-attr">on:ready</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:resize</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:resized</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:pane-click</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:pane-maximize</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:pane-add</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:pane-remove</span>=<span class="hljs-string">{handleMessage}</span>
  <span class="hljs-attr">on:splitter-click</span>=<span class="hljs-string">{handleMessage}</span>&gt;</span>
  {#each { length: 3 } as _, i}
    <span class="hljs-tag">&lt;<span class="hljs-name">Pane</span> <span class="hljs-attr">minSize</span>=<span class="hljs-string">{10}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{i + 1}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Pane</span>&gt;</span>
  {/each}
<span class="hljs-tag">&lt;/<span class="hljs-name">Splitpanes</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try resizing panes and check the logs bellow.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{val}</span> <span class="hljs-attr">minRows</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">maxRows</span>=<span class="hljs-string">{40}</span> /&gt;</span>
`,Y={code:Q,highlightedHTML:X,component:K};var Z=u(`<h2>Listening to emitted events</h2> <p>Here is the list of events that are emitted from splitpanes:</p> <ul><li>ready has no parameter and fires when splitpanes is ready</li> <li>resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes
    objects with their dimensions</li> <li>resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an
    array of all the panes objects with their dimensions. The event also fires after adding or
    removing a pane.</li> <li>pane-click returns the clicked pane object with its dimensions.</li> <li>pane-maximize returns the maximized pane object with its dimensions.</li> <li>pane-add returns an object containing the index of the added pane and the new array of panes
    after resize.</li> <li>pane-remove returns an object containing the removed pane and an array of all the remaining
    panes objects with their dimensions after resize.</li> <li>splitter-click returns the next pane object (with its dimensions) directly after the clicked
    splitter. This event is only emitted if dragging did not occur between mousedown and mouseup.</li></ul> <!>`,1);function ls(l){var s=Z(),n=w(_(s),6);B(n,{get example(){return Y}}),o(l,s)}export{ls as component,ts as universal};
