import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,a as n,h as r,nt as i}from"./iframe-Cd0jc4kn.js";import{n as a,t as o}from"./Button-CbIdTWjd.js";import{a as s,c}from"./Calendar-CjiHODgj.js";import{n as l,t as u}from"./Date-DUe2i35E.js";import{n as d,t as f}from"./Modal-CKmGD3Zh.js";function p(e){return e instanceof Date?e.toDateString():e?`${e.start?.toDateString()??`—`} → ${e.end?.toDateString()??`—`}`:`null`}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),c(),a(),d(),l(),m={title:`Components/Input/Date`,component:u,tags:[`autodocs`],argTypes:{label:{control:`text`},mode:{control:`select`,options:[`single`,`range`]},trigger:{control:`select`,options:[`field`,`button`]},months:{control:{type:`number`,min:1,max:3}},locale:{control:`text`},confirm:{control:`select`,options:[null,!0,!1]},clearable:{control:`boolean`},variant:{control:`select`,options:[null,`filled`,`outline`,`transparent`]},size:{control:`select`,options:[null,`sm`,`lg`]},disabled:{control:`boolean`},readonly:{control:`boolean`}}},h=[s.today(),s.yesterday(),s.lastDays(7),s.lastDays(14),s.lastDays(30),s.thisMonth(),s.lastMonth(),s.thisYear()],g={render:e=>({components:{UiInputDate:u},setup(){let t=i(null);return{args:e,date:t,summary:r(()=>p(t.value))}},template:`
      <div style="max-width: 320px;">
        <UiInputDate v-bind="args" id="story-date-default" v-model="date" label="Due date" clearable />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},_={render:()=>({components:{UiInputDate:u},setup(){let e=i(h[2].value());return{period:e,summary:r(()=>p(e.value)),rangePresets:h}},template:`
      <div style="max-width: 360px;">
        <UiInputDate id="story-date-range" v-model="period" mode="range" label="Report period" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},v={render:()=>({components:{UiInputDate:u},setup(){let e=i(h[2].value());return{period:e,summary:r(()=>p(e.value)),rangePresets:h}},template:`
      <div>
        <UiInputDate id="story-date-button" v-model="period" mode="range" trigger="button" label="Period" size="sm" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},y={render:()=>({components:{UiInputDate:u},setup(){return{days:i([]),isWeekend:e=>e.getDay()===0||e.getDay()===6}},template:`
      <div style="max-width: 360px;">
        <UiInputDate id="story-date-multiple" v-model="days" mode="multiple" label="Out of office" :disabled-dates="isWeekend" clearable />
        <p class="caption text-muted mt-2">v-model: {{ days.map(day => day.toDateString()).join(', ') || '[]' }}</p>
      </div>
    `})},b={render:()=>({components:{UiInputDate:u},setup(){let e=new Date,t=i(null),n=[s.tomorrow(),{label:`Next Monday`,value:()=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+((8-e.getDay())%7||7))},{label:`In a month`,value:()=>new Date(e.getFullYear(),e.getMonth()+1,e.getDate())}];return{snooze:t,summary:r(()=>p(t.value)),presets:n,today:e}},template:`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-snooze" v-model="snooze" label="Snooze until" :presets="presets" :min="today" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},x={render:()=>({components:{UiInputDate:u},setup(){let e=new Date,t=i(null);return{reminder:t,presets:[s.today(),s.tomorrow()],summary:r(()=>t.value instanceof Date?t.value.toLocaleString(`en-US`):`null`),today:e}},template:`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-time" v-model="reminder" label="Remind me" time :minute-step="15" :min="today" :presets="presets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},S={render:()=>({components:{UiInputDate:u},setup(){let e=i(null);return{meeting:e,slots:{step:30,start:`09:00`,end:`17:00`},isWeekend:e=>e.getDay()===0||e.getDay()===6,isBooked:e=>[600,780,810].includes(e.getHours()*60+e.getMinutes()),summary:r(()=>e.value instanceof Date?e.value.toLocaleString(`en-US`):`null`)}},template:`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-slots" v-model="meeting" label="Meeting" :time-options="slots" :disabled-dates="isWeekend" :disabled-times="isBooked" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},C={render:()=>({components:{UiInputDate:u},setup(){let e=i(null);return{period:e,summary:r(()=>{let t=e.value;return t&&!(t instanceof Date)?`${t.start?.toLocaleString(`en-US`)??`—`} → ${t.end?.toLocaleString(`en-US`)??`—`}`:`null`}),rangePresets:h}},template:`
      <div>
        <UiInputDate id="story-date-range-time" v-model="period" mode="range" trigger="button" label="Period" size="sm" time :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `})},w={render:()=>({components:{UiInputDate:u},setup(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(e.getFullYear(),e.getMonth()+2,0),a=e=>e.getDay()===0||e.getDay()===6,o=i(null);return{min:t,max:n,weekend:a,date:o,summary:r(()=>p(o.value))}},template:`
      <div style="max-width: 320px;">
        <UiInputDate
          id="story-date-limits"
          v-model="date"
          label="Delivery date"
          :min="min"
          :max="max"
          :disabled-dates="weekend"
          clearable
        />
        <p class="caption text-muted mt-2">Weekdays until the end of next month. Typed weekends are rejected. · {{ summary }}</p>
      </div>
    `})},T={render:()=>({components:{UiInputDate:u},setup(){return{date:i(new Date),labels:{toggle:`Elegir fecha`,clear:`Borrar fecha`,previousMonth:`Mes anterior`,nextMonth:`Mes siguiente`}}},template:`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-locale" v-model="date" label="Fecha de entrega" locale="es-SV" :labels="labels" clearable />
      </div>
    `})},E={render:()=>({components:{UiInputDate:u,UiModal:f,UiButton:o},setup(){return{modal:i(null),due:i(null)}},template:`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Reschedule" size="sm">
          <template #body>
            <UiInputDate id="story-date-modal" v-model="due" label="New due date" />
          </template>
        </UiModal>
      </div>
    `})},D={render:()=>({components:{UiInputDate:u},setup(){let e=CSS.supports;return CSS.supports=(...t)=>!t[0]?.startsWith(`position-try`)&&e.apply(CSS,t),t(()=>{CSS.supports=e}),{top:i(null),bottom:i(null),rangePresets:h}},template:`
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputDate id="story-date-fallback-top" v-model="top" label="Opens below" />
        <UiInputDate id="story-date-fallback-bottom" v-model="bottom" mode="range" label="Opens above" :presets="rangePresets" />
      </div>
    `})},O=[`Default`,`RangeWithPresets`,`ButtonTrigger`,`Multiple`,`SingleWithPresets`,`WithTime`,`TimeSlots`,`RangeWithTime`,`Limits`,`Locale`,`InsideModal`,`PositionFallback`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInputDate
    },
    setup() {
      const date = ref<Date | IDateRange | null>(null);
      const summary = computed(() => describe(date.value));
      return {
        args,
        date,
        summary
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate v-bind="args" id="story-date-default" v-model="date" label="Due date" clearable />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const period = ref<Date | IDateRange | null>(rangePresets[2]!.value());
      const summary = computed(() => describe(period.value));
      return {
        period,
        summary,
        rangePresets
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputDate id="story-date-range" v-model="period" mode="range" label="Report period" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const period = ref<Date | IDateRange | null>(rangePresets[2]!.value());
      const summary = computed(() => describe(period.value));
      return {
        period,
        summary,
        rangePresets
      };
    },
    template: \`
      <div>
        <UiInputDate id="story-date-button" v-model="period" mode="range" trigger="button" label="Period" size="sm" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const days = ref<Date[]>([]);
      const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      return {
        days,
        isWeekend
      };
    },
    template: \`
      <div style="max-width: 360px;">
        <UiInputDate id="story-date-multiple" v-model="days" mode="multiple" label="Out of office" :disabled-dates="isWeekend" clearable />
        <p class="caption text-muted mt-2">v-model: {{ days.map(day => day.toDateString()).join(', ') || '[]' }}</p>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const today = new Date();
      const snooze = ref<Date | IDateRange | null>(null);
      const presets = [datePresets.tomorrow(), {
        label: 'Next Monday',
        value: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() + ((8 - today.getDay()) % 7 || 7))
      }, {
        label: 'In a month',
        value: () => new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
      }];
      const summary = computed(() => describe(snooze.value));
      return {
        snooze,
        summary,
        presets,
        today
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-snooze" v-model="snooze" label="Snooze until" :presets="presets" :min="today" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const today = new Date();
      const reminder = ref<Date | IDateRange | null>(null);
      const presets = [datePresets.today(), datePresets.tomorrow()];
      const summary = computed(() => reminder.value instanceof Date ? reminder.value.toLocaleString('en-US') : 'null');
      return {
        reminder,
        presets,
        summary,
        today
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-time" v-model="reminder" label="Remind me" time :minute-step="15" :min="today" :presets="presets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const meeting = ref<Date | IDateRange | null>(null);
      const slots = {
        step: 30,
        start: '09:00',
        end: '17:00'
      };
      const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      const isBooked = (date: Date) => [600, 780, 810].includes(date.getHours() * 60 + date.getMinutes());
      const summary = computed(() => meeting.value instanceof Date ? meeting.value.toLocaleString('en-US') : 'null');
      return {
        meeting,
        slots,
        isWeekend,
        isBooked,
        summary
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-slots" v-model="meeting" label="Meeting" :time-options="slots" :disabled-dates="isWeekend" :disabled-times="isBooked" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const period = ref<Date | IDateRange | null>(null);
      const summary = computed(() => {
        const value = period.value;
        return value && !(value instanceof Date) ? \`\${value.start?.toLocaleString('en-US') ?? '—'} → \${value.end?.toLocaleString('en-US') ?? '—'}\` : 'null';
      });
      return {
        period,
        summary,
        rangePresets
      };
    },
    template: \`
      <div>
        <UiInputDate id="story-date-range-time" v-model="period" mode="range" trigger="button" label="Period" size="sm" time :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const today = new Date();
      const min = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const max = new Date(today.getFullYear(), today.getMonth() + 2, 0);
      const weekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      const date = ref<Date | IDateRange | null>(null);
      const summary = computed(() => describe(date.value));
      return {
        min,
        max,
        weekend,
        date,
        summary
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate
          id="story-date-limits"
          v-model="date"
          label="Delivery date"
          :min="min"
          :max="max"
          :disabled-dates="weekend"
          clearable
        />
        <p class="caption text-muted mt-2">Weekdays until the end of next month. Typed weekends are rejected. · {{ summary }}</p>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      const date = ref<Date | IDateRange | null>(new Date());
      const labels = {
        toggle: 'Elegir fecha',
        clear: 'Borrar fecha',
        previousMonth: 'Mes anterior',
        nextMonth: 'Mes siguiente'
      };
      return {
        date,
        labels
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-locale" v-model="date" label="Fecha de entrega" locale="es-SV" :labels="labels" clearable />
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate,
      UiModal,
      UiButton
    },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null);
      const due = ref<Date | IDateRange | null>(null);
      return {
        modal,
        due
      };
    },
    template: \`
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Reschedule" size="sm">
          <template #body>
            <UiInputDate id="story-date-modal" v-model="due" label="New due date" />
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputDate
    },
    setup() {
      // Pretend anchor positioning is missing so the script places the popup
      const original = CSS.supports;
      const supports = (...args: string[]) => args[0]?.startsWith('position-try') ? false : (original as (...query: string[]) => boolean).apply(CSS, args);
      CSS.supports = supports as typeof CSS.supports;
      onBeforeUnmount(() => {
        CSS.supports = original;
      });
      const top = ref<Date | IDateRange | null>(null);
      const bottom = ref<Date | IDateRange | null>(null);
      return {
        top,
        bottom,
        rangePresets
      };
    },
    template: \`
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputDate id="story-date-fallback-top" v-model="top" label="Opens below" />
        <UiInputDate id="story-date-fallback-bottom" v-model="bottom" mode="range" label="Opens above" :presets="rangePresets" />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}}})))()}k();export{v as ButtonTrigger,g as Default,E as InsideModal,w as Limits,T as Locale,y as Multiple,D as PositionFallback,_ as RangeWithPresets,C as RangeWithTime,b as SingleWithPresets,S as TimeSlots,x as WithTime,O as __namedExportsOrder,m as default};