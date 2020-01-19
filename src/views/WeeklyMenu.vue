<template>
<div id="principal">
  <navBar></navBar>

  <div class="container">
      <div class="row">
        <router-link to="/">Home |</router-link>
        <router-link to="/about">About |</router-link>
        <router-link to="/main">Main (testes)</router-link>
      </div>

    <div class="py-4">
    <div class="container"></div>
  </div>
  <div class="py-5" >
    <div class="container">
      <div class="row">
        <div class="col-md-2" style=""></div>
        <div class="col-md-8" style="">
          <h1 class="text-center pt-5 pb-4" style="color: #127834;">Ementa Semanal</h1>
  <ul class="nav nav-pills nav-fill pt-5">
          <li class="nav-item border">
              <a class="nav-link" href="#">Segunda-Feira</a>
          </li>
          <li class="nav-item border">
              <a class="nav-link" href="#">Terça-Feira</a>
          </li>
          <li class="nav-item border">
            <a class="nav-link" href="#">Quarta-Feira</a>
          </li>
          <li class="nav-item border">
            <a class="nav-link" href="#">Quinta-Feira</a>
          </li>
          <li class="nav-item border">
            <a class="nav-link" href="#">Sexta-Feira</a>
          </li>
</ul>
        </div>
  
    
        <div class="col-md-2" style=""></div>

      </div>

    </div>

    <section id="formMultibanco" class="outer-wrapper text-center">


<div class="py-5">
    <div class="container pt-5">
      
        <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill">Entrada</li>
  <li class="list-group-item flex-fill">Sopa</li>
  <li class="list-group-item flex-fill">Prato Principal</li>
  <li class="list-group-item flex-fill">Sobremesa</li>
  
</ul>
 <ul class="list-group list-group-horizontal pt-5">
  <li class="list-group-item flex-fill border-0">Entrada #1</li>
  <li class="list-group-item flex-fill border-0">Sopa #2</li>
  <li class="list-group-item flex-fill border-0">Prato Principal #3</li>
  <li class="list-group-item flex-fill border-0">Sobremesa #4</li>
  
</ul>
      
    </div>
  </div>


</section>
  </div>
  
  <!--<div id="footer" class="container">
  <div class="row">
    <div class="col-sm-4">
      Trabalho realizado por:
    </div>
    <div class="col-sm">
      Diogo Fernandes
    </div>
    <div class="col-sm">
      Sara Rodrigues
    </div>
    <div class="col-sm">
      Tiago Fernandes
    </div>
  </div>
  </div> -->


    </div>




<button type="submit" class="btn btn btn-primary my-2 my-sm-0 btn-lg mt-5" style="background-color: #127834; border-color: #127834">Reservar</button>
</div>
</template>


<style>
.navlink > .active{
  color: white;
}

#principal {
  font-family: 'Poppins', sans-serif;
}

#buttonMultibanco:focus{
border-color: white;
}
#buttonMultibanco:hover{
background-color: #fff !important;
text-decoration: none;
}

.page-holder {
  min-height: 100vh;
}

.bg-cover {
  
  background-size: cover !important;
}

/*#footer{
  height: 50px;
  position: absolute;
  bottom: -25px;
  background-color: #383a38;
  border-radius: 25px;
} */
</style>




<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";

export default {
  name: "main",
  components: {
    navBar
  },
  data() {
    return {
      
    };
  }
};
</script>
