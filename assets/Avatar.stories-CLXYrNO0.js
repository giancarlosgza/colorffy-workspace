import{d as k,e as p,t as S,n as o,x as A,f as u,o as g}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const y=["src","alt"],t=k({__name:"Avatar",props:{src:{default:""},alt:{default:"Avatar"},size:{default:"sm"},initials:{default:null},maskShape:{default:null},maskStretch:{type:Boolean,default:!1}},setup(e){const a=e,d=A(!1),v=u(()=>{const s=["img-avatar"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s}),h=u(()=>{const s=["img-avatar","avatar-placeholder"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s}),f=u(()=>{const s=["img-avatar","initials-avatar"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s});function z(){d.value=!0}return(s,U)=>e.initials?(g(),p("span",{key:0,class:o(f.value)},S(e.initials),3)):e.src&&!d.value?(g(),p("img",{key:1,src:e.src,class:o(v.value),alt:e.alt,onError:z},null,42,y)):(g(),p("div",{key:2,class:o(h.value)},null,2))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",defaultValue:{func:!1,value:"''"}},{name:"alt",defaultValue:{func:!1,value:"'Avatar'"}},{name:"size",defaultValue:{func:!1,value:"'sm'"}},{name:"initials",defaultValue:{func:!1,value:"null"}},{name:"maskShape",defaultValue:{func:!1,value:"null"}},{name:"maskStretch",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/image/Avatar.vue"]});const V={title:"Components/Avatar",component:t,tags:["autodocs"],argTypes:{src:{control:"text"},size:{control:"select",options:["sm","md","lg","navbar","menu"]},initials:{control:"text"}}},r={args:{src:"https://i.pravatar.cc/150?img=1"}},i={args:{src:"https://i.pravatar.cc/150?img=2",size:"sm"}},c={args:{src:"https://i.pravatar.cc/150?img=3",size:"md"}},l={args:{src:"https://i.pravatar.cc/150?img=4",size:"lg"}},n={args:{initials:"JD",size:"lg"}},m={args:{src:"https://i.pravatar.cc/150?img=10",size:"sm"},render:e=>({components:{UiAvatar:t},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=10" size="sm" />
        <UiAvatar src="https://i.pravatar.cc/150?img=11" size="md" />
        <UiAvatar src="https://i.pravatar.cc/150?img=12" size="lg" />
        <UiAvatar initials="AB" size="md" />
        <UiAvatar initials="XY" size="lg" />
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'md'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=10',
    size: 'sm'
  },
  render: args => ({
    components: {
      UiAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=10" size="sm" />
        <UiAvatar src="https://i.pravatar.cc/150?img=11" size="md" />
        <UiAvatar src="https://i.pravatar.cc/150?img=12" size="lg" />
        <UiAvatar initials="AB" size="md" />
        <UiAvatar initials="XY" size="lg" />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const $=["Default","Small","Medium","Large","WithInitials","Multiple"];export{r as Default,l as Large,c as Medium,m as Multiple,i as Small,n as WithInitials,$ as __namedExportsOrder,V as default};
