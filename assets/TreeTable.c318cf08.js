import{B as n}from"./TableImg.e39439d0.js";import"./BasicForm.2a3abe5e.js";import{u as l}from"./useTable.74cd2499.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0902c609.js";import{aw as _,a as b,ay as a,o as f,h as C,n as t,z as r,B as s}from"./index.aad9d45b.js";import"./index.5b7706e7.js";import"./Checkbox.e98cd452.js";import"./index.26e54739.js";import"./index.05557792.js";import"./eagerComputed.7044ccfc.js";import"./useForm.e40a7cc3.js";import"./index.8546a8ea.js";import"./index.01d106d6.js";import"./index.695eb06b.js";import"./useSize.902c4695.js";import"./useWindowSizeFn.9caca0dc.js";import"./useContentViewHeight.aae08567.js";import"./ArrowLeftOutlined.28833b29.js";import"./index.9902cd67.js";import"./transButton.8bfe55da.js";import"./index.1ce5b6e9.js";import"./index.b2e69b84.js";import"./index.40a9d993.js";import"./uuid.2b29000c.js";import"./index.81c2fd15.js";import"./_baseIteratee.b95744f8.js";import"./get.d390fb50.js";import"./DeleteOutlined.bd256732.js";import"./index.0a09d1f3.js";import"./useRefs.866f35c9.js";import"./Form.6c5f681e.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./index.bff3e46f.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.920d53d5.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.8517b0c1.js";import"./index.6997f637.js";import"./fromPairs.84aabb58.js";import"./scrollTo.77dc8ca7.js";import"./index.76de38c6.js";/* empty css              *//* empty css              */import"./index.0482886e.js";import"./index.261ce65e.js";import"./index.12c5d890.js";import"./download.e6aa0779.js";import"./base64Conver.08b9f4ec.js";import"./index.b91d0889.js";import"./index.0fe472d6.js";import"./uniqBy.9edcb115.js";const T=b({components:{BasicTable:n},setup(){const[o,{expandAll:e,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"},g=s("\u5C55\u5F00\u5168\u90E8"),h=s("\u6298\u53E0\u5168\u90E8");function k(o,e,i,p,E,F){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[g]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",k]]);export{Fo as default};
