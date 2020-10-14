<template>
  <div style="height: 100vh">
    <div class="cont" v-if="type === 'pelamar'">
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
            <h2 class="textHello">Halo, Pewpeople</h2>
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
              <b-input
                type="password"
                class="mb-4"
                v-model="form.password"
                placeholder="Masukan kata sandi"
              ></b-input>
              <a id="show-btn" @click="showModal"
                ><p class="mt-2" style="text-align: right">
                  Lupa kata sandi?
                </p></a
              >
              <button class="btn">Masuk</button>
            </b-form>
            <p class="mt-3" style="text-align: center">
              Anda belum punya akun?
              <router-link to="/register" style="color: #fbb017">
                Daftar disini
              </router-link>
            </p>
            <div>
              <b-modal ref="my-modal" hide-footer title="Lupa kata sandi?">
                <div class="d-block text-left">
                  <form @submit.prevent="resPass()">
                    <p>Email</p>
                    <b-input
                      type="text"
                      placeholder="Masukan alamat email"
                      autofocus
                      v-model="form.emailForgot"
                      class="mb-4 mt-3"
                    ></b-input>
                <button type="submit" class="btn">Kirim Email</button>
                  </form>
                </div>
              </b-modal>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="cont" v-else>
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
            <h2 class="textHello">Halo, Pewpeople</h2>
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
              <b-input
                type="password"
                v-model="form.password"
                class="mb-4"
                placeholder="Masukan kata sandi"
              ></b-input>
              <a id="show-btn" @click="showModal"
                ><p class="mt-2" style="text-align: right">
                  Lupa kata sandi?
                </p></a
              >
              <button class="btn">Masuk</button>
            </b-form>
            <p class="mt-3" style="text-align: center">
              Anda belum punya akun?
              <router-link to="/regisrekrut" style="color: #fbb017">
                Daftar disini
              </router-link>
            </p>
            <div>
              <b-modal ref="my-modal" hide-footer title="Lupa kata sandi?">
                <div class="d-block text-left">
                  <form @submit.prevent="resPass()">
                    <p>Email</p>
                    <b-input
                      type="text"
                      placeholder="Masukan alamat email"
                      autofocus
                      v-model="form.emailForgot"
                      class="mb-4 mt-3"
                    ></b-input>
                <button type="submit" class="btn">Kirim Email</button>
                  </form>
                </div>
              </b-modal>
            </div>
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
        password: '',
        emailForgot: ''
      }
    }
  },
  methods: {
    resPass () {
      if (this.form.emailForgot === '') {
        this.$swal('Data cannot be empty!')
      } else {
        this.actionReset(this.form.emailForgot)
          .then((result) => {
            if (result === 'Email invalid') {
              this.$swal('Email invalid. Please sign up!')
            } else if (result === 'Check your email to reset password') {
              this.$swal('Check your email to reset password')
              window.location = '/'
            }
          })
      }
    },
    onLoginPelamar () {
      if (this.form.email === '' || this.form.password === '') {
        this.$swal('Data cannot be empty!')
      } else {
        this.actionLogin(this.form)
          .then((result) => {
            if (result === 'Email invalid') {
              this.$swal("Email doesn't exist!")
              localStorage.removeItem('token')
            } else if (result === 'Password invalid') {
              this.$swal('Wrong Password!')
              localStorage.removeItem('token')
            } else if (result === 'Please check your email to activation') {
              this.$swal('Check your email activation!!')
              localStorage.removeItem('token')
            } else {
              window.location = '/'
            }
          })
          .catch((err) => {
            alert(err)
          })
      }
    },
    onLoginPerekrut () {
      if (this.form.email === '' || this.form.password === '') {
        this.$swal('Data cannot be empty!')
      } else {
        this.actionLogin(this.form)
          .then((result) => {
            if (result === 'Email invalid') {
              this.$swal("Email doesn't exist!")
              localStorage.removeItem('token')
            } else if (result === 'Password invalid') {
              this.$swal('Wrong Password!')
              localStorage.removeItem('token')
            } else if (result === 'Please check your email to activation') {
              this.$swal('Check your email activation!!')
              localStorage.removeItem('token')
            } else {
              window.location = '/'
            }
          })
          .catch((err) => {
            alert(err)
          })
      }
    },
    ...mapActions({
      actionLogin: 'auth/login',
      actionReset: 'auth/sendEmail'
    }),
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
