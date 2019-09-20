<template>
  <section class="feedback-area section-gap-testimonio relative" id="feedback">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 pb-30 header-text text-center">
          <h1 class="mb-10 text-gray">TESTIMONIOS DE CLIENTES</h1>
          <p class="text-gray">Calidad de servicio no es lo que tú das. Es lo que el cliente recibe.</p>
        </div>
      </div>
      <div class="row feedback-contents justify-content-center align-items-center rectangulo">
        <div class="col-lg-8 feedback-right">
          <carousel :autoplay="true" :perPage="1">
            <!-- <div class="active-review-carusel"> -->
            <slide v-for="(item, index) in data" :key="index">
              <div class="single-feedback-carusel">
                <div class="title d-flex flex-row">
                  <h4 class="text-white pb-10">{{item.name}}</h4>
                </div>
                <p class="text-white box-text" align="justify">{{item.content}}</p>
              </div>
            </slide>
            <!-- </div> -->
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../config/axios";
export default {
  data() {
    return {
      data: [],
      data2: [
        {
          name: "Natalie Smart",
          content:
            "Si quieren tener libertad financiera recomiendo el curso de María José me encanto como explica la clase una persona muy humilde explica buenísimo el stock market sabe mucho del tema."
        },
        {
          name: "Yolseg Peña",
          content:
            "Hola, gracias por transmitir esas energías positivas cada mañana y que tanto me han ayudado a crecer en este mundo del trading. Eres lo máximo, y sobre todo tu humildad y sinceridad me han hecho creer en ti cada día más."
        },
        {
          name: "Raquel Garabito",
          content:
            "Maria jose eres la mejor guia o mentor que hemos podido tener, porque siempre estas allí, cualquier duda o pregunta siempre la respondes, incluso hasta tarde noche, gracias."
        },
        {
          name: "Alvaro Vargas",
          content:
            "Mary como estas te escribo para agradecerte por todo y por tu gran conocimiento en este mundo del trading ,entre a tu curso sin saber q era una vela japonesa y hoy en dia por tu forma tan simple y eficaz de explicar de enseñar y sobre todo tu apoyo y pasiencia hoy puedo decir soy un trader aunque apenas estoy en mis pininos estoy aplicando todos los pasos y cada uno de los puntos importantes que aprendi en las clases y hasta ahora eh tenido buenos resultados ,de nuevo muchas gracias me has dado otra manera de crear un ingreso."
        },
        {
          name: "Kevin Sanchez",
          content:
            "Tenía muchas especulaciones y dudas antes de empezar el curso, sobre todo la información que existe en internet. Pensando si esto sería algo que pueda aprender por mi cuenta o es algo de fantasía que te venden un curso para ganar dinero rápido como he visto en otras cuentas de Instagram. Pero cuando llegue al perfil de Majo me precaté que es alguien real y de confianza, apenas le escribí sobré el curso me dio la tranquilidad que es algo profesional. Durante el curso hasta terminarlo solo fue ratificando la buena decisión que fue estudiar con ella. La califico 10/10 porque en todo dio su milla extra, te transmite la pasión que tiene y siempre esta 24/7 para ti en cualquier duda que tengas. Yo la recomiendo y volvería a tener un curso con ella, he quedado más que satisfecho con el dinero invertido y le agradezco por todas sus enseñanzas."
        }
      ]
    };
  },
  created() {
    this.$forceUpdate();
    this.getListTestimonies();
    this.$bus.on("refresh-testimonies", data => {
      if (data) this.getListTestimonies();
    });
  },
  mounted() {
    this.$forceUpdate();
  },
  methods: {
    async getListTestimonies() {
      try {
        let list = await axios.get("/testimony/list");
        this.data = list.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.rectangulo {
  /* background-color: #66a6ff; */
  background: linear-gradient(to right, #48c6ef, #6f86d6);
  opacity: 0.7;
  border-radius: 2em;
  padding-top: 3em;
  padding-bottom: 3em;
  font-size: 1.2em;
}
.text-gray {
  color: #636363;
}
/* .box-text{
  width: 20%;
} */
</style>