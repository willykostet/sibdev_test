import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import AuthPage from "../components/AuthPage.vue"
// import { users } from '../fakeDB/users.js'
import store from "../store"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('sibdevAccess') || store.getters.getLogined) {
        next();
      } else {
        next('/auth')
      }
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
