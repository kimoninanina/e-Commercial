<template>
  <div class="about-page">
    <div class="index__banner">
      <h1>Login</h1>
      <BreadcrumbNav :path="path" />
    </div>
    <div class="login-container">
      <div class="login-form">
        <span>Welcome back !!!</span>
        <h2>Sign In</h2>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email" />
          </div>
          <div class="form-group">
            <label for="password"
              >Password
              <a href="#" class="forgot-link">Forgot Password?</a></label
            >
            <input type="password" id="password" v-model="password" />
          </div>

          <div class="info__form">
            <div class="button-container">
              <button @click="login">Sign In</button>
              <p>I don’t have an account? <a href="#">Sign up</a></p>
            </div>
          </div>
        </form>
      </div>
      <div class="login-image">
        <img src="../assets/LoginPage.png" alt="Login Image" />
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
        { name: "Login", path: "/LoginIndex" },
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
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;

  .login-form {
    flex: 1;
    padding: 20px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 45px;
    }

    form {
      padding-top: 30px;

      label {
        display: block;
        margin-bottom: 5px;
        .forgot-link {
          margin-left: 160px; 
          font-size: 14px; 
          text-decoration: none; 
          color: inherit; 
        }
      }

      input {
        max-width: 350px;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff6f4; /* 设置填充颜色 */
        margin-bottom: 20px;
      }
    }
    .info__form {
      display: flex;
      flex-direction: column;
      padding-left: 60px;

      .button-container {
        margin-top: 20px;
      }

      button {
        margin-top: 20px;
        width: 236px;
        height: 55px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background-color: #b88e2f;
        border: 1px solid #b88e2f;
        margin-bottom: 20px;

        p {
          margin-top: 10px; // 调整上边距
          font-size: 14px; // 根据需要调整字体大小

          a {
            text-decoration: none;
            color: #b88e2f;
          }
        }
      }
    }
  }

  .login-image {
    flex: 1;
    padding: 20px;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
