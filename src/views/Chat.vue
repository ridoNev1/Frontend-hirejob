<template>
  <div class="chat-page">
    <Navbar />
    <div class="chat-content container mt-5">
      <div class="chatCol">
        <div class="chat-list">
          <div class="chat-nav">
            <p class="font-weight-bold m-0">Chat</p>
          </div>
        </div>
        <div class="friend-list">
          <div class="empty-friendlist">
            <img src="../assets/img/emptymessage.png" alt="emptymessage" class="mt-5">
          </div>
        </div>
      </div>
      <div class="message-list bg-white">
        <div class="chat-nav">
          <div class="profile-pict">
            <span></span>
          </div>
          <p class="font-weight-bold m-0">Chat</p>
        </div>
        <div class="chat-box p-4">
          <div class="template-message">
            <p>We hire you</p>
            <div class="company-header" style="display: flex;">
              <div class="img-recrutter">
                <span></span>
              </div>
              <p class="font-weight-bold mt-2">Tokopedia</p>
            </div>
            <div>
              <p class="mt-2">Position: <span class="font-weight-bold">Proyek</span></p>
              <p class="m-0"><img src="../assets/img/mail.png" alt="mail"> hrdhr@gmail.com</p>
              <p class="mt-1"><b-icon icon="telephone-plus" scale="1.2" class="ml-1 mr-1"></b-icon> 023134493113</p>
              <p>Saya sangat tertarik untuk mengundang anda untuk bergabung. Apabila anda tertarik,
              silahkan balas pesan ini. <br>
              Salam hangat <span class="font-weight-bold">Tokopedia</span>
              </p>
              <button class="btn text-white" style="background: #5E50A1;">Lihat Profile Perekrut</button>
            </div>
          </div>
          <div class="receiver-chat">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import io from 'socket.io-client'
import { url } from '../helper/env'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      socket: io(`${url}`),
      userData: localStorage.getItem('datauser')
    }
  },
  mounted () {
    this.socket.emit('get-friends', this.userData.id)
    this.socket.on('userList', (payload) => {
      console.log(payload)
    })
  }
}
</script>

<style scoped>
.chat-page {
  background-color: #F6F7F8;
  padding-bottom: 40px;
}
.chatCol {
  background-color: #fff;
}
.chat-nav {
  border-bottom: 1px solid rgb(226, 226, 226);
  display: flex;
  align-items: center;
  padding: 18px;
}
.empty-friendlist {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-content {
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 20px;
}

/* profile-pict */
.profile-pict {
  width: 40px;
  height: 40px;
  background-image: url(../assets/img/soda.jpeg);
  background-size: cover;
  border-radius: 20px;
  margin-right: 10px;
}

/* img-recrutter */
.img-recrutter {
  width: 50px;
  height: 50px;
  background-image: url(../assets/img/tokped.png);
  background-size: cover;
  border-radius: 25px;
  margin-right: 10px;
}
.template-message {
  box-shadow: 1px 1px 2px 1px rgb(226, 226, 226);
  padding: 10px;
}

.chat-box {
  height: 100vh;
}
</style>
