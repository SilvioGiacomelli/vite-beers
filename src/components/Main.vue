<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
<div class="text-center my-5 container">
    
    <div class="row row-cols-4 mt-4">
      <Card
        v-for="card in this.store.cardList"
        :key="card.id"
        class="mb-5" 
        :name="card.name"
        :price="card.price"
        :rating="card.rating"
        :image="card.image"
        />

    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>