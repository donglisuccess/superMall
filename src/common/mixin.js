import debound from "./debound.js";
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