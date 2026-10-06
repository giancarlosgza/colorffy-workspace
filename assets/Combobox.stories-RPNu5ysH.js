import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,a as n,nt as r}from"./iframe-Cd0jc4kn.js";import{n as i,t as a}from"./Button-CbIdTWjd.js";import{n as o,t as s}from"./Combobox-D4Pb48Ea.js";import{n as c,t as l}from"./Modal-CKmGD3Zh.js";function u(e,t){let n=r([]),i=r(!1),a=0;async function o(r){let o=++a;if(!r){n.value=[],i.value=!1;return}i.value=!0,await new Promise(e=>setTimeout(e,600)),o===a&&(n.value=e.filter(e=>t(e).toLowerCase().includes(r.toLowerCase())),i.value=!1)}return{results:n,loading:i,search:o}}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),c(),o(),d={title:`Components/Input/Combobox`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},filterable:{control:`boolean`},clearable:{control:`boolean`},emptyText:{control:`text`},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},rounded:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`}}},f=[`Argentina`,`Brazil`,`Canada`,`Chile`,`Colombia`,`Costa Rica`,`El Salvador`,`Guatemala`,`Honduras`,`México`,`Nicaragua`,`Panamá`,`Perú`,`Spain`,`United States`,`Uruguay`],p=[{id:`maya`,name:`Maya Chen`,team:`Design`,role:`Product designer`},{id:`zoe`,name:`Zoe Martin`,team:`Design`,role:`Brand designer`},{id:`leo`,name:`Leo Martins`,team:`Engineering`,role:`Frontend engineer`},{id:`ava`,name:`Ava Johnson`,team:`Engineering`,role:`Backend engineer`},{id:`noah`,name:`Noah Patel`,team:`Engineering`,role:`QA engineer`,away:!0},{id:`ines`,name:`Inés Duarte`,team:`Marketing`,role:`Content lead`},{id:`sofia`,name:`Sofia Rossi`,team:`Marketing`,role:`Marketing manager`}],m={args:{id:`story-combobox`,label:`Country`,placeholder:`Type to search`,options:f}},h={render:()=>({components:{UiInputCombobox:s},setup(){return{lead:r(`leo`),members:p}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-lead"
          v-model="lead"
          label="Project lead"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        />
        <p class="caption text-muted">v-model: {{ lead }}</p>
      </div>
    `})},g={render:()=>({components:{UiInputCombobox:s},setup(){return{owner:r(null),members:p}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-groups"
          v-model="owner"
          label="Owner"
          placeholder="Pick a teammate"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
        />
      </div>
    `})},_={render:()=>({components:{UiInputCombobox:s},setup(){return{priority:r(`Medium`)}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-priority"
          v-model="priority"
          label="Priority"
          :options="['Low', 'Medium', 'High', 'Urgent']"
          :filterable="false"
        />
        <p class="caption text-muted">Typing a letter jumps to the first option that starts with it.</p>
      </div>
    `})},v={render:()=>({components:{UiInputCombobox:s},setup(){return{assignee:r(null),members:p}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-custom"
          v-model="assignee"
          label="Assignee"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
          <template #empty="{ query }">
            Nobody called "{{ query }}" on this team
          </template>
        </UiInputCombobox>
      </div>
    `})},y={render:()=>({components:{UiInputCombobox:s},setup(){return{value:r(`Chile`),countries:f}},template:`
      <div style="display: flex; flex-direction: column; max-width: 360px;">
        <UiInputCombobox id="story-combobox-filled" v-model="value" label="Filled" variant="filled" :options="countries" clearable />
        <UiInputCombobox id="story-combobox-rounded" v-model="value" label="Rounded" rounded :options="countries" clearable />
        <UiInputCombobox id="story-combobox-sm" v-model="value" label="Small" size="sm" :options="countries" />
        <UiInputCombobox id="story-combobox-lg" v-model="value" label="Large" size="lg" :options="countries" />
        <UiInputCombobox id="story-combobox-disabled" v-model="value" label="Disabled" :options="countries" disabled />
        <UiInputCombobox id="story-combobox-error" v-model="value" label="With an error" :options="countries" :error-messages="['Pick a country you ship to']" />
      </div>
    `})},b={render:()=>({components:{UiInputCombobox:s,UiModal:l,UiButton:a},setup(){return{modal:r(null),lead:r(null),members:p}},template:`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="New project" size="sm">
          <template #body>
            <UiInputCombobox
              id="story-combobox-modal"
              v-model="lead"
              label="Project lead"
              :options="members"
              option-label="name"
              option-value="id"
              option-group="team"
            />
          </template>
        </UiModal>
      </div>
    `})},x={render:()=>({components:{UiInputCombobox:s},setup(){return{value:r(null),countries:f}},template:`
      <div style="height: 80vh; display: flex; align-items: flex-end;">
        <div style="overflow: hidden; width: 320px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
          <UiInputCombobox
            id="story-combobox-clipped"
            v-model="value"
            label="Near the bottom, inside overflow: hidden"
            :options="countries"
          />
        </div>
      </div>
    `})},S={render:()=>({components:{UiInputCombobox:s},setup(){let e=CSS.supports;return CSS.supports=(...t)=>!t[0]?.startsWith(`position-try`)&&e.apply(CSS,t),t(()=>{CSS.supports=e}),{value:r(null),countries:f}},template:`
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputCombobox id="story-combobox-fallback-top" v-model="value" label="Opens below" :options="countries" />
        <UiInputCombobox id="story-combobox-fallback-bottom" v-model="value" label="Opens above" :options="countries" />
      </div>
    `})},C={render:()=>({components:{UiInputCombobox:s},setup(){return{country:r(null),...u(f,e=>e)}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-remote"
          v-model="country"
          label="Country"
          placeholder="Search the server"
          :options="results"
          remote
          :loading="loading"
          clearable
          @search="search"
        />
        <p class="caption text-muted mt-2">Value: {{ country ?? 'none' }}</p>
      </div>
    `})},w={render:()=>({components:{UiInputCombobox:s},setup(){return{city:r(null),cities:[`Buenos Aires`,`Lima`,`Madrid`,`Mexico City`,`San Salvador`,`Santiago`]}},template:`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-free"
          v-model="city"
          label="City"
          placeholder="Pick a city or type another"
          :options="cities"
          free-text
          clearable
        />
        <p class="caption text-muted mt-2">Value: {{ city ?? 'none' }}</p>
      </div>
    `})},T=[`Default`,`ObjectOptions`,`GroupsAndDisabled`,`SelectOnly`,`CustomOption`,`Variants`,`InsideModal`,`ClippingContainer`,`PositionFallback`,`RemoteSearch`,`FreeText`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-combobox',
    label: 'Country',
    placeholder: 'Type to search',
    options: countries
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const lead = ref<string | null>('leo');
      return {
        lead,
        members
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-lead"
          v-model="lead"
          label="Project lead"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        />
        <p class="caption text-muted">v-model: {{ lead }}</p>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const owner = ref<string | null>(null);
      return {
        owner,
        members
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-groups"
          v-model="owner"
          label="Owner"
          placeholder="Pick a teammate"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
        />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const priority = ref<string | null>('Medium');
      return {
        priority
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-priority"
          v-model="priority"
          label="Priority"
          :options="['Low', 'Medium', 'High', 'Urgent']"
          :filterable="false"
        />
        <p class="caption text-muted">Typing a letter jumps to the first option that starts with it.</p>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const assignee = ref<string | null>(null);
      return {
        assignee,
        members
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-custom"
          v-model="assignee"
          label="Assignee"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
          <template #empty="{ query }">
            Nobody called "{{ query }}" on this team
          </template>
        </UiInputCombobox>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const value = ref<string | null>('Chile');
      return {
        value,
        countries
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 360px;">
        <UiInputCombobox id="story-combobox-filled" v-model="value" label="Filled" variant="filled" :options="countries" clearable />
        <UiInputCombobox id="story-combobox-rounded" v-model="value" label="Rounded" rounded :options="countries" clearable />
        <UiInputCombobox id="story-combobox-sm" v-model="value" label="Small" size="sm" :options="countries" />
        <UiInputCombobox id="story-combobox-lg" v-model="value" label="Large" size="lg" :options="countries" />
        <UiInputCombobox id="story-combobox-disabled" v-model="value" label="Disabled" :options="countries" disabled />
        <UiInputCombobox id="story-combobox-error" v-model="value" label="With an error" :options="countries" :error-messages="['Pick a country you ship to']" />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox,
      UiModal,
      UiButton
    },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null);
      const lead = ref<string | null>(null);
      return {
        modal,
        lead,
        members
      };
    },
    template: \`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="New project" size="sm">
          <template #body>
            <UiInputCombobox
              id="story-combobox-modal"
              v-model="lead"
              label="Project lead"
              :options="members"
              option-label="name"
              option-value="id"
              option-group="team"
            />
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const value = ref<string | null>(null);
      return {
        value,
        countries
      };
    },
    template: \`
      <div style="height: 80vh; display: flex; align-items: flex-end;">
        <div style="overflow: hidden; width: 320px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
          <UiInputCombobox
            id="story-combobox-clipped"
            v-model="value"
            label="Near the bottom, inside overflow: hidden"
            :options="countries"
          />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      // Pretend anchor positioning is missing so the script places the list
      const original = CSS.supports;
      const supports = (...args: string[]) => args[0]?.startsWith('position-try') ? false : (original as (...query: string[]) => boolean).apply(CSS, args);
      CSS.supports = supports as typeof CSS.supports;
      onBeforeUnmount(() => {
        CSS.supports = original;
      });
      const value = ref<string | null>(null);
      return {
        value,
        countries
      };
    },
    template: \`
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputCombobox id="story-combobox-fallback-top" v-model="value" label="Opens below" :options="countries" />
        <UiInputCombobox id="story-combobox-fallback-bottom" v-model="value" label="Opens above" :options="countries" />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const country = ref<string | null>(null);
      return {
        country,
        ...useFakeSearch(countries, name => name)
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-remote"
          v-model="country"
          label="Country"
          placeholder="Search the server"
          :options="results"
          remote
          :loading="loading"
          clearable
          @search="search"
        />
        <p class="caption text-muted mt-2">Value: {{ country ?? 'none' }}</p>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputCombobox
    },
    setup() {
      const city = ref<string | null>(null);
      return {
        city,
        cities: ['Buenos Aires', 'Lima', 'Madrid', 'Mexico City', 'San Salvador', 'Santiago']
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-free"
          v-model="city"
          label="City"
          placeholder="Pick a city or type another"
          :options="cities"
          free-text
          clearable
        />
        <p class="caption text-muted mt-2">Value: {{ city ?? 'none' }}</p>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{x as ClippingContainer,v as CustomOption,m as Default,w as FreeText,g as GroupsAndDisabled,b as InsideModal,h as ObjectOptions,S as PositionFallback,C as RemoteSearch,_ as SelectOnly,y as Variants,T as __namedExportsOrder,d as default};