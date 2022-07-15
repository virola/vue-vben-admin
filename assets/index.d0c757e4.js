import{B as S}from"./TableImg.e39439d0.js";import{j as w}from"./BasicForm.2a3abe5e.js";import{u as B}from"./useTable.74cd2499.js";import{g as F}from"./system.f029aec1.js";import{P as D}from"./index.8546a8ea.js";import y from"./DeptTree.6287b34f.js";import{b as A}from"./index.bff3e46f.js";import{A as k,c as I,s as M}from"./AccountModal.81189323.js";import{aw as E,a as R,aZ as V,w as P,ay as t,o as C,j as _,z as n,n as r,k as W,B as $}from"./index.aad9d45b.js";import"./index.5b7706e7.js";import"./Checkbox.e98cd452.js";import"./index.26e54739.js";import"./index.05557792.js";import"./eagerComputed.7044ccfc.js";import"./useForm.e40a7cc3.js";import"./index.1ce5b6e9.js";import"./index.b2e69b84.js";import"./index.40a9d993.js";import"./uuid.2b29000c.js";import"./index.81c2fd15.js";import"./_baseIteratee.b95744f8.js";import"./get.d390fb50.js";import"./DeleteOutlined.bd256732.js";import"./index.0a09d1f3.js";import"./useRefs.866f35c9.js";import"./Form.6c5f681e.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./useSize.902c4695.js";import"./useWindowSizeFn.9caca0dc.js";import"./index.920d53d5.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.8517b0c1.js";import"./FullscreenOutlined.cb46e37b.js";import"./index.6997f637.js";import"./fromPairs.84aabb58.js";import"./scrollTo.77dc8ca7.js";import"./index.76de38c6.js";/* empty css              *//* empty css              */import"./index.0482886e.js";import"./transButton.8bfe55da.js";import"./index.261ce65e.js";import"./index.12c5d890.js";import"./download.e6aa0779.js";import"./base64Conver.08b9f4ec.js";import"./index.b91d0889.js";import"./index.0fe472d6.js";import"./uniqBy.9edcb115.js";import"./index.01d106d6.js";import"./index.695eb06b.js";import"./useContentViewHeight.aae08567.js";import"./ArrowLeftOutlined.28833b29.js";import"./index.9902cd67.js";import"./index.c274f4fe.js";import"./useContextMenu.c65a9c62.js";const N=R({name:"AccountManagement",components:{BasicTable:S,PageWrapper:D,DeptTree:y,AccountModal:k,TableAction:w},setup(){const e=V(),[h,{openModal:i}]=A(),a=P({}),[g,{reload:l,updateTableDataRecord:s}]=B({title:"\u8D26\u53F7\u5217\u8868",api:F,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function c(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function m(o){}function u({isUpdate:o,values:b}){if(o){const T=s(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:c,handleEdit:p,handleDelete:m,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}}),j=$("\u65B0\u589E\u8D26\u53F7");function v(e,h,i,a,g,l){const s=t("DeptTree"),c=t("a-button"),p=t("TableAction"),m=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),r(m,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:n(()=>[r(c,{type:"primary",onClick:e.handleCreate},{default:n(()=>[j]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:o})=>[f.key==="action"?(C(),_(p,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),r(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var zo=E(N,[["render",v]]);export{zo as default};
