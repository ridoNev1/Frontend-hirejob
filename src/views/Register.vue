<template>
  <div class="cont">
    <b-row class="no-gutters">
      <b-col lg="6">
        <img class="logo" src="../assets/img/exam.svg" alt="" />
        <div class="divImage">
          <img src="../assets/img/exmaple.jpg" alt="" />
          <!-- <img src="../assets/img/exam.svg"> -->
        </div>
      </b-col>
      <b-col lg="6">
        <div class="divForm">
          <h2 class="textHello">Hello, Fuckin Noise</h2>
          <h2 class="textLogin">Signup</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            atque itaque eos ullam aut, nam provident assumenda iste ex
            recusandae, sit quas architecto expedita repudiandae natus animi
            consequuntur libero neque.
          </p>
          <b-form @submit.prevent="onRegister()">
            <b-form-text>Nama</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan nama panjang"
              autofocus
            ></b-input>
            <b-form-text>Email</b-form-text>
            <b-input
              type="email"
              placeholder="Masukan alamat email"
            ></b-input>
            <b-form-text>No Handphone</b-form-text>
            <b-input
              type="number"
              placeholder="Masukan no handphone"
            ></b-input>
            <b-form-text>Kata Sandi</b-form-text>
            <b-input type="password" placeholder="Masukan kata sandi"></b-input>
            <b-form-text>Konfirmasi Kata Sandi</b-form-text>
            <b-input type="password" placeholder="Masukan konfirmasi kata sandi"></b-input>
            <p class="mt-2" style="text-align: right">Lupa kata sandi?</p>
            <b-button @click="onRegister()" block>Daftar</b-button>
          </b-form>
          <p class="mt-3" style="text-align: center">
            Anda sudah punya akun?
            <router-link to="/login" style="color: #fbb017">
              Daftar disini
            </router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.logo{
    position: absolute;
    margin-top: 30px;
    margin-left: 30px;
}
button {
  background: #fbb017;
  border-radius: 4px;
  border-color: #ffffff;
}
button:hover {
  background: #ffffff;
  color: #fbb017;
  border-color: #fbb017;
}
.divForm {
  margin: 50px 20px;
}
.cont {
  margin: 30px 60px !important;
}
.divImage img {
  width: 73%;
}
.textLogin {
    display: none;
}
@media screen and (max-width: 361px) {
  .divImage {
    display: none;
  }
  .logo{
      position: relative;
      margin-left: 0px;
  }
  .divForm {
      margin: 20px 0px;
  }
  .textHello {
      display: none;
  }
  .textLogin {
      display: inline;
  }
}
</style>
