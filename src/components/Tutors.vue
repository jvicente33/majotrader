<template>
  <section class="cat-area section-gap-tutors" id="feature">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 pb-30 header-text text-center">
          <h1 class="mb-10 text-gray">TUTORES</h1>
          <!-- <p class="text-gray">Calidad de servicio no es lo que tú das. Es lo que el cliente recibe.</p> -->
        </div>
      </div>
      <demo-tutor-modal></demo-tutor-modal>
      <div class="row">
        <div class="col-lg-12">
          <div class="single-cat d-flex flex-column">
            <!-- <a class="hb-sm-margin mx-auto d-block"> -->
            <a class="center">
              <img
                src="img/tutors/foto_mari_cort_verde.png"
                class="img-tip tutor-profile"
                style="cursor: pointer;"
                @click="$modal.show('demo-tutor')"
              />
              <img src="img/tutors/foto_mari_cort_blanco.png" class="img-tip tutor-profile" />
            </a>
            <!-- <h4 class="mt-40 mb-20 text-gray">Conviértete en un Trader</h4>
            <p align="justify">
              Nuestras capacitaciones están diseñadas para brindarte las habilidades y confianza que necesitas
              para convertirte en un comerciante del mercado de opciones financieras.
            </p>-->
          </div>
        </div>
        <!-- <div class="col-lg-4">
          <div class="single-cat">
            <a class>
              <img src="img/tutors/foto_mari_cort_blanco.png" class="img-tip tutor-profile" />
            </a>
          </div>
        </div>-->
      </div>
    </div>
    
  </section>
</template>

<script>
import DemoTutorModal from "./ModalTutors";
export default {
  components: { DemoTutorModal },
  methods: {
    proa() {
      console.log("Elaa");
    }
  }
};
</script>

<style scoped>
.img-tip {
  width: 13%;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 0px solid #000000;
  margin: 0 3em;
}
.text-gray {
  color: #636363;
}

@keyframes animar {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1.3);
  }
}

.tutor-profile {
  animation-duration: 5s;
  animation-name: animar;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
