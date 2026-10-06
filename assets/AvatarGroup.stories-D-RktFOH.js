import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,_ as i,a,dt as o,h as s,j as c,m as l,mt as u,v as d,y as f,z as p}from"./iframe-Cd0jc4kn.js";import{n as m,t as h}from"./Avatar-D7gvIsQp.js";var g;function _(){return(_=e((()=>{a(),m(),g=t({__name:`AvatarGroup`,props:{avatars:{default:()=>[]},max:{default:void 0},size:{default:`sm`},color:{default:null},variant:{default:`tonal`},customClass:{default:null}},setup(e){let t=e,a=s(()=>{let e=[`avatar-group`];return t.customClass&&e.push(t.customClass),e}),m=s(()=>t.avatars?.length?t.max?t.avatars.slice(0,t.max):t.avatars:[]),g=s(()=>!t.avatars?.length||!t.max?0:Math.max(t.avatars.length-t.max,0)),_=s(()=>{let e=[`img-avatar`,`initials-avatar`,`avatar-group-overflow`];return t.size&&e.push(`avatar-${t.size}`),t.color&&e.push(`avatar-${t.color}`),t.variant&&t.variant!==`transparent`&&e.push(`avatar-${t.variant}`),e});return(t,s)=>(n(),f(`div`,{class:o(a.value)},[e.avatars&&e.avatars.length?(n(),f(l,{key:0},[(n(!0),f(l,null,r(m.value,(t,r)=>(n(),i(h,c({key:t.initials??t.src??r},{ref_for:!0},t,{size:t.size??e.size,color:t.color??e.color,variant:t.variant??e.variant}),null,16,[`size`,`color`,`variant`]))),128)),g.value>0?(n(),f(`span`,{key:0,class:o(_.value)},`+`+u(g.value),3)):d(``,!0)],64)):p(t.$slots,`default`,{},void 0,void 0,1)],2))}})})))()}var v;function y(){return(y=e((()=>{_(),v=g,g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:`default`,displayName:`AvatarGroup`,description:``,tags:{},props:[{name:`avatars`,defaultValue:{func:!1,value:`() => []`}},{name:`max`,defaultValue:{func:!1,value:`undefined`}},{name:`size`,defaultValue:{func:!1,value:`'sm'`}},{name:`color`,defaultValue:{func:!1,value:`null`}},{name:`variant`,defaultValue:{func:!1,value:`'tonal'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/image/AvatarGroup.vue`]})})))()}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{m(),y(),b={title:`Components/AvatarGroup`,component:v,tags:[`autodocs`],argTypes:{max:{control:`number`},size:{control:`select`,options:[`sm`,`md`,`lg`,`navbar`,`menu`]}}},x=[{initials:`JD`},{initials:`AS`},{initials:`MK`},{initials:`RL`},{initials:`TP`}],S={args:{avatars:x.slice(0,3)}},C={args:{avatars:x,max:3}},w={render:()=>({components:{UiAvatarGroup:v},setup(){return{teamAvatars:x}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="sm" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="md" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="lg" />
      </div>
    `})},T={render:()=>({components:{UiAvatarGroup:v,UiAvatar:h},template:`
      <UiAvatarGroup>
        <UiAvatar initials="JD" size="md" />
        <UiAvatar initials="AS" size="md" />
        <UiAvatar initials="MK" size="md" />
      </UiAvatarGroup>
    `})},E=[`Default`,`WithOverflow`,`Sizes`,`WithSlot`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    avatars: teamAvatars.slice(0, 3)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    avatars: teamAvatars,
    max: 3
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAvatarGroup
    },
    setup() {
      return {
        teamAvatars
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="sm" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="md" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="lg" />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAvatarGroup,
      UiAvatar
    },
    template: \`
      <UiAvatarGroup>
        <UiAvatar initials="JD" size="md" />
        <UiAvatar initials="AS" size="md" />
        <UiAvatar initials="MK" size="md" />
      </UiAvatarGroup>
    \`
  })
}`,...T.parameters?.docs?.source}}}})))()}D();export{S as Default,w as Sizes,C as WithOverflow,T as WithSlot,E as __namedExportsOrder,b as default};