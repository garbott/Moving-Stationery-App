<script setup>
const services = [
  {
    title: 'Corporate restock routes',
    description:
      'Standing appointments keep HQ floors, libraries, and collaboration zones stocked with no admin drain.',
    highlights: [
      'Inventory templates per floor',
      'Signed digital checklist on delivery',
      'Usage reporting for finance',
    ],
  },
  {
    title: 'Home office rescue',
    description:
      'Rapid-response vans deliver curated kits to remote employees so teams stay deadline ready.',
    highlights: [
      'Compact vehicles for residential streets',
      'Eco-packaging + refill options',
      'After-hours support window',
    ],
  },
  {
    title: 'Event + pop-up supply',
    description:
      'Temporary kiosks with on-hand notebooks, pads, tape, and pens for workshops, off-sites, and training days.',
    highlights: [
      'Portable staple kits (pens, Post-its, tape)',
      'Display-ready notebook + clipboards',
      'Signage and flipchart replenishment',
    ],
  },
]

const fleetHighlights = [
  {
    label: 'Climate-controlled shelving',
    description: 'Paper and specialty inks stay pristine regardless of weather.',
  },
  {
    label: 'Live inventory syncing',
    description: 'Every van reports exact levels to your instance portal.',
  },
  {
    label: 'Quiet electrified fleet',
    description: 'Low-disruption visits for both corporate and residential settings.',
  },
]

const bookingSteps = [
  {
    title: 'Plan the visit',
    detail: 'Share your priority items, location, and access needs via portal or call.',
  },
  {
    title: 'Tailor the loadout',
    detail: 'Merchandisers curate shelves based on your templates and seasonal spikes.',
  },
  {
    title: 'Arrive + replenish',
    detail: 'We restock neatly, remove empties, and capture approvals on tablet.',
  },
  {
    title: 'Review insights',
    detail: 'Usage dashboards surface trends before supplies run low again.',
  },
]

const inventoryHighlights = [
  {
    title: 'Daily essentials',
    items: ['Papers up to A0', 'Writing instruments', 'Desk organization'],
  },
  {
    title: 'Creative kits',
    items: ['Presentation boards', 'Custom embossing', 'Workshop giveaways'],
  },
  {
    title: 'Sustainability swaps',
    items: ['Refill schemes', 'Zero-waste deliveries', 'Certified recycled ranges'],
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Services</p>
        <h1 class="m-0 text-3xl md:text-4xl lg:text-5xl font-bold">Mobile stationery for every type of workspace.</h1>
        <p class="m-0 text-slate-600">
          Pick the visit type that fits your team. Every service includes restock verification,
          and clean reporting.
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article v-for="service in services" :key="service.title" class="p-6 border border-slate-200 bg-white flex flex-col gap-3">
          <h3 class="m-0 text-xl font-semibold">{{ service.title }}</h3>
          <p class="m-0 text-slate-600">{{ service.description }}</p>
          <ul class="list-none p-0 m-0 flex flex-col gap-1.5 text-slate-600">
            <li v-for="highlight in service.highlights" :key="highlight" class="flex items-start">
              <span class="text-sky-500 mr-2">•</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Fleet + tech</p>
        <h2 class="m-0 text-3xl md:text-4xl font-bold">Designed for tidy, traceable restocks.</h2>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article v-for="highlight in fleetHighlights" :key="highlight.label" class="p-6 border border-slate-200 bg-white/85 flex flex-col gap-3">
          <h3 class="m-0 text-xl font-semibold">{{ highlight.label }}</h3>
          <p class="m-0 text-slate-600">{{ highlight.description }}</p>
        </article>
      </div>
    </section>

    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Process</p>
        <h2 class="m-0 text-3xl md:text-4xl font-bold">Four steps from brief to replenished shelves.</h2>
      </div>
      <ol class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 list-none m-0 p-0 flex flex-col gap-4">
        <li v-for="(step, index) in bookingSteps" :key="step.title" class="flex gap-4 p-5 border border-slate-200 bg-slate-50">
          <span class="w-10 h-10 rounded-lg bg-sky-500 text-white font-bold inline-flex items-center justify-center flex-shrink-0">
            {{ index + 1 }}
          </span>
          <div>
            <h3 class="m-0 text-xl font-semibold">{{ step.title }}</h3>
            <p class="m-0 text-slate-600">{{ step.detail }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="w-full bg-slate-900 text-white py-10 border border-slate-700 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-400 mb-0">Inventory focus</p>
        <h2 class="m-0 text-3xl md:text-4xl font-bold">Curated assortments for every workspace.</h2>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article v-for="group in inventoryHighlights" :key="group.title" class="p-6 border border-slate-700/50 bg-slate-900/60 flex flex-col gap-3">
          <h3 class="m-0 text-xl font-semibold">{{ group.title }}</h3>
          <ul class="list-none p-0 m-0 flex flex-col gap-1.5 text-slate-300">
            <li v-for="item in group.items" :key="item" class="flex items-start">
              <span class="text-sky-400 mr-2">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
