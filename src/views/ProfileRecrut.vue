<template>
    <div>
        <Navbar />
            <div class="container-fluid">
                    <EditProfile type="profilerecrut" />
          </div>
      <div>
          <Footer />
      </div>
</div>
</template>
<script>
import Navbar from '../components/Navbar'
import EditProfile from '../components/EditProfile'
import Footer from '../components/Footer'
export default {
  data () {
    return {
      role: 0
    }
  },
  components: {
    Navbar,
    EditProfile,
    Footer
  },
  methods: {
    saveDataTalent () {
      alert('talent')
    }
  }
}
</script>
<style scoped>
.container-fluid{
  background: #f6f7f8;
  padding: 30px;
}
</style>
