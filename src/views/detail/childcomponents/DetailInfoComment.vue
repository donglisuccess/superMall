<template>
  <div class="comment-all" v-if="this.commentInfo">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user-content">
      <div v-for="(item,index) in commentInfo" :key="index">
        <div class="user-header">
          <img :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="comment-content">
          <p>{{item.content}}</p>
        </div>
        <span class="timer">{{item.created|format}}</span>
        <span class="style">{{item.style}}</span>
        <div class="user-img-show">
          <img v-for="(te,index2) in item.images"  :src="te" alt="" :key="index2">
        </div>
      </div>
    </div>
  </div>
  <div v-else>暂无用户评价</div>
</template>

<script>
import {formatDate} from "common/utils.js"
export default {
  name:"DetailInfoComment",
  props:{
    commentInfo:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  filters:{
    format(data){
      const date = new Date(data * 1000);
      return formatDate(date,'yyyy-MM-dd');
    }
  }
}
</script>

<style scoped>
.comment-all{
  padding:0px 10px 0px 10px;
  background: white;
}
.comment-title{
  height: 50px;
  line-height: 50px;
  display: flex;
}
.comment-title span{
  flex: 1;
  font-size: 18px;
}
.comment-title :nth-child(1){
  text-align: left;
}
.comment-title :nth-child(2){
  text-align: right;
}
.user-content{
  border-top: 1px solid #eee;
}
.user-header{
  padding-top: 20px;
}
.user-header img{
  width: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.user-header span{
  font-size: 20px;
  margin-left: 20px;
}
.comment-content{
  margin-top: 20px;
  margin-bottom: 15px;
}
.comment-content p{
  line-height: 25px;
}
.style{
  margin-left: 20px;
}
.user-img-show{
  margin-top: 10px;
}
.user-img-show img{
  width: 100px;
  margin-right: 5px;
}
</style>