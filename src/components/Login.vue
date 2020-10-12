<template>
<div style="height: 100vh;">
  <div class="cont" v-if="type === 'pelamar'">
    <b-row class="no-gutters">
      <b-col lg="6">
        <img class="logo" src="../assets/img/exam.svg" alt="" />
        <div class="divImage">
          <img src="../assets/img/banner.svg" alt="" />
        </div>
      </b-col>
      <b-col lg="6">
        <div class="divForm">
          <h2 class="textHello">Hello, Fuckin Noise</h2>
          <h2 class="textLogin">Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            atque itaque eos ullam aut, nam provident assumenda iste ex
            recusandae, sit quas architecto expedita repudiandae natus animi
            consequuntur libero neque.
          </p>
          <b-form @submit.prevent="onLoginPelamar()">
            <b-form-text class="mt-5">Email</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan alamat email"
              autofocus
              v-model="form.email"
              class="mb-4"
            ></b-input>
            <b-form-text>Kata Sandi</b-form-text>
            <b-input type="password" class="mb-4" v-model="form.password" placeholder="Masukan kata sandi"></b-input>
            <p class="mt-2" style="text-align: right">Lupa kata sandi?</p>
            <button class="btn">Masuk</button>
          </b-form>
          <p class="mt-3" style="text-align: center">
            Anda belum punya akun?
            <router-link to="/register" style="color: #fbb017">
              Daftar disini
            </router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
  <div class="cont" v-else>
    <b-row class="no-gutters">
      <b-col lg="6">
        <img class="logo" src="../assets/img/exam.svg" alt="" />
        <div class="divImage">
          <img src="../assets/img/exmaple.jpg" alt="" />
        </div>
      </b-col>
      <b-col lg="6">
        <div class="divForm">
          <h2 class="textHello">Hello, Fuckin Noise</h2>
          <h2 class="textLogin">Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            atque itaque eos ullam aut, nam provident assumenda iste ex
            recusandae, sit quas architecto expedita repudiandae natus animi
            consequuntur libero neque.
          </p>
          <b-form @submit.prevent="onLoginPerekrut()">
            <b-form-text class="mt-5">Email</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan alamat email"
              autofocus
              v-model="form.email"
              class="mb-4"
            ></b-input>
            <b-form-text>Kata Sandi</b-form-text>
            <b-input type="password" v-model="form.password" class="mb-4" placeholder="Masukan kata sandi"></b-input>
            <p class="mt-2" style="text-align: right">Lupa kata sandi?</p>
            <button class="btn">Masuk</button>
          </b-form>
          <p class="mt-3" style="text-align: center">
            Anda belum punya akun?
            <router-link to="/register" style="color: #fbb017">
              Daftar disini
            </router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLoginPelamar () {
      this.actionLogin(this.form)
        .then((result) => {
          if (result === 'Email invalid') {
            this.$swal('Email doesn\'t exist!')
            localStorage.removeItem('token')
          } else if (result === 'Password invalid') {
            this.$swal('Wrong Password!')
            localStorage.removeItem('token')
          } else if (result === 'Please check your email to activation') {
            this.$swal('Check your email activation!!')
            localStorage.removeItem('token')
          } else {
            this.$router.push('/')
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    onLoginPerekrut () {
      console.log(this.form.email)
      console.log(this.form.password)
    },
    ...mapActions({ actionLogin: 'auth/login' })
  },
  props: ['type']
}
</script>

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
  width: 100%;
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
  padding: 30px 60px !important;
}
.divImage img {
  opacity: 0.5;
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
