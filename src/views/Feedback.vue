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
          <h1 class="text-center pt-5 pb-4" style="color: #127834;">Feedback</h1>
          <h6 class="text-center pb-4">Reservas anteriores<br></h6>
        </div>
  
    
        <div class="col-md-2" style=""></div>

      </div>

    </div>

<div class="container">
            <div class="row blog">
                <div class="col-md-12">
                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators" style="padding-bottom: -50px">
                            <li style="background-color: #127834;" data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                            <li style="background-color: #127834;" data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>

                        <!-- Carousel items -->
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-3">
                                      <!-- onClick() here -->
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Almoço</h4>
                                                <p class="text-center">terça-feira, 2 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Jantar</h4>
                                                <p class="text-center">quarta-feira, 3 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Almoço</h4>
                                                <p class="text-center">segunda-feira, 8 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Almoço</h4>
                                                <p class="text-center">sexta-feira, 17 nov.</p>
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
                                                <h4 class="text-center">Jantar</h4>
                                                <p class="text-center">quarta-feira, 3 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Jantar</h4>
                                                <p class="text-center">quarta-feira, 3 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Jantar</h4>
                                                <p class="text-center">quarta-feira, 3 nov.</p>
                                              </div>
                                            </div> 
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="card">
                                              <div class="card-body" style="max-width:100%;" >
                                                <h4 class="text-center">Jantar</h4>
                                                <p class="text-center">quarta-feira, 3 nov.</p>
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


<section id="formMultibanco" class="outer-wrapper text-center">

  <div class="inner-wrapper">
<div class="container">
  <div class="row" style="margin-top: 32px">
    <div class="col-sm-4"></div>
    <div class="col-sm-4 col-sm-offset-8">
      <form role="form">
  <div class="form-group">
    <p for="exampleInputCard">Como estava a comida?</p>
    <button class="btn btn-outline-success rating ratingFood">1</button><button class="btn btn-outline-success rating">2</button><button class="btn btn-outline-success rating">3</button><button class="btn btn-outline-success rating">4</button><button class="btn btn-outline-success rating">5</button>
  </div>
  <div class="form-group">
    <p>Como foi o serviço?</p>
    <button class="btn btn-outline-success rating ratingService">1</button><button class="btn btn-outline-success rating">2</button><button class="btn btn-outline-success rating">3</button><button class="btn btn-outline-success rating">4</button><button class="btn btn-outline-success rating">5</button>
  </div>
   <div class="form-group pb-4">
    <p>Como estava o ambiente?</p>
    <button class="btn btn-outline-success rating ratingEnvironment">1</button><button class="btn btn-outline-success rating">2</button><button class="btn btn-outline-success rating">3</button><button class="btn btn-outline-success rating">4</button><button class="btn btn-outline-success rating">5</button>
    <!-- as classes ratingFood, ratingService e ratingEnvironment são para criar um JS para que os botões permaneçam "clicados" -->

  </div>
  <button type="submit" class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834">Enviar feedback</button>
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
.rating{
  border-radius: 8px;
  background-color: #127834; /* Green */
  border: none;
  color: white;
  padding: 6px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
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
