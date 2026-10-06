import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,K as a,S as o,_ as s,a as c,b as l,h as u,j as d,nt as f}from"./iframe-Cd0jc4kn.js";import{n as p,t as m}from"./Material-OytZncgB.js";import{n as h,t as g}from"./Button-CbIdTWjd.js";import{o as _,r as v}from"./useColorffyConfig-CpsKUdcI.js";import{n as y,t as b}from"./Text-Jm-YfLAR.js";var x;function S(){return(S=e((()=>{c(),v(),h(),p(),y(),x=n({__name:`Search`,props:t({modelValue:{default:null},clearLabel:{},maxlength:{},autofocus:{type:Boolean},autocomplete:{default:`off`},id:{},label:{},errorMessages:{},placeholder:{},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},rounded:{type:Boolean},customClass:{},optionalLabel:{type:Boolean},variant:{},size:{},hideLabel:{type:Boolean}},{modelValue:{default:null},modelModifiers:{}}),emits:t([`update:modelValue`,`update`,`search`,`clear`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,c=t,p=r(e,`modelValue`),h=_(`search`),v=f(null),y=u(()=>n.clearLabel??h.value.clear),x=u(()=>{let{modelValue:e,clearLabel:t,...r}=n;return r}),S=u(()=>!!p.value);function C(){p.value=``,c(`clear`),v.value?.$el.querySelector(`input`)?.focus()}function w(e){e.key===`Enter`&&c(`search`,p.value??``),e.key===`Escape`&&S.value&&!n.disabled&&!n.readonly&&(e.preventDefault(),e.stopPropagation(),C())}return(t,n)=>(i(),s(b,d({ref_key:`field`,ref:v},x.value,{modelValue:p.value,"onUpdate:modelValue":n[0]||=e=>p.value=e,type:`search`,adornments:`inline`,onUpdate:n[1]||=e=>c(`update`,e),onKeydown:w}),l({prefix:a(()=>[o(m,{"icon-code":``})]),_:2},[S.value?{name:`suffix`,fn:a(()=>[o(g,{variant:`text`,"custom-class":`text-neutral`,size:`sm`,icon:``,"aria-label":y.value,"aria-controls":e.id??void 0,disabled:e.disabled||e.readonly,onClick:C},{icon:a(()=>[o(m,{"icon-code":``})]),_:1},8,[`aria-label`,`aria-controls`,`disabled`])]),key:`0`}:void 0]),1040,[`modelValue`]))}})})))()}var C;function w(){return(w=e((()=>{S(),C=x,x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`Search`,description:``,tags:{},props:[{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`autocomplete`,defaultValue:{func:!1,value:`'off'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Search.vue`]})})))()}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),w(),T={title:`Components/Input/Search`,component:C,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},clearLabel:{control:`text`},hideLabel:{control:`boolean`},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},rounded:{control:`boolean`},disabled:{control:`boolean`}}},E={args:{id:`story-search`,label:`Search projects`,hideLabel:!0,placeholder:`Search by name or key`}},D={render:()=>({components:{UiInputSearch:C},setup(){return{query:f(`roadmap`)}},template:`
      <div style="max-width: 400px;">
        <UiInputSearch id="story-search-value" v-model="query" label="Search" hide-label placeholder="Search" />
      </div>
    `})},O={render:()=>({components:{UiInputSearch:C},setup(){let e=f(``),t=f([]);return{query:e,log:t,push:e=>t.value.unshift(e)}},template:`
      <div style="max-width: 400px;">
        <UiInputSearch
          id="story-search-events"
          v-model="query"
          label="Search"
          hide-label
          placeholder="Type, then press Enter or Esc"
          @search="push('search: ' + $event)"
          @clear="push('clear')"
        />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `})},k={render:()=>({components:{UiInputSearch:C},template:`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputSearch id="story-search-filled" label="Filled" variant="filled" placeholder="Search" />
        <UiInputSearch id="story-search-transparent" label="Transparent and rounded, for a navbar" variant="transparent" rounded placeholder="Search Orbit" />
        <UiInputSearch id="story-search-sm" label="Small" size="sm" placeholder="Search" />
        <UiInputSearch id="story-search-lg" label="Large and rounded, for a hero" size="lg" rounded placeholder="Search the help center" />
      </div>
    `})},A={args:{id:`story-search-disabled`,label:`Search`,modelValue:`archived`,disabled:!0}},j=[`Default`,`WithValue`,`Events`,`Variants`,`Disabled`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-search',
    label: 'Search projects',
    hideLabel: true,
    placeholder: 'Search by name or key'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputSearch
    },
    setup() {
      const query = ref('roadmap');
      return {
        query
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <UiInputSearch id="story-search-value" v-model="query" label="Search" hide-label placeholder="Search" />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputSearch
    },
    setup() {
      const query = ref('');
      const log = ref<string[]>([]);
      const push = (entry: string) => log.value.unshift(entry);
      return {
        query,
        log,
        push
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <UiInputSearch
          id="story-search-events"
          v-model="query"
          label="Search"
          hide-label
          placeholder="Type, then press Enter or Esc"
          @search="push('search: ' + $event)"
          @clear="push('clear')"
        />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputSearch
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputSearch id="story-search-filled" label="Filled" variant="filled" placeholder="Search" />
        <UiInputSearch id="story-search-transparent" label="Transparent and rounded, for a navbar" variant="transparent" rounded placeholder="Search Orbit" />
        <UiInputSearch id="story-search-sm" label="Small" size="sm" placeholder="Search" />
        <UiInputSearch id="story-search-lg" label="Large and rounded, for a hero" size="lg" rounded placeholder="Search the help center" />
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-search-disabled',
    label: 'Search',
    modelValue: 'archived',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{E as Default,A as Disabled,O as Events,k as Variants,D as WithValue,j as __namedExportsOrder,T as default};