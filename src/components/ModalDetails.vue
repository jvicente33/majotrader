<template>
  <div>
    <div class="fm-card">
      <div class="fm-card-header">
        <img :src="'img/' + data.img" alt />
      </div>
      <div class="fm-card-content">
        <div class="title">
          <a>{{data.title}}</a>
        </div>
        <div class="summary">
          <p align="justify">{{data.content}}</p>
          <h5>Precio: ${{data.price/100}}</h5>
          <br />
        </div>
        <div class="continue">
          <div class="col-lg-12">
            <button class="separar genric-btn info circle" @click="contact">Contactar</button>
            <button
              :class="data.temary ? 'separar genric-btn success circle' : 'separar genric-btn dark circle'"
              @click="temary(data.temary)"
            >Temario</button>
            <button class="separar genric-btn primary circle" @click="pay">Pagar</button>
          </div>
        </div>
      </div>
      <div class="fm-card-footer">
        <div class="by">
          <a>
            TradersPlanet
            <span style="color: crimson; font-size: 20px;">&hearts;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../config/axios.js";
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    contact() {
      this.$router.push({ name: "contact" });
    },
    temary(name) {
      if (name) {
        const link = document.createElement("a");
        link.href = "https://tradersplanet.us/view/pdf/" + name; //urlchange
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
      }
    },
    async pay() {
      try {
        let data = await axios.post("/create/session", {
          name: `Compra de Curso`,
          title: this.data.title,
          price: this.data.price,
          img: this.data.img
        });
        let stripe = Stripe("pk_live_f7jgBFPatS0gY6mzCWNAXH1W00irZzbJZO");
        stripe
          .redirectToCheckout({
            sessionId: data.data.session.id
          })
          .then(function(result) {
            if (result.error) {
              var displayError = document.getElementById("error-message");
              displayError.textContent = result.error.message;
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


<style scoped>
* {
  transition: all 0s;
}

.fm-card-header {
  width: 100%;
  height: 40%;
  background-color: royalblue;
  overflow: hidden;
}
.fm-card-header img {
  max-width: 100%;
}
.fm-card-header:hover img {
  transform: scale(1.2);
  opacity: 0.8;
  cursor: pointer;
}
.fm-card-content {
  position: relative;
  max-width: 100%;
  height: 50%;
  padding: 20px;
}
.fm-card-content .title a {
  text-decoration: none;
  color: #232323;
  font-weight: bold;
}
.fm-card-content .title a:hover {
  color: dodgerblue;
}
.fm-card-content .summary p {
  color: #555;
  font-size: 14px;
  overflow-wrap: break-word;
  text-align: left;
  max-width: 100ch;
}
.fm-card-content .continue a {
  text-decoration: none;
  color: dodgerblue;
  font-size: 14px;
}
.fm-card-content .continue a:hover {
  text-decoration: underline;
}
.fm-card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f9f9f9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.fm-card-footer .by {
  padding-left: 20px;
}
.fm-card-footer .by a {
  text-decoration: none;
  color: #777;
  font-size: 14px;
}
.fm-card-footer .by a:hover {
  color: dodgerblue;
}
</style>

