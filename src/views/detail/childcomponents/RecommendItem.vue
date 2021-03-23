<template>
  <div class="recommend-item">
    <img :src="goodsItem.image" alt="">
    <p>{{goodsItem.title}}</p>
    <span class="text">{{"￥"+goodsItem.price}}</span>
    <span class="save">{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  name:"RecommendItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
.recommend-item {
  margin-top: 10px;
  width:48%;
}
.recommend-item img{
  width: 100%;
  border-radius: 5px;
}
p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
}
.text{
  font-size: 18px;
  margin-top: 10px;
  color: var(--color-high-text);
}
.save{
  margin-left: 30px;
  position: relative;
}
.save::before{
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  background: url('~assets/img/goods/shoucang.svg');
  background-size: 14px 14px;
  left: -15px;
  top: 2px;
}
</style>