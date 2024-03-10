import { createRouter, createWebHistory } from 'vue-router'
// createRouter用于创建路由实例
// 配置history模式
//vite中的环境变量import.meta.env.BASE_URL  就是vite.config.js中的base配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})
export default router
