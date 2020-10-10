<template>
  <div class="footerCom">
    <div class="Peworld">
      <div>
        <img src="../assets/img/logoW.svg" alt="" />
      </div>
      <div class="texFooter">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          error, placeat neque, assumenda recusandae dolores ipsam magnam ipsa
          quam exercitationem qui? Illo molestias id veritatis nostrum esse
          quasi velit et?
        </p>
      </div>
      <hr class="border">
      <b-row style="color: #FFFFFF">
          <b-col lg="9">
              <h5>2020 Pewworld. All right reserved</h5>
          </b-col>
          <b-col lg="3" class="cornerRight">
              <h5>Telepon</h5>
              <h5>Email</h5>
          </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped>
.cornerRight {
    display: flex;
    justify-content: space-between;
}
.border{
    border-color: #ffffff;
}
.texFooter{
    color: #ffffff;
    padding-right: 75%;
    margin-bottom: 30px;
}
.footerCom {
  background: #5e50a1;
  padding: 40px 100px 10px 100px;
}
</style>
