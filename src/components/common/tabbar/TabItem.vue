<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isTrue">
      <slot name="item-img">
      </slot>
    </div>
    <div v-else>
      <slot name="item-active">
      </slot>
    </div>
      <div :style="textColor">
        <slot name="item-text">
        </slot>
      </div>  
  </div>  
</template>

<script>
export default {
  name:"TabItem",
  methods:{
    itemClick(){
      this.$router.push(this.path);
    }
  },
  props:{
    path:{
      type:String,
    }
  },
  computed:{
    isTrue(){
      return this.$route.path.indexOf(this.path) !=-1;
    },
    textColor(){
      return this.isTrue ? {color:"red"} : {};
    }
  },
}
</script>

<style scoped>
.tab-item{
  flex: 1;
  height: 49px;
  background: #f6f6f6;
  text-align: center;
  vertical-align: middle;
}
.tab-item img{
  width: 25px;
}
</style>