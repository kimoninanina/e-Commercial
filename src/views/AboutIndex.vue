<template>
  <div class="about-page">
    <div class="index__banner">
      <h1>About</h1>
      <BreadcrumbNav :path="path" />
    </div>
    <div class="about-content">
      <div class="about-image">
        <img src="../assets/details2.png" alt="Our Team" />
      </div>
      <div class="about-text">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to creating innovative solutions.</p>
        <p>Our mission is to deliver high-quality products that make a difference.</p>
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
        { name: "About", path: "/aboutIndex" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .index__banner {
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

  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;

    .about-image {
      flex: 1;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .about-text {
      flex: 1;
      padding-left: 40px;

      h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
      }

      p {
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        margin-bottom: 20px;
        text-align: left;
      }
    }
  }
}
</style>