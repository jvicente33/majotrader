<template>
  <div>
    <header-app></header-app>
    <banner-app title="Servicios"></banner-app>
    <services-app></services-app>
    <footer-app></footer-app>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :opacity="1"
      loader="dots"
    ></loading>
  </div>
</template>

<script>
import BannerApp from "../BannerTwo";
import HeaderApp from "../Header.vue";
import FooterApp from "../Footer.vue";
import ServicesApp from "../Services.vue";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  components: { BannerApp, HeaderApp, FooterApp, Loading, ServicesApp },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.doAjax();
    });
  }
};
</script>
