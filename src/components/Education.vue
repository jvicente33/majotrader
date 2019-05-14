<template>
  <section class="service-area section-gap" id="service">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 pb-30 header-text text-center">
          <h1 class="mb-10" v-if="showTitle">{{title}}</h1>
          <p v-if="showSubtitle">{{subtitle}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="single-service">
            <div class="thumb">
              <img src="img/education-opciones-financieras.jpg" alt height="300">
            </div>
            <h4>Curso de Opciones Financieras</h4>
            <p align="justify">
              Esta capacitación esta diseñada para brindarte las habilidades y confianza que necesitas para
              convertirte en un comerciante de las Opciones Financieras. Esta capacitación es desde cero no
              necesitas tener conocimiento previo sobre el mercado bursátil.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="single-service">
            <div class="thumb">
              <img src="img/education-trading-institucional.jpg" alt height="300">
            </div>
            <h4>Curso de Trading Institucional Opciones (Proximamente)</h4>
            <p align="justify">
              En esta capacitación te enseñaremos a seguir la huella institucional. A detectar las mejores
              entradas de las ballenas del mercado y su flujo en tiempo real.
              (Para esta capacitación se necesita tener conocimiento previo de las Opciones Financieras)
            </p>
          </div>
        </div>
        <div class="col-lg-6" v-if="limit > 2">
          <div class="single-service">
            <div class="thumb">
              <img src="img/education-venta-opciones.jpg" alt height="300">
            </div>
            <h4>Curso de Ventas de Opciones (Proximamente)</h4>
            <p align="justify">
              Aprenderás como sacar una mayor rentabilidad de tu capita, gracias a las ventas de opciones, con
              nuestro sistema totalmente detallado.
              (Para esta capacitación se necesita tener conocimiento previo de las Opciones Financieras)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["showTitle", "showSubtitle", "title", "subtitle", "limit"]
};
</script>


