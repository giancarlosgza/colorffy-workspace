import{v as U,m as T,x as d,G as l,B as i,F as V,A as c,E as w,D as z}from"./vue.esm-bundler-C74hS-cP.js";const A={class:"card-header"},S={key:0,class:"card-title"},q={class:"card-body"},P={class:"card-footer"},t=U({__name:"Card",props:{id:{default:null},title:{default:""},variant:{default:""},size:{default:void 0},customClass:{default:null},selectable:{type:Boolean,default:!1}},setup(e){const n=e,y=T(()=>{const a=[];return n.variant&&a.push(`card-${n.variant}`),n.size==="xs"?a.push("card-xs"):n.size==="sm"?a.push("card-sm"):n.size==="md"&&a.push("card-md"),n.selectable&&a.push("card-selectable"),n.customClass&&a.push(n.customClass),a});return(a,k)=>(c(),d("div",V({title:e.title||void 0,id:e.id?`card-${e.id}`:void 0},{class:["card",y.value]}),[l("div",A,[i(a.$slots,"header",{},()=>[e.title?(c(),d("p",S,z(e.title),1)):w("",!0)])]),l("div",q,[i(a.$slots,"body")]),l("div",P,[i(a.$slots,"footer")])],16))}});t.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"id",description:"Optional ID of the card. Can be a string or null.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"title",description:"Optional title of the card. Can be a string or null.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"variant",description:"Optional variant of the card. Can be 'outline', 'elevated', any other string, or undefined.",required:!1,type:{name:"union",elements:[{name:"CardVariant"},{name:"string"},{name:"undefined"}]},defaultValue:{func:!1,value:"''"}},{name:"size",description:"Scalable size of the card. Prefer 'sm' | 'md'.",required:!1,type:{name:"union",elements:[{name:"CardSize"},{name:"undefined"}]},defaultValue:{func:!1,value:"undefined"}},{name:"customClass",description:"Optional custom class for the card.",required:!1,type:{name:"union",elements:[{name:"CardClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"selectable",description:"When true, adds the `card-selectable` class to enable selectable styles.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]},defaultValue:{func:!1,value:"false"}}],slots:[{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/card/Card.vue"]};const D={title:"Components/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pane","elevated"]}}},s={render:e=>({components:{UiCard:t},setup(){return{args:e}},template:`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    `})},r={render:e=>({components:{UiCard:t},setup(){return{args:e}},template:`
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    `})},o={render:e=>({components:{UiCard:t},setup(){return{args:e}},template:`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card with Actions</h3>
          <p>This card has header and footer actions.</p>
        </template>
        <template #actions>
          <button class="btn btn-sm btn-primary">Action</button>
          <button class="btn btn-sm btn-outline">Cancel</button>
        </template>
      </UiCard>
    `})};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    \`
  })
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    \`
  })
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,v,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card with Actions</h3>
          <p>This card has header and footer actions.</p>
        </template>
        <template #actions>
          <button class="btn btn-sm btn-primary">Action</button>
          <button class="btn btn-sm btn-outline">Cancel</button>
        </template>
      </UiCard>
    \`
  })
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const N=["Default","Pane","WithActions"];export{s as Default,r as Pane,o as WithActions,N as __namedExportsOrder,D as default};
