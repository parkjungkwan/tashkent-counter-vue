<template>
  <li class="todo" >
    <div class="view">
      <input class="toggle"
        type="checkbox">
      <label> 할일목록 </label>
      <button class="destroy" ></button>
    </div>
   
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'removeTodo'
    ])
    
  }
}
</script>