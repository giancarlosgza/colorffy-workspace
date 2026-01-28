import{v as N,K as $,L as M,x as m,G as p,B as u,E,D as h,J as _,A as f,m as H}from"./vue.esm-bundler-C74hS-cP.js";const F=["id","name","open","aria-disabled"],P={class:"accordion-header"},W={class:"accordion-title"},Y={class:"accordion-body"},z=["textContent"],o=N({__name:"Accordion",props:$({id:{default:null},name:{default:"accordion-item"},title:{default:""},text:{default:""},open:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(e){const n=M(e,"open");return(a,t)=>(f(),m("details",{id:e.id?`accordion-${e.id}`:void 0,name:e.name||void 0,class:_(["accordion",[e.customClass,{"is-disabled":e.disabled}]]),open:n.value||void 0,"aria-disabled":e.disabled||void 0},[p("summary",P,[u(a.$slots,"header",{},()=>[p("span",W,h(e.title),1)])]),p("div",Y,[e.text?(f(),m("p",{key:0,textContent:h(e.text)},null,8,z)):E("",!0),u(a.$slots,"content")])],10,F))}});o.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"id",description:"Optional DOM id of the accordion item. Used to link header/body for accessibility.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"name",description:"Optional group name for the native <details> behavior.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"'accordion-item'"}},{name:"title",description:"Header text displayed in the summary. Prefer using the `header` slot for custom content.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Body text displayed inside the accordion panel. Prefer using the default slot.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"open",description:"Controlled open state of the accordion (v-model:open).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disables user interaction when true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom classes for the root element.",required:!1,type:{name:"union",elements:[{name:"AccordionClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header"},{name:"content"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/Accordion.vue"]};const A=N({__name:"AccordionGroup",props:{isTransparent:{type:Boolean,default:!1},customClass:{default:null}},setup(e){const n=e,a=H(()=>{const t=[];return n.isTransparent&&t.push("accordion-transparent"),n.customClass&&(Array.isArray(n.customClass)?t.push(...n.customClass):t.push(n.customClass)),t});return(t,J)=>(f(),m("div",{class:_(["accordion-group",a.value])},[u(t.$slots,"default")],2))}});A.__docgenInfo={exportName:"default",displayName:"AccordionGroup",description:"",tags:{},props:[{name:"isTransparent",description:"Renders the group with a transparent background.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom classes for the wrapper element.",required:!1,type:{name:"union",elements:[{name:"AccordionClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/AccordionGroup.vue"]};const L={title:"Components/Accordion",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},open:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{title:"Accordion Title",text:"This is the accordion content."}},s={args:{title:"Open Accordion",text:"This accordion is open by default.",open:!0}},i={args:{title:"Disabled Accordion",text:"This accordion is disabled.",disabled:!0}},c={render:e=>({components:{UiAccordion:o},setup(){return{args:e}},template:`
      <UiAccordion title="Custom Content" name="custom">
        <template #content>
          <div style="padding: 1rem;">
            <h4>Custom Header Content</h4>
            <p>You can add any custom content here.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </template>
      </UiAccordion>
    `})},l={render:()=>({components:{UiAccordionGroup:A,UiAccordion:o},template:`
      <UiAccordionGroup>
        <UiAccordion title="Section 1" name="demo">
          <template #content>
            <p>Content for section 1</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 2" name="demo">
          <template #content>
            <p>Content for section 2</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 3" name="demo">
          <template #content>
            <p>Content for section 3</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})},d={render:()=>({components:{UiAccordionGroup:A,UiAccordion:o},template:`
      <UiAccordionGroup is-transparent>
        <UiAccordion title="Transparent Item 1" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Transparent Item 2" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})};var g,C,U;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.'
  }
}`,...(U=(C=r.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,G,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true
  }
}`,...(T=(G=i.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var S,w,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiAccordion title="Custom Content" name="custom">
        <template #content>
          <div style="padding: 1rem;">
            <h4>Custom Header Content</h4>
            <p>You can add any custom content here.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </template>
      </UiAccordion>
    \`
  })
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var I,O,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup>
        <UiAccordion title="Section 1" name="demo">
          <template #content>
            <p>Content for section 1</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 2" name="demo">
          <template #content>
            <p>Content for section 2</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 3" name="demo">
          <template #content>
            <p>Content for section 3</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var q,B,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup is-transparent>
        <UiAccordion title="Transparent Item 1" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Transparent Item 2" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const R=["Single","Open","Disabled","WithCustomContent","AccordionGroup","TransparentGroup"];export{l as AccordionGroup,i as Disabled,s as Open,r as Single,d as TransparentGroup,c as WithCustomContent,R as __namedExportsOrder,L as default};
