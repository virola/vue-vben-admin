import{cc as B,X as z,n as m,r as H,U as R,a as $,J as U,v as N,w as M,a7 as q,al as S,N as W,cw as X,f6 as J,M as G,_ as C,S as k,dV as Q,x as Y,y as Z,T as D,dU as K,dg as tt,aw as et,bs as E,bC as nt,fv as rt,b as ot,f as L,ay as b,o as h,h as at,j as y,k as O,q as it,F as st,i as x,bL as V}from"./index.aad9d45b.js";import{c as I,u as ct}from"./index.8142c020.js";import lt from"./SessionTimeoutLogin.0b48b5de.js";import{s as ut,g as pt}from"./scrollTo.77dc8ca7.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.d9b17ce3.js";import"./useWindowSizeFn.9caca0dc.js";import"./useContentViewHeight.aae08567.js";import"./uniqBy.9edcb115.js";import"./_baseIteratee.b95744f8.js";import"./get.d390fb50.js";import"./index.682dd9b9.js";import"./index.4069e0ce.js";import"./useRefs.866f35c9.js";import"./PlusOutlined.357491bb.js";import"./RedoOutlined.8517b0c1.js";import"./index.190feddf.js";import"./lock.bcf47e49.js";import"./Login.56d3d82d.js";import"./LoginForm.35c846be.js";import"./index.26e54739.js";import"./Checkbox.e98cd452.js";/* empty css              *//* empty css              */import"./index.920d53d5.js";import"./LoginFormTitle.72df68bf.js";import"./Form.6c5f681e.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./useSize.902c4695.js";import"./GithubFilled.11e847c4.js";import"./WechatFilled.bbf1ca5a.js";import"./index.0fe472d6.js";import"./ForgetPasswordForm.cbaee439.js";import"./index.0482886e.js";import"./RegisterForm.b8eace3a.js";import"./index.b91d0889.js";import"./MobileForm.d070cd6e.js";import"./QrCodeForm.1c9b0965.js";import"./index.4559b4ab.js";import"./download.e6aa0779.js";import"./base64Conver.08b9f4ec.js";function mt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,z(s))}},r=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=B(n(c))}};return r.cancel=function(){return B.cancel(t)},r}var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=dt;function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ft(e,o,n[o])})}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(t,n){var r=F({},t,n.attrs);return m(H,F({},r,{icon:gt}),null)};P.displayName="VerticalAlignTopOutlined";P.inheritAttrs=!1;var vt=P,bt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ht=$({name:"ABackTop",inheritAttrs:!1,props:bt(),setup:function(t,n){var r=n.slots,o=n.attrs,s=n.emit,c=U("back-top",t),a=c.prefixCls,g=c.direction,l=N(),f=M({visible:!1,scrollEvent:null}),A=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},j=function(u){var p=t.target,d=p===void 0?A:p,v=t.duration;ut(0,{getContainer:d,duration:v}),s("click",u)},T=mt(function(i){var u=t.visibilityHeight,p=pt(i.target,!0);f.visible=p>u}),_=function(){var u=t.target,p=u||A,d=p();f.scrollEvent=tt(d,"scroll",function(v){T(v)}),T({target:d})},w=function(){f.scrollEvent&&f.scrollEvent.remove(),T.cancel()};return q(function(){return t.target},function(){w(),S(function(){_()})}),W(function(){S(function(){_()})}),X(function(){S(function(){_()})}),J(function(){w()}),G(function(){w()}),function(){var i,u,p=m("div",{class:"".concat(a.value,"-content")},[m("div",{class:"".concat(a.value,"-icon")},[m(vt,null,null)])]),d=C(C({},o),{onClick:j,class:(i={},k(i,"".concat(a.value),!0),k(i,"".concat(o.class),o.class),k(i,"".concat(a.value,"-rtl"),g.value==="rtl"),i)}),v=Q("fade");return m(K,v,{default:function(){return[Y(m("div",D(D({},d),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||p]),[[Z,f.visible]])]}})}}}),xt=R(ht);const Tt=$({name:"LayoutFeatures",components:{BackTop:xt,LayoutLockPage:I(()=>E(()=>import("./index.f3abc0e7.js"),["assets/index.f3abc0e7.js","assets/index.aad9d45b.js","assets/index.6301cb7e.css","assets/LockPage.72cc2169.js","assets/LockPage.afa0c1ae.css","assets/lock.bcf47e49.js","assets/header.d801b988.js"])),SettingDrawer:I(()=>E(()=>import("./index.af6b4add.js").then(function(e){return e.i}),["assets/index.af6b4add.js","assets/index.65c7150a.js","assets/index.5c7227e9.css","assets/index.aad9d45b.js","assets/index.6301cb7e.css","assets/index.682dd9b9.js","assets/index.5f816ca3.css","assets/ArrowLeftOutlined.28833b29.js","assets/index.920d53d5.js","assets/index.3a3c1369.css","assets/index.8142c020.js","assets/index.48abc832.css","assets/FullscreenOutlined.cb46e37b.js","assets/index.d9b17ce3.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9caca0dc.js","assets/useContentViewHeight.aae08567.js","assets/uniqBy.9edcb115.js","assets/_baseIteratee.b95744f8.js","assets/get.d390fb50.js","assets/index.4069e0ce.js","assets/index.a2831ae3.css","assets/useRefs.866f35c9.js","assets/PlusOutlined.357491bb.js","assets/RedoOutlined.8517b0c1.js","assets/index.190feddf.js","assets/lock.bcf47e49.js"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=nt(),o=rt(),{prefixCls:s}=ot("setting-drawer-feature"),{getShowHeader:c}=ct(),a=L(()=>o.getSessionTimeout),g=L(()=>{if(!x(t))return!1;const l=x(n);return l===V.AUTO?!x(c)||x(r):l===V.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:a}}});function _t(e,t,n,r,o,s){const c=b("LayoutLockPage"),a=b("BackTop"),g=b("SettingDrawer"),l=b("SessionTimeoutLogin");return h(),at(st,null,[m(c),e.getUseOpenBackTop?(h(),y(a,{key:0,target:e.getTarget},null,8,["target"])):O("",!0),e.getIsFixedSettingDrawer?(h(),y(g,{key:1,class:it(e.prefixCls)},null,8,["class"])):O("",!0),e.getIsSessionTimeout?(h(),y(l,{key:2})):O("",!0)],64)}var pe=et(Tt,[["render",_t]]);export{pe as default};
