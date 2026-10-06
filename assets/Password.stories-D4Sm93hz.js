import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,K as a,S as o,_ as s,a as c,h as l,j as u,nt as d}from"./iframe-Cd0jc4kn.js";import{n as f,t as p}from"./Material-OytZncgB.js";import{n as m,t as h}from"./Button-CbIdTWjd.js";import{o as g,r as _}from"./useColorffyConfig-CpsKUdcI.js";import{n as v,t as y}from"./Text-Jm-YfLAR.js";var b;function x(){return(x=e((()=>{c(),_(),m(),f(),v(),b=n({__name:`Password`,props:t({modelValue:{default:null},revealLabel:{},maxlength:{default:128},autofocus:{type:Boolean},autocomplete:{default:`current-password`},id:{},label:{},errorMessages:{},placeholder:{},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean},rounded:{type:Boolean},customClass:{},optionalLabel:{type:Boolean},variant:{},size:{},hideLabel:{type:Boolean}},{modelValue:{default:null},modelModifiers:{},revealed:{type:Boolean,default:!1},revealedModifiers:{}}),emits:t([`update:modelValue`,`update`,`update:revealed`],[`update:modelValue`,`update:revealed`]),setup(e,{emit:t}){let n=e,c=t,d=r(e,`modelValue`),f=r(e,`revealed`),m=g(`password`),_=l(()=>n.revealLabel??m.value.reveal),v=l(()=>{let{modelValue:e,revealLabel:t,...r}=n;return r});return(t,n)=>(i(),s(y,u(v.value,{modelValue:d.value,"onUpdate:modelValue":n[1]||=e=>d.value=e,type:f.value?`text`:`password`,adornments:`inline`,onUpdate:n[2]||=e=>c(`update`,e)}),{suffix:a(()=>[o(h,{variant:`text`,"custom-class":`text-neutral`,size:`sm`,icon:``,"aria-label":_.value,"aria-pressed":f.value,"aria-controls":e.id??void 0,disabled:e.disabled,onClick:n[0]||=e=>f.value=!f.value},{icon:a(()=>[o(p,{"icon-code":f.value?``:``},null,8,[`icon-code`])]),_:1},8,[`aria-label`,`aria-pressed`,`aria-controls`,`disabled`])]),_:1},16,[`modelValue`,`type`]))}})})))()}var S;function C(){return(C=e((()=>{x(),S=b,b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:`default`,displayName:`Password`,description:``,tags:{},props:[{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`maxlength`,defaultValue:{func:!1,value:`128`}},{name:`autocomplete`,defaultValue:{func:!1,value:`'current-password'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Password.vue`]})})))()}var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),C(),w={title:`Components/Input/Password`,component:S,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},revealLabel:{control:`text`},autocomplete:{control:`select`,options:[`current-password`,`new-password`,`off`]},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},rounded:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`}}},T={args:{id:`story-password`,label:`Password`,placeholder:`Enter your password`}},E={render:()=>({components:{UiInputPassword:S},setup(){return{password:d(`correct-horse-battery`),revealed:d(!0)}},template:`
      <div style="max-width: 400px;">
        <UiInputPassword id="story-password-revealed" v-model="password" v-model:revealed="revealed" label="Password" />
        <p class="caption text-muted">Visible: {{ revealed }}</p>
      </div>
    `})},D={render:()=>({components:{UiInputPassword:S},setup(){return{password:d(``),confirm:d(``)}},template:`
      <form style="display: flex; flex-direction: column; max-width: 400px;" @submit.prevent>
        <UiInputPassword id="story-new-password" v-model="password" label="New password" autocomplete="new-password" required />
        <UiInputPassword
          id="story-confirm-password"
          v-model="confirm"
          label="Confirm password"
          autocomplete="new-password"
          :error-messages="confirm && confirm !== password ? ['The passwords don\\'t match.'] : []"
          required
        />
      </form>
    `})},O={args:{id:`story-password-invalid`,label:`Password`,modelValue:`short`,errorMessages:[`Use at least 12 characters.`]}},k={render:()=>({components:{UiInputPassword:S},template:`
      <div style="display: flex; flex-direction: column; max-width: 400px;">
        <UiInputPassword id="story-password-filled" label="Filled" variant="filled" />
        <UiInputPassword id="story-password-rounded" label="Rounded" rounded />
        <UiInputPassword id="story-password-sm" label="Small" size="sm" />
        <UiInputPassword id="story-password-lg" label="Large" size="lg" />
      </div>
    `})},A={args:{id:`story-password-disabled`,label:`Password`,modelValue:`secret`,disabled:!0}},j=[`Default`,`ControlledReveal`,`NewPassword`,`Invalid`,`Variants`,`Disabled`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputPassword
    },
    setup() {
      const password = ref('correct-horse-battery');
      const revealed = ref(true);
      return {
        password,
        revealed
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <UiInputPassword id="story-password-revealed" v-model="password" v-model:revealed="revealed" label="Password" />
        <p class="caption text-muted">Visible: {{ revealed }}</p>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputPassword
    },
    setup() {
      const password = ref('');
      const confirm = ref('');
      return {
        password,
        confirm
      };
    },
    template: \`
      <form style="display: flex; flex-direction: column; max-width: 400px;" @submit.prevent>
        <UiInputPassword id="story-new-password" v-model="password" label="New password" autocomplete="new-password" required />
        <UiInputPassword
          id="story-confirm-password"
          v-model="confirm"
          label="Confirm password"
          autocomplete="new-password"
          :error-messages="confirm && confirm !== password ? ['The passwords don\\\\'t match.'] : []"
          required
        />
      </form>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-password-invalid',
    label: 'Password',
    modelValue: 'short',
    errorMessages: ['Use at least 12 characters.']
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputPassword
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 400px;">
        <UiInputPassword id="story-password-filled" label="Filled" variant="filled" />
        <UiInputPassword id="story-password-rounded" label="Rounded" rounded />
        <UiInputPassword id="story-password-sm" label="Small" size="sm" />
        <UiInputPassword id="story-password-lg" label="Large" size="lg" />
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-password-disabled',
    label: 'Password',
    modelValue: 'secret',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{E as ControlledReveal,T as Default,A as Disabled,O as Invalid,D as NewPassword,k as Variants,j as __namedExportsOrder,w as default};