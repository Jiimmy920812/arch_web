import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../layout/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: '/About',
          name: 'About',
          component: () => import('../views/About.vue'),
        },
        {
          path: '/Tech',
          name: 'Tech',
          component: () => import('../views/Tech.vue'),
        },
        {
          path: '/Introduce',
          name: 'Introduce',
          component: () => import('../views/Introduce.vue'),
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue'),
        },
      ]
    }
  ]
})

export default router
