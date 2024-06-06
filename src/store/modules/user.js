import { getInfo, setInfo } from "@/utils/storage"
export default {
    namespaced: true,
    state() {
        return {
            userInfo: getInfo()
        }
    },
    getters: {

    },
    mutations: {
        setUserInfo(state, obj) {
            state.userInfo = obj
            setInfo(obj)
        }
    },
    actions: {
        async logout(context) {
            context.commit('setUserInfo', {})
            context.commit('cart/setCartList', {}, { root: true })
        }
    }
}


