<template>
  <div class="home-index">
    <main
      class="main-content"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="content-wrapper">
        <div class="content">
          <h1>New Arrival</h1>
          <h2>Discover Our</h2>
          <h3>New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
          <div class="button-wrapper">
            <router-link to="/shopIndex" class="shop-link">BUY Now</router-link>
          </div>
        </div>
      </div>
    </main>
    <ProductItem />
   
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },

  data() {
    return {
      backgroundImage: require("@/assets/Backgrounp.jpg")
    };
  }
};
</script>

<style scoped>
.home-index {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.content-wrapper {
  padding: 20px;
  border-radius: 10px;
  width: 50%; /* 调整内容宽度 */
  background-image: url("../assets/backgroup3.png");
  margin-right: 100px;
}

.content h1 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: left;
  padding-left: 30px;
}

.content h2,
.content h3 {
  font-size: 45px;
  font-weight: bold;
  color: #b88e2f;
  text-align: left;
  padding-left: 30px;
  margin: 0;
}

.content p {
  margin-top: 16px;
  color: #333;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  padding-left: 30px;
}

.button-wrapper {
  display: flex;
  align-items: center;
  padding-left: 30px;
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

.product-item {
  margin-top: 30px;
}

</style>
