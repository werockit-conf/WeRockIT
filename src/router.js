import Vue from 'vue'
import Router from 'vue-router'
import WorkInProgress from './views/WorkInProgress.vue'
import Attend from './views/Attend.vue'
import CodeOfConduct from './views/CodeOfConduct.vue'
import Home from './views/Home.vue'
import Speakers from './views/Speakers.vue'
import Sponsor from './views/Sponsor.vue'
import Team from './views/Team.vue'
import Travel from './views/Travel.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/wip',
      name: 'WorkInProgress',
      component: WorkInProgress,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers,
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
    },
    {
      path: '/attend',
      name: 'attend',
      component: Attend,
    },
    {
      path: '/codeofconduct',
      name: 'codeofconduct',
      component: CodeOfConduct,
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsor,
    },
    {
      path: '/sponsor',
      name: 'sponsors',
      component: Sponsor,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/',
      hash: '#about',
      name: 'about',
      component: Home,
    },
  ],
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      let position = {}
      position.selector = to.hash
      position.offset = { y: document.querySelector('nav').offsetHeight }

      return position
    }

    return { x: 0, y: 0 }
  },
})
