import{_ as z}from"./Badge-CNJ1MVfJ.js";import"./vue.esm-bundler-C74hS-cP.js";import"./Material-DMIhPonb.js";const k={title:"Components/Badge",component:z,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","accent","success","warning","danger","outline"]},text:{control:"text"},iconCode:{control:"text"},size:{control:"select",options:["sm"]},pill:{control:"boolean"}}},a={args:{text:"Default"}},e={args:{variant:"primary",text:"Primary"}},r={args:{variant:"secondary",text:"Secondary"}},t={args:{variant:"success",text:"Success"}},n={args:{variant:"warning",text:"Warning"}},s={args:{variant:"danger",text:"Danger"}},o={args:{variant:"outline",text:"Outline"}},c={args:{text:"Badge"},render:E=>({components:{UiBadge:z},setup(){return{args:E}},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UiBadge text="Default" />
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" />
      </div>
    `})};var i,d,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Default'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Primary'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,x,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Secondary'
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,B,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    text: 'Success'
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var U,f,D;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    text: 'Warning'
  }
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,O,P;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    text: 'Danger'
  }
}`,...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var W,_,A;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    text: 'Outline'
  }
}`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,V,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Badge'
  },
  render: args => ({
    components: {
      UiBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UiBadge text="Default" />
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" />
      </div>
    \`
  })
}`,...(b=(V=c.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};const q=["Default","Primary","Secondary","Success","Warning","Danger","Outline","AllVariants"];export{c as AllVariants,s as Danger,a as Default,o as Outline,e as Primary,r as Secondary,t as Success,n as Warning,q as __namedExportsOrder,k as default};
