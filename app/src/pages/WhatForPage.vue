<script setup>
import { RouterLink } from 'vue-router'

const landingAreas = [
  {
    route: '/what-for/office-cupboards',
    eyebrow: 'HQ + campus floors',
    title: 'Office cupboards',
    summary:
      'Neatly labelled cupboards that need predictable refills, tidy presentation, and transparent counts per purchasing instance.',
    details: ['Shelf-by-shelf audits logged in your instance', 'Rolling refill kits matched to each divider'],
  },
  {
    route: '/what-for/workshops',
    eyebrow: 'Studios + labs',
    title: 'Workshops',
    summary:
      'Hands-on sessions and maker tables that burn through markers, adhesives, craft stock, and prototyping supplies every hour.',
    details: ['Creative packs picked per agenda', 'Rapid replenishment between back-to-back sessions'],
  },
  {
    route: '/what-for/meetings',
    eyebrow: 'Boards + pitches',
    title: 'Meetings',
    summary:
      'Board, pitch, and hybrid meeting rooms that demand flawless presentation and instant backup supplies for every seat.',
    details: ['Polished setups with premium writing kits', 'Hybrid-friendly layouts with spare tech accessories'],
  },
]

const planningSteps = [
  {
    step: '01',
    title: 'Define the instances',
    detail: 'Each organisation, campus, or programme runs in its own instance so replenishment data never overlaps.',
  },
  {
    step: '02',
    title: 'Agree the refill rhythms',
    detail: 'We map cupboards, rooms, and workshop benches, then layer in cadence rules and escalation triggers.',
  },
  {
    step: '03',
    title: 'Send the rolling fleet',
    detail: 'Stock is pre-counted, vans are assigned, and photos plus checklists upload back into the right instance.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-12 w-full">
    <section class="w-full bg-slate-950 text-white py-16 border border-slate-900 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div class="flex flex-col gap-5">
          <p class="uppercase tracking-[0.35em] text-xs text-white/60 m-0">What for</p>
          <h1 class="m-0 text-4xl md:text-5xl font-semibold leading-tight">Spot the use case that fits.</h1>
          <p class="m-0 text-white/80 text-lg">
            This page exists for SEO and marketing so facilities, events, and ops teams can instantly see how mobile
            stationery replenishment solves their scenario. Each card jumps to a deeper story with checklists, featured
            kits, and instance-safe reporting.
          </p>
          <p class="m-0 text-white/70">
            If you are scoping a new programme, start here to understand how we partition stock, create curb-to-cupboard
            plans, and keep every activity tied to the right instance.
          </p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <p class="text-sm uppercase tracking-[0.3em] text-white/60 m-0">Need another angle?</p>
          <h2 class="text-2xl font-semibold m-0">We can publish a tailored story.</h2>
          <p class="text-white/80 m-0">
            Tell us about your archive rooms, pop-up study hubs, or hybrid deployments and we will craft a dedicated
            "What for" walkthrough with instance mapping built in.
          </p>
          <RouterLink
            to="/contact"
            class="inline-flex mt-2 px-6 py-3 rounded-full bg-brand-cyan text-brand-dark font-semibold hover:bg-brand-cyan-light transition-colors"
          >
            Book a scoping call
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-white border border-slate-200 shadow-sm py-14">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500 m-0">Use-case grid</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Match the "What for" to your space.</h2>
          <p class="text-slate-600 m-0 max-w-3xl">
            Every option below links to a full story with supply lists, logistics notes, and measurable outcomes—never
            truncated, always detailed.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="area in landingAreas"
            :key="area.route"
            :to="area.route"
            class="group border border-slate-200 bg-white p-6 flex flex-col gap-4 hover:border-slate-900/20 hover:shadow-lg transition-all"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase tracking-[0.35em] text-slate-400">{{ area.eyebrow }}</span>
              <span class="text-sm font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">Go</span>
            </div>
            <div>
              <h3 class="text-2xl font-semibold m-0 text-slate-900">{{ area.title }}</h3>
              <p class="text-slate-600 m-0 mt-1">{{ area.summary }}</p>
            </div>
            <ul class="list-none p-0 m-0 flex flex-col gap-1.5 text-slate-700">
              <li v-for="detail in area.details" :key="detail" class="flex items-start gap-2">
                <span class="text-brand-cyan text-lg leading-none">•</span>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-slate-900 text-white py-14 border border-slate-800 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-white/60 m-0">How we scope</p>
          <h2 class="text-3xl font-semibold m-0">Instance-first planning.</h2>
          <p class="text-white/75 m-0 max-w-3xl">
            Every use case is underpinned by the same three-step planning framework, making it easy to reuse the grid for
            other programmes without ever mixing instances or activities.
          </p>
        </div>
        <ol class="grid gap-4 md:grid-cols-3 list-none p-0 m-0">
          <li
            v-for="step in planningSteps"
            :key="step.title"
            class="bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col gap-3"
          >
            <span class="text-sm uppercase tracking-[0.35em] text-white/60">{{ step.step }}</span>
            <h3 class="text-xl font-semibold m-0 text-white">{{ step.title }}</h3>
            <p class="text-white/80 m-0">{{ step.detail }}</p>
          </li>
        </ol>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
          <h3 class="text-2xl font-semibold m-0 text-white">Need multiple stories at once?</h3>
          <p class="text-white/80 m-0">
            We can spin up a full suite of "What for" routes aligned to your organisational structure so activities stay
            collated without cross-pollinating inventory or reporting streams.
          </p>
          <RouterLink
            to="/contact"
            class="inline-flex px-5 py-2.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Talk to the routing desk
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>


