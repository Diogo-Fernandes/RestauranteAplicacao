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
          <h1 class="text-center pt-5 pb-4" style="color: #127834;">Reservar Refeição</h1>
          
        </div>
  
    
        <div class="col-md-2" style=""></div>

      </div>

    </div>

<div class="container">
            <div class="row blog">
                <div class="col-md-12">
                  <p for="exampleInputCard">Número de pessoas</p>
                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                        
                        <a class="carousel-control-prev" href="#blogCarousel" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon"  style="background-color:#127834"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#blogCarousel" role="button" data-slide="next">
                          <span class="carousel-control-next-icon border"  style="background-color:#127834"></span>
                          <span class="sr-only">Next</span>
                        </a>

                        <!-- Carousel items -->
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-3">
                                      <!-- onClick() here -->
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">1</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">2</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">3</h4>
                                               
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">4</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                </div>
                                <!--.row-->
                            </div>
                            <!--.item-->

                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">5</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">6</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">7</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">8</h4>
                                                
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                </div>
                                <!--.row-->
                            </div>
                            <!--.item-->

                        </div>
                        <!--.carousel-inner-->
                      
                    </div>
                    <!--.Carousel-->

                </div>
            </div>
</div>


<section id="formMultibanco" class="outer-wrapper text-center pt-4">

  <div class="inner-wrapper">
<div class="container">
  <div class="row" style="margin-top: 32px">
    <div class="col-md-12">
      <form role="form">
  <div class="form-group">
    <div class="container">
  
  <p>Data</p>
  
  <div class="row">
    
      <div class="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="date" class="card-input-element" />

            <div class="panel panel-default card-input border">
              <div class="panel-heading"><b>Hoje</b></div>
              <div class="panel-body">
                15 de Janeiro
              </div>
            </div>

        </label>
        
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="date" class="card-input-element" />

            <div class="panel panel-default card-input border">
              <div class="panel-heading">Amanhã</div>
              <div class="panel-body">
                16 de Janeiro
              </div>
            </div>
        </label>
        
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="date" class="card-input-element" />

            <div class="panel panel-default card-input border">
              <div class="panel-heading">Sexta-Feira</div>
              <div class="panel-body">
                17 de Janeiro
              </div>
            </div>
        </label>
        
      </div>
  </div>
  
</div>
  </div>

  <div class="form-group">
    <div class="container">
  
  <p>Tipo de Serviço</p>
  
  <div class="row">
    
      <div class="col-md-6 col-lg-6 col-sm-6">
        
        <label>
          <input type="radio" name="service" class="card-input-element" />

            <div class="panel panel-default card-input border p-3">
              <div class="panel-body">
                Almoço
              </div>
            </div>

        </label>
        
      </div>
      <div class="col-md-6 col-lg-6 col-sm-6">
        
        <label>
          <input type="radio" name="service" class="card-input-element" />

            <div class="panel panel-default card-input border p-3">
              <div class="panel-body">
                Jantar
              </div>
            </div>
        </label>
      </div>
  </div>
  
</div>
    
  </div>

  <router-link to="/confirmation"> <button type="submit" class="btn btn btn-primary my-2 my-sm-0 p-2" style="background-color: #127834; border-color: #127834;">Continuar</button></router-link>
</form>
    </div>
  </div>
</div>
</div>

</section>
  </div>

    </div>





</div>
</template>


<style>
label {
    width: 100%;
}

.card-input-element {
    display: none;
}

.card-input {
    margin: 10px;
    padding: 00px;
}

.card-input:hover {
    cursor: pointer;
}

.card-input-element:checked + .card-input {
     box-shadow: 0 0 1px 1px #2ecc71;
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

.carousel-indicators li {
    background-color: #127834;
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
