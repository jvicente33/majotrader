<template>
  <section class="service-area section-gap" id="service">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 pb-30 header-text text-center">
          <h1 class="mb-10 text-color" v-if="showTitle">{{title}}</h1>
          <h3 class="text-color" v-if="showSubtitle">Te preparamos para invertir en el mejor mercado.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="single-service" @click="toGo('/contact')">
            <div class="thumb">
              <img src="img/tutorias-en-linea.jpg" alt height="300">
            </div>
            <!-- <h4>Tutorias en Linea</h4> -->
            <p class="margin-top" align="justify">
              Este servicio es ideal para aquel trader que ya tenga conocimiento. Evaluaremos tu operativa y
              reforzaremos aquellas zonas donde sientas que tienes debilidad.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="single-service" @click="toGo('/contact')">
            <div class="thumb">
              <img src="img/flujo-de-opciones-en-tiempo-real.jpg" alt height="300">
            </div>
            <!-- <h4>Flujo de Opciones en Tiempo Real (Proximamente)</h4> -->
            <p class="margin-top" align="justify">
              En este servicio te proporcionaremos alertas institucionales y su flujo en tiempo real.
              Además estaremos informándote y haciendo observaciones del mercado, análisis técnicos de
              algunas compañías e ideas sobre potenciales entradas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["showTitle", "title", "showSubtitle"],
  methods: {
    toGo(ruta) {
      window.scroll({ top: 0, left: 0 });
      this.$router.push({ path: ruta });
    }
  }
};
</script>

<style scoped>
.text-color{
  color: #636363;
}
</style>


