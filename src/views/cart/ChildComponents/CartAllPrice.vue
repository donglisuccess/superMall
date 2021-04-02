<template>
  <div class="cart-all-price">
    <div class="left">
      <cart-button  class="checked"></cart-button>
      <span>全选</span>
    </div>
    <div class="center">
      <span>合计</span>
      <span>{{}}</span>
    </div>
    <div class="right">
      去计算({{}})
    </div>
  </div>
</template>

<script>
import CartButton from "./CheckButton.vue";
export default {
  name:"CartAllPrice",
  components:{
    CartButton
  },
  computed:{

  }
}
</script>

<style scoped>
.cart-all-price{
  position: fixed;
  bottom: 49px;
  background: #eee;
  left: 0px;
  right: 0px;
  height: 40px;
  padding:0px 0px 0px 10px;
  display: flex;
  text-align: center;
  align-items: center;
}
.left{
  flex: 1;
  display: flex;
  vertical-align: middle;
}
.left span{
  margin-left: 20px;
}
.center{
  flex:2
}
.right{
  flex: 1;
  line-height: 40px;
  background: rgb(255, 0, 0);
  color: white;
}
.checked{
  width: 25px;
  height: 25px;
  border: 2px solid #ccc;
  border-radius: 50%;
}
</style>