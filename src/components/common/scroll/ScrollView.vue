<template>
  <div class="swipper" ref="swipper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name:"ScrollView",
  data(){
    return {
      bs:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  methods:{
    scrollTo(x,y,time = 300){
      this.bs.scrollTo(x,y,time);
    }
  },
  // 当挂载完之后
  mounted(){
    this.bs = new BScroll(this.$refs.swipper,{
      probeType:this.probeType,
      pullUpLoad:true,
      observeDOM:true,
      click:true,//当设置click为true或者false,button都是可以点击的，
      //但是当click设置为false的时候，div盒子等都是不可以进行点击的
    });
    // this.bs.on("pullingUp",()=>{
    //   console.log("下拉个规划表");
    //   setInterval(()=>{
    //     this.bs.finishPullUp();
    //   },1000);
    // })
    this.bs.on("scroll",(position)=>{
      this.$emit("scrollposition",position);
    });
    this.bs.on("pullingUp",()=>{
      this.$emit("pullingup");
    })
  }
}
</script>

<style scoped>

</style>