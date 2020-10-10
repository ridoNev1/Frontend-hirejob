<template>
  <div>
    <Navbar />
    <b-row style="background: #f6f7f8" class="no-gutters">
      <b-col lg="5" class="mt-3">
        <div class="profileHire">
          <div class="userCard">
            <UserCard/>
          </div>
        </div>
      </b-col>
      <b-col lg="7" class="mt-3">
        <div class="divHire">
        <h2>Hubungi DJ SODA</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          recusandae quo qui at neque repellat, nemo quisquam ratione dolorem
          laudantium! Dignissimos, libero ea facilis iure maiores accusantium
          expedita vel consectetur?
        </h5>

        <b-form @submit.prevent="onHire()">
            <b-form-text>Tujuan tentang posisi ini</b-form-text>
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <b-form-text>Nama Lengkap</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan nama lengkap"
              autofocus
            ></b-input>
            <b-form-text>Email</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan email"
            ></b-input>
            <b-form-text>No Handphone</b-form-text>
            <b-input
              type="number"
              placeholder="Masukan no handphone"
            ></b-input>
            <b-form-text>Deskripsi</b-form-text>
            <b-form-textarea placeholder="Deskripsikan jelaskan lebih detail" rows="8"></b-form-textarea>
            <b-button @click="onHire()" class="mt-4" block>Hire</b-button>
          </b-form>

        </div>
      </b-col>
    </b-row>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserCard from '../components/UserCard'
export default {
  components: {
    Navbar,
    Footer,
    UserCard
  }
}
</script>

<style scoped>
.userCard{
  margin-left: 10%;
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
.divHire{
  margin-right: 110px;
}
.buttonSkill button {
  pointer-events: none;
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
}
.profileHire {
  background: #ffffff;
  margin: 0px 80px 0px 100px;
  padding: 50px 0 20px 20px;
}
.profileHire img {
  width: 150px;
  height: 150px;
  margin-left: 90px;
}
</style>
