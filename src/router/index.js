import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// 这里解决重复点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const Home = ()=>import("views/home/Home.vue");
const Category =()=>import("views/category/Category.vue");
const Cart =()=>import("views/cart/Cart.vue");
const Profile = ()=>import("views/profile/Profile.vue");
const Detail =()=>import("views/detail/Detail.vue")
const routes = [
  {
    path:"/",
    redirect:"/home",
  },{
    path:"/home",
    component:Home,
  },{
    path:"/category",
    component:Category,
  },{
    path:"/cart",
    component:Cart
  },{
    path:"/profile",
    component:Profile,
  },{
    path:"/detail/:id",
    component:Detail,
  }
]

const router = new Router({
  routes,
  mode:"history",
})
export default router