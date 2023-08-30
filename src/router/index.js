import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/HomeIndex.vue'
import ProductItem from '@/components/ProductItem.vue'
import ShopIndex from '../views/ShopIndex.vue'
import ProductDetail from "@/views/ProductDetail.vue";
import ContactIndex from "../views/ContactIndex.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homeIndex',
      component: Homepage
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
      path: "/ContactIndex",
      component: ContactIndex,
      name: 'Contact'
    }
  ]
})
