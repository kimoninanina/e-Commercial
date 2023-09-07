<template>
  <section class="shop-container">
    <div class="shop">
      <div class="shop-heading-background">
        <div class="text-center">
          <h1>Shop</h1>
          <BreadcrumbNav :path="path" />
        </div>
      </div>

      <ProductItem />
      <div class="logo-and-footer">
        <img src="../assets/FooterShopp.png" alt="Logo" />
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import BreadcrumbNav from "../components/BreadcrumbNav";

export default {
  components: {
    ProductItem,
    BreadcrumbNav,
  },
  data() {
    return {
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Shop", path: "/shopIndex" },
      ],
    };
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

  .logo-and-footer {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
