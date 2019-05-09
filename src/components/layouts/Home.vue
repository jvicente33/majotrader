<template>
  <div id="container">
    <!-- Header -->
    <header-app></header-app>

    <!-- Start banner Area -->
    <banner-one-app></banner-one-app>

    <!-- Tips -->
    <!-- Start About -->
    <tips-app></tips-app>

    <!-- Start About -->
    <!--<about-app></about-app>-->

    <!-- Start Projects Completed -->
    <!-- <projects-completed-app></projects-completed-app> -->

    <!-- Start Testimonies -->
    <testimonies-app></testimonies-app>

    <!-- Start service Area -->
    <!-- <services-app></services-app> -->
    <education-app :title="'Educación'" :showTitle="true" :showSubtitle="false" :limit="2"></education-app>

    <!-- Start Projects Finish -->
    <!--<projects-finish-app></projects-finish-app>-->

    <!-- Start Post -->
    <!--<post-app></post-app>-->

    <!-- Footer-->
    <footer-app></footer-app>

    <!-- Loader-->
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
import HeaderApp from "../Header.vue";
import FooterApp from "../Footer.vue";
import TipsApp from "../Tips.vue";
import BannerOneApp from "../BannerOne.vue";
import ServicesApp from "../Services.vue";
import PostApp from "../Post.vue";
import AboutApp from "../About.vue";
import ProjectsCompletedApp from "../ProjectsCompleted.vue";
import ProjectsFinishApp from "../ProjectsFinish.vue";
import TestimoniesApp from "../Testimonies.vue";
import EducationApp from "../Education.vue";

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
  components: {
    HeaderApp,
    FooterApp,
    TipsApp,
    BannerOneApp,
    ServicesApp,
    PostApp,
    AboutApp,
    ProjectsCompletedApp,
    ProjectsFinishApp,
    TestimoniesApp,
    Loading,
    EducationApp
  },
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
      this.doAjax()
    });
  }
};
</script>

<style >
</style>
