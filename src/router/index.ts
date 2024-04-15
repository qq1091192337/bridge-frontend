import {createRouter, createWebHashHistory} from 'vue-router';




//setupAuthGuard(router);

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component:()=> import('@/views/home/index.vue')
        },
        {
            path: '/login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: '/register',
            component: () => import('@/views/register/index.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            redirect: '/dashboard/overview',
            children: [
                { path: 'overview', component: () => import('@/views/dashboard/overview/index.vue') },
                { path: 'picture-view', component: () => import('@/views/dashboard/picture-view/index.vue') },
            ],
        },
    ]
});