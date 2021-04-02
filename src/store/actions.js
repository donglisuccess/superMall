
import {ADD_GOODS,ADD_COUNT} from "./mutation-type.js";
export default {
  addcart(context,payload){
    return new Promise((resolve,reject)=>{
      let product = context.state.cartlist.find(item => item.iid == payload.iid);
      if(product){
        context.commit(ADD_COUNT,product);
        resolve("该商品增加一件");
      }else{
        context.commit(ADD_COUNT,payload);
        context.commit(ADD_GOODS,payload);
        resolve("新增一件商品");
      }
      console.log(context.state.cartlist);
    })
  },
}