<template>
  <section class="home-about-area section-gap" id="about">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8 col-md-12 home-about-left">
          <h1>
            Una breve reseña 
            <br>sobre mí y el trading.. 
          </h1>
          <p class="pb-20 textt" align="justify">
            He estado desde el 2015 en el Stock Market y el Mercado de Opciones.
            Aquello que comenzó como un plan alternativo al llegar a Estados Unidos se convirtió en mi pasión
            y en mi trabajo. Durante todo este tiempo me he mantenido capacitando, actualizando y siempre
            estudiando.
            Comencé principalmente con el mercado de acciones, pero luego las opciones conquistaron mi
            corazón y si bien soy una comerciante de swing por naturaleza también realizo transacciones
            diarias, dependiendo de las condiciones del mercado.
            Uno de mis principales objetivos es llevar todos estos conocimientos a la comunidad latina.
            Porque tengo la fiel convicción de que nuestra comunidad debe romper con la mentalidad de
            escases, de vivir de un cheque a cheque y de siempre trabajar para los demás.
          </p>
          <p class="sub"><strong>María José Manrique</strong></p>
        </div>
        <div class="col-lg-4 col-md-12 home-about-right relative">
          <form class="form-wrap" action="#">
            <h4 class="text-white pb-20">Solicitar Presupuesto</h4>
            <div class="form-select" id="service-select">
              <select>
                <option value="1">Selecciona el servicio</option>
                <option value="2">Servicio 1</option>
                <option value="3">Servicio 2</option>
                <option value="4">Servicio 3</option>
                <option value="5">Servicio 4</option>
              </select>
            </div>
            <input type="text" class="form-control" placeholder="Nombre">
            <input type="phone" class="form-control" placeholder="Telefono">
            <input type="email" class="form-control" placeholder="Email">
            <textarea
              name="message"
              id
              cols="30"
              rows="5"
              placeholder="Mensaje"
              class="form-control"
            ></textarea>
            <button class="primary-btn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.textt{
  margin-right: 3em;
}
</style>

