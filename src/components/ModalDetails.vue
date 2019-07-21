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
        </div>
        <div class="continue">
          <!-- <a href="#">Pagar &rarr;</a> -->
          <a
            style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
            @click="pay"
            target="_blank"
          >Pagar</a>
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
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    pay() {
      var stripe = Stripe("pk_test_QZpi1o3I2mmesolLsarUMTCG00AAaKHoEh");

      stripe
        .redirectToCheckout({
          items: [{ sku: "sku_FTgnE5Cp7TGja5", quantity: 1 }],

          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: window.location.protocol + "//tradersplanet.us/success",
          cancelUrl: window.location.protocol + "//tradersplanet.us/canceled"
        })
        .then(function(result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById("error-message");
            displayError.textContent = result.error.message;
          }
        });
    }
  }
};
</script>


<style scoped>
* {
  transition: all 2.5s;
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

