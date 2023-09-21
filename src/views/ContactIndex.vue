<template>
  <div class="contact-index">
    <div class="index__banner">
      <h1>Contact</h1>
      <BreadcrumbNav :path="path" />
    </div>

    <div class="index__info">
      <div class="info__details">
        <div class="details__item">
          <img src="@/assets/contact-index/icon-address.png" />
          <div class="item__title">Address</div>
          <p>{{ contact.address }}</p>
        </div>

        <div class="details__item">
          <img src="@/assets/contact-index/icon-phone.png" />
          <div class="item__title">Phone</div>
          <p>
            Mobile: {{ contact.mobile }}<br />
            Hotline: {{ contact.phone }}
          </p>
        </div>

        <div class="details__item">
          <img src="@/assets/contact-index/icon-time.png" />
          <div class="item__title">Working Time</div>
          <p>
            {{ contact.workingTime }}
          </p>
        </div>
      </div>

      <div class="info__form">
        <el-form
          ref="formRef"
          :model="form"
          label-position="top"
          :rules="formRules"
        >
          <el-form-item label="Your Name" prop="name">
            <el-input v-model="form.name" placeholder="Abc" />
          </el-form-item>
          <el-form-item label="Email address" prop="email">
            <el-input v-model="form.email" placeholder="Abc@def.com" />
          </el-form-item>
          <el-form-item label="Subject" prop="subject">
            <el-input
              v-model="form.subject"
              placeholder="This is an optional"
            />
          </el-form-item>
          <el-form-item label="Message" prop="message">
            <el-input
              v-model="form.message"
              :rows="5"
              type="textarea"
              placeholder="Hi! i’d like to ask about"
            />
          </el-form-item>
        </el-form>

        <button @click="submitForm">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { IContactInfo, ISubmitContact } from "@/api/contact-index/index.js";
import BreadcrumbNav from "@/components/BreadcrumbNav.vue";


export default {
  components: { BreadcrumbNav },
  data() {
    return {
      input: 1,
      path: [
        { name: "Home", path: "/homeIndex" },
        { name: "Contact", path: "/contactIndex" },
      ],
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      formRules: {
        name: [
          { required: true, message: "Place Input YourName", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Place Input email", trigger: "blur" },
        ],
        subject: [
          { required: true, message: "Place Input subject", trigger: "blur" },
        ],
        message: [
          { required: true, message: "Place Input message", trigger: "blur" },
        ],
      },
      banners: {
        images: [],
      },
      contact: {
        address: "",
        mobile: "",
        phone: "",
        workingTime: "",
      },
    };
  },
  methods: {
    /**
     * 获取联系信息
     */
    getContactInfo() {
      IContactInfo().then((res) => {
        this.contact = res;
      });
    },

    /**
     * 表单提交
     */
    submitForm() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          ISubmitContact(this.form).then(() => {
            this.$message({
              message: "Submitted Successfully",
              type: "success",
            });
          });
        }
      });
    },
  },
  mounted() {
    this.getContactInfo();
  },
};
</script>

<style lang="scss" scoped>
.contact-index {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #000;
    font-size: 48px;
    line-height: 72px;
  }

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
  }

  > .el-row {
    padding: 0 100px;
    width: 100%;
  }

  .index__info {
    margin-top: 82px;
    display: flex;
    justify-content: center;

    .info__details {
      padding: 46px 76px 70px 106px;
      width: 392px;

      .details__item {
        position: relative;

        img {
          position: absolute;
          left: -60px;
          top: 5px;
        }

        .item__title {
          font-size: 24px;
          line-height: 36px;
        }

        p {
          font-size: 16px;
          line-height: 24px;
        }
      }

      .details__item + .details__item {
        margin-top: 42px;
      }
    }

    .info__form {
      margin-left: 30px;
      padding: 35px 78px 70px;
      width: 636px;

      button {
        margin-top: 62px;
        width: 236px;
        height: 55px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background-color: #b88e2f;
        border: 1px solid #b88e2f;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .contact-index {
    h1 {
      font-size: 32px; /* 调整标题字体大小 */
      line-height: 48px; /* 调整标题行高 */
    }

    .index__banner {
      height: 200px; /* 调整顶部横幅高度 */
    }

    > .el-row {
      padding: 0 20px; /* 调整水平内边距 */
    }

    .index__info {
      margin-top: 30px; /* 调整信息部分顶部间距 */
      flex-direction: column; /* 修改为垂直排列 */

      .info__details {
        padding: 20px; /* 调整信息详情内边距 */
        width: 100%; /* 让信息详情铺满整个宽度 */

        .details__item {
          position: relative;

          img {
            position: absolute;
            left: 0;
            top: -30px; /* 调整图像位置 */
          }

          .item__title {
            font-size: 20px; /* 调整标题字体大小 */
            line-height: 30px; /* 调整标题行高 */
          }

          p {
            font-size: 14px; /* 调整文本字体大小 */
            line-height: 20px; /* 调整文本行高 */
          }
        }
      }

      .info__form {
        margin-left: 0; /* 取消左侧边距 */
        padding: 20px; /* 调整表单内边距 */
        width: 100%; /* 让表单铺满整个宽度 */

        button {
          margin-top: 20px; /* 调整按钮上边距 */
          width: 100%; /* 让按钮铺满父容器宽度 */
        }
      }
    }
  }
}
</style>
