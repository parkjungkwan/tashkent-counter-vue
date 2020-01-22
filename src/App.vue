<template>
<div>
<router-link to="/home">Home</router-link>
<router-link to="/counter" style="margin:20px 20px">Counter</router-link>
<router-view/>
</div> 

</template>

<script>


export default {
  name: 'App',

 

  data: () => ({
    //
  }),
};
</script>
