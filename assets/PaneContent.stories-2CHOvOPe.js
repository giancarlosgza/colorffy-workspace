import{d as E,c as u,h as M,a as q,b as m,m as z,r as O,n as $,o as j}from"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";const G={class:"col-md-12"},a=E({__name:"PaneContent",props:{customClass:{default:null},containerClass:{default:null},isFullHeight:{type:Boolean,default:!1},ariaLabel:{default:void 0},ariaLabelledby:{default:void 0},ariaDescribedby:{default:void 0},id:{default:void 0}},setup(n,{expose:k}){const t=n,I=u(()=>{const e=[];return t.customClass&&e.push(t.customClass),t.isFullHeight&&e.push("pane-content-expanded"),e}),N=u(()=>{const e=[];return t.containerClass&&e.push(t.containerClass),e}),B=u(()=>{const e={};return t.ariaLabel&&(e["aria-label"]=t.ariaLabel),t.ariaLabelledby&&(e["aria-labelledby"]=t.ariaLabelledby),t.ariaDescribedby&&(e["aria-describedby"]=t.ariaDescribedby),t.id&&(e.id=t.id),e}),p=M(null);return k({paneContentRef:p}),(e,J)=>(j(),q("div",{class:$(["row",N.value])},[m("div",G,[m("section",z({ref_key:"paneContentRef",ref:p,class:["pane-content",I.value]},B.value),[O(e.$slots,"default")],16)])],2))}});a.__docgenInfo={exportName:"default",displayName:"PaneContent",description:"",tags:{},expose:[{name:"paneContentRef"}],props:[{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"containerClass",defaultValue:{func:!1,value:"null"}},{name:"isFullHeight",defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabelledby",defaultValue:{func:!1,value:"undefined"}},{name:"ariaDescribedby",defaultValue:{func:!1,value:"undefined"}},{name:"id",defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/PaneContent.vue"]};const U={title:"Layouts/PaneContent",component:a,tags:["autodocs"],argTypes:{customClass:{control:"text"},containerClass:{control:"text"},isFullHeight:{control:"boolean"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaDescribedby:{control:"text"},id:{control:"text"}}},s={args:{},render:n=>({components:{PaneContent:a},setup(){return{args:n}},template:`
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
    `})};var C,h,g;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,v,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var b,y,L;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(L=(y=r.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var x,T,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var S,_,H;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(_=l.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var A,D,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,W,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const X=["Default","FullHeight","WithCustomClass","WithContainerClass","WithAriaLabel","MultipleContent","WithRichContent"];export{s as Default,o as FullHeight,c as MultipleContent,l as WithAriaLabel,i as WithContainerClass,r as WithCustomClass,d as WithRichContent,X as __namedExportsOrder,U as default};
