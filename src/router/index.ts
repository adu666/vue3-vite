/*
 * @Author: your name
 * @Date: 2022-01-18 16:38:04
 * @LastEditTime: 2023-05-30 13:45:51
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import("/@/views/home/index.vue")
  },
  {
    path: '/login',
    component: () => import("/@/views/login/login.vue")
  },
  {
    path: '/chart',
    component: () => import("/@/views/charts/chart.vue")
  },
  {
    path: '/maodian',
    component: () => import("/@/views/maodian/maodian.vue")
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
