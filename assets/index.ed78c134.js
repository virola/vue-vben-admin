import{aw as _,a as m,cV as S,ex as f,ey as T,ez as x,eA as h,eB as y,eC as R,eD as X,eE as b,eF as w,eG as B,eH as C,eI as E,eJ as Y,v as n,ay as o,o as r,j as i,z as t,m as l,n as p,aI as g,x as k,y as F,B as $}from"./index.aad9d45b.js";import{P as A}from"./index.8546a8ea.js";import"./index.01d106d6.js";import"./index.695eb06b.js";import"./useSize.902c4695.js";import"./eagerComputed.7044ccfc.js";import"./useWindowSizeFn.9caca0dc.js";import"./useContentViewHeight.aae08567.js";import"./ArrowLeftOutlined.28833b29.js";import"./index.9902cd67.js";import"./transButton.8bfe55da.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],V=P.map(e=>({label:e,value:e,key:e})),D=m({components:{Select:S,PageWrapper:A,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:y,ScrollYReverseTransition:R,SlideXTransition:X,ScrollXTransition:b,SlideXReverseTransition:w,ScrollXReverseTransition:B,ScaleRotateTransition:C,ExpandXTransition:E,ExpandTransition:Y},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:V,value:e,start:s,show:a}}}),I={class:"flex"},N=$(" start "),W={class:"box"};function z(e,a,s,j,G,H){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",I,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[N]),_:1},8,["onClick"])]),(r(),i(g(`${e.value}Transition`),null,{default:t(()=>[k(l("div",W,null,512),[[F,e.show]])]),_:1}))]),_:1})}var oe=_(D,[["render",z],["__scopeId","data-v-45b1f032"]]);export{oe as default};
