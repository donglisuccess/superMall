<template>
  <li class="img-item">
    <a :href="imgone.link">
      <img :src="imgone.image" alt="" @load="carouselimg">
    </a>
  </li>
</template>

<script>
export default {
  name:"CarouselItem",
  props:{
    imgone:{
      type:Object,
      default:{},
    }
  },
  methods:{
    carouselimg(){
      this.$emit("carouselimgload")
    }
  }
}
</script>

<style scoped>
.img-item img{
  width: 100%;
}

</style>