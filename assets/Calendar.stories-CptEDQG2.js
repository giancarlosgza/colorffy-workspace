import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,nt as r}from"./iframe-Cd0jc4kn.js";import{n as i,t as a}from"./Calendar-CjiHODgj.js";function o(e){return e?e.toLocaleDateString(`en-US`,{dateStyle:`medium`}):`—`}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),i(),s={title:`Components/Calendar`,component:a,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`single`,`multiple`,`range`]},months:{control:{type:`number`,min:1,max:3}},locale:{control:`text`},weekStart:{control:{type:`number`,min:0,max:6}},showOutsideDays:{control:`boolean`},fluid:{control:`boolean`},disabled:{control:`boolean`}}},c={render:e=>({components:{UiCalendar:a},setup(){return{args:e,date:r(new Date),format:o}},template:`
      <div>
        <UiCalendar v-bind="args" v-model="date" />
        <p class="caption text-muted mt-2">v-model: {{ format(date) }}</p>
      </div>
    `})},l={render:()=>({components:{UiCalendar:a},setup(){let e=new Date,t=r({start:new Date(e.getFullYear(),e.getMonth(),e.getDate()-6),end:e});return{range:t,summary:n(()=>`${o(t.value.start)} → ${o(t.value.end)}`)}},template:`
      <div>
        <UiCalendar v-model="range" mode="range" :months="2" aria-label="Report period" />
        <p class="caption text-muted mt-2">{{ summary }}</p>
      </div>
    `})},u={render:()=>({components:{UiCalendar:a},setup(){return{dates:r([]),format:o}},template:`
      <div>
        <UiCalendar v-model="dates" mode="multiple" aria-label="Office days" />
        <p class="caption text-muted mt-2">{{ dates.length ? dates.map(format).join(', ') : 'Pick the days you will be in the office' }}</p>
      </div>
    `})},d={render:()=>({components:{UiCalendar:a},setup(){let e=new Date;return{min:new Date(e.getFullYear(),e.getMonth(),e.getDate()),max:new Date(e.getFullYear(),e.getMonth()+2,0),weekend:e=>e.getDay()===0||e.getDay()===6,date:r(null),format:o}},template:`
      <div>
        <UiCalendar v-model="date" :min="min" :max="max" :disabled-dates="weekend" aria-label="Delivery date" />
        <p class="caption text-muted mt-2">Weekdays from today to the end of next month · {{ format(date) }}</p>
      </div>
    `})},f={render:()=>({components:{UiCalendar:a},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: start;">
        <UiCalendar locale="es-SV" aria-label="Calendario" :labels="{ previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }" />
        <UiCalendar locale="de-DE" aria-label="Kalender" :labels="{ previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat' }" />
        <div dir="rtl">
          <UiCalendar locale="ar-EG" aria-label="التقويم" :labels="{ previousMonth: 'الشهر السابق', nextMonth: 'الشهر التالي' }" />
        </div>
      </div>
    `})},p={render:()=>({components:{UiCalendar:a},setup(){let e=new Date;return{busy:new Set([2,5,9,14,15,21,27].map(t=>new Date(e.getFullYear(),e.getMonth(),t).toDateString())),date:r(null)}},template:`
      <UiCalendar v-model="date" aria-label="Deadlines">
        <template #day="{ date: day }">
          {{ day.getDate() }}
          <span
            v-if="busy.has(day.toDateString())"
            aria-hidden="true"
            style="inline-size: 4px; block-size: 4px; border-radius: 50%; background: currentColor;"
          />
        </template>
      </UiCalendar>
    `})},m={render:()=>({components:{UiCalendar:a},setup(){return{range:r({start:null,end:null})}},template:`
      <div style="max-width: 420px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
        <UiCalendar v-model="range" mode="range" :months="2" fluid aria-label="Stay" />
      </div>
    `})},h={args:{disabled:!0}},g=[`Default`,`Range`,`Multiple`,`Limits`,`Locales`,`CustomDays`,`Fluid`,`Disabled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCalendar
    },
    setup() {
      const date = ref<Date | null>(new Date());
      return {
        args,
        date,
        format
      };
    },
    template: \`
      <div>
        <UiCalendar v-bind="args" v-model="date" />
        <p class="caption text-muted mt-2">v-model: {{ format(date) }}</p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    setup() {
      const today = new Date();
      const range = ref<IDateRange>({
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
        end: today
      });
      const summary = computed(() => \`\${format(range.value.start)} → \${format(range.value.end)}\`);
      return {
        range,
        summary
      };
    },
    template: \`
      <div>
        <UiCalendar v-model="range" mode="range" :months="2" aria-label="Report period" />
        <p class="caption text-muted mt-2">{{ summary }}</p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    setup() {
      const dates = ref<Date[]>([]);
      return {
        dates,
        format
      };
    },
    template: \`
      <div>
        <UiCalendar v-model="dates" mode="multiple" aria-label="Office days" />
        <p class="caption text-muted mt-2">{{ dates.length ? dates.map(format).join(', ') : 'Pick the days you will be in the office' }}</p>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    setup() {
      const today = new Date();
      const min = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const max = new Date(today.getFullYear(), today.getMonth() + 2, 0);
      const weekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      const date = ref<Date | null>(null);
      return {
        min,
        max,
        weekend,
        date,
        format
      };
    },
    template: \`
      <div>
        <UiCalendar v-model="date" :min="min" :max="max" :disabled-dates="weekend" aria-label="Delivery date" />
        <p class="caption text-muted mt-2">Weekdays from today to the end of next month · {{ format(date) }}</p>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: start;">
        <UiCalendar locale="es-SV" aria-label="Calendario" :labels="{ previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }" />
        <UiCalendar locale="de-DE" aria-label="Kalender" :labels="{ previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat' }" />
        <div dir="rtl">
          <UiCalendar locale="ar-EG" aria-label="التقويم" :labels="{ previousMonth: 'الشهر السابق', nextMonth: 'الشهر التالي' }" />
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    setup() {
      const today = new Date();
      const busy = new Set([2, 5, 9, 14, 15, 21, 27].map(day => new Date(today.getFullYear(), today.getMonth(), day).toDateString()));
      const date = ref<Date | null>(null);
      return {
        busy,
        date
      };
    },
    template: \`
      <UiCalendar v-model="date" aria-label="Deadlines">
        <template #day="{ date: day }">
          {{ day.getDate() }}
          <span
            v-if="busy.has(day.toDateString())"
            aria-hidden="true"
            style="inline-size: 4px; block-size: 4px; border-radius: 50%; background: currentColor;"
          />
        </template>
      </UiCalendar>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiCalendar
    },
    setup() {
      const range = ref<IDateRange>({
        start: null,
        end: null
      });
      return {
        range
      };
    },
    template: \`
      <div style="max-width: 420px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
        <UiCalendar v-model="range" mode="range" :months="2" fluid aria-label="Stay" />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as CustomDays,c as Default,h as Disabled,m as Fluid,d as Limits,f as Locales,u as Multiple,l as Range,g as __namedExportsOrder,s as default};