<template>
  <div>
    <div class="my-2 card-page">
      <b-card class="card-home" v-for="(item, index) in allUsers" :key="index">
        <div class="img-card" :style="`background-image: url(http://54.160.81.6:3002/${item.image});`">
          <span class="img"></span>
        </div>
        <b-card-text class="mt-3">
          <h3>{{item.name_user}}</h3>
          <p class="job-desk">{{item.job_desk}}</p>
          <img src="../assets/img/map-pin (4) 1.svg" class="map" />
          {{item.address}}
        </b-card-text>
        <div class="skill-list">
          <div v-for="(item2, index1) in skillsData.data[index]" :key="index1">
            <button class="btn text-white" style="text-overflow: clip;">{{item2}}</button>
          </div>
          <p>8+</p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CardUser',
  computed: {
    ...mapGetters({
      allUsers: 'auth/getAllUser',
      skillsData: 'auth/getAllSkills'
    })
  },
  methods: {
    ...mapActions({
      getDataUser: 'auth/getAllUser'
    })
  },
  mounted () {
    this.getDataUser()
  }
}
</script>

<style scoped>
.skill-list .btn {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
  height: 100%;
}

.skill-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px;
  justify-items: center;
  gap: 10px;
  width: 100%;
}

.card-home {
  background: #ffffff;
  border-radius: 4px;
  padding-left: 4px;
}
.img-card {
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-left: 10px;
}
.card-home:hover {
  opacity: 0.7;
  cursor: pointer;
}
.card-page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 300px));
  gap: 16px;
  justify-content: center;
}
@media only screen and (max-width: 576px) {
  .card-home {
    text-align: left;
  }
  h3 {
    padding-left: 35px;
    font-size: 23px;
  }
  .job-desk {
    padding-left: 35px;
  }
  .img-card {
    margin-left: 65px;
  }
  .map {
    padding-left: 50px;
  }
}
</style>
