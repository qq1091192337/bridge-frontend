import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import {createPinia} from "pinia";
import router from "./router";
import Http from "./http";
import './http/mock'

const pinia = createPinia()

createApp(App)
    .use(ArcoVue)
    .use(pinia)
    .use(router)
    .use(Http)
    .mount('#app')