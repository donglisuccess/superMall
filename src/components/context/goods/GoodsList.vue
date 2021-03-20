<template>
  <div class="goods-list">
    <goods-item 
    v-for="(item,index) in goodlist.list" 
    :key="index" :gooditem = "item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  name:'GoodsList',
  components:{
    GoodsItem,
  },
  props:{
    goodlist:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>