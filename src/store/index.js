import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: {
      namespaced: true,
      state: {
        show: false,
        items: JSON.parse(localStorage.getItem("carts") || "[]"),
      },
      getters: {
        /**
         * 购物车商品总金额
         */
        totalPrice(state) {
          return state.items.reduce(
            (total, item) => total + item.number * item.price,
            0
          );
        },
      },
      mutations: {
        showCart(state, payload) {
          state.show = payload;
        },
        addCart(state, payload) {
      //它会检查购物车中是否已存在相同的商品，如果存在，则更新商品的数量，如果不存在，则将商品信息添加到购物车中。
          const findIndex = state.items.findIndex(
            (item) => item.productId === payload.productId
          );
          if (findIndex > -1) {
            return (state.items[findIndex].number += payload.number);
          }

          state.items.push(payload);
          
          //将购物车中的商品信息保存到浏览器的本地存储中，以便在页面刷新或重新加载时能够保留购物车的内容。
          localStorage.setItem("carts", JSON.stringify(state.items));
        },

        /**
         * 删除购物车商品
         */
        delCart(state, payload) {
          state.items.splice(payload, 1);

          localStorage.setItem("carts", JSON.stringify(state.items));
        },

        /**
         * 修改购物车商品数量
         */
        editCart(state, payload) {
          state.items[payload.index].number = payload.number;

          localStorage.setItem("carts", JSON.stringify(state.items));
        },
      },
    },
  },
});

export default store;
