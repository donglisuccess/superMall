<template>
  <div :class="{'ischecked':ische}" @click="clickitem">
    <img src="~assets/img/cart/xuanze.png" alt="">
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    ische:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    clickitem(){
      this.$emit("clickto");
    }
  }
}
</script>

<style scoped>
div{
  width: 25px;
  height: 25px;
  margin: auto 5px;
  border-radius: 50%;
  border: 2px solid #ccc; 
}
img{
  width: 22px;
}
.ischecked{
  background-color: red;
}
</style>