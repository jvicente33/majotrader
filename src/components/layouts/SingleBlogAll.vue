<template>
  <div>
    <header-app></header-app>
    <banner-app :title="posts.title"></banner-app>
    <single-blog-app :post="posts"></single-blog-app>
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
import SingleBlogApp from "../SingleBlog.vue";

import ApiBlog from "../../utils/api.blog";

import axios from "../../config/axios.js";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: true,
      fullPage: false,
      idPost: "",
      posts: ""
    };
  },
  components: { BannerApp, HeaderApp, FooterApp, Loading, SingleBlogApp },
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
    async getPost(id) {
      try {
        // let posts = await axios.get(`/post/${id}`, {});
        // this.posts = posts.data.post;
        this.posts = ApiBlog.find(post => {
          return id == post._id;
        });
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
    window.scroll({ top: 0, left: 0 });
    this.idPost = this.$route.params.idPost;
    this.getPost(this.idPost);
    this.closeMenuMobile();
  }
};
</script>
