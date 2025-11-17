<script setup>
const contact = {
  phone: '01865 689798',
  email: 'hello@movingstationery.co.uk',
}

const faqs = [
  {
    question: 'How far in advance should we book?',
    answer:
      'Standing routes can be locked in up to twelve weeks out. Across Oxfordshire we typically accommodate urgent visits in under six hours.',
  },
  {
    question: 'Do you integrate with procurement systems?',
    answer:
      'Yes. We export usage logs that plug straight into Coupa, Precoro, or bespoke CSV formats so finance teams stay aligned.',
  },
  {
    question: 'Is there a minimum order value?',
    answer:
      'There is no strict minimum, though visits under £150 may include a small routing fee to keep the fleet efficient.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Book the fleet</p>
        <h1 class="m-0 text-3xl md:text-4xl font-bold">Tell us what needs restocking.</h1>
        <p class="m-0 text-slate-600">
          Share your preferred visit window, access instructions, and must-have items. A merchandiser
          will confirm the tailored loadout within one business hour.
        </p>
        <div class="inline-flex flex-wrap gap-3 items-center px-4 py-3 rounded-full border border-dashed border-teal-600 mt-5">
          <a :href="`tel:${contact.phone}`" class="text-teal-600 hover:text-teal-700 font-medium">{{ contact.phone }}</a>
          <span class="text-slate-500">or</span>
          <a :href="`mailto:${contact.email}`" class="text-teal-600 hover:text-teal-700 font-medium">{{ contact.email }}</a>
        </div>
        </div>
        <form class="flex flex-col gap-4 p-6 border border-slate-200 bg-slate-50">
        <label class="flex flex-col gap-1.5 font-semibold">
          Contact name
          <input
            type="text"
            name="name"
            placeholder="Alex at Finch Studio"
            class="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal bg-white"
          />
        </label>
        <label class="flex flex-col gap-1.5 font-semibold">
          Preferred visit date
          <input
            type="date"
            name="date"
            class="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal bg-white"
          />
        </label>
        <label class="flex flex-col gap-1.5 font-semibold">
          Location type
          <select
            name="location"
            class="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal bg-white"
          >
            <option value="">Select an option</option>
            <option>Corporate headquarters</option>
            <option>Co-working floor</option>
            <option>Home office</option>
            <option>Event or pop-up</option>
          </select>
        </label>
        <label class="flex flex-col gap-1.5 font-semibold">
          Notes for our merchandisers
          <textarea
            name="notes"
            rows="4"
            placeholder="List must-have brands, access instructions, or security requirements."
            class="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal bg-white resize-y"
          ></textarea>
        </label>
        <button
          type="submit"
          class="w-fit text-base font-semibold px-7 py-3.5 rounded-full border-none cursor-pointer transition-all bg-teal-600 text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-sky-500/70 focus-visible:outline-offset-2"
        >
          Request callback
        </button>
        </form>
      </div>
    </section>

    <section class="w-full bg-white py-10 border border-slate-200 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-1 mb-7">
        <p class="uppercase tracking-wider text-sm text-teal-600 mb-0">Questions, answered</p>
        <h2 class="m-0 text-3xl md:text-4xl font-bold">Everything stays transparent.</h2>
      </div>
      <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-4">
        <details v-for="faq in faqs" :key="faq.question" open class="border border-slate-200 p-4 bg-slate-50">
          <summary class="font-semibold cursor-pointer">{{ faq.question }}</summary>
          <p class="mb-0 text-slate-600 mt-2">{{ faq.answer }}</p>
        </details>
      </div>
    </section>
  </div>
</template>
