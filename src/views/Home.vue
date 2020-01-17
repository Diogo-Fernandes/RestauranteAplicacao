<template>
  <div class="home page-holder bg-cover">
    
    <div class="container">
      <div class="row">
        <br><br>
        
      </div>
    <button class="btn btn btn-primary my-2 my-sm-0 float-right" style="background-color: #127834; border-color: #127834">Login</button>
    <div id="logoText" class="row">  
      <div class="col-sm-2 sidenav">
      
    </div>
    <div class="col-sm-8 text-center"> 
      <img id="mainLogo" src="../assets/logo3.png" alt="Logótipo Temporário" style="transform: scale(0.7); top:2px;">
      <div id="mainText">
      <h1 style="color: #127834; font-family:Georgia;">Restaurante Aplicação</h1>
      <hr>
      <h5 style="color: #1FBA53;">ESHT</h5>
      <h5 style="color: #1FBA53;">Gestão e Administração Hoteleira</h5>
      </div>
      <div id="buttonScene">
      <div id="flips">
      <router-link to="/restaurant"><button class="btn btn btn-primary my-2 my-sm-0 buttonFlip buttonFlip--front" style="background-color: #127834; border-color: #127834">O que é o <br> Restaurante de Aplicação?</button></router-link>
      <!-- <p class="buttonFlip buttonFlip--back">Lol Funciona</p> -->
      </div>
    </div>
    </div>
     
  </div>
  <div class="container">
  <div id="options"  class="row mw-10">
      <div class="col-sm-3" style="height:100px;"> <router-link to="/weeklyMenu"> <img id="ementaSemanal" class="menuIcons" style="bottom: 120px" src="../assets/ementaSemanal1.png" alt=""></router-link> </div>
      <div class="col-sm-3" style="height:100px;"> <router-link to="/"> <img id="reservarRefeicao" class="menuIcons" style="bottom: 125px" src="../assets/reservarRefeicao1.png" alt=""></router-link> </div>
      <div class="col-sm-3" style="height:100px;"> <router-link to="/restaurant"> <img id="instalacoes" class="menuIcons" style="bottom: 62px; left: -116px;" src="../assets/instalacoes.png" alt=""></router-link> </div>
      <div class="col-sm-3" style="height:100px;"> <router-link to="/feedback"> <img id="feedback" class="menuIcons" style="bottom: 70px; left:-81px;" src="../assets/feedback1.png" alt=""></router-link> </div>
    </div>
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

.home {
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

#buttonScene{
  perspective: 600px;
}

#flips{
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.buttonFlip{
  backface-visibility: hidden;

}
.buttonFlip--back{
  transform: rotateY( 180deg );
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
import bgImage from "@/assets/bg.png";

export default {
  name: "main",
  components: {
   
  },
  data() {
    return {
      bgImage: bgImage
    };
  }
};
</script>
