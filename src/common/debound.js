export default function(func,delay){
  let timer = null;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      func.apply(this);
    },delay)
  }
}