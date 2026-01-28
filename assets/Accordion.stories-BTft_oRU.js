import{d as D,i as M,u as E,a as u,b as p,r as m,e as F,t as U,n as $,o as f,c as H}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const W=["id","name","open","aria-disabled"],Y={class:"accordion-header"},z={class:"accordion-title"},j={class:"accordion-body"},q=["textContent"],o=D({__name:"Accordion",props:M({id:{default:null},name:{default:"accordion-item"},title:{default:""},text:{default:""},open:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(e){const n=E(e,"open");return(a,t)=>(f(),u("details",{id:e.id?`accordion-${e.id}`:void 0,name:e.name||void 0,class:$(["accordion",[e.customClass,{"is-disabled":e.disabled}]]),open:n.value||void 0,"aria-disabled":e.disabled||void 0},[p("summary",Y,[m(a.$slots,"header",{},()=>[p("span",z,U(e.title),1)])]),p("div",j,[e.text?(f(),u("p",{key:0,textContent:U(e.text)},null,8,q)):F("",!0),m(a.$slots,"content")])],10,W))}});o.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"name",defaultValue:{func:!1,value:"'accordion-item'"}},{name:"title",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"open",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"header"},{name:"content"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/Accordion.vue"]};const A=D({__name:"AccordionGroup",props:{isTransparent:{type:Boolean,default:!1},customClass:{default:null}},setup(e){const n=e,a=H(()=>{const t=[];return n.isTransparent&&t.push("accordion-transparent"),n.customClass&&(Array.isArray(n.customClass)?t.push(...n.customClass):t.push(n.customClass)),t});return(t,J)=>(f(),u("div",{class:$(["accordion-group",a.value])},[m(t.$slots,"default")],2))}});A.__docgenInfo={exportName:"default",displayName:"AccordionGroup",description:"",tags:{},props:[{name:"isTransparent",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/AccordionGroup.vue"]};const P={title:"Components/Accordion",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},open:{control:"boolean"},disabled:{control:"boolean"}}},c={args:{title:"Accordion Title",text:"This is the accordion content."}},r={args:{title:"Open Accordion",text:"This accordion is open by default.",open:!0}},s={args:{title:"Disabled Accordion",text:"This accordion is disabled.",disabled:!0}},i={render:e=>({components:{UiAccordion:o},setup(){return{args:e}},template:`
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
    `})};var C,g,h;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.'
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,v,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var G,x,T;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,w,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,V,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,N,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const Q=["Single","Open","Disabled","WithCustomContent","AccordionGroup","TransparentGroup"];export{l as AccordionGroup,s as Disabled,r as Open,c as Single,d as TransparentGroup,i as WithCustomContent,Q as __namedExportsOrder,P as default};
