import {setupAuthGuard} from "./auth";
import {Router} from "vue-router";

export function setupRouterGuard(router:Router) {
    setupAuthGuard(router)
}
