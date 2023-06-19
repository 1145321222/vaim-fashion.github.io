import{T,W as t,aE as C,aY as F,aA as n,az as R,aZ as z,ah as s,Q as J,aB as a,a_ as Q,aO as Z,P as e,aL as I,aI as j,aJ as q}from"./index-b4c6c90b.js";import"./index-f86b9239.js";import{V as Y,Y as N,X as K,W as U}from"./installCanvasRenderer-1be3df37.js";import{C as ee}from"./index-0c05fcfd.js";import{_ as ae}from"./index-faf12f74.js";import{P as G,a as B,b as O,c as k,R as b,I as f}from"./index-ecdcf09b.js";import"./install-8001477e.js";const te={class:"platform-mask"},le=T({__name:"index",emits:["changePlatform"],setup(m,{emit:L}){const w=t([{name:"Milan",image:G},{name:"London",image:B},{name:"Paris",image:O},{name:"New York",image:k}]);t([{name:"Instagram",image:G},{name:"YouYube",image:B},{name:"Vogue",image:O},{name:"WSJ.Magazine",image:k}]);const r=t(-1),A=u=>{u==r.value?r.value=-1:r.value=u,L("changePlatform")};return(u,y)=>{const c=ae,v=N,d=Y;return C(),F(d,{gutter:18},{default:n(()=>[(C(!0),R(J,null,z(s(w),(i,g)=>(C(),F(v,{span:6,onClick:x=>A(g)},{default:n(()=>[a("div",{class:Q(["platform",{active:g==s(r)}])},[a("div",te,Z(i.name),1),e(c,{width:"100%",height:"100%",src:i.image,preview:!1},null,8,["src"])],2)]),_:2},1032,["onClick"]))),256))]),_:1})}}});const ne=I(le,[["__scopeId","data-v-5e558db6"]]),_=m=>(j("data-v-725bd6e0"),m=m(),q(),m),se={class:"pb30"},oe={class:"top"},ue={class:"mt20 pt14"},re=_(()=>a("div",{class:"tips"},"Trending: Runways",-1)),ie=_(()=>a("div",{class:"chart-box-title"},[a("div",{class:"chart-box-title-line"}),a("div",null,"Runway: color")],-1)),me={class:"chart"},ce=_(()=>a("div",{class:"chart-box-title"},[a("div",{class:"chart-box-title-line"}),a("div",null,"Runway: style")],-1)),ve={class:"chart"},de=_(()=>a("div",{class:"chart-box-title"},[a("div",{class:"chart-box-title-line"}),a("div",null,"Runway: pattern")],-1)),pe={class:"chart"},_e=_(()=>a("div",{class:"chart-box-title"},[a("div",{class:"chart-box-title-line"}),a("div",null,"Runway: outlines")],-1)),ye={class:"chart"},ge=T({__name:"index",setup(m){const L=t(["rgb(235, 179, 114)","rgb(245, 233, 139)","rgb(242, 191, 189)","rgb(153, 198, 153)","rgb(154, 135, 197)","rgb(251, 78, 60)","#33CCFF","rgb(215, 200, 177)","rgb(68, 68, 68)","rgba(114,152,220,1)"]),w=t(["rgb(235, 179, 114)","rgb(245, 233, 139)","rgb(242, 191, 189)","rgb(153, 198, 153)","rgb(154, 135, 197)","rgb(251, 78, 60)","#33CCFF","rgb(215, 200, 177)","rgb(68, 68, 68)","rgba(114,152,220,1)"]),r=t(["rgb(235, 179, 114)","rgb(245, 233, 139)","rgb(242, 191, 189)","rgb(153, 198, 153)","rgb(154, 135, 197)","rgb(251, 78, 60)","#33CCFF","rgb(215, 200, 177)","rgb(68, 68, 68)","rgba(114,152,220,1)"]),A=t(["rgb(235, 179, 114)","rgb(245, 233, 139)","rgb(242, 191, 189)","rgb(153, 198, 153)","rgb(154, 135, 197)","rgb(251, 78, 60)","#33CCFF","rgb(215, 200, 177)","rgb(68, 68, 68)","rgba(114,152,220,1)"]),u=t([{value:21.91,name:"Orange"},{value:2.36,name:"Yellow"},{value:11.44,name:"Pink"},{value:5.79,name:"Green"},{value:7.01,name:"Purple"},{value:28.89,name:"Red"},{value:22.44,name:"Blue"},{value:14.84,name:"Earth tone"},{value:5.1,name:"Black and white gray"}]),y=t([{value:25.02,name:"Naval style"},{value:7.21,name:"Fun style"},{value:13.08,name:"Fairy style"},{value:11.14,name:"Gothic style"},{value:9.39,name:"Cheongsame"},{value:5.56,name:"Sweet cool style"},{value:3.18,name:"Outdoor style"},{value:7.97,name:"ABG spicy girl style"},{value:2.39,name:"Academic style"},{value:15.03,name:"Cotton and linen style"}]),c=t([{value:16.18,name:"Heart-shaped"},{value:22.49,name:"Geometric"},{value:13.42,name:"Wave point"},{value:9.59,name:"Animal pattern"},{value:18.35,name:"Linearity"},{value:6.25,name:"Camouflage"},{value:9.11,name:"Logo pattern"},{value:2.55,name:"Other Arts"},{value:2.06,name:"Article"}]),v=t([{value:30.28,name:"Asymmetric"},{value:8.43,name:"S-type"},{value:24.7,name:"H-type"},{value:9.79,name:"T-type"},{value:5.5,name:"O-type"},{value:13.81,name:"X-type"},{value:4.89,name:"A-type"},{value:2.6,name:"Structural-type"}]),d=t(0),i=()=>{console.log("changeFilter"),d.value==0?(u.value=[{value:21.73,name:"Orange"},{value:4.53,name:"Yellow"},{value:9.86,name:"Pink"},{value:8.23,name:"Green"},{value:7.34,name:"Purple"},{value:22.09,name:"Red"},{value:14.12,name:"Blue"},{value:7.45,name:"Earth tone"},{value:4.65,name:"Black and white gray"}],y.value=[{value:22.07,name:"Naval style"},{value:4.93,name:"Fun style"},{value:10.64,name:"Fairy style"},{value:13.29,name:"Gothic style"},{value:6.95,name:"Cheongsame"},{value:4.38,name:"Sweet cool style"},{value:5.78,name:"Outdoor style"},{value:11.55,name:"ABG spicy girl style"},{value:8.76,name:"Academic style"},{value:11.65,name:"Cotton and linen style"}],c.value=[{value:15.73,name:"Heart-shaped"},{value:24.67,name:"Geometric"},{value:11.57,name:"Wave point"},{value:8.26,name:"Animal pattern"},{value:17.02,name:"Linearity"},{value:7.89,name:"Camouflage"},{value:7.24,name:"Logo pattern"},{value:1.53,name:"Other Arts"},{value:3.09,name:"Article"}],v.value=[{value:29.03,name:"Asymmetric"},{value:7.88,name:"S-type"},{value:23.39,name:"H-type"},{value:10.42,name:"T-type"},{value:4.71,name:"O-type"},{value:14.78,name:"X-type"},{value:5.55,name:"A-type"},{value:3.24,name:"Structural-type"}],d.value=1):(u.value=[{value:21.91,name:"Orange"},{value:2.36,name:"Yellow"},{value:11.44,name:"Pink"},{value:5.79,name:"Green"},{value:7.01,name:"Purple"},{value:28.89,name:"Red"},{value:22.44,name:"Blue"},{value:14.84,name:"Earth tone"},{value:5.1,name:"Black and white gray"}],y.value=[{value:25.02,name:"Naval style"},{value:7.21,name:"Fun style"},{value:13.08,name:"Fairy style"},{value:11.14,name:"Gothic style"},{value:9.39,name:"Cheongsame"},{value:5.56,name:"Sweet cool style"},{value:3.18,name:"Outdoor style"},{value:7.97,name:"ABG spicy girl style"},{value:2.39,name:"Academic style"},{value:15.03,name:"Cotton and linen style"}],c.value=[{value:16.18,name:"Heart-shaped"},{value:22.49,name:"Geometric"},{value:13.42,name:"Wave point"},{value:9.59,name:"Animal pattern"},{value:18.35,name:"Linearity"},{value:6.25,name:"Camouflage"},{value:9.11,name:"Logo pattern"},{value:2.55,name:"Other Arts"},{value:2.06,name:"Article"}],v.value=[{value:30.28,name:"Asymmetric"},{value:8.43,name:"S-type"},{value:24.7,name:"H-type"},{value:9.79,name:"T-type"},{value:5.5,name:"O-type"},{value:13.81,name:"X-type"},{value:4.89,name:"A-type"},{value:2.6,name:"Structural-type"}],d.value=0)},g=t(["Red","Blue","Orange","Yellow"]),x=t("Red"),W=l=>{if(g.value.includes(l)){x.value=l;return}},H=t(["Naval style","Gothic style","Sweet cool style","ABG spicy girl style"]),p=t("navy"),M=l=>{if(H.value.includes(l)){l=="Naval style"?p.value="navy":l=="Gothic style"?p.value="goth":l=="Sweet cool style"?p.value="sweet":l=="ABG spicy girl style"&&(p.value="abg");return}},D=t(["Geometric","Wave point","Animal pattern","Linearity"]),P=t("Geometric"),E=l=>{if(D.value.includes(l)){P.value=l;return}},X=t(["Asymmetric","S-type","H-type","X-type"]),S=t("Asymmetric"),V=l=>{if(X.value.includes(l)){S.value=l;return}};return(l,he)=>{const $=U,o=N,h=Y;return C(),R("div",se,[a("div",oe,[e($),e(K,{onChangeFilter:i})]),a("div",ue,[e(ee,{onChangeCondition:i})]),e(ne,{class:"mt20 pt10",onChangePlatform:i}),re,e(h,{class:"chart-box"},{default:n(()=>[e(o,{span:10},{default:n(()=>[ie,a("div",me,[e(b,{colorList:s(L),dataList:s(u),onChangeType:W},null,8,["colorList","dataList"])])]),_:1}),e(o,{span:14},{default:n(()=>[e(f,{mode:s(x)},null,8,["mode"])]),_:1})]),_:1}),e(h,{class:"chart-box"},{default:n(()=>[e(o,{span:10},{default:n(()=>[ce,a("div",ve,[e(b,{colorList:s(w),dataList:s(y),onChangeType:M},null,8,["colorList","dataList"])])]),_:1}),e(o,{span:14},{default:n(()=>[e(f,{mode:s(p)},null,8,["mode"])]),_:1})]),_:1}),e(h,{class:"chart-box"},{default:n(()=>[e(o,{span:10},{default:n(()=>[de,a("div",pe,[e(b,{colorList:s(r),dataList:s(c),onChangeType:E},null,8,["colorList","dataList"])])]),_:1}),e(o,{span:14},{default:n(()=>[e(f,{mode:s(P)},null,8,["mode"])]),_:1})]),_:1}),e(h,{class:"chart-box"},{default:n(()=>[e(o,{span:10},{default:n(()=>[_e,a("div",ye,[e(b,{colorList:s(A),dataList:s(v),onChangeType:V},null,8,["colorList","dataList"])])]),_:1}),e(o,{span:14},{default:n(()=>[e(f,{mode:s(S)},null,8,["mode"])]),_:1})]),_:1})])}}});const Pe=I(ge,[["__scopeId","data-v-725bd6e0"]]);export{Pe as default};