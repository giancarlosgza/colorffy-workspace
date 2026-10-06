import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,nt as n}from"./iframe-Cd0jc4kn.js";import{n as r,t as i}from"./Button-CbIdTWjd.js";import{n as a,t as o}from"./MultiSelect-Df7PTGQc.js";import{n as s,t as c}from"./Modal-CKmGD3Zh.js";function l(e,t){let r=n([]),i=n(!1),a=0;async function o(n){let o=++a;if(!n){r.value=[],i.value=!1;return}i.value=!0,await new Promise(e=>setTimeout(e,600)),o===a&&(r.value=e.filter(e=>t(e).toLowerCase().includes(n.toLowerCase())),i.value=!1)}return{results:r,loading:i,search:o}}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{t(),r(),s(),a(),u={title:`Components/Input/MultiSelect`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},filterable:{control:`boolean`},clearable:{control:`boolean`},max:{control:`number`},maxChips:{control:`number`},maxChipsLabel:{control:`text`},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},rounded:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`}}},d=[`Bug`,`Design`,`Docs`,`Frontend`,`Backend`,`Infra`,`Research`,`Security`,`Performance`,`Accessibility`,`Marketing`,`Q4`],f=[{id:`maya`,name:`Maya Chen`,team:`Design`,role:`Product designer`},{id:`zoe`,name:`Zoe Martin`,team:`Design`,role:`Brand designer`},{id:`leo`,name:`Leo Martins`,team:`Engineering`,role:`Frontend engineer`},{id:`ava`,name:`Ava Johnson`,team:`Engineering`,role:`Backend engineer`},{id:`noah`,name:`Noah Patel`,team:`Engineering`,role:`QA engineer`,away:!0},{id:`ines`,name:`Inés Duarte`,team:`Marketing`,role:`Content lead`},{id:`sofia`,name:`Sofia Rossi`,team:`Marketing`,role:`Marketing manager`}],p={args:{id:`story-multiselect`,label:`Labels`,placeholder:`Search labels`,options:d}},m={render:()=>({components:{UiInputMultiSelect:o},setup(){let e=n([`leo`,`ines`]),t=n([]);return{reviewers:e,members:f,log:t}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-reviewers"
          v-model="reviewers"
          label="Reviewers"
          placeholder="Add reviewers"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
          @add="log.unshift('add: ' + $event)"
          @remove="log.unshift('remove: ' + $event)"
        />
        <p class="caption text-muted mb-1">v-model: {{ reviewers }}</p>
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `})},h={render:()=>({components:{UiInputMultiSelect:o},setup(){return{owners:n([]),members:f}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-owners"
          v-model="owners"
          label="Up to 3 owners"
          placeholder="Pick teammates"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
          :max="3"
        />
      </div>
    `})},g={render:()=>({components:{UiInputMultiSelect:o},setup(){return{keywords:n([`Vivid`,`Pastel`]),options:[`Vivid`,`Pastel`,`Warm`,`Cool`,`Earthy`,`Neon`,`Muted`,`Monochrome`,`Retro`,`Gradient`]}},template:`
      <div style="max-width: 360px;">
        <UiInputMultiSelect
          id="story-multiselect-max-chips"
          v-model="keywords"
          label="Color keywords"
          placeholder="Pick keywords"
          :options="options"
          :max-chips="2"
          clearable
        />
        <p class="caption text-muted">Up to two chips; a third value turns them into "3 selected".</p>
      </div>
    `})},_={render:()=>({components:{UiInputMultiSelect:o},setup(){return{filters:n([`Bug`,`Frontend`,`Q4`]),labels:d}},template:`
      <div style="max-width: 240px;">
        <UiInputMultiSelect
          id="story-multiselect-count"
          v-model="filters"
          label="Filter by label"
          placeholder="All labels"
          :options="labels"
          :max-chips="0"
          max-chips-label="{count} labels"
          size="sm"
          clearable
        />
      </div>
    `})},v={render:()=>({components:{UiInputMultiSelect:o},setup(){return{days:n([`Monday`,`Wednesday`])}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-days"
          v-model="days"
          label="Standup days"
          placeholder="Pick days"
          :options="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
          :filterable="false"
        />
        <p class="caption text-muted">Space or Enter toggles the highlighted day; typing a letter jumps to it.</p>
      </div>
    `})},y={render:()=>({components:{UiInputMultiSelect:o},setup(){return{team:n([`maya`]),members:f}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-custom"
          v-model="team"
          label="Team"
          :options="members"
          option-label="name"
          option-value="id"
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
        </UiInputMultiSelect>
      </div>
    `})},b={render:()=>({components:{UiInputMultiSelect:o},setup(){return{value:n([`Design`,`Docs`]),labels:d}},template:`
      <div style="display: flex; flex-direction: column; max-width: 420px;">
        <UiInputMultiSelect id="story-multiselect-filled" v-model="value" label="Filled" variant="filled" :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-rounded" v-model="value" label="Rounded" rounded :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-sm" v-model="value" label="Small" size="sm" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-lg" v-model="value" label="Large" size="lg" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-disabled" v-model="value" label="Disabled" :options="labels" disabled />
        <UiInputMultiSelect id="story-multiselect-error" v-model="value" label="With an error" :options="labels" :error-messages="['Keep it to one label']" />
      </div>
    `})},x={render:()=>({components:{UiInputMultiSelect:o,UiModal:c,UiButton:i},setup(){return{modal:n(null),team:n([]),members:f}},template:`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Share project" size="sm">
          <template #body>
            <UiInputMultiSelect
              id="story-multiselect-modal"
              v-model="team"
              label="People"
              placeholder="Search the team"
              :options="members"
              option-label="name"
              option-value="id"
              option-group="team"
            />
          </template>
        </UiModal>
      </div>
    `})},S={render:()=>({components:{UiInputMultiSelect:o},setup(){return{people:n([]),...l(f,e=>e.name)}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-remote"
          v-model="people"
          label="People"
          placeholder="Search the directory"
          :options="results"
          option-label="name"
          option-value="id"
          remote
          :min-search-length="2"
          :loading="loading"
          clearable
          @search="search"
        />
        <p class="caption text-muted mt-2">Value: {{ people.join(', ') || 'none' }}</p>
      </div>
    `})},C={render:()=>({components:{UiInputMultiSelect:o},setup(){return{value:n([`Design`]),labels:d}},template:`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-free"
          v-model="value"
          label="Labels"
          placeholder="Pick or create labels"
          :options="labels"
          free-text
          clearable
        />
        <p class="caption text-muted mt-2">Value: {{ value.join(', ') || 'none' }}</p>
      </div>
    `})},w=[`Default`,`WithValues`,`GroupsMaxAndDisabled`,`MaxChips`,`CountOnly`,`SelectOnly`,`CustomOption`,`Variants`,`InsideModal`,`RemoteSearch`,`FreeText`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'story-multiselect',
    label: 'Labels',
    placeholder: 'Search labels',
    options: labels
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const reviewers = ref(['leo', 'ines']);
      const log = ref<string[]>([]);
      return {
        reviewers,
        members,
        log
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-reviewers"
          v-model="reviewers"
          label="Reviewers"
          placeholder="Add reviewers"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
          @add="log.unshift('add: ' + $event)"
          @remove="log.unshift('remove: ' + $event)"
        />
        <p class="caption text-muted mb-1">v-model: {{ reviewers }}</p>
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const owners = ref<string[]>([]);
      return {
        owners,
        members
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-owners"
          v-model="owners"
          label="Up to 3 owners"
          placeholder="Pick teammates"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
          :max="3"
        />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const keywords = ref(['Vivid', 'Pastel']);
      const options = ['Vivid', 'Pastel', 'Warm', 'Cool', 'Earthy', 'Neon', 'Muted', 'Monochrome', 'Retro', 'Gradient'];
      return {
        keywords,
        options
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputMultiSelect
          id="story-multiselect-max-chips"
          v-model="keywords"
          label="Color keywords"
          placeholder="Pick keywords"
          :options="options"
          :max-chips="2"
          clearable
        />
        <p class="caption text-muted">Up to two chips; a third value turns them into "3 selected".</p>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const filters = ref(['Bug', 'Frontend', 'Q4']);
      return {
        filters,
        labels
      };
    },
    template: \`
      <div style="max-width: 240px;">
        <UiInputMultiSelect
          id="story-multiselect-count"
          v-model="filters"
          label="Filter by label"
          placeholder="All labels"
          :options="labels"
          :max-chips="0"
          max-chips-label="{count} labels"
          size="sm"
          clearable
        />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const days = ref(['Monday', 'Wednesday']);
      return {
        days
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-days"
          v-model="days"
          label="Standup days"
          placeholder="Pick days"
          :options="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
          :filterable="false"
        />
        <p class="caption text-muted">Space or Enter toggles the highlighted day; typing a letter jumps to it.</p>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const team = ref<string[]>(['maya']);
      return {
        team,
        members
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-custom"
          v-model="team"
          label="Team"
          :options="members"
          option-label="name"
          option-value="id"
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
        </UiInputMultiSelect>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const value = ref(['Design', 'Docs']);
      return {
        value,
        labels
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 420px;">
        <UiInputMultiSelect id="story-multiselect-filled" v-model="value" label="Filled" variant="filled" :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-rounded" v-model="value" label="Rounded" rounded :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-sm" v-model="value" label="Small" size="sm" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-lg" v-model="value" label="Large" size="lg" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-disabled" v-model="value" label="Disabled" :options="labels" disabled />
        <UiInputMultiSelect id="story-multiselect-error" v-model="value" label="With an error" :options="labels" :error-messages="['Keep it to one label']" />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect,
      UiModal,
      UiButton
    },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null);
      const team = ref<string[]>([]);
      return {
        modal,
        team,
        members
      };
    },
    template: \`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Share project" size="sm">
          <template #body>
            <UiInputMultiSelect
              id="story-multiselect-modal"
              v-model="team"
              label="People"
              placeholder="Search the team"
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const people = ref<string[]>([]);
      return {
        people,
        ...useFakeSearch(members, member => member.name)
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-remote"
          v-model="people"
          label="People"
          placeholder="Search the directory"
          :options="results"
          option-label="name"
          option-value="id"
          remote
          :min-search-length="2"
          :loading="loading"
          clearable
          @search="search"
        />
        <p class="caption text-muted mt-2">Value: {{ people.join(', ') || 'none' }}</p>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputMultiSelect
    },
    setup() {
      const value = ref<string[]>(['Design']);
      return {
        value,
        labels
      };
    },
    template: \`
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-free"
          v-model="value"
          label="Labels"
          placeholder="Pick or create labels"
          :options="labels"
          free-text
          clearable
        />
        <p class="caption text-muted mt-2">Value: {{ value.join(', ') || 'none' }}</p>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}}})))()}T();export{_ as CountOnly,y as CustomOption,p as Default,C as FreeText,h as GroupsMaxAndDisabled,x as InsideModal,g as MaxChips,S as RemoteSearch,v as SelectOnly,b as Variants,m as WithValues,w as __namedExportsOrder,u as default};