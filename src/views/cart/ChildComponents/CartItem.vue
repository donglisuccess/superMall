<template>
  <div class="cart-item">
    <div class="cart-image">
      <check-button
      :ische="goodsitem.checked" @clickto="clickto"></check-button>
      <div class="image-big">
        <img :src="goodsitem.image" alt="">
      </div>
    </div>
    <div class="cart-text">
      <p class="title">{{goodsitem.title}}</p>
      <p class="desc">{{goodsitem.desc}}</p>
      <p class="price">
        <span>{{"￥" + goodsitem.price}}</span>
        <span>{{"X" + goodsitem.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name:"CartItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    clickto(){
      this.goodsitem.checked = !this.goodsitem.checked;
      console.log(this.$store.state.cartlist[0].checked);
      console.log(this.goodsitem.checked);
    }
  },
}
</script>

<style scoped>
.cart-item{
  height: 130px;
  display: flex;
  border-bottom: 2px solid #ccc;
}
.image-big{
  flex: 1;
}
.cart-image{
  display: flex;
}
.image-choice img{
  width: 22px;
}
.image-big{
  margin: auto 0px;
}
.image-big img{
  height: 100px;
  border-radius: 5px;
}
.cart-text{
  padding:10px 0px 10px 20px;
  flex: 2;
  width: 100px;
}
.title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  font-size: 18px;
  color: #666;
  font-weight: 600;
}
.desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  margin-top: 20px;
  font-size: 14px;
}
.price{
  margin-top: 20px;
  display: flex;
}
.price :nth-child(1){
  flex: 1;
  text-align: left;
  color: rgb(255, 102, 0);
}
.price :nth-child(2){
  flex: 1;
  text-align: right;
  padding-right: 20px;
}
</style>