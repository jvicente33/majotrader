<template>
  <div id="container">
    <!-- Header -->
    <header-app></header-app>

    <!-- Start banner Area -->
    <banner-one-app></banner-one-app>

    <!-- Tips -->
    <tips-app></tips-app>

    <!-- Start About -->
    <!--<about-app></about-app>-->

    <!-- Start service Area -->
    <services-app></services-app>

    <!-- Start Projects Completed -->
    <projects-completed-app></projects-completed-app>

    <!-- Start Projects Finish -->
    <projects-finish-app></projects-finish-app>

    <!-- Start Testimonies -->
    <testimonies-app></testimonies-app>

    <!-- Start Post -->
    <post-app></post-app>

    <!-- Footer-->
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from "./Header.vue";
import FooterApp from "./Footer.vue";
import TipsApp from "./Tips.vue";
import BannerOneApp from "./BannerOne.vue";
import ServicesApp from "./Services.vue";
import PostApp from "./Post.vue";
import AboutApp from "./About.vue";
import ProjectsCompletedApp from "./ProjectsCompleted.vue";
import ProjectsFinishApp from "./ProjectsFinish.vue";
import TestimoniesApp from "./Testimonies.vue";

export default {
  data() {
    return {};
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
    TestimoniesApp
  }
};
</script>

<style >
</style>
