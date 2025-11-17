<script setup>
const meetingUseCases = [
  'Board and committee packs needing pristine pads, folders, and pens',
  'Client pitch rooms that require same-day top-ups between presentations',
  'Hybrid meeting suites juggling in-room notes with couriered remote kits',
]

const topUpChecklist = [
  'Fresh pads, pens, and highlighters placed at every seat',
  'AV drawers stocked with spare HDMI adapters, batteries, and clickers',
  'Hospitality extras such as coasters, napkins, and tidy cable clips',
]

const schedulingOptions = [
  {
    label: 'Pre-meeting drop',
    description: 'We stage kits one to two hours before guests arrive so hosts focus on agendas.',
  },
  {
    label: 'Mid-day top-up',
    description: 'Multi-meeting days get lunchtime visits with new supplies and cleared waste.',
  },
  {
    label: 'After-hours top-up',
    description: 'Evening visits return rooms to expected stock levels for the next morning.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-16 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-4 mb-10">
        <p class="uppercase tracking-[0.4em] text-xs text-slate-500 m-0">What for</p>
        <h1 class="m-0 text-4xl font-bold">Meetings that feel prepared every time.</h1>
        <p class="m-0 text-slate-600 text-lg max-w-3xl">
          Executive suites, client war rooms, and pitch studios rely on us for immaculate stationery and backup tech
          supplies. We coordinate with EA teams so every room top-up mirrors the previous one.
        </p>
        <ul class="list-none p-0 m-0 flex flex-col gap-2 text-slate-700">
          <li v-for="useCase in meetingUseCases" :key="useCase" class="flex items-start">
            <span class="text-brand-cyan mr-2">•</span>
            <span>{{ useCase }}</span>
          </li>
        </ul>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-6 md:grid-cols-2">
        <article class="border border-slate-200 bg-slate-50 p-6 flex flex-col gap-3">
          <h2 class="text-2xl font-semibold m-0">Room top-up checklist</h2>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-slate-700">
            <li v-for="item in topUpChecklist" :key="item" class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
        <article class="border border-slate-200 bg-slate-50 p-6 flex flex-col gap-3">
          <h2 class="text-2xl font-semibold m-0">Scheduling options</h2>
          <div class="flex flex-col gap-3">
            <div
              v-for="option in schedulingOptions"
              :key="option.label"
              class="border border-slate-200 bg-white p-4 rounded-lg flex flex-col gap-1"
            >
              <h3 class="text-xl font-semibold m-0">{{ option.label }}</h3>
              <p class="m-0 text-slate-600">{{ option.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="w-full bg-slate-900 text-white py-16 border border-slate-800 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl font-semibold m-0">Why it matters for meetings.</h2>
          <p class="text-white/80 m-0">
            Tangible materials reinforce message clarity. We ensure every attendee, whether in-room or remote, receives
            identical stationery so notes, signatures, and annotations stay consistent.
          </p>
        </div>
        <div class="bg-white/5 border border-white/15 rounded-xl p-6 flex flex-col gap-3">
          <h3 class="text-xl font-semibold m-0 text-white">Popular meeting packs</h3>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-white/80">
            <li class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>Board packs: premium pads, fountain-safe pens, adhesive tabs, signature wallets.</span>
            </li>
            <li class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>Client pitch kits: branded notebooks, highlighters, USB drives, presentation folders.</span>
            </li>
            <li class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>Hybrid follow-ups: couriered note sets and refills for remote participants.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

