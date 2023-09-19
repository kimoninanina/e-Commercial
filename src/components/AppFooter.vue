<template>
  <footer class="footer">
    <div class="upper-footer">
      <div class="funiro-info">
        Nina.<br />
        400 University Drive Suite 200<br />
        Coral Gables, FL 33134<br />
        USA
      </div>
      <div class="footer-links">
        <div class="link-row">
          <a href="#">Links</a>
          <a href="#">Home</a>
        </div>
        <div class="link-row">
          <a href="#">Help</a>
          <a href="#">Payment Options</a>
        </div>
        <div class="link-row">
          <a href="#">Shop</a>
          <a href="#">Returns</a>
        </div>
        <div class="link-row">
          <a href="#">About</a>
          <a href="#">Privacy Policies</a>
        </div>
        <div class="link-row">
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="newsletter">
        <p>Enter Your Email Address</p>
        <input type="email" placeholder="Your email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
    <div class="lower-footer">
      <div class="line"></div>
      <div class="rights">
        <p>2023 Nina. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 30px 0;
  color: #333;
}

.upper-footer {
  display: flex;
  justify-content: space-between;
  align-items: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.funiro-info {
  font-size: 18px;
  text-align: left;
  color: lightslategrey;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.link-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.link-row a {
  color: black;
  text-decoration: none;
  margin-right: 10px;
}

.newsletter {
  display: flex;
  flex-direction: column;
}

.newsletter input {
  padding: 5px;
  margin: 5px 0;
}

.lower-footer {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto 0;
  padding: 0 20px;
  border-top: 1px solid #ccc;
}

.lefts {
  font-size: 14px;
  font-weight: bold;
}
</style>
