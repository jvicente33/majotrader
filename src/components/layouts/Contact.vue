<template>
    <div>
        <header-app></header-app>
        <banner-app></banner-app>
        <contact-app></contact-app>
        <footer-app></footer-app>
    </div>
</template>

<script>

import BannerApp from '../BannerTwo'
import ContactApp from '../ContactPage'
import HeaderApp from "../Header.vue";
import FooterApp from "../Footer.vue";

export default {
    data(){
        return{}
    },
    components: {BannerApp, ContactApp, HeaderApp, FooterApp}
}
</script>
