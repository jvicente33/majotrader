<template>
  <footer class="footer-area section-gap">
    <modal
      name="term"
      :adaptive="true"
      :resizable="true"
      :scrollable="true"
      height="80%"
      width="60%"
      :pivot-y="0.5"
    >
      <div class="scroll-modal">
        <p align="justify" id="term">
          <strong>
            <strong>
              <p class="center">TÉRMINOS GENERALES Y CONDICIONES</p>
            </strong>
          </strong>
          Los presentes términos y condiciones son aceptados por el cliente / miembro, al participar de
          cualquier servicio.
          <br />
          <strong>TRADEzRS PLANET LLC</strong> es una empresa educativa que busca mediante la interacción con sus
          clientes / miembros, brindar entrenamiento basado en el uso de análisis técnico de gráficos.
          <br />
          <strong>TRADERS PLANET LLC</strong> no es una empresa de inversiones, no hace captación de dinero del público y
          no hace recomendaciones de inversión.
          Toda la información proporcionada por
          <strong>Majotplanet</strong> y por
          <strong>TRADERS PLANET LLC</strong>,
          es solo para fines de
          entretenimiento y educativos y no debe ser percibida, considerada, asumida o utilizada en
          ninguna forma posible como asesoramiento de inversión.
          <br />
          <br />
          <strong>
            <strong>
              <p class="center">GARANTÍA</p>
            </strong>
          </strong>
          <strong>Majotplanet</strong> y
          <strong>TRADERS PLANET LLC</strong> no serán responsables bajo ninguna circunstancia de cualquier pérdida
          potencial y/o real de capital o daños financieros o de cualquier otra naturaleza.
          El rendimiento pasado no es indicativo de resultados futuros.
          <strong>Majotplanet</strong> y
          <strong>TRADERS PLANET LLC</strong> no
          garantizan ningún resultado o beneficio específico. Debe tener en cuenta el riesgo real de pérdida al
          seguir cualquier opinión, críticas, notas, blogs o contenidos en cualquier otra forma, como imágenes y videos,
          que se discuten en este sitio web y en los otros servicios proporcionados por
          <strong>Majotplanet</strong>.
          <br />
          <br />*** CFTC REGLA 4.41 - RESULTADOS DE RENDIMIENTO hipotéticos o simulados tienen ciertas
          limitaciones. A DIFERENCIA DE UN REGISTRO DE RENDIMIENTO REAL, los resultados simulados no
          representan operaciones reales. TAMBIÉN, PUESTO QUE LAS OPERACIONES NO SE HAN
          EJECUTADO, LOS RESULTADOS PUEDEN ESTAR BAJO-O-SOBRE compensados por el impacto, de
          haberlo, DE CIERTOS FACTORES DEL MERCADO, COMO FALTA DE LIQUIDEZ. PROGRAMAS
          COMERCIALES SIMULADOS EN GENERAL SON TAMBIÉN SUJETO AL HECHO DE QUE ESTÁN
          DISEÑADOS CON EL BENEFICIO DE LA RETROSPECTIVA. NO SE SUGIERE QUE NINGUNA CUENTA DE
          TRADING O INVERSIÓN PUEDA OBTENER BENEFICIOS O PÉRDIDAS SIMILARES A LOS QUE SE
          MUESTRA.
          <br />
          <br />
          <strong>
            <strong>
              <p class="center">TESTIMONIOS</p>
            </strong>
          </strong>
          Los testimonios que aparecen en este sitio son recibidos por correo electronico. Son experiencias individuales
          reflejando la opinión de los que han usado nuestros productos o servicios de una forma u otra. Sin
          embargo, son resultados individuales y los resultados varían. No aseguramos que sean resultados
          generales.
          <br />Los testimonios no necesariamente representan la opinión de todos los que utilizan
          nuestros productos o servicios. Los testimonios que se muestran son literales excepto por
          correcciones gramaticales. Algunos han sido acortados lo que significa que no se ha incluido el
          mensaje recibido completamente cuando parecía que el resto de la información era irrelevante
          para el público en general o contenía información estrictamente personal.
        </p>
      </div>
    </modal>
    <demo-login-modal></demo-login-modal>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <a @click="showModal()" style="cursor: pointer;">
              <div class="d-flex flex-row">
                <div class="icon">
                  <span class="lnr lnr-chevron-right max"></span>
                </div>
                <div class="contact-details">
                  <p class="view">
                    <strong>Visualizar términos y condiciones</strong>
                  </p>
                </div>
              </div>
            </a>

            <a @click="$modal.show('demo-login')" style="cursor: pointer;">
              <div class="d-flex flex-row">
                <div class="icon">
                  <span class="lnr lnr-chevron-right max"></span>
                </div>
                <div class="contact-details">
                  <p class="view">
                    <strong>Agregar testimonio</strong>
                  </p>
                </div>
              </div>
            </a>

            <img src="img/stripe_pagos.png" class="pay" />

            <p class="footer-text">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; 2019 Todos los derechos reservados.
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>Hoja informativa</h6>
            <p>Manténgase actualizado</p>
            <div class id="mc_embed_signup">
              <form class="form-inline">
                <input
                  class="form-control"
                  name="email"
                  placeholder="Ingrese su email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Ingrese su email '"
                  type="email"
                />
                <button class="click-btn btn btn-default">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
          <div class="single-footer-widget">
            <h6>Siguenos</h6>
            <p class="max">Redes sociales</p>
            <div class="footer-social d-flex align-items-center">
              <a href="https://www.facebook.com/tradersplanet" target="_blank">
                <i class="fa fa-facebook max-icon"></i>
              </a>
              <a href="https://twitter.com/majotplanet" target="_blank">
                <i class="fa fa-twitter max-icon"></i>
              </a>
              <a href="https://www.instagram.com/majotplanet/" target="_blank">
                <i class="fa fa-instagram max-icon"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=17863266711" target="_blank">
                <i class="fa fa-whatsapp max-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import DemoLoginModal from "./ModalTestimony";
export default {
  components: { DemoLoginModal },
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.$modal.show("term");
    }
  }
};
</script>

<style scoped>
#term {
  padding: 30px;
}
.center {
  text-align: center;
}

.view {
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}
.max {
  font-size: 1.3em;
}

.pay {
  width: 40%;
}

.max-icon {
  font-size: 2em;
}
</style>
