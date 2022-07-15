var d=(o,l,r)=>new Promise((m,n)=>{var c=t=>{try{e(r.next(t))}catch(a){n(a)}},u=t=>{try{e(r.throw(t))}catch(a){n(a)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.2a3abe5e.js";import{u as b}from"./useForm.e40a7cc3.js";import A from"./PersonTable.70cfc183.js";import{P as F}from"./index.8546a8ea.js";import{aw as g,a as v,v as C,ay as s,o as D,j as h,z as i,n as p,B as q}from"./index.aad9d45b.js";import{C as _}from"./index.d01af721.js";import"./index.4069e0ce.js";/* empty css              */import"./index.534c506d.js";/* empty css              */import"./index.920d53d5.js";import"./index.5b7706e7.js";import"./Checkbox.e98cd452.js";import"./index.26e54739.js";import"./index.40a9d993.js";import"./index.1ce5b6e9.js";import"./index.b2e69b84.js";import"./index.0482886e.js";import"./get.d390fb50.js";import"./index.05557792.js";import"./eagerComputed.7044ccfc.js";import"./index.81c2fd15.js";import"./_baseIteratee.b95744f8.js";import"./DeleteOutlined.bd256732.js";import"./index.0a09d1f3.js";import"./useRefs.866f35c9.js";import"./Form.6c5f681e.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./useSize.902c4695.js";import"./transButton.8bfe55da.js";import"./index.261ce65e.js";import"./index.bff3e46f.js";import"./useWindowSizeFn.9caca0dc.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.12c5d890.js";import"./index.6997f637.js";import"./uuid.2b29000c.js";import"./download.e6aa0779.js";import"./base64Conver.08b9f4ec.js";import"./index.b91d0889.js";import"./index.0fe472d6.js";import"./uniqBy.9edcb115.js";import"./TableImg.e39439d0.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.8517b0c1.js";import"./fromPairs.84aabb58.js";import"./scrollTo.77dc8ca7.js";import"./index.76de38c6.js";import"./useTable.74cd2499.js";import"./index.01d106d6.js";import"./index.695eb06b.js";import"./useContentViewHeight.aae08567.js";import"./ArrowLeftOutlined.28833b29.js";import"./index.9902cd67.js";import"./index.190feddf.js";import"./PlusOutlined.357491bb.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:n}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),n()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}}),S=q(" \u63D0\u4EA4 ");function R(o,l,r,m,n,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),a=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(a,{type:"primary",onClick:o.submitAll},{default:i(()=>[S]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Wo=g(T,[["render",R],["__scopeId","data-v-6b59bc47"]]);export{Wo as default};
