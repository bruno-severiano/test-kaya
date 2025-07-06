import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/home.vue'
import ReportSingle from './pages/ReportSingle.vue'
import reports from './files/reports.json'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

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
      const match = reports.find(report => report.path === to.path)
      if (match) {
        next()
      } else {
        next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
