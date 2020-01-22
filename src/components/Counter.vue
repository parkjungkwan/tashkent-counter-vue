<template>
<div>
    <div>counter</div>
   {{ getCounter}} <br />
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods:{
    increment(){
        this.$store.dispatch('increment')
    },
    decrement(){
        this.$store.dispatch('decrement')

    }
  },
  computed: {
  ...mapGetters([
    'getCounter'
  ])
}

};
</script>
