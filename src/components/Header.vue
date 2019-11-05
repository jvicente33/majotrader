<template>
  <header id="header">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
            <ul>
              <li>
                <a href="https://www.facebook.com/tradersplanet" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/majotplanet" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/majotplanet" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=17863266711" target="_blank">
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
            <a @click="toGo('/contact')">info@tradersplanet.us</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="https://tradersplanet.us/">
            <img src="img/logo.png" id="logo">
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active">
              <a @click="toGo('/')" id="home" style="cursor: pointer">Inicio</a>
            </li>
            <li>
              <a @click="toGo('/about')" id="about" style="cursor: pointer">Acerca de</a>
            </li>
            <li>
              <a @click="toGo('/education')" id="education" style="cursor: pointer">Capacitación</a>
            </li>
            <li>
              <a @click="toGo('/services')" id="services" style="cursor: pointer">Servicios</a>
            </li>
            <li>
              <a @click="toGo('/blog')" id="blog" style="cursor: pointer">Blog</a>
            </li>
            <li>
              <a @click="toGo('/contact')" id="contact" style="cursor: pointer">Contacto</a>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </div>
  </header>
</template>

<script>
import JQuery from "jquery";
const $ = JQuery;

export default {
  data() {
    return {};
  },
  created() {
    $(document).on("click", "#home", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/");
    });
    $(document).on("click", "#about", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/about");
    });
    $(document).on("click", "#education", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/education");
    });
    $(document).on("click", "#services", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/services");
    });
    $(document).on("click", "#blog", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/blog");
    });
    $(document).on("click", "#contact", { vue: this }, function(e) {
      window.scroll({ top: 0, left: 0 });
      e.data.vue.toGo("/contact");
    });
  },
  methods: {
    toGo(ruta) {
      window.scroll({ top: 0, left: 0 });
      this.$router.push({ path: ruta });
    }
  }
};
</script>



<style scoped>
#logo {
  width: 3.5rem;
}
</style>
