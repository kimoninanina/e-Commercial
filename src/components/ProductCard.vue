<template>
  <div class="product-card" @click="link">
    <img :src="data.images && data.images[0]" />
    <div class="card__container">
      <h4>{{ data.name }}</h4>
      <p>{{ data.summary }}</p>
      <p class="container__price">
        <span class="price-old">${{ data.price }}</span>
        <span class="price-new">${{ data.priceOld }}</span>
      </p>
    </div>

    <div class="product-card__hover">
      <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    /**
     * 跳转到商品详情
     */
    link() {
      this.$router.push("/productDetail/" + this.data.productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  height: 480px;
  background-color: #f4f5f7;
  cursor: pointer;
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .card__container {
    padding: 16px;
    p {
      margin-top: 4px;
      color: #898989;
      font-size: 13px;
    }

    .container__price {
      display: flex;
      align-items: baseline; // 基线对齐以保持文字底部对齐

      .price-new {
        color: #b0b0b0;
        font-size: 15px;
        line-height: 24px;
        text-decoration: line-through;
        padding-left: 10px;
      }

      .price-old {
        color: #3a3a3a;
        font-weight: bold;
        font-size: 15px;
        line-height: 30px;
      }
    }
  }

  // 鼠标悬停展示
  .product-card__hover {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(58, 58, 58, 0.72);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition-duration: 0.2s;

    button {
      width: 202px;
      height: 48px;
      color: #b88e2f;
      font-size: 16px;
      font-weight: bold;
      background-color: #fff;
    }
  }
}

.product-card:hover {
  .product-card__hover {
    opacity: 1;
  }
}
</style>
