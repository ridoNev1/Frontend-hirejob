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
          <div class="empty-friendlist" v-if="listFriend === null">
            <img src="../assets/img/emptymessage.png" alt="emptymessage" class="mt-5">
          </div>
          <div v-else class="p-2 mb-1 friend-num" v-for="(item, index) in listFriend" :key="index" @click="onShowChat(item.email)">
            <div class="profile-pict-list" :style="`background-image: url(http://54.160.81.6:3002/${item.image});`">
              <span></span>
            </div>
            <p>{{item.name_user}}</p>
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
        <div class="chat-container">
          <div class="emptychat-box" v-if="showChat === 0">
            <img src="../assets/img/emptymessage.png" alt="emptymessage" class="mt-5">
          </div>
          <div class="chat-box p-4" v-else>
            <div class="chat-room">
              <div class="chat-portal" v-for="(item, index) in privateChat" :key="index">
                <div class="template-message" v-if="item.type_chat === 2">
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
                <div class="receiver-chat" v-else-if="item.type_chat === 1 && item.receiver !== dataApplicant">
                  <p>{{item.message}}</p>
                </div>
                <div class="sender-chat" v-else>
                  <p>{{item.message}}</p>
                </div>
              </div>
            </div>
            <!-- tc -->
            <form class="form-chat" @submit.prevent="sendMessage">
              <input type="text" class="form-control" v-model="chat" placeholder="type message">
              <button type="submit"><img src="../assets/img/sendmessage.png" alt="send"></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {{privateChat}}
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
      userData: JSON.parse(localStorage.getItem('datauser')),
      dataApplicant: null,
      listFriend: null,
      showChat: 0,
      chat: '',
      roomChat: [],
      privateChat: []
    }
  },
  methods: {
    onShowChat (email) {
      this.showChat = 1
      this.dataApplicant = email
      this.setPrivateChat()
    },
    sendMessage () {
      const data = {
        type_chat: 1,
        sender: this.userData.email,
        receiver: this.dataApplicant,
        message: this.chat
      }
      this.roomChat = [...this.roomChat, data]
      // console.log(data)
      this.socket.emit('send-message', data)
      this.chat = ''
      this.setPrivateChat()
    },
    setPrivateChat () {
      const privateChats = this.roomChat.filter(e => {
        if (this.dataApplicant === null) {
          return e.sender === this.dataApplicant || e.sender === this.userData.email
        } else {
          return e.receiver === this.dataApplicant || e.sender === this.dataApplicant
        }
      })
      this.privateChat = privateChats
    }
  },
  mounted () {
    this.socket.emit('get-friends', this.userData.id)
    this.socket.on('userList', (payload) => {
      this.listFriend = payload
    })
    this.socket.emit('join-room', this.userData.email)
    this.socket.on('list-message', (payload) => {
      this.roomChat = [...this.roomChat, payload]
      if (this.dataApplicant !== null) {
        this.setPrivateChat()
      }
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
  /* background-image: url(../assets/img/soda.jpeg); */
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
.friend-num {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;
}
.friend-num:hover {
  background-color: rgb(236, 236, 236);
}
.friend-num p {
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
}
.profile-pict-list {
  width: 60px;
  height: 60px;
  /* background-image: url(../assets/img/soda.jpeg); */
  background-size: cover;
  border-radius: 30px;
  margin-right: 10px;
}
.emptychat-box {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-room {
  height: 85vh;
  overflow: scroll;
}
.chat-room::-webkit-scrollbar {
  height: 0;
  width: 2px;
}
.chat-room::-webkit-scrollbar-thumb {
  background-color: rgb(207, 207, 207);
}
/* #5E50A1 */
.form-chat {
  display: flex;
}
.form-chat input {
  border-radius: 25px;
}
.form-chat button {
  margin: 0 20px;
  width: 38px;
  height: 38px;
  outline: none;
  border: none;
  border-radius: 17px;
  background-color: #5E50A1;
}
.receiver-chat {
  display: flex;
  /* background: pink; */
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}
.receiver-chat p {
  background-color: #5E50A1;
  padding: 8px 10px;
  font-weight: bold;
  color: white;
  border-radius: 35px 35px 35px 10px;
}
.sender-chat {
  display: flex;
  /* background: pink; */
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}
.sender-chat p {
  background-color: #f6f7f8;
  padding: 8px 10px;
  font-weight: bold;
  border-radius: 35px 10px 35px 35px;
}
</style>
