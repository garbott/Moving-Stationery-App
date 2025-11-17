<script setup>
const coverageByLetter = [
  {
    letter: 'A',
    villages: ['Adderbury', 'Alkerton', 'Alvescot', 'Ambrosden', 'Appleford', 'Appleton', 'Ardington', 'Arncott', 'Ashbury', 'Aston', 'Aston Rowant', 'Aynho'],
  },
  {
    letter: 'B',
    villages: [
      'Balscote',
      'Bampton',
      'Begbroke',
      'Benson',
      'Berrick Salome',
      'Bicester',
      'Bix',
      'Blewbury',
      'Bletchingdon',
      'Bloxham',
      'Bodicote',
      'Boars Hill',
      'Bourton',
      'Brightwell Baldwin',
      'Brightwell-cum-Sotwell',
      'Broughton',
      'Buckland',
      'Bucknell',
      'Burcot',
      'Burford',
      'Buscot',
    ],
  },
  {
    letter: 'C',
    villages: [
      'Cassington',
      'Charlbury',
      'Charlton-on-Otmoor',
      'Checkendon',
      'Chesterton',
      'Childrey',
      'Chinnor',
      'Chipping Norton',
      'Chiselhampton',
      'Cholsey',
      'Clifton Hampden',
      'Cote',
      'Cropredy',
      'Crowell',
      'Crowmarsh Gifford',
      'Cumnor',
      'Curbridge',
    ],
  },
  {
    letter: 'D',
    villages: ['Deddington', 'Didcot', 'Dorchester-on-Thames', 'Drayton', 'Dry Sandford', 'Ducklington', 'Duns Tew'],
  },
  {
    letter: 'E',
    villages: ['Easington', 'East Challow', 'East Hanney', 'East Hendred', 'Elsfield', 'Enstone', 'Ewelme'],
  },
  {
    letter: 'F',
    villages: ['Faringdon', 'Fencott', 'Finstock', 'Frilford', 'Fringford', 'Fritwell', 'Fulbrook', 'Fyfield'],
  },
  {
    letter: 'G',
    villages: ['Garsington', 'Goring-on-Thames', 'Gosford', 'Grafton', 'Great Haseley', 'Great Milton', 'Great Rollright', 'Great Tew', 'Grove'],
  },
  {
    letter: 'H',
    villages: ['Hailey', 'Hardwick', 'Harpsden', 'Harwell', 'Headington', 'Hinton Waldrist', 'Holton', 'Hook Norton', 'Horspath', 'Horton-cum-Studley'],
  },
  {
    letter: 'I',
    villages: ['Iffley', 'Ipsden', 'Islip'],
  },
  {
    letter: 'K',
    villages: ['Kelmscott', 'Kidlington', 'Kingston Bagpuize', 'Kingham', 'Kirtlington'],
  },
  {
    letter: 'L',
    villages: ['Launton', 'Leafield', 'Letcombe Bassett', 'Letcombe Regis', 'Lew', 'Little Coxwell', 'Little Milton', 'Littlemore', 'Long Hanborough', 'Longworth'],
  },
  {
    letter: 'M',
    villages: ['Marcham', 'Marsh Baldon', 'Middleton Stoney', 'Milcombe', 'Milton-under-Wychwood', 'Minster Lovell', 'Mixbury', 'Mollington', 'Moulsford'],
  },
  {
    letter: 'N',
    villages: ['Nettlebed', 'Newington', 'North Aston', 'North Hinksey', 'North Leigh', 'North Moreton', 'North Newington', 'North Stoke'],
  },
  {
    letter: 'O',
    villages: ['Oddington', 'Osney', 'Otmoor', 'Over Norton', 'Over Worton'],
  },
  {
    letter: 'P',
    villages: ['Piddington', 'Pishill', 'Pyrton'],
  },
  {
    letter: 'Q',
    villages: ['Queensford'],
  },
  {
    letter: 'R',
    villages: ['Radley', 'Ramsden', 'Roke', 'Rotherfield Greys', 'Rotherfield Peppard', 'Rousham', 'Ruscote'],
  },
  {
    letter: 'S',
    villages: [
      'Sandford-on-Thames',
      'Shilton',
      'Shippon',
      'Shipton-under-Wychwood',
      'Shirburn',
      'Sibford Ferris',
      'Sibford Gower',
      'Sonning Common',
      'South Leigh',
      'South Moreton',
      'Stadhampton',
      'Stanton Harcourt',
      'Steeple Aston',
      'Steeple Barton',
      'Steventon',
      'Stonesfield',
      'Sutton Courtenay',
      'Swerford',
      'Swinbrook',
      'Sydenham',
    ],
  },
  {
    letter: 'T',
    villages: ['Tackley', 'Tadmarton', 'Tetsworth', 'Thame', 'Thrupp', 'Toot Baldon', 'Tubney'],
  },
  {
    letter: 'U',
    villages: ['Uffington', 'Upton', 'Upper Arncott', 'Upper Heyford', 'Upper Tadmarton'],
  },
  {
    letter: 'W',
    villages: [
      'Wallingford',
      'Warborough',
      'Wardington',
      'Watchfield',
      'Water Eaton',
      'Watlington',
      'Wendlebury',
      'West Hanney',
      'West Hendred',
      'Wheatley',
      'Whitchurch-on-Thames',
      'Wigginton',
      'Witney',
      'Wolvercote',
      'Woodstock',
      'Wootton',
      'Worton',
      'Wroxton',
    ],
  },
  {
    letter: 'Y',
    villages: ['Yarnton', 'Yelford'],
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

