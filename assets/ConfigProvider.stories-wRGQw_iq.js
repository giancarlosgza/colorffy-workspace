import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,L as a,R as o,S as s,a as c,dt as l,et as u,g as d,h as f,lt as ee,m as te,mt as p,nt as m,v as h,y as g,z as _}from"./iframe-Cd0jc4kn.js";import{n as v,t as ne}from"./Material-OytZncgB.js";import{a as y,c as b,i as x,o as S,r as C,s as w,t as T}from"./useColorffyConfig-CpsKUdcI.js";import{n as E,t as re}from"./Badge-BaLuInpi.js";import{a as D,c as ie}from"./Calendar-CjiHODgj.js";import{n as ae,t as oe}from"./Pagination-CFE1fAhE.js";import{n as se,t as ce}from"./Datatable-Ds0_QBiD.js";import{n as le,t as ue}from"./Combobox-D4Pb48Ea.js";import{n as O,t as k}from"./Date-DUe2i35E.js";import{n as de,t as fe}from"./MultiSelect-Df7PTGQc.js";var A;function j(){return(j=e((()=>{A={common:{optional:`Opcional`},alert:{close:`Cerrar`},avatar:{alt:`Avatar`},breadcrumb:{ariaLabel:`Ruta de navegación`},buttonMenu:{ariaLabel:`Menú`},buttonToggleGroup:{ariaLabel:`Grupo de opciones`},calendar:{ariaLabel:`Calendario`,previousMonth:`Mes anterior`,nextMonth:`Mes siguiente`,rangeStart:`Fecha de inicio: {date}. Elige la fecha final.`},chip:{remove:`Quitar`},combobox:{empty:`Sin resultados`,clear:`Borrar selección`,toggle:`Mostrar opciones`,loading:`Buscando…`,typeToSearch:`Escribe para buscar`,results:({count:e})=>e===1?`1 resultado`:`${e} resultados`},confirmModal:{confirm:`Eliminar`,cancel:`Cancelar`,loading:`Eliminando...`},datatable:{manageColumns:`Administrar columnas`,showAllColumns:`Mostrar todas las columnas`,hideDefaultColumns:`Ocultar las columnas predeterminadas`,emptyTitle:`No hay datos`,emptySubtitle:`Prueba con otros filtros o vuelve a consultar más tarde.`,selectAll:`Seleccionar todas las filas`,selectAllOnPage:`Seleccionar todas las filas de esta página`,selectRow:`Seleccionar la fila {row}`},dateInput:{toggle:`Elegir fecha`,clear:`Borrar fecha`,apply:`Aplicar`,cancel:`Cancelar`,presets:`Atajos de fecha`,now:`Ahora`,time:`Hora`,from:`Desde`,to:`Hasta`,startDate:`Fecha de inicio`,endDate:`Fecha de fin`,startTime:`Hora de inicio`,endTime:`Hora de fin`,dayLetters:`dd`,monthLetters:`mm`,yearLetters:`aaaa`,dates:({count:e})=>e===1?`1 fecha`:`${e} fechas`,times:`Horarios disponibles`,pickDay:`Elige un día para ver los horarios`},datePresets:{today:`Hoy`,yesterday:`Ayer`,tomorrow:`Mañana`,lastDays:({count:e})=>e===1?`Último día`:`Últimos ${e} días`,lastMonths:({count:e})=>e===1?`Último mes`:`Últimos ${e} meses`,thisMonth:`Este mes`,lastMonth:`Mes pasado`,thisYear:`Este año`,lastYear:`Año pasado`},empty:{ariaLabel:`Sin contenido`},header:{back:`Volver`,actions:`Acciones de la página`},loading:{spinner:`Cargando`,content:`Cargando contenido`,grid:`Cargando la cuadrícula`,gridItem:`Cargando el elemento {index} de {total}`,gridPreview:`Cargando la vista previa del elemento {index}`,gridAction:`Botón de acción (cargando)`,table:`Cargando los datos de la tabla`},multiSelect:{empty:`Sin resultados`,clear:`Borrar selección`,toggle:`Mostrar opciones`,remove:`Quitar`,loading:`Buscando…`,typeToSearch:`Escribe para buscar`,results:({count:e})=>e===1?`1 resultado`:`${e} resultados`,create:`Agregar “{query}”`,summary:({count:e})=>e===1?`1 seleccionado`:`${e} seleccionados`,added:`Se agregó {label}`,removed:`Se quitó {label}`,cleared:`Se borró la selección`},navbar:{ariaLabel:`Navegación principal`,avatarAlt:`Avatar del usuario`,brandAlt:`Logotipo`,collapse:`Contraer la barra lateral`,expand:`Expandir la barra lateral`},navigationBar:{ariaLabel:`Navegación principal`},otp:{ariaLabel:`Código de un solo uso`,digit:`{label}, dígito {index} de {length}`},pagination:{ariaLabel:`Paginación`,first:`Primera página`,previous:`Página anterior`,next:`Página siguiente`,last:`Última página`,status:`Página {page} de {total}`},password:{reveal:`Mostrar contraseña`},popoverMenu:{ariaLabel:`Menú`,close:`Cerrar menú`,photoAlt:`Foto de perfil de {name}`,account:`la cuenta`},search:{clear:`Borrar búsqueda`},select:{placeholder:`Selecciona una opción`},sidebar:{ariaLabel:`Navegación principal`},tags:{remove:`Quitar`,added:`Se agregó {tags}`,removed:`Se quitó {tag}`,duplicate:`{tag} ya está en la lista`,full:`Puedes agregar hasta {max}`}}})))()}var M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{c(),C(),E(),v(),M=[`aria-label`],N=[`tabindex`,`aria-checked`,`aria-disabled`,`onClick`,`onKeydown`],P={class:`toggle-btn-inner`},F={key:0,class:`toggle-btn-icon-wrapper`},I={class:`toggle-btn-support-text`},L=[`textContent`],R=[`textContent`],z={key:1},B=n({__name:`ButtonToggleGroup`,props:t({options:{},ariaLabel:{}},{modelValue:{},modelModifiers:{}}),emits:t([`optionClick`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,a=t,c=r(e,`modelValue`),u=S(`buttonToggleGroup`),_=m([]),v=f(()=>{let e=n.options.findIndex(e=>y(e)&&!e.disabled);return e===-1?n.options.findIndex(e=>!e.disabled):e});function y(e){return c.value===void 0?!!e.active:c.value===e.id}function b(e,t){_.value[t]=e??null}function x(e,t){t.disabled||(c.value=t.id,a(`optionClick`,e,t))}function C(e,t){let r=n.options.length,i=e;for(let e=0;e<r;e++)if(i=(i+t+r)%r,!n.options[i]?.disabled)return i;return e}function w(e,t){let r=n.options[e];r&&!r.disabled&&(x(t,r),_.value[e]?.focus())}function T(e,t){switch(e.key){case`Enter`:case` `:e.preventDefault(),x(e,n.options[t]);break;case`ArrowRight`:case`ArrowDown`:e.preventDefault(),w(C(t,1),e);break;case`ArrowLeft`:case`ArrowUp`:e.preventDefault(),w(C(t,-1),e);break;case`Home`:e.preventDefault(),w(C(n.options.length-1,1),e);break;case`End`:e.preventDefault(),w(C(0,-1),e)}}function E(e){return`toggle-btn-${e}`}function D(e){return e.iconClass||``}return(e,t)=>(i(),g(`div`,{class:`toggle-btn-group`,role:`radiogroup`,"aria-label":n.ariaLabel??ee(u).ariaLabel},[(i(!0),g(te,null,o(n.options,(e,t)=>(i(),g(`div`,{key:E(t),ref_for:!0,ref:e=>b(e,t),role:`radio`,tabindex:t===v.value?0:-1,"aria-checked":y(e),"aria-disabled":e.disabled,class:l([`toggle-btn`,{"toggle-btn-active":y(e),"toggle-btn-disabled":e.disabled}]),onClick:t=>x(t,e),onKeydown:e=>T(e,t)},[d(`div`,P,[e.icon?(i(),g(`div`,F,[s(ne,{"icon-code":e.icon,class:l(D(e)),"aria-hidden":!0},null,8,[`icon-code`,`class`])])):h(``,!0),d(`div`,I,[e.title?(i(),g(`p`,{key:0,class:`subtitle-1`,textContent:p(e.title)},null,8,L)):h(``,!0),e.text?(i(),g(`p`,{key:1,class:`subtitle-2`,textContent:p(e.text)},null,8,R)):h(``,!0)]),e.badge&&e.badge.text?(i(),g(`div`,z,[s(re,{variant:e.badge.variant,text:e.badge.text},null,8,[`variant`,`text`])])):h(``,!0)])],42,N))),128))],8,M))}})})))()}var H;function U(){return(U=e((()=>{V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`ButtonToggleGroup`,description:``,tags:{},sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonToggleGroup.vue`]})})))()}var W;function G(){return(G=e((()=>{c(),C(),W=n({__name:`ConfigProvider`,props:{locale:{default:null},labels:{default:null}},setup(e){let t=e,n=y(),r=u({get locale(){return t.locale??n.locale},get labels(){return x(n.labels,t.labels)}});return a(T,r),(e,t)=>_(e.$slots,`default`)}})})))()}var K;function q(){return(q=e((()=>{G(),K=W,W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`ConfigProvider`,description:``,tags:{},props:[{name:`locale`,defaultValue:{func:!1,value:`null`}},{name:`labels`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/config/ConfigProvider.vue`]})})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{c(),ie(),b(),j(),U(),se(),le(),O(),de(),ae(),q(),J={title:`Components/ConfigProvider`,component:K,tags:[`autodocs`]},Y=[D.today(),D.lastDays(7),D.thisMonth(),D.lastMonth()],X=[`Ana`,`Bruno`,`Carla`,`Diego`,`Elena`],Z={render:()=>({components:{UiConfigProvider:K,UiButtonToggleGroup:H,UiInputDate:k,UiInputCombobox:ue,UiInputMultiSelect:fe,UiPagination:oe,UiDatatable:ce},setup(){let e=m(`es`),t=[{id:`es`,title:`Español`},{id:`en`,title:`English`}],n=f(()=>e.value===`es`?A:w),r=f(()=>e.value===`es`?`es-SV`:`en-US`),i=m(Y[1].value()),a=m(null),o=m([`Ana`,`Bruno`,`Carla`]),s=m(3);return{language:e,options:t,labels:n,locale:r,period:i,presets:Y,lead:a,reviewers:o,team:X,page:s}},template:`
      <div style="max-width: 640px; display: grid; gap: 1rem;">
        <UiButtonToggleGroup v-model="language" :options="options" aria-label="Language" />
        <UiConfigProvider :locale="locale" :labels="labels">
          <UiInputDate id="story-config-period" v-model="period" mode="range" :presets="presets" label="Period / Periodo" />
          <UiInputCombobox id="story-config-lead" v-model="lead" :options="team" label="Lead / Responsable" optional-label clearable />
          <UiInputMultiSelect id="story-config-reviewers" v-model="reviewers" :options="team" label="Reviewers / Revisores" :max-chips="2" />
          <UiPagination v-model:page="page" :total-pages="12" compact />
          <UiDatatable :columns="[{ key: 'name', label: 'Name' }]" :items="[]" />
        </UiConfigProvider>
      </div>
    `})},Q=[`Languages`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiConfigProvider,
      UiButtonToggleGroup,
      UiInputDate,
      UiInputCombobox,
      UiInputMultiSelect,
      UiPagination,
      UiDatatable
    },
    setup() {
      const language = ref('es');
      const options = [{
        id: 'es',
        title: 'Español'
      }, {
        id: 'en',
        title: 'English'
      }];
      const labels = computed(() => language.value === 'es' ? es : en);
      const locale = computed(() => language.value === 'es' ? 'es-SV' : 'en-US');
      const period = ref<Date | IDateRange | null>(presets[1]!.value());
      const lead = ref<string | null>(null);
      const reviewers = ref<string[]>(['Ana', 'Bruno', 'Carla']);
      const page = ref(3);
      return {
        language,
        options,
        labels,
        locale,
        period,
        presets,
        lead,
        reviewers,
        team,
        page
      };
    },
    template: \`
      <div style="max-width: 640px; display: grid; gap: 1rem;">
        <UiButtonToggleGroup v-model="language" :options="options" aria-label="Language" />
        <UiConfigProvider :locale="locale" :labels="labels">
          <UiInputDate id="story-config-period" v-model="period" mode="range" :presets="presets" label="Period / Periodo" />
          <UiInputCombobox id="story-config-lead" v-model="lead" :options="team" label="Lead / Responsable" optional-label clearable />
          <UiInputMultiSelect id="story-config-reviewers" v-model="reviewers" :options="team" label="Reviewers / Revisores" :max-chips="2" />
          <UiPagination v-model:page="page" :total-pages="12" compact />
          <UiDatatable :columns="[{ key: 'name', label: 'Name' }]" :items="[]" />
        </UiConfigProvider>
      </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Languages,Q as __namedExportsOrder,J as default};