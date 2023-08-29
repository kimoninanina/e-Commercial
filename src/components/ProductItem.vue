/* eslint-disable */

<template>
  <div class="product-container">
    <h4>Our Products</h4>
    <div class="cat-container">
      <div v-for="cat in cats" :key="cat.id" class="cat-item">
        <div class="cat-card">
          <div class="top-box" @click="navigateToProductDetail">
            <img :src="cat.url" alt="Cat" class="cat-image" />
          </div>
          <div class="bottom-box">
            <p class="cat-price">${{ cat.price }}</p>
          </div>
        </div>
      </div>
    </div>
     <button>Show More</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: []
    };
  },
  mounted() {
    this.fetchCats();
  },
  methods: {
    async fetchCats() {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=25&page=0&order=desc"
        );
        const data = await response.json();
        this.cats = data;
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    },
    navigateToProductDetail() {
      // 使用路由导航到商品详细信息页面，并传递商品信息
      this.$router.push({ name: "ProductDetail", params: { cat: this.cat } });
    }
  }
};
</script>

<style scoped>
.product-container {
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;
}

.product-container h4 {
  color: #3a3a3a;
  font-weight: 700;
  font-size: 35px;
}

.cat-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

.cat-item {
  width: 100%;
}

.cat-image {
  width: 100%;
  height: 200px; /* 设置固定的高度 */
  object-fit: cover;
}

.cat-card {
  display: grid;
  grid-template-rows: 1fr auto;
  text-align: center;
  background-color: #d0d0d5be;
  height: 100%;
  min-height: 250px;
}

.top-box {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.bottom-box {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d5be;
}

.cat-price {
  font-size: 16px;
  font-weight: bold;
  color: #333;
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
</style>
