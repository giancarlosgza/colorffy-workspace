import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,S as i,a,dt as o,g as s,h as c,m as l,mt as u,v as d,y as f,z as p}from"./iframe-Cd0jc4kn.js";import{n as m,t as h}from"./Material-OytZncgB.js";import{n as g,t as _}from"./Badge-BaLuInpi.js";var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),m(),v=[`src`,`alt`],y={key:1,class:`list-item-icon-wrapper`},b={key:2,class:`timeline-item-dot`},x={class:`timeline-item-content`},S=[`textContent`],C=[`textContent`],w=[`textContent`],T=t({__name:`Timeline`,props:{items:{default:()=>[]},align:{default:`start`},size:{default:void 0},customClass:{default:null}},setup(e){let t=e,a=c(()=>{let e=[];return t.align===`alternate`&&e.push(`timeline-alternate`),t.size===`sm`&&e.push(`timeline-sm`),t.size===`lg`&&e.push(`timeline-lg`),t.customClass&&e.push(t.customClass),e});function m(e){return e.variant?`timeline-item-${e.variant}`:void 0}return(t,c)=>(n(),f(`ol`,{class:o([`timeline`,a.value]),role:`list`},[(n(!0),f(l,null,r(e.items,e=>(n(),f(`li`,{key:e.id,class:`timeline-item`,role:`listitem`},[s(`div`,{class:o([`timeline-item-marker`,m(e)])},[e.imageUrl?(n(),f(`img`,{key:0,class:`timeline-item-image`,src:e.imageUrl,alt:e.imageAlt??``},null,8,v)):e.icon?(n(),f(`div`,y,[i(h,{"icon-code":e.icon},null,8,[`icon-code`])])):(n(),f(`span`,b)),c[0]||=s(`span`,{class:`timeline-item-line`},null,-1)],2),s(`div`,x,[p(t.$slots,`item-${e.id}`,{item:e},()=>[p(t.$slots,`item`,{item:e},()=>[e.time?(n(),f(`p`,{key:0,class:`caption text-muted mb-1`,textContent:u(e.time)},null,8,S)):d(``,!0),e.title?(n(),f(`p`,{key:1,class:`timeline-title`,textContent:u(e.title)},null,8,C)):d(``,!0),e.text?(n(),f(`p`,{key:2,class:`timeline-text`,textContent:u(e.text)},null,8,w)):d(``,!0)])])])]))),128))],2))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Timeline`,description:``,tags:{},props:[{name:`items`,defaultValue:{func:!1,value:`() => []`}},{name:`align`,defaultValue:{func:!1,value:`'start'`}},{name:`size`,defaultValue:{func:!1,value:`undefined`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:"`item-${item.id}`",scoped:!0,bindings:[{name:`name`,title:`binding`},{name:`item`,title:`binding`}]},{name:`item`,scoped:!0,bindings:[{name:`item`,title:`binding`}]}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/timeline/Timeline.vue`]})})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{g(),O(),k={title:`Components/Timeline`,component:D,tags:[`autodocs`],argTypes:{align:{control:`radio`,options:[`start`,`alternate`]}}},A=[{id:`1`,title:`Account created`,text:`Welcome to the platform`,time:`3 days ago`},{id:`2`,title:`Profile verified`,text:`Documents approved`,time:`2 days ago`},{id:`3`,title:`First project`,text:`Project Atlas started`,time:`1 day ago`},{id:`4`,title:`Subscription activated`,text:`Enterprise plan enabled`,time:`2 hours ago`}],j={args:{items:A}},M={args:{items:[{id:`1`,title:`New deployment`,text:`Project Atlas v2.4.0 released`,time:`3 days ago`,icon:`&#xe1b6;`,variant:`success`},{id:`2`,title:`Comment`,text:`Ana replied in Project Nebula`,time:`2 days ago`,icon:`&#xe0b9;`,variant:`primary`},{id:`3`,title:`Usage alert`,text:`API reached 80% of its limit`,time:`1 day ago`,icon:`&#xe002;`,variant:`warning`},{id:`4`,title:`Payment received`,text:`Enterprise subscription renewed`,time:`2 hours ago`,icon:`&#xe227;`,variant:`accent`}]}},N={args:{items:[{id:`1`,title:`Ana Morales`,text:`Approved the design proposal`,time:`4 hours ago`,imageUrl:`https://i.pravatar.cc/88?img=5`,imageAlt:`Photo of Ana Morales`},{id:`2`,title:`Luis Herrera`,text:`Uploaded the latest build`,time:`2 hours ago`,imageUrl:`https://i.pravatar.cc/88?img=13`,imageAlt:`Photo of Luis Herrera`},{id:`3`,title:`María Fuentes`,text:`Closed 3 QA tickets`,time:`30 minutes ago`,imageUrl:`https://i.pravatar.cc/88?img=9`,imageAlt:`Photo of María Fuentes`}]}},P={args:{align:`alternate`,items:[{id:`1`,title:`Launch`,text:`v1.0.0 released`,time:`Jan 2025`,icon:`&#xe1b6;`,variant:`primary`},{id:`2`,title:`Crecimiento`,text:`10,000 usuarios activos`,time:`Mar 2025`,icon:`&#xe7fb;`,variant:`success`},{id:`3`,title:`Funding round`,text:`Series A closed`,time:`Jun 2025`,icon:`&#xe227;`,variant:`accent`},{id:`4`,title:`Expansion`,text:`Launched in 3 new markets`,time:`Sep 2025`,icon:`&#xe0b7;`,variant:`warning`}]}},F={render:()=>({components:{UiTimeline:D,UiBadge:_},setup(){return{items:[{id:`release`,title:`Release v2.4.0`,time:`3 days ago`,icon:`&#xe1b6;`,variant:`success`},{id:`incident`,title:`Incident resolved`,time:`1 day ago`,icon:`&#xe002;`,variant:`danger`}]}},template:`
      <UiTimeline :items="items">
        <template #item-release="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <UiBadge text="Production" variant="tonal tonal-success" size="sm" />
        </template>
        <template #item-incident="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <p class="subtitle-2 mb-0">Time to resolve: 42 min</p>
        </template>
      </UiTimeline>
    `})},I=[`Default`,`WithIcons`,`WithImages`,`AlternateAlign`,`CustomItemSlot`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'New deployment',
      text: 'Project Atlas v2.4.0 released',
      time: '3 days ago',
      icon: '&#xe1b6;',
      variant: 'success'
    }, {
      id: '2',
      title: 'Comment',
      text: 'Ana replied in Project Nebula',
      time: '2 days ago',
      icon: '&#xe0b9;',
      variant: 'primary'
    }, {
      id: '3',
      title: 'Usage alert',
      text: 'API reached 80% of its limit',
      time: '1 day ago',
      icon: '&#xe002;',
      variant: 'warning'
    }, {
      id: '4',
      title: 'Payment received',
      text: 'Enterprise subscription renewed',
      time: '2 hours ago',
      icon: '&#xe227;',
      variant: 'accent'
    }]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Ana Morales',
      text: 'Approved the design proposal',
      time: '4 hours ago',
      imageUrl: 'https://i.pravatar.cc/88?img=5',
      imageAlt: 'Photo of Ana Morales'
    }, {
      id: '2',
      title: 'Luis Herrera',
      text: 'Uploaded the latest build',
      time: '2 hours ago',
      imageUrl: 'https://i.pravatar.cc/88?img=13',
      imageAlt: 'Photo of Luis Herrera'
    }, {
      id: '3',
      title: 'María Fuentes',
      text: 'Closed 3 QA tickets',
      time: '30 minutes ago',
      imageUrl: 'https://i.pravatar.cc/88?img=9',
      imageAlt: 'Photo of María Fuentes'
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'alternate',
    items: [{
      id: '1',
      title: 'Launch',
      text: 'v1.0.0 released',
      time: 'Jan 2025',
      icon: '&#xe1b6;',
      variant: 'primary'
    }, {
      id: '2',
      title: 'Crecimiento',
      text: '10,000 usuarios activos',
      time: 'Mar 2025',
      icon: '&#xe7fb;',
      variant: 'success'
    }, {
      id: '3',
      title: 'Funding round',
      text: 'Series A closed',
      time: 'Jun 2025',
      icon: '&#xe227;',
      variant: 'accent'
    }, {
      id: '4',
      title: 'Expansion',
      text: 'Launched in 3 new markets',
      time: 'Sep 2025',
      icon: '&#xe0b7;',
      variant: 'warning'
    }]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiTimeline,
      UiBadge
    },
    setup() {
      const items: ITimelineItem[] = [{
        id: 'release',
        title: 'Release v2.4.0',
        time: '3 days ago',
        icon: '&#xe1b6;',
        variant: 'success'
      }, {
        id: 'incident',
        title: 'Incident resolved',
        time: '1 day ago',
        icon: '&#xe002;',
        variant: 'danger'
      }];
      return {
        items
      };
    },
    template: \`
      <UiTimeline :items="items">
        <template #item-release="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <UiBadge text="Production" variant="tonal tonal-success" size="sm" />
        </template>
        <template #item-incident="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <p class="subtitle-2 mb-0">Time to resolve: 42 min</p>
        </template>
      </UiTimeline>
    \`
  })
}`,...F.parameters?.docs?.source}}}})))()}L();export{P as AlternateAlign,F as CustomItemSlot,j as Default,M as WithIcons,N as WithImages,I as __namedExportsOrder,k as default};