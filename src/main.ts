/*
 * @Author: your name
 * @Date: 2022-01-18 16:25:08
 * @LastEditTime: 2023-10-09 17:10:27
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\src\main.ts
 */
import axios from './utils/axios';
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.config.globalProperties.$http = axios // 将axios导入为全局配置，通过this.$http进行使用
app.config.globalProperties.$httpUrl = "www.qqq.com"
app.use(ElementPlus);
app.use(router);
app.mount('#app');
console.log(app)

