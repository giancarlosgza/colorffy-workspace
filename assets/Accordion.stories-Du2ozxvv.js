import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,_ as a,a as o,dt as s,g as c,h as l,mt as u,v as d,y as f,z as p}from"./iframe-Cd0jc4kn.js";import{n as m,t as h}from"./Material-OytZncgB.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{o(),m(),g=[`id`,`name`,`open`],_=[`aria-disabled`,`tabindex`],v={class:`accordion-title`},y={class:`accordion-body`},b=[`textContent`],x=n({__name:`Accordion`,props:t({id:{default:null},name:{default:`accordion-item`},title:{default:``},icon:{default:null},iconClass:{default:null},text:{default:``},disabled:{type:Boolean,default:!1},size:{default:null},customClass:{default:null}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:[`update:open`],setup(e){let t=r(e,`open`);return(n,r)=>(i(),f(`details`,{id:e.id||void 0,name:e.name||void 0,class:s([`accordion`,[e.customClass,e.size&&e.size!==`md`?`accordion-${e.size}`:null,{"is-disabled":e.disabled}]]),open:t.value||void 0,onToggle:r[1]||=e=>t.value=e.target.open},[c(`summary`,{class:`accordion-header`,"aria-disabled":e.disabled||void 0,tabindex:e.disabled?-1:void 0,onClick:r[0]||=t=>e.disabled&&t.preventDefault()},[p(n.$slots,`header`,{},()=>[e.icon?(i(),a(h,{key:0,class:s([`accordion-icon`,[e.iconClass]]),"icon-code":e.icon},null,8,[`class`,`icon-code`])):d(``,!0),c(`span`,v,u(e.title),1)])],8,_),c(`div`,y,[e.text?(i(),f(`p`,{key:0,textContent:u(e.text)},null,8,b)):d(``,!0),p(n.$slots,`content`)])],42,g))}})})))()}var C;function w(){return(w=e((()=>{S(),C=x,x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`Accordion`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`name`,defaultValue:{func:!1,value:`'accordion-item'`}},{name:`title`,defaultValue:{func:!1,value:`''`}},{name:`icon`,defaultValue:{func:!1,value:`null`}},{name:`iconClass`,defaultValue:{func:!1,value:`null`}},{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`header`},{name:`content`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/Accordion.vue`]})})))()}var T;function E(){return(E=e((()=>{o(),T=n({__name:`AccordionGroup`,props:{isTransparent:{type:Boolean,default:!1},variant:{default:null},size:{default:null},shape:{default:`rounded`},customClass:{default:null}},setup(e){let t=e,n=l(()=>{let e=[];return t.isTransparent&&e.push(`accordion-transparent`),t.variant&&e.push(`accordion-${t.variant}`),t.size&&t.size!==`md`&&e.push(`accordion-${t.size}`),t.shape===`square`&&e.push(`accordion-square`),t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),e});return(e,t)=>(i(),f(`div`,{class:s([`accordion-group`,n.value])},[p(e.$slots,`default`)],2))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`AccordionGroup`,description:``,tags:{},props:[{name:`isTransparent`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`shape`,defaultValue:{func:!1,value:`'rounded'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/accordion/AccordionGroup.vue`]})})))()}var k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{w(),O(),k={title:`Components/Accordion`,component:C,tags:[`autodocs`],argTypes:{title:{control:`text`},icon:{control:`text`},iconClass:{control:`text`},text:{control:`text`},open:{control:`boolean`},disabled:{control:`boolean`},size:{control:`select`,options:[`md`,`sm`]}}},A={args:{title:`Accordion Title`,text:`This is the accordion content.`}},j={args:{title:`Open Accordion`,text:`This accordion is open by default.`,open:!0}},M={args:{title:`Shipping & Returns`,icon:`&#xe88a;`,text:`Free shipping on all orders. Returns accepted within 30 days.`}},N={args:{title:`Disabled Accordion`,text:`This accordion is disabled.`,disabled:!0}},P={render:e=>({components:{UiAccordion:C},setup(){return{args:e}},template:`
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
    `})},F={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
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
    `})},I={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
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
    `})},L={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
      <UiAccordionGroup size="sm">
        <UiAccordion title="Small Item 1" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Small Item 2" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})},R={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
      <UiAccordionGroup variant="borderless">
        <UiAccordion title="Borderless Item 1" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Borderless Item 2" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})},z={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
      <UiAccordionGroup variant="border-block" shape="square" size="sm">
        <UiAccordion title="What is Colorffy?" name="faq-flush">
          <template #content>
            <p>A Vue 3 component library and SCSS framework.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Is it free?" name="faq-flush">
          <template #content>
            <p>Yes, MIT licensed.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Does it support dark mode?" name="faq-flush">
          <template #content>
            <p>Yes, through the tonal theme tokens.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})},B={render:()=>({components:{UiAccordionGroup:D,UiAccordion:C},template:`
      <UiAccordionGroup shape="square">
        <UiAccordion title="Square Item 1" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Square Item 2" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `})},V=[`Single`,`Open`,`WithIcon`,`Disabled`,`WithCustomContent`,`AccordionGroup`,`TransparentGroup`,`SmallSize`,`BorderlessGroup`,`BorderBlockGroup`,`SquareGroup`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Shipping & Returns',
    icon: '&#xe88a;',
    text: 'Free shipping on all orders. Returns accepted within 30 days.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup size="sm">
        <UiAccordion title="Small Item 1" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Small Item 2" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup variant="borderless">
        <UiAccordion title="Borderless Item 1" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Borderless Item 2" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup variant="border-block" shape="square" size="sm">
        <UiAccordion title="What is Colorffy?" name="faq-flush">
          <template #content>
            <p>A Vue 3 component library and SCSS framework.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Is it free?" name="faq-flush">
          <template #content>
            <p>Yes, MIT licensed.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Does it support dark mode?" name="faq-flush">
          <template #content>
            <p>Yes, through the tonal theme tokens.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiAccordionGroup,
      UiAccordion
    },
    template: \`
      <UiAccordionGroup shape="square">
        <UiAccordion title="Square Item 1" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Square Item 2" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    \`
  })
}`,...B.parameters?.docs?.source}}}})))()}H();export{F as AccordionGroup,z as BorderBlockGroup,R as BorderlessGroup,N as Disabled,j as Open,A as Single,L as SmallSize,B as SquareGroup,I as TransparentGroup,P as WithCustomContent,M as WithIcon,V as __namedExportsOrder,k as default};