<template>
  <div>
    <div class="container-fluid">
    <div v-if="type === 'profile'">
      <b-col lg="12">
        <!-- form pencari kerja -->
        <b-row class="users">
          <b-col lg="4" cols="12" class="mt-5">
            <UserCard />
            <b-row class="text-left">
              <b-col lg="12" class="my-3">
                <button
                  class="btn btn-save"
                  type="profilerecrut"
                  @click="saveDataTalent()"
                >
                  Simpan
                </button>
              </b-col>
              <b-col lg="12" class="">
                <button class="btn btn-cancel">Batal</button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="8" cols="12">
            <b-row>
              <b-col lg="12" class="profile-user mt-5">
                <b-row class="">
                  <b-col lg="12">
                    <h1
                      class="px-2 py-3"
                      style="border-bottom: 1px solid #c4c4c4; font-size: 25px"
                    >
                      Data Diri
                    </h1>
                  </b-col>
                  <b-col lg="12">
                    <form>
                      <div class="form-group">
                        <label>Nama Lengkap</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukan nama lengkap"
                          v-model="users.fullnameApplicant"
                        />
                      </div>
                      <div class="form-group">
                        <label>Jobdesk</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukan Jobdesk"
                          v-model="users.jobdescApplicant"
                        />
                      </div>
                      <div class="form-group">
                        <label>Domisili</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukan Domisili"
                          v-model="users.domApplicant"
                        />
                      </div>
                      <div class="form-group">
                        <label>Tempat Kerja</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukan Tempat Kerja"
                          v-model="users.placeWorkApplicant"
                        />
                      </div>
                      <div class="form-group">
                        <label>Deskripsi singkat</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          placeholder="Tuliskan deskripsi singkat"
                          v-model="users.bioApplicant"
                        ></textarea>
                      </div>
                    </form>
                  </b-col>
                </b-row>
              </b-col>
              <!-- skil -->
              <b-col lg="12" class="skill-search my-4">
                <b-row class="input-search">
                  <b-col lg="12">
                    <h1
                      class="px-2 py-3"
                      style="border-bottom: 1px solid #c4c4c4; font-size: 25px"
                    >
                      Skill
                    </h1>
                  </b-col>
                  <b-col lg="12">
                    <div class="skill-list-box">
                      <p
                        class="skill-list"
                        v-for="(item, index) in users.dataSkill"
                        :key="index"
                      >
                        {{ item }}
                      </p>
                    </div>
                    <div class="input-group mb-3 mt-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Input skill"
                        v-model="userSkill"
                      />
                      <button class="btn search-btn mx-3" @click="addSkill">
                        Tambahkan
                      </button>
                    </div>
                  </b-col>
                </b-row>
              </b-col>

              <!-- experience -->
              <b-col lg="12" class="experience my-4">
                <b-row class="">
                  <!-- pembungkus experience -->
                  <div style="width:100%" v-for="(item,index) in dataExperience" :key="index">
                  <b-col lg="12">
                    <h1
                      class="px-2 py-3"
                      style="border-bottom: 1px solid #c4c4c4; font-size: 25px"
                    >
                      Pengalaman Kerja
                    </h1>
                  </b-col>
                  <div class="line py-2"></div>
                  <b-col lg="12">
                      <div class="form-group">
                        <label>Posisi</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Fullstack Developer"
                          v-model="item.position" :position="item.position"
                        />
                      </div>
                    <!--  -->
                  </b-col>
                  <b-col lg="12">
                    <b-row>
                      <b-col lg="6" class="text-left">
                        <div class="form-group">
                          <label>Nama Perusahaan</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="PT Apa Aja Boleh"
                            v-model="item.id_company_exp" :id_company_exp="item.id_company_exp"
                          />
                        </div>
                      </b-col>
                      <b-col lg="6">
                        <div class="form-group">
                          <label class="text-left">Bulan/Tahun</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Januari 2088"
                            v-model="item.time_exp" :time_exp="item.time_exp"
                          />
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="12">
                    <div class="form-group">
                      <label>Deskripsi singkat</label>
                      <textarea
                        class="form-control"
                        rows="5"
                        placeholder="Deskripsi Pekerjaan anda"
                        v-model="item.description_exp" :description_exp="item.description_exp"
                      ></textarea>
                    </div>
                    <!-- </form> -->
                  </b-col>
                </div>
                <!-- end pembungkus experience  -->
                  <b-col lg="12" class="my-3">
                    <button v-b-toggle.collapse-1 class="btn btn-experience">
                      Tambah Pengalaman
                    </button>
                    <div>
                      <b-collapse id="collapse-1" class="mt-2">
                        <b-card>
                          <b-col lg="12" class="experience my-4">
                            <b-row class="">
                              <b-col lg="12">
                                <h1
                                  class="px-2 py-3"
                                  style="
                                    border-bottom: 1px solid #c4c4c4;
                                    font-size: 25px;
                                  "
                                >
                                  Pengalaman Kerja
                                </h1>
                              </b-col>
                              <div class="line py-2"></div>
                              <b-col lg="12">
                                <form>
                                  <div class="form-group">
                                    <label>Posisi</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Fullstack Developer"
                                      v-model="experience.positionExperience"
                                    />
                                  </div>
                                </form>
                              </b-col>
                              <b-col lg="12">
                                <b-row>
                                  <b-col lg="6" class="text-left">
                                    <div class="form-group">
                                      <label>Nama Perusahaan</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="PT Apa Aja Boleh"
                                        v-model="experience.companyExperience"
                                      />
                                    </div>
                                  </b-col>
                                  <b-col lg="6">
                                    <div class="form-group">
                                      <label class="text-left"
                                        >Bulan/Tahun</label
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Januari 2088"
                                        v-model="experience.yearsExperience"
                                      />
                                    </div>
                                  </b-col>
                                </b-row>
                              </b-col>
                              <b-col lg="12">
                                <div class="form-group">
                                  <label>Deskripsi singkat</label>
                                  <textarea
                                    class="form-control"
                                    rows="5"
                                    placeholder="Deskripsi Pekerjaan anda"
                                    v-model="experience.descriptionExperience"
                                  ></textarea>
                                </div>
                              </b-col>
                              <b-col lg="12" class="my-3">
                                <button
                                  @click="addExperience"
                                  class="btn btn-experience"
                                >
                                  Simpan Pengalaman
                                </button>
                                <div>
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-card>
                      </b-collapse>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <!-- end experience -->

              <!-- start portofolio -->
              <b-col lg="12" class="portofolio my-4">
                <b-row class="">
                  <b-col lg="12">
                    <h1
                      class="px-2 py-3"
                      style="border-bottom: 1px solid #c4c4c4; font-size: 25px"
                    >
                      Portofolio
                    </h1>
                  </b-col>
                  <div class="line py-2"></div>
                  <b-col lg="12">
                    <form @submit.prevent="uploadPortfolio">
                      <div class="form-group">
                        <label>Nama Aplikasi</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukkan nama aplikasi"
                          v-model="portfolio.namePortfolio"
                        />
                      </div>
                      <div class="form-group">
                        <label>Link Repository</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Masukkan link repository"
                          v-model="portfolio.linkRepository"
                        />
                      </div>
                      <div class="form-group">
                        <label>Type Portfolio</label>
                        <b-row>
                          <b-col lg="6" sm="6" cols="6" class="radio">
                            <div class="radio-box text-left py-2">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  value="option1"
                                  @click="typePortfolio('Aplikasi Web')"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios1"
                                >
                                  Aplikasi Web
                                </label>
                              </div>
                            </div>
                          </b-col>
                          <b-col lg="6" sm="6" cols="6" class="radio">
                            <div class="radio-box text-left py-2">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="option1"
                                  @click="typePortfolio('Aplikasi Mobile')"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  Aplikasi Mobile
                                </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <vue-dropzone
                        ref="myVueDropzone"
                        id="dropzone customdropzone"
                        :options="dropzoneOptions"
                        :useCustomSlot="true"
                      >
                        <img
                          src="../assets/img/dragndrop.png"
                          style="width: 100%"
                          alt="dragndrop"
                        />
                      </vue-dropzone>
                      <b-col lg="12" class="my-3 p-0">
                        <button class="btn btn-experience" type="submit">
                          Tambah Portfolio
                        </button>
                      </b-col>
                    </form>
                  </b-col>
                </b-row>
              </b-col>
              <!-- end portofolio -->
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <!-- end form pencari kerja -->
    </div>

    <div v-else>
        <b-col lg="12" class="pt-5 ">
          <b-row >
            <b-col lg="4" cols="12" >
              <UserCard />
              <b-row class="text-left">
                <b-col lg="12" class="my-3">
                  <button
                    class="btn btn-save-recrut"
                    type="profilerecrut"
                    @click="saveDataRecruter()"
                  >
                    Simpan
                  </button>
                </b-col>
                <b-col lg="12" class="">
                  <button class="btn btn-cancel-recrut">Batal</button>
                </b-col>
              </b-row>
            </b-col>
            <b-col lg="8" cols="12" class="profile-company ">
              <b-row>
                <b-col lg="12">
                  <h1
                    class="px-2 py-3"
                    style="border-bottom: 1px solid #c4c4c4; font-size: 25px"
                  >
                    Data Diri
                  </h1>
                </b-col>
                <div class="line py-2"></div>
                <b-col lg="12">
                  <form>
                    <div class="form-group">
                      <label>Nama Perusahaan</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan nama Perusahaan"
                        v-model="company.nameCompanyRecruter"
                      />
                    </div>
                    <div class="form-group">
                      <label>Bidang</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan bidang perusahaan ex : Financial"
                        v-model="company.typeCompanyRecruter"
                      />
                    </div>
                    <div class="form-group">
                      <label>Kota</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan Kota"
                        v-model="company.cityCompanyRecruter"
                      />
                    </div>
                    <div class="form-group">
                      <label>Deskripsi singkat</label>
                      <textarea
                        class="form-control"
                        rows="5"
                        placeholder="Tuliskan deskripsi singkat"
                        v-model="company.recruterDescription"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan Email"
                        v-model="company.emailRecruterCompany"
                      />
                    </div>
                    <div class="form-group">
                      <label>Instagram</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan Nama Instagram"
                        v-model="company.instagramRecruterCompany"
                      />
                    </div>
                    <div class="form-group">
                      <label>Nomor Telepon</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan Nomor Telepon"
                        v-model="company.phoneRecruterCompany"
                      />
                    </div>
                    <div class="form-group">
                      <label>Linkedin</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Masukan Nama Linkedin"
                        v-model="company.linkedinRecruterCompany"
                      />
                    </div>
                  </form>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import UserCard from '../components/UserCard'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  props: ['type'],
  data () {
    return {
      usersData: JSON.parse(localStorage.getItem('datauser')),
      image: null,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        addRemoveLinks: true
      },
      userSkill: null,
      users: {
        fullnameApplicant: null,
        jobdescApplicant: null,
        placeWorkApplicant: null,
        domApplicant: null,
        bioApplicant: null,
        dataSkill: []
      },
      oldexperience: [
        {
          positionExperience: null,
          companyExperience: null,
          yearsExperience: null,
          descriptionExperience: null
        }
      ],
      experience: [
        {
          positionExperience: null,
          companyExperience: null,
          yearsExperience: null,
          descriptionExperience: null
        }
      ],
      portfolio: {
        imagePortfolio: null,
        namePortfolio: null,
        linkRepository: null,
        portfolioType: null
      },
      // company
      company: {
        nameCompanyRecruter: null,
        typeCompanyRecruter: null,
        cityCompanyRecruter: null,
        recruterDescription: null,
        emailRecruterCompany: null,
        instagramRecruterCompany: null,
        phoneRecruterCompany: null,
        linkedinRecruterCompany: null
      }
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
    UserCard
  },
  methods: {
    uploadPortfolio () {
      const dataImage = this.$refs.myVueDropzone.getAcceptedFiles()
      this.portfolio.imagePortfolio = dataImage[0]
      this.portfolio.id = this.usersData.id
      if (this.portfolio.imagePortfolio === null) {
        this.$swal('Please insert Portfolio')
      } else {
        this.insertPortfolio(this.portfolio).then((response) => {
          if (response === 'insert portfolio success') {
            this.$swal('insert portfolio success')
            this.portfolio.imagePortfolio = null
            this.portfolio.namePortfolio = null
            this.portfolio.linkRepository = null
            this.portfolio.portfolioType = null
          } else {
            this.$swal(response)
          }
        })
      }
    },
    addSkill () {
      this.users.dataSkill.push(this.userSkill)
      this.userSkill = null
    },
    addExperience () {
      this.experience.id = this.usersData.id
      this.insertExperience(this.experience)
      this.getExperience(this.experience.id)
    },
    typePortfolio (value) {
      this.portfolioType = value
    },
    saveDataTalent () {
      this.users.id = this.usersData.id
      //   console.log(this.users)
      this.updateUser(this.users).then((response) => {
        if (response === 'Update success') {
          this.$swal('Update data success')
          this.dataUser(this.usersData.id).then((result) => {
            const data1 = result
            const skill1 = `${data1.skill}`
            const skill2 = skill1.split(',')
            data1.skill = skill2
            this.users.fullnameApplicant = data1.name_user
            this.users.jobdescApplicant = data1.job_desk
            this.users.placeWorkApplicant = data1.workplace
            this.users.domApplicant = data1.address
            this.users.bioApplicant = data1.description
            this.users.dataSkill = data1.skill
          })
        } else {
          this.$swal(response)
        }
      })
    },
    saveDataRecruter () {
      console.log(this.company)
    },
    ...mapActions({
      dataUser: 'auth/getOneUser',
      updateUser: 'auth/updateProfileTalent',
      insertPortfolio: 'auth/addPortfolio',
      getExperience: 'auth/getExperience',
      insertExperience: 'auth/insertExperience'
    })
  },
  computed: {
    ...mapGetters({
      getDataUser: 'auth/getDetailUser',
      dataExperience: 'auth/getExperience'
    })
  },
  mounted () {
    this.dataUser(this.usersData.id).then((result) => {
      const data1 = result
      const skill1 = `${data1.skill}`
      const skill2 = skill1.split(',')
      data1.skill = skill2
      this.users.fullnameApplicant = data1.name_user
      this.users.jobdescApplicant = data1.job_desk
      this.users.placeWorkApplicant = data1.workplace
      this.users.domApplicant = data1.address
      this.users.bioApplicant = data1.description
      this.users.dataSkill = data1.skill
    })
    this.getExperience(this.usersData.id)
  }
}
</script>
<style scoped>
.profile-bg {
  background-color: #5E50A1;
  border-radius: 8px 8px 0 0;
  padding-left: 50px;
  padding-top: 30px;
}
.container-fluid{
  background: #f6f7f8;
}
.profile-user {
  background: #ffffff;
  border-radius: 8px;
}
.skill-search {
  background: #ffffff;
  border-radius: 8px;
}
.experience {
  background: #ffffff;
  border-radius: 8px;
}
.btn-save {
  width: 80%;
  color: white;
  background: #5e50a1;
  border-radius: 4px;
}
.btn-save:hover {
  color: #5e50a1;
  background: white;
  border-radius: 4px;
  border: 1px solid #5e50a1;
}
.btn-save-recrut {
  width: 80%;
  color: white;
  background: #5e50a1;
  border-radius: 4px;
}
.btn-save-recrut:hover {
  color: #5e50a1;
  background: white;
  border-radius: 4px;
  border: 1px solid #5e50a1;
}
.btn-cancel {
  width: 80%;
  border: 1px solid #5e50a1;
  box-sizing: border-box;
  border-radius: 4px;
}
.btn-cancel:hover {
  color: white;
  background: #5e50a1;
  border-radius: 4px;
  border: 1px solid #5e50a1;
}
.btn-cancel-recrut {
  width: 80%;
  border: 1px solid #5e50a1;
  box-sizing: border-box;
  border-radius: 4px;
}
.btn-cancel-recrut:hover {
  color: white;
  background: #5e50a1;
  border-radius: 4px;
  border: 1px solid #5e50a1;
}
.input-search .form-control {
  height: 55px;
}
.search-btn {
  background: #fbb017;
  border-radius: 4px;
  color: white;
  border: 2px solid #fbb017;
}
.search-btn:hover {
  background: white;
  border-radius: 4px;
  color: #fbb017;
  border: 2px solid #fbb017;
}
.line {
  border-bottom: 1px solid #c4c4c4;
}
.form-group label {
  color: #9ea0a5;
  font-size: 13px;
}
.form-control {
  background: #ffffff;
  border: 1px solid #e2e5ed;
  box-sizing: border-box;
  border-radius: 4px;
}

/* experience */
.btn-experience {
  height: 60px;
  width: 100%;
  border: 2px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fbb017;
}
.btn-experience:hover {
  height: 60px;
  width: 100%;
  border: 2px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fbb017;
  color: white;
}

/* portofolio */
.portofolio {
  background: #ffffff;
  border-radius: 8px;
}
.radio-box {
  height: 40px;
  background: #ffffff;
  border: 1px solid #e2e5ed;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
}
.radio:hover {
  cursor: pointer;
}

/* company */
.profile-company {
  background: #ffffff;
  border-radius: 8px;
}
@media only screen and (max-width: 400px) {
  .radio-box {
    padding: 1px;
  }
  .profile-company {
    background: #ffffff;
    border-radius: 8px;
    margin-top: 60px;
  }
  .btn-save-recrut {
  width: 100%;
}
.btn-cancel-recrut {
  width: 100%;
}
.btn-cancel {
  width: 100%;
}
.btn-save {
  width: 100%;
}
}

/* skill-list */
.skill-list {
  padding: 5px 12px;
  background-color: #fbb017;
  color: white;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 0;
}
.skill-list-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 120px));
  justify-content: start;
  gap: 15px;
}

/* dropzone */
</style>
