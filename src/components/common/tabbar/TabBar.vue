<template>
     <div id="tabbar">
       <slot></slot>
    </div>
</template>

<script>
export default {
  name:"TabBar"  
}
</script>

<style scoped>
#tabbar{
  display: flex;
  position:fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 5px #ccc;
}
</style>