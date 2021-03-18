<template>
  <div class="carousel-box">
    <ul class="carousel-img-box">
      <slot name="img"></slot>
    </ul>
    <ul class="carousel-point">
      <li v-for="(item,index) in imglist" 
      :key="index" 
      :style="showPoint(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"CarouselFigure",
  props:{
    imglist:{
      type:Array,
      default(){
        return [];
      }
    },
    pointCount:{
      type:Number,
    }
  },
  methods:{
    showPoint(index){
      return this.pointCount == index ? {'background-color':'red'}:{};
    },
  }
}
</script>

<style scoped>
.carousel-box{
  width: 100%;
  position: relative;
}
.carousel-img-box{
  width: 100%;
  list-style: none;
}
.carousel-point{
  position: absolute;
  bottom: 10px;
  left: 30px;
  list-style: none;
}
.carousel-point li{
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  float: left;
  margin:0px 6px 0px 6px;
}
</style>