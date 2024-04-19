import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@vuemap/vue-amap/dist/style.css'

import {createPinia} from "pinia";
import Http from "./http";
import {createRouter, createWebHashHistory} from "vue-router";
import {setupAuthGuard} from "./router/guards/auth";
// import './http/mock'


const pinia = createPinia()

const router =createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component:()=> import('./views/home/index.vue')
        },
        {
            path: '/login',
            component: () => import('./views/login/index.vue')
        },
        {
            path: '/register',
            component: () => import('./views/register/index.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./views/dashboard/index.vue'),
            meta: { requiresAuth: true },
            redirect: '/dashboard/overview',
            children: [
                { path: 'overview', component: () => import('./views/dashboard/overview/index.vue') },
                { path: 'picture-view', component: () => import('./views/dashboard/picture-view/index.vue') },
            ],
        },
        {
            path:'/User/profile',
            name:'User',
            component:()=>import('./views/User/profile/index.vue'),
        }
    ]
})

setupAuthGuard(router);
const app= createApp(App)

    .use(ArcoVue)
    .use(pinia)
    .use(Http)
    .use(router)

app.mount('#app')


