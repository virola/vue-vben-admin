import{a as r,v as i,a7 as u,o as n,j as m,z as s,m as l,bm as d,i as p}from"./index.aad9d45b.js";import{C as f}from"./index.d01af721.js";import"./index.4069e0ce.js";/* empty css              */import{u as c}from"./useECharts.7d36300d.js";import"./index.190feddf.js";import"./index.0fe472d6.js";import"./Col.4b0b9f3d.js";import"./useFlexGapSupport.ac7a0707.js";import"./useRefs.866f35c9.js";import"./PlusOutlined.357491bb.js";const z=r({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=i(null),{setOptions:o}=c(t);return u(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"\u7535\u8111"},{name:"\u5145\u7535\u5668"},{name:"\u8033\u673A"},{name:"\u624B\u673A"},{name:"Ipad"},{name:"\u8033\u673A"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(h,g)=>(n(),m(p(f),{title:"\u8F6C\u5316\u7387",loading:a.loading},{default:s(()=>[l("div",{ref_key:"chartRef",ref:t,style:d({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};
