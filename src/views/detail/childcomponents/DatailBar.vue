<template>
  <div>
    <nav-bar>
      <div slot="left" class="backImg" @click="backNext">
        <img src="~assets/img/detail/huabanfuben.svg" alt="">
      </div>
      <div slot="center" class="nav-center">
        <div 
        v-for="(item,index) in title" 
        :key ='index' 
        :class="{itemInchoice:index == currentIndex}"
        @click='detailBarClick(index)'>{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name:"DatailBar",
  components:{
    NavBar
  },
  data(){
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    backNext(){
      this.$router.back();
    },
    detailBarClick(index){
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
.nav-center{
  display: flex;
}
.nav-center>div{
  flex: 1;
  font-size: 14px;
}
.backImg img{
  width: 30px;
  margin-top: 7px;
}
.itemInchoice{
  color:var(--color-high-text);
}
</style>