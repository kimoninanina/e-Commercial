<template>
  <div class="navbar-container">
    <div class="logo-and-title">
      <img src="../assets/icon/Frame.png" alt="Logo" />
    </div>
    <div class="nav-links">
      <span @click="link('/homeIndex')">Home</span>
      <span @click="link('/shopIndex')">Shop</span>
      <span>About</span>
      <span @click="link('/contactIndex')">Contact</span>
    </div>
    <div class="user-actions">
      <router-link to="/login"
        ><img src="../assets/icon/account.png" alt="Logo"
      /></router-link>
      <router-link to="/search"
        ><img src="../assets/icon/search.png" alt="Logo"
      /></router-link>
      <router-link to="/CartIndex"
        ><img src="../assets/icon/shoppingcart.png" alt="Logo"
      /></router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    link(path) {
      if (this.$route.path === path) return;
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100px;
}

.logo-and-title {
  display: flex;
  align-items: center;
}

.logo {
  width: 60px;
  height: 60px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.title {
  font-size: 24px;
  margin-left: 10px;
  font-weight: bold;
  color: #333;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  width: 400px; /* 调整导航链接容器的宽度 */
  margin: 0 auto; /* 居中导航链接容器 */
  color: black;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.router-link-exact-active,
.nav-links router-link {
  text-decoration: none;
  color: black; /* 设置文字颜色为黑色 */
}
.user-actions {
  display: flex;
  gap: 30px;
  padding: 50px; /* 将 margin-right 设置为 auto，使其靠左 */
}
.user-actions .img {
  width: 28px;
  height: 28px;
}
</style>
