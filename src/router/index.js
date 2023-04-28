import { createRouter,createWebHashHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tech from '../views/Tech.vue'
import Tech_arch from '../views/Tech_arch.vue'
import Tech_material from '../views/Tech_material.vue'
import Tech_team from '../views/Tech_team.vue'
import Introduce from '../views/Introduce.vue'
import Contact from '../views/Contact.vue'



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component:Home,
        },
        {
          path: '/About',
          name: 'About',
          component:About,
        },
        {
          path: '/Tech',
          name: 'Tech',
          component:Tech,
        },
        {
          path: '/Tech_arch',
          name: 'Tech_arch',
          component: Tech_arch,
        },
        {
          path: '/Tech_material',
          name: 'Tech_material',
          component: Tech_material,
        },
        {
          path: '/Tech_team',
          name: 'Tech_team',
          component: Tech_team,
        },
        {
          path: '/Introduce',
          name: 'Introduce',
          component: Introduce,
        },
        {
          path: '/Contact',
          name: 'Contact',
          component:Contact,
        },
      ]
    }
  ]
})

export default router
