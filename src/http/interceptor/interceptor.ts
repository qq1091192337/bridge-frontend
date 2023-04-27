import axios, {InternalAxiosRequestConfig} from "axios";
import {App} from "vue";
import {Message} from "@arco-design/web-vue";


export default function installInterceptor(app: App) {
    Message._context = app._context;
    axios.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            // 此处对请求进行配置
            return config;
        },
        (error: any) => {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );
// 添加响应拦截器
    axios.interceptors.response.use(
        (response: { data: any; }) => {
            const res = response.data;
            // if the custom code is not 200, it is judged as an error.
            if (res.code !== 20000) {
                // remind users

                // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
                    if (res.msg) Message.error(res.msg);

                return Promise.reject(new Error(res.msg || 'Error'));
            }
            return res;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );
}