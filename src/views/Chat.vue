<template>
  <div>
    <Navbar />
    <div class="chatCol">
      <b-row style="background: #f6f7f8" class="no-gutters">
        <b-col lg="6">
          <div class="chatUser mt-3">
            <h5 class="ml-3 pt-4 pb-2">Chat</h5>
            <hr />
            <div class="d-flex justify-content-left ml-3 mb-4 pt-3">
              <div class="profile-image">
                <img
                  style="width: 70px; height: 70px; border-radius: 70px"
                  src="../assets/img/soda.jpeg"
                  alt=""
                />
                <span></span>
              </div>
              <div class="ml-5">
                <h5>Soda</h5>
                <p>Lagi pengen nih :(</p>
              </div>
            </div>
            <div class="d-flex justify-content-left ml-3 mb-4 pt-3">
              <div class="profile-image">
                <img
                  style="width: 70px; height: 70px; border-radius: 70px"
                  src="../assets/img/pict3.jpg"
                  alt=""
                />
                <span></span>
              </div>
              <div class="ml-5">
                <h5>Eunbi</h5>
                <p>Kangen</p>
              </div>
            </div>
            <div class="d-flex justify-content-left ml-3 mb-4 pt-3">
              <div class="profile-image">
                <img
                  style="width: 70px; height: 70px; border-radius: 70px"
                  src="../assets/img/pict4.jpg"
                  alt=""
                />
                <span></span>
              </div>
              <div class="ml-5">
                <h5>Mia</h5>
                <p>Dingin, temenin dong :(</p>
              </div>
            </div>
            <div class="d-flex justify-content-left ml-3 mb-4 pt-3">
              <div class="profile-image">
                <img
                  style="width: 70px; height: 70px; border-radius: 70px"
                  src="../assets/img/pict1.jpeg"
                  alt=""
                />
                <span></span>
              </div>
              <div class="ml-5">
                <h5>Jokowi</h5>
                <p>Nanti pilih saya lagi ya</p>
              </div>
            </div>
            <div class="d-flex justify-content-left ml-3 mb-4 pt-3">
              <div class="profile-image">
                <img
                  style="width: 70px; height: 70px; border-radius: 70px"
                  src="../assets/img/pict5.jpeg"
                  alt=""
                />
                <span></span>
              </div>
              <div class="ml-5">
                <h5>Tante Okita</h5>
                <p>Temenin tante yuk</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="6" class="mt-3">
          <div class="card cardStyle" style="width: 40rem">
            <div class="ml-3 chatImgUser">
              <img style="width: 50px; height: 50px; border-radius: 70px; margin-top: 10px;" src="../assets/img/soda.jpeg" alt="Card image cap" />
              <h5 class="ml-3" style="margin-top: 20px">Soda</h5>
            </div>
            <hr style="margin-top: 10px;">
            <div class="card-body Message">
              <p>Lagi pengen nih..</p>
            </div>
            <div>
              <form @submit.prevent="sendMessage()">
                <div class="input-group mb-3 pl-3 pr-3">
                  <input
                    placeholder="Type message..."
                    type="text"
                    class="inputMessage">
                  <div class="input-group-append">
                    <img @click="sendMessage()" class="ml-3" src="../assets/img/sendIcon.png">
                    <!-- <button
                      class="btn btn-outline-secondary ml-3"
                      type="button"
                      id="button-addon2"
                      @click="sendMessage()"
                    >
                    </button> -->
                  </div>
                </div>
              </form>
            </div>
          </div>
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
.Message {
  min-height: 66vh;
}
.inputMessage{
      width: 93%;
      margin-left: 3px;
      border:solid 1px #ccc;
      border-radius: 30px;
    }
.cardStyle{
  margin-left: 30px;
}
.card {
  border: none;
}
.chatImgUser {
  display: flex;
  justify-content: left;
}
.chatting {
  background: #ffffff;
  margin-left: 20px;
  margin-right: 10%;
  border-color: #f6f7f8;
}
.chatUser {
  margin-left: 10%;
  background: #ffffff;
}
.profile-image {
  width: 70px;
  /* background-image: url(../assets/img/soda.jpeg); */
  background-size: cover;
  height: 70px;
  border-radius: 70px;
}
</style>
