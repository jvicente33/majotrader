<template>
  <section class="blog-posts-area section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 post-list blog-post-list">
          <div class="single-post">
            <img class="img-fluid ext" :src="'img/blog/'+post.background" alt />
            <ul class="tags">
              <li v-for="(tag, i) in post.tags" :key="i">
                <a style="color: blue;">#{{tag}} &nbsp; &nbsp;</a>
              </li>
            </ul>
            <a>
              <h1>{{post.title}}</h1>
            </a>
            <div class="content-wrap">
              <div v-html="post.contentHtml"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 sidebar">
          <div class="single-widget protfolio-widget">
            <img id="img-majo" src="img/majo.png" alt />
            <a>
              <h4>Econ. Maria Manrique</h4>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
#img-majo {
  width: 120px;
}

.ext {
  width: 100%;
  height: 350px;
}
</style>