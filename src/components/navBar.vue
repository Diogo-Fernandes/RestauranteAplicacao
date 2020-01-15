<template id="navbarF">
<div>
    <nav class="navbar navbar-expand-md navbar fixed-top border border-success">
      <div id="navBar">
      <a class="navbar-brand" style="color: #1FBA53; padding-top: 4px; padding-bottom: 8px" href="#"></a><img id="navbarLogo" src="../assets/navbarLogo.png" alt="">
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" style="color: #127834" href="#">Ementa<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #127834" href="#">Reservar Refeição</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #127834" href="#">Instalações</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #127834" href="#">Feedback</a>
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
}



</style>