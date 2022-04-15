import{w as j,S as le,i as ne,s as oe,e as y,a as v,b as w,c as z,d as S,f as M,l as N,n as ae,g as A,h as C,r as se,t as fe,j as L,k as ue,m as D,o as F,p as x,q as G,u as ie,v as B,x as T,y as H,z as Q,A as ce,B as R,C as U}from"./vendor.b4c8082a.js";const de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};de();let re=[],pe=new Date().getTime();for(let n=0;n<49;n++)re[n]={done:!1};let E=j(localStorage.getItem("date_store")||pe);E.subscribe(n=>localStorage.date_store=n);let P=j(localStorage.getItem("title_store")||"days");P.subscribe(n=>localStorage.title_store=n);let O=j(JSON.parse(localStorage.getItem("days_store"))||re);O.subscribe(n=>localStorage.days_store=JSON.stringify(n));function V(n,e,o){const s=n.slice();return s[10]=e[o],s}function W(n){let e;return{c(){e=y("div"),v(e,"class","day svelte-l1z0fl"),w(e,"background-color",n[10].done?J:q,!1),w(e,"opacity",n[10].opacity,!1)},m(o,s){z(o,e,s)},p(o,s){s&2&&w(e,"background-color",o[10].done?J:q,!1),s&2&&w(e,"opacity",o[10].opacity,!1)},d(o){o&&S(e)}}}function X(n){let e,o,s,t,i,l,a,r,p,c,_,d,$,I;return{c(){e=y("button"),e.textContent="advance day",s=M(),t=y("button"),t.textContent="add graph",l=M(),a=y("button"),a.textContent="initialise",p=M(),c=y("button"),c.textContent="delete graph",v(e,"class","btn svelte-l1z0fl"),v(t,"class","btn svelte-l1z0fl"),v(a,"class","btn red svelte-l1z0fl"),v(c,"class","btn red svelte-l1z0fl")},m(u,b){z(u,e,b),z(u,s,b),z(u,t,b),z(u,l,b),z(u,a,b),z(u,p,b),z(u,c,b),d=!0,$||(I=[N(e,"click",n[5]),N(t,"click",n[3]),N(a,"click",n[3]),N(c,"click",n[3])],$=!0)},p:ae,i(u){d||(A(()=>{o||(o=C(e,T,{x:-100,duration:250},!0)),o.run(1)}),A(()=>{i||(i=C(t,T,{x:-100,duration:250},!0)),i.run(1)}),A(()=>{r||(r=C(a,T,{x:100,duration:250},!0)),r.run(1)}),A(()=>{_||(_=C(c,T,{x:100,duration:250},!0)),_.run(1)}),d=!0)},o(u){o||(o=C(e,T,{x:-100,duration:250},!1)),o.run(0),i||(i=C(t,T,{x:-100,duration:250},!1)),i.run(0),r||(r=C(a,T,{x:100,duration:250},!1)),r.run(0),_||(_=C(c,T,{x:100,duration:250},!1)),_.run(0),d=!1},d(u){u&&S(e),u&&o&&o.end(),u&&S(s),u&&S(t),u&&i&&i.end(),u&&S(l),u&&S(a),u&&r&&r.end(),u&&S(p),u&&S(c),u&&_&&_.end(),$=!1,se(I)}}}function _e(n){let e,o,s,t,i,l,a=n[1][48].done?"done":"done?",r,p,c,_,d,$,I,u,b=n[1],h=[];for(let f=0;f<b.length;f+=1)h[f]=W(V(n,b,f));let m=n[0]==="120px"&&X(n);return{c(){e=y("div"),o=y("span"),s=M(),t=y("div");for(let f=0;f<h.length;f+=1)h[f].c();i=M(),l=y("button"),r=fe(a),p=M(),c=y("span"),c.textContent="\u22EF",_=M(),d=y("div"),m&&m.c(),v(o,"contenteditable","true"),v(o,"class","svelte-l1z0fl"),n[2]===void 0&&A(()=>n[7].call(o)),v(t,"class","grid svelte-l1z0fl"),v(l,"class","btn svelte-l1z0fl"),w(l,"background-color",n[1][48].done?J:q,!1),w(l,"color",n[1][48].done?q:Y,!1),v(c,"class","svelte-l1z0fl"),w(c,"font-size","2.5rem",!1),v(d,"class","options svelte-l1z0fl"),w(d,"height",n[0],!1),v(e,"class","main svelte-l1z0fl")},m(f,k){z(f,e,k),L(e,o),n[2]!==void 0&&(o.innerHTML=n[2]),L(e,s),L(e,t);for(let g=0;g<h.length;g+=1)h[g].m(t,null);L(e,i),L(e,l),L(l,r),L(e,p),L(e,c),L(e,_),L(e,d),m&&m.m(d,null),$=!0,I||(u=[N(o,"input",n[7]),N(l,"click",n[4]),N(c,"click",n[6])],I=!0)},p(f,[k]){if(k&4&&f[2]!==o.innerHTML&&(o.innerHTML=f[2]),k&2){b=f[1];let g;for(g=0;g<b.length;g+=1){const K=V(f,b,g);h[g]?h[g].p(K,k):(h[g]=W(K),h[g].c(),h[g].m(t,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=b.length}(!$||k&2)&&a!==(a=f[1][48].done?"done":"done?")&&ue(r,a),k&2&&w(l,"background-color",f[1][48].done?J:q,!1),k&2&&w(l,"color",f[1][48].done?q:Y,!1),f[0]==="120px"?m?(m.p(f,k),k&1&&D(m,1)):(m=X(f),m.c(),D(m,1),m.m(d,null)):m&&(F(),x(m,1,1,()=>{m=null}),G()),k&1&&w(d,"height",f[0],!1)},i(f){$||(D(m),$=!0)},o(f){x(m),$=!1},d(f){f&&S(e),ie(h,f),m&&m.d(),I=!1,se(u)}}}let J="#00fa9a",q="#343648",Y="#fff";function me(n,e,o){let s,t,i;B(n,O,d=>o(1,s=d)),B(n,E,d=>o(8,t=d)),B(n,P,d=>o(2,i=d));let l="0px";new Date().getTime();function a(){for(let d=0;d<49;d++)H(O,s[d]={done:!1},s);H(E,t=0,t),c()}function r(){H(O,s[48].done=!s[48].done,s)}function p(){s.shift(),H(O,s=[...s,{done:!1}],s)}function c(){l==="120px"?o(0,l="0px"):o(0,l="120px")}function _(){i=this.innerHTML,P.set(i)}return[l,s,i,a,r,p,c,_]}class Z extends le{constructor(e){super();ne(this,e,me,_e,oe,{})}}function ee(n,e,o){const s=n.slice();return s[6]=e[o],s}function te(n){let e,o,s;var t=Z;function i(l){return{}}return t&&(e=new t(i())),{c(){e&&Q(e.$$.fragment),o=ce()},m(l,a){e&&R(e,l,a),z(l,o,a),s=!0},p(l,a){if(t!==(t=Z)){if(e){F();const r=e;x(r.$$.fragment,1,0,()=>{U(r,1)}),G()}t?(e=new t(i()),Q(e.$$.fragment),D(e.$$.fragment,1),R(e,o.parentNode,o)):e=null}},i(l){s||(e&&D(e.$$.fragment,l),s=!0)},o(l){e&&x(e.$$.fragment,l),s=!1},d(l){l&&S(o),e&&U(e,l)}}}function ge(n){let e,o,s=n[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=te(ee(n,s,l));const i=l=>x(t[l],1,1,()=>{t[l]=null});return{c(){e=y("div");for(let l=0;l<t.length;l+=1)t[l].c();v(e,"class","main")},m(l,a){z(l,e,a);for(let r=0;r<t.length;r+=1)t[r].m(e,null);o=!0},p(l,[a]){if(a&0){s=l[0];let r;for(r=0;r<s.length;r+=1){const p=ee(l,s,r);t[r]?(t[r].p(p,a),D(t[r],1)):(t[r]=te(),t[r].c(),D(t[r],1),t[r].m(e,null))}for(F(),r=s.length;r<t.length;r+=1)i(r);G()}},i(l){if(!o){for(let a=0;a<s.length;a+=1)D(t[a]);o=!0}},o(l){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)x(t[a]);o=!1},d(l){l&&S(e),ie(t,l)}}}function be(n,e,o){let s,t;B(n,E,p=>o(2,s=p)),B(n,O,p=>o(3,t=p));let i=new Date().getTime(),l=[1];function a(){t.shift(),H(O,t=[...t,{done:!1}],t)}function r(){let p,c;if(i=i+864e5*40,p=new Date(i-s).getDate(),c=new Date(i-s).getMonth(),console.log(p),console.log(c),p>1){if(c===0)for(let _=0;_<p-1;_++)a();else if(c>0)for(let _=0;_<p-1+31;_++)a();H(E,s=i,s)}}return r(),[l]}class he extends le{constructor(e){super();ne(this,e,be,ge,oe,{})}}new he({target:document.getElementById("app")});
