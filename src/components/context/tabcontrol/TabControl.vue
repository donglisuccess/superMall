<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" 
    v-for="(item,index) in tabText" 
    :key="index" 
    :class="{active:index === currentIndex}" 
    @click="currentSet(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    tabText:{
      type:Array,
    }
  },
  data(){
    return {
      currentIndex:0,
    }
  },
  methods:{
    currentSet(index){
      this.currentIndex = index;
      this.$emit("togglegood",index);
    },
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
}
.tabcontrol-item{
  flex: 1;
} 
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
  padding:5px
}
</style>