import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,nt as r}from"./iframe-Cd0jc4kn.js";import{n as i,t as a}from"./Button-CbIdTWjd.js";import{n as o,t as s}from"./Datatable-Ds0_QBiD.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t(),i(),o(),c={title:`Components/Datatable`,component:s,tags:[`autodocs`],argTypes:{tableClass:{control:`select`,options:[``,`table-bordered`,`table-striped`,`table-borderless`]},sortable:{control:`boolean`},columnManager:{control:`boolean`},isLoading:{control:`boolean`},selectable:{control:`boolean`},stickyHeader:{control:`boolean`}}},l=[{id:1,name:`John Doe`,email:`john@example.com`,role:`Admin`,status:`Active`},{id:2,name:`Jane Smith`,email:`jane@example.com`,role:`User`,status:`Active`},{id:3,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,status:`Inactive`},{id:4,name:`Alice Brown`,email:`alice@example.com`,role:`Editor`,status:`Active`},{id:5,name:`Charlie Wilson`,email:`charlie@example.com`,role:`User`,status:`Active`}],u=[{key:`id`,label:`ID`},{key:`name`,label:`Name`},{key:`email`,label:`Email`},{key:`role`,label:`Role`},{key:`status`,label:`Status`},{key:`actions`,label:`Actions`,sortable:!1}],d={args:{columns:u,items:l},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){return{columns:u,items:l}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    `})},f={args:{columns:u,items:l,sortable:!0},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){return{columns:u,items:l}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :sortable="true"
        default-sort-key="name"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    `})},p={args:{columns:u,items:l,tableClass:`table-bordered`},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){return{columns:u,items:l}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},m={args:{columns:u,items:l,tableClass:`table-striped`},render:e=>({components:{UiDatatable:s},setup(){return{columns:u,items:l}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-striped"
      />
    `})},h={args:{columns:u,items:l,columnManager:!0},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){return{columns:u.map(e=>e.key===`email`?{...e,hidden:!0}:e),items:l}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :column-manager="true"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},g={args:{columns:u,items:l,selectable:!0},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){let e=r([]);return{columns:u,items:l,selected:e}},template:`
      <div>
        <p class="mb-2">Selected: {{ selected }}</p>
        <UiDatatable
          :columns="columns"
          :items="items"
          selectable
          v-model:selected="selected"
        >
          <template #cell-actions="{ item }">
            <UiButton variant="outline" size="sm" text="Edit" />
          </template>
        </UiDatatable>
      </div>
    `})},_=[`Admin`,`Editor`,`User`,`Viewer`],v=[`Maya Chen`,`Sam Ortiz`,`Ines Duarte`,`Theo Grant`,`Priya Nair`,`Leo Park`,`Ava Rossi`,`Omar Haddad`],y=Array.from({length:48},(e,t)=>({id:t+1,name:`${v[t%v.length]} ${Math.floor(t/v.length)+1}`,email:`member${t+1}@orbit.app`,role:_[t%_.length],status:t%5==0?`Inactive`:`Active`})),b={render:()=>({components:{UiDatatable:s},setup(){let e=r([]),t=r(1);return{columns:u.slice(0,5),items:y,selected:e,page:t}},template:`
      <div>
        <p class="caption text-muted mb-2">Page {{ page }} · selected: {{ selected.length ? selected.join(', ') : 'none' }}</p>
        <UiDatatable
          v-model:selected="selected"
          v-model:page="page"
          :columns="columns"
          :items="items"
          :pagination="{ pageSize: 8, showEdges: true }"
          selectable
        />
      </div>
    `})},x={render:()=>({components:{UiDatatable:s},setup(){let e=r(``),t=n(()=>{let t=e.value.trim().toLowerCase();return t?y.filter(e=>`${e.name} ${e.role}`.toLowerCase().includes(t)):y});return{columns:u.slice(0,5),items:t,query:e}},template:`
      <UiDatatable :columns="columns" :items="items" :pagination="{ pageSize: 10 }" default-sort-key="name">
        <template #controls>
          <input v-model="query" type="search" class="form-control form-sm" placeholder="Filter by name or role" aria-label="Filter members">
        </template>
      </UiDatatable>
    `})},S={args:{columns:u,items:[...l,...l,...l].map((e,t)=>({...e,id:t+1})),stickyHeader:!0},render:e=>({components:{UiDatatable:s,UiButton:a},setup(){let e=[...l,...l,...l].map((e,t)=>({...e,id:t+1}));return{columns:u,items:e}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        sticky-header
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `})},C={args:{columns:u,items:[],isLoading:!0,skeletonRows:5},render:e=>({components:{UiDatatable:s},setup(){return{columns:u,items:[]}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `})},w={args:{columns:u,items:[]},render:e=>({components:{UiDatatable:s},setup(){return{columns:u,items:[]}},template:`
      <UiDatatable
        :columns="columns"
        :items="items"
      />
    `})},T=[`Default`,`Sortable`,`Bordered`,`Striped`,`WithColumnManager`,`Selectable`,`Paginated`,`PaginatedWithFilter`,`StickyHeader`,`Loading`,`EmptyState`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    sortable: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :sortable="true"
        default-sort-key="name"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    tableClass: 'table-bordered'
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    tableClass: 'table-striped'
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        columns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-striped"
      />
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    columnManager: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      // Email starts hidden; toggleable via the column manager
      const managerColumns = columns.map(column => column.key === 'email' ? {
        ...column,
        hidden: true
      } : column);
      return {
        columns: managerColumns,
        items: sampleData
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :column-manager="true"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: sampleData,
    selectable: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      const selected = ref<(string | number)[]>([]);
      return {
        columns,
        items: sampleData,
        selected
      };
    },
    template: \`
      <div>
        <p class="mb-2">Selected: {{ selected }}</p>
        <UiDatatable
          :columns="columns"
          :items="items"
          selectable
          v-model:selected="selected"
        >
          <template #cell-actions="{ item }">
            <UiButton variant="outline" size="sm" text="Edit" />
          </template>
        </UiDatatable>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDatatable
    },
    setup() {
      const selected = ref<(string | number)[]>([]);
      const page = ref(1);
      return {
        columns: columns.slice(0, 5),
        items: manyRows,
        selected,
        page
      };
    },
    template: \`
      <div>
        <p class="caption text-muted mb-2">Page {{ page }} · selected: {{ selected.length ? selected.join(', ') : 'none' }}</p>
        <UiDatatable
          v-model:selected="selected"
          v-model:page="page"
          :columns="columns"
          :items="items"
          :pagination="{ pageSize: 8, showEdges: true }"
          selectable
        />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDatatable
    },
    setup() {
      const query = ref('');
      const items = computed(() => {
        const term = query.value.trim().toLowerCase();
        return term ? manyRows.filter(row => \`\${row.name} \${row.role}\`.toLowerCase().includes(term)) : manyRows;
      });
      return {
        columns: columns.slice(0, 5),
        items,
        query
      };
    },
    template: \`
      <UiDatatable :columns="columns" :items="items" :pagination="{ pageSize: 10 }" default-sort-key="name">
        <template #controls>
          <input v-model="query" type="search" class="form-control form-sm" placeholder="Filter by name or role" aria-label="Filter members">
        </template>
      </UiDatatable>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: [...sampleData, ...sampleData, ...sampleData].map((item, index) => ({
      ...item,
      id: index + 1
    })),
    stickyHeader: true
  },
  render: _args => ({
    components: {
      UiDatatable,
      UiButton
    },
    setup() {
      const manyItems = [...sampleData, ...sampleData, ...sampleData].map((item, index) => ({
        ...item,
        id: index + 1
      }));
      return {
        columns,
        items: manyItems
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        sticky-header
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: [],
    isLoading: true,
    skeletonRows: 5
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        columns,
        items: []
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    items: []
  },
  render: _args => ({
    components: {
      UiDatatable
    },
    setup() {
      return {
        columns,
        items: []
      };
    },
    template: \`
      <UiDatatable
        :columns="columns"
        :items="items"
      />
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{p as Bordered,d as Default,w as EmptyState,C as Loading,b as Paginated,x as PaginatedWithFilter,g as Selectable,f as Sortable,S as StickyHeader,m as Striped,h as WithColumnManager,T as __namedExportsOrder,c as default};