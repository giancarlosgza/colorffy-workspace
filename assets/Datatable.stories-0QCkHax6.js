import{_ as w}from"./Button-ClCJYxdj.js";import{d as Y,o as n,h as y,w as p,l as x,u as G,n as h,r as L,k as j,t as A,g as b,x as R,C as se,e as u,j as U,F as C,q as S,f as V,W as Q,a0 as X}from"./iframe-C3YQMzEG.js";import{_ as oe}from"./Empty-CCnlcKI_.js";import{_ as ie}from"./TableSkeleton-BpvZNrkh.js";import{_ as ue}from"./ButtonGroup-nMZEa9Pd.js";import{V as re,k as me}from"./floating-vue-B56Ax-c2.js";import{_ as ce}from"./ButtonMenuItem-DPkbmw1Q.js";import{_ as de}from"./ButtonTooltip-DJ6l_4vn.js";import{_ as B}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO0yhRTf.js";import"./BaseSkeleton-CIUQcUis.js";import"./Badge-B4kjIv6W.js";const I=Y({__name:"ButtonMenu",props:{isMobile:{type:Boolean,default:!1},tooltipPlacement:{default:"top"},id:{default:""},text:{default:""},title:{default:""},variant:{default:"filled"},color:{default:""},size:{default:""},iconVariant:{default:void 0},icon:{type:Boolean,default:!1},iconTrailing:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},customClass:{default:""},rounded:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},tooltipText:{default:"menu"},placement:{default:"bottom"}},emits:["onClick"],setup(e){return(l,s)=>(n(),y(G(me),{"aria-id":`${e.id}-dropdown`,"positioning-disabled":e.isMobile,placement:e.placement,class:h({"w-100":e.fluid})},{popper:p(()=>[b("ul",null,[L(l.$slots,"menu")])]),default:p(()=>[x(G(re),{"aria-id":`${e.id}-tooltip`,placement:e.tooltipPlacement,class:h([{"w-100":e.fluid},"d-inline-block"])},{popper:p(()=>[j(A(e.tooltipText),1)]),default:p(()=>[x(w,{id:e.id,title:e.title,text:e.text,variant:e.variant,color:e.color,size:e.size,icon:e.icon,"icon-variant":e.iconVariant,"custom-class":e.customClass,rounded:e.rounded,fluid:e.fluid,"icon-trailing":e.iconTrailing,loading:e.loading,disabled:e.disabled,"aria-label":e.text?void 0:e.title||e.tooltipText,onClick:s[0]||(s[0]=g=>l.$emit("onClick"))},{icon:p(()=>[L(l.$slots,"icon")]),_:3},8,["id","title","text","variant","color","size","icon","icon-variant","custom-class","rounded","fluid","icon-trailing","loading","disabled","aria-label"])]),_:3},8,["aria-id","placement","class"])]),_:3},8,["aria-id","positioning-disabled","placement","class"]))}});I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:"default",displayName:"ButtonMenu",description:"",tags:{},props:[{name:"isMobile",defaultValue:{func:!1,value:"false"}},{name:"tooltipText",defaultValue:{func:!1,value:"'menu'"}},{name:"id",defaultValue:{func:!1,value:"''"}},{name:"title",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"variant",defaultValue:{func:!1,value:"'filled'"}},{name:"color",defaultValue:{func:!1,value:"''"}},{name:"size",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"false"}},{name:"iconVariant",defaultValue:{func:!1,value:"undefined"}},{name:"iconTrailing",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"fluid",defaultValue:{func:!1,value:"false"}},{name:"placement",defaultValue:{func:!1,value:"'bottom'"}},{name:"tooltipPlacement",defaultValue:{func:!1,value:"'top'"}}],events:[{name:"onClick"}],slots:[{name:"icon"},{name:"menu"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenu.vue"]});const fe={key:0,class:"d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"},pe={class:"table-responsive"},be={key:0},ge=["tabindex","aria-sort","onClick","onKeydown"],ve={key:2},ye={key:3},ke=["colspan"],m=Y({__name:"Datatable",props:{caption:{},tableClass:{default:""},isLoading:{type:Boolean,default:!1},skeletonRows:{default:10},skeletonCols:{default:5},skeletonColExpanded:{default:7},isExpanded:{type:Boolean,default:!1},columns:{},items:{},rowKey:{},defaultSortKey:{default:""},defaultSortOrder:{default:"asc"},sortable:{type:Boolean,default:!0},columnManager:{type:Boolean,default:!1},columnsToggleTooltip:{default:()=>({showAll:"Show all columns",hideDefault:"Hide default columns"})},columnManagerText:{default:"Columns"},columnManagerTooltip:{default:"Manage columns"},emptyStateTitle:{default:"No data available"},emptyStateSubtitle:{default:"Try may want to try using different filters or check back later."},emptyStateUseCustomIcon:{type:Boolean,default:!1},emptyStateIconCode:{default:"&#xeb83;"}},setup(e){const l=e,s=R(l.defaultSortKey),g=R(l.defaultSortOrder),D=V(()=>l.columns.filter(t=>t.hidden).map(t=>t.key)),d=R([...D.value]);se(D,t=>{d.value=[...t]});const F=V(()=>d.value.length===0),Z=V(()=>typeof l.columnsToggleTooltip=="string"?l.columnsToggleTooltip:F.value?l.columnsToggleTooltip.hideDefault:l.columnsToggleTooltip.showAll),k=V(()=>l.columns.filter(t=>!d.value.includes(t.key))),H=V(()=>s.value?[...l.items].sort((t,i)=>{const a=t[s.value],r=i[s.value],f=a==null,P=r==null;if(f||P)return f&&P?0:f?1:-1;const q=_(a,r);return g.value==="asc"?q:-q}):l.items);function _(t,i){if(typeof t=="number"&&typeof i=="number")return t-i;const a=Number(t),r=Number(i);return t!==""&&i!==""&&!Number.isNaN(a)&&!Number.isNaN(r)?a-r:String(t).localeCompare(String(i))}function ee(t,i){return l.rowKey&&t[l.rowKey]!=null?t[l.rowKey]:t.id!=null?t.id:i}function v(t){return l.sortable&&t.sortable!==!1}function te(t){if(v(t))return s.value!==t.key?"none":g.value==="asc"?"ascending":"descending"}function O(t){s.value===t?g.value=g.value==="asc"?"desc":"asc":(s.value=t,g.value="asc")}function W(t){return t.align?`text-${t.align}`:void 0}function ae(){d.value=d.value.length>0?[]:[...D.value]}function ne(t){const i=d.value.indexOf(t);i>-1?d.value.splice(i,1):k.value.length>1&&d.value.push(t)}function J(t){return!d.value.includes(t)}function le(t){return k.value.length===1&&J(t)}return(t,i)=>(n(),u("div",null,[D.value.length>0||e.columnManager?(n(),u("div",fe,[b("div",null,[L(t.$slots,"controls")]),x(ue,null,{default:p(()=>[D.value.length>0?(n(),y(de,{key:0,id:"columns-toggle",variant:"outline",size:"sm",icon:"","icon-variant":"shape-sm","tooltip-text":Z.value,onOnClick:ae},{icon:p(()=>[x(B,{"icon-code":F.value?"":"",class:"rotate-90"},null,8,["icon-code"])]),_:1},8,["tooltip-text"])):U("",!0),e.columnManager?(n(),y(I,{key:1,id:"column-manager",variant:"outline",size:"sm",text:e.columnManagerText,"tooltip-text":e.columnManagerTooltip,"icon-trailing":""},{icon:p(()=>[x(B,{"icon-code":""})]),menu:p(()=>[(n(!0),u(C,null,S(e.columns,a=>(n(),y(ce,{id:`column-${a.key}`,key:a.key,"item-text":a.label,icon:J(a.key)?"":"",disabled:le(a.key),onClick:r=>ne(a.key)},null,8,["id","item-text","icon","disabled","onClick"]))),128))]),_:1},8,["text","tooltip-text"])):U("",!0)]),_:1})])):U("",!0),b("div",pe,[b("table",{class:h(["table table-hover",e.tableClass])},[e.caption?(n(),u("caption",be,A(e.caption),1)):U("",!0),b("thead",null,[b("tr",null,[(n(!0),u(C,null,S(k.value,a=>(n(),u("th",{key:a.key,scope:"col",class:h([{sortable:v(a),sorted:s.value===a.key},W(a),a.thClass]),tabindex:v(a)?0:void 0,"aria-sort":te(a),onClick:r=>v(a)?O(a.key):void 0,onKeydown:[Q(X(r=>v(a)?O(a.key):void 0,["prevent"]),["enter"]),Q(X(r=>v(a)?O(a.key):void 0,["prevent"]),["space"])]},[j(A(a.label)+" ",1),v(a)?(n(),u(C,{key:0},[s.value===a.key?(n(),y(B,{key:0,"icon-code":g.value==="asc"?"":"",class:"fs-sm-100 rotate-90"},null,8,["icon-code"])):(n(),y(B,{key:1,"icon-code":"",class:"fs-sm-100 rotate-90 text-muted opacity-50"}))],64)):U("",!0)],42,ge))),128))])]),e.isLoading?(n(),y(ie,{key:1,"skeleton-cols":k.value.length,"skeleton-col-expanded":e.skeletonColExpanded,"skeleton-rows":e.skeletonRows,"is-expanded":e.isExpanded},null,8,["skeleton-cols","skeleton-col-expanded","skeleton-rows","is-expanded"])):H.value.length>0?(n(),u("tbody",ve,[(n(!0),u(C,null,S(H.value,(a,r)=>(n(),u("tr",{key:ee(a,r)},[(n(!0),u(C,null,S(k.value,f=>(n(),u("td",{key:f.key,class:h([W(f),f.tdClass])},[L(t.$slots,`cell-${f.key}`,{item:a},()=>[j(A(a[f.key]),1)])],2))),128))]))),128))])):(n(),u("tbody",ye,[b("tr",null,[b("td",{colspan:k.value.length},[x(oe,{title:e.emptyStateTitle,subtitle:e.emptyStateSubtitle,"use-custom-icon":e.emptyStateUseCustomIcon,"icon-code":e.emptyStateIconCode},null,8,["title","subtitle","use-custom-icon","icon-code"])],8,ke)])]))],2)])]))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"Datatable",description:"",tags:{},props:[{name:"tableClass",defaultValue:{func:!1,value:"''"}},{name:"isLoading",defaultValue:{func:!1,value:"false"}},{name:"skeletonRows",defaultValue:{func:!1,value:"10"}},{name:"skeletonCols",defaultValue:{func:!1,value:"5"}},{name:"skeletonColExpanded",defaultValue:{func:!1,value:"7"}},{name:"isExpanded",defaultValue:{func:!1,value:"false"}},{name:"defaultSortKey",defaultValue:{func:!1,value:"''"}},{name:"defaultSortOrder",defaultValue:{func:!1,value:"'asc'"}},{name:"sortable",defaultValue:{func:!1,value:"true"}},{name:"columnManager",defaultValue:{func:!1,value:"false"}},{name:"columnsToggleTooltip",defaultValue:{func:!1,value:"() => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' })"}},{name:"columnManagerText",defaultValue:{func:!1,value:"'Columns'"}},{name:"columnManagerTooltip",defaultValue:{func:!1,value:"'Manage columns'"}},{name:"emptyStateTitle",defaultValue:{func:!1,value:"'No data available'"}},{name:"emptyStateSubtitle",defaultValue:{func:!1,value:"'Try may want to try using different filters or check back later.'"}},{name:"emptyStateUseCustomIcon",defaultValue:{func:!1,value:"false"}},{name:"emptyStateIconCode",defaultValue:{func:!1,value:"'&#xeb83;'"}}],slots:[{name:"controls"},{name:"`cell-${column.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/datatable/Datatable.vue"]});const Ee={title:"Components/Datatable",component:m,tags:["autodocs"],argTypes:{tableClass:{control:"select",options:["","table-bordered","table-striped","table-borderless"]},sortable:{control:"boolean"},columnManager:{control:"boolean"},isLoading:{control:"boolean"}}},c=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"Active"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"User",status:"Active"}],o=[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"status",label:"Status"},{key:"actions",label:"Actions",sortable:!1}],T={args:{columns:o,items:c},render:e=>({components:{UiDatatable:m,UiButton:w},setup(){return{columns:o,items:c}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    `})},N={args:{columns:o,items:c,sortable:!0},render:e=>({components:{UiDatatable:m,UiButton:w},setup(){return{columns:o,items:c}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :sortable="true"
        default-sort-key="name"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    `})},M={args:{columns:o,items:c,tableClass:"table-bordered"},render:e=>({components:{UiDatatable:m,UiButton:w},setup(){return{columns:o,items:c}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},$={args:{columns:o,items:c,tableClass:"table-striped"},render:e=>({components:{UiDatatable:m},setup(){return{columns:o,items:c}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-striped"
      />
    `})},E={args:{columns:o,items:c,columnManager:!0},render:e=>({components:{UiDatatable:m,UiButton:w},setup(){return{columns:o.map(s=>s.key==="email"?{...s,hidden:!0}:s),items:c}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :column-manager="true"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},z={args:{columns:o,items:[],isLoading:!0,skeletonRows:5},render:e=>({components:{UiDatatable:m},setup(){return{columns:o,items:[]}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `})},K={args:{columns:o,items:[]},render:e=>({components:{UiDatatable:m},setup(){return{columns:o,items:[]}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
      />
    `})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
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
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
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
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :sortable="true"
        default-sort-key="name"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    \`
  })
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
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
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    tableClass: 'table-striped'
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-striped"
      />
    \`
  })
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    columnManager: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      // Email starts hidden; toggleable via the column manager
      const managerColumns = columns.map(column => column.key === 'email' ? {
        ...column,
        hidden: true
      } : column);
      return {
        columns: managerColumns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :column-manager="true"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
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
        columns,
        items: []
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    \`
  })
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: []
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        columns,
        items: []
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
      />
    \`
  })
}`,...K.parameters?.docs?.source}}};const ze=["Default","Sortable","Bordered","Striped","WithColumnManager","Loading","EmptyState"];export{M as Bordered,T as Default,K as EmptyState,z as Loading,N as Sortable,$ as Striped,E as WithColumnManager,ze as __namedExportsOrder,Ee as default};
