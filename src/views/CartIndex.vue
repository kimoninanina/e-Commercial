<template>
  <div class="cart-index">
    <div class="index__banner">
      <h1>Cart</h1>
      <BreadcrumbNav :path="path" />
    </div>

    <div class="index__products">
      <div class="products__table">
        <table>
          <thead>
            <th style="width: 30%">Product</th>
            <th style="width: 20%">Price</th>
            <th style="width: 15%">Quantity</th>
            <th style="width: 30%">Subtotal</th>
          </thead>

          <tbody>
            <tr v-for="(item, index) in data.items" :key="index">
              <td>
                <img class="icon-photo" :src="item.images && item.images[0]" />
                {{ item.name }}
              </td>
              <td>$ {{ item.price }}</td>
              <td>
                <el-input
                  :value="item.number"
                  @input="handleInput($event, index)"
                />
              </td>
              <td class="tr__total">
                <span>$ {{ item.price * item.number }}</span>
                <img
                  class="icon-del"
                  src="@/assets/cart-index/icon-del.png"
                  @click="delCart(index)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="products__totals">
        <h2>Cart Totals</h2>

        <div class="totals__row">
          <span>Subtotal</span>
          <p>${{ totalPrice }}</p>
        </div>

        <div class="totals__row">
          <span>Total</span>
          <p class="total">${{ totalPrice }}</p>
        </div>

        <button @click="$link('/checkoutIndex')">Check Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { IBanners } from "@/api/shop-index/index.js";
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";

export default {
  components: { BreadcrumbNav },
  data() {
    return {
      input: 1,
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Cart", path: "/cartIndex" },
      ],
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.cart,
    }),

    ...mapGetters({
      totalPrice: "cart/totalPrice",
    }),
  },
  methods: {
    ...mapMutations({
      delCart: "cart/delCart",
      editCart: "cart/editCart",
    }),

    /**
     * 获取封面图
     */
    getBanners() {
      IBanners({ page: "cartIndex" }).then((res) => {
        this.banners = res;
      });
    },

    /**
     * 修改购物车数量
     */
    handleInput(e, index) {
      this.editCart({ index, number: Number(e) });
    },
  },
  mounted() {
    this.getBanners();
  },
};
</script>

<style lang="scss" scoped>
.cart-index {
  display: flex;
  flex-direction: column;
  align-items: center;

  .index__banner {
    width: 100%;
    height: 316px;
    background-image: url("@/assets/shop/banner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #000;
      font-size: 48px;
      line-height: 72px;
    }

    img {
      margin: 0 6px;
      width: 20px;
      height: 20px;
    }

    span:first-of-type {
      font-weight: bold;
    }

    span:last-of-type {
      font-weight: normal;
    }
  }

  .index__products {
    margin-top: 70px;
    padding: 0 102px;
    width: 100%;
    display: flex;

    .products__table {
      flex-grow: 1;
      width: 0;

      table {
        border-spacing: 0;

        thead {
          th {
            padding-left: 40px;
            height: 55px;
            color: #000;
            font-size: 16px;
            background-color: #f9f1e7;
            text-align: left;
          }
        }

        tbody:before {
          content: "";
          display: block;
          height: 0;
        }

        tbody {
          tr {
            height: 95px;
            vertical-align: middle;

            td {
              padding-top: 40px;
              padding-left: 20px;
              color: #9f9f9f;
              font-size: 15px;
            }

            .tr__total {
              color: #000;

              span {
                line-height: 16px;
                display: inline-block;
                vertical-align: middle;
              }
            }

            .icon-photo {
              padding-right: 20px;
              width: 105px;
              height: 95px;
              display: inline-block;
              vertical-align: middle;
            }

            .icon-del {
              margin-left: 50px;
              width: 28px;
              height: 28px;
              display: inline-block;
              vertical-align: middle;
              cursor: pointer;
            }

            .el-input {
              width: 64px;

              :deep(.el-input__inner) {
                padding: 0;
                height: 32px;
                line-height: 32px;
                border-radius: 5px;
                text-align: center;
                border: 1px solid #9f9f9f;
              }
            }
          }
        }
      }
    }

    .products__totals {
      margin-left: 30px;
      padding: 15px 75px 0;
      width: 393px;
      height: 390px;
      background: #f9f1e7;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-bottom: 30px;
        color: #000;
        font-size: 32px;
        line-height: 48px;
      }

      .totals__row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          color: #000;
          font-size: 16px;
          line-height: 24px;
        }

        p {
          color: #9f9f9f;
          font-size: 16px;
          line-height: 24px;
        }

        p.total {
          color: #b88e2f;
          font-size: 20px;
          line-height: 30px;
        }
      }

      .totals__row + .totals__row {
        margin-top: 30px;
      }

      button {
        margin-top: 42px;
        width: 222px;
        height: 58px;
        border-radius: 15px;
        background-color: transparent;
        border: 1px solid #000;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .cart-index {
    .index__banner {
      h1 {
        font-size: 32px; /* 减小标题字体大小 */
        line-height: 48px;
      }
    }

    .index__products {
      padding: 0 0;
      flex-direction: column;
      .products__table {
        table {
          thead {
            th {
              font-size: 14px; /* 减小表头字体大小 */
            }
          }

          tbody {
            tr {
              td {
                font-size: 14px; /* 减小表格内容字体大小 */
                padding-top: 20px; /* 减小上边距 */
              }

              .tr__total {
                span {
                  font-size: 16px; /* 调整总价字体大小 */
                }

                .icon-del {
                  margin-left: 20px; /* 调整删除图标的左边距 */
                }

                .el-input {
                  width: 50px; /* 调整输入框宽度 */
                  :deep(.el-input__inner) {
                    height: 28px; /* 调整输入框高度 */
                    line-height: 28px;
                  }
                }
              }
            }
          }
        }
      }

      .products__totals {
        margin-left: 10px; /* 调整总计部分的左边距 */
        width: auto; /* 让宽度自适应 */
        height: auto; /* 让高度自适应 */

        h2 {
          font-size: 24px; /* 减小总计标题字体大小 */
          margin-bottom: 20px; /* 调整标题下边距 */
        }

        .totals__row {
          span {
            font-size: 14px; /* 减小文字字体大小 */
          }

          p.total {
            font-size: 18px; /* 调整总价字体大小 */
          }
        }

        button {
          margin-top: 30px; /* 调整按钮上边距 */
          width: 100%; /* 让按钮宽度充满父元素 */
          max-width: 222px; /* 设置按钮最大宽度 */
        }
      }
    }
  }
}
</style>
