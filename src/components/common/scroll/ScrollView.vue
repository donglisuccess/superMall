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
      this.bs && this.bs.scrollTo(x,y,time);
    },
     refresh(){
      this.bs && this.bs.refresh();
    },
    finishPullUp(){
      this.bs && this.bs.finishPullUp();
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
    // 这里如果是箭头函数，则指向的是vue对象
    // 如果是普通函数,则指向Better-scropt对象
    this.bs.on("pullingUp",()=>{
      this.$emit("pullingUp");
    })
  }
}
</script>

<style scoped>

</style>