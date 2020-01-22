import Vue from 'vue'
import Vuex from 'vuex'
import counter from '@/store/counter'
import todo from '@/store/todo'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        counter, todo
    },
    strict: true
})