<template>
  <div class="home-index">
    <div class="index__banner">
      <div class="banner__card">
        <h1>New Arrival</h1>
        <h2>Discover Our <br />New Collection</h2>
        <p>
          {{ banners.describe }}
        </p>
        <div class="button-wrapper">
          <router-link to="/shopIndex" class="shop-link">BUY Now</router-link>
        </div>
      </div>
    </div>
    <h3>Our Products</h3>
    <div class="index__products">
      <ProductCard
        v-for="(item, index) in products.data"
        :key="index"
        :data="item"
      />
    </div>

    <button
      v-if="products.data.length < products.count"
      @click="showMore"
      class="center-button"
    >
      Show More
    </button>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { INewProduct, IOurProducts } from "@/api/home-index/index.js";

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      backgroundImage: require("@/assets/Backgrounp.jpg"),
      banners: {
        images: [],
        describe: "",
        productId: "",
      },
      products: {
        data: [],
        count: 0,
      },
      cond: {
        page: 1,
        pageSize: 4,
      },
    };
  },
  methods: {
    /**
     * 获取新出商品
     */
    getNewProduct() {
      INewProduct().then((res) => {
        this.banners = res;
      });
    },

    /**
     * 获取商品列表
     */
    getProducts() {
      IOurProducts(this.cond).then((res) => {
        this.products = res;
        console.log(res);
      });
    },

    /**
     * 展示更多
     */
    showMore() {
      this.cond.page++;

      IOurProducts(this.cond).then((res) => {
        this.products.data.push(...res.data);
      });
    },

    /**
     * 跳转到商品详情
     */
    link() {
      this.$router.push("/productDetail/" + this.banners.productId);
    },
  },
  mounted() {
    this.getNewProduct();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.home-index {
  display: flex;
  flex-direction: column;
  text-align: left;
  h3 {
    margin-top: 36px;
    width: 100%;
    color: #3a3a3a;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
  .index__banner {
    padding-top: 158px;
    padding-right: 58px;
    width: 100%;
    height: 718px;
    background-image: url("../assets/Backgrounp.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-end;

    > img {
      width: 100%;
    }

    .banner__card {
      padding: 62px 40px 36px;
      width: 643px;
      height: 443px;
      background-color: #fff3e3;
      display: flex;
      flex-direction: column;

      h1 {
        color: #333;
        font-size: 16px;
        line-height: 24px;
      }

      h2 {
        margin-top: 4px;
        color: #b88e2f;
        font-size: 52px;
        line-height: 64px;
      }

      p {
        margin-top: 16px;
        color: #333;
        font-size: 18px;
        line-height: 24px;
      }
      .button-wrapper {
        padding-top: 40px;
      }

      .shop-link {
        display: inline-block;
        text-align: center;
        padding: 20px 30px;
        font-weight: bold;
        background-color: #b88e2f;
        color: white;
        transition: background-color 0.3s;
        font-size: 16px;
        text-decoration: none;
        border-radius: 10px;
        text-decoration: none;
        border-radius: 5px;
      }

      .shop-link:hover {
        background-color: #c07317;
      }
    }
  }
  .index__products {
    margin-top: 30px;
    padding: 0 102px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 32px;
    grid-column-gap: 32px;
  }
  button {
    margin-top: 32px;
    width: 245px;
    height: 48px;
    color: #b88e2f;
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #b88e2f;
  }
}
.center-button {
  margin-top: 32px;
  width: 245px;
  height: 48px;
  color: #b88e2f;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #b88e2f;
  margin: 0 auto;
  display: block;
  text-align: center;
  margin-bottom: 20px;
}
</style>
