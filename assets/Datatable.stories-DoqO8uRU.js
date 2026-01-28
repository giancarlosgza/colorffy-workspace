import{_ as A}from"./Button-CLN8ICqy.js";import{v as B,m as c,x as o,F as J,H as C,E as S,B as V,G as f,D as T,A as t,Q as k,R as q,M as xe,y as g,Z as we,u as W,J as G,z as p,C as H,k as F}from"./vue.esm-bundler-C74hS-cP.js";import{_ as D}from"./Material-DMIhPonb.js";import{a as Se,b as qe}from"./index-BC92BMCz.js";import{V as De,k as Be}from"./floating-vue-DrfJF9JS.js";import{_ as Ue}from"./ButtonMenuItem-CvkG2Vcu.js";import{_ as Le}from"./ButtonTooltip-7jnjOEXr.js";import"./Badge-CNJ1MVfJ.js";const Te={key:0,class:"icon-state-wrapper"},Ae={key:2,class:"fw-800 mb-2 subtitle-1 fs-500"},$e={key:3,class:"subtitle-2 text-muted mb-3"},be=B({__name:"Empty",props:{title:{default:null},subtitle:{default:null},customClass:{default:null},emptyStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Empty state"},ariaLive:{default:"polite"},useCustomIcon:{type:Boolean,default:!1},iconCode:{default:"&#xeb83;"}},setup(a){const e=a,r=c(()=>{const l=["text-center","my-3"];return e.customClass&&l.push(e.customClass),l}),i=c(()=>{const l={};return e.role&&(l.role=e.role),e.ariaLabel&&(l["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(l["aria-live"]=e.ariaLive),l});return(l,n)=>(t(),o("div",J({class:r.value,style:a.emptyStyles},i.value),[a.useCustomIcon?(t(),C(D,{key:1,"icon-code":a.iconCode,class:"fs-100 text-muted mb-3"},null,8,["icon-code"])):(t(),o("div",Te,[...n[0]||(n[0]=[f("div",{class:"icon-empty-state"},null,-1),f("div",{class:"icon-empty-state"},null,-1),f("div",{class:"icon-empty-state"},null,-1)])])),a.title?(t(),o("h3",Ae,T(a.title),1)):S("",!0),a.subtitle?(t(),o("p",$e,T(a.subtitle),1)):S("",!0),V(l.$slots,"button")],16))}});be.__docgenInfo={exportName:"default",displayName:"Empty",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"subtitle",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"emptyStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Empty state'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}},{name:"useCustomIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconCode",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'&#xeb83;'"}}],slots:[{name:"button"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/Empty.vue"]};const ye=B({__name:"BaseSkeleton",props:{size:{default:"md"},variant:{default:"default"},isThumbnail:{type:Boolean,default:!1},customClass:{default:null},skeletonStyles:{type:[Boolean,null,String,Object,Array],default:null},width:{default:void 0},height:{default:void 0},rounded:{type:Boolean,default:!1},role:{default:"status"},ariaLabel:{default:"Loading content"},ariaLive:{default:"polite"}},setup(a){const e=a,r=c(()=>{const n=["skeleton"];e.size&&n.push(`skeleton-${e.size}`);const y=e.isThumbnail?"thumbnail":e.variant;return y&&y!=="default"&&(y==="thumbnail"?n.push("skeleton-thumbnail"):n.push(`skeleton-${y}`)),e.rounded&&n.push("rounded-pill"),e.customClass&&n.push(e.customClass),n}),i=c(()=>{const n={};return e.width&&(n.width=typeof e.width=="number"?`${e.width}px`:e.width),e.height&&(n.height=typeof e.height=="number"?`${e.height}px`:e.height),e.skeletonStyles?typeof e.skeletonStyles=="string"?[n,e.skeletonStyles]:{...n,...e.skeletonStyles}:n}),l=c(()=>{const n={};return e.role&&(n.role=e.role),e.ariaLabel&&(n["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(n["aria-live"]=e.ariaLive),n});return(n,y)=>(t(),o("div",J({class:r.value,style:i.value},l.value),null,16))}});ye.__docgenInfo={exportName:"default",displayName:"BaseSkeleton",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"thumbnail"'},{name:'"ai-generation"'},{name:'"shimmer"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"isThumbnail",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"skeletonStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"height",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/BaseSkeleton.vue"]};const ge=B({__name:"TableSkeleton",props:{skeletonRows:{default:12},skeletonCols:{default:5},skeletonColExpanded:{default:7},customClass:{default:null},skeletonStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Loading table data"},ariaLive:{default:"polite"},isExpanded:{type:Boolean,default:!1}},setup(a){const e=a,i=Se(qe).smallerOrEqual("sm"),l=c(()=>e.isExpanded?e.skeletonColExpanded:e.skeletonCols),n=c(()=>{const m=[];return e.customClass&&m.push(e.customClass),m}),y=c(()=>{const m={};return e.role&&(m.role=e.role),e.ariaLabel&&(m["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(m["aria-live"]=e.ariaLive),m});return(m,j)=>(t(),o("tbody",J({class:n.value,style:a.skeletonStyles},y.value),[(t(!0),o(k,null,q(a.skeletonRows,U=>(t(),o("tr",{key:`row-${U}`},[(t(!0),o(k,null,q(l.value,R=>(t(),o("td",{key:`col-${R}`},[xe(g(D,{class:"text-muted animation-spin me-2","icon-code":"","aria-hidden":"true"},null,512),[[we,!W(i)]]),g(ye,{class:"col-12 col-md-6"})]))),128))]))),128))],16))}});ge.__docgenInfo={exportName:"default",displayName:"TableSkeleton",description:"",tags:{},props:[{name:"skeletonRows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"12"}},{name:"skeletonCols",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"skeletonColExpanded",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"7"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"skeletonStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading table data'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}},{name:"isExpanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/TableSkeleton.vue"]};const ve=B({__name:"ButtonGroup",props:{connected:{type:Boolean,default:!1},joined:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},customClass:{default:""}},setup(a){const e=a,r=c(()=>{const i=[];return e.connected&&i.push("btn-group-connected"),e.joined&&i.push("btn-group-joined"),e.vertical&&i.push("btn-group-vertical"),e.customClass&&i.push(e.customClass),i});return(i,l)=>(t(),o("div",{class:G(["btn-group",r.value])},[V(i.$slots,"default")],2))}});ve.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"connected",description:`Applies connected button styling with rounded outer corners.
When true, buttons will have reduced gap and only first/last buttons have rounded corners.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"joined",description:"Removes gap completely between buttons. Only works when `connected` is also true.\nCreates a seamless joined button group with no spacing.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"vertical",description:`Arranges buttons vertically instead of horizontally.
Changes which corners are rounded (top corners for first, bottom for last).`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom CSS classes to apply to the button group container.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonGroup.vue"]};const he=B({__name:"ButtonMenu",props:{isMobile:{type:Boolean,default:!1},tooltipText:{default:"menu"},id:{default:""},text:{default:""},title:{default:""},variant:{default:"filled"},color:{default:""},size:{default:""},iconVariant:{default:void 0},icon:{type:Boolean,default:!1},iconTrailing:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},customClass:{default:""},rounded:{type:Boolean,default:!1}},emits:["onClick"],setup(a){return(e,r)=>(t(),o("div",null,[g(W(Be),{"aria-id":`${a.id}-dropdown`,"positioning-disabled":a.isMobile},{popper:p(()=>[f("ul",null,[V(e.$slots,"menu")])]),default:p(()=>[g(W(De),{"aria-id":`${a.id}-tooltip`,class:"d-inline-block"},{popper:p(()=>[H(T(a.tooltipText),1)]),default:p(()=>[g(A,{id:a.id,title:a.title,text:a.text,variant:a.variant,color:a.color,size:a.size,icon:a.icon,"icon-variant":a.iconVariant,"custom-class":a.customClass,rounded:a.rounded,"icon-trailing":a.iconTrailing,loading:a.loading,disabled:a.disabled,"aria-label":a.text?void 0:a.title||a.tooltipText,onClick:r[0]||(r[0]=i=>e.$emit("onClick"))},{icon:p(()=>[V(e.$slots,"icon")]),content:p(()=>[V(e.$slots,"content")]),_:3},8,["id","title","text","variant","color","size","icon","icon-variant","custom-class","rounded","icon-trailing","loading","disabled","aria-label"])]),_:3},8,["aria-id"])]),_:3},8,["aria-id","positioning-disabled"])]))}});he.__docgenInfo={exportName:"default",displayName:"ButtonMenu",description:"",tags:{},props:[{name:"rounded",description:"Optional rounded style. When true, applies a fully rounded button style.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom class for the button. Can be an array or null.",required:!1,type:{name:"union",elements:[{name:"ButtonClassName"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"loading",description:"Optional loading state of the button. Can be a boolean. When true, shows a loading spinner.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Optional disabled state of the button. Can be a boolean.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconTrailing",description:"Places the icon on the trailing side when true. Defaults to leading when false.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"Icon-only mode toggle. When true, renders the button with icon styles (no label required).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconVariant",description:"Optional icon variant of the button. Can be 'shape-sm', 'shape-md', 'compact-sm', 'compact', or undefined.",required:!1,type:{name:"union",elements:[{name:'"shape-sm"'},{name:'"shape-md"'},{name:'"compact-sm"'},{name:'"compact"'},{name:"undefined"}]},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:`Preferred size alias.
Accepts logical sizes ('sm' | 'md' | 'lg'). Legacy class strings are also accepted for compatibility.`,required:!1,type:{name:"union",elements:[{name:"ButtonSizeLevel"},{name:"string"},{name:"undefined"}]},defaultValue:{func:!1,value:"''"}},{name:"color",description:"Semantic color used with certain variants (e.g., 'filled' or 'tonal').",required:!1,type:{name:"union",elements:[{name:"ButtonColor"},{name:"string"},{name:"undefined"}]},defaultValue:{func:!1,value:"''"}},{name:"variant",description:`Visual style. Prefer simple values like 'filled' | 'tonal' | 'outline'.
Legacy composite strings are still accepted for backward compatibility.`,required:!0,type:{name:"union",elements:[{name:"ButtonVariant"},{name:"string"},{name:"undefined"}]},defaultValue:{func:!1,value:"'filled'"}},{name:"title",description:"Optional title of the button. Can be a string or null.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Optional text of the button. Can be a string or null.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"id",description:"Optional ID of the button. Can be a string or null.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"isMobile",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'menu'"}}],events:[{name:"onClick"}],slots:[{name:"icon"},{name:"content"},{name:"menu"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenu.vue"]};const Ee={key:0,class:"d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"},ze={class:"table-responsive"},Me=["onClick"],Ie={key:1},Ne={key:2},Oe=["colspan"],v=B({__name:"Datatable",props:{tableClass:{default:""},isLoading:{type:Boolean,default:!1},skeletonRows:{default:10},skeletonCols:{default:5},skeletonColExpanded:{default:7},isExpanded:{type:Boolean,default:!1},headers:{},items:{},defaultSortKey:{default:""},defaultSortOrder:{default:"asc"},unsortableColumns:{default:()=>["Actions"]},sortable:{type:Boolean,default:!0},hiddenColumns:{default:()=>[]},columnManager:{type:Boolean,default:!1},columnsToggleTooltip:{default:()=>({showAll:"Show all columns",hideDefault:"Hide default columns"})},columnManagerText:{default:"Columns"},columnManagerTooltip:{default:"Manage columns"},emptyStateTitle:{default:"No data available"},emptyStateSubtitle:{default:"Try may want to try using different filters or check back later."},emptyStateUseCustomIcon:{type:Boolean,default:!1},emptyStateIconCode:{default:"&#xeb83;"}},setup(a){const e=a,r=F(e.defaultSortKey),i=F(e.defaultSortOrder),l=F([...e.hiddenColumns]),n=c(()=>l.value.length===0),y=c(()=>typeof e.columnsToggleTooltip=="string"?e.columnsToggleTooltip:n.value?e.columnsToggleTooltip.hideDefault:e.columnsToggleTooltip.showAll),m=c(()=>e.headers.filter(u=>!l.value.includes(u))),j=c(()=>r.value?[...e.items].sort((u,w)=>{const s=u[r.value],h=w[r.value];return s<h?i.value==="asc"?-1:1:s>h?i.value==="asc"?1:-1:0}):e.items);function U(u){return e.sortable&&!e.unsortableColumns.includes(u)}function R(u){r.value===u?i.value=i.value==="asc"?"desc":"asc":(r.value=u,i.value="asc")}function x(u){const s=u.normalize("NFD").replace(/[\u0300-\u036F]/g,"").toLowerCase().replace(/[^a-z0-9]+(.)/gi,(h,L)=>L.toUpperCase());return s.charAt(0).toLowerCase()+s.slice(1)}function Ce(){l.value.length>0?l.value=[]:l.value=[...e.hiddenColumns]}function ke(u){const w=l.value.indexOf(u);w>-1?l.value.splice(w,1):m.value.length>1&&l.value.push(u)}function K(u){return!l.value.includes(u)}function Ve(u){return m.value.length===1&&K(u)}return(u,w)=>(t(),o("div",null,[a.hiddenColumns&&a.hiddenColumns.length>0||a.columnManager?(t(),o("div",Ee,[f("div",null,[V(u.$slots,"controls")]),g(ve,null,{default:p(()=>[a.hiddenColumns&&a.hiddenColumns.length>0?(t(),C(Le,{key:0,id:"columns-toggle",variant:"outline",size:"sm",icon:"","icon-variant":"shape-sm","tooltip-text":y.value,onOnClick:Ce},{icon:p(()=>[g(D,{"icon-code":n.value?"":"",class:"rotate-90"},null,8,["icon-code"])]),_:1},8,["tooltip-text"])):S("",!0),a.columnManager?(t(),C(he,{key:1,id:"column-manager",variant:"outline",size:"sm",text:a.columnManagerText,"tooltip-text":a.columnManagerTooltip,"icon-trailing":""},{icon:p(()=>[g(D,{"icon-code":""})]),menu:p(()=>[(t(!0),o(k,null,q(a.headers,s=>(t(),C(Ue,{id:`column-${x(s)}`,key:s,"item-text":s,icon:K(s)?"":"",disabled:Ve(s),onClick:h=>ke(s)},null,8,["id","item-text","icon","disabled","onClick"]))),128))]),_:1},8,["text","tooltip-text"])):S("",!0)]),_:1})])):S("",!0),f("div",ze,[f("table",{class:G(["table table-hover",a.tableClass])},[f("thead",null,[f("tr",null,[(t(!0),o(k,null,q(m.value,s=>(t(),o("th",{key:s,scope:"col",class:G({sortable:U(s),sorted:r.value===x(s)}),onClick:h=>U(s)?R(x(s)):void 0},[H(T(s)+" ",1),U(s)?(t(),o(k,{key:0},[r.value===x(s)?(t(),C(D,{key:0,"icon-code":i.value==="asc"?"":"",class:"fs-sm-100 rotate-90"},null,8,["icon-code"])):(t(),C(D,{key:1,"icon-code":"",class:"fs-sm-100 rotate-90 text-muted opacity-50"}))],64)):S("",!0)],10,Me))),128))])]),a.isLoading?(t(),C(ge,{key:0,"skeleton-cols":m.value.length,"skeleton-col-expanded":a.skeletonColExpanded,"skeleton-rows":a.skeletonRows,"is-expanded":a.isExpanded},null,8,["skeleton-cols","skeleton-col-expanded","skeleton-rows","is-expanded"])):j.value.length>0?(t(),o("tbody",Ie,[(t(!0),o(k,null,q(j.value,(s,h)=>(t(),o("tr",{key:h},[(t(!0),o(k,null,q(m.value,L=>(t(),o("td",{key:L},[V(u.$slots,`cell-${x(L)}`,{item:s},()=>[H(T(s[x(L)]),1)])]))),128))]))),128))])):(t(),o("tbody",Ne,[f("tr",null,[f("td",{colspan:m.value.length},[g(be,{title:a.emptyStateTitle,subtitle:a.emptyStateSubtitle,"use-custom-icon":a.emptyStateUseCustomIcon,"icon-code":a.emptyStateIconCode},null,8,["title","subtitle","use-custom-icon","icon-code"])],8,Oe)])]))],2)])]))}});v.__docgenInfo={exportName:"default",displayName:"Datatable",description:"",tags:{},props:[{name:"tableClass",required:!1,type:{name:"union",elements:[{name:'"table-bordered"'},{name:'"table-striped"'},{name:'"table-borderless"'},{name:"string"}]},defaultValue:{func:!1,value:"''"}},{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skeletonRows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"skeletonCols",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"skeletonColExpanded",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"7"}},{name:"isExpanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headers",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"any"}]}},{name:"defaultSortKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultSortOrder",required:!1,type:{name:"union",elements:[{name:'"asc"'},{name:'"desc"'}]},defaultValue:{func:!1,value:"'asc'"}},{name:"unsortableColumns",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => ['Actions']"}},{name:"sortable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hiddenColumns",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"columnManager",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"columnsToggleTooltip",required:!1,type:{name:"union",elements:[{name:"string"},{name:"IColumnsToggleTooltip"}]},defaultValue:{func:!1,value:"() => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' })"}},{name:"columnManagerText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Columns'"}},{name:"columnManagerTooltip",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Manage columns'"}},{name:"emptyStateTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"emptyStateSubtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Try may want to try using different filters or check back later.'"}},{name:"emptyStateUseCustomIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateIconCode",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'&#xeb83;'"}}],slots:[{name:"controls"},{name:"`cell-${toCamelCase(header)}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/datatable/Datatable.vue"]};const Pe={title:"Components/Datatable",component:v,tags:["autodocs"],argTypes:{tableClass:{control:"select",options:["","table-bordered","table-striped","table-borderless"]},sortable:{control:"boolean"},columnManager:{control:"boolean"},isLoading:{control:"boolean"}}},b=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"Active"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"User",status:"Active"}],d=["ID","Name","Email","Role","Status","Actions"],$={args:{headers:d,items:b},render:a=>({components:{UiDatatable:v,UiButton:A},setup(){return{headers:d,items:b}},template:`
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
    `})},E={args:{headers:d,items:b,sortable:!0},render:a=>({components:{UiDatatable:v,UiButton:A},setup(){return{headers:d,items:b}},template:`
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
    `})},z={args:{headers:d,items:b,tableClass:"table-bordered"},render:a=>({components:{UiDatatable:v,UiButton:A},setup(){return{headers:d,items:b}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},M={args:{headers:d,items:b,tableClass:"table-striped"},render:a=>({components:{UiDatatable:v},setup(){return{headers:d,items:b}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-striped"
      />
    `})},I={args:{headers:d,items:b,columnManager:!0},render:a=>({components:{UiDatatable:v,UiButton:A},setup(){return{headers:d,items:b}},template:`
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
    `})},N={args:{headers:d,items:[],isLoading:!0,skeletonRows:5},render:a=>({components:{UiDatatable:v},setup(){return{headers:d,items:[]}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `})},O={args:{headers:d,items:[]},render:a=>({components:{UiDatatable:v},setup(){return{headers:d,items:[]}},template:`
      <UiDatatable 
        :headers="headers"
        :items="items"
      />
    `})};var P,Q,Z;$.parameters={...$.parameters,docs:{...(P=$.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Z=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var X,Y,_;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var ee,ae,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,le,se;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(le=M.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,ie,ue;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var re,me,de;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(me=N.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,fe,pe;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};const Qe=["Default","Sortable","Bordered","Striped","WithColumnManager","Loading","EmptyState"];export{z as Bordered,$ as Default,O as EmptyState,N as Loading,E as Sortable,M as Striped,I as WithColumnManager,Qe as __namedExportsOrder,Pe as default};
