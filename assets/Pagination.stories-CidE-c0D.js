import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,nt as r}from"./iframe-Cd0jc4kn.js";import{n as i,t as a}from"./Pagination-CFE1fAhE.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),i(),o={title:`Components/Pagination`,component:a,tags:[`autodocs`],argTypes:{page:{control:`number`},total:{control:`number`},pageSize:{control:`number`},totalPages:{control:`number`},siblingCount:{control:`number`},showEdges:{control:`boolean`},compact:{control:`boolean`},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`}}},s={args:{total:120,pageSize:10}},c={render:()=>({components:{UiPagination:a},setup(){return{page:r(6)}},template:`
      <div>
        <UiPagination v-model:page="page" :total-pages="12" />
        <p class="caption text-muted mt-2">v-model:page: {{ page }}</p>
      </div>
    `})},l={render:()=>({components:{UiPagination:a},setup(){return{start:r(2),middle:r(10),end:r(19),wide:r(10)}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="start" :total-pages="20" aria-label="Near the start" />
        <UiPagination v-model:page="middle" :total-pages="20" aria-label="In the middle" />
        <UiPagination v-model:page="end" :total-pages="20" aria-label="Near the end" />
        <UiPagination v-model:page="wide" :total-pages="20" :sibling-count="2" aria-label="Two siblings" />
      </div>
    `})},u={render:()=>({components:{UiPagination:a},setup(){return{page:r(4)}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="sm" aria-label="Small" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="md" aria-label="Medium" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="lg" aria-label="Large" />
      </div>
    `})},d={render:()=>({components:{UiPagination:a},setup(){return{page:r(3)}},template:`
      <UiPagination v-model:page="page" :total-pages="12" compact show-edges />
    `})},f={render:()=>({components:{UiPagination:a},setup(){return{page:r(2),labels:{first:`Primera página`,previous:`Página anterior`,next:`Página siguiente`,last:`Última página`,status:`Página {page} de {total}`}}},template:`
      <UiPagination v-model:page="page" :total-pages="8" :labels="labels" aria-label="Paginación" compact show-edges />
    `})},p={render:()=>({components:{UiPagination:a},setup(){let e=r(1);return{page:e,total:87,pageSize:10,range:n(()=>`${(e.value-1)*10+1}–${Math.min(e.value*10,87)} of 87`)}},template:`
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <span class="caption text-muted">{{ range }}</span>
        <UiPagination v-model:page="page" :total="total" :page-size="pageSize" />
      </div>
    `})},m={args:{page:3,totalPages:10,disabled:!0}},h=[`Default`,`Controlled`,`Collapsing`,`EdgesAndSizes`,`Compact`,`CustomLabels`,`ServerSide`,`Disabled`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    total: 120,
    pageSize: 10
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const page = ref(6);
      return {
        page
      };
    },
    template: \`
      <div>
        <UiPagination v-model:page="page" :total-pages="12" />
        <p class="caption text-muted mt-2">v-model:page: {{ page }}</p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const start = ref(2);
      const middle = ref(10);
      const end = ref(19);
      const wide = ref(10);
      return {
        start,
        middle,
        end,
        wide
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="start" :total-pages="20" aria-label="Near the start" />
        <UiPagination v-model:page="middle" :total-pages="20" aria-label="In the middle" />
        <UiPagination v-model:page="end" :total-pages="20" aria-label="Near the end" />
        <UiPagination v-model:page="wide" :total-pages="20" :sibling-count="2" aria-label="Two siblings" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const page = ref(4);
      return {
        page
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="sm" aria-label="Small" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="md" aria-label="Medium" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="lg" aria-label="Large" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const page = ref(3);
      return {
        page
      };
    },
    template: \`
      <UiPagination v-model:page="page" :total-pages="12" compact show-edges />
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const page = ref(2);
      const labels = {
        first: 'Primera página',
        previous: 'Página anterior',
        next: 'Página siguiente',
        last: 'Última página',
        status: 'Página {page} de {total}'
      };
      return {
        page,
        labels
      };
    },
    template: \`
      <UiPagination v-model:page="page" :total-pages="8" :labels="labels" aria-label="Paginación" compact show-edges />
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiPagination
    },
    setup() {
      const page = ref(1);
      const total = 87;
      const pageSize = 10;
      const range = computed(() => {
        const first = (page.value - 1) * pageSize + 1;
        return \`\${first}–\${Math.min(page.value * pageSize, total)} of \${total}\`;
      });
      return {
        page,
        total,
        pageSize,
        range
      };
    },
    template: \`
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <span class="caption text-muted">{{ range }}</span>
        <UiPagination v-model:page="page" :total="total" :page-size="pageSize" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 10,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{l as Collapsing,d as Compact,c as Controlled,f as CustomLabels,s as Default,m as Disabled,u as EdgesAndSizes,p as ServerSide,h as __namedExportsOrder,o as default};