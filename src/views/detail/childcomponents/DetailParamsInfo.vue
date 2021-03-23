<template>
  <div class="Params-all">
    <div class="closeParams">
        <p v-for="(item,index) in change(itemParams.rule)" :key="index">
          <span v-for="(li,index2) in item" :key="index2">
            {{li}}
          </span>
        </p>
    </div>
    <div class="storeParams">
      <div v-for="(item,index) in itemParams.set" :key="index">
          <p>{{item.key}}</p>
          <p>{{item.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailParamsInfo",
  props:{
    itemParams:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    change(data){
      for(let i in data){
        for(let j in data[i]){
          if(data[i][j] == ""){
              data[i][j] = "—";
          }
        }
      }
      return data;
    }
  }
}
</script>

<style scoped>
.Params-all{
  padding: 0px 10px 0px 10px;
  background: white;
}
.closeParams p{
  display: flex;
   height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.closeParams p span{
  text-align: center;
}
.closeParams p :nth-child(1){
  flex: 2;
  text-align:left;
}
.closeParams p :nth-child(2){
  flex: 1;
}
.closeParams p :nth-child(3){
  flex: 1;
}
.closeParams p :nth-child(4){
  flex: 1;
}
.closeParams p :nth-child(5){
  flex: 1;
}
.storeParams div{
  /* height: 40px; */
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 10px 0 10px 0;
}
.storeParams div :nth-child(1){
  flex: 3;
  margin:auto 0;
}
.storeParams div :nth-child(2){
  flex: 7;
  margin:auto 0;
  color: var(--color-high-text);
}

</style>