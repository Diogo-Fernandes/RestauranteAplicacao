import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'
import AddFunds from '../views/AddFunds.vue'
import WeeklyMenu from '../views/WeeklyMenu.vue'
import Reservation from '../views/Reservation.vue'
import Confirmation from '../views/Confirmation.vue'
import Restaurant from '../views/Restaurant.vue'
import Feedback from '../views/Feedback.vue'
import store from '../store'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import usersList from '../components/usersList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addFunds',
    name: 'addFunds',
    component: AddFunds
  },
  {
    path: '/weeklyMenu',
    name: 'weeklyMenu',
    component: WeeklyMenu
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },{
    path:'/usersList',
    name:'usersList',
    component:usersList
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})


export default router
