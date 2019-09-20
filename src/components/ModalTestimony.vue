<template>
  <modal name="demo-login" transition="pop-out" :width="modalWidth" :height="400">
    <div class="box">
      <div class="box-part" id="bp-left">
        <div class="partition" id="partition-register">
          <div class="partition-title">Agregar Testimonio</div>
          <div class="partition-form">
            <form autocomplete="false">
              <div class="autocomplete-fix">
                <input type="password" />
              </div>

              <input type="text" v-model="testimony.name" placeholder="Escriba su nombre completo" />
              <textarea
                cols="30"
                rows="5"
                v-model="testimony.content"
                placeholder="Escriba su testimonio"
                :maxlength="max"
                :minlength="min"
              ></textarea>
              <div
                class="partition-title-min"
              >{{(testimony.content.length > min) ? (max - testimony.content.length) : (min - testimony.content.length)}} | Max: {{max}}</div>
              <div class="partition-title-min"></div>
              <p style="color: black;"></p>
            </form>

            <div style="margin-top: 10px"></div>

            <button
              class="large-btn facebook-btn"
              @click="saveTestimony()"
              v-if="testimony.content.length > min"
            >
              Enviar
              <span>Testimonio</span>
            </button>
            <div class="partition-title-text">{{message}}</div>
          </div>
        </div>
      </div>
      <div class="box-part" id="bp-right" :style="cssImage">
        <div class="box-messages"></div>
      </div>
    </div>
  </modal>
</template>
<script>
import axios from "../config/axios";

const MODAL_WIDTH = 656;

export default {
  name: "DemoLoginModal",
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      cssImage: `background: url('img/cargar-testimonio.jpg') no-repeat top left;`,
      testimony: {
        name: "",
        content: "",
        active: true
      },
      max: 400,
      min: 150,
      message: ""
    };
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  },
  methods: {
    async saveTestimony() {
      try {
        await axios.post("/testimony/create", this.testimony);
        this.message = "Testimonio enviado con éxito.";
        setInterval(() => {
          this.message = "";
        }, 2000);
        this.$bus.emit("refresh-testimonies", true);
        this.testimony.name = "";
        this.testimony.content = "";
      } catch (error) {
        console.log(error);
        this.message =
          "Hubo un error al enviar tu testimonio, intenta de nuevo.";
        setInterval(() => {
          this.message = "";
        }, 2000);
      }
    }
  }
};
</script>
<style lang="scss" scope>
$background_color: #404142;
$github_color: #dba226;
$facebook_color: #03d88d;

.box {
  background: rgb(255, 255, 255);
  overflow: hidden;
  width: 656px;
  height: 400px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  font-family: "Poppins", sans-serif;
  color: #4f4f4f;
  font-size: 0;

  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 50%;

    &#bp-right {
      border-left: 1px solid #eee;
    }
  }

  .box-messages {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .box-error-message {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    height: 0;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
    font-size: 11px;
    color: white;
    background: #f38181;
  }

  .partition {
    width: 100%;
    height: 100%;

    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 300;
    }
    .partition-title-min {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 10px;
      font-weight: 300;
    }
    .partition-title-text {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 13px;
      font-weight: 300;
    }

    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }

  input[type="password"],
  input[type="text"] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #03d88d;
    padding: 4px 8px;
    font-family: "Poppins", sans-serif;
    transition: 0.5s all;
    outline: none;
  }

  textarea {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #03d88d;
    padding: 4px 8px;
    font-family: "Poppins", sans-serif;
    transition: 0.5s all;
    outline: none;
  }

  button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: #8b8c8d;
    cursor: pointer;
    border: 1px solid #dddedf;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: mix(#dddedf, black, 90%);
      color: mix(#8b8c8d, black, 80%);
    }
  }

  .large-btn {
    width: 100%;
    background: white;

    span {
      font-weight: 600;
    }
    &:hover {
      color: white !important;
    }
  }

  .button-set {
    margin-bottom: 8px;
  }

  #register-btn,
  #signin-btn {
    margin-left: 8px;
  }

  .facebook-btn {
    border-color: $facebook_color;
    color: $facebook_color;
    &:hover {
      border-color: $facebook_color;
      background: $facebook_color;
    }
  }

  .github-btn {
    border-color: $github_color;
    color: $github_color;
    &:hover {
      border-color: $github_color;
      background: $github_color;
    }
  }

  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
