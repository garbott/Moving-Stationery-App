<script setup>
const coverageByLetter = [
  {
    letter: 'B',
    villages: ['Begbroke', 'Botley'],
  },
  {
    letter: 'C',
    villages: ['Cowley'],
  },
  {
    letter: 'H',
    villages: ['Headington'],
  },
  {
    letter: 'I',
    villages: ['Islip'],
  },
  {
    letter: 'K',
    villages: ['Kidlington'],
  },
  {
    letter: 'L',
    villages: ['Littlemore', 'Long Hanborough'],
  },
  {
    letter: 'N',
    villages: ['North Hinksey'],
  },
  {
    letter: 'O',
    villages: ['Oxford'],
  },
  {
    letter: 'T',
    villages: ['Tackley', 'Thrupp'],
  },
  {
    letter: 'W',
    villages: ['Wendlebury', 'Wolvercote', 'Woodstock'],
  },
  {
    letter: 'Y',
    villages: ['Yarnton'],
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-16 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-3 mb-12">
        <p class="uppercase tracking-[0.4em] text-sm text-slate-500 mb-0">Where do we operate</p>
        <h1 class="m-0 text-3xl md:text-4xl font-bold">Oxfordshire coverage</h1>
        <p class="m-0 text-slate-600 max-w-3xl">
          Our mobile teams run daily and weekly loops across every corner of Oxfordshire. Villages, market towns, and
          rural estates appear in this A–Z roster so you can quickly confirm coverage before requesting a fleet visit.
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article
          v-for="group in coverageByLetter"
          :key="group.letter"
          class="border border-slate-200 bg-slate-50 p-6 flex flex-col gap-3"
        >
          <h2 class="text-xl font-semibold m-0 tracking-wide text-slate-900">{{ group.letter }}</h2>
          <ul class="list-none p-0 m-0 flex flex-col gap-2 text-slate-700">
            <li v-for="village in group.villages" :key="village" class="flex items-start">
              <span class="text-brand-cyan mr-2">•</span>
              <span>{{ village }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

