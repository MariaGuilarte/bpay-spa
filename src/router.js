import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '', component: () => import('./pages/Index.vue'), name: 'base' },
  { path: '/grid', component: () => import('./pages/Grid.vue'), name: 'grid' },
  { path: '/index', component: () => import('./pages/Index.vue'), name: 'index' },
  { path: '/about', component: () => import('./pages/About.vue'), name: 'about' },
  { path: '/airdrop', component: () => import('./pages/Airdrop.vue'), meta: { lighttheme: true }, name: 'airdrop' },
  { path: '/cashflow', component: () => import('./pages/Cashflow.vue'), meta: { lighttheme: true }, name: 'cashflow' },
  { path: '/counter', component: () => import('./pages/Counter.vue'), name: 'counter' },
  { path: '/extra', component: () => import('./pages/Extra.vue'), name: 'extra' },
  { path: '/participation', component: () => import('./pages/Participation.vue'), meta: { lighttheme: true }, name: 'participation' },
  { path: '/shared', component: () => import('./pages/Shared.vue'), meta: { lighttheme: true }, name: 'shared' },
  { path: '/shared2', component: () => import('./pages/Shared2.vue'), name: 'shared2' },
  { path: '/team', component: () => import('./pages/Team.vue'), name: 'team' },
  { path: '/timer', component: () => import('./pages/Timers.vue'), name: 'timer' },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    return { top: 0 }
  }
})

export default router;