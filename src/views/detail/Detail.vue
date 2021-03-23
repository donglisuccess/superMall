<template>
  <div class="detail-all">
      <!-- 这里是导航栏部分 -->
      <datail-bar class="datail-bar">
      </datail-bar>
    <scroll-view class="detail-scroll" ref="scroll">
      <!-- 这里是顶部轮播图部分 -->
      <datail-swiper :detailTopImages ="topImage"></datail-swiper>
      <!-- 这里是展示商品信息的模块 -->
      <detail-title-info :goods='goods'></detail-title-info>
      <!-- 这里是展示商家信息 -->
      <detail-shop-info :shopInfo ="shopInfo"></detail-shop-info>
      <!-- 这里是店铺展示图片设置 -->
      <detail-images-show 
      :showImagesinfo="shopImages" @imageLoadFinish="imageLoad"></detail-images-show>
      <detail-params-info :itemParams="clothParams"></detail-params-info>
      <detail-info-comment :commentInfo ="commentList"></detail-info-comment>
      <recommend-list :recommend="recommend"></recommend-list>
    </scroll-view>
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
// 这里是引入的js文件
import {detailrequest,detaildata,detailShop,detailImagesshow,detailParams,recommend} from "network/detail.js";
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
  },
  created(){
    detailrequest(this.id).then(res=>{
      console.log(res);
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
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh();
    }
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
  bottom: 0px;
}
</style>