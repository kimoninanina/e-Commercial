<template>
  <div class="shop-index">
    <div class="index__breadcrumb">
      <BreadcrumbNav :path="path" end="Asgaard sofa" />
    </div>

    <div class="index__good">
      <CarouselNav :data="data.images" />

      <div class="good__info">
        <h1>{{ data.name }}</h1>
        <div class="info__price">${{ data.price }}</div>

        <p>
          {{ data.describe }}
        </p>

        <h5>Size</h5>
        <ButtonGroup
          class="button-group"
          v-model="form.sizeActive"
          :options="data.size"
        />
        <h5>Color</h5>

        <div class="info__colors">
          <button
            :style="{ background: item }"
            v-for="(item, index) in data.color"
            :key="index"
          ></button>
        </div>

        <div class="info__count">
          <NumberCounter v-model="form.number" />
          <button @click="handleAddCart">Add To Cart</button>
        </div>

        <div class="info__describe">
          <div class="describe__item">
            <div class="item__name">SKU</div>
            <div class="item__value">{{ data.sku }}</div>
          </div>

          <div class="describe__item">
            <div class="item__name">Category</div>
            <div class="item__value">{{ data.category }}</div>
          </div>

          <div class="describe__item">
            <div class="item__name">Tags</div>
            <div class="item__value">{{ data.tags.join(", ") }}</div>
          </div>

          <div class="describe__item">
            <div class="item__name">Share</div>
            <div class="item__value">
              <img src="@/assets/shop-detail/icon-facebook.png" alt="" />
              <img src="@/assets/shop-detail/icon-linkedin.png" alt="" />
              <img src="@/assets/shop-detail/icon-twitter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";
import CarouselNav from "@/components/CarouselNav.vue";
import { IProductsDetail } from "@/api/shop-index/index.js";

import ButtonGroup from "@/components/ButtonGroup.vue";
import NumberCounter from "@/components/NumberCounter.vue";

export default {
  components: { BreadcrumbNav, CarouselNav, NumberCounter, ButtonGroup },
  data() {
    return {
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Shop", path: "/shopIndex" },
      ],
      data: {
        productId: "",
        name: "",
        summary: "",
        describe: "",
        price: 0,
        priceOld: 0,
        images: [],
        sku: "",
        category: "",
        tags: [],
        size: [],
        color: [],
      },
      form: {
        sizeActive: "1",
        number: 1,
      },
    };
  },
  methods: {
    /**
     * 添加到购物车
     */
    handleAddCart() {
      const form = {
        name: this.data.name,
        productId: this.data.productId,
        price: this.data.price,
        images: this.data.images,
        number: this.form.number,
        sizeActive: this.form.sizeActive,
      };

      this.$store.commit("cart/addCart", form);
      this.$store.commit("cart/showCart", true);
    },
  },
  mounted() {
    const productId = this.$route.params.productId;
    IProductsDetail({ productId }).then((res) => {
      this.data = res;
    });
  },
};
</script>

<style lang="scss" scoped>
.shop-index {
  background-color: white;
  .index__breadcrumb {
    padding: 0 102px;
    height: 100px;
    background: #f9f1e7;
    display: flex;
    align-items: center;
  }

  .index__good {
    margin-top: 42px;
    padding: 0 102px;
    display: flex;

    .good__info {
      margin-left: 106px;
      width: 424px;

      h1 {
        color: #000;
        font-weight: bold;
        font-size: 42px;
        line-height: 62px;
        text-align: left;
        margin-bottom: 0px;
      }

      .info__price {
        color: #9f9f9f;
        font-size: 24px;
        line-height: 36px;
        text-align: left;
      }

      p {
        margin-top: 52px;
        color: #000;
        font-size: 13px;
        line-height: 20px;
        text-align: left;
      }

      h5 {
        margin-top: 18px;
        margin-bottom: 12px;
        color: #9f9f9f;
        font-size: 14px;
        line-height: 22px;
        font-weight: normal;
        text-align: left;
      }
    }
    .button-group {
      display: flex;
      justify-content: left;
    }
    .info__colors {
      display: flex;
      justify-content: flex-start;
    }

    .info__colors button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: 0px;
    }

    .info__colors button + button {
      margin-left: 16px;
    }

    .info__count {
      margin-top: 32px;
      display: flex;
    }

    button {
      margin-left: 18px;
      width: 215px;
      height: 64px;
      font-size: 20px;
      color: #000;
      background-color: #fff;
      border-radius: 15px;
      border: 1px solid #000;
    }

    button:hover {
      cursor: pointer;
    }

    .info__describe {
      margin-top: 60px;
      margin-bottom: 120px;
      padding-top: 40px;
      border-top: 1px solid #d9d9d9;
      display: flex;
      flex-direction: column;

      .describe__item {
        color: #9f9f9f;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        text-align: left;

        .item__name {
          width: 90px;
        }

        .item__value::before {
          content: "：";
        }

        .item__value {
          display: flex;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
          }

          img + img {
            margin-left: 25px;
          }
        }
      }

      .describe__item + .describe__item {
        margin-top: 12px;
      }
    }
  }
}
</style>
