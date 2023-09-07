<template>
  <div class="about-page">
    <div class="index__banner">
      <h1>Login</h1>
      <BreadcrumbNav :path="path" />
    </div>
    <div class="login-container">
      <div class="login-form">
        <div class="toggle-button">
          <button
            @click="setMode('login')"
            :class="{
              'button-signin': mode === 'login',
              active: mode === 'login',
            }"
          >
            Sign In
          </button>

          <!-- 注册按钮 -->
          <button
            @click="setMode('register')"
            :class="{
              'button-signin': mode === 'register',
              active: mode === 'register',
            }"
          >
            Register
          </button>
        </div>

        <span>Welcome back !!!</span>
        <h2>{{ mode === "login" ? "Sign In" : "Register" }}</h2>
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
              <!-- 根据模式渲染不同的按钮文本 -->
              <button @click="mode === 'login' ? login : register">
                {{ mode === "login" ? "Sign In" : "Register" }}
              </button>
              <p>
                {{
                  mode === "login"
                    ? "I don't have an account?"
                    : "Already have an account?"
                }}
                <a
                  href="#"
                  @click="setMode(mode === 'login' ? 'register' : 'login')"
                  >{{ mode === "login" ? "Sign up" : "Sign in" }}</a
                >
              </p>
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
      mode: "login", // 初始模式为登录
      email: "",
      password: "",
    };
  },
  methods: {
    // 设置模式的方法
    setMode(selectedMode) {
      this.mode = selectedMode;
    },
    login() {
      // 处理登录逻辑
    },
    register() {
      // 处理注册逻辑
    },
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
  .toggle-button {
    margin-top: 30px;
    padding-bottom: 30px;
    display: flex;
    margin-left: -20px;

    button {
      background-color: transparent;
      color: inherit;
      padding: 10px 20px;
      border: none;
      font-size: 16px;
      cursor: pointer;
      text-decoration: underline; /* 初始状态下带有下划线 */
      margin-right: 10px;
      border-radius: 20px;
    }
  }

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

/* 当按钮被选中时的样式 */
.button-signin.active {
  background-color: #b88e2f;
  color: #fff;
  text-decoration: none; /* 移除下划线 */
  cursor: pointer;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}

.button-signin.active:hover {
  background-color: #bd741a; /* 添加悬停时的背景颜色 */
}
</style>
