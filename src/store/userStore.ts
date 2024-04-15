import {defineStore} from "pinia";
import {getUserInfo, LoginData, RegisterData, userLogin, userLogout, userRegister, UserState} from "../api/user";
import {clearToken, setAdmin, setToken} from "@/utils/auth";
// import router from "../router";

export const useUserStore = defineStore("user", {
    state: () => ({
        name: undefined,
        avatar: undefined,
        job: undefined,
        phone: undefined,
        email: undefined,
        role: '',
        balance: undefined,
        rank: undefined,
    }),
    actions: {
        async info() {
            const res = await getUserInfo();
            this.setInfo(res.data);
            return res;
        },
        setInfo(partial: Partial<UserState>) {
            this.$patch(partial as never);
        },
        async login(loginForm: LoginData): Promise<any>{
            try {
                const res = await userLogin(loginForm);
                setToken(res.data.token);
                if (res.data.admin) {
                    setAdmin('admin');
                }
                return new Promise(resolve => {
                    resolve(res);
                })
            } catch (err) {
                clearToken();
                throw err;
            }
        },
        async register(registerForm: RegisterData) {
            try{
                const res= await userRegister(registerForm);
                return new Promise(resolve => {
                    resolve(res);
                })
            }
            catch (err){
                throw err;
            }
        },
        resetInfo() {
            this.$reset();
        },
        logoutCallBack() {
            // const appStore = useAppStore();
            this.resetInfo();
            clearToken();
            // router.go(0);
            // removeRouteListener();
            // appStore.clearServerMenu();
        },
        // Logout
        async logout() {
            try {
                await userLogout();
            } finally {
                this.logoutCallBack();
            }
        },
    },
    getters: {}
})