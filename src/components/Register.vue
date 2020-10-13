<template>
  <div style="height: 131vh;">
    <div class="cont" v-if="type === 'pelamar'">
      <b-row class="no-gutters">
        <b-col lg="6">
          <img class="logo" src="../assets/img/exam.svg" alt="" />
          <div class="divImage">
          <div class="tinted-image"></div>
          <div class="bannerText"><h3>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3></div>
        </div>
        </b-col>
        <b-col lg="6">
          <div class="divForm">
            <h2 class="textHello">Halo, Pewpeople</h2>
            <h2 class="textLogin">Signup</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              atque itaque eos ullam aut, nam provident assumenda iste ex
              recusandae, sit quas architecto expedita repudiandae natus animi
              consequuntur libero neque.
            </p>
            <b-form @submit.prevent="onRegisLamar">
              <b-form-text class="mt-5">Nama</b-form-text>
              <b-input
                type="text"
                placeholder="Masukan nama panjang"
                autofocus
                class="mb-4"
                v-model="form.nama"
              ></b-input>
              <b-form-text>Email</b-form-text>
              <b-input
                type="email"
                placeholder="Masukan alamat email"
                class="mb-4"
                v-model="form.email"
              ></b-input>
              <b-form-text>No Handphone</b-form-text>
              <b-input
                type="number"
                placeholder="Masukan no handphone"
                class="mb-4"
                v-model="form.handphone"
              ></b-input>
              <b-form-text>Kata Sandi</b-form-text>
              <b-input
                type="password"
                placeholder="Masukan kata sandi"
                class="mb-4"
                v-model="form.password"
              ></b-input>
              <b-form-text>Konfirmasi Kata Sandi</b-form-text>
              <b-input
                type="password"
                placeholder="Masukan konfirmasi kata sandi"
                class="mb-4"
                v-model="form.password2"
              ></b-input>
              <button class="btn">Daftar</button>
            </b-form>
            <p class="mt-3" style="text-align: center">
              Anda sudah punya akun?
              <router-link to="/login" style="color: #fbb017">
                Masuk disini
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
          <div class="tinted-image"></div>
          <div class="bannerText"><h3>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3></div>
        </div>
        </b-col>
        <b-col lg="6">
          <div class="divForm">
            <h2 class="textHello">Halo, Pewpeople</h2>
            <h2 class="textLogin">Signup</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              atque itaque eos ullam aut, nam provident assumenda iste ex
              recusandae, sit quas architecto expedita repudiandae natus animi
              consequuntur libero neque.
            </p>
            <b-form @submit.prevent="onRegisRekrut()">
              <b-form-text class="mt-5">Nama</b-form-text>
              <b-input
                type="text"
                autofocus
                placeholder="Masukan nama panjang"
                class="mb-4"
                v-model="form.nama"
              ></b-input>
              <b-form-text>Email</b-form-text>
              <b-input
                type="email"
                placeholder="Masukan alamat email"
                class="mb-4"
                v-model="form.email"
              ></b-input>
              <b-form-text>Perusahaan</b-form-text>
              <b-input
                type="text"
                placeholder="Masukan nama perusahaan"
                class="mb-4"
                v-model="form.company"
              ></b-input>
              <b-form-text>Jabatan</b-form-text>
              <b-input
                type="text"
                placeholder="Posisi di perusahaan Anda"
                class="mb-4"
                v-model="form.position"
              ></b-input>
              <b-form-text>No Handphone</b-form-text>
              <b-input
                type="number"
                placeholder="Masukan no handphone"
                class="mb-4"
                v-model="form.handphone"
              ></b-input>
              <b-form-text>Kata Sandi</b-form-text>
              <b-input
                type="password"
                placeholder="Masukan kata sandi"
                class="mb-4"
                v-model="form.password"
              ></b-input>
              <b-form-text>Konfirmasi Kata Sandi</b-form-text>
              <b-input
                type="password"
                placeholder="Masukan konfirmasi kata sandi"
                class="mb-4"
                v-model="form.password2"
              ></b-input>
              <button class="btn">Daftar</button>
            </b-form>
            <p class="mt-3" style="text-align: center">
              Anda sudah punya akun?
              <router-link to="/loginrekrut" style="color: #fbb017">
                Masuk disini
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
        role: 0,
        nama: '',
        email: '',
        handphone: '',
        company: '',
        position: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    onRegisLamar () {
      if (this.form.password2 !== this.form.password) {
        this.$swal('Password doesn\'t match')
      } else if (this.form.nama === '' || this.form.email === '' || this.form.handphone === '' || this.form.password === '' || this.form.password2 === '') {
        this.$swal('Data cannot be empty!')
      } else {
        this.onSignUp(this.form)
          .then((result) => {
            if (result === 'Please check your email to activation') {
              this.$swal('Please check your email to activation')
            } else if (result === 'User Already exist') {
              this.$swal('Your email already exist!')
            } else {
              this.$router.push('/login')
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    onRegisRekrut () {
      this.form.role = 1
      if (this.form.password2 !== this.form.password) {
        this.$swal('Password doesn\'t match')
      } else if (this.form.company === '' || this.form.position === '' || this.form.nama === '' || this.form.email === '' || this.form.handphone === '' || this.form.password === '' || this.form.password2 === '') {
        this.$swal('Data cannot be empty!')
      } else {
        console.log(this.form)
        this.onSignUp(this.form)
          .then((result) => {
            if (result === 'Please check your email to activation') {
              this.$swal('Please check your email to activation')
            } else if (result === 'User Already exist') {
              this.$swal('Your email already exist!')
            } else {
              this.$router.push('/login')
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    ...mapActions({ onSignUp: 'auth/register' })
  },
  props: ['type']
}
</script>

<style scoped>
.tinted-image {
  width: 90%;
  height: 90vh;
  background: linear-gradient( rgba(94,80,161, 0.8), rgba(94,80,161, 0.8)),
  url('../assets/img/banner.svg');
}
.bannerText {
  color: #ffffff;
  margin: -60% 52% 0% 10%;
  position: absolute;
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
