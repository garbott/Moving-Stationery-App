<script setup>
const corporateHighlights = [
  {
    title: 'Floor-by-floor templates',
    copy: 'Assign different kits per department — design, finance, exec — and we pre-pack vans to match those lists.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    alt: 'Organised corporate mailroom shelves filled with stationery trays',
  },
  {
    title: 'Meeting-ready supplies',
    copy: 'Flipcharts, markers, sticky notes, USB drives, and presentation folders arrive replenished before every offsite.',
    image: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?auto=format&fit=crop&w=900&q=80',
    alt: 'Conference room table prepared with notebooks and pens',
  },
  {
    title: 'Live usage dashboards',
    copy: 'After each visit you receive a quick checklist showing what was delivered and what needs attention next.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    alt: 'Operations manager reviewing a dashboard on a laptop',
  },
]

const galleryPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    caption: 'Multi-floor collaboration zones kept stocked with curated kits.',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    caption: 'Print rooms staged with paper, inks, and finishing supplies before the day begins.',
  },
]
</script>

<template>
  <div class="w-full bg-white py-12 border-t border-b border-slate-200">
    <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-14">
      <header class="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div class="flex flex-col gap-3">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Who we support</p>
          <h1 class="text-3xl md:text-4xl font-bold m-0">Corporate headquarters</h1>
          <p class="text-slate-600 m-0 max-w-2xl">
            Dedicated mobile top-ups for multi-floor offices. We stock print rooms, meeting suites, touchdown benches,
            and hot-desk bays with everyday essentials so facilities teams stay ahead of demand.
          </p>
        </div>
        <figure class="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <img
            :src="galleryPhotos[0].src"
            :alt="galleryPhotos[0].caption"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <figcaption class="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-sm p-4">
            {{ galleryPhotos[0].caption }}
          </figcaption>
        </figure>
      </header>

      <section class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-12 items-start">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 order-2 lg:order-1">
          <article
            v-for="highlight in corporateHighlights"
            :key="highlight.title"
            class="border border-slate-200 bg-white flex flex-col overflow-hidden shadow-sm rounded-xl"
          >
            <div class="relative h-44 overflow-hidden">
              <img :src="highlight.image" :alt="highlight.alt" class="h-full w-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            <div class="p-6 flex flex-col gap-3 flex-1">
              <h2 class="text-xl font-semibold m-0 text-slate-900">{{ highlight.title }}</h2>
              <p class="m-0 text-slate-600 flex-1">
                {{ highlight.copy }}
              </p>
            </div>
          </article>
        </div>
        <figure class="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-full min-h-[280px] order-1 lg:order-2">
          <img
            :src="galleryPhotos[1].src"
            :alt="galleryPhotos[1].caption"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <figcaption class="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-sm p-4">
            {{ galleryPhotos[1].caption }}
          </figcaption>
        </figure>
      </section>
    </div>
  </div>
</template>

