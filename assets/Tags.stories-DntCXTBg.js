import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,R as a,S as o,W as s,a as c,dt as l,g as u,h as d,lt as f,m as p,mt as m,nt as h,q as g,u as _,v,y}from"./iframe-Cd0jc4kn.js";import{n as b,t as x}from"./Material-OytZncgB.js";import{n as S,o as C,r as w}from"./useColorffyConfig-CpsKUdcI.js";var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{c(),w(),b(),T=[`for`],E={class:`chip-content`},D=[`aria-label`,`onClick`],O=[`id`,`maxlength`,`placeholder`,`disabled`,`readonly`,`required`,`aria-invalid`,`aria-describedby`],k=[`id`],A={key:1,class:`caption text-muted mt-1`},j={class:`visually-hidden`,"aria-live":`polite`},M=n({__name:`Tags`,props:t({modelValue:{},max:{default:null},allowDuplicates:{type:Boolean,default:!1},separator:{default:`,`},maxlength:{default:50},removeLabel:{},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:t([`update:modelValue`,`update`,`add`,`remove`,`reject`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,c=t,b=r(e,`modelValue`),w=C(`tags`),M=C(`common`),N=h(``),P=h(null),F=h(``),I=d(()=>n.id??void 0),L=d(()=>n.removeLabel??w.value.remove),R=d(()=>n.errorMessages?.length>0),z=d(()=>R.value&&n.id?`${n.id}-error-0`:void 0),B=d(()=>n.max!=null&&b.value.length>=n.max),V=d(()=>n.disabled||n.readonly),H=d(()=>[`form-group`,{"form-invalid":R.value}]),U=d(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),W=d(()=>[`form-tags`,n.variant?`form-${n.variant}`:null,n.size?`form-${n.size}`:null,{"form-rounded":n.rounded},n.customClass]);function G(e){b.value=e,c(`update`,e)}function K(e){let t=[...b.value],r=[],i=[],a=!1;for(let o of e){let e=o.trim().slice(0,n.maxlength);if(e){if(n.max!=null&&t.length>=n.max){c(`reject`,e,`max`),a=!0;continue}if(!n.allowDuplicates&&t.some(t=>t.toLowerCase()===e.toLowerCase())){c(`reject`,e,`duplicate`),i.push(S(w.value.duplicate,{tag:e}));continue}t.push(e),r.push(e)}}a&&i.push(S(w.value.full,{max:n.max})),r.length&&(G(t),r.forEach(e=>c(`add`,e)),i.unshift(S(w.value.added,{tags:r.join(`, `)}))),i.length&&(F.value=i.join(`. `))}function q(e){let t=b.value[e];t===void 0||V.value||(G(b.value.filter((t,n)=>n!==e)),c(`remove`,t),F.value=S(w.value.removed,{tag:t}),P.value?.focus())}function J(){K([N.value]),N.value=``}function Y(e){e.key===`Enter`&&N.value.trim()?(e.preventDefault(),J()):e.key===`Backspace`&&!N.value&&b.value.length&&q(b.value.length-1)}function X(e){let t=e.clipboardData?.getData(`text`)??``;if(!t.includes(`
`)&&!(n.separator&&t.includes(n.separator)))return;e.preventDefault();let r=`${N.value}${t}`.split(/\r?\n/);K(n.separator?r.flatMap(e=>e.split(n.separator)):r),N.value=``}function Z(e){e.target===e.currentTarget&&P.value?.focus()}return s(N,e=>{if(!n.separator||!e.includes(n.separator))return;let t=e.split(n.separator);N.value=t.pop()??``,K(t)}),(t,n)=>(i(),y(`div`,{class:l(H.value)},[u(`label`,{for:I.value,class:l(U.value)},m(e.label)+m(e.required?` *`:``),11,T),u(`div`,{class:l(W.value),onClick:Z},[(i(!0),y(p,null,a(b.value,(e,t)=>(i(),y(`span`,{key:`${e}-${t}`,class:l([`btn btn-chip chip-closable`,{disabled:V.value}])},[u(`span`,E,m(e),1),V.value?v(``,!0):(i(),y(`button`,{key:0,type:`button`,class:`chip-remove`,"aria-label":`${L.value} ${e}`,onClick:e=>q(t)},[o(x,{"icon-code":``})],8,D))],2))),128)),g(u(`input`,{id:I.value,ref_key:`inputRef`,ref:P,"onUpdate:modelValue":n[0]||=e=>N.value=e,class:l([`form-tags-input`,{"visually-hidden":b.value.length&&(B.value||V.value)}]),type:`text`,enterkeyhint:`enter`,maxlength:e.maxlength,placeholder:b.value.length?void 0:e.placeholder??void 0,disabled:e.disabled,readonly:e.readonly||B.value,required:e.required&&!b.value.length,"aria-invalid":R.value||void 0,"aria-describedby":z.value,onKeydown:Y,onPaste:X,onBlur:J},null,42,O),[[_,N.value]])],2),R.value?(i(),y(`p`,{key:0,id:z.value,class:`invalid-feedback`},m(e.errorMessages?.[0]),9,k)):e.optionalLabel?(i(),y(`p`,A,m(f(M).optional),1)):v(``,!0),u(`span`,j,m(F.value),1)],2))}})})))()}var P;function F(){return(F=e((()=>{N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`default`,displayName:`Tags`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`placeholder`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`readonly`,defaultValue:{func:!1,value:`false`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}},{name:`max`,defaultValue:{func:!1,value:`null`}},{name:`allowDuplicates`,defaultValue:{func:!1,value:`false`}},{name:`separator`,defaultValue:{func:!1,value:`','`}},{name:`maxlength`,defaultValue:{func:!1,value:`50`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Tags.vue`]})})))()}var I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{c(),F(),I={title:`Components/Input/Tags`,component:P,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},max:{control:`number`},maxlength:{control:`number`},separator:{control:`text`},allowDuplicates:{control:`boolean`},removeLabel:{control:`text`},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},rounded:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`}}},L={args:{id:`story-tags`,label:`Labels`,placeholder:`Type a label, then Enter or comma`}},R={render:()=>({components:{UiInputTags:P},setup(){return{labels:h([`Design`,`Research`,`Q4`])}},template:`
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-value" v-model="labels" label="Labels" placeholder="Add a label" />
        <p class="caption text-muted">v-model: {{ labels }}</p>
      </div>
    `})},z={render:()=>({components:{UiInputTags:P},setup(){let e=h([]),t=h([]),n=/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;function r(){let r=e.value.filter(e=>!n.test(e));t.value=r.length?[`Check ${r.join(`, `)}: that isn't a valid email address.`]:[]}return{emails:e,errors:t,validate:r}},template:`
      <form style="max-width: 480px;" @submit.prevent="validate">
        <UiInputTags
          id="story-tags-emails"
          v-model="emails"
          label="Email addresses"
          placeholder="maria@orbit.app, sam@studio.co"
          :max="10"
          :maxlength="80"
          :error-messages="errors"
          @update="errors = []"
        />
        <button type="submit" class="btn btn-filled btn-sm">Send invites</button>
      </form>
    `})},B={render:()=>({components:{UiInputTags:P},setup(){return{keywords:h([`vue`])}},template:`
      <div style="max-width: 480px;">
        <UiInputTags
          id="story-tags-limits"
          v-model="keywords"
          label="Up to 3 keywords, separated by semicolons"
          separator=";"
          :max="3"
          :maxlength="20"
        />
      </div>
    `})},V={render:()=>({components:{UiInputTags:P},setup(){let e=h([]),t=h([]);return{tags:e,log:t,push:e=>t.value.unshift(e)}},template:`
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-events" v-model="tags" label="Tags" @add="push('add: ' + $event)" @remove="push('remove: ' + $event)" />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `})},H={render:()=>({components:{UiInputTags:P},setup(){return{tags:h([`Design`,`Research`])}},template:`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-filled" v-model="tags" label="Filled" variant="filled" />
        <UiInputTags id="story-tags-rounded" v-model="tags" label="Rounded" rounded />
        <UiInputTags id="story-tags-sm" v-model="tags" label="Small" size="sm" />
        <UiInputTags id="story-tags-lg" v-model="tags" label="Large" size="lg" />
      </div>
    `})},U={render:()=>({components:{UiInputTags:P},setup(){return{tags:h([`Design`,`Research`])}},template:`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-disabled" v-model="tags" label="Disabled" disabled />
        <UiInputTags id="story-tags-readonly" v-model="tags" label="Read-only" readonly />
      </div>
    `})},W=[`Default`,`WithTags`,`InviteByEmail`,`LimitsAndSeparator`,`Events`,`Variants`,`DisabledAndReadonly`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-tags',
    label: 'Labels',
    placeholder: 'Type a label, then Enter or comma'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const labels = ref(['Design', 'Research', 'Q4']);
      return {
        labels
      };
    },
    template: \`
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-value" v-model="labels" label="Labels" placeholder="Add a label" />
        <p class="caption text-muted">v-model: {{ labels }}</p>
      </div>
    \`
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const emails = ref<string[]>([]);
      const errors = ref<string[]>([]);
      const pattern = /^[^\\s@]+@[^\\s@][^\\s.@]*\\.[^\\s@]+$/;
      function validate() {
        const invalid = emails.value.filter(email => !pattern.test(email));
        errors.value = invalid.length ? [\`Check \${invalid.join(', ')}: that isn't a valid email address.\`] : [];
      }
      return {
        emails,
        errors,
        validate
      };
    },
    template: \`
      <form style="max-width: 480px;" @submit.prevent="validate">
        <UiInputTags
          id="story-tags-emails"
          v-model="emails"
          label="Email addresses"
          placeholder="maria@orbit.app, sam@studio.co"
          :max="10"
          :maxlength="80"
          :error-messages="errors"
          @update="errors = []"
        />
        <button type="submit" class="btn btn-filled btn-sm">Send invites</button>
      </form>
    \`
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const keywords = ref(['vue']);
      return {
        keywords
      };
    },
    template: \`
      <div style="max-width: 480px;">
        <UiInputTags
          id="story-tags-limits"
          v-model="keywords"
          label="Up to 3 keywords, separated by semicolons"
          separator=";"
          :max="3"
          :maxlength="20"
        />
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const tags = ref<string[]>([]);
      const log = ref<string[]>([]);
      const push = (entry: string) => log.value.unshift(entry);
      return {
        tags,
        log,
        push
      };
    },
    template: \`
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-events" v-model="tags" label="Tags" @add="push('add: ' + $event)" @remove="push('remove: ' + $event)" />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const tags = ref(['Design', 'Research']);
      return {
        tags
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-filled" v-model="tags" label="Filled" variant="filled" />
        <UiInputTags id="story-tags-rounded" v-model="tags" label="Rounded" rounded />
        <UiInputTags id="story-tags-sm" v-model="tags" label="Small" size="sm" />
        <UiInputTags id="story-tags-lg" v-model="tags" label="Large" size="lg" />
      </div>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputTags
    },
    setup() {
      const tags = ref(['Design', 'Research']);
      return {
        tags
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-disabled" v-model="tags" label="Disabled" disabled />
        <UiInputTags id="story-tags-readonly" v-model="tags" label="Read-only" readonly />
      </div>
    \`
  })
}`,...U.parameters?.docs?.source}}}})))()}G();export{L as Default,U as DisabledAndReadonly,V as Events,z as InviteByEmail,B as LimitsAndSeparator,H as Variants,R as WithTags,W as __namedExportsOrder,I as default};