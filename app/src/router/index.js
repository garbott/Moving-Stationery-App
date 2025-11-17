import { createRouter, createWebHistory } from 'vue-router'
import { applySeoForRoute } from '../utils/seo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/ServicesPage.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../pages/ProductsPage.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/ContactPage.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../pages/TermsPage.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../pages/PrivacyPage.vue'),
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../pages/CookiesPage.vue'),
  },
  {
    path: '/refunds',
    name: 'refunds',
    component: () => import('../pages/RefundsPage.vue'),
  },
  {
    path: '/gdpr',
    name: 'gdpr',
    component: () => import('../pages/GdprPage.vue'),
  },
  {
    path: '/who/corporate-offices',
    name: 'who-corporate',
    component: () => import('../pages/WhoCorporatePage.vue'),
  },
  {
    path: '/who/coworking-floors',
    name: 'who-coworking',
    component: () => import('../pages/WhoCoworkingPage.vue'),
  },
  {
    path: '/who/home-offices',
    name: 'who-home',
    component: () => import('../pages/WhoHomePage.vue'),
  },
  {
    path: '/who/events-workshops',
    name: 'who-events',
    component: () => import('../pages/WhoEventsPage.vue'),
  },
  {
    path: '/who/education-labs',
    name: 'who-education',
    component: () => import('../pages/WhoEducationPage.vue'),
  },
  {
    path: '/who/agriculture',
    name: 'who-agriculture',
    component: () => import('../pages/WhoAgriculturePage.vue'),
  },
  {
    path: '/who/finance',
    name: 'who-finance',
    component: () => import('../pages/WhoFinancePage.vue'),
  },
  {
    path: '/who/charities',
    name: 'who-charities',
    component: () => import('../pages/WhoCharitiesPage.vue'),
  },
  {
    path: '/who/web-development',
    name: 'who-web-development',
    component: () => import('../pages/WhoWebDevelopmentPage.vue'),
  },
  {
    path: '/who/bookkeepers',
    name: 'who-bookkeepers',
    component: () => import('../pages/WhoBookkeepersPage.vue'),
  },
  {
    path: '/who/accountants',
    name: 'who-accountants',
    component: () => import('../pages/WhoAccountantsPage.vue'),
  },
  {
    path: '/who/solicitors',
    name: 'who-solicitors',
    component: () => import('../pages/WhoSolicitorsPage.vue'),
  },
  {
    path: '/who/consultancies',
    name: 'who-consultancies',
    component: () => import('../pages/WhoConsultanciesPage.vue'),
  },
  {
    path: '/who/marketing-pr',
    name: 'who-marketing-pr',
    component: () => import('../pages/WhoMarketingPRPage.vue'),
  },
  {
    path: '/who/plasterers',
    name: 'who-plasterers',
    component: () => import('../pages/WhoPlasterersPage.vue'),
  },
  {
    path: '/who/painters',
    name: 'who-painters',
    component: () => import('../pages/WhoPaintersPage.vue'),
  },
  {
    path: '/who/property-maintenance',
    name: 'who-property-maintenance',
    component: () => import('../pages/WhoPropertyMaintenancePage.vue'),
  },
  {
    path: '/who/electricians',
    name: 'who-electricians',
    component: () => import('../pages/WhoElectriciansPage.vue'),
  },
  {
    path: '/who/joiners',
    name: 'who-joiners',
    component: () => import('../pages/WhoJoinersPage.vue'),
  },
  {
    path: '/who/hvac',
    name: 'who-hvac',
    component: () => import('../pages/WhoHVACPage.vue'),
  },
  {
    path: '/who/general-contractors',
    name: 'who-general-contractors',
    component: () => import('../pages/WhoGeneralContractorsPage.vue'),
  },
  {
    path: '/who-for',
    name: 'who-for',
    component: () => import('../pages/WhoForPage.vue'),
  },
  {
    path: '/what-for',
    name: 'what-for',
    component: () => import('../pages/WhatForPage.vue'),
  },
  {
    path: '/what-for/office-cupboards',
    name: 'what-office-cupboards',
    component: () => import('../pages/OfficeCupboardsPage.vue'),
  },
  {
    path: '/what-for/workshops',
    name: 'what-workshops',
    component: () => import('../pages/WorkshopsPage.vue'),
  },
  {
    path: '/what-for/meetings',
    name: 'what-meetings',
    component: () => import('../pages/MeetingsPage.vue'),
  },
  {
    path: '/oxfordshire',
    name: 'oxfordshire',
    component: () => import('../pages/OxfordshirePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, left: 0 }
    }
  },
})

router.afterEach((to, from) => {
  if (!to.hash) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }
  applySeoForRoute(to)
})

export default router

