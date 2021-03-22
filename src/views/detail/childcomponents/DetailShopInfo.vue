<template>
  <div class="shop-info">
    <div class="imageinfo">
      <a :href="shopInfo.place">
        <img :src="shopInfo.logo" alt="">
        <span>{{shopInfo.name}}</span>
      </a>
    </div>
    <div class="scores">
      <div class="left">
        <div>
          <p>{{shopInfo.sellAll}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{shopInfo.goodsAll}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <p v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{isGreen:item.isBetter,isRed:!item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="low">低</span>
          <span v-else class="high">高</span>
        </p>
      </div>
    </div>
    <div class="enter">
        <a :href="shopInfo.place">进店看看</a>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailShopInfo",
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
.shop-info{
  padding: 10px;
  height: 300px;
}
.imageinfo img{
  width: 50px;
  vertical-align: middle;
}
.imageinfo span{
  font-size: 20px;
  margin-left: 15px;
}
.scores{
  display: flex;
  margin-top: 20px;
}
.scores>div{
  flex: 1;
}
.left{
  display: flex;
  border-right: 1px solid #ccc;
  text-align: center;
}
.left div{
  flex: 1;
  font-size:17px;
  line-height:30px;
  margin-top:10px;
}
.right p{
  padding:5px 0px 5px 0px;
  display: flex;
}
.right p :nth-child(1){
  flex: 2;
  text-align:center
}
.right p :nth-child(2){
  flex: 1;
}
.low{
  background: rgb(142, 235, 4);
  color: white;
}
.high{
  color: white;
  background: var(--color-high-text);
}
.isGreen{
  color: rgb(142, 235, 4);
}
.isRen{
  color:var(--color-high-text);
}
.enter{
  text-align: center;
  font-size: 20px;
  width: 200px;
  background: #ccc;
  padding: 10px;
  margin: 20px auto;
  border-radius: 10px;
}
</style>