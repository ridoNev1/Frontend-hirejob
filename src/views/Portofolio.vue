<template>
  <div class="portofolio-page">
    <Navbar />
    <div class="portofolio-content">
      <div class="container pt-5 portofolio-box">
        <div class="profile-applicant">
          <div class="profile-bg">
            <div class="profile-picture" :style="`background-image: url(http://localhost:3000/${detailUser.image});`">
              <span></span>
            </div>
          </div>
          <div class="portofolio-experience p-5">
            <div class="user-applicant-data mt-4">
              <h5 class="font-weight-bold">{{detailUser.name_user}}</h5>
              <p class="font-weight-bold">{{detailUser.job_desk}}</p>
              <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin.png" alt="mappin"> {{detailUser.address}}</p>
              <p class="text-secondary pt-2">{{detailUser.job_type}}</p>
              <p class="bio-user">{{detailUser.description}}</p>
              <button class="btn hire-button">Hire</button>
              <div class="mt-5">
                <p class="font-weight-bold">Skill</p>
                <div class="skill-list-box">
                  <p class="skill-list" v-for="(item, index) in detailUser.skill" :key="index">{{item}}</p>
                </div>
              </div>
              <p class="mt-5"><img src="../assets/img/mail.png" class="mr-3" alt="email"> {{detailUser.s_email}}</p>
              <p><img src="../assets/img/instagram.png" class="mr-3" alt="instagram"> {{detailUser.s_instagram}}</p>
              <p><img src="../assets/img/github.png" class="mr-3" alt="github"> {{detailUser.s_github}}</p>
              <p><img src="../assets/img/gitlab.png" class="mr-3" alt="gitlab"> @usergitlab</p>
            </div>
            <div class="navbar-portofolio mt-5">
              <p class="switch-nav switch-toggle" @click="switchToggle1">Portofolio</p>
              <p class="switch-nav switch-toggle2" @click="switchToggle2">Pengalaman Kerja</p>
            </div>
            <div class="main-content">
              <div class="portofolio" v-if="switchContent === 0">
                <div class="portfolio-project" v-for="(item, index) in dataPortfolio" :key="index">
                  <div class="portofolio-pict" :style="`background-image: url(http://localhost:3000/${item.image_port});`"><span></span></div>
                  <p class="font-weight-bold mb-3 mt-2">{{item.name_app}}</p>
                </div>
              </div>
              <div class="experience mt-4" v-else>
                <div class="experience-list">
                  <div class="company-profile">
                    <span></span>
                  </div>
                  <div class="experiece-bio">
                    <h4 class="font-weight-bold">Engginer</h4>
                    <h6>Tokopedia</h6>
                    <h6 class="text-secondary">July 2019 - January 2020 6 months</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Portofolio',
  components: {
    Navbar
  },
  data () {
    return {
      switchToggle: 0,
      switchContent: 0,
      dataSkill: ['PHP', 'Phyton'],
      dataUser: JSON.parse(localStorage.getItem('datauser'))
    }
  },
  computed: {
    ...mapGetters({
      detailUser: 'auth/getDetailUser',
      dataPortfolio: 'auth/getPortfolio'
    })
  },
  methods: {
    switchToggle1 () {
      if (this.switchToggle === 1) {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      } else {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        this.switchToggle = 1
      }
      this.switchContent = 0
    },
    switchToggle2 () {
      if (this.switchToggle === 1) {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      } else {
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      }
      this.switchContent = 1
    },
    ...mapActions({
      getDetailUser: 'auth/getOneUser',
      getPortfolio: 'auth/findPortfolio'
    })
  },
  mounted () {
    const tgl1 = document.querySelector('.switch-toggle')
    tgl1.classList.toggle('switch-nav2')
    this.switchToggle = 1
    this.getDetailUser(this.dataUser.id)
    this.getPortfolio(this.dataUser.id)
  }
}
</script>

<style scoped>
/* profile-picture */
.profile-picture {
  width: 120px;
  background-size: cover;
  height: 120px;
  border-radius: 60px;
  position: relative;
  top: 50px;
}
.profile-bg {
  background-color: #5E50A1;
  border-radius: 8px 8px 0 0;
  padding-left: 50px;
  padding-top: 30px;
}
/* hire-button */
.hire-button {
  border: 2px solid #5E50A1;
  background-color: #5E50A1;
  color: white;
  font-weight: bold;
  padding: 7px 100px;
}
.hire-button:hover {
  border: 2px solid #5E50A1;
  background-color: #fff;
  color: #5E50A1;
}
.skill-list {
    padding: 5px 12px;
    background: #FBB017 60%;
    color: white;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 0;
}
.skill-list-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 120px));
    justify-content: start;
    gap: 15px;
}

.bio-user {
  width: 60%;
}
/* portofolio-page */
.portofolio-page {
  background-color: #F6F7F8;
  height: 200vh;
}

.portofolio-experience {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}
.navbar-portofolio {
  display: flex;
}
.navbar-portofolio p {
  font-weight: bold;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
}
.switch-nav:hover::after {
  content: '';
  display: block;
  background-color: #5E50A1;
  width: 100%;
  height: 4px;
  margin-top: 6px;
  border-radius: 10px;
}
.switch-nav2::after {
  content: '';
  display: block;
  background-color: #5E50A1;
  width: 100%;
  height: 4px;
  margin-top: 6px;
  border-radius: 10px;
}
.portofolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(219px, 1fr));
  gap: 12px;
  width: 80%;
}

.portofolio-pict {
  width: 219px;
  height: 148px;
  background-size: cover;
  border-radius: 4px;
}
.company-profile {
  width: 74px;
  height: 74px;
  background-image: url(../assets/img/tokped.png);
  background-size: cover;

}
.experience-list {
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-bottom: 1px solid #E2E5ED;
  margin-bottom: 12px;
}
.experience {
  width: 70%;
}
@media screen and (max-width: 576px) {
  .portofolio-box {
    width: 100% !important;
    padding: 0 !important;
  }
  .portofolio {
    width: 100%;
  }
  .experience {
    width: 100%;
  }
  .experience-list {
    grid-template-columns: 2fr 4fr;
  }
  .navbar-portofolio {
    width: 100%;
  }
  .bio-user {
    width: 100%;
  }
}
</style>
