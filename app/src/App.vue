<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logoWordmark from './assets/logo/vector/default-monochrome-white.svg'
import logoFooter from './assets/logo/vector/default-monochrome-white.svg'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header class="bg-brand-blue text-slate-50 w-full px-4 md:px-8 lg:px-16 py-5 shadow-md">
      <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <RouterLink to="/" class="flex items-center text-inherit">
          <img :src="logoWordmark" alt="Moving Stationery wordmark" class="h-8 w-auto block" />
        </RouterLink>
        <nav class="flex flex-wrap gap-3">
          <RouterLink
            to="/services"
            class="text-slate-50/85 font-semibold px-3.5 py-2.5 rounded-full transition-colors hover:bg-brand-cyan/15 hover:text-white"
            active-class="bg-brand-cyan/15 text-white"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/products"
            class="text-slate-50/85 font-semibold px-3.5 py-2.5 rounded-full transition-colors hover:bg-brand-cyan/15 hover:text-white"
            active-class="bg-brand-cyan/15 text-white"
          >
            Products
          </RouterLink>
          <RouterLink
            to="/where"
            class="text-slate-50/85 font-semibold px-3.5 py-2.5 rounded-full transition-colors hover:bg-brand-cyan/15 hover:text-white"
            active-class="bg-brand-cyan/15 text-white"
          >
            Where we operate
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-slate-50/85 font-semibold px-3.5 py-2.5 rounded-full transition-colors hover:bg-brand-cyan/15 hover:text-white"
            active-class="bg-brand-cyan/15 text-white"
          >
            Contact
          </RouterLink>
          <RouterLink
            to="/"
            class="bg-brand-cyan text-brand-dark font-semibold px-3.5 py-2.5 rounded-full transition-colors hover:bg-brand-cyan-light"
          >
            Book fleet
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1 flex flex-col">
      <RouterView />
    </main>

    <footer class="bg-brand-dark text-slate-50/85 w-full px-4 md:px-8 lg:px-16 py-10">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div class="flex flex-col gap-3 items-start lg:col-span-2">
            <img :src="logoFooter" alt="Moving Stationery wordmark" class="h-20 w-auto" />
            <p class="text-sm">Mobile stationery vans supplying workplaces and homes across Oxfordshire.</p>
          </div>
          <div class="flex flex-col gap-1.5 min-w-0">
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2">Explore</h4>
            <RouterLink to="/" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Home</RouterLink>
            <RouterLink to="/services" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Services</RouterLink>
          <RouterLink to="/products" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Products</RouterLink>
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2 mt-4">Compliance</h4>
            <RouterLink to="/terms" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Terms</RouterLink>
            <RouterLink to="/gdpr" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">GDPR</RouterLink>
          </div>
          <div class="flex flex-col gap-1.5 min-w-0">
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2">Where</h4>
            <RouterLink to="/where/oxfordshire" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">
              Oxfordshire
            </RouterLink>
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2 mt-4">Support</h4>
            <RouterLink to="/contact" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Contact</RouterLink>
            <RouterLink to="/cookies" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Cookies</RouterLink>
            <RouterLink to="/privacy" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Privacy</RouterLink>
            <RouterLink to="/refunds" class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors">Refunds</RouterLink>
          </div>
          <div class="flex flex-col gap-2 min-w-0">
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2">What for</h4>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/what-for/office-cupboards"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Office cupboards
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">Shared cupboards that need tidy, predictable refills.</p>
            </div>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/what-for/workshops"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Workshops
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">Hands-on sessions needing nonstop creative supplies.</p>
            </div>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/what-for/meetings"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Meetings
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">Board, pitch, and hybrid rooms requiring polished setups.</p>
            </div>
            <RouterLink
              to="/what-for"
              class="text-brand-cyan-light font-semibold hover:text-white transition-colors mt-2"
            >
              View more
            </RouterLink>
          </div>
          <div class="flex flex-col gap-2 min-w-0">
            <h4 class="text-sm uppercase tracking-wide text-slate-50/70 mb-2">Who for</h4>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/who/home-offices"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Home offices
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">
                Solo founders to exec teams who need curated desk packs without clutter or missed counts.
              </p>
            </div>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/who/charities"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Charities
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">
                Programmes that rely on transparent, instance-split reporting for every funded site.
              </p>
            </div>
            <div class="flex flex-col gap-0.5">
              <RouterLink
                to="/who/corporate-offices"
                class="text-slate-50/85 font-medium hover:text-brand-cyan-light transition-colors"
              >
                Corporate offices
              </RouterLink>
              <p class="text-xs text-slate-400 m-0">
                Campus floors expecting concierge-style trolley runs and airtight inventory histories.
              </p>
            </div>
            <RouterLink
              to="/who-for"
              class="text-brand-cyan-light font-semibold hover:text-white transition-colors mt-2"
            >
              View more
            </RouterLink>
          </div>
        </div>
        <div class="pt-6 border-t border-slate-700 text-xs text-slate-400 text-center leading-relaxed">
          <p>Copyright © 2025 Garbott Ltd trading as Mobile Stationery. All Rights Reserved.</p>
          <p>
            13a Bankside, Kidlington, Oxford, OX5 1JE · Company registration number: 09884819 · VAT No.
            GB 242827993
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
