var l=(o,s,r)=>new Promise((c,i)=>{var d=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,t);a((r=r.apply(o,s)).next())});import{a as C,cD as g,C as h,s as B,N as F,f as A,aw as b,E as w,ay as p,o as I,j as S,z as u,n,m as _,fc as y,fd as k,B as E}from"./index.aad9d45b.js";/* empty css              */import{B as R}from"./BasicForm.2a3abe5e.js";import{u as x}from"./useForm.e40a7cc3.js";import{a as N}from"./index.f5a2ca17.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.0fccbc38.js";import{b as $}from"./data.08d7c751.js";import{u as M}from"./upload.d44227ac.js";import{R as T,C as j}from"./index.0fe472d6.js";/* empty css              */import"./index.920d53d5.js";import"./index.5b7706e7.js";import"./Checkbox.e98cd452.js";import"./index.26e54739.js";import"./index.40a9d993.js";import"./index.1ce5b6e9.js";import"./index.b2e69b84.js";import"./index.0482886e.js";import"./get.d390fb50.js";import"./index.05557792.js";import"./eagerComputed.7044ccfc.js";import"./index.81c2fd15.js";import"./_baseIteratee.b95744f8.js";import"./DeleteOutlined.bd256732.js";import"./index.0a09d1f3.js";import"./useRefs.866f35c9.js";import"./Form.6c5f681e.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./useSize.902c4695.js";import"./transButton.8bfe55da.js";import"./index.261ce65e.js";import"./index.bff3e46f.js";import"./useWindowSizeFn.9caca0dc.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.12c5d890.js";import"./index.6997f637.js";import"./uuid.2b29000c.js";import"./download.e6aa0779.js";import"./base64Conver.08b9f4ec.js";import"./index.b91d0889.js";import"./uniqBy.9edcb115.js";import"./index.695eb06b.js";import"./index.9902cd67.js";const z=C({components:{BasicForm:R,CollapseContainer:g,Button:h,ARow:T,ACol:j,CropperAvatar:N},setup(){const{createMessage:o}=w(),s=B(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:$,showActionButtonGroup:!1});F(()=>l(this,null,function*(){const t=yield V();c(t)}));const i=A(()=>{const{avatar:t}=s.getUserInfo;return t||U});function d(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:M,updateAvatar:d,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),D=o=>(y("data-v-249137cb"),o=o(),k(),o),G={class:"change-avatar"},P=D(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1)),W=E(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");function q(o,s,r,c,i,d){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),v=p("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",G,[P,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[W]),_:1},8,["onClick"])]),_:1})}var jo=b(z,[["render",q],["__scopeId","data-v-249137cb"]]);export{jo as default};
