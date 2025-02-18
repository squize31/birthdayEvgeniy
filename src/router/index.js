import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/Login.vue'
import BirthdayGreeting from '../components/BirthdayGreeting.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/birthday',
    name: 'Birthday',
    component: BirthdayGreeting,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true' // Приводим к булевому значению
      console.log('Auth check после приведения:', isAuthenticated) // Проверяем, что теперь там true/false
      isAuthenticated ? next() : next('/login')
    }    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router