function g(){}const H=t=>t;function I(t){return t()}function T(){return Object.create(null)}function x(t){t.forEach(I)}function J(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Y(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Et(t,e,n){return t.set(n),e}const K=typeof window!="undefined";let tt=K?()=>window.performance.now():()=>Date.now(),M=K?t=>requestAnimationFrame(t):g;const w=new Set;function Q(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&M(Q)}function et(t){let e;return w.size===0&&M(Q),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}function nt(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function st(t){const e=ot("style");return rt(U(t),e),e.sheet}function rt(t,e){nt(t.head||t,e)}function kt(t,e,n){t.insertBefore(e,n||null)}function it(t){t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function ut(t){return document.createTextNode(t)}function St(){return ut(" ")}function jt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){return Array.from(t.childNodes)}function Rt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ft(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const R=new Map;let N=0;function lt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function at(t,e){const n={stylesheet:st(e),rules:{}};return R.set(t,n),n}function B(t,e,n,s,o,u,i,c=0){const l=16.666/s;let r=`{
`;for(let p=0;p<=1;p+=l){const b=e+(n-e)*u(p);r+=p*100+`%{${i(b,1-b)}}
`}const m=r+`100% {${i(n,1-n)}}
}`,a=`__svelte_${lt(m)}_${c}`,f=U(t),{stylesheet:d,rules:h}=R.get(f)||at(f,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${m}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${s}ms linear ${o}ms 1 both`,N+=1,a}function dt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),N-=o,N||ht())}function ht(){M(()=>{N||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let L;function k(t){L=t}const E=[],F=[],j=[],G=[],_t=Promise.resolve();let D=!1;function mt(){D||(D=!0,_t.then(V))}function O(t){j.push(t)}const q=new Set;let S=0;function V(){const t=L;do{for(;S<E.length;){const e=E[S];S++,k(e),pt(e.$$)}for(k(null),E.length=0,S=0;F.length;)F.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while(E.length);for(;G.length;)G.pop()();D=!1,q.clear(),k(t)}function pt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let v;function gt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function z(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}const A=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Pt(){_.r||x(_.c),_=_.p}function yt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function qt(t,e,n,s){if(t&&t.o){if(A.has(t))return;A.add(t),_.c.push(()=>{A.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const bt={duration:0};function zt(t,e,n,s){let o=e(t,n),u=s?0:1,i=null,c=null,l=null;function r(){l&&dt(t,l)}function m(f,d){const h=f.b-u;return d*=Math.abs(h),{a:u,b:f.b,d:h,duration:d,start:f.start,end:f.start+d,group:f.group}}function a(f){const{delay:d=0,duration:h=300,easing:y=H,tick:p=g,css:b}=o||bt,P={start:tt()+d,b:f};f||(P.group=_,_.r+=1),i||c?c=P:(b&&(r(),l=B(t,u,f,h,d,y,b)),f&&p(0,1),i=m(P,h),O(()=>z(t,f,"start")),et(C=>{if(c&&C>c.start&&(i=m(c,h),c=null,z(t,i.b,"start"),b&&(r(),l=B(t,u,i.b,i.duration,0,y,o.css))),i){if(C>=i.end)p(u=i.b,1-u),z(t,i.b,"end"),c||(i.b?r():--i.group.r||x(i.group.c)),i=null;else if(C>=i.start){const W=C-i.start;u=i.a+i.d*y(W/i.duration),p(u,1-u)}}return!!(i||c)}))}return{run(f){J(o)?gt().then(()=>{o=o(),a(f)}):a(f)},end(){r(),i=c=null}}}function $t(t,e,n,s){const{fragment:o,on_mount:u,on_destroy:i,after_update:c}=t.$$;o&&o.m(e,n),s||O(()=>{const l=u.map(I).filter(J);i?i.push(...l):x(l),t.$$.on_mount=[]}),c.forEach(O)}function wt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(E.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dt(t,e,n,s,o,u,i,c=[-1]){const l=L;k(t);const r=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:o,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:T(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(r.root);let m=!1;if(r.ctx=n?n(t,e.props||{},(a,f,...d)=>{const h=d.length?d[0]:f;return r.ctx&&o(r.ctx[a],r.ctx[a]=h)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](h),m&&xt(t,a)),f}):[],r.update(),m=!0,x(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const a=ct(e.target);r.fragment&&r.fragment.l(a),a.forEach(it)}else r.fragment&&r.fragment.c();e.intro&&yt(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),V()}k(l)}class Mt{$destroy(){wt(this,1),this.$destroy=g}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function Lt(t,e=g){let n;const s=new Set;function o(c){if(X(t,c)&&(t=c,n)){const l=!$.length;for(const r of s)r[1](),$.push(r,t);if(l){for(let r=0;r<$.length;r+=2)$[r][0]($[r+1]);$.length=0}}}function u(c){o(c(t))}function i(c,l=g){const r=[c,l];return s.add(r),s.size===1&&(n=e(o)||g),c(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:o,update:u,subscribe:i}}function Tt(t,{delay:e=0,duration:n=400,easing:s=H}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:u=>`opacity: ${u*o}`}}export{Mt as S,At as a,Nt as b,kt as c,it as d,ot as e,St as f,O as g,zt as h,Dt as i,nt as j,Rt as k,jt as l,yt as m,g as n,qt as o,Pt as p,Ct as q,x as r,X as s,ut as t,vt as u,Tt as v,Lt as w,Ot as x,Et as y};