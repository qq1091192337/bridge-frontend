import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@vuemap/vue-amap/dist/style.css'

import {createPinia} from "pinia";
import router from "./router";
import Http from "./http";
// import './http/mock'
import { Modal ,Message} from '@arco-design/web-vue';


const pinia = createPinia()

const app= createApp(App)
    .use(ArcoVue)
    .use(pinia)
    .use(router)
    .use(Http)
    .mount('#app')

