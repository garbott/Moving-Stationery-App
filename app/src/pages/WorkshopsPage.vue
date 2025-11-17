<script setup>
const workshopScenarios = [
  'Innovation sprints and hack days needing continuous refills of sticky notes and markers',
  'Training academies that rotate teams through maker spaces every hour',
  'Pop-up craft or STEM workshops where facilitators juggle multiple breakout tables',
]

const kitHighlights = [
  {
    title: 'Room-ready trays',
    detail: 'Numbered trays carry the same pens, pads, timers, dots, and adhesives so every table starts equal.',
  },
  {
    title: 'Breakout sweeps',
    detail: 'Fleet merchandisers circulate mid-session, clearing scraps and refilling materials without disruption.',
  },
  {
    title: 'Evening top-ups',
    detail: 'Overnight visits bring fresh charts, wipes, and cable ties so morning cohorts start stocked.',
  },
]

const inventoryBlocks = [
  {
    heading: 'Facilitation essentials',
    items: ['Flipchart pads + easels', 'Dry-erase sets with wipes', 'Workshop timers and buzzers', 'Voting dots + cards'],
  },
  {
    heading: 'Hands-on extras',
    items: ['Tactile prototyping kits', 'Craft knives + cutting mats', 'Reusable display boards', 'Label printers + tape'],
  },
  {
    heading: 'Hospitality touches',
    items: ['Signage packs', 'Table numbering kits', 'Sanitiser and wipe stations', 'Cable management clips'],
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-16 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-4 mb-6">
        <p class="uppercase tracking-[0.4em] text-xs text-slate-500 m-0">What for</p>
        <h1 class="m-0 text-4xl font-bold">Workshops kept stocked between every breakout.</h1>
        <p class="m-0 text-slate-600 text-lg max-w-3xl">
          Conference centres, makerspaces, and learning studios rely on us to keep creative energy high. We choreograph
          van drops around agendas so facilitators stay focused on participants instead of supplies.
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-6 md:grid-cols-3">
        <article
          v-for="highlight in kitHighlights"
          :key="highlight.title"
          class="border border-slate-200 bg-slate-50 p-6 flex flex-col gap-2"
        >
          <h2 class="text-xl font-semibold m-0">{{ highlight.title }}</h2>
          <p class="m-0 text-slate-700">{{ highlight.detail }}</p>
        </article>
      </div>
    </section>

    <section class="w-full bg-slate-900 text-white py-16 border border-slate-800 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl font-semibold m-0">Typical workshop moments we cover.</h2>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-white/80">
            <li v-for="scenario in workshopScenarios" :key="scenario" class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>{{ scenario }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-white/5 border border-white/15 rounded-xl p-6 flex flex-col gap-3">
          <h3 class="text-xl font-semibold m-0 text-white">Inventory playlists</h3>
          <p class="text-white/70 m-0">
            Choose the blocks you need and we tailor the delivery cadence around your event calendar.
          </p>
          <div class="grid gap-4">
            <div
              v-for="block in inventoryBlocks"
              :key="block.heading"
              class="border border-white/15 rounded-lg p-4 flex flex-col gap-2"
            >
              <h4 class="text-lg font-semibold m-0">{{ block.heading }}</h4>
              <ul class="list-none p-0 m-0 flex flex-col gap-1.5 text-white/80">
                <li v-for="item in block.items" :key="item" class="flex items-start">
                  <span class="text-brand-cyan mr-2">•</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

