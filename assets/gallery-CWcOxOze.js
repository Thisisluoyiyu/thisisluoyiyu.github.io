const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-dpbciLGw.js","assets/app-Bc26yIG0.js","assets/app-jL9Gq9_9.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-DcA3lxCt.js"])))=>i.map(i=>d[i]);
import{I as D,d as w,r as b,f as v,o as c,C as g,c as h,a,J as K,K as V,L as $,M as B,b as i,h as E,u as S,k as O,l as G,m as T,n as Y,p as F,N as L,O as M,w as f,q as R,s as j,t as I,e as s,v as N,x as U,F as z,P as H}from"./app-Bc26yIG0.js";import{_ as J}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DcA3lxCt.js";function W(r){const o=new TextEncoder;return window.crypto.subtle.importKey("raw",o.encode(r),"PBKDF2",!1,["deriveBits","deriveKey"])}function q(r,o){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:o,iterations:1e5,hash:"SHA-256"},r,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function Q(){const r=D(),{encrypt:o}=r.value,n=Uint8Array.from(Object.values(o.iv)),e=Uint8Array.from(Object.values(o.salt));return{decrypt:async(l,u)=>{if(!l)return;const d=await W(l),y=await q(d,e),p=Uint8Array.from(u,_=>_.charCodeAt(0)),t=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},y,p);return new TextDecoder().decode(t)}}}const X=w({__name:"YunGallery",props:{photos:{}},setup(r){return(o,n)=>{const e=b("VAGallery");return c(),v(e,{photos:o.photos},null,8,["photos"])}}}),Z={key:0,"w-full":"","pt-14":"","pb-10":""},ee={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},te={key:1},oe=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(r){const o=r,n=g(""),e=g(""),l=g(!1),{decrypt:u}=Q();async function d(){const p=o.encryptedPhotos;if(p)try{const t=await u(n.value,p);e.value=t||""}catch(t){l.value=!0,console.error(t)}}function y(){e.value="",n.value=""}return(p,t)=>{const _=X;return c(),h("div",null,[e.value?(c(),h("div",te,[i(_,{photos:JSON.parse(e.value)},null,8,["photos"]),a("div",{"w-full":"","text-center":"","mt-8":""},[a("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(c(),h("div",Z,[a("div",ee,[K(a("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>n.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:B(l.value&&"border-red"),onInput:t[1]||(t[1]=m=>l.value=!1),onKeyup:$(d,["enter"])},null,34),[[V,n.value]]),a("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d})])]))])}}}),ne={text:"center",class:"yun-text-light",p:"2"},se={class:"page-action",text:"center"},re=["title"],ae=w({__name:"gallery",setup(r){const o=E(),{t:n}=S(),e=O(),l=G(e);T([Y({"@type":"CollectionPage"})]);const u=F(()=>e.value.photos||[]),y=L().value.addons["valaxy-addon-lightgallery"]?M(()=>H(()=>import("./YunGallery-dpbciLGw.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(p,t)=>{const _=R,m=J,x=oe,C=b("RouterView"),k=N,P=U;return c(),h(z,null,[i(k,null,{default:f(()=>[i(_),i(C,null,{default:f(({Component:A})=>[(c(),v(j(A),null,{"main-header":f(()=>[i(m,{title:s(l)||s(n)("title.gallery"),icon:s(e).icon||"i-ri-gallery-line",color:s(e).color,"page-title-class":s(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":f(()=>[a("div",ne,I(s(n)("counter.photos",u.value.length)),1),a("div",se,[a("a",{class:"yun-icon-btn",title:s(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>s(o).back())},t[1]||(t[1]=[a("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,re)]),s(e).encryptedPhotos?(c(),v(x,{key:0,"encrypted-photos":s(e).encryptedPhotos},null,8,["encrypted-photos"])):(c(),v(s(y),{key:1,photos:u.value},null,8,["photos"])),i(C)]),_:2},1024))]),_:1})]),_:1}),i(P)],64)}}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{X as _,ie as g};
