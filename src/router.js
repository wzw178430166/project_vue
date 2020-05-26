//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
 import Indent from "./components/dragGuide/dragGuide.vue"  // 首页 编辑菜单
import search from "./components/addModule/addModule.vue"//添加图标  菜单
 //测试
//import test from "./assets/test.vue"




Vue.use(Router)
export default new Router({
  routes: [
 //   {path: '/', redirect: '/HomeIndex' }, //重定向，index 什么都没有输入就重定向到首页
    {path:"/search",component:search},
    // {path:'/Personal',component:Personal},   //个人中心
    // {path:'/Login',component:Login},   // 项目登录 
    // {path:'/Register',component:Register},//注册
    // {path:'/HomeIndex',component:HomeIndex},   //首页
    // {path:'/Product',component:Product},    //跳转到商品列表
    // {path:'/Details/details',component:Details,props:true},  //商品详情页 111111
    // {path:'/cart',component:Cart},   //添加购物车   //this.$store 共享数据
     {path:'/indent',component:Indent},   //添加订单
    // {path:"/test",component:test}  //测试路由
  ]
})

//点击购买按钮 ，发送请求   查找字符串name=  window.session.data  
   // 如果 session 有就向服务器发请求，不会经过下面的判断。
   //如果没有存session 就可以在 result 请求结果中判断 data.code 没有登录下的操作

//pc端 session.