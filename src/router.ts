import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home.vue'
import ReportSingle from './pages/ReportSingle.vue'
import reports from './files/reports.json'

//HOMEPAGE
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  //SINPLE REPORT PAGES BASED ON PATH
  {
    path: '/:catchAll(.*)*',
    name: 'report',
    component: ReportSingle,
    beforeEnter: (to, from, next) => {
      const match = reports.find(report => report.path === to.path)
      if (match) {
        next()
      } else {
        // 3. Optional: redirect to 404 or homepage if path not matched
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
