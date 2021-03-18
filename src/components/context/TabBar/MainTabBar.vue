<template>
      <tab-bar>
      <tab-item path='/home'>
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-img">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-active">
        <p slot="item-text">首页</p>
      </tab-item>
      <tab-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-img">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-active">
        <p slot="item-text">分类</p>
      </tab-item>
      <tab-item path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-img">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-active">
        <p slot="item-text">购物车</p>
      </tab-item>
      <tab-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-img">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-active">
        <p slot="item-text">我的</p>
      </tab-item>
    </tab-bar>  
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabItem from "components/common/tabbar/TabItem.vue"
export default {
  name:"MainTabBar",
  components:{
    TabItem,
    TabBar
  }
}
</script>

<style scoped>

</style>