<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"NavBar"
}
</script>

<style scoped>
.nav-bar{
  height: 44px;
  display: flex;
  text-align: center;
  top: 0px;
  left:0px;
  right: 0px;
  z-index: 1;
  line-height: 44px;
}
.left{
  width: 60px;
}
.center{
  flex: 1;
}
.right{
  width: 60px;
}
</style>