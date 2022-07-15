import{aw as B,a as k,cD as h,I as f,aZ as g,v as A,bW as b,ay as r,o as E,j as T,z as t,n as u,m as v,h as P,aB as $,B as s,t as y,F as w,E as W}from"./index.aad9d45b.js";import{P as L}from"./index.8546a8ea.js";import{A as D}from"./index.12c5d890.js";import"./index.01d106d6.js";import"./index.695eb06b.js";import"./useSize.902c4695.js";import"./eagerComputed.7044ccfc.js";import"./useWindowSizeFn.9caca0dc.js";import"./useContentViewHeight.aae08567.js";import"./ArrowLeftOutlined.28833b29.js";import"./index.9902cd67.js";import"./transButton.8bfe55da.js";const N=k({name:"TabsDemo",components:{CollapseContainer:h,PageWrapper:L,[f.name]:f,[D.name]:D},setup(){const e=g(),l=A(""),{closeAll:p,closeLeft:C,closeRight:_,closeOther:F,closeCurrent:c,refreshPage:o,setTitle:i}=b(),{createMessage:n}=W();function m(){l.value?i(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function a(d){e(`/feat/tabs/detail/${d}`)}return{closeAll:p,closeLeft:C,closeRight:_,closeOther:F,closeCurrent:c,toDetail:a,refreshPage:o,setTabTitle:m,title:l}}}),V={class:"mt-2 flex flex-grow-0"},I=s(" \u8BBE\u7F6ETab\u6807\u9898 "),M=s(" \u5173\u95ED\u6240\u6709 "),O=s(" \u5173\u95ED\u5DE6\u4FA7 "),R=s(" \u5173\u95ED\u53F3\u4FA7 "),j=s(" \u5173\u95ED\u5176\u4ED6 "),z=s(" \u5173\u95ED\u5F53\u524D "),G=s(" \u5237\u65B0\u5F53\u524D ");function S(e,l,p,C,_,F){const c=r("a-alert"),o=r("a-button"),i=r("a-input"),n=r("CollapseContainer"),m=r("PageWrapper");return E(),T(m,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(c,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),v("div",V,[u(o,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[I]),_:1},8,["onClick"]),u(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=a=>e.title=a),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(o,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[M]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[O]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[R]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[j]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[z]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[G]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(E(),P(w,null,$(6,a=>u(o,{key:a,class:"mr-2",onClick:d=>e.toDetail(a)},{default:t(()=>[s(" \u6253\u5F00"+y(a)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var tu=B(N,[["render",S]]);export{tu as default};
