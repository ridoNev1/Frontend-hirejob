<template>
    <div>
        <Navbar />
<!-- <div class="top-bg fluid"> -->
            <div class="container-fluid">
            <b-col lg="12" class="profile px-5 py-5">
                    <b-row class="">
                    <b-col lg="4" class="pl-5">
                        <UserCard />
                    </b-col>
                    <b-col lg="8" class="pr-5">
                        <b-row>
                            <b-col lg="12">
                        <div class="profile-user">
                        <h1 style="font-size: 25px;" class=" px-5 pt-4 pb-2">Data Diri</h1>
                        <span class="data-diri mb-3">
                            <img src="../assets/img/Line 10.svg" alt="">
                        </span>
                        <div class="px-5">
                            <form>
                            <div class="form-group">
                                <label>Nama Lengkap</label>
                                <input type="text" class="form-control" >
                            </div>
                            <div class="form-group">
                                <label>Jobdesk</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label >Domisili</label>
                                <input type="text" class="form-control" >
                            </div>
                            <div class="form-group">
                                <label >Tempat Kerja</label>
                                <input type="text" class="form-control" >
                            </div>
                            <div class="form-group description">
                                <label >Deskripsi Singkat</label>
                                <input type="text" class="form-control" >
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        </div>
                        </b-col>
                        <!-- skill -->
                        <b-col lg="12" class="my-5 px-4">
                            <b-row class="skill-profile px-5">
                                <h1 style="font-size:25px" class="pt-4">Skill</h1>
                                    <span class="line">
                                <img src="../assets/img/Line 10.svg" alt="">
                            </span>
                                <b-col lg="12">
                                    <div class="input-group my-4">
                                    <input type="text" class="mx-2 form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <!-- <div class="input-group-append"> -->
                                    <button class="btn btn-save" type="button">
                                        Simpan
                                    </button>
                                <!-- </div> -->
                                </div>
                            </b-col>
                            </b-row>
                        </b-col>
                        <!-- pengalaman kerja  -->
                        <b-col lg="12" class="my-5 px-4">
                            <b-row class="experience">
                                <h1 class="px-5 pt-4" style="font-size:25px;">Pengalaman Kerja</h1>
                                <span>
                                    <img src="../assets/img/Line 10.svg" alt="">
                                </span>
                                <b-col lg="12">
                                <div class="px-5 py-2">
                                    <form>
                                        <div class="form-group">
                                            <label>Posisi</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                        <b-row>
                                            <b-col lg="6">
                                                <div class="form-group">
                                                    <label>Nama Perusahaan</label>
                                                    <input type="text" class="text-left form-control" >
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-group">
                                                    <label>Nama Perusahaan</label>
                                                    <input type="text" class="text-right form-control" >
                                                </div>
                                            </b-col>
                                        </b-row>
                                        <div class="form-group description">
                                            <label >Deskripsi Singkat</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                        <div class="button-experience my-5 text-center">
                                            <button class="btn btn-add">
                                                <p class="pt-3">Tambah Pengalaman Kerja</p>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <!-- portfolio -->
                        <b-col lg="12" class="my-5 px-4">
                            <b-row class="portfolio">
                                <h1 class="px-5 pt-4" style="font-size:25px;">Portofolio</h1>
                                <span>
                                    <img src="../assets/img/Line 10.svg" alt="">
                                </span>
                                <b-col lg="12">
                                <div class="px-5 py-2">
                                    <form>
                                        <div class="form-group">
                                            <label>Nama Aplikasi</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                        <div class="form-group">
                                            <label>Link Respository</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                        <b-col lg="12">
                                        <div class="form-group">
                                            <label>Type Portofolio</label>
                                           <b-row>
                                               <b-col lg="6">
                                                <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                                <label class="form-check-label" for="exampleRadios1">
                                                    Aplikasi Android
                                                </label>
                                                </div>
                                                </b-col>
                                                <b-col lg="6">
                                                <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                                <label class="form-check-label" for="exampleRadios1">
                                                    Aplikasi Android
                                                </label>
                                                </div>
                                                </b-col>
                                            </b-row>
                                            <div class="my-4">
                                                <input type="file">
                                            </div>

                                        </div>
                                        </b-col>
                                        <div class="button-experience my-5 text-center">
                                            <button class="btn btn-add">
                                                <p class="pt-3">Tambah Portofolio</p>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
      </div>
</div>

    <!-- </div> -->
</template>
<script>
import UserCard from '../components/UserCard'
import Navbar from '../components/Navbar'
export default {
  components: {
    UserCard,
    Navbar
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
    .profile-user{
        background: #FFFFFF;
border-radius: 8px;
    }
    /* .line{
        border-bottom: 23px solid #C4C4C4;
    } */
    .skill-profile{
        background: #FFFFFF;
border-radius: 8px;
    }
    .experience{
        background: #FFFFFF;
border-radius: 8px;
    }
    .portfolio{
        background: #FFFFFF;
border-radius: 8px;
    }
    .button-experience{
        border: 1px solid #FBB017;
box-sizing: border-box;
border-radius: 4px;
    }
    .btn-save{
        background: #FBB017;
border-radius: 4px;
color: white;
    }
    .btn-save:hover{
        background: white;
        border-radius: 4px;
        color: #FBB017;
    }
    .description input{
        height: 144px;
    }
</style>
