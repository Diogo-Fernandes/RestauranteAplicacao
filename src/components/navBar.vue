<template id="navbarF">
<div>
    <nav class="navbar navbar-expand-md navbar fixed-top border border-success">
      <div id="navBar">
      <router-link to="/"><img id="navbarLogo" src="../assets/navbarLogo2.png" alt=""></router-link>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link style="color: #127834" to="/weeklyMenu">Ementa<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #127834" to="/">Reservar Refeição</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #127834" to="/restaurant">Instalações</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #127834" to="/feedback">Feedback</router-link>
          </li>
        </ul>
          <button class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834">Login</button>
      </div>
    </nav>
  </div>
</template>

<style>
#navBar {
  color: #127834;
  font-family: 'Poppins', sans-serif;
  padding-left: 7%;
}

.navbar {
  min-height: 80px;
  background-color: white;
  font-family: 'Poppins', sans-serif;
}
.navbar-nav > li{
  padding-left:30px;
  padding-right:5px;
  padding-top: 15px;
}



</style>