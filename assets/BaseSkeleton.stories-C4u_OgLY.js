import{_ as u}from"./BaseSkeleton-B1UsGVru.js";import"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const $={title:"States/BaseSkeleton",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","thumbnail","ai-generation","shimmer"]},customClass:{control:"text"},width:{control:"text"},height:{control:"text"},rounded:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},e={args:{size:"md",variant:"default"}},t={args:{size:"sm"}},a={args:{size:"lg"}},s={args:{variant:"thumbnail",size:"md"}},r={args:{variant:"ai-generation",size:"md"}},n={args:{variant:"shimmer",size:"md"}},o={args:{width:"300px",size:"md"}},i={args:{height:"100px",size:"md"}},d={args:{width:"400px",height:"150px",size:"md"}},c={args:{rounded:!0,width:"100px",height:"100px"}},m={render:l=>({components:{StateBaseSkeleton:u},setup(){return{args:l}},template:`
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    `}),args:{size:"md"}},p={render:l=>({components:{StateBaseSkeleton:u},setup(){return{args:l}},template:`
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    `})};var g,S,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(h=(S=e.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,v,z;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var k,f,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var B,b,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'thumbnail',
    size: 'md'
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var _,L,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'ai-generation',
    size: 'md'
  }
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var A,D,G;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'shimmer',
    size: 'md'
  }
}`,...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,I,M;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    width: '300px',
    size: 'md'
  }
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var R,W,y;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    height: '100px',
    size: 'md'
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var E,O,j;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    width: '400px',
    height: '150px',
    size: 'md'
  }
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,F,J;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rounded: true,
    width: '100px',
    height: '100px'
  }
}`,...(J=(F=c.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,N,P;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StateBaseSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    \`
  }),
  args: {
    size: 'md'
  }
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var Q,U,V;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StateBaseSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    \`
  })
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ee=["Default","SmallSize","LargeSize","Thumbnail","AIGeneration","Shimmer","CustomWidth","CustomHeight","CustomSize","Rounded","MultipleSkeletons","CardSkeleton"];export{r as AIGeneration,p as CardSkeleton,i as CustomHeight,d as CustomSize,o as CustomWidth,e as Default,a as LargeSize,m as MultipleSkeletons,c as Rounded,n as Shimmer,t as SmallSize,s as Thumbnail,ee as __namedExportsOrder,$ as default};
