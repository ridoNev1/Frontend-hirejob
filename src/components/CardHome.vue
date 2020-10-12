<template>
    <div>
        <div class="my-2">
  <b-card class="card-home">
    <div class="img-card">
      <span class="img"></span>
    </div>
    <b-card-text class="mt-3">
      <h3>Udin Herman</h3>
        <p class="job-desk">Fullstack Developer</p>
          <img src="../assets/img/map-pin (4) 1.svg" class="map">
        Jakarta Timur
    </b-card-text>
    <div class="skill d-flex justify-content-start" >
    <button class="btn text-white  mx-2">PHP</button>
    <button class="btn text-white  mx-2">Javascript</button>
    <button class="btn text-white  mx-2">Jav</button>
    </div>
  </b-card>
</div>
</div>
</template>
<style scoped>
.skill .btn{
    background: rgba(251, 176, 23, 0.6);
border: 1px solid #FBB017;
box-sizing: border-box;
border-radius: 4px;
}
.skill{
  overflow-x:hidden;
}
.card-home{
    background: #FFFFFF;
border-radius: 4px;
padding-left: 4px;
}
.img-card{
  width: 100px;
  height: 100px;
  background-image: url('../assets/img/udin.jpg');
  background-size: cover;
  margin-left: 10px;
}
.card-home:hover{
  opacity: 0.7;
  cursor: pointer;
}
@media only screen and (max-width: 576px) {
  .card-home {
    text-align: left;
  }
  h3{
    padding-left: 35px;
    font-size: 23px;
  }
  .job-desk{
    padding-left: 35px;
  }
  .img-card{
    margin-left: 65px;
  }
  .map{
    padding-left: 50px;
  }
}
</style>
