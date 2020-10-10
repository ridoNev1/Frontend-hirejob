<template>
  <div class="portofolio-page">
    <Navbar />
    <UserCard />
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
import Navbar from '../components/Navbar'
export default {
  name: 'Portofolio',
  components: {
    UserCard,
    Navbar
  }
}
</script>

<style>
.portofolio-page {
  background: #E5E5E5;
}

</style>
