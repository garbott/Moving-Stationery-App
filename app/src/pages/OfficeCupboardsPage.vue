<script setup>
const cupboardNeeds = [
  'Open-plan cupboards that burn through pens, pads, and sticky notes every week',
  'Print rooms needing a rolling supply of inks, toners, and heavyweight paper',
  'Neighbourhood touchdown hubs that share one storage wall for multiple teams',
]

const visitFlow = [
  {
    step: '01',
    title: 'Audit every shelf',
    detail: 'We map each cupboard bay, label dividers, and log preferred brands.',
  },
  {
    step: '02',
    title: 'Load matched kits',
    detail: 'Fleet vans leave the depot with pre-counted refill cases per cupboard.',
  },
  {
    step: '03',
    title: 'Restock + confirm',
    detail: 'Merchandisers fold, face, and count stock, then upload signed checklists.',
  },
]

const featuredSupplies = [
  'Premium writing kits (gel pens, fountain-safe refills, mechanical pencils)',
  'Paper ranges from recycled copier to heavyweight presentation boards',
  'Organisation extras: magazine files, binder tabs, wallets, and tape systems',
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-16 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div class="flex flex-col gap-4">
          <p class="uppercase tracking-[0.4em] text-xs text-slate-500 m-0">What for</p>
          <h1 class="m-0 text-4xl font-bold">Office cupboards that never run dry.</h1>
          <p class="m-0 text-slate-600 text-lg">
            We maintain floor-by-floor stationery cupboards so facilities teams can skip emergency top-ups. Each visit
            is logged against your purchasing instance to keep finance, ops, and assistants aligned.
          </p>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-slate-700">
            <li v-for="need in cupboardNeeds" :key="need" class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>{{ need }}</span>
            </li>
          </ul>
        </div>
        <div class="border border-slate-200 bg-slate-50 p-6 flex flex-col gap-4">
          <h2 class="text-xl font-semibold m-0">Featured supplies</h2>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-slate-700">
            <li v-for="item in featuredSupplies" :key="item" class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="w-full bg-slate-900 text-white py-16 border border-slate-800 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="uppercase tracking-[0.4em] text-xs text-white/60 m-0">How it works</p>
          <h2 class="m-0 text-3xl font-semibold">Cabinet-by-cabinet precision.</h2>
          <p class="m-0 text-white/80">
            Every visit follows the same tidy sequence so the cupboards look identical no matter who unlocks them next.
          </p>
        </div>
        <ol class="list-none p-0 m-0 grid gap-4 md:grid-cols-3">
          <li
            v-for="step in visitFlow"
            :key="step.title"
            class="bg-white/5 border border-white/15 rounded-xl p-5 flex flex-col gap-2"
          >
            <span class="text-sm uppercase tracking-[0.3em] text-white/60">{{ step.step }}</span>
            <h3 class="text-xl font-semibold m-0 text-white">{{ step.title }}</h3>
            <p class="text-white/80 m-0">{{ step.detail }}</p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

