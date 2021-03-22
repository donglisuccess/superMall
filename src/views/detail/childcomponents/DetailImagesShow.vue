<template>
  <div class="shop-show-images">
    <div class="desc">
      <p>{{showImagesinfo.desc}}</p>
    </div>
    <div class="key">
      <p>{{showImagesinfo.key}}</p>
    </div>
    <div v-for="(item,index) in showImagesinfo.imagelist" 
    :key="index" class="images">
      <img :src="item" alt="" @load="imageLoadFinish">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailImagesShow",
  props:{
    showImagesinfo:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return {
      count:0,
    }
  },
  methods:{
    imageLoadFinish(){
      if(++this.count == this.showImagesinfo.imagelist.length){
        this.$emit("imageLoadFinish")
      }
    }
  }
}
</script>

<style scoped>
.shop-show-images{
  padding:0px 10px 0px 10px;
}
.desc{
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  color: #444;
}
.desc ::before{
  content: "";
  position: absolute;
  top: -10px;
  width: 130px;
  height: 2px;
  border:1px solid #888;
}
.desc ::after{
  content: "";
  position: absolute;
  width: 130px;
  height: 1px;
  border:1px solid #888;
  bottom: -10px;
  right: 0px;
}
.key{
  padding-top: 30px;
  padding-bottom: 30px;
  color: #000;
}
.images img{
  width: 100%;
}
</style>