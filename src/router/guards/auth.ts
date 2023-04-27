import {Router} from "vue-router";
import {isAdmin, isLogin} from "../../utils/auth";

export function setupAuthGuard(router: Router) {
    router.beforeEach((to, from) => {
        if (to.meta.requiresAuth && !isLogin()) {
            return {
                path: '/login',
                query: {redirect: to.fullPath, reason: '需要登录'},
            }
        }
        if (to.meta.requiresAdmin && !isAdmin()) {
            return {
                name: '403',
            }
        }
    })
}