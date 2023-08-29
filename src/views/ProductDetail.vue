<template>
  <div>
    <div class="container">
      <div class="shop-index">
        <BreadcrumbNav :path="path" end="Asgaard sofa" />
        <div class="index__good">
          <div class="carousel-nav">
            <aside>
              <section v-for="(image, index) in asideImages" :key="index">
                <img
                  :src="image"
                  alt="Carousel Image"
                  @click="changeMainImage(image)"
                />
              </section>
            </aside>
          </div>
          <main>
            <img :src="mainImage" alt="Main Image" />
          </main>
          <div class="good__info">
            <h1>Asgaard sofa</h1>
            <div class="info__price">
              Rs. 250,000.00
            </div>
            <p class="product_details">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div class="product__info">
              <div class="info__size">
                <p>Size:</p>
                <div class="size__buttons">
                  <button
                    v-for="size in sizes"
                    :key="size"
                    :class="{ active: selectedSize === size }"
                    @click="toggleSize(size)"
                    class="color-button"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
              <div class="info__color">
                <p>Color:</p>
                <div class="color__buttons">
                  <button
                    v-for="color in colors"
                    :key="color"
                    :class="{ active: selectedColor === color }"
                    :style="{ backgroundColor: color }"
                    @click="toggleColor(color)"
                    class="color-button"
                  ></button>
                </div>
              </div>
            </div>
            <div class="info__count">
              <div class="quantity__controls">
                <button @click="decreaseQuantity">-</button>
                <span>{{ quantity }}</span>
                <button @click="increaseQuantity">+</button>
              </div>
              <button class="add-to-cart-button" @click="addToCart">
                Add to Cart
              </button>
            </div>

            <div class="info__describe">
              SKU: SS001<br />
              Category: Sofas<br />
              Tags: Sofa, Chair, Home, Shop<br />

              <div class="icon-container">
                Share:
                <img class="icon" src="../assets/icon/x.png" alt="Icon" />
                <img class="icon" src="../assets/icon/x.png" alt="Icon" />
                <img class="icon" src="../assets/icon/x.png" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'
export default {
  components: { BreadcrumbNav },
  data() {
    return {
      quantity: 1,
      backgroundImage: require("@/assets/Backgrounp.jpg"),
      sizes: ["S", "M", "L"],
      selectedSize: null,
      colors: ["red", "blue", "green"],

      asideImages: [
        require("@/assets/detail1.png"),
        require("@/assets/details4.png"),
        require("@/assets/details3.png")
      ],
      mainImage: require("@/assets/details2.png"),
      mainImageWidth: 0, // Initialize mainImage width
      mainImageHeight: 0 // Initialize mainImage height
    };
  },
  methods: {
    changeMainImage(image, width, height) {
      this.mainImage = image;
      this.mainImageWidth = width;
      this.mainImageHeight = height;
    }
  },
  toggleSize(size) {
    if (this.selectedSize === size) {
      this.selectedSize = null; // 如果已经选中，再次点击取消选中
    } else {
      this.selectedSize = size; // 否则选中该尺寸
    }
  },
  toggleColor(color) {
    if (this.selectedColor === color) {
      this.selectedColor = null;
    } else {
      this.selectedColor = color;
    }
  },
  increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      // 将商品添加到购物车的逻辑
    }
}
</script>

<style scoped>
.container {
  background-color: white;
}
.breadcrumb-container {
  display: flex;
  align-items: center;
  background-image: url("../assets/RectangleDeatils.png");
  background-size: cover;
  height: 100px;
}

.breadcrumb-text {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.breadcrumb-links router-link {
  margin-right: 30px !important; /* 右侧间距 */
}

.end {
  margin-left: 24px;
  padding-left: 34px;
  color: rgb(0, 0, 0);
  border-left: 2px solid rgb(159, 159, 159);
}

.index__good {
  margin-top: 42px;
  display: flex;
  align-items: flex-start;
  margin-right: -20px;
}

.good__info h1 {
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 42px;
  line-height: 62px;
  text-align: left;
  margin-bottom: 0px;
}

.info__price {
  text-align: left;
  color: rgb(159, 159, 159);
  font-size: 24px;
  line-height: 36px;
}
.carousel-nav {
  flex: 1;
}
.carousel-nav aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.carousel-nav img {
  max-width: 100%;
  height: auto;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main img {
  max-width: 100%;
  height: auto;
}

.good__info {
  flex: 2;
  padding: 20px;
}

.product__info p {
  display: flex;
  text-align: left;
}

.product_details {
  text-align: left;
  margin-top: 52px;
}

.info__size button {
  height: 30px;
  font-size: 13px;
  border-radius: 5px;
  background: rgb(249, 241, 231);
  border: none;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product__info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.color-button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
}

.info__count {
  display: flex;
  align-items: center;
  padding-top: 30px;
  justify-content: space-between;
}

.quantity__controls button {
  font-size: 20px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.quantity__controls span {
  margin: 0 10px;
}

.add-to-cart-button {
  background-color: #fff; /* 白色填充色 */
  color: #000; /* 黑色文字颜色 */
  padding: 10px 20px;
  border: 1px solid #333; /* 更细的黑色边框 */
  cursor: pointer;
  width: 215px;
  height: 64px;
  font-size: 20px;
  border-radius: 15px;
}

.info__describe {
  margin-top: 60px;
  margin-bottom: 120px;
  padding-top: 40px;
  border-top: 1px solid rgb(217, 217, 217);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.icon-container {
  display: flex;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

</style>
