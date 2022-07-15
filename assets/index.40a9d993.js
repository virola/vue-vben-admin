import{a as F,J as S,f as h,R as $,S as g,n as l,cq as q,cr as G,G as N,v as J,L,F as O,cs as V,c7 as D}from"./index.aad9d45b.js";var H=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},K=F({name:"ACheckableTag",props:H(),setup:function(a,f){var r=f.slots,d=f.emit,v=S("tag",a),i=v.prefixCls,n=function(b){var s=a.checked;d("update:checked",!s),d("change",!s),d("click",b)},k=h(function(){var e;return $(i.value,(e={},g(e,"".concat(i.value,"-checkable"),!0),g(e,"".concat(i.value,"-checkable-checked"),a.checked),e))});return function(){var e;return l("span",{class:k.value,onClick:n},[(e=r.default)===null||e===void 0?void 0:e.call(r)])}}}),C=K,M=new RegExp("^(".concat(q.join("|"),")(-inverse)?$")),Q=new RegExp("^(".concat(G.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},u=F({name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(a,f){var r=f.slots,d=f.emit,v=f.attrs,i=S("tag",a),n=i.prefixCls,k=i.direction,e=J(!0);L(function(){a.visible!==void 0&&(e.value=a.visible)});var b=function(t){t.stopPropagation(),d("update:visible",!1),d("close",t),!t.defaultPrevented&&a.visible===void 0&&(e.value=!1)},s=h(function(){var o=a.color;return o?M.test(o)||Q.test(o):!1}),j=h(function(){var o;return $(n.value,(o={},g(o,"".concat(n.value,"-").concat(a.color),s.value),g(o,"".concat(n.value,"-has-color"),a.color&&!s.value),g(o,"".concat(n.value,"-hidden"),!e.value),g(o,"".concat(n.value,"-rtl"),k.value==="rtl"),o))});return function(){var o,t,p,m=a.icon,R=m===void 0?(o=r.icon)===null||o===void 0?void 0:o.call(r):m,x=a.color,y=a.closeIcon,P=y===void 0?(t=r.closeIcon)===null||t===void 0?void 0:t.call(r):y,T=a.closable,z=T===void 0?!1:T,B=function(){return z?P?l("div",{class:"".concat(n.value,"-close-icon"),onClick:b},[P]):l(D,{class:"".concat(n.value,"-close-icon"),onClick:b},null):null},E={backgroundColor:x&&!s.value?x:void 0},I=R||null,_=(p=r.default)===null||p===void 0?void 0:p.call(r),A=I?l(O,null,[I,l("span",null,[_])]):_,U="onClick"in v,w=l("span",{class:j.value,style:E},[A,B()]);return U?l(V,null,{default:function(){return[w]}}):w}}});u.CheckableTag=C;u.install=function(c){return c.component(u.name,u),c.component(C.name,C),c};var Z=u;export{Z as T};
