<template>
  <div>
    <header-app></header-app>
    <banner-app title="CONTACTO" type="contact"></banner-app>
    <contact-app></contact-app>
    <footer-app></footer-app>
    <!-- <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :opacity="1"
      loader="dots"
    ></loading>-->
  </div>
</template>

<script>
import BannerApp from "../BannerTwo";
import ContactApp from "../ContactPage";
import HeaderApp from "../Header.vue";
import FooterApp from "../Footer.vue";

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
  components: { BannerApp, ContactApp, HeaderApp, FooterApp, Loading },
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
    },
    closeMenuMobile() {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu");
        $("#mobile-body-overly").fadeOut();
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.doAjax();
    });
  },
  created() {
    this.closeMenuMobile();
  }
};
</script>
