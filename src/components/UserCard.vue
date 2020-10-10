<template>
  <div class="user-card">
    <div class="user-box">
      <div class="profile-image">
        <span></span>
      </div>
      <p class="text-secondary mt-3 text-center" style="margin-left: -15px;"><b-icon icon="pencil-fill" class="mr-1"></b-icon> Edit</p>
    </div>
    <div class="user-data mt-3">
      <div class="user-name">
        <h5 class="font-weight-bold" style="margin-bottom: 0;">Louis Tomlinson</h5>
        <p>Web Developer</p>
      </div>
      <div>
        <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin.png" alt="mappin"> Purwokerto, Jawa Tengah</p>
        <p class="text-secondary">Freelancer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard'
}
</script>

<style>
.user-card {
  width: 357px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.profile-image {
  width: 130px;
  background-image: url(../assets/img/userpreviewfoto.png);
  background-size: cover;
  height: 130px;
}
.user-data {
  width: 100%;
}
</style>
