<script setup>
import logoPrimary from '../assets/logo/vector/default.svg'
import logoMono from '../assets/logo/vector/default-monochrome-white.svg'
import logoBadge from '../assets/logo/vector/isolated-layout.svg'

const palette = [
  {
    name: 'Fleet navy',
    hex: '#0B345A',
    usage: 'Primary background tone for hero, footer, and vehicle body.',
  },
  {
    name: 'Glide aqua',
    hex: '#22C4D6',
    usage: 'Icon glow, buttons, and van trim lighting.',
  },
  {
    name: 'Slogan mist',
    hex: '#36D8EA',
    usage: 'Highlights, pills, secondary callouts.',
  },
  {
    name: 'Cabinet white',
    hex: '#F8FAFC',
    usage: 'Card backgrounds and van shelving interior.',
  },
]

const logoSet = [
  { label: 'Full-colour logotype', asset: logoPrimary, bg: '#ffffff' },
  { label: 'Monochrome lockup', asset: logoMono, bg: '#0B345A' },
  { label: 'Badge layout', asset: logoBadge, bg: '#e6f9fd' },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Brand kit</p>
        <h1 class="m-0 text-3xl md:text-4xl font-bold">Official logos and palette.</h1>
        <p class="m-0 text-slate-600">Files live in `src/assets/logo/`. Use the logotype on light backgrounds and the badge for avatars.</p>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article v-for="logo in logoSet" :key="logo.label" class="p-6 border border-slate-200 bg-white flex flex-col gap-3">
          <div class="p-6 flex items-center justify-center border border-slate-200/80 bg-white" :style="{ background: logo.bg }">
            <img :src="logo.asset" :alt="logo.label" class="w-full h-auto object-contain" />
          </div>
          <p class="m-0 text-slate-600">{{ logo.label }}</p>
        </article>
      </div>
    </section>

    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 class="m-0 text-2xl font-semibold mb-6">Colour palette</h2>
        <ul class="list-none m-0 p-0 flex flex-col gap-3.5">
        <li v-for="color in palette" :key="color.hex" class="flex gap-3.5 items-center">
          <span
            class="w-12 h-12 border border-slate-200/80"
            :style="{ background: color.hex }"
          ></span>
          <div>
            <strong class="block">{{ color.name }}</strong>
            <p class="m-0.5 mt-0 text-slate-600">{{ color.hex }} · {{ color.usage }}</p>
          </div>
        </li>
        </ul>
      </div>
    </section>
  </div>
</template>
