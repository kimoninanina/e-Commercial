<template>
  <div class="cart-index">
    <div class="base__banner">
      <h1>Checkout</h1>
      <BreadcrumbNav :path="path" />
    </div>

    <el-row :gutter="26" :style="{ marginTop: '62px' }">
      <el-col :xs="24" :span="12">
        <div class="index__details">
          <h2>Billing details</h2>

          <el-form
            ref="formRef"
            :model="form"
            label-position="top"
            :rules="formRules"
          >
            <el-form-item>
              <el-row :gutter="30">
                <el-col :span="12">
                  <el-form-item label="First Name" prop="firstName">
                    <el-input v-model="form.firstName" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Last Name" prop="lastName">
                    <el-input v-model="form.lastName" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Address" prop="address">
              <el-input v-model="form.address" />
            </el-form-item>
            <el-form-item label="ZIP code" prop="code">
              <el-input v-model="form.code" />
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
              <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="Email address" prop="email">
              <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="Remark" prop="remark">
              <el-input v-model="form.remark" placeholder="" />
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :xs="24" :span="12">
        <div class="index__product">
          <div class="product__row">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <div class="product__row" v-for="(item, index) in carts" :key="index">
            <span>
              <span class="row__name">{{ item.name }}</span>
              <span class="row__x">x</span>
              <span>{{ item.number }}</span>
            </span>
            <span>${{ item.price }}</span>
          </div>
          <div class="product__row">
            <span>Subtotal</span>
            <span>${{ totalPrice }}</span>
          </div>
          <div class="product__row">
            <span>Total</span>
            <h4 class="row__total">${{ totalPrice }}</h4>
          </div>

          <footer>
            <ul>
              <li class="selected">Direct Bank Transfer</li>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <li>Cash On Delivery</li>
              <summary>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </summary>
            </ul>

            <button @click="submitForm">Place order</button>
          </footer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { IBanners, ISubmitOrder } from "@/api/checkout-index/index.js";
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";

export default {
  components: { BreadcrumbNav },
  data() {
    return {
      input: 1,
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Checkout", path: "/checkoutIndex" },
      ],
      form: {
        firstName: "",
        lastName: "",
        address: "",
        code: "",
        phone: "",
        email: "",
        remark: "",
        totalPrice: 100,
        items: [],
      },
      formRules: {
        firstName: [
          { required: true, message: "Place Input FirstName", trigger: "blur" },
        ],
        lastName: [
          { required: true, message: "Place Input LastName", trigger: "blur" },
        ],
        address: [
          { required: true, message: "Place Input Address", trigger: "blur" },
        ],
        companyName: [
          {
            required: true,
            message: "Place Input CompanyName",
            trigger: "blur",
          },
        ],
        country: [
          { required: true, message: "Place Input Country", trigger: "blur" },
        ],
        code: [
          { required: true, message: "Place Input Zip Code", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "Place Input Phone", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Place Input Email", trigger: "blur" },
        ],
        remark: [
          { required: true, message: "Place Input Remark", trigger: "blur" },
        ],
      },
      banners: {
        images: [],
      },
    };
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.items,
    }),

    ...mapGetters({
      totalPrice: "cart/totalPrice",
    }),
  },
  methods: {
    /**
     * 表单提交
     */
    submitForm() {
      this.$refs.formRef.validate((valid) => {
        //items包含用户购物车中的所有商品信息以便在提交订单时发送给后端
        if (valid) {
          const items = this.carts.map((x) => {
            return { number: x.number, productId: x.productId };
          });

          this.form.items = JSON.stringify(items);
          this.form.totalPrice = this.totalPrice;
          //旦订单成功提交，会触发 then 回调函数。在这个回调函数中，会显示一个成功的消息提示
          ISubmitOrder(this.form).then(() => {
            this.$message({
              message: "Submit Successful",
              type: "success",
            });
          });
        }
      });
    },

    /**
     * 获取封面图
     */
    getBanners() {
      IBanners({ page: "checkoutIndex" }).then((res) => {
        this.banners = res;
      });
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
  > .el-row {
    padding: 0 100px;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding: 0 0 0;
    }
  }
  .base__banner {
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
  }

  .index__details {
    padding: 35px 78px 70px;
    @media screen and (max-width: 768px) {
      padding: 0 0 0;
    }
  }

  .index__product {
    padding: 86px 38px 86px;

    .product__row {
      color: #000;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .row__name {
        color: #9f9f9f;
      }

      .row__x {
        margin: 0 10px;
        font-size: 16px;
      }

      .row__total {
        color: #b88e2f;
        font-size: 24px;
        line-height: 24px;
      }
    }

    .product__row + .product__row {
      margin-top: 28px;
    }
    footer {
      margin-top: 32px;
      padding-top: 22px;
      border-top: 1px solid #d9d9d9;
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        li::before {
          content: "";
          margin-right: 15px;
          background-image: url("@/assets/icon-circle.png");
          background-repeat: no-repeat;
          width: 14px;
          height: 14px;
        }

        li {
          color: #9f9f9f;
          font-size: 16px;
          line-height: 24px;
          list-style: none;
          display: flex;
          align-items: center;
        }

        li + li {
          margin-top: 12px;
        }

        li.selected::before {
          background-image: url("@/assets/icon-circle-selected.png");
        }

        li.selected {
          color: #000;
        }

        p {
          margin-top: 10px;
          margin-bottom: 25px;
          color: #9f9f9f;
          font-size: 16px;
          line-height: 24px;
        }

        summary {
          margin-top: 22px;
          color: #000;
          font-size: 16px;
          line-height: 24px;
          text-align: justify;
        }
      }

      button {
        margin-top: 40px;
        width: 318px;
        height: 64px;
        border-radius: 15px;
        background-color: transparent;
        border: 1px solid #000;
        cursor: pointer;
        transition: background-color 0.3s ease; /* 添加过渡效果 */
        &:hover {
          background-color: #edcea8; /* 悬停时的背景颜色 */
        }

        &:active {
          background-color: #c2955f; /* 点击时的背景颜色 */
        }
      }
    }
  }
}
</style>
