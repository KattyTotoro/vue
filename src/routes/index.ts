import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '#root/pages/HomePage.vue'
import AboutPage from '#root/pages/AboutPage.vue'
import MyNewPage from '#root/pages/MyNewPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/myPage', component: MyNewPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}