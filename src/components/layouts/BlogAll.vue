<template>
  <div>
    <header-app></header-app>
    <banner-app title="Blog"></banner-app>
    <blog-app :posts="posts"></blog-app>
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
import BlogApp from "../Blog.vue";

import axios from "../../config/axios.js";

import ApiBlog from "../../utils/api.blog";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: true,
      fullPage: false,
      posts: ""
    };
  },
  components: { BannerApp, HeaderApp, FooterApp, Loading, BlogApp },
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
    async getPost() {
      try {
        // let posts = await axios.post("post/all", {public: true});
        // this.posts = posts.data.posts;
        this.posts = ApiBlog;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
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
      // this.doAjax();
    });
  },
  created() {
    this.getPost();
    this.closeMenuMobile();
  }
};
</script>
