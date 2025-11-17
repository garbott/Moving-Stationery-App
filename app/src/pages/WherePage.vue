<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-16 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-3 mb-12">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Coverage</p>
        <h1 class="m-0 text-3xl md:text-4xl font-bold">Where We Operate</h1>
        <p class="m-0 text-slate-600 max-w-3xl">
          Moving Stationery delivers mobile stationery services across Oxfordshire and the Thames Valley. Our fleet
          covers villages, market towns, and rural estates throughout the county.
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RouterLink
            to="/where/oxfordshire"
            class="group border border-slate-200 bg-slate-50 p-8 rounded-2xl hover:border-brand-cyan hover:shadow-md transition-all flex flex-col gap-4"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-semibold m-0">Oxfordshire</h2>
              <span class="text-brand-cyan group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p class="text-slate-600 m-0">
              Complete coverage across Oxfordshire including Oxford, Banbury, Bicester, Abingdon, Witney, and hundreds
              of villages throughout the county.
            </p>
            <ul class="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Daily and weekly route loops</li>
              <li>Village and rural estate coverage</li>
              <li>Market town service hubs</li>
            </ul>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

