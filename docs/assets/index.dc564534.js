import{S as $,i as A,s as C,e as p,a as f,b as y,c as x,d as O,f as _,g as u,l as N,n as b,h as S}from"./vendor.9b7aedef.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};q();function w(a,e,o){const n=a.slice();return n[3]=e[o],n}function k(a){let e;return{c(){e=p("div"),f(e,"class","day svelte-owgdzo"),y(e,"background-color",a[0]?z:L)},m(o,n){x(o,e,n)},p(o,n){n&1&&y(e,"background-color",o[0]?z:L)},d(o){o&&O(e)}}}function E(a){let e,o,n,t,l,i,h,m,d=a[1],c=[];for(let s=0;s<d.length;s+=1)c[s]=k(w(a,d,s));return{c(){e=p("div"),o=p("span"),o.textContent="pushup days",n=_(),t=p("button"),t.textContent="toggle done",l=_(),i=p("div");for(let s=0;s<c.length;s+=1)c[s].c();f(o,"contenteditable","true"),f(o,"class","svelte-owgdzo"),f(t,"class","btn svelte-owgdzo"),f(i,"class","grid svelte-owgdzo"),f(e,"class","main svelte-owgdzo")},m(s,g){x(s,e,g),u(e,o),u(e,n),u(e,t),u(e,l),u(e,i);for(let r=0;r<c.length;r+=1)c[r].m(i,null);h||(m=N(t,"click",a[2]),h=!0)},p(s,[g]){if(g&3){d=s[1];let r;for(r=0;r<d.length;r+=1){const v=w(s,d,r);c[r]?c[r].p(v,g):(c[r]=k(v),c[r].c(),c[r].m(i,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=d.length}},i:b,o:b,d(s){s&&O(e),S(c,s),h=!1,m()}}}let z="#00fa9a",L="#fff";function I(a,e,o){let n=!1,t=[];for(let i=0;i<49;i++)t[i]=i+1;console.log(t);function l(){o(0,n=!n)}return[n,t,l]}class P extends ${constructor(e){super();A(this,e,I,E,C,{})}}new P({target:document.getElementById("app")});