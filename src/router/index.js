import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: () => import('../views/Instruction.vue'),
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
