import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Rank from './views/Rank.vue'
import Rebate from './views/Rebate.vue'
import Special from './views/Special.vue'
import Mine from './views/Mine.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: Home,
      children: [
        {
          path: 'index',
          name: 'index',
          meta: { requiresAuth: true },
          component: Index
        },
        {
          path: 'rank',
          name: 'rank',
          meta: { requiresAuth: true },
          component: Rank
        },
        {
          path: 'rebate',
          name: 'rebate',
          meta: { requiresAuth: true },
          component: Rebate
        },
        {
          path: 'special',
          name: 'special',
          meta: { requiresAuth: true },
          component: Special
        },
        {
          path: 'mine',
          name: 'mine',
          meta: { requiresAuth: true },
          component: Mine
        }
      ]
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('./views/MinePublishCommodity.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./views/MineBrowseHistory')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/MineNewCommer')
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: () => import('./views/MineLottery')
    },
    {
      path: '/poster',
      name: 'poster',
      component: () => import('./views/MinePosterShare')
    },
    {
      path: '/income',
      name: 'income',
      component: () => import('./views/MineIncomeRank')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next()
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // check login status
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
