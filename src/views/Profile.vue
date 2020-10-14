<template>
    <div>
        <Navbar />
            <div class="container-fluid">
                    <EditProfile type="profile" />
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
