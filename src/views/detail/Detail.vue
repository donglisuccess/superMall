<template>
  <div class="detail-all">
      <!-- 这里是导航栏部分 -->
      <datail-bar class="datail-bar" @detailclick="detailclick" ref="detailbar">
      </datail-bar>
    <scroll-view class="detail-scroll" ref="scroll"  @scrollposition="scrollposition">
      <!-- 这里是顶部轮播图部分 -->
      <datail-swiper :detailTopImages ="topImage" ref="goods"></datail-swiper>
      <!-- 这里是展示商品信息的模块 -->
      <detail-title-info :goods='goods'></detail-title-info>
      <!-- 这里是展示商家信息 -->
      <detail-shop-info :shopInfo ="shopInfo"></detail-shop-info>
      <!-- 这里是店铺展示图片设置 -->
      <detail-images-show 
      :showImagesinfo="shopImages" @imageLoadFinish="imageLoad" ></detail-images-show>
      <detail-params-info :itemParams="clothParams" ref="params"></detail-params-info>
      <detail-info-comment :commentInfo ="commentList" ref="comment"></detail-info-comment>
      <recommend-list :recommend="recommend" ref="recommend"></recommend-list>
    </scroll-view>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
import DatailBar from "views/detail/childcomponents/DatailBar.vue";
import DatailSwiper from "./childcomponents/DetailSwiper.vue";
import DetailTitleInfo from "./childcomponents/DetailTitleInfo.vue";
import DetailShopInfo from "./childcomponents/DetailShopInfo.vue";
import ScrollView from "components/common/scroll/ScrollView.vue";
import DetailImagesShow from "./childcomponents/DetailImagesShow.vue";
import DetailParamsInfo from "./childcomponents/DetailParamsInfo.vue";
import DetailInfoComment from "./childcomponents/DetailInfoComment.vue";
import RecommendList from "./childcomponents/RecommendList.vue";
import DetailBottomBar from "./childcomponents/DetailBottomBar.vue";
// 这里是引入的js文件
import {detailrequest,detaildata,detailShop,detailImagesshow,detailParams,recommend} from "network/detail.js";
import {imageLoad} from "common/mixin.js";
import debound from "common/debound.js";
export default {
  name:"Detail",
  data(){
    return {
      id:this.$route.params.id,
      topImage:[],
      title:null,
      goods:{},
      shopInfo:{},
      shopImages:{},
      clothParams:{},
      commentList:[],
      recommend:[],
      gotoItem:[],
      imgload:null,
      currentIndex:0,
    }
  },
  components:{
    DatailBar,
    DatailSwiper,
    DetailTitleInfo,
    DetailShopInfo,
    ScrollView,
    DetailImagesShow,
    DetailParamsInfo,
    DetailInfoComment,
    RecommendList,
    DetailBottomBar
  },
  mixins:[imageLoad],
  created(){
    detailrequest(this.id).then(res=>{
      // console.log(res);
      // console.log(res.data.result.itemInfo.topImages);
      this.topImage = res.data.result.itemInfo.topImages;
      this.goods = new detaildata(res.data.result.itemInfo,res.data.result);
      this.shopInfo = new detailShop(res.data.result.shopInfo);
      // console.log(this.shopInfo);
      this.shopImages = new detailImagesshow(res.data.result.detailInfo)
      // console.log(this.shopImages);
      this.clothParams = new detailParams(res.data.result.itemParams);
      // console.log(this.clothParams);
      this.commentList = res.data.result.rate.list;
      // console.log(this.commentList);
    });
    recommend().then(res=>{
      // console.log(res.data.data.list);
      this.recommend = res.data.data.list;
    });
  },
  mounted(){
    
  },
  destroyed(){
    this.$bus.$off("imgloadout",()=>{
      this.refresh();
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh();
      // console.log("hh");
      // 当图片全部刷新完之后，每一个模块的位置信息
      this.gotoItem = [];
      this.gotoItem.push(this.$refs.goods.$el.offsetTop);
      this.gotoItem.push(this.$refs.params.$el.offsetTop);
      this.gotoItem.push(this.$refs.comment.$el.offsetTop);
      this.gotoItem.push(this.$refs.recommend.$el.offsetTop);
      // console.log(Number.MAX_VALUE);
      this.gotoItem.push(Number.MAX_VALUE)
    },
    detailclick(index){
      this.$refs.scroll.scrollTo(0,-this.gotoItem[index],1000);
    },
    scrollposition(){
      // console.log(this.$refs.scroll.bs.y); 
      let position = -this.$refs.scroll.bs.y;
      for(let i =0;i<this.gotoItem.length-1;i++){
        // if(this.currentIndex!==i &&((position > this.gotoItem[i] && position < this.gotoItem[i+1])||( i == this.gotoItem.length-1 && position > this.gotoItem[3]))){
        //   this.currentIndex = i;
        //   // console.log(i);
        //   this.$refs.detailbar.currentIndex = this.currentIndex;
        // }
        // hack的做法
        if((this.currentIndex != i) && (position > this.gotoItem[i] && position < this.gotoItem[i+1])){
          this.currentIndex = i;
          this.$refs.detailbar.currentIndex = this.currentIndex;
        }
      }
    }
  },
  updated(){

  }
}
</script>

<style scoped>
.datail-bar{
  border-bottom: 3px solid #eee;
  position: relative;
  z-index: 10;
  background: white;
}
.detail-all{
  position: relative;
  z-index: 10;
  background: white;
  height: 100vh;
}
.detail-scroll{
  position: absolute;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 59px;
}
</style>