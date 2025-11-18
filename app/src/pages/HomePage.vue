<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const heroStats = [
  { label: 'Oxfordshire routes', value: '12 active' },
  { label: 'Workspaces restocked', value: '480+' },
  { label: 'Avg. response time', value: '3h' },
]

const serviceHighlights = [
  {
    title: 'Mobile supply suite',
    copy: 'Rolling cabinets stocked with essentials, premium pens, and filing supplies sized for HQ floors.',
  },
  {
    title: 'Smart demand sensing',
    copy: 'Usage telemetry spots trends so we dispatch the closest van before teams even notice shortages.',
  },
  {
    title: 'Instance-safe logistics',
    copy: 'Each organisation’s instance isolates data, routes, and inventory to prevent cross-pollination.',
  },
]

const emergencyOptions = [
  {
    label: 'Paper reams',
    detail: 'A4, letter, and recycled stock by the case',
    cta: 'Paper',
  },
  {
    label: 'Ink + toner',
    detail: 'HP, Canon, and Epson cartridges ready to roll',
    cta: 'Ink',
  },
  {
    label: 'Premium pens',
    detail: 'Gel, rollerball, and archival pens in bulk',
    cta: 'Pens',
  },
]

const operations = [
  {
    step: '01',
    title: 'Plan the visit',
    detail: 'Tell us which teams, cupboards, or home offices need attention along with any must-have items.',
  },
  {
    step: '02',
    title: 'Load the van',
    detail: 'We pack everyday essentials — paper, pens, filing supplies, sticky notes — matched to your templates.',
  },
  {
    step: '03',
    title: 'Restock neatly',
    detail: 'Our mobile merchandisers arrive on time, refill shelves, and remove empties.',
  },
  {
    step: '04',
    title: 'Confirm + repeat',
    detail: 'You receive a simple checklist of what was delivered plus the next suggested visit window.',
  },
]

const trustedOrgs = ['Thames Labs', 'OxGrow', 'Paperhaus', 'NeoCo Working']

const selectedEmergency = ref(emergencyOptions[0].cta)

const waitingListForm = ref({
  email: '',
  postcode: '',
})
</script>

<template>
  <div class="flex flex-col gap-12 w-full">
    <section class="w-full bg-slate-950 text-white rounded-none relative overflow-hidden py-14">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed8_0%,transparent_55%)] opacity-60 pointer-events-none"></div>
      <div class="relative max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
        <div class="flex flex-col gap-6">
          <p class="uppercase tracking-[0.3em] text-xs text-white/60">Moving Stationery · Oxfordshire</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Restocking before the cupboards run dry.
          </h1>
          <p class="text-lg text-white/80 max-w-2xl">
            We operate a network of mobile supply suites, staging curated kits for corporate HQs, co-working floors,
            and home offices across the county. Live instance routing keeps every delivery in sync with your
            purchasing policies.
          </p>
          <div class="flex flex-wrap gap-4">
            <RouterLink to="/contact" class="inline-flex">
              <span class="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg shadow-indigo-500/30">
                Book a fleet visit
              </span>
            </RouterLink>
            <RouterLink to="/services" class="inline-flex">
              <span class="px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10">
                Explore routes
              </span>
            </RouterLink>
          </div>
          <dl class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <dt class="text-sm uppercase tracking-widest text-white/50 mb-1">{{ stat.label }}</dt>
              <dd class="text-2xl font-semibold m-0">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
        <div class="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md flex flex-col gap-6">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-1">
              <p class="text-sm uppercase tracking-widest text-white/60 m-0">Priority response</p>
              <p class="text-2xl font-semibold m-0">Emergency restock</p>
              <p class="text-white/70 text-sm m-0">
                Pick paper, ink, or pens and we dispatch the closest van to refill now.
              </p>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-100 text-sm whitespace-nowrap">
              90 min SLA
            </span>
          </div>
          <div class="space-y-4">
            <p class="text-sm text-white/60 uppercase tracking-[0.3em] m-0">What do you need?</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                v-for="option in emergencyOptions"
                :key="option.cta"
                type="button"
                class="text-left p-4 border rounded-lg transition-colors flex flex-col gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                :class="selectedEmergency === option.cta ? 'bg-white text-slate-900 border-white/80' : 'bg-white/5 border-white/15 hover:bg-white/10 text-white'"
                @click="selectedEmergency = option.cta"
                :aria-pressed="selectedEmergency === option.cta"
              >
                <span class="font-semibold">{{ option.cta }}</span>
                <span class="text-sm" :class="selectedEmergency === option.cta ? 'text-slate-600' : 'text-white/70'">
                  {{ option.label }}
                </span>
                <span class="text-xs" :class="selectedEmergency === option.cta ? 'text-slate-500' : 'text-white/60'">
                  {{ option.detail }}
                </span>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              type="button"
              class="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg shadow-white/20"
            >
              Book visit
            </button>
            <button
              type="button"
              class="px-5 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Pay & dispatch
            </button>
          </div>
          <div class="space-y-3">
            <p class="text-sm text-white/60 uppercase tracking-[0.3em] m-0">Trusted by</p>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="org in trustedOrgs"
                :key="org"
                class="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
              >
                {{ org }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full bg-white border border-slate-200 shadow-sm py-12">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-3 mb-8">
        <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Why Moving Stationery</p>
        <h2 class="text-3xl md:text-4xl font-semibold m-0">Ops-grade stationery logistics.</h2>
        <p class="text-slate-600 m-0 max-w-2xl">
          Built for office managers who want the reliability of a warehouse, the flexibility of a field team, and the
          polish of a boutique provider.
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="item in serviceHighlights"
          :key="item.title"
          class="p-6 border border-slate-200 bg-white flex flex-col gap-3 hover:border-slate-900/10 transition-colors"
        >
          <div class="h-10 w-10 rounded-full bg-slate-900/90 text-white inline-flex items-center justify-center font-semibold">
            {{ item.title.slice(0, 1) }}
          </div>
          <h3 class="text-xl font-semibold m-0">{{ item.title }}</h3>
          <p class="text-slate-600 m-0">{{ item.copy }}</p>
        </article>
      </div>
    </section>

    <section class="w-full py-12 bg-slate-900 text-white">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.4em] text-white/60">How it works</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Simple every-day restocks.</h2>
          <p class="text-white/80 m-0">
            We are a mobile stationery business that keeps teams stocked with everyday office supplies.
            Here is how the four-step visit feels from your side.
          </p>
        </div>
        <ol class="space-y-4 m-0">
          <li
            v-for="op in operations"
            :key="op.title"
            class="flex gap-4 bg-white/5 border border-white/15 p-5 rounded-lg backdrop-blur-sm"
          >
            <span class="text-lg font-semibold text-white/60 w-10">{{ op.step }}</span>
            <div>
              <h3 class="text-xl font-semibold m-0">{{ op.title }}</h3>
              <p class="text-white/80 m-0">{{ op.detail }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="w-full bg-white border-t border-slate-200 py-12">
      <div class="w-full px-6 sm:px-10 lg:px-16">
        <div class="flex flex-col gap-4 mb-6">
          <h2 class="text-2xl md:text-3xl font-semibold m-0">Join the waiting list</h2>
          <p class="text-slate-600 m-0">
            Be the first to know when we expand to your area. Enter your email and postcode to join our waiting list.
          </p>
        </div>
        <form
          @submit.prevent="() => {}"
          class="w-full flex flex-col sm:flex-row gap-4"
        >
          <input
            v-model="waitingListForm.email"
            type="email"
            name="email"
            placeholder="Email address"
            required
            class="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-base font-normal bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
          <input
            v-model="waitingListForm.postcode"
            type="text"
            name="postcode"
            placeholder="Postcode"
            required
            class="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-base font-normal bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
          <button
            type="submit"
            class="px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 whitespace-nowrap"
          >
            Join waiting list
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
