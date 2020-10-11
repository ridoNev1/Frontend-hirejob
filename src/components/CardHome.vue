<template>
    <div>
        <div class="my-2">
  <b-card class="card-home">
    <div class="img-card">
      <span class="img"></span>
    </div>
    <b-card-text class="mt-3">
      <h3>Udin Herman</h3>
        <p>Fullstack Developer</p>
          <img src="../assets/img/map-pin (4) 1.svg" alt="">
        Jakarta Timur
    </b-card-text>
    <div class="skill d-flex justify-content-start" >
    <button class="btn text-white  mx-2">PHP</button>
    <button class="btn text-white  mx-2">Javascript</button>
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
}
@media only screen and (max-width: 600px) {
  .card-home {
    text-align: left;
  }
}
</style>
