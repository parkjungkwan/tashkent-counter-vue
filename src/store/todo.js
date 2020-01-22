const state ={
    todo: '프로젝트 수행'

}
const mutations ={
    addTodo(state, payload){
        state.todo = payload
    },
    editTodo(state, payload){
        state.todo = payload
    },
    toggleTodo(state, payload){
        state.todo = payload
    },
    removeTodo(state, payload){
        state.todo = payload
    }

}

const actions={


    addTodo:({commit}) => commit('addTodo'),
    editTodo:({commit})=> commit('editTodo'),
    toggleTodo:({commit})=> commit('toggleTodo'),
    removeTodo:({commit})=> commit('removeTodo')


}
const getters={
    getTodo: function (state) {
      return state.todo;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}