import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
