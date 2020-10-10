<template>
    <div>
        <Navbar/>
        <div>
            <b-row style="background: #f6f7f8;" class="no-gutters">
                <b-col lg="6">
                  <div class="chatUser mt-3">
                    <h5>Chat</h5>
                    <hr>
                    <b-avatar size="6rem"><img src="../assets/img/userpreviewfoto.png"></b-avatar>
                  </div>
                </b-col>
                <b-col lg="6" class="mt-3">
                    TEST
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.chatUser{
  margin-left: 10%;
  background: #ffffff;
}
.chatUser img {
  width: 100px;
}
</style>
