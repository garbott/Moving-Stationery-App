<script setup>
import { RouterLink } from 'vue-router'

const audienceStories = [
  {
    anchor: 'home-offices',
    route: '/who/home-offices',
    eyebrow: 'Remote plays',
    title: 'Home offices',
    summary:
      'Executive assistants and hybrid teams who need curated desk packs, cable kits, and stock that nests neatly inside every shelf without spill-over.',
  },
  {
    anchor: 'charities',
    route: '/who/charities',
    eyebrow: 'Programmes + hubs',
    title: 'Charities',
    summary:
      'Volunteer centres and programme offices that must prove every refill per funding instance, with full transparency and calm logistics.',
  },
  {
    anchor: 'corporate-offices',
    route: '/who/corporate-offices',
    eyebrow: 'Campus floors',
    title: 'Corporate offices',
    summary:
      'HQ corridors, meeting suites, and print bays that expect concierge-style trolley runs plus airtight inventory history inside each instance.',
  },
  {
    anchor: 'coworking-floors',
    route: '/who/coworking-floors',
    eyebrow: 'Shared space ops',
    title: 'Co-working floors',
    summary:
      'Operators juggling rotating members, hot desks, and touchdown bars who need scheduled top-ups without breaking the vibe.',
  },
  {
    anchor: 'events-workshops',
    route: '/who/events-workshops',
    eyebrow: 'Pop-up teams',
    title: 'Events & workshops',
    summary:
      'Innovation labs, offsites, and sprints that burn through whiteboard supplies and require rapid resets between segments.',
  },
  {
    anchor: 'education-labs',
    route: '/who/education-labs',
    eyebrow: 'Learning suites',
    title: 'Education & labs',
    summary:
      'STEM labs and studio classrooms that rely on specialist stationery, labelled totes, and audit trails for safeguarding.',
  },
  {
    anchor: 'finance',
    route: '/who/finance',
    eyebrow: 'Regulated desks',
    title: 'Finance',
    summary:
      'Trading and treasury floors that want premium materials, sealed spares, and recordings of every swap for compliance.',
  },
  {
    anchor: 'agriculture',
    route: '/who/agriculture',
    eyebrow: 'Field teams',
    title: 'Agriculture',
    summary:
      'Rural offices and packhouses that need rugged supplies, weather-ready tote plans, and predictable visit cadence.',
  },
]

const instancePillars = [
  {
    step: '01',
    title: 'Partition every instance',
    detail:
      'Activities and programmes are collated under their own instance so data, approvals, and billing never cross-pollinate organisations.',
  },
  {
    step: '02',
    title: 'Design the playbooks',
    detail:
      'We map routes, cupboards, and drawer layouts, then publish the exact refill scripts and escalation paths for each instance.',
  },
  {
    step: '03',
    title: 'Report without gaps',
    detail:
      'Each visit uploads photos, quantities, and signatures back into the matching instance, giving stakeholders immediate proof of service.',
  },
]

const businessTiers = [
  {
    anchor: 'micro-businesses',
    title: 'Micro businesses',
    summary:
      'Owner-operators and two-person shops that need compact refills, courier-friendly kits, and spend tracking tied to their single instance.',
    details: ['Fits inside rolling crates or bike deliveries', 'Colour-coded packs per service line', 'Digital checklists sent after every visit'],
  },
  {
    anchor: 'small-businesses',
    title: 'Small businesses',
    summary:
      'Studios, boutiques, and agencies with 5–25 people that require recurring shelf resets without taking a manager off client work.',
    details: ['Bi-weekly or monthly cadence options', 'Shared cupboards labelled per department', 'Instance reports ready for directors'],
  },
  {
    anchor: 'medium-businesses',
    title: 'Medium businesses',
    summary:
      'Growing organisations that span multiple floors or sites and need pallet-friendly drops, escalation SLAs, and procurement-grade audit trails.',
    details: ['Multi-stop fleet plans with dock coordination', 'Escalation rules for urgent top-ups', 'Photo logs and signatures per location'],
  },
]

const tradesList = [
  {
    title: 'Plasterers and dryliners',
    route: '/who/plasterers',
  },
  {
    title: 'Painters and decorators',
    route: '/who/painters',
  },
  {
    title: 'Property maintenance crews',
    route: '/who/property-maintenance',
  },
  {
    title: 'Electricians',
    route: '/who/electricians',
  },
  {
    title: 'Joiners and carpenters',
    route: '/who/joiners',
  },
  {
    title: 'HVAC and mechanical teams',
    route: '/who/hvac',
  },
  {
    title: 'General contractors',
    route: '/who/general-contractors',
  },
]

const professionalServices = [
  {
    title: 'Web development agencies',
    route: '/who/web-development',
  },
  {
    title: 'Bookkeepers',
    route: '/who/bookkeepers',
  },
  {
    title: 'Accountants',
    route: '/who/accountants',
  },
  {
    title: 'Solicitors and legal practices',
    route: '/who/solicitors',
  },
  {
    title: 'Consultancies',
    route: '/who/consultancies',
  },
  {
    title: 'Marketing and PR shops',
    route: '/who/marketing-pr',
  },
]
</script>

<template>
  <div class="flex flex-col gap-12 w-full">
    <section class="w-full bg-slate-950 text-white py-16 border border-slate-900 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div class="flex flex-col gap-5">
          <p class="uppercase tracking-[0.35em] text-xs text-white/60 m-0">Who for</p>
          <h1 class="m-0 text-4xl md:text-5xl font-semibold leading-tight">Pinpoint the audience we serve.</h1>
          <p class="m-0 text-white/80 text-lg">
            This hub keeps every buyer and operator persona in one place. Whether you manage a corporate campus or a charity
            programme, you can jump straight to the detailed story that mirrors your instance.
          </p>
          <p class="m-0 text-white/70">
            Nothing is truncated or generic; each link explains how the fleet arrives, how consumables are counted, and how
            we keep your activities pinned to the right organisation.
          </p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <p class="text-sm uppercase tracking-[0.3em] text-white/60 m-0">Need a new profile?</p>
          <h2 class="text-2xl font-semibold m-0">Ask for a fresh "Who for" page.</h2>
          <p class="text-white/80 m-0">
            Tell us about your instance—whether it is a venture studio, civic programme, or seasonal campaign—and we will
            publish a dedicated walkthrough with the right safeguards.
          </p>
          <RouterLink
            to="/contact"
            class="inline-flex mt-2 px-6 py-3 rounded-full bg-brand-cyan text-brand-dark font-semibold hover:bg-brand-cyan-light transition-colors"
          >
            Book a planning call
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-white border border-slate-200 shadow-sm py-14">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500 m-0">Audience grid</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Choose the persona that matches your remit.</h2>
          <p class="text-slate-600 m-0 max-w-3xl">
            Each card links to a deeper route featuring instance set-up notes, replenishment cadences, and any compliance
            nuances. You can share the URL internally without losing context or detail.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="story in audienceStories"
            :key="story.route"
            :to="story.route"
            class="group border border-slate-200 bg-white p-6 flex flex-col gap-4 hover:border-slate-900/20 hover:shadow-lg transition-all"
            :id="story.anchor"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase tracking-[0.35em] text-slate-400">{{ story.eyebrow }}</span>
              <span class="text-sm font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">View</span>
            </div>
            <div>
              <h3 class="text-2xl font-semibold m-0 text-slate-900">{{ story.title }}</h3>
              <p class="text-slate-600 m-0 mt-1">{{ story.summary }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-slate-50 border border-slate-200 shadow-sm py-14" id="business-tiers">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500 m-0">Business sizes</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Micro to medium programmes stay instance-safe.</h2>
          <p class="text-slate-600 m-0 max-w-3xl">
            Whether you run a single founders’ desk or multiple satellite studios, we partition every plan by business size so stock,
            billing, and refill cadences stay transparent.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="tier in businessTiers"
            :key="tier.title"
            class="border border-slate-200 bg-white p-6 flex flex-col gap-3"
            :id="tier.anchor"
          >
            <h3 class="text-2xl font-semibold m-0 text-slate-900">{{ tier.title }}</h3>
            <p class="text-slate-600 m-0">{{ tier.summary }}</p>
            <ul class="list-none p-0 m-0 flex flex-col gap-1.5 text-slate-700">
              <li v-for="detail in tier.details" :key="detail" class="flex items-start gap-2">
                <span class="text-brand-cyan text-lg leading-none">•</span>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="w-full bg-white border border-slate-200 shadow-sm py-14" id="tradespeople">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500 m-0">Tradespeople</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Rugged kits for every trade bench.</h2>
          <p class="text-slate-600 m-0 max-w-3xl">
            We bundle wipe-clean totes, weather-ready packaging, and rapid top-ups so site teams never ration the basics.
          </p>
        </div>
        <div class="grid gap-3 md:grid-cols-2">
          <RouterLink
            v-for="trade in tradesList"
            :key="trade.route"
            :to="trade.route"
            class="group border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm transition-all"
          >
            <span class="group-hover:translate-x-1 inline-block transition-transform">{{ trade.title }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-slate-950 text-white py-14 border border-slate-900 shadow-sm" id="professional-services">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-white/60 m-0">Professional services</p>
          <h2 class="text-3xl md:text-4xl font-semibold m-0">Client-facing teams need polished stock.</h2>
          <p class="text-white/75 m-0 max-w-3xl">
            We keep premium pens, portfolio-ready pads, and meeting kits flowing so billable work never stalls over supplies.
          </p>
        </div>
        <div class="grid gap-3 md:grid-cols-3">
          <RouterLink
            v-for="service in professionalServices"
            :key="service.route"
            :to="service.route"
            class="group border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white/85 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all"
          >
            <span class="group-hover:translate-x-1 inline-block transition-transform">{{ service.title }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="w-full bg-slate-900 text-white py-14 border border-slate-800 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-[0.35em] text-white/60 m-0">Instance-first ops</p>
          <h2 class="text-3xl font-semibold m-0">How we keep audiences separated.</h2>
          <p class="text-white/75 m-0 max-w-3xl">
            No matter which persona you support, we follow the same layered approach so procurement, reporting, and stock
            never bleed between organisations.
          </p>
        </div>
        <ol class="grid gap-4 md:grid-cols-3 list-none p-0 m-0">
          <li
            v-for="pillar in instancePillars"
            :key="pillar.title"
            class="bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col gap-3"
          >
            <span class="text-sm uppercase tracking-[0.35em] text-white/60">{{ pillar.step }}</span>
            <h3 class="text-xl font-semibold m-0 text-white">{{ pillar.title }}</h3>
            <p class="text-white/80 m-0">{{ pillar.detail }}</p>
          </li>
        </ol>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
          <h3 class="text-2xl font-semibold m-0 text-white">Need procurement sign-off?</h3>
          <p class="text-white/80 m-0">
            We can package a full "Who for" dossier, including instance diagrams, visit schedules, and supply manifests, so
            your stakeholders approve the rollout in one pass.
          </p>
          <RouterLink
            to="/contact"
            class="inline-flex px-5 py-2.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Talk to the planning desk
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

