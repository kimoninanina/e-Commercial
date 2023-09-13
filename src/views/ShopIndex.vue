<template>
  <section class="shop-container">
    <div class="shop">
      <div class="shop-heading-background">
        <div class="text-center">
          <h1>Shop</h1>
          <BreadcrumbNav :path="path" />
        </div>
      </div>
      <div class="index__products">
        <ProductCard
          v-for="(item, index) in products.data"
          :key="index"
          :data="item"
        />
      </div>
      <div class="pagination-button-center">
        <PaginationButton
          :count="products.count"
          v-model="cond"
          @change="getProducts"
        />
      </div>
      <div class="logo-and-footer">
        <img src="../assets/FooterShopp.png" alt="Logo" />
      </div>
    </div>
  </section>
</template>

<script>
import { IBanners, IProductsList } from "@/api/shop-index/index.js";
import ProductCard from "../components/ProductCard.vue";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PaginationButton from "../components/PaginationButton";

export default {
  components: {
    ProductCard,
    BreadcrumbNav,
    PaginationButton,
  },
  data() {
    return {
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Shop", path: "/shopIndex" },
      ],
      banners: {
        images: [],
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
     * 获取封面图
     */
    getBanners() {
      IBanners({ page: "shopIndex" }).then((res) => {
        this.banners = res;
      });
    },

    /**
     * 获取商品列表
     */
    getProducts() {
      IProductsList(this.cond).then((res) => {
        this.products = res;
      });
    },
  },
  mounted() {
    this.getBanners();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.shop-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .shop {
    h1 {
      color: #000;
      font-size: 48px;
      line-height: 72px;
    }

    .shop-heading-background {
      background-image: url("../assets/Shop.png");
      background-size: cover;
      color: black;
      height: 316px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: large;
      font-weight: 400;
    }
  }

  .text-center {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index__products {
    margin-top: 70px;
    padding: 0 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 32px;
    grid-column-gap: 32px;
  }

  .logo-and-footer {
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .pagination-button-center {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>
