import { createRouter, createWebHistory } from 'vue-router'
//import HomePage from './App.vue'
import HomePage from './pages/home.vue'
import ReportSingle from './pages/ReportSingle.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/client-reports-q1-creative',
    name: 'report-001',
    component: ReportSingle
  },
  {
    path: '/client-reports-hooks-march',
    name: 'insight-report-027',
    component: ReportSingle
  },
  {
    path: '/client-reports-kpi-april',
    name: 'report-013',
    component: ReportSingle
  },
  {
    path: '/client-reports-coin-2025',
    name: 'insight-report-020',
    component: ReportSingle
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
