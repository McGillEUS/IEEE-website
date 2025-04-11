import{s as w,y as A,f as p,g,h as $,d as m,j as u,i as h,A as k,C as j,D as G,E as B,G as L,J,a as b,c as S,V as O,U as C}from"../chunks/scheduler.318efbbf.js";import{S as x,i as D,a as d,t as v,b as I,d as T,m as V,e as z,g as P,c as U}from"../chunks/index.3ba6a661.js";import{e as E}from"../chunks/each.e59479a4.js";import{S as F}from"../chunks/Section.a85e6943.js";const K=a=>({}),H=a=>({});function N(a){let e,l='<img src="https://via.placeholder.com/150" alt="sponsor-logo-missing"/>';return{c(){e=p("em"),e.innerHTML=l},l(s){e=g(s,"EM",{"data-svelte-h":!0}),L(e)!=="svelte-vs4foo"&&(e.innerHTML=l)},m(s,n){h(s,e,n)},p:J,d(s){s&&m(e)}}}function Q(a){let e,l,s;const n=a[2].logo,i=A(n,a,a[1],H),o=i||N();return{c(){e=p("div"),l=p("a"),o&&o.c(),this.h()},l(t){e=g(t,"DIV",{class:!0});var _=$(e);l=g(_,"A",{href:!0,rel:!0,target:!0});var r=$(l);o&&o.l(r),r.forEach(m),_.forEach(m),this.h()},h(){u(l,"href",a[0]),u(l,"rel","external"),u(l,"target","_blank"),u(e,"class","sblock svelte-1y63qtr")},m(t,_){h(t,e,_),k(e,l),o&&o.m(l,null),s=!0},p(t,[_]){i&&i.p&&(!s||_&2)&&j(i,n,t,t[1],s?B(n,t[1],_,K):G(t[1]),H),(!s||_&1)&&u(l,"href",t[0])},i(t){s||(d(o,t),s=!0)},o(t){v(o,t),s=!1},d(t){t&&m(e),o&&o.d(t)}}}function R(a,e,l){let{$$slots:s={},$$scope:n}=e,{sponsorLink:i}=e;return a.$$set=o=>{"sponsorLink"in o&&l(0,i=o.sponsorLink),"$$scope"in o&&l(1,n=o.$$scope)},[i,n,s]}class W extends x{constructor(e){super(),D(this,e,R,Q,w,{sponsorLink:0})}}function M(a,e,l){const s=a.slice();return s[1]=e[l],s}function X(a){let e,l,s,n,i;return{c(){e=p("div"),l=p("img"),i=b(),this.h()},l(o){e=g(o,"DIV",{slot:!0});var t=$(e);l=g(t,"IMG",{class:!0,src:!0,alt:!0}),i=S(t),t.forEach(m),this.h()},h(){u(l,"class","logo svelte-6mzk9m"),C(l.src,s=a[1].logo)||u(l,"src",s),u(l,"alt",n=a[1].name),u(e,"slot","logo")},m(o,t){h(o,e,t),k(e,l),k(e,i)},p(o,t){t&1&&!C(l.src,s=o[1].logo)&&u(l,"src",s),t&1&&n!==(n=o[1].name)&&u(l,"alt",n)},d(o){o&&m(e)}}}function q(a){let e,l;return e=new W({props:{sponsorLink:a[1].link,$$slots:{logo:[X]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,n){V(e,s,n),l=!0},p(s,n){const i={};n&1&&(i.sponsorLink=s[1].link),n&17&&(i.$$scope={dirty:n,ctx:s}),e.$set(i)},i(s){l||(d(e.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),l=!1},d(s){z(e,s)}}}function Y(a){let e,l="Special thanks to our sponsors throughout our events!",s,n,i,o=E(a[0].sponsors),t=[];for(let r=0;r<o.length;r+=1)t[r]=q(M(a,o,r));const _=r=>v(t[r],1,1,()=>{t[r]=null});return{c(){e=p("h1"),e.textContent=l,s=b(),n=p("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=g(r,"H1",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1t40ooz"&&(e.textContent=l),s=S(r),n=g(r,"DIV",{class:!0});var f=$(n);for(let c=0;c<t.length;c+=1)t[c].l(f);f.forEach(m),this.h()},h(){u(e,"class","svelte-6mzk9m"),u(n,"class","flex justify-center flex-row flex-wrap")},m(r,f){h(r,e,f),h(r,s,f),h(r,n,f);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(n,null);i=!0},p(r,f){if(f&1){o=E(r[0].sponsors);let c;for(c=0;c<o.length;c+=1){const y=M(r,o,c);t[c]?(t[c].p(y,f),d(t[c],1)):(t[c]=q(y),t[c].c(),d(t[c],1),t[c].m(n,null))}for(P(),c=o.length;c<t.length;c+=1)_(c);U()}},i(r){if(!i){for(let f=0;f<o.length;f+=1)d(t[f]);i=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)v(t[f]);i=!1},d(r){r&&(m(e),m(s),m(n)),O(t,r)}}}function Z(a){let e,l="<title>Our Sponsors</title>",s,n,i;return n=new F({props:{$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){e=p("head"),e.innerHTML=l,s=b(),I(n.$$.fragment)},l(o){e=g(o,"HEAD",{"data-svelte-h":!0}),L(e)!=="svelte-kwrq7q"&&(e.innerHTML=l),s=S(o),T(n.$$.fragment,o)},m(o,t){h(o,e,t),h(o,s,t),V(n,o,t),i=!0},p(o,[t]){const _={};t&17&&(_.$$scope={dirty:t,ctx:o}),n.$set(_)},i(o){i||(d(n.$$.fragment,o),i=!0)},o(o){v(n.$$.fragment,o),i=!1},d(o){o&&(m(e),m(s)),z(n,o)}}}function ee(a,e,l){let{data:s}=e;return a.$$set=n=>{"data"in n&&l(0,s=n.data)},[s]}class ne extends x{constructor(e){super(),D(this,e,ee,Z,w,{data:0})}}export{ne as component};
