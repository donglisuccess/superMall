<template>
  <div class="goods-item">
    <a :href="gooditem.link">
      <img :src="gooditem.showLarge.img" alt="">
      <div class="text-box">
        <p>{{gooditem.title}}</p>
        <span>{{gooditem.orgPrice}}</span>
        <span>{{gooditem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
    gooditem:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
.goods-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.text-box{
  position: absolute;
  bottom: 5px;
  left: 3px;
  width: 100%;
}
p{
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.text-box :nth-child(2){
  color:var(--color-high-text);
}
.text-box :nth-child(3){
  position: relative;
  margin-left: 30px;
}
.text-box :nth-child(3)::before{
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: 1px;
  background: url('~assets/img/goods/shoucang.svg');
  background-size: 14px 14px;
}
</style>