/*
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:09:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 15:08:26
 * @Description: 路由配置文件
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'todolist'
  },
  {
    path: '/list',
    component: () => import(`@/views/list/index.vue`),
    name: 'list'
  },
  {
    path: '/todolist',
    component: () => import(`@/views/todolist/index.vue`),
    name: 'todolist'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
