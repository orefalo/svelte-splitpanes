import{S as d,i as p,s as _,e as h,a as b,b as m,f as g,I as v,h as f,J as y,j as l,K as r,g as n,L as z}from"../chunks/external.121b1659.js";function S(u){let e,o,s,i,c=`The badge above tells the amortized size of the library after minification when using all the library features.
	<br/>
	It is computed in the build time of the demo website, specifying how much size it really takes after the Rollup build process,
	for the client code and the server(SSR) code.`;return{c(){e=h("img"),s=b(),i=h("p"),i.innerHTML=c,this.h()},l(t){e=m(t,"IMG",{alt:!0,src:!0}),s=g(t),i=m(t,"P",{"data-svelte-h":!0}),v(i)!=="svelte-fyi9y1"&&(i.innerHTML=c),this.h()},h(){f(e,"alt","Minified Size"),y(e.src,o=z+"/minified-size-badge.svg")||f(e,"src",o)},m(t,a){l(t,e,a),l(t,s,a),l(t,i,a)},p:r,i:r,o:r,d(t){t&&(n(e),n(s),n(i))}}}class M extends d{constructor(e){super(),p(this,e,null,S,_,{})}}export{M as component};