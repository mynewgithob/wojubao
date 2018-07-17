import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city:'成都'
    },
    actions: {
        changeCity (ctx,city) {
            ctx.commit('hanleChangeCity',city)
        }
    },
    mutations: {
        hanleChangeCity (state,city) {
            state.city = city
        }
    }
})