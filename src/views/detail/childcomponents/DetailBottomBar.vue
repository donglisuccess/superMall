<template>
  <div class="bottom-bar">
    <div class="left-box">
      <div>
        <img src="~assets/img/detail/kefu.svg" alt="">  
        <p>客服</p>
      </div>  
      <div>
        <img src="~assets/img/detail/dianpu.svg" alt="">
        <p>店铺</p>
      </div>
      <div>
        <img src="~assets/img/detail/shoucang.svg" alt="">
        <p>收藏</p>
      </div>
    </div>  
    <div class="right-box">
      <div @click="addCart">
        加入购物车
      </div>
      <div>
        购买
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name:"DetailBottomBar",
  methods:{
    addCart(){
      this.$emit("addcart");
      
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 59px;
  position:fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: white;
  display: flex;
}
.left-box{
  flex: 5;
  display: flex;
}
.left-box div{
  flex: 1;
  text-align: center;
}
.left-box div p {
  font-size: 16px;
  color: #000;
}
.left-box div img{
  width: 30px;
  margin-top: 4px;
}
.right-box{
  flex: 4;
  display: flex;
}
.right-box div{
  flex: 1;
}
.right-box div:nth-child(1){
  background: rgb(240, 240, 12);
  font-weight: 600;
  line-height: 59px;
  color: #000;
  text-align: center;
}
.right-box div:nth-child(2){
  background: var(--color-high-text);
  font-weight: 600;
  line-height: 59px;
  color: white;
  text-align: center;
}
</style>