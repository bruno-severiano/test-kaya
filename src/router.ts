import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home.vue'
import ReportSingle from './pages/ReportSingle.vue'
import reports from './files/reports.json'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

// HOMEPAGE and catch-all report routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/:catchAll(.*)*',
    name: 'report',
    component: ReportSingle,
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      // Check if the requested path matches a report path in the JSON
      const match = reports.find(report => report.path === to.path)
      if (match) {
        next()
      } else {
        // Redirect to homepage on no match (404)
        next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
