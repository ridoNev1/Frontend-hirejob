<template>
<div>
    <Navbar />
     <b-col lg="12" class="top-jobs px-5 py-1">
                    <h1 class="text-white mx-4 px-5">Top Jobs</h1>
                </b-col>
    <div class="container-fluid">
        <div>
        <b-col lg="12">
            <b-row >
                <b-col lg="12" class="my-5 px-5">
                    <div class="input-group px-5 text-center">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                        <div class="input-group-append" id="button-addon4">
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        </div>
                </b-col>
                <b-col lg="12" class="my-3 mb-4 px-5">
                    <b-row class="px-5">
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                        <b-col lg="4">
                            <CardHome />
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="12" class="text-center px-5">
                    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
                </b-col>
            </b-row>
        </b-col>
        </div>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import CardHome from '../components/CardHome'
export default {
  components: {
    Navbar,
    CardHome
  }
}
</script>
<style scoped>
.top-jobs{
    background: #5E50A1;
}
.container-fluid{
    background: #F6F7F8;
}
.input-group .form-control{
    height: 60px;
    background: #FFFFFF;
box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
border-radius: 8px;
}
.pagination{
    text-align: center;
}
</style>
