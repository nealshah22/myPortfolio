import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import School from '../views/School.vue'
import Service from '../views/Service.vue'
import Passions from '../views/Passions.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/passions',
    name: 'Passions',
    component: Passions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
