import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/HomeIndex.vue'
import ProductItem from '@/components/ProductItem.vue'
import Shop from '../views/ShopIndex.vue'
import ProductDetail from "@/views/ProductDetail.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/product/:id', // 使用动态参数来标识不同的产品
      name: 'ProductItem',
      component: ProductItem
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetail,
      props: true
    },
    {
      path: '/shop',
      component: Shop,
      name: 'Shop'
    }
  ]
})
