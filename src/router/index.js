import Vue from 'vue'
import Router from 'vue-router'
import Entries from '@/pages/entries'
import Calendar from '@/pages/calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    return savedPosition || {x: 0, y: 0}
  },
  parseQuery (query) {
    // console.log(query, 'parseQuery')
  },
  routes: [
    {
      path: '/',
      redirect: '/entries'
    },
    {
      path: '/entries',
      name: 'Entries',
      component: Entries
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
