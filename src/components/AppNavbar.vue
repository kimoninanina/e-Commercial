<template>
  <div class="navbar-container">
    <div class="logo-and-title">
      <img src="../assets/icon/Frame.png" alt="Logo" />
    </div>
    <div class="nav-links">
      <span
        role="link"
        tabindex="0"
        @click="link('/homeIndex')"
        @keydown.enter="link('/homeIndex')"
      >
        Home
      </span>
      <span
        role="link"
        tabindex="0"
        @click="link('/shopIndex')"
        @keydown.enter="link('/shopIndex')"
      >
        Shop
      </span>
      <span
        role="link"
        tabindex="0"
        @click="link('/aboutIndex')"
        @keydown.enter="link('/aboutIndex')"
      >
        About
      </span>
      <span
        role="link"
        tabindex="0"
        @click="link('/contactIndex')"
        @keydown.enter="link('/contactIndex')"
      >
        Contact
      </span>
    </div>
    <div class="user-actions">
      <router-link to="/loginIndex"
        ><img src="../assets/icon/account.png" alt="Logo"
      /></router-link>
      <router-link to="/searchIndex"
        ><img src="../assets/icon/search.png" alt="Logo"
      /></router-link>
      <img
        src="../assets/icon/shoppingcart.png"
        @click="cartDrawer = !cartDrawer"
      />
      <CartDrawer />
    </div>
  </div>
</template>
<script>
import CartDrawer from "./CartDrawer.vue";

export default {
  components: { CartDrawer },
  methods: {
    link(path) {
      if (this.$route.path === path) return;
      this.$router.push(path);
    },
  },
  computed: {
    cartDrawer: {
      get() {
        return this.$store.state.cart.show;
      },
      set(val) {
        this.$store.commit("cart/showCart", val);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100px;

  .logo-and-title {
    display: flex;
    align-items: center;

    .logo {
      width: 60px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .title {
      font-size: 24px;
      margin-left: 10px;
      font-weight: bold;
      color: #333;
    }
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    width: 400px; 
    margin: 0 auto; 
    color: black;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &.router-link-exact-active,
    &.router-link {
      text-decoration: none;
      color: black; 
    }
  }

  .user-actions {
    display: flex;
    gap: 50px;
    margin-left: 158px;
    margin-right: 50px;

    img {
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
  }
}
</style>
