import Vue from 'vue'
import Vuex from 'vuex'
import counter from '@/store/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        counter
    },
    strict: true
})