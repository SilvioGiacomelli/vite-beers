<script>
  export default {
    props:{
      name: String,
      price: String,
      image: String,
      rating: Object,
    }
  }
</script>
<template>
<div class="card" style="width: 18rem;">
  <img 
  :src="image" class="card-img-top" 
  :alt="name">
  <div class="card-body">
    <h5 class="card-text">{{ name }}</h5>
    <h5>{{ price }}</h5>
    <h5>{{ rating }}</h5>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>