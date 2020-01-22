<template>
 <main class="task-list">
    <h1>할일목록</h1>
    <li class="todo" >
      <input class="toggle" type="checkbox"> {{ getTodo}} 
      <button class="destroy" > X </button>
    </li>
    <div class="add">
      <input id="addTodo" type="text" />
      <button type="button">할일추가</button>
    </div>
    
  </main>
  
</template>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addTodo',
      'editTodo',
      'toggleTodo',
      'removeTodo'
    ])
  },
  computed: {
    ...mapGetters(['getTodo'])
    
  }
}
</script>
<style scoped>
.task-list{margin: 300px}
h1 {margin: 30px}
.add{margin: 30px}
li {list-style:none;}
#addTodo {border : 1px solid black}
button{border : 1px solid black}
</style>