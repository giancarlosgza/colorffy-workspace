import{v as J,k as L,m,x as p,D as N,J as o,A as u}from"./vue.esm-bundler-C74hS-cP.js";const W=["src"],d=J({__name:"Avatar",props:{src:{default:""},size:{default:"sm"},initials:{default:null},maskShape:{default:null},maskStretch:{type:Boolean,default:!1}},setup(s){const a=s,g=L(!1),w=m(()=>{const e=["img-avatar"];return a.size&&e.push(`avatar-${a.size}`),a.maskShape&&(e.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&e.push("shape-stretch")),e}),I=m(()=>{const e=["img-avatar","avatar-placeholder"];return a.size&&e.push(`avatar-${a.size}`),a.maskShape&&(e.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&e.push("shape-stretch")),e}),_=m(()=>{const e=["img-avatar","initials-avatar"];return a.size&&e.push(`avatar-${a.size}`),a.maskShape&&(e.push("mask-shape",`shape-${a.maskShape}`),a.maskStretch&&e.push("shape-stretch")),e});function b(){g.value=!0}return(e,X)=>s.initials?(u(),p("span",{key:0,class:o(_.value)},N(s.initials),3)):s.src&&!g.value?(u(),p("img",{key:1,src:s.src,class:o(w.value),alt:"Avatar",onError:b},null,42,W)):(u(),p("div",{key:2,class:o(I.value)},null,2))}});d.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"navbar"'},{name:'"menu"'}]},defaultValue:{func:!1,value:"'sm'"}},{name:"initials",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"maskShape",description:"Apply a mask shape to the avatar",required:!1,type:{name:"union",elements:[{name:"AvatarMaskShape"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"maskStretch",description:"Stretch the mask size to 115%",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/image/Avatar.vue"]};const F={title:"Components/Avatar",component:d,tags:["autodocs"],argTypes:{src:{control:"text"},size:{control:"select",options:["sm","md","lg","navbar","menu"]},initials:{control:"text"}}},r={args:{src:"https://i.pravatar.cc/150?img=1"}},t={args:{src:"https://i.pravatar.cc/150?img=2",size:"sm"}},i={args:{src:"https://i.pravatar.cc/150?img=3",size:"md"}},c={args:{src:"https://i.pravatar.cc/150?img=4",size:"lg"}},n={args:{initials:"JD",size:"lg"}},l={args:{src:"https://i.pravatar.cc/150?img=10",size:"sm"},render:s=>({components:{UiAvatar:d},setup(){return{args:s}},template:`
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
}`,...(U=(y=i.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var x,C,D;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    size: 'lg'
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var $,q,B;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'lg'
  }
}`,...(B=(q=n.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,M,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const O=["Default","Small","Medium","Large","WithInitials","Multiple"];export{r as Default,c as Large,i as Medium,l as Multiple,t as Small,n as WithInitials,O as __namedExportsOrder,F as default};
