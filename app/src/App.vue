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
            <RouterLink to="/" class="flex items-center text-inherit">
              <img :src="logoFooter" alt="Moving Stationery wordmark" class="h-20 w-auto" />
            </RouterLink>
            <p class="text-sm">Mobile stationery vans supplying workplaces and homes across Oxfordshire.</p>
            <div class="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/company/moving-stationery/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-50/85 hover:text-brand-cyan-light transition-colors"
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/movingstationeryuk/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-50/85 hover:text-brand-cyan-light transition-colors"
                aria-label="Facebook"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
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
