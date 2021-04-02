import debound from "./debound.js";
import BackTop from "components/common/backtop/BackTop.vue";
export const imageLoad ={
  data(){
    return {
      refresh:null,
    }
  },
  mounted(){
      // 图片加载环节
      this.refresh = debound(this.$refs.scroll.refresh,30);
      this.$bus.$on("imgloadout",()=>{
        this.refresh();
      })
  }
}

// 这里是抽离混入
export const backTop = {
  data(){
    return {
      isShowTable:false,
    }
  },
  components:{
    BackTop
  },

}