<template>
    <div>
        <Navbar />
            <EditProfile type="profilerecrut" />
          <Footer />
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
