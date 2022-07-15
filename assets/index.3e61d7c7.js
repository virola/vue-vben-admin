import{aw as x,a as I,cG as M,b7 as k,bs as b,aG as $,b as U,s as N,f as O,ay as r,o as n,h as S,n as t,z as m,j as h,k as g,m as a,q as s,t as A,F as E,c as P,aN as R}from"./index.aad9d45b.js";import{D as V}from"./siteSetting.c485f07c.js";import{c as C,u as z}from"./index.8142c020.js";import{b as B}from"./index.bff3e46f.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.d9b17ce3.js";import"./useWindowSizeFn.9caca0dc.js";import"./useContentViewHeight.aae08567.js";import"./uniqBy.9edcb115.js";import"./_baseIteratee.b95744f8.js";import"./get.d390fb50.js";import"./index.682dd9b9.js";import"./index.4069e0ce.js";import"./useRefs.866f35c9.js";import"./PlusOutlined.357491bb.js";import"./RedoOutlined.8517b0c1.js";import"./index.190feddf.js";import"./lock.bcf47e49.js";const F=I({name:"UserDropdown",components:{Dropdown:M,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.d2558dca.js"),["assets/DropMenuItem.d2558dca.js","assets/index.aad9d45b.js","assets/index.6301cb7e.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.e4c8fe8c.js"),["assets/LockModal.e4c8fe8c.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.aad9d45b.js","assets/index.6301cb7e.css","assets/index.bff3e46f.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.9caca0dc.js","assets/FullscreenOutlined.cb46e37b.js","assets/BasicForm.2a3abe5e.js","assets/BasicForm.9ea33745.css","assets/index.920d53d5.js","assets/index.3a3c1369.css","assets/index.5b7706e7.js","assets/index.cb0992d5.css","assets/Checkbox.e98cd452.js","assets/index.26e54739.js","assets/index.695a0c50.css","assets/index.40a9d993.js","assets/index.49ada229.css","assets/index.1ce5b6e9.js","assets/index.47f7c782.css","assets/index.b2e69b84.js","assets/index.579bd49e.css","assets/index.0482886e.js","assets/index.7b8b5e30.css","assets/get.d390fb50.js","assets/index.05557792.js","assets/index.560eb672.css","assets/eagerComputed.7044ccfc.js","assets/index.81c2fd15.js","assets/index.aeeee80c.css","assets/_baseIteratee.b95744f8.js","assets/DeleteOutlined.bd256732.js","assets/index.0a09d1f3.js","assets/index.8f5fe29a.css","assets/useRefs.866f35c9.js","assets/Form.6c5f681e.js","assets/Col.4b0b9f3d.js","assets/useFlexGapSupport.ac7a0707.js","assets/useSize.902c4695.js","assets/transButton.8bfe55da.js","assets/index.261ce65e.js","assets/index.cd256673.css","assets/index.12c5d890.js","assets/index.9d09be4d.css","assets/index.6997f637.js","assets/index.b1363280.css","assets/uuid.2b29000c.js","assets/download.e6aa0779.js","assets/base64Conver.08b9f4ec.js","assets/index.b91d0889.js","assets/index.cb030764.css","assets/index.0fe472d6.js","assets/uniqBy.9edcb115.js","assets/useForm.e40a7cc3.js","assets/lock.bcf47e49.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=U("header-user-dropdown"),{t:f}=P(),{getShowDoc:_,getUseLockPage:v}=z(),d=N(),w=O(()=>{const{realName:u="",avatar:D,desc:L}=d.getUserInfo||{};return{realName:u,avatar:D||T,desc:L}}),[o,{openModal:i}]=B();function p(){i(!0)}function c(){d.confirmLoginOut()}function l(){R(V)}function y(u){switch(u.key){case"logout":c();break;case"doc":l();break;case"lock":p();break}}return{prefixCls:e,t:f,getUserInfo:w,handleMenuClick:y,getShowDoc:_,register:o,getUseLockPage:v}}}),G=["src"];function j(e,f,_,v,d,w){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),c=r("Dropdown"),l=r("LockAction");return n(),S(E,null,[t(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(i,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,G),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(l,{onRegister:e.register},null,8,["onRegister"])],64)}var ce=x(F,[["render",j]]);export{ce as default};
