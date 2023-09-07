import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/HomeIndex.vue'
import ProductItem from '@/components/ProductItem.vue'
import ShopIndex from '../views/ShopIndex.vue'
import ProductDetail from "@/views/ProductDetail.vue";
import ContactIndex from "../views/ContactIndex.vue"
import CartIndex from "../views/CartIndex.vue"
import AboutIndex from "../views/AboutIndex"
import LoginIndex from "../views/LoginIndex"
import SearchIndex from "../views/SearchIndex"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homeIndex',
      component: Homepage
    },
    {
      path: '/',
      redirect: '/homeIndex'
    },
    {
      path: '/product/:id', // 使用动态参数来标识不同的产品
      name: 'ProductItem',
      component: ProductItem
    },
    {
      path: "/shopDetail",
      name: "ProductDetail",
      component: ProductDetail,
      props: true
    },
    {
      path: "/shopIndex",
      component: ShopIndex,
      name: 'Shop'
    },
    {
      path: "/contactIndex",
      component: ContactIndex,
      name: 'Contact'
    },
    {
      path: "/cartIndex",
      component: CartIndex,
      name: 'Cart'
    },
    {
      path: "/aboutIndex",
      component: AboutIndex,
      name: 'About'
    },
    {
      path: "/loginIndex",
      component: LoginIndex,
      name: 'Login'
    },
    {
      path: "/searchIndex",
      component: SearchIndex,
      name: 'Login'
    }
  ]
})
