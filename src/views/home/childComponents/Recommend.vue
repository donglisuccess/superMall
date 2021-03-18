<template>
  <div class="recommend-box">
    <div v-for="(item,index) in recommendInfo" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-text">
          {{item.title}}
        </div>  
      </a>  
    </div>  
  </div>  
</template>

<script>
export default {
  name:"Recommend",
  props:{
    recommendInfo:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend-box{
  width: 100%;
  display: flex;
  padding: 10px 0px 20px 0px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex:1;
  text-align: center;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
.recommend-text{
  font-size: 14px;
}
</style>