import {createRouter, createWebHashHistory} from "vue-router";

import {setupAuthGuard} from "./guards/auth";
const routes = [
    { path: '/', component: import("../views/home/index.vue") },
    {
        path:'/login',component: import('../views/login/index.vue')
    },
    {
        path: '/register', component: import('../views/register/index.vue')
    }
]
const router = createRouter({

    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
setupAuthGuard(router)
export default router