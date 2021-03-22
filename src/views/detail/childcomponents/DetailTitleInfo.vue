<template>
  <div class="content">
    <h1 class="title">{{goods.title}}</h1>
    <div class="price">
      <span>{{goods.nowPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span>今日特价</span>
    </div>
    <div class="number">
      <div v-for="(item,index) in goods.columns" 
      :key = 'index'>{{item}}</div>
    </div>
    <div class="service">
      <div>
        <img src="~assets/img/detail/duigou.svg" alt="">
        <span>7天无理由退货</span>
      </div>
      <div>
        <img src="~assets/img/detail/duigou.svg" alt="">
        <span>72小时发货</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailTitleInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  computed:{
    getPrePrice(){
      return parseFloat(this.goods.nowPrice) + parseFloat(this.goods.mobilePrice)
    }
  }
}
</script>

<style scoped>
.content{
  padding-left: 10px;
  padding-right: 10px;
}
.title{
  font-size: 18px;
  line-height: 23px;
}
.price :nth-child(1){
  font-size: 23px;
  font-weight: 500;
  color: var(--color-high-text);
}
.price :nth-child(2){
  font-size: 14px;
  padding:0px 10px 0px 10px;
  text-decoration: line-through;
}
.price :nth-child(3){
  font-size: 18px;
  background: var(--color-high-text);
  color:white;
  padding:0px 5px 0px 5px;
  border-radius: 5px;
}
.number{
  display: flex;
  padding: 20px 0px 10px 0px;
  border-bottom: 3px solid #efefef;
}
.number div{
  flex: 1;
}
.number :nth-child(1){
  text-align: left;
}
.number :nth-child(2){
  text-align: center;
}
.number :nth-child(3){
  text-align: right;
}
.service{
  padding: 15px 0px 15px 0px;
  display: flex;
}
.service div{
  flex: 1;
}
.service :nth-child(1){
  text-align: left;
  vertical-align:middle;
}
.service :nth-child(2){
  text-align: right;
}
.service img{
  width: 20px;
  margin-bottom: 2px;
}
</style>
