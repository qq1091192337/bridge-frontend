import {defineStore} from "pinia";

export const useAppStore = defineStore(
    "app", {
    state: () => ({
        ModalDetailVisible: false,
    }),
    actions: {
        setModalDetailVisible(visible: boolean) {
            this.ModalDetailVisible = visible;
        },
    },
    getters: {
        getModalDetailVisible() {
            return this.ModalDetailVisible;
        },
    },
})