<template>
<div>
    <Navbar />
    <div class="content">
        <div class="container-fluid ">
        <b-col lg="12" class="company ">
          <b-row class="profile-company text-center">
                <div class="profile-bg mb-5 ">
                    <div class="profile-picture">
                    <span></span>
                    </div>
                </div>
                <b-col lg="12" class="mt-3">
                  <h1 style="font-size:22px">PT. Martabat Jaya Abadi
                    </h1>
                    <p>Financial</p>
                </b-col>
                <b-col lg="12">
                    <img src="../assets/img/map-pin (4) 1.svg" alt="">
                    Jakarta Timur
                </b-col>
                <b-col lg="12">
                    <p class="mx-5 my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                </b-col>
                <b-col lg="12">
                    <button class="btn btn-edit">Edit Profile</button>
                     <div class="d-flex mt-5 ">
                        <b-col lg="5" cols="4" class="text-right">
                            <img class="mx-2" src="../assets/img/mail (4).png" alt="">
                        </b-col>
                        <b-col lg="7" cols="7" class="text-left value">
                            <p>martabatjaya@gmail.com</p>
                        </b-col>
                    </div>
                    <div class="d-flex ">
                        <b-col lg="5" cols="4" class="text-right">
                            <img class="mx-2" src="../assets/img/instagram.png" alt="">
                        </b-col>
                        <b-col lg="7" cols="4" class="text-left value">
                            <p>martabat_jaya</p>
                        </b-col>
                    </div>
                    <div class="d-flex my-">
                        <b-col lg="5" cols="4" class="text-right">
                            <img class="mx-2" src="../assets/img/phone 1.png" alt="">
                        </b-col>
                        <b-col lg="7" cols="5" class="text-left value">
                            <p>0821-8190-1821</p>
                        </b-col>
                    </div>
                     <div class="d-flex ">
                        <b-col lg="5" cols="4" class="text-right">
                            <img class="mx-2" src="../assets/img/linkedin 1.png" alt="">
                        </b-col>
                        <b-col lg="7" cols="" class="text-left value">
                            <p>Martabat Jaya Abadi</p>
                        </b-col>
                    </div>
                </b-col>

          </b-row>
      </b-col>
    </div>
    </div>
    <Footer />
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>
    .container-fluid{
        background: #F6F7F8;
        padding: 100px 200px;
    }
    .profile-picture {
  width: 120px;
  background-image: url(../assets/img/soda.jpeg);
  background-size: cover;
  height: 120px;
  border-radius: 60px;
  position: relative;
  top: 50px;
  margin-left: 44%;
}
.profile-bg {
  background-color: #5E50A1;
  border-radius: 8px 8px 0 0;
  padding-left: 50px;
  padding-top: 30px;
  width: 100%;
}
    .value p{
        color: #9EA0A5;
        font-size: 14px;
    }
    .profile-company{
        background: #FFFFFF;
        border-radius: 8px;
        /* margin: 30px 40px; */
    }
    .img-card{
  width: 130px;
  height: 130px;
  background-image: url('../assets/img/card-img.jpg');
  background-size: cover;
  border-radius: 50px;
}
.btn-edit{
    /* width: 100%; */
    border: 1px solid #5E50A1;
    width: 300px;
    color: white;
    background: #5E50A1;
border-radius: 4px;
}
.btn-edit:hover{
    /* width: 100%; */
    border: 1px solid #5E50A1;
    width: 300px;
    color:  #5E50A1;
    background: white;
border-radius: 4px;
}
@media only screen and (max-width: 600px) {
    .profile-picture {
  width: 120px;
  background-image: url(../assets/img/soda.jpeg);
  background-size: cover;
  height: 120px;
  border-radius: 60px;
  position: relative;
  top: 50px;
  margin-left: 20%;
}
.profile-company{
        background: #FFFFFF;
        border-radius: 0px;
        margin: 0px;
        padding: 0px;
    }
    .profile-bg {
  background-color: #5E50A1;
  border-radius: 0px;
}
    .company{
        padding: 0px;
    }
    .container-fluid{
        padding: 0px;
    }
}
</style>
