<template>
  <section class="shop-container">
    <div class="shop">
      <div class="shop-heading-background">
        <div class="text-center">
          <h1>Shop</h1>
          <BreadcrumbNav :path="path" />
        </div>
      </div>
      <div class="index__products" v-loading="isLoading">
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

      <footer>
        <div class="footer__item">
          <img src="@/assets/shop/icon-quality.png" alt="" />
          <main>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </main>
        </div>
        <div class="footer__item">
          <img src="@/assets/shop/icon-protection.png" alt="" />
          <main>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </main>
        </div>
        <div class="footer__item">
          <img src="@/assets/shop/icon-shipping.png" alt="" />
          <main>
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </main>
        </div>
        <div class="footer__item">
          <img src="@/assets/shop/icon-support.png" alt="" />
          <main>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </main>
        </div>
      </footer>
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
      isLoading: false,
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
      this.isLoading = true; // 在请求开始前显示加载状态
      IProductsList(this.cond)
        .then((res) => {
          this.products = res;
        })
        .finally(() => {
          this.isLoading = false; // 在请求完成后隐藏加载状态
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

  .pagination-button-center {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .loading-spinner {
      /* 添加加载动画的样式 */
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 4px solid #3498db;
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
    }

    p {
      margin-top: 10px;
      font-size: 18px;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  footer {
    margin-top: 209px;
    padding: 0 52px;
    width: 100%;
    height: 270px;
    background: #faf3ea;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__item {
      display: flex;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
      }

      main {
        margin-left: 10px;

        h4 {
          color: #242424;
          font-size: 25px;
          line-height: 36px;
        }

        p {
          margin-top: 2px;
          overflow: hidden;
          color: #898989;
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
