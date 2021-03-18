<template>
  <div>
    <nav-bar class="nav-back">
      <div slot="center">购物街</div>
    </nav-bar>
    <carousel-figure :imglist="banner" :pointCount ="imgCount">
      <carousel-item 
      v-for="(item,index) in banner" 
      :key="index" 
      :imgone="item" 
      slot="img" 
      v-show="index == imgCount"></carousel-item>
    </carousel-figure>
    <recommend :recommendInfo="recommend"></recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import {getHomeMultidata} from "network/home.js";
import {CarouselFigure,CarouselItem} from "components/common/carousel/carousel.js";
import Recommend from "./childComponents/Recommend.vue";
export default {
  name:"Profile",
  components:{
    NavBar,
    CarouselFigure,
    CarouselItem,
    Recommend
  },
  data(){
    return {
      banner:null,
      dKeyword:null,
      keywords:null,
      recommend:null,
      imgCount:0,
    }
  },
  methods:{
    roundImg(){
      setInterval(()=>{
        this.imgCount++;
        if(this.imgCount == this.banner.length){
          this.imgCount=0;
        }
      },4000);
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banner = res.data.data.banner.list;
      this.dKeyword =res.data.data.dKeyword;
      this.keywords = res.data.data.keywords;
      this.recommend = res.data.data.recommend.list;
    },error=>{
      console.log(error);
    });
    this.roundImg();
  }
}
</script>

<style scoped>
.nav-back{
  background: var(--color-tint);
  color: white;
  font-weight: 600;
}
</style>