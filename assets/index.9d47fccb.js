var r=(s,a,t)=>new Promise((_,u)=>{var c=e=>{try{n(t.next(e))}catch(o){u(o)}},i=e=>{try{n(t.throw(e))}catch(o){u(o)}},n=e=>e.done?_(e.value):Promise.resolve(e.value).then(c,i);n((t=t.apply(s,a)).next())});import{a as p,ay as l,o as d,h as m,n as B,z as x,B as F,m as C,fl as h}from"./index.aad9d45b.js";const y={class:"request-box"},f=F(" \u70B9\u51FB\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C425\u6B21 "),D=C("p",null,"\u6253\u5F00\u6D4F\u89C8\u5668\u7684network\u9762\u677F\uFF0C\u53EF\u4EE5\u770B\u5230\u53D1\u51FA\u4E86\u516D\u6B21\u8BF7\u6C42",-1),E=p({__name:"index",setup(s){const a=()=>r(this,null,function*(){yield h()});return(t,_)=>{const u=l("a-button");return d(),m("div",y,[B(u,{onClick:a,type:"primary"},{default:x(()=>[f]),_:1}),D])}}});export{E as default};
