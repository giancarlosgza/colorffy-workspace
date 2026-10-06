import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,S as i,_ as a,a as o,dt as s,g as c,h as l,m as u,mt as d,nt as f,v as p,y as m,z as h}from"./iframe-Cd0jc4kn.js";import{n as g,t as _}from"./Material-OytZncgB.js";import{o as v,r as y}from"./useColorffyConfig-CpsKUdcI.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{o(),y(),g(),b=[`id`,`aria-disabled`],x=[`disabled`,`aria-pressed`],S={key:1},C=[`disabled`,`aria-label`],w=[`id`,`disabled`,`aria-pressed`],T={key:1},E=t({__name:`Chip`,props:{id:{default:null},text:{default:null},iconCode:{default:null},selected:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},textOnly:{type:Boolean,default:!1},variant:{default:`outline`},color:{default:`primary`},closeLabel:{},customClass:{default:null}},emits:[`click`,`remove`],setup(e,{emit:t}){let r=e,o=t,u=v(`chip`),f=l(()=>r.closeLabel??u.value.remove),g=l(()=>{let e=[`btn`,`btn-chip`];return r.variant&&r.variant!==`outline`&&e.push(`chip-${r.variant}`),r.color&&e.push(`chip-${r.color}`),r.selected&&e.push(`chip-active`),r.textOnly&&e.push(`chip-text`),r.closable&&e.push(`chip-closable`),r.closable&&r.disabled&&e.push(`disabled`),r.customClass&&e.push(r.customClass),e}),y=l(()=>r.selected?`&#xe5ca;`:r.iconCode),E=l(()=>r.selected?!0:void 0);return(t,r)=>e.closable?(n(),m(`div`,{key:0,id:e.id||void 0,class:s(g.value),"aria-disabled":e.disabled||void 0},[c(`button`,{type:`button`,class:`chip-content`,disabled:e.disabled,"aria-pressed":E.value,onClick:r[0]||=e=>o(`click`,e)},[y.value?(n(),a(_,{key:0,"icon-code":y.value},null,8,[`icon-code`])):p(``,!0),e.text?(n(),m(`span`,S,d(e.text),1)):p(``,!0),h(t.$slots,`default`)],8,x),c(`button`,{type:`button`,class:`chip-remove`,disabled:e.disabled,"aria-label":f.value,onClick:r[1]||=e=>o(`remove`)},[i(_,{"icon-code":``})],8,C)],10,b)):(n(),m(`button`,{key:1,id:e.id||void 0,type:`button`,class:s(g.value),disabled:e.disabled,"aria-pressed":E.value,onClick:r[2]||=e=>o(`click`,e)},[y.value?(n(),a(_,{key:0,"icon-code":y.value},null,8,[`icon-code`])):p(``,!0),e.text?(n(),m(`span`,T,d(e.text),1)):p(``,!0),h(t.$slots,`default`)],10,w))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`Chip`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`text`,defaultValue:{func:!1,value:`null`}},{name:`iconCode`,defaultValue:{func:!1,value:`null`}},{name:`selected`,defaultValue:{func:!1,value:`false`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`closable`,defaultValue:{func:!1,value:`false`}},{name:`textOnly`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`'outline'`}},{name:`color`,defaultValue:{func:!1,value:`'primary'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/chip/Chip.vue`]})})))()}var A,j;function M(){return(M=e((()=>{o(),k(),A=[`aria-label`],j=t({__name:`ChipGroup`,props:{options:{},variant:{default:`outline`},color:{default:`primary`},modelValue:{default:null},multiple:{type:Boolean,default:!1},ariaLabel:{default:null},customClass:{default:null}},emits:[`update:modelValue`,`remove`],setup(e,{emit:t}){let i=e,o=t,c=l(()=>i.modelValue==null?[]:Array.isArray(i.modelValue)?i.modelValue:[i.modelValue]);function d(e){return c.value.includes(e.id)}function f(e){if(!e.disabled){if(i.multiple){let t=d(e)?c.value.filter(t=>t!==e.id):[...c.value,e.id];o(`update:modelValue`,t);return}o(`update:modelValue`,d(e)?null:e.id)}}return(t,i)=>(n(),m(`div`,{class:s([`chip-group`,e.customClass]),role:`group`,"aria-label":e.ariaLabel??void 0},[(n(!0),m(u,null,r(e.options,t=>(n(),a(O,{key:t.id,text:t.text,"icon-code":t.iconCode,variant:e.variant,color:e.color,selected:d(t),disabled:t.disabled,closable:t.closable,onClick:e=>f(t),onRemove:e=>o(`remove`,t.id)},null,8,[`text`,`icon-code`,`variant`,`color`,`selected`,`disabled`,`closable`,`onClick`,`onRemove`]))),128))],10,A))}})})))()}var N;function P(){return(P=e((()=>{M(),N=j,j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:`default`,displayName:`ChipGroup`,description:``,tags:{},props:[{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`variant`,defaultValue:{func:!1,value:`'outline'`}},{name:`color`,defaultValue:{func:!1,value:`'primary'`}},{name:`multiple`,defaultValue:{func:!1,value:`false`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/chip/ChipGroup.vue`]})})))()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{o(),k(),P(),F={title:`Components/Chip`,component:O,tags:[`autodocs`],argTypes:{text:{control:`text`},iconCode:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`},closable:{control:`boolean`},textOnly:{control:`boolean`},variant:{control:`select`,options:[`outline`,`elevated`]},color:{control:`select`,options:[`primary`,`secondary`,`neutral`]},closeLabel:{control:`text`}}},I={args:{text:`Assist chip`}},L={args:{text:`Favorites`,iconCode:`&#xe87d;`}},R={args:{text:`Selected`,selected:!0}},z={args:{text:`Removable`,closable:!0}},B={args:{text:`Disabled`,disabled:!0}},V={args:{text:`Borderless`,textOnly:!0}},H={render:e=>({components:{UiChip:O},setup:()=>({args:e}),template:`
      <div class="chip-group">
        <UiChip v-bind="args" text="Outline" />
        <UiChip v-bind="args" text="Outline selected" selected />
        <UiChip v-bind="args" text="Elevated" variant="elevated" />
        <UiChip v-bind="args" text="Elevated selected" variant="elevated" selected />
      </div>
    `})},U={render:e=>({components:{UiChip:O},setup:()=>({args:e}),template:`
      <div class="chip-group">
        <UiChip v-bind="args" text="Primary" selected />
        <UiChip v-bind="args" text="Secondary" color="secondary" selected />
        <UiChip v-bind="args" text="Neutral" color="neutral" selected />
      </div>
    `})},W={render:()=>({components:{UiChipGroup:N},setup(){return{selected:f(`all`),options:[{id:`all`,text:`All`},{id:`active`,text:`Active`},{id:`archived`,text:`Archived`},{id:`deleted`,text:`Deleted`,disabled:!0}]}},template:`
      <div>
        <UiChipGroup v-model="selected" :options="options" aria-label="Filter status" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `})},G={render:()=>({components:{UiChipGroup:N},setup(){return{selected:f(`week`),options:[{id:`day`,text:`Day`},{id:`week`,text:`Week`},{id:`month`,text:`Month`}]}},template:`
      <UiChipGroup v-model="selected" :options="options" variant="elevated" color="neutral" aria-label="Filter range" />
    `})},K={render:()=>({components:{UiChipGroup:N},setup(){return{selected:f([`vue`]),options:[{id:`vue`,text:`Vue`,iconCode:`&#xe86f;`},{id:`nuxt`,text:`Nuxt`,iconCode:`&#xe86f;`},{id:`typescript`,text:`TypeScript`,iconCode:`&#xe86f;`},{id:`scss`,text:`SCSS`,iconCode:`&#xe86f;`}]}},template:`
      <div>
        <UiChipGroup v-model="selected" :options="options" multiple aria-label="Filter tags" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected }}</p>
      </div>
    `})},q={render:()=>({components:{UiChipGroup:N},setup(){let e=f([{id:`design`,text:`Design`,closable:!0},{id:`frontend`,text:`Frontend`,closable:!0},{id:`a11y`,text:`Accessibility`,closable:!0}]);function t(t){e.value=e.value.filter(e=>e.id!==t)}return{tags:e,removeTag:t}},template:`
      <UiChipGroup :options="tags" aria-label="Tags" @remove="removeTag" />
    `})},J=[`Default`,`WithIcon`,`Selected`,`Closable`,`Disabled`,`TextOnly`,`Variants`,`Colors`,`GroupSingleSelect`,`GroupVariant`,`GroupMultiSelect`,`GroupClosable`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Assist chip'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Favorites',
    iconCode: '&#xe87d;'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Selected',
    selected: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Removable',
    closable: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    disabled: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Borderless',
    textOnly: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="chip-group">
        <UiChip v-bind="args" text="Outline" />
        <UiChip v-bind="args" text="Outline selected" selected />
        <UiChip v-bind="args" text="Elevated" variant="elevated" />
        <UiChip v-bind="args" text="Elevated selected" variant="elevated" selected />
      </div>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="chip-group">
        <UiChip v-bind="args" text="Primary" selected />
        <UiChip v-bind="args" text="Secondary" color="secondary" selected />
        <UiChip v-bind="args" text="Neutral" color="neutral" selected />
      </div>
    \`
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiChipGroup
    },
    setup() {
      const selected = ref<string | string[] | null>('all');
      const options = [{
        id: 'all',
        text: 'All'
      }, {
        id: 'active',
        text: 'Active'
      }, {
        id: 'archived',
        text: 'Archived'
      }, {
        id: 'deleted',
        text: 'Deleted',
        disabled: true
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <div>
        <UiChipGroup v-model="selected" :options="options" aria-label="Filter status" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected ?? 'none' }}</p>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiChipGroup
    },
    setup() {
      const selected = ref<string | string[] | null>('week');
      const options = [{
        id: 'day',
        text: 'Day'
      }, {
        id: 'week',
        text: 'Week'
      }, {
        id: 'month',
        text: 'Month'
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <UiChipGroup v-model="selected" :options="options" variant="elevated" color="neutral" aria-label="Filter range" />
    \`
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiChipGroup
    },
    setup() {
      const selected = ref<string | string[] | null>(['vue']);
      const options = [{
        id: 'vue',
        text: 'Vue',
        iconCode: '&#xe86f;'
      }, {
        id: 'nuxt',
        text: 'Nuxt',
        iconCode: '&#xe86f;'
      }, {
        id: 'typescript',
        text: 'TypeScript',
        iconCode: '&#xe86f;'
      }, {
        id: 'scss',
        text: 'SCSS',
        iconCode: '&#xe86f;'
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <div>
        <UiChipGroup v-model="selected" :options="options" multiple aria-label="Filter tags" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected }}</p>
      </div>
    \`
  })
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiChipGroup
    },
    setup() {
      const tags = ref([{
        id: 'design',
        text: 'Design',
        closable: true
      }, {
        id: 'frontend',
        text: 'Frontend',
        closable: true
      }, {
        id: 'a11y',
        text: 'Accessibility',
        closable: true
      }]);
      function removeTag(id: string) {
        tags.value = tags.value.filter(tag => tag.id !== id);
      }
      return {
        tags,
        removeTag
      };
    },
    template: \`
      <UiChipGroup :options="tags" aria-label="Tags" @remove="removeTag" />
    \`
  })
}`,...q.parameters?.docs?.source}}}})))()}Y();export{z as Closable,U as Colors,I as Default,B as Disabled,q as GroupClosable,K as GroupMultiSelect,W as GroupSingleSelect,G as GroupVariant,R as Selected,V as TextOnly,H as Variants,L as WithIcon,J as __namedExportsOrder,F as default};