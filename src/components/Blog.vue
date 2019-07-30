<template>
  <section class="blog-posts-area section-gap" v-if="!isLoading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 post-list blog-post-list">
          <div class="single-post" v-for="(post, index) in posts" :key="index">
            <img class="img-fluid ext" :src="'img/blog/'+post.background" alt />
            <ul class="tags">
              <li v-for="(tag, i) in post.tags" :key="i">
                <a style="color: blue;">#{{tag}} &nbsp; &nbsp;</a>
              </li>
            </ul>
            <a @click="goSinglePost(post._id)" style="cursor: pointer">
              <h1 class="min-text">{{post.title}}</h1>
            </a>
            <p align="justify">{{post.contentText.substring(0,300)}}...</p>
            <hr />
          </div>
        </div>
        <div class="col-lg-4 sidebar">
          <div class="single-widget search-widget">
            <form class="example" style="margin:auto;max-width:300px">
              <input type="text" placeholder="Buscar publicaciones" name="search2" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div class="single-widget protfolio-widget">
            <a @click="goAbout" style="cursor: pointer;">
              <img id="img-majo" src="img/majo.png" alt />
              <a>
                <h4>Maria Manrique</h4>
              </a>
            </a>
            <p
              align="justify"
            >Hola, mi nombre es Maria Jose. Estaré aquí para apoyarte en lo que necesites, si te gusta la adrenalina, este trabajo es para ti.</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/tradersplanet" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/majotplanet" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/majotplanet" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- <div class="single-widget recent-posts-widget">
            <h4 class="title">Recent Posts</h4>
            <div class="blog-list">
              <div class="single-recent-post d-flex flex-row">
                <div class="recent-thumb">
                  <img class="img-fluid" src="img/blog/r1.jpg" alt>
                </div>
                <div class="recent-details">
                  <a href="blog-single.html">
                    <h4>
                      Home Audio Recording
                      For Everyone
                    </h4>
                  </a>
                  <p>02 hours ago</p>
                </div>
              </div>
              <div class="single-recent-post d-flex flex-row">
                <div class="recent-thumb">
                  <img class="img-fluid" src="img/blog/r2.jpg" alt>
                </div>
                <div class="recent-details">
                  <a href="blog-single.html">
                    <h4>
                      Home Audio Recording
                      For Everyone
                    </h4>
                  </a>
                  <p>02 hours ago</p>
                </div>
              </div>
              <div class="single-recent-post d-flex flex-row">
                <div class="recent-thumb">
                  <img class="img-fluid" src="img/blog/r3.jpg" alt>
                </div>
                <div class="recent-details">
                  <a href="blog-single.html">
                    <h4>
                      Home Audio Recording
                      For Everyone
                    </h4>
                  </a>
                  <p>02 hours ago</p>
                </div>
              </div>
              <div class="single-recent-post d-flex flex-row">
                <div class="recent-thumb">
                  <img class="img-fluid" src="img/blog/r4.jpg" alt>
                </div>
                <div class="recent-details">
                  <a href="blog-single.html">
                    <h4>
                      Home Audio Recording
                      For Everyone
                    </h4>
                  </a>
                  <p>02 hours ago</p>
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["posts"],
  methods: {
    goSinglePost(id) {
      this.$router.push({ path: `/single-blog/${id}` });
    },
    goAbout(){
      this.$router.push({ path: `/about` });
    }
  }
};
</script>


<style scoped>
#img-majo {
  width: 120px;
}
.ext {
  width: 100%;
  /* height: 350px; */
}
hr {
  background: rgb(177, 177, 177);
}

@media screen and (max-width: 330px) {
  .min-text {
    font-size: 1.8em;
  }
}
</style>

