<template>
  <div class="search-page">
    <div class="search__banner">
      <h1>Search</h1>
      <BreadcrumbNav :path="path" />
    </div>
    <div class="search-content">
      <div class="search-image">
        <img src="../assets/Search.png" alt="Search Image" />
      </div>

      <div class="search-form">
        <div class="input-wrapper">
          <button class="search-icon" @click="handleSearch">
            <img src="../assets/icon/search-icon.png" alt="Search Image" />
          </button>
          <input
            type="text"
            placeholder="Search for your item"
            v-model="searchQuery"
          />
        </div>
      </div>
    </div>

    <div class="search-results">
      <div v-if="searchResults.length === 0">No results found.</div>
      <div v-else>
        <ProductCard
          v-for="(product, index) in searchResults"
          :key="index"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";
import ProductCard from "../components/ProductCard.vue"; // 导入 ProductCard 组件
import { IOurProducts } from "@/api/home-index/index.js";

export default {
  components: { BreadcrumbNav, ProductCard }, // 注册 ProductCard 组件
  data() {
    return {
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Search", path: "/search" },
      ],
      searchQuery: "",
      searchResults: [],
      cond: {
        page: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    async handleSearch() {
      // Make an API request to fetch all products and filter results
      try {
        const response = await IOurProducts(this.cond);
        const allProducts = response.data;

        // Filter products based on the search query
        const filteredProducts = allProducts.filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        // Update the search results
        this.searchResults = filteredProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .search__banner {
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

  .search-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    width: 100%;

    .search-image {
      flex: 1;
      max-width: 50%; /* 左侧图片占据宽度的一半 */
      margin-right: 20px; /* 添加右侧间距 */

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .search-form {
      flex: 1;
      display: flex;
      flex-direction: column; /* 将表单内部的元素以列方式排列 */

      .input-wrapper {
        position: relative;
        display: inline-block;

        input {
          padding: 15px 10px;
          border: none;
          border-radius: 20px;
          background-color: rgba(184, 142, 47, 0.1); /* 10% 透明度 */
          width: 100%;
          max-width: 350px;
          text-align: center; /* 文本水平居中对齐 */
          vertical-align: middle; /* 文本垂直居中对齐 */
        }
        ::placeholder {
          color: gray; // 更改占位符文本颜色为黄色
          font-size: 18px; // 更改占位符文本的字体大小
          font-weight: bold;
        }

        button.search-icon {
          padding: 5px;
          border: none;
          background-color: transparent;
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 10px; /* 调整图标与输入框的距离 */
          transform: translateY(-50%);
          display: flex;
          align-items: center;
        }

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
