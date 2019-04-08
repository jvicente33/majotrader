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
              <img src="img/trader1.jpg" alt height="300">
            </div>
            <h4>Curso de Acciones</h4>
            <p align="justify">
              Este curso de acciones, es muy completo. Perfecto para los que no tengan ningún conocimiento del Stock Market o aquellos que tengan un conocimiento básico.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="single-service">
            <div class="thumb">
              <img src="img/trader2.jpg" alt height="300">
            </div>
            <h4>Curso de Opciones Financieras</h4>
            <p align="justify">
              El mercado de Opciones es perfecto para aquellos que quieran ampliar y profundizar un poco en el Mercado Bursátil es uno de mis activos favoritos y es con el cual trabajo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['showTitle', 'showSubtitle', 'title', 'subtitle', 'limit']
}
</script>


