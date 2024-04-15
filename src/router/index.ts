import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import { setupAuthGuard } from './guards/auth';
import {defineAsyncComponent} from "vue";

const routes:RouteRecordRaw[] = [
    { path: '/', component: () => import('../views/home/index.vue') },
    {
        path: '/login',
        component: defineAsyncComponent(() => import('../views/login/index.vue'))
    },
    {
        path: '/register',
        component: defineAsyncComponent(() => import('../views/register/index.vue')),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: defineAsyncComponent(() => import('../views/dashboard/index.vue')),
        redirect: '/dashboard/overview',
        children: [
            { path: 'overview', component: defineAsyncComponent(() => import('../views/dashboard/overview/index.vue')) },
            { path: 'picture-view', component: defineAsyncComponent(() => import('../views/dashboard/picture-view/index.vue')) },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

setupAuthGuard(router);

export default router;