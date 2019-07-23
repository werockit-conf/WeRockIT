import Vue from 'vue'
import Router from 'vue-router'
import WorkInProgress from './views/WorkInProgress.vue'
import CodeOfConduct from './views/CodeOfConduct.vue'
import Home from './views/Home.vue'
import Speakers from './views/Speakers.vue'
import Venue from './views/Venue.vue'

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
      path: '/venue',
      name: 'venue',
      component: Venue,
    },
<<<<<<< HEAD
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
=======
    {
      path: '/codeofconduct',
      name: 'codeofconduct',
      component: CodeOfConduct,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
>>>>>>> a489759... Created the initial draft for the code of conduct page for the website launch.
  ],
})
