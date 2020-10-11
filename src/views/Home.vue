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
                <b-col lg="12" class="my-5">
                    <div class="search">
                        <form class="form">
                            <input type="text" placeholder="Search any skill">
                            <div style="margin-top: -2px;">
                                <b-dropdown  id="dropdown-left" text="Category" variant="transparent" class="m-2">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <button type="submit" class="btn searchButton">Search</button>
                        </form>
                    </div>
                </b-col>
                <b-col lg="12" class="my-3 mb-4">
                    <b-row class="card-body">
                        <b-col lg="3" sm="6" cols="6">
                            <CardHome />
                        </b-col>
                        <b-col lg="3" sm="6" cols="6">
                            <CardHome />
                        </b-col>
                        <b-col lg="3" sm="6" cols="6">
                            <CardHome />
                        </b-col>
                        <b-col lg="3" sm="6" cols="6">
                            <CardHome />
                        </b-col>
                        <b-col lg="3" sm="6" cols="6">
                            <CardHome />
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="12" class="pagination-component">
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

            <Footer />

    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import CardHome from '../components/CardHome'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    CardHome,
    Footer
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
.searchButton{
    background-color: #5E50A1;
    font-weight: bold;
    border: 2px solid #5E50A1;
    color: white;
}
.searchButton:hover{
    background-color: white;
    border: 2px solid #5E50A1;
    color: #5E50A1;
}
.input-group{
    padding: 15px;
}
.search input[type="text"]{
    outline: none;
    border: none;
    border-right: 1px solid #9EA0A5;
    padding: 0 15px;
}
.card-body{
    padding: 0 5px ;
}
.search{
    background-color: white;
    padding: 5px;
    box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
border-radius: 8px;
}
.form{
    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
    grid-template-rows: 50px;
}
.sorting{
    background-color: white !important;
}
.input-group .form-control{
    height: 50px;
    background: #FFFFFF;
box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
border-radius: 8px;
}

/* .dropdown{
     height: 60px;
    background: #FFFFFF;
box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
border-radius: 8px;
} */
.dropdown .btn{
    height: 60px;
}
.pagination{
    text-align: center;
}
.pagination-component{
    padding-left: 40%;
}
@media only screen and (max-width: 600px) {
  .pagination-component {
    padding: 0;
  }
}
</style>
