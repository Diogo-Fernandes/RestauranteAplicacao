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
          <h1 class="text-center pt-5" style="color: #1FBA53;">Carregamento de Carteira</h1>
          <h6 class="text-center">Escola o seu método de pagamento <br></h6>
          <a id="buttonMultibanco" class="btn btn-outline-success text-center" style="padding: 41px 47px;" href="#cardDetails"><img id="iconMultibanco" src="../assets/multibanco.png" alt=""><br>Cartão de Crédito</a>
        </div>
  
    
        <div class="col-md-2" style=""></div>

      </div>

    </div>

    <section id="formMultibanco" class="outer-wrapper text-center">

  <div class="inner-wrapper">
<div class="container">
  <div class="row" style="margin-top: 32px">
    <div class="col-sm-4"></div>
    <div class="col-sm-4 col-sm-offset-8">
      <form role="form">
  <div class="form-group">
    <label for="exampleInputCard">Número de Cartão</label>
    <input type="text" class="form-control text-center" id="exampleInputEmail1" placeholder="Insira o número de cartão">
  </div>
  <div class="form-group">
    <label for="exampleInputCVV">CVV</label>
    <input type="text" class="form-control text-center" id="exampleInputPassword1" placeholder="Insira o CVV">
  </div>
   <div class="form-group">
    <label for="exampleInputAmount">Quantia</label>
    <input type="number" class="form-control text-center" id="exampleInputPassword1" placeholder="5.00€">
    
  </div>
  <button class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834">CONFIRMAR PAGAMENTO</button>
</form>
    </div>
  </div>
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





</div>
</template>


<style>
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
