import{d as f,u as m,I as _,C as v,p as x,c as n,o as r,a as s,g as y,e as i,t as g,F as h,j as C,U as b,M as c}from"./app-Bc26yIG0.js";const k={class:"yun-sponsor-container flex-center flex-col"},w=["title"],B={key:0,class:"sponsor-description",mb:"4",text:"sm"},S={class:"flex justify-around"},z=["href"],j=["src","title"],I=f({__name:"YunSponsor",setup(q){const{t:d}=m(),o=_(),a=v(!1),u=x(()=>{var l;return((l=o.value.sponsor)==null?void 0:l.title)??d("reward.donate")});return(l,t)=>(r(),n("div",k,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=e=>a.value=!a.value)},t[1]||(t[1]=[s("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),s("div",{class:c(["qrcode-container qrcode flex-center flex-col",a.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(r(),n("div",B,g(i(o).sponsor.description),1)):y("v-if",!0),s("div",S,[(r(!0),n(h,null,C(i(o).sponsor.methods,(e,p)=>(r(),n("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:e.url,target:"_blank",style:b(`color:${e.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:e.url,title:e.name},null,8,j),s("div",{text:"xl",m:"2",class:c(e.icon)},null,2)],12,z))),128))])],2)]))}});export{I as _};
