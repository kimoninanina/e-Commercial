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
        <h2 class="form-title">Search for Products</h2>
        <form>
          <input type="text" v-model="searchQuery" placeholder="Search for your item" />
          <button @click="search">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";

export default {
  components: { BreadcrumbNav },
  data() {
    return {
      input: 1,
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Search", path: "/searchIndex" },
      ],
      searchQuery: "",
      searchResults: [], // Store search results here
    };
  },
  methods: {
    search() {
      // Implement your search logic here
      // Populate this.searchResults with the search results
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

      .form-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
        margin-top: 0; /* 添加上边距以解决对齐问题 */
      }

      form {
        input {
          max-width: 350px;
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 20px;
          background-color: #fff6f4;
          margin-bottom: 20px;
        }

        button {
          background-color: #b88e2f;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-right: 10px;

          &:hover {
            background-color: #bd741a;
          }
        }
      }
    }
  }
}
</style>
