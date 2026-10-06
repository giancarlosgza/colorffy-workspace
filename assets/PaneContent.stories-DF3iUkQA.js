import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,a as r,dt as i,g as a,h as o,j as s,nt as c,y as l,z as u}from"./iframe-Cd0jc4kn.js";var d,f;function p(){return(p=e((()=>{r(),d={class:`col-md-12`},f=t({__name:`PaneContent`,props:{customClass:{default:null},containerClass:{default:null},isFullHeight:{type:Boolean,default:!1},ariaLabel:{default:void 0},ariaLabelledby:{default:void 0},ariaDescribedby:{default:void 0},id:{default:void 0}},setup(e,{expose:t}){let r=e,f=c(null),p=o(()=>[r.customClass,{"pane-content-expanded":r.isFullHeight}]),m=o(()=>{let e={};return r.ariaLabel&&(e[`aria-label`]=r.ariaLabel),r.ariaLabelledby&&(e[`aria-labelledby`]=r.ariaLabelledby),r.ariaDescribedby&&(e[`aria-describedby`]=r.ariaDescribedby),r.id&&(e.id=r.id),e});return t({paneContentRef:f}),(t,r)=>(n(),l(`div`,{class:i([`row`,e.containerClass])},[a(`div`,d,[a(`section`,s({ref_key:`paneContentRef`,ref:f,class:[`pane-content`,p.value]},m.value),[u(t.$slots,`default`)],16)])],2))}})})))()}var m;function h(){return(h=e((()=>{p(),m=f,f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:`default`,displayName:`PaneContent`,description:``,tags:{},expose:[{name:`paneContentRef`}],props:[{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`containerClass`,defaultValue:{func:!1,value:`null`}},{name:`isFullHeight`,defaultValue:{func:!1,value:`false`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`undefined`}},{name:`ariaLabelledby`,defaultValue:{func:!1,value:`undefined`}},{name:`ariaDescribedby`,defaultValue:{func:!1,value:`undefined`}},{name:`id`,defaultValue:{func:!1,value:`undefined`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/PaneContent.vue`]})})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{h(),g={title:`Layouts/PaneContent`,component:m,tags:[`autodocs`],argTypes:{customClass:{control:`text`},containerClass:{control:`text`},isFullHeight:{control:`boolean`},ariaLabel:{control:`text`},ariaLabelledby:{control:`text`},ariaDescribedby:{control:`text`},id:{control:`text`}}},_={args:{},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Default Pane Content</h3>
          <p>This is the content inside the pane. It uses a row and column layout structure.</p>
        </div>
      </PaneContent>
    `})},v={args:{isFullHeight:!0},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Full Height Pane</h3>
          <p>This pane expands to full height</p>
        </div>
      </PaneContent>
    `})},y={args:{customClass:`my-custom-pane`},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Custom Class Pane</h3>
          <p>This pane has custom classes applied</p>
        </div>
      </PaneContent>
    `})},b={args:{containerClass:`container-fluid`},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Container Class Pane</h3>
          <p>This pane has custom container classes</p>
        </div>
      </PaneContent>
    `})},x={args:{ariaLabel:`Main content section`,id:`main-content`},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
      <PaneContent v-bind="args">
        <div>
          <h3>Accessible Pane</h3>
          <p>This pane includes ARIA labels for better accessibility</p>
        </div>
      </PaneContent>
    `})},S={args:{},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
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
    `})},C={args:{},render:e=>({components:{PaneContent:m},setup(){return{args:e}},template:`
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
    `})},w=[`Default`,`FullHeight`,`WithCustomClass`,`WithContainerClass`,`WithAriaLabel`,`MultipleContent`,`WithRichContent`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}T();export{_ as Default,v as FullHeight,S as MultipleContent,x as WithAriaLabel,b as WithContainerClass,y as WithCustomClass,C as WithRichContent,w as __namedExportsOrder,g as default};