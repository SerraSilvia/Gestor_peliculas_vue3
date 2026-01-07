import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/films',
      name: 'film',
      component: () => import('@/views/Films.vue'),
    },
    {
      path: "/film/:id",
      name: "Pelicula",
      component: () => import('@/views/FilmDetail.vue'),
      props: true
    },
     {
      path: "/series",
      name: "Series",
      component: () => import('@/views/Series.vue'),
      props: true
    },
     {
      path: "/serie/:id",
      name: "Serie",
      component: () => import('@/views/SerieDetail.vue'),
      props: true
    },
  ],
})

export default router
