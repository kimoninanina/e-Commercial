<template>
  <div class="navbar-container">
    <!-- 移动设备上的汉堡菜单按钮 -->
    <div class="mobile-menu-button-container">
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <img
          src="@/assets/icon/hamburger-menu-filled-icon.jpeg"
          alt="Mobile Menu"
        />
      </button>
    </div>

    <!-- Logo 和标题 -->
    <div class="logo-and-title animate__animated animate__wobble">
      <img src="@/assets/icon/Frame.png" alt="Logo" class="logo" />
    </div>

    <!-- 移动设备上的菜单 -->
    <div class="mobile-menu" :class="{ 'mobile-menu-active': mobileMenuOpen }">
      <span
        v-for="(link, index) in mobileLinks"
        :key="index"
        @click="linkAction(link.path)"
        @keydown.enter="linkAction(link.path)"
      >
        {{ link.text }}
      </span>
    </div>

    <div class="nav-links">
      <span
        v-for="(link, index) in desktopLinks"
        :key="index"
        @click="linkAction(link.path)"
        @keydown.enter="linkAction(link.path)"
        :class="link.class"
      >
        {{ link.text }}
      </span>
    </div>

    <div class="user-actions">
      <router-link to="/loginIndex"
        ><img
          src="@/assets/icon/account.png"
          alt="Logo"
          @click="toggleAnimation('accountLogo')"
          :class="{
            'animate__animated animate__bounce': isAnimated('accountLogo'),
          }"
      /></router-link>
      <router-link to="/searchIndex"
        ><img
          src="@/assets/icon/search.png"
          alt="Logo"
          @click="toggleAnimation('searchLogo')"
          :class="{
            'animate__animated animate__bounce': isAnimated('searchLogo'),
          }"
      /></router-link>
      <img
        src="@/assets/icon/shoppingcart.png"
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
  data() {
    return {
      mobileMenuOpen: false,
      animatedElements: [], 
    };
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
    mobileLinks() {
      return [
        { text: "Home", path: "/homeIndex" },
        { text: "Shop", path: "/shopIndex" },
        { text: "About", path: "/aboutIndex" },
        { text: "Contact", path: "/contactIndex" },
      ];
    },
    desktopLinks() {
      return [
        { text: "Home", path: "/homeIndex", class: "router-link" },
        { text: "Shop", path: "/shopIndex", class: "router-link" },
        { text: "About", path: "/aboutIndex", class: "router-link" },
        { text: "Contact", path: "/contactIndex", class: "router-link" },
      ];
    },
  },
  methods: {
    linkAction(path) {
      if (this.$route.path === path) return;
      this.$router.push(path);
      this.mobileMenuOpen = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleAnimation(elementName) {
      if (!this.isAnimated(elementName)) {
        // 如果元素尚未触发动画，添加到列表并应用动画类
        this.animatedElements.push(elementName);
      } else {
        // 如果元素已经触发动画，从列表中移除它
        const index = this.animatedElements.indexOf(elementName);
        if (index !== -1) {
          this.animatedElements.splice(index, 1);
        }
      }
    },
    isAnimated(elementName) {
      // 检查元素是否触发了动画
      return this.animatedElements.includes(elementName);
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
    .logo {
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  /* 移动设备导航按钮容器样式 */
  .mobile-menu-button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 靠左对齐 */
  }

  /* 移动设备导航按钮样式 */
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  /* 移动设备导航菜单样式 */
  .mobile-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
  }

  /* 激活移动设备导航菜单的样式 */
  .mobile-menu-active {
    display: block;
    transform: translateX(0);
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

  @media screen and (max-width: 768px) {
    .user-actions {
      display: flex;
      gap: 10px;
      margin-left: 10px;
      margin-right: 10px;

      img {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
    }

    /* 移动设备导航菜单链接的样式 */
    .mobile-menu span {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
      cursor: pointer;
    }

    /* 响应式设计：在小屏幕上显示移动设备导航按钮 */
    .mobile-menu-button {
      display: block;
    }

    /* 隐藏桌面导航链接 */
    .nav-links {
      display: none;
    }
  }
}
</style>
