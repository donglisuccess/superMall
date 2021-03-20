<template>
  <div id="home">
    <nav-bar class="nav-back">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll-view 
    class="content" 
    ref="scroll" 
    @scrollposition="scrollposition" 
    @pullingup="pullingup">
        <carousel-figure :imglist="banner" :pointCount ="imgCount">
        <carousel-item 
        v-for="(item,index) in banner" 
        :key="index" 
        :imgone="item" 
        slot="img" 
        v-show="index == imgCount"></carousel-item>
      </carousel-figure>
      <recommend :recommendInfo="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control :tabText="['流行','新款','精选']" class="setPlace" @togglegood="toggle"></tab-control>
      <goods-list :goodlist="goods[currentgoods]"></goods-list>
    </scroll-view>
    <back-top class="back-top" 
    @click.native="backClick()" :probe-type="3" 
    v-show="isShowTable"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import {CarouselFigure,CarouselItem} from "components/common/carousel/carousel.js";
import TabControl from "components/context/tabcontrol/TabControl.vue";
import GoodsList from "components/context/goods/GoodsList.vue";
import ScrollView from "components/common/scroll/ScrollView.vue";
import BackTop from "components/common/backtop/BackTop.vue";

import Recommend from "./childComponents/Recommend.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import {getHomeMultidata,getHomeGoodData} from "network/home.js";
export default {
  name:"Profile",
  components:{
    NavBar,
    CarouselFigure,
    CarouselItem,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    ScrollView,
    BackTop,
  },
  data(){
    return {
      banner:null,
      dKeyword:null,
      keywords:null,
      recommend:null,
      imgCount:0,
      // 下面是goods中的数据
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      },
      currentgoods:'pop',
      isShowTable:false
    }
  },
  methods:{
    /**
     * 这里是方法 
    */
   pullingup(){
     this.getHomeGoodData(this.currentgoods);
     this.$refs.scroll.bs.finishPullUp();
   },
   scrollposition(position){
     this.isShowTable = (-1*position.y) > 800;
   },
   toggle(index){
     switch(index){
       case 0 :this.currentgoods = 'pop';break;
       case 1 :this.currentgoods = "new"; break;
       case 2 :this.currentgoods = "sell"; break;
     }
   },
   backClick(){
    //  console.log("hhhh");
    // console.log(this.$refs.scroll.message);
    this.$refs.scroll.scrollTo(0,0,500);
   },
    roundImg(){
      setInterval(()=>{
        this.imgCount++;
        if(this.imgCount == this.banner.length){
          this.imgCount=0;
        }
      },4000);
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banner = res.data.data.banner.list;
        this.dKeyword =res.data.data.dKeyword;
        this.keywords = res.data.data.keywords;
        this.recommend = res.data.data.recommend.list;
      },error=>{
        console.log(error);
      });
    },
    /**
     * 这里是网络请求的数据
     */
    getHomeGoodData(type){
      let page = this.goods[type].page + 1;
      getHomeGoodData(type,page).then(res=>{
        // console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1;
      })
    }
  },
  created(){
    this.getHomeMultidata();
    // 获取goods中的数据
    this.getHomeGoodData('pop',1);
    this.getHomeGoodData('new',1);
    this.getHomeGoodData("sell",1);
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
#home{
  /* margin-top: 44px; */
  position: relative;
}
.setPlace{
  /* position: sticky; */
  top: 44px;
  background: #fff;
  z-index: 1;
}
.content{
  height: 300px;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
.back-top{
  position: fixed;
  bottom: 60px;
  right: 10px;
}
</style>