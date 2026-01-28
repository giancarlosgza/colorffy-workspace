import{_ as x}from"./Button-CiHFmcYr.js";import{d as de,a as o,o as n,g as b,w as r,j,r as U,k as L,t as N,b as c,h as I,c as k,e as V,n as H,f as h,F as D,l as S}from"./iframe-DPImpSJt.js";import{_ as ye}from"./Empty-PqEQMaNZ.js";import{_ as he}from"./TableSkeleton-CCfVGcDe.js";import{_ as Ce}from"./ButtonGroup-CaktavGx.js";import{V as De,k as Ue}from"./floating-vue-DTj2Pnt1.js";import{_ as xe}from"./ButtonMenuItem-Ct_1tJ9C.js";import{_ as ke}from"./ButtonTooltip--_imhFPJ.js";import{_ as B}from"./Material-qoqCNUqF.js";import"./preload-helper-C1FmrZbK.js";import"./index-kRNS0-ZH.js";import"./BaseSkeleton-B1UsGVru.js";import"./Badge-BxiPG1cD.js";const ce=de({__name:"ButtonMenu",props:{isMobile:{type:Boolean,default:!1},tooltipText:{default:"menu"},id:{default:""},text:{default:""},title:{default:""},variant:{default:"filled"},color:{default:""},size:{default:""},iconVariant:{default:void 0},icon:{type:Boolean,default:!1},iconTrailing:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},customClass:{default:""},rounded:{type:Boolean,default:!1}},emits:["onClick"],setup(e){return(l,i)=>(n(),o("div",null,[b(j(Ue),{"aria-id":`${e.id}-dropdown`,"positioning-disabled":e.isMobile},{popper:r(()=>[c("ul",null,[U(l.$slots,"menu")])]),default:r(()=>[b(j(De),{"aria-id":`${e.id}-tooltip`,class:"d-inline-block"},{popper:r(()=>[L(N(e.tooltipText),1)]),default:r(()=>[b(x,{id:e.id,title:e.title,text:e.text,variant:e.variant,color:e.color,size:e.size,icon:e.icon,"icon-variant":e.iconVariant,"custom-class":e.customClass,rounded:e.rounded,"icon-trailing":e.iconTrailing,loading:e.loading,disabled:e.disabled,"aria-label":e.text?void 0:e.title||e.tooltipText,onClick:i[0]||(i[0]=f=>l.$emit("onClick"))},{icon:r(()=>[U(l.$slots,"icon")]),content:r(()=>[U(l.$slots,"content")]),_:3},8,["id","title","text","variant","color","size","icon","icon-variant","custom-class","rounded","icon-trailing","loading","disabled","aria-label"])]),_:3},8,["aria-id"])]),_:3},8,["aria-id","positioning-disabled"])]))}});ce.__docgenInfo={exportName:"default",displayName:"ButtonMenu",description:"",tags:{},props:[{name:"isMobile",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'menu'"}},{name:"id",defaultValue:{func:!1,value:"''"}},{name:"title",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"variant",defaultValue:{func:!1,value:"'filled'"}},{name:"color",defaultValue:{func:!1,value:"''"}},{name:"size",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"false"}},{name:"iconVariant",defaultValue:{func:!1,value:"undefined"}},{name:"iconTrailing",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"rounded",defaultValue:{func:!1,value:"false"}}],events:[{name:"onClick"}],slots:[{name:"icon"},{name:"content"},{name:"menu"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenu.vue"]};const Ve={key:0,class:"d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"},Se={class:"table-responsive"},Be=["onClick"],Te={key:1},we={key:2},qe=["colspan"],d=de({__name:"Datatable",props:{tableClass:{default:""},isLoading:{type:Boolean,default:!1},skeletonRows:{default:10},skeletonCols:{default:5},skeletonColExpanded:{default:7},isExpanded:{type:Boolean,default:!1},headers:{},items:{},defaultSortKey:{default:""},defaultSortOrder:{default:"asc"},unsortableColumns:{default:()=>["Actions"]},sortable:{type:Boolean,default:!0},hiddenColumns:{default:()=>[]},columnManager:{type:Boolean,default:!1},columnsToggleTooltip:{default:()=>({showAll:"Show all columns",hideDefault:"Hide default columns"})},columnManagerText:{default:"Columns"},columnManagerTooltip:{default:"Manage columns"},emptyStateTitle:{default:"No data available"},emptyStateSubtitle:{default:"Try may want to try using different filters or check back later."},emptyStateUseCustomIcon:{type:Boolean,default:!1},emptyStateIconCode:{default:"&#xeb83;"}},setup(e){const l=e,i=I(l.defaultSortKey),f=I(l.defaultSortOrder),m=I([...l.hiddenColumns]),O=k(()=>m.value.length===0),fe=k(()=>typeof l.columnsToggleTooltip=="string"?l.columnsToggleTooltip:O.value?l.columnsToggleTooltip.hideDefault:l.columnsToggleTooltip.showAll),g=k(()=>l.headers.filter(t=>!m.value.includes(t))),F=k(()=>i.value?[...l.items].sort((t,y)=>{const a=t[i.value],p=y[i.value];return a<p?f.value==="asc"?-1:1:a>p?f.value==="asc"?1:-1:0}):l.items);function E(t){return l.sortable&&!l.unsortableColumns.includes(t)}function pe(t){i.value===t?f.value=f.value==="asc"?"desc":"asc":(i.value=t,f.value="asc")}function v(t){const a=t.normalize("NFD").replace(/[\u0300-\u036F]/g,"").toLowerCase().replace(/[^a-z0-9]+(.)/gi,(p,C)=>C.toUpperCase());return a.charAt(0).toLowerCase()+a.slice(1)}function be(){m.value.length>0?m.value=[]:m.value=[...l.hiddenColumns]}function ge(t){const y=m.value.indexOf(t);y>-1?m.value.splice(y,1):g.value.length>1&&m.value.push(t)}function R(t){return!m.value.includes(t)}function ve(t){return g.value.length===1&&R(t)}return(t,y)=>(n(),o("div",null,[e.hiddenColumns&&e.hiddenColumns.length>0||e.columnManager?(n(),o("div",Ve,[c("div",null,[U(t.$slots,"controls")]),b(Ce,null,{default:r(()=>[e.hiddenColumns&&e.hiddenColumns.length>0?(n(),h(ke,{key:0,id:"columns-toggle",variant:"outline",size:"sm",icon:"","icon-variant":"shape-sm","tooltip-text":fe.value,onOnClick:be},{icon:r(()=>[b(B,{"icon-code":O.value?"":"",class:"rotate-90"},null,8,["icon-code"])]),_:1},8,["tooltip-text"])):V("",!0),e.columnManager?(n(),h(ce,{key:1,id:"column-manager",variant:"outline",size:"sm",text:e.columnManagerText,"tooltip-text":e.columnManagerTooltip,"icon-trailing":""},{icon:r(()=>[b(B,{"icon-code":""})]),menu:r(()=>[(n(!0),o(D,null,S(e.headers,a=>(n(),h(xe,{id:`column-${v(a)}`,key:a,"item-text":a,icon:R(a)?"":"",disabled:ve(a),onClick:p=>ge(a)},null,8,["id","item-text","icon","disabled","onClick"]))),128))]),_:1},8,["text","tooltip-text"])):V("",!0)]),_:1})])):V("",!0),c("div",Se,[c("table",{class:H(["table table-hover",e.tableClass])},[c("thead",null,[c("tr",null,[(n(!0),o(D,null,S(g.value,a=>(n(),o("th",{key:a,scope:"col",class:H({sortable:E(a),sorted:i.value===v(a)}),onClick:p=>E(a)?pe(v(a)):void 0},[L(N(a)+" ",1),E(a)?(n(),o(D,{key:0},[i.value===v(a)?(n(),h(B,{key:0,"icon-code":f.value==="asc"?"":"",class:"fs-sm-100 rotate-90"},null,8,["icon-code"])):(n(),h(B,{key:1,"icon-code":"",class:"fs-sm-100 rotate-90 text-muted opacity-50"}))],64)):V("",!0)],10,Be))),128))])]),e.isLoading?(n(),h(he,{key:0,"skeleton-cols":g.value.length,"skeleton-col-expanded":e.skeletonColExpanded,"skeleton-rows":e.skeletonRows,"is-expanded":e.isExpanded},null,8,["skeleton-cols","skeleton-col-expanded","skeleton-rows","is-expanded"])):F.value.length>0?(n(),o("tbody",Te,[(n(!0),o(D,null,S(F.value,(a,p)=>(n(),o("tr",{key:p},[(n(!0),o(D,null,S(g.value,C=>(n(),o("td",{key:C},[U(t.$slots,`cell-${v(C)}`,{item:a},()=>[L(N(a[v(C)]),1)])]))),128))]))),128))])):(n(),o("tbody",we,[c("tr",null,[c("td",{colspan:g.value.length},[b(ye,{title:e.emptyStateTitle,subtitle:e.emptyStateSubtitle,"use-custom-icon":e.emptyStateUseCustomIcon,"icon-code":e.emptyStateIconCode},null,8,["title","subtitle","use-custom-icon","icon-code"])],8,qe)])]))],2)])]))}});d.__docgenInfo={exportName:"default",displayName:"Datatable",description:"",tags:{},props:[{name:"tableClass",required:!1,type:{name:"union",elements:[{name:'"table-bordered"'},{name:'"table-striped"'},{name:'"table-borderless"'},{name:"string"}]},defaultValue:{func:!1,value:"''"}},{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skeletonRows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"skeletonCols",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"skeletonColExpanded",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"7"}},{name:"isExpanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headers",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"any"}]}},{name:"defaultSortKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultSortOrder",required:!1,type:{name:"union",elements:[{name:'"asc"'},{name:'"desc"'}]},defaultValue:{func:!1,value:"'asc'"}},{name:"unsortableColumns",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => ['Actions']"}},{name:"sortable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hiddenColumns",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"columnManager",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"columnsToggleTooltip",required:!1,type:{name:"union",elements:[{name:"string"},{name:"IColumnsToggleTooltip"}]},defaultValue:{func:!1,value:"() => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' })"}},{name:"columnManagerText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Columns'"}},{name:"columnManagerTooltip",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Manage columns'"}},{name:"emptyStateTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"emptyStateSubtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Try may want to try using different filters or check back later.'"}},{name:"emptyStateUseCustomIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateIconCode",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'&#xeb83;'"}}],slots:[{name:"controls"},{name:"`cell-${toCamelCase(header)}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/datatable/Datatable.vue"]};const Ke={title:"Components/Datatable",component:d,tags:["autodocs"],argTypes:{tableClass:{control:"select",options:["","table-bordered","table-striped","table-borderless"]},sortable:{control:"boolean"},columnManager:{control:"boolean"},isLoading:{control:"boolean"}}},u=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"Active"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"User",status:"Active"}],s=["ID","Name","Email","Role","Status","Actions"],T={args:{headers:s,items:u},render:e=>({components:{UiDatatable:d,UiButton:x},setup(){return{headers:s,items:u}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    `})},w={args:{headers:s,items:u,sortable:!0},render:e=>({components:{UiDatatable:d,UiButton:x},setup(){return{headers:s,items:u}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :sortable="true"
        default-sort-key="name"
        :unsortable-columns="['Actions']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    `})},q={args:{headers:s,items:u,tableClass:"table-bordered"},render:e=>({components:{UiDatatable:d,UiButton:x},setup(){return{headers:s,items:u}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},M={args:{headers:s,items:u,tableClass:"table-striped"},render:e=>({components:{UiDatatable:d},setup(){return{headers:s,items:u}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-striped"
      />
    `})},z={args:{headers:s,items:u,columnManager:!0},render:e=>({components:{UiDatatable:d,UiButton:x},setup(){return{headers:s,items:u}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :column-manager="true"
        :hidden-columns="['Email']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},$={args:{headers:s,items:[],isLoading:!0,skeletonRows:5},render:e=>({components:{UiDatatable:d},setup(){return{headers:s,items:[]}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `})},A={args:{headers:s,items:[]},render:e=>({components:{UiDatatable:d},setup(){return{headers:s,items:[]}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
      />
    `})};var K,J,W;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    headers,
    items: sampleData
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        headers,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    \`
  })
}`,...(W=(J=T.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var G,P,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    headers,
    items: sampleData,
    sortable: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        headers,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :sortable="true"
        default-sort-key="name"
        :unsortable-columns="['Actions']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    \`
  })
}`,...(Q=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    headers,
    items: sampleData,
    tableClass: 'table-bordered'
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        headers,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...(Z=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;M.parameters={...M.parameters,docs:{...(_=M.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    headers,
    items: sampleData,
    tableClass: 'table-striped'
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        headers,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-striped"
      />
    \`
  })
}`,...(ae=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,le;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    headers,
    items: sampleData,
    columnManager: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        headers,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :column-manager="true"
        :hidden-columns="['Email']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...(le=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,oe,ie;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    headers,
    items: [],
    isLoading: true,
    skeletonRows: 5
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        headers,
        items: []
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    \`
  })
}`,...(ie=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ue,me;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    headers,
    items: []
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        headers,
        items: []
      };
    },
    template: \`
      <UiDatatable 
        :headers="headers"
        :items="items"
      />
    \`
  })
}`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Je=["Default","Sortable","Bordered","Striped","WithColumnManager","Loading","EmptyState"];export{q as Bordered,T as Default,A as EmptyState,$ as Loading,w as Sortable,M as Striped,z as WithColumnManager,Je as __namedExportsOrder,Ke as default};
