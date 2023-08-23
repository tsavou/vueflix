import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import('../views/HomeView.vue')
    },

    {
      path: '/a-propos',
      name: 'about',
      component: ()=> import('../views/AboutView.vue')
    },

    {
      path: '/films',
      name: 'films',
      component: ()=> import('../views/FilmView.vue')
    },
    {
      path: '/films/:id',
      name: 'fiche film',
      component: ()=> import('../views/FilmInfoView.vue')
    },


   
  ]
})

export default router
