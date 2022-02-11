import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import School from '../views/School.vue'
import Clubs from '../views/Clubs.vue'
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
    path: '/passions',
    name: 'Passions',
    component: Passions
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: Clubs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
