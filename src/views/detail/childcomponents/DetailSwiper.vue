<template>
  <div class="detail-box">
    <ul class="detail-img">
      <li v-for="(image,index) in detailTopImages" 
      :key="index" v-show="index == currentIndex">
        <img :src="image" alt="">
      </li>
    </ul>
    <ul class= 'detail-point'>
      <li v-for="(image,index) in detailTopImages" 
      :key="index" :class="{pointColor:index == currentIndex}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"DetailSwiper",
  props:{
    detailTopImages:{
      type:Array,
      default:[],
    }
  },
  data(){
    return {
      currentIndex:0,
    }
  },
  created(){
    // 实现循环操作
    setInterval(()=>{
      this.currentIndex +=1;
      if(this.currentIndex == this.detailTopImages.length){
        this.currentIndex = 0;
      }
    },3000)
  }
}
</script>

<style scoped>
.detail-box{
  width: 100%;
  position: relative;
}
.detail-img li{
  height: 300px;
  overflow: hidden;
}
.detail-img {
  list-style: none;
}
.detail-img img{
  width: 100%;
}
.detail-point{
  position: absolute;
  bottom: 5px;
  left: 20px;
}
.detail-point li{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  list-style: none;
  float: left;
  margin:8px;
}
.pointColor{
  background-color:var(--color-high-text) !important;
}
</style>