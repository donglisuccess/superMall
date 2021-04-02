<template>
  <div class="detail-all">
      <!-- <div>
        {{$store.state.cartlist}}
      </div> -->
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
    <back-top class="back-top" 
    @click.native="backClick()" :probe-type="3" 
    v-show="isShowTable"></back-top>
    <detail-bottom-bar @addcart = "addcart"></detail-bottom-bar>
    <toast :message="thismessage" :isShow="isShow"></toast>
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
import {detailrequest,detaildata,detailShop,detailImagesshow,detailParams,recommend,cartData} from "network/detail.js";
import {imageLoad,backTop} from "common/mixin.js";

// Toast组件
import Toast from "components/common/toast/Toast.vue";
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
      cartdata:{},
      Toast,
      isShow:false,
      thismessage:"",
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
    DetailBottomBar,
    Toast,
  },
  mixins:[imageLoad,backTop],
  created(){
    detailrequest(this.id).then(res=>{
      // console.log(res);
      this.topImage = res.data.result.itemInfo.topImages;
      this.goods = new detaildata(res.data.result.itemInfo,res.data.result);
      this.shopInfo = new detailShop(res.data.result.shopInfo);
      this.shopImages = new detailImagesshow(res.data.result.detailInfo)
      this.clothParams = new detailParams(res.data.result.itemParams);
      this.commentList = res.data.result.rate.list;
      this.cartdata = new cartData(res.data.result.itemInfo);
    });
    recommend().then(res=>{
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
      this.isShowTable = position > 1000;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    addcart(){  //设置加入购物车方法
    this.isShow = true;
    var me = this;
      this.$store.dispatch("addcart",this.cartdata).then(value=>{
        me.thismessage = value
        setTimeout(()=>{
          me.isShow= false;
        },2000);
      })
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
.back-top{
  position: fixed;
  bottom: 60px;
  right: 10px;
}
</style>