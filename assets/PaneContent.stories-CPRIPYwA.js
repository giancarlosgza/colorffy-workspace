import{d as v,e as P,g as m,m as b,r as y,n as L,f as u,x,o as T}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"col-md-12"},a=v({__name:"PaneContent",props:{customClass:{default:null},containerClass:{default:null},isFullHeight:{type:Boolean,default:!1},ariaLabel:{default:void 0},ariaLabelledby:{default:void 0},ariaDescribedby:{default:void 0},id:{default:void 0}},setup(n,{expose:C}){const t=n,h=u(()=>{const e=[];return t.customClass&&e.push(t.customClass),t.isFullHeight&&e.push("pane-content-expanded"),e}),g=u(()=>{const e=[];return t.containerClass&&e.push(t.containerClass),e}),f=u(()=>{const e={};return t.ariaLabel&&(e["aria-label"]=t.ariaLabel),t.ariaLabelledby&&(e["aria-labelledby"]=t.ariaLabelledby),t.ariaDescribedby&&(e["aria-describedby"]=t.ariaDescribedby),t.id&&(e.id=t.id),e}),p=x(null);return C({paneContentRef:p}),(e,F)=>(T(),P("div",{class:L(["row",g.value])},[m("div",_,[m("section",b({ref_key:"paneContentRef",ref:p,class:["pane-content",h.value]},f.value),[y(e.$slots,"default")],16)])],2))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"PaneContent",description:"",tags:{},expose:[{name:"paneContentRef"}],props:[{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"containerClass",defaultValue:{func:!1,value:"null"}},{name:"isFullHeight",defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabelledby",defaultValue:{func:!1,value:"undefined"}},{name:"ariaDescribedby",defaultValue:{func:!1,value:"undefined"}},{name:"id",defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/PaneContent.vue"]});const A={title:"Layouts/PaneContent",component:a,tags:["autodocs"],argTypes:{customClass:{control:"text"},containerClass:{control:"text"},isFullHeight:{control:"boolean"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaDescribedby:{control:"text"},id:{control:"text"}}},s={args:{},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Default Pane Content</h3>
          <p>This is the content inside the pane. It uses a row and column layout structure.</p>
        </div>
      </PaneContent>
    `})},o={args:{isFullHeight:!0},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Full Height Pane</h3>
          <p>This pane expands to full height</p>
        </div>
      </PaneContent>
    `})},r={args:{customClass:"my-custom-pane"},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Custom Class Pane</h3>
          <p>This pane has custom classes applied</p>
        </div>
      </PaneContent>
    `})},i={args:{containerClass:"container-fluid"},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Container Class Pane</h3>
          <p>This pane has custom container classes</p>
        </div>
      </PaneContent>
    `})},l={args:{ariaLabel:"Main content section",id:"main-content"},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Accessible Pane</h3>
          <p>This pane includes ARIA labels for better accessibility</p>
        </div>
      </PaneContent>
    `})},c={args:{},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <div class="d-flex flex-column g-2">
        <PaneContent v-bind="args">
          <div>
            <h3>First Pane</h3>
            <p>Content in the first pane section</p>
          </div>
        </PaneContent>
        <PaneContent v-bind="args">
          <div>
            <h3>Second Pane</h3>
            <p>Content in the second pane section</p>
          </div>
        </PaneContent>
      </div>
    `})},d={args:{},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
      <PaneContent v-bind="args">
        <div>
          <h2>Rich Content Example</h2>
          <p>This pane contains various types of content:</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <strong>Note:</strong> This is a nested content section
          </div>
        </div>
      </PaneContent>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h3>Default Pane Content</h3>
          <p>This is the content inside the pane. It uses a row and column layout structure.</p>
        </div>
      </PaneContent>
    \`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isFullHeight: true
  },
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h3>Full Height Pane</h3>
          <p>This pane expands to full height</p>
        </div>
      </PaneContent>
    \`
  })
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    customClass: 'my-custom-pane'
  },
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h3>Custom Class Pane</h3>
          <p>This pane has custom classes applied</p>
        </div>
      </PaneContent>
    \`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    containerClass: 'container-fluid'
  },
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h3>Container Class Pane</h3>
          <p>This pane has custom container classes</p>
        </div>
      </PaneContent>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Main content section',
    id: 'main-content'
  },
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h3>Accessible Pane</h3>
          <p>This pane includes ARIA labels for better accessibility</p>
        </div>
      </PaneContent>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex flex-column g-2">
        <PaneContent v-bind="args">
          <div>
            <h3>First Pane</h3>
            <p>Content in the first pane section</p>
          </div>
        </PaneContent>
        <PaneContent v-bind="args">
          <div>
            <h3>Second Pane</h3>
            <p>Content in the second pane section</p>
          </div>
        </PaneContent>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      PaneContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PaneContent v-bind="args">
        <div>
          <h2>Rich Content Example</h2>
          <p>This pane contains various types of content:</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <strong>Note:</strong> This is a nested content section
          </div>
        </div>
      </PaneContent>
    \`
  })
}`,...d.parameters?.docs?.source}}};const D=["Default","FullHeight","WithCustomClass","WithContainerClass","WithAriaLabel","MultipleContent","WithRichContent"];export{s as Default,o as FullHeight,c as MultipleContent,l as WithAriaLabel,i as WithContainerClass,r as WithCustomClass,d as WithRichContent,D as __namedExportsOrder,A as default};
