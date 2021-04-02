<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{getAllCartList.length}})</div>
    </nav-bar>
    <scroll-view class="scroll-box">
      <cart-list>
        <cart-item v-for="(item,index) in getAllCartList" 
        :key="index" :goodsitem ="item"></cart-item>
      </cart-list>
    </scroll-view>
    <cart-all-price></cart-all-price>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./ChildComponents/CartList.vue";
import CartItem from "./ChildComponents/CartItem.vue";
import ScrollView from "components/common/scroll/ScrollView.vue";
import CartAllPrice from "./ChildComponents/CartAllPrice.vue";

export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartItem,
    ScrollView,
    CartAllPrice,
  },
  computed:{
    getAllCartList(){
      return this.$store.state.cartlist;
    }
  }
}
</script>

<style scoped>
.nav-bar{
  height: 44px;
  background: var(--color-high-text);
  color: white;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  z-index: 10;
}
.scroll-box{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 44px;
  bottom: 89px;
}
</style>