<template>
  <div style="height: 100vh">
    <div class="cont">
      <b-row class="no-gutters">
        <b-col lg="6">
          <img class="logo" src="../assets/img/exam.svg" alt="" />
          <div class="divImage">
            <div class="tinted-image"></div>
            <div class="bannerText">
              <h3>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h3>
            </div>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="divForm">
            <h2 class="textHello">Reset Password</h2>
            <h2 class="textLogin">Login</h2>
            <p>
              You need to change your password to activate your account.
            </p>
            <b-form @submit.prevent="onResetPassword()">
              <b-form-text class="mt-5">Kata Sandi</b-form-text>
              <b-input
                type="password"
                placeholder="Masukan kata sandi"
                autofocus
                v-model="form.password"
                class="mb-4"
              ></b-input>
              <b-form-text>Konfirmasi Kata Sandi</b-form-text>
              <b-input
                type="password"
                class="mb-4"
                v-model="form.password2"
                placeholder="Masukan konfirmasi kata sandi"
              ></b-input>
              <button class="btn">Reset Password</button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    onResetPassword () {
      console.log(this.form.password)
      console.log(this.form.password2)
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
  },
  props: ['type']
}
</script>

<style scoped>
#show-btn {
  cursor: pointer;
}
.tinted-image {
  width: 90%;
  height: 90vh;
  background: linear-gradient(rgba(94, 80, 161, 0.8), rgba(94, 80, 161, 0.8)),
    url("../assets/img/banner.svg");
}
.logo {
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
  width: 73%;
}
.textLogin {
  display: none;
}
.bannerText {
  color: #ffffff;
  margin: -60% 52% 0% 10%;
  position: absolute;
}
@media screen and (max-width: 361px) {
  .divImage {
    display: none;
  }
  .logo {
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
