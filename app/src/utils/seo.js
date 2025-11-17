const defaultGeo = {
  region: 'GB-OXF',
  placename: 'Oxfordshire, United Kingdom',
  position: '51.7520;-1.2577',
  icbm: '51.7520, -1.2577',
}

const defaultMeta = {
  title: 'Moving Stationery | Mobile Stationery Vans in Oxfordshire',
  description:
    'Moving Stationery runs concierge stationery vans that replenish workplaces, studios, and home offices across Oxfordshire with audit-ready checklists.',
  keywords: [
    'Moving Stationery',
    'mobile stationery vans',
    'Oxfordshire office supplies',
    'workspace replenishment',
    'concierge stationery service',
    'sustainable stationery Oxford',
  ],
  geo: defaultGeo,
}

const routeMeta = {
  home: buildMeta({
    title: 'Moving Stationery | Mobile Stationery Vans in Oxfordshire',
    description:
      'Concierge stationery fleets that restock cupboards, workshops, and executive suites across Oxfordshire with per-instance reporting.',
    keywords: ['Oxfordshire stationery vans', 'mobile office stationery delivery'],
  }),
  services: buildMeta({
    title: 'Stationery Services in Oxfordshire | Moving Stationery',
    description:
      'Route design, compliance-ready inventory, and proactive replenishment services for offices, labs, and studios throughout Oxfordshire.',
    keywords: ['stationery service plans', 'route-based refills'],
  }),
  products: buildMeta({
    title: 'Curated Stationery Products | Moving Stationery',
    description:
      'Eco-friendly paper, meeting packs, and ergonomic desk supplies sourced for high-volume workplaces and remote teams in Oxfordshire.',
    keywords: ['stationery catalogue', 'eco stationery Oxford'],
  }),
  contact: buildMeta({
    title: 'Contact Moving Stationery | Oxfordshire Mobile Stationery Vans',
    description:
      'Book the Moving Stationery fleet, request quotes, or schedule discovery visits anywhere in Oxfordshire and the Thames Valley.',
    keywords: ['contact Moving Stationery', 'book stationery van'],
  }),
  terms: buildMeta({
    title: 'Terms & Conditions | Moving Stationery',
    description:
      'Understand service scope, payment terms, liability coverage, and change controls for Moving Stationery’s Oxfordshire operations.',
    keywords: ['Moving Stationery terms', 'service contract stationery'],
  }),
  privacy: buildMeta({
    title: 'Privacy Policy | Moving Stationery',
    description:
      'How Moving Stationery protects client data, visit telemetry, and funding reports in line with UK GDPR requirements.',
    keywords: ['stationery privacy policy', 'Oxfordshire GDPR stationery'],
  }),
  cookies: buildMeta({
    title: 'Cookie Policy | Moving Stationery',
    description:
      'Details on analytics, functional, and preference cookies used across the Moving Stationery client portal and marketing site.',
    keywords: ['cookie policy Oxfordshire stationery'],
  }),
  refunds: buildMeta({
    title: 'Refunds & Returns | Moving Stationery',
    description:
      'Clear guidance for refunds, replacements, and budget reallocations across every instance that Moving Stationery supports.',
    keywords: ['stationery refunds', 'returns policy Oxford'],
  }),
  gdpr: buildMeta({
    title: 'GDPR Compliance | Moving Stationery',
    description:
      'Documentation on lawful basis, retention schedules, and sub-processor controls for Moving Stationery’s GDPR compliance.',
    keywords: ['stationery GDPR', 'GDPR Oxfordshire services'],
  }),
  where: buildMeta({
    title: 'Where We Operate | Moving Stationery',
    description:
      'Discover where Moving Stationery delivers mobile stationery services across Oxfordshire and the Thames Valley.',
    keywords: ['Moving Stationery coverage', 'service areas', 'Oxfordshire delivery'],
  }),
  oxfordshire: buildMeta({
    title: 'Oxfordshire Coverage | Moving Stationery',
    description:
      'Complete coverage across Oxfordshire including Oxford, Banbury, Bicester, Abingdon, Witney, and hundreds of villages throughout the county.',
    keywords: ['Oxfordshire service area', 'Kidlington stationery depot', 'Oxfordshire villages'],
  }),
  'what-for': buildMeta({
    title: 'Stationery Use Cases | Moving Stationery',
    description:
      'Discover how Moving Stationery equips meetings, workshops, and office cupboards with zero-waste replenishment plans.',
    keywords: ['meeting stationery kits', 'workshop supplies Oxfordshire'],
  }),
  'what-office-cupboards': buildMeta({
    title: 'Office Cupboard Replenishment | Moving Stationery',
    description:
      'Predictable refill schedules, tamper-proof bins, and stocktake proofs for shared office cupboards.',
    keywords: ['office cupboard refills', 'shared storage stationery'],
  }),
  'what-workshops': buildMeta({
    title: 'Workshop Stationery Support | Moving Stationery',
    description:
      'Mobile vans that prep creative workshops with adhesives, papers, and backup kits ready for facilitators.',
    keywords: ['workshop stationery Oxford', 'creative session supplies'],
  }),
  'what-meetings': buildMeta({
    title: 'Meeting Room Stationery | Moving Stationery',
    description:
      'Executive meeting refreshes with premium notebooks, pens, and hybrid collaboration packs delivered on a cadence.',
    keywords: ['meeting stationery service', 'boardroom supplies'],
  }),
  'who-for': buildMeta({
    title: 'Who We Support | Moving Stationery',
    description:
      'From home offices to enterprise campuses, discover the teams that rely on Moving Stationery for concierge replenishment.',
    keywords: ['stationery for businesses', 'workspace supply partner'],
  }),
}

const whoPages = {
  'who-corporate': {
    audience: 'Corporate Offices',
    description:
      'Concierge trolley runs, KPI dashboards, and multi-floor drop-offs tailored to enterprise campuses.',
    keywords: ['corporate stationery partner', 'enterprise office supplies'],
  },
  'who-coworking': {
    audience: 'Coworking Floors',
    description: 'Desk pack top-ups and booking-aware delivery windows for coworking communities.',
    keywords: ['coworking stationery', 'flex space supplies'],
  },
  'who-home': {
    audience: 'Home Offices',
    description: 'Premium desk kits, packaging removal, and recyclable returns for executives working remotely.',
    keywords: ['home office stationery delivery'],
  },
  'who-events': {
    audience: 'Events & Workshops',
    description: 'Pop-up replenishment hubs that keep event registration and breakout rooms supplied.',
    keywords: ['event stationery supplier', 'conference supplies Oxford'],
  },
  'who-education': {
    audience: 'Education Labs',
    description: 'STEM-safe supplies and audit-friendly logs for schools and university labs.',
    keywords: ['education stationery service', 'lab supplies Oxford'],
  },
  'who-agriculture': {
    audience: 'Agriculture Offices',
    description: 'Rural depots, compliance binders, and weather-ready deliveries for agricultural teams.',
    keywords: ['farm office stationery', 'agriculture supply van'],
  },
  'who-finance': {
    audience: 'Finance & Banking',
    description: 'Regulatory-ready recordkeeping and secure shredding caddies for finance teams.',
    keywords: ['finance stationery service', 'bank office supplies'],
  },
  'who-charities': {
    audience: 'Charities & Nonprofits',
    description: 'Instance-split reporting keeps grant-funded programmes transparent.',
    keywords: ['charity stationery partner', 'nonprofit supplies Oxford'],
  },
  'who-web-development': {
    audience: 'Web Development Studios',
    description: 'Agile boards, prototyping paper, and device cleaning kits for dev teams.',
    keywords: ['developer stationery', 'tech studio supplies'],
  },
  'who-bookkeepers': {
    audience: 'Bookkeepers',
    description: 'Ledger-friendly packs, archival boxes, and sealable pouches for bookkeepers.',
    keywords: ['bookkeeper stationery Oxford'],
  },
  'who-accountants': {
    audience: 'Accountancy Practices',
    description: 'Client pack assembly, secure storage, and end-of-year audit prep.',
    keywords: ['accountant stationery', 'audit prep supplies'],
  },
  'who-solicitors': {
    audience: 'Solicitors & Legal Teams',
    description: 'Bespoke case bundles, tamper seals, and court-ready presentation packs.',
    keywords: ['legal stationery partner', 'solicitor supplies'],
  },
  'who-consultancies': {
    audience: 'Consultancies',
    description: 'Pitch kits, roadshow replenishment, and executive workshop prep.',
    keywords: ['consultancy stationery', 'workshop kits'],
  },
  'who-marketing-pr': {
    audience: 'Marketing & PR Agencies',
    description: 'Campaign war rooms stocked with boards, layout pads, and sampling kits.',
    keywords: ['marketing agency supplies', 'PR stationery Oxford'],
  },
  'who-plasterers': {
    audience: 'Plasterers & Trades',
    description: 'Site packs with adhesives, measuring aids, and weatherproof storage.',
    keywords: ['trades stationery kits', 'plasterer supplies'],
  },
  'who-painters': {
    audience: 'Painters & Decorators',
    description: 'Colour cards, masking systems, and snagging pads ready for decorators.',
    keywords: ['decorator supplies', 'painter stationery Oxford'],
  },
  'who-property-maintenance': {
    audience: 'Property Maintenance Teams',
    description: 'Estate-wide inventory with tamper-proof totes and rapid replenishment.',
    keywords: ['property maintenance supplies', 'FM stationery partner'],
  },
  'who-electricians': {
    audience: 'Electricians',
    description: 'Lockout tags, compliance pads, and rugged storage for electrical teams.',
    keywords: ['electrician stationery', 'lockout tag kits'],
  },
  'who-joiners': {
    audience: 'Joiners & Carpentry Shops',
    description: 'Cutting lists, finishing kits, and protective packaging for joiners.',
    keywords: ['joiner supplies Oxford', 'carpentry stationery'],
  },
  'who-hvac': {
    audience: 'HVAC Teams',
    description: 'Service sheet packs, filter logs, and weatherproof labelling for HVAC pros.',
    keywords: ['HVAC stationery', 'service log supplies'],
  },
  'who-general-contractors': {
    audience: 'General Contractors',
    description: 'Site office setups, RFI boards, and compliance signage for contractors.',
    keywords: ['contractor stationery partner', 'construction office supplies'],
  },
}

Object.entries(whoPages).forEach(([routeName, config]) => {
  routeMeta[routeName] = buildMeta({
    title: `${config.audience} Stationery Support | Moving Stationery`,
    description: `${config.description} We service Oxfordshire with per-instance reporting and mobile vans.`,
    keywords: config.keywords,
  })
})

const buildMetaForInstance = (name, description, keywords = []) =>
  buildMeta({
    title: `${name} | Moving Stationery`,
    description,
    keywords,
  })

// Additional instance-specific placeholders if new routes are added later.
routeMeta['brand'] = buildMetaForInstance(
  'Moving Stationery Brand Story',
  'Explore the Moving Stationery origin story, mission, and design system rooted in Oxfordshire.',
  ['Moving Stationery brand', 'Oxfordshire stationery company']
)

export function applySeoForRoute(route) {
  if (typeof document === 'undefined' || typeof window === 'undefined' || !route) return

  const meta = routeMeta[route.name] ?? defaultMeta
  const resolvedKeywords = Array.from(
    new Set([...(meta.keywords ?? []), ...defaultMeta.keywords])
  )
  const geo = meta.geo ?? defaultGeo
  const pageUrl = new URL(route.fullPath, window.location.origin).href

  document.title = meta.title ?? defaultMeta.title
  setMetaName('description', meta.description ?? defaultMeta.description)
  setMetaName('keywords', resolvedKeywords.join(', '))
  setMetaProperty('og:title', meta.title ?? defaultMeta.title)
  setMetaProperty('og:description', meta.description ?? defaultMeta.description)
  setMetaProperty('og:url', pageUrl)
  setMetaProperty('og:image', `${window.location.origin}/social-cover.png`)
  setMetaProperty('twitter:title', meta.title ?? defaultMeta.title)
  setMetaProperty('twitter:description', meta.description ?? defaultMeta.description)
  setMetaProperty('twitter:image', `${window.location.origin}/social-cover.png`)
  setMetaName('twitter:card', 'summary_large_image')
  setMetaName('geo.region', geo.region ?? defaultGeo.region)
  setMetaName('geo.placename', geo.placename ?? defaultGeo.placename)
  setMetaName('geo.position', geo.position ?? defaultGeo.position)
  setMetaName('ICBM', geo.icbm ?? defaultGeo.icbm)
  setMetaName('business:contact_data:country_name', 'United Kingdom')
  setCanonical(pageUrl)
  setStructuredData(route, meta, geo, pageUrl)
}

function buildMeta(overrides = {}) {
  return {
    title: overrides.title ?? defaultMeta.title,
    description: overrides.description ?? defaultMeta.description,
    keywords: overrides.keywords ?? defaultMeta.keywords,
    geo: overrides.geo ?? defaultGeo,
    structuredData: overrides.structuredData,
  }
}

function setMetaName(name, content) {
  if (!content) return
  let tag = document.head.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  if (!content) return
  let tag = document.head.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url) {
  if (!url) return
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function setStructuredData(route, meta, geo, pageUrl) {
  const scriptId = 'seo-ldjson'
  let script = document.head.querySelector(`#${scriptId}`)
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.id = scriptId
    document.head.appendChild(script)
  }

  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Moving Stationery',
    image: `${window.location.origin}/social-cover.png`,
    url: pageUrl,
    telephone: '+44 1865 689798',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13a Bankside',
      addressLocality: 'Kidlington',
      addressRegion: 'Oxfordshire',
      postalCode: 'OX5 1JE',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.752,
        longitude: -1.2577,
      },
      geoRadius: 40000,
    },
    description: meta.description ?? defaultMeta.description,
    serviceType: meta.title ?? defaultMeta.title,
    makesOffer: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'GBP',
        url: pageUrl,
        itemOffered: {
          '@type': 'Service',
          name: meta.title ?? defaultMeta.title,
          description: meta.description ?? defaultMeta.description,
        },
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.752,
      longitude: -1.2577,
    },
  }

  const custom = typeof meta.structuredData === 'function' ? meta.structuredData(route, meta, geo, pageUrl) : meta.structuredData
  const payload = custom ? { ...baseData, ...custom } : baseData
  script.textContent = JSON.stringify(payload, null, 2)
}

