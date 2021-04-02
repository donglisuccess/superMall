import {ADD_COUNT,ADD_GOODS} from "./mutation-type.js";
export default {
  [ADD_COUNT](state,payload){
    payload.count += 1;
  },
  [ADD_GOODS](state,payload){
    payload.checked = false;
    state.cartlist.push(payload);
  }
}