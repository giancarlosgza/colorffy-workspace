import{d as N,h as W,c as p,a as m,t as X,n as o,o as u}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const Y=["src"],g=N({__name:"Avatar",props:{src:{default:""},size:{default:"sm"},initials:{default:null},maskShape:{default:null},maskStretch:{type:Boolean,default:!1}},setup(e){const a=e,d=W(!1),M=p(()=>{const s=["img-avatar"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s}),_=p(()=>{const s=["img-avatar","avatar-placeholder"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s}),J=p(()=>{const s=["img-avatar","initials-avatar"];return a.size&&s.push(`avatar-${a.size}`),a.maskShape&&(s.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&s.push("shape-stretch")),s});function L(){d.value=!0}return(s,b)=>e.initials?(u(),m("span",{key:0,class:o(J.value)},X(e.initials),3)):e.src&&!d.value?(u(),m("img",{key:1,src:e.src,class:o(M.value),alt:"Avatar",onError:L},null,42,Y)):(u(),m("div",{key:2,class:o(_.value)},null,2))}});g.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",defaultValue:{func:!1,value:"''"}},{name:"size",defaultValue:{func:!1,value:"'sm'"}},{name:"initials",defaultValue:{func:!1,value:"null"}},{name:"maskShape",defaultValue:{func:!1,value:"null"}},{name:"maskStretch",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/image/Avatar.vue"]};const T={title:"Components/Avatar",component:g,tags:["autodocs"],argTypes:{src:{control:"text"},size:{control:"select",options:["sm","md","lg","navbar","menu"]},initials:{control:"text"}}},r={args:{src:"https://i.pravatar.cc/150?img=1"}},t={args:{src:"https://i.pravatar.cc/150?img=2",size:"sm"}},i={args:{src:"https://i.pravatar.cc/150?img=3",size:"md"}},c={args:{src:"https://i.pravatar.cc/150?img=4",size:"lg"}},l={args:{initials:"JD",size:"lg"}},n={args:{src:"https://i.pravatar.cc/150?img=10",size:"sm"},render:e=>({components:{UiAvatar:g},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=10" size="sm" />
        <UiAvatar src="https://i.pravatar.cc/150?img=11" size="md" />
        <UiAvatar src="https://i.pravatar.cc/150?img=12" size="lg" />
        <UiAvatar initials="AB" size="md" />
        <UiAvatar initials="XY" size="lg" />
      </div>
    `})};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var z,k,S;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm'
  }
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,y,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'md'
  }
}`,...(U=(y=i.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var x,C,$;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    size: 'lg'
  }
}`,...($=(C=c.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var B,D,E;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'lg'
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var V,w,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const j=["Default","Small","Medium","Large","WithInitials","Multiple"];export{r as Default,c as Large,i as Medium,n as Multiple,t as Small,l as WithInitials,j as __namedExportsOrder,T as default};
