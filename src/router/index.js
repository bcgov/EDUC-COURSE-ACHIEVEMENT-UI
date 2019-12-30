import Vue from 'vue'
import VueRouter from 'vue-router'
import AchievementCreate from '../views/AchievementCreate.vue'
import AchievementList from '../views/AchievementList.vue'
import AchievementShow from '../views/AchievementShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'achievement-list',
    component: AchievementList
  },
  {
    path: '/achievement/:id',
    name: 'achievement-show',
    component: AchievementShow,
    props: true
  },
  {
    path: '/achievement/create',
    name: 'achievement-create',
    component: AchievementCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
