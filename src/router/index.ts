import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(), // 移除 import.meta.env.BASE_URL
    routes: [
        {
            path: '/',
            name: 'home',
            // 路由级别的代码分割
            // 这会为这个路由生成一个单独的 chunk (Home.[hash].js)，当访问这个路由时会被懒加载。
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // 路由级别的代码分割
            // 这会为这个路由生成一个单独的 chunk (About.[hash].js)，当访问这个路由时会被懒加载。
            component: AboutView
        }
    ]
});

export default router;