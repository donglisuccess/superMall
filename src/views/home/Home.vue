<template>
  <div id="home">
    <nav-bar class="nav-back">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :tabText="['流行','新款','精选']" 
      class="setPlace zindex" 
      @togglegood="toggle" 
      ref="tabcontrol1" v-show="isFixed"></tab-control>
    <scroll-view 
    class="content" 
    ref="scroll" 
    @scrollposition="scrollposition" 
    @pullingUp="imgload">
      <carousel-figure 
        :imglist="banner" 
        :pointCount ="imgCount">
          <carousel-item 
            v-for="(item,index) in banner" 
            :key="index" 
            :imgone="item" 
            slot="img" 
            v-show="index == imgCount" 
            @carouselimgload="carouselimgload">
          </carousel-item>
      </carousel-figure>
      <recommend :recommendInfo="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control :tabText="['流行','新款','精选']" 
        class="setPlace" 
        @togglegood="toggle" 
        ref="tabcontrol2" :class="{fixed:isFixed}"></tab-control>
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

import Recommend from "./childComponents/Recommend.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import {getHomeMultidata,getHomeGoodData} from "network/home.js";
import {imageLoad,backTop} from "common/mixin.js";

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
  },
  mixins:[imageLoad,backTop],
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
      isFixed:false,
      tabposition:0,
      saveY:0,
    }
  },
  methods:{
    /**
     * 这里是方法 
    */
   carouselimgload(){
    this.tabposition = this.$refs.tabcontrol2.$el.offsetTop
   },
   scrollposition(position){
     this.isShowTable = (-1*position.y) > 800;
     
    this.isFixed = (-1*position.y) > this.tabposition;
   },
   toggle(index){
     switch(index){
       case 0 :this.currentgoods = 'pop';break;
       case 1 :this.currentgoods = "new"; break;
       case 2 :this.currentgoods = "sell"; break;
     }
     this.$refs.tabcontrol1.currentIndex = index;
     this.$refs.tabcontrol2.currentIndex = index;
   },
   backClick(){
    //  console.log("hhhh");
    // console.log(this.$refs.scroll.message);
    this.$refs.scroll.scrollTo(0,0,500);
   },
   imgload(){
     this.getHomeGoodData(this.currentgoods);
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
        this.$refs.scroll.finishPullUp();
      })
      // console.log(this.$refs);  这里不能写在这里，因为当刚加载的时候就执行
      // this.$refs为{}
    },
  },
  created(){
    this.getHomeMultidata();
    // 获取goods中的数据
    this.getHomeGoodData('pop',1);
    this.getHomeGoodData('new',1);
    this.getHomeGoodData("sell",1);
    this.roundImg();
    // 这里设置事件总线，将goods-item组件中的事件放到上面，从而在home组件上面
    // 进行监听
  },
  mounted(){
  },
  destroyed(){
    console.log('ss');
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scrollY();
    // console.log(this.saveY);
    // 当离开的时候取消总线上的事件监听

    this.$bus.$off("imgloadout",this.refresh)
  }
}
</script>

<style scoped>
.nav-back{
  background: var(--color-tint);
  color: white;
  font-weight: 600;
  z-index: 10;
  position: relative;
}
#home{
  /* margin-top: 44px; */
  position: relative;
}
.setPlace{
  /* position: sticky; */
  top: 0px;
  background: #fff;
  z-index: 1;
}
.zindex{
  position: relative;
  z-index: 10;
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

<!--refresh出现错误总结：
1.当home标签开始创建之后就开始图片数据。
2.当图片数据加载完成后，开始触发emit向总线发送事件
3.总线监听到时，就开始查找this.$refs.scroll.refresh()。
4.如果此时的scroll还没有创建，则就会报错。
-->