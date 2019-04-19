<template>
  <header id="header">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
            <ul>
              <li>
                <a href="https://www.facebook.com/majotraders" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/majotrader" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/majotrader/" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
            <a href="stocktradermj@gmail.com">stocktradermj@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a>
            <img src="img/logo3.png" id="logo">
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active">
              <a @click="toGo('/')" style="cursor: pointer">Inicio</a>
            </li>
            <li>
              <a @click="toGo('/about')" style="cursor: pointer">Sobre mí</a>
            </li>
            <li>
              <a @click="toGo('/education')" style="cursor: pointer">Educación</a>
            </li>
            <li>
              <a @click="toGo('/services')" style="cursor: pointer">Servicios</a>
            </li>
            <li>
              <a @click="toGo('/blog')" style="cursor: pointer">Blog</a>
            </li>
            <li>
              <a @click="toGo('/contact')" style="cursor: pointer">Contacto</a>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods: {
    toGo(ruta){
      
      this.$router.push({path: ruta})
      this.$router.go(0)
      
    }
  }
}
</script>



<style scoped>
#logo{
  width: 70px;
}
</style>
