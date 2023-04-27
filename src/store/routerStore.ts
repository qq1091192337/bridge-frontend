import {defineStore} from "pinia";

export const useRouterStore = defineStore("router", {
    state: () => ({
        routes: [],
    }),
    getters: {

    },
    actions: {
        useRoutes(routes: any) {
            this.routes = routes;
        },

    }
})