import {request2} from "./request.js";

export function detailrequest(iid){
  return request2({
    url:"/detail",
    params:{
      iid
    }
  })
}


export class detaildata{
  constructor(info,columns){
    this.title = info.title;  //标题描述
    this.columns = columns.columns;  //三个信息
    this.deliveryTime = info.extra.deliveryTime; //快递时间
    this.nowPrice = info.price;  //现在的价格
    this.oldPrice = info.oldPrice;  //价格移动
  }
}

// 店铺信息
export class detailShop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.place = shopInfo.allGoodsUrl;
    this.sellAll = shopInfo.cSells;
    this.goodsAll = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

// 导出店铺图片数据
export class detailImagesshow{
  constructor(info){
    this.desc = info.desc;
    this.key = info.detailImage[0].key;
    this.imagelist = info.detailImage[0].list;
  }
}

// 导出参数数据
export class detailParams{
  constructor(itemParams){
    this.set = itemParams.info.set;
    this.rule = itemParams.rule.tables[0];
  }
}