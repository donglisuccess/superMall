<template>
  <div class="recommend-all">
    <recommend-item v-for="(item,index) in recommend" 
    :key="index" 
    :goodsItem ="item" class="goods-item"></recommend-item>
  </div>
</template>

<script>
import RecommendItem from "./RecommendItem.vue";
export default {
  name:"RecommendList",
  components:{
    RecommendItem,
  },
  props:{
    recommend:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend-all{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
}
</style>