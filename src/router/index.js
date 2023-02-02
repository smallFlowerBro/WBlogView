import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArticalView from '../views/ArticalView.vue'
import ArticalListView from '../views/ArticalListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
    ,
    {
      path: '/artical',
      name: 'artical',
      component: ArticalView
    },
    {
      path:"/articalList",
      name:"articalList",
      component: ArticalListView
    }
  ]
})

export default router
