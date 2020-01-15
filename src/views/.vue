<template>
  <div class="main page-holder bg-cover">
    <navBar></navBar>
    <div class="container">
      <div class="row">deded</div>
      <div class="row">sarara</div>
      <div class="row">
        <router-link to="/">Home |</router-link>
        <router-link to="/about">About |</router-link>
        <router-link to="/main">Main (testes)</router-link>
      </div>

    <div id="logoText" class="row">  
      <div class="col-sm-2 sidenav">
      
    </div>
    <div class="col-sm-8 text-center"> 
      <img id="mainLogo" src="../assets/logo2.png" alt="Logótipo Temporário" style="transform: scale(0.55); top:2px;">
      <div id="mainText">
      <h1 style="color: #127834; font-family:Goergia;">Restaurante Aplicação</h1>
      <hr>
      <h5 style="color: #1FBA53;">ESHT</h5>
      <h5 style="color: #1FBA53;">Gestão e Administração Hoteleira</h5>
      </div>
      <div id="buttonScene">
      <a href="#options"><button class="btn btn btn-primary my-2 my-sm-0 buttonScene" style="background-color: #127834; border-color: #127834">O que é o <br> Restaurante de Aplicação?</button></a>
    </div>
    </div>
     
  </div>
  <div id="options"  class="row mw-10">
      <div class="col-sm-3" style="height:100px;"> <a href="#"> <img id="ementaSemanal" class="menuIcons" style="bottom: 120px" src="../assets/ementaSemanal1.png" alt=""></a> </div>
      <div class="col-sm-3" style="height:100px;"> <a href="#"> <img id="reservarRefeicao" class="menuIcons" style="bottom: 125px" src="../assets/reservarRefeicao1.png" alt=""></a> </div>
      <div class="col-sm-3" style="height:100px;"> <a href="#"> <img id="instalacoes" class="menuIcons" style="bottom: 62px; left: -116px;" src="../assets/instalacoes.png" alt=""></a> </div>
      <div class="col-sm-3" style="height:100px;"> <a href="#"> <img id="feedback" class="menuIcons" style="bottom: 70px; left:-81px;" src="../assets/feedback1.png" alt=""></a> </div>
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
  </div>
</template>


<style>

.main {
  background-image: url("../assets/bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#logoText {
  position: relative;
  bottom: 10px;
}

#mainText {
  position: relative;
  bottom: 45px;
}

.menuIcons{
  transform: scale(0.2);
  position: fixed;
  right: 75px;
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
import bgImage from "@/assets/bg.png";

export default {
  name: "main",
  components: {
    navBar
  },
  data() {
    return {
      bgImage: bgImage
    };
  }
};
</script>
