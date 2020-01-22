const state ={
    todo: []

}
const mutations ={
    addTodo(state, payload){
        alert(`변이에  할일 추가 클릭 !! ${payload}`)
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


    addTodo:({commit},{task}) =>{
        
        commit('addTodo', task)
    } ,
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