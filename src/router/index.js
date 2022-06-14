import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
        },
        {
          path: '/',
          name: 'Landing',
          component: Landing
          }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
