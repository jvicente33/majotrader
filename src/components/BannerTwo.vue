<template>
    <section :class="`banner-area-${type} relative`">	
        <div class="overlay overlay-bg"></div>
        <div class="container">				
            <div class="row d-flex align-items-center justify-content-center">
                <div class="about-content col-lg-12">
                    <h1 class="text-white text-size">
                        {{title}}				
                    </h1>	
                    <!--<p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="contact.html"> Contact Us</a></p>-->
                </div>	
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'type']
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .text-size {
    font-size: 3em;
  }
}
@media screen and (max-width: 368px) {
  .text-size {
    font-size: 2em;
  }
}
</style>