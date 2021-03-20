<template>
  <div class="back-top-box">
    <img src="~assets/img/home/fanhuidingbu.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"BackTop",
  methods:{
    backClick(){
      console.log("backClick");
    }
  }
}
</script>

<style scoped>
.back-top-box{
  width: 38px;
  height: 38px;
  background: white;
  border-radius: 50%;
}
.back-top-box img{
  width: 40px;
  height: 40px;
  padding-right:1px;
  padding-bottom: 1px;
}
</style>