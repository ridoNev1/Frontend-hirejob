<template>
    <div>
        <Navbar />
<!-- <div class="top-bg fluid"> -->
            <div class="container-fluid">
            <b-col lg="12" class="profile py-5">
                    <b-row class="content mx-5">
                    <b-col lg="4" cols="12" class="user-card text-center">
                        <UserCard />
                        <b-row class="text-left">
                          <b-col lg="12" class="my-3">
                            <button class="btn btn-save">Simpan</button>
                          </b-col>
                          <b-col lg="12" class="my-3">
                           <button class="btn btn-cancel">Batal</button>
                          </b-col>
                        </b-row>

                    </b-col>
                    <b-col class="edit-profile" lg="8" cols="12">
                        <EditProfile />
                    </b-col>
                </b-row>
            </b-col>
      </div>
      <div>
          <Footer />
      </div>
</div>
</template>
<script>
import UserCard from '../components/UserCard'
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
    UserCard,
    Navbar,
    EditProfile,
    Footer
  }
}
</script>
<style scoped>
    .container-fluid{
        background: #F6F7F8;
    }
    .top-bg{
        background: #5E50A1;
        height: 200px;
    }
    .user-card{
        height: 600px;
    }
    .btn-save{
      width: 90%;
      color: white;
      background: #5E50A1;
border-radius: 4px;
    }
    .btn-save:hover{
      color: #5E50A1;
      background: white;
border-radius: 4px;
border: 1px solid #5E50A1;
    }
    .btn-cancel{
      width: 90%;
      border: 1px solid #5E50A1;
      box-sizing: border-box;
      border-radius: 4px;
    }
    .btn-cancel:hover{
      color: white;
      background: #5E50A1;
border-radius: 4px;
border: 1px solid #5E50A1;
    }
    /* .profile{
        padding: 0px 5px;
        margin-top: 5px;
    } */
    @media only screen and (max-width: 600px) {
  .edit-profile {
    margin-top: 150px;
  }
  .btn-cancel{
      width: 100%;
    }
    .btn-save{
      width: 100%;
    }
}
</style>
