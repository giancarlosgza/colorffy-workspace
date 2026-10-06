import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,V as r,a as i,ft as a,h as o,j as s,y as c,z as l}from"./iframe-Cd0jc4kn.js";var u,d;function f(){return(f=e((()=>{i(),u=[`innerHTML`],d=t({__name:`Svg`,props:{uid:{default:null},content:{default:null},size:{default:`md`},color:{default:null},decorative:{type:Boolean,default:!0},ariaLabel:{default:null}},setup(e){let t=e,i={xs:20,sm:24,md:32,lg:40,xl:48},d=r(),f=o(()=>t.uid??d),p=o(()=>typeof t.size==`number`?t.size:t.size?i[t.size]??i.md:i.md),m=o(()=>t.decorative?!0:void 0),h=o(()=>t.decorative?void 0:`img`),g=o(()=>t.decorative?void 0:t.ariaLabel??void 0),_=o(()=>({class:[`icon-svg`,{"icon-svg-current":!!t.color}],style:{"--_icon-svg-size":`${p.value}px`,color:t.color??void 0},"aria-hidden":m.value,role:h.value,"aria-label":g.value})),v=o(()=>y(t.content??``,f.value));function y(e,t){if(!e||!t)return e;let n=new Set,r=/\bid="([^"]+)"/g,i=r.exec(e);for(;i!==null;)n.add(i[1]),i=r.exec(e);if(!n.size)return e;let a=`icon-${t.replace(/[^\w-]/g,``)}`,o=e;for(let e of n){let t=e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),n=`${a}-${e}`;o=o.replace(RegExp(`\\bid="${t}"`,`g`),`id="${n}"`).replace(RegExp(`url\\(#${t}\\)`,`g`),`url(#${n})`).replace(RegExp(`((?:xlink:)?href)="#${t}"`,`g`),`$1="#${n}"`)}return o}return(t,r)=>e.content?(n(),c(`span`,s({key:0},_.value,{innerHTML:v.value}),null,16,u)):(n(),c(`span`,a(s({key:1},_.value)),[l(t.$slots,`default`)],16))}})})))()}var p;function m(){return(m=e((()=>{f(),p=d,d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:`default`,displayName:`Svg`,description:``,tags:{},props:[{name:`content`,defaultValue:{func:!1,value:`null`}},{name:`uid`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`'md'`}},{name:`color`,defaultValue:{func:!1,value:`null`}},{name:`decorative`,defaultValue:{func:!1,value:`true`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/icon/Svg.vue`]})})))()}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m(),h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>`,g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="8" cy="12" r="6" fill="#4285F4" /><circle cx="16" cy="12" r="6" fill="#EA4335" fill-opacity="0.85" /></svg>`,_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="gradient"><stop offset="0%" /><stop offset="100%" /></linearGradient></defs><path fill="url(#gradient)" d="M0 0h24v24H0z" /></svg>`,v={title:`Components/Icon/Svg`,component:p,tags:[`autodocs`],argTypes:{content:{control:`text`},uid:{control:`text`},size:{control:`text`},color:{control:`text`},decorative:{control:`boolean`},ariaLabel:{control:`text`}}},y={args:{size:`md`},render:e=>({components:{UiIconSvg:p},setup(){return{args:e}},template:`<UiIconSvg v-bind="args">${h}</UiIconSvg>`})},b={render:()=>({components:{UiIconSvg:p},setup(){return{sizes:[`xs`,`sm`,`md`,`lg`,`xl`]}},template:`
      <div style="display: flex; align-items: center; gap: 1.5rem;">
        <div v-for="size in sizes" :key="size" style="text-align: center;">
          <UiIconSvg :size="size">${h}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">{{ size }}</p>
        </div>
      </div>
    `})},x={render:()=>({components:{UiIconSvg:p},template:`
      <div style="display: flex; align-items: center; gap: 2rem;">
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">${h}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Monochrome + color</p>
        </div>
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">${g}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Multi-color (color ignored)</p>
        </div>
      </div>
    `})},S={args:{size:`lg`,content:h}},C={args:{size:`lg`,content:_,uid:`brand-mark`},play:async({canvasElement:e})=>{if(!e.querySelector(`#icon-brand-mark-gradient`))throw Error(`Expected the explicit uid to namespace the SVG gradient ID`);if(!e.querySelector(`[fill="url(#icon-brand-mark-gradient)"]`))throw Error(`Expected the explicit uid to rewrite the SVG gradient reference`)}},w={args:{size:`lg`,decorative:!1,ariaLabel:`Favorite`},render:()=>({components:{UiIconSvg:p},template:`
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative (hidden from screen readers)</h4>
          <UiIconSvg size="lg" :decorative="true">${h}</UiIconSvg>
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible (role=img + aria-label)</h4>
          <UiIconSvg size="lg" :decorative="false" aria-label="Favorite">${h}</UiIconSvg>
        </div>
      </div>
    `})},T=[`Default`,`Sizes`,`Colored`,`FromContentProp`,`WithExplicitUid`,`WithAccessibility`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => ({
    components: {
      UiIconSvg
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UiIconSvg v-bind="args">\${HEART}</UiIconSvg>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiIconSvg
    },
    setup() {
      return {
        sizes: ['xs', 'sm', 'md', 'lg', 'xl']
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 1.5rem;">
        <div v-for="size in sizes" :key="size" style="text-align: center;">
          <UiIconSvg :size="size">\${HEART}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">{{ size }}</p>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiIconSvg
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 2rem;">
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">\${HEART}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Monochrome + color</p>
        </div>
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">\${DUO}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Multi-color (color ignored)</p>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: HEART
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: GRADIENT,
    uid: 'brand-mark'
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('#icon-brand-mark-gradient')) throw new Error('Expected the explicit uid to namespace the SVG gradient ID');
    if (!canvasElement.querySelector('[fill="url(#icon-brand-mark-gradient)"]')) throw new Error('Expected the explicit uid to rewrite the SVG gradient reference');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    decorative: false,
    ariaLabel: 'Favorite'
  },
  render: () => ({
    components: {
      UiIconSvg
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative (hidden from screen readers)</h4>
          <UiIconSvg size="lg" :decorative="true">\${HEART}</UiIconSvg>
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible (role=img + aria-label)</h4>
          <UiIconSvg size="lg" :decorative="false" aria-label="Favorite">\${HEART}</UiIconSvg>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{x as Colored,y as Default,S as FromContentProp,b as Sizes,w as WithAccessibility,C as WithExplicitUid,T as __namedExportsOrder,v as default};