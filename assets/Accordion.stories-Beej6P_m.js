import{d as C,I as b,e as u,g as m,r as f,t as g,j as y,n as h,K as v,o as A,f as G}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const T=["id","name","open","aria-disabled"],x={class:"accordion-header"},S={class:"accordion-title"},I={class:"accordion-body"},w=["textContent"],o=C({__name:"Accordion",props:v({id:{default:null},name:{default:"accordion-item"},title:{default:""},text:{default:""},disabled:{type:Boolean,default:!1},customClass:{default:null}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(e){const t=b(e,"open");return(c,n)=>(A(),u("details",{id:e.id?`accordion-${e.id}`:void 0,name:e.name||void 0,class:h(["accordion",[e.customClass,{"is-disabled":e.disabled}]]),open:t.value||void 0,"aria-disabled":e.disabled||void 0,onToggle:n[0]||(n[0]=U=>t.value=U.target.open)},[m("summary",x,[f(c.$slots,"header",{},()=>[m("span",S,g(e.title),1)])]),m("div",I,[e.text?(A(),u("p",{key:0,textContent:g(e.text)},null,8,w)):y("",!0),f(c.$slots,"content")])],42,T))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"name",defaultValue:{func:!1,value:"'accordion-item'"}},{name:"title",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"header"},{name:"content"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/Accordion.vue"]});const a=C({__name:"AccordionGroup",props:{isTransparent:{type:Boolean,default:!1},customClass:{default:null}},setup(e){const t=e,c=G(()=>{const n=[];return t.isTransparent&&n.push("accordion-transparent"),t.customClass&&(Array.isArray(t.customClass)?n.push(...t.customClass):n.push(t.customClass)),n});return(n,U)=>(A(),u("div",{class:h(["accordion-group",c.value])},[f(n.$slots,"default")],2))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"AccordionGroup",description:"",tags:{},props:[{name:"isTransparent",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/AccordionGroup.vue"]});const _={title:"Components/Accordion",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},open:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{title:"Accordion Title",text:"This is the accordion content."}},s={args:{title:"Open Accordion",text:"This accordion is open by default.",open:!0}},i={args:{title:"Disabled Accordion",text:"This accordion is disabled.",disabled:!0}},l={render:e=>({components:{UiAccordion:o},setup(){return{args:e}},template:`
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
    `})},d={render:()=>({components:{UiAccordionGroup:a,UiAccordion:o},template:`
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
    `})},p={render:()=>({components:{UiAccordionGroup:a,UiAccordion:o},template:`
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
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const N=["Single","Open","Disabled","WithCustomContent","AccordionGroup","TransparentGroup"];export{d as AccordionGroup,i as Disabled,s as Open,r as Single,p as TransparentGroup,l as WithCustomContent,N as __namedExportsOrder,_ as default};
