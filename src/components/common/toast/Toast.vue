<template>
  <div>
    <div class="box" v-show="isShow">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    message:{
      type:String,
      default:"",
    },
    isShow:{
      type:Boolean,
      default:false,
    }
  }
}
</script>

<style scoped>
.box{
  background: rgba(0,0,0.75);
  padding:8px 10px;
  color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
}
</style>