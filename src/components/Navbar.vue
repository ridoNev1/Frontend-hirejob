<template>
  <div class="navbar-box">
    <div class="navbar-page container">
      <img src="../assets/img/exam.svg" alt="logo">
      <div class="login-regbtn">
        <div class="need-login">
          <button class="btn">Daftar</button>
          <button class="btn">Masuk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-page {
  padding: 15px;
}
.navbar-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-page img {
  width: 127px;
  height: 35px;
}

.need-login button {
  font-weight: bold;
}
.need-login button:nth-child(1) {
  border: 2px solid #5E50A1;
  color: #5E50A1;
}
.need-login button:nth-child(1):hover {
  background-color: #5E50A1;
  color: white;
}
.need-login button:nth-child(2) {
  background-color: #5E50A1;
  color: white;
  border: 2px solid #5E50A1;
  margin-left: 15px;
}
.need-login button:nth-child(2):hover {
  background-color: transparent;
  color: #5E50A1;
}

@media screen and (max-width: 567px) {
  .navbar-page {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
