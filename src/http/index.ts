import {App} from "vue";

import installInterceptor from "./interceptor/interceptor";
// @ts-ignore
import axios from "axios";


const install = (app :App) => {
    installInterceptor(app);
    app.config.globalProperties.$axios = axios;
}

export default {
    install
}