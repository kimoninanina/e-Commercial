<template>
  <section class="shop-container">
    <div class="shop">
      <div>
        <AppNavbar />
        <div class="shop-heading-background">
          <div class="text-center">
            <h1 class="shop-heading">{{ title }}</h1>
            <router-link to="/">Home > Shop</router-link>
          </div>
        </div>

        <ProductItem @addToCart="addToCart" />
        <div class="logo-and-footer">
          <img src="../assets/FooterShopp.png" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      title: "Shop"
    };
  }
};
</script>

<style scoped>
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

.text-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-and-footer img {
  max-width: 100%;
  height: auto;
}
</style>
