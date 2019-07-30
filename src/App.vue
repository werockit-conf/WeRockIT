<template>
  <div id="app" class="bg-wri-blue font-montserrat">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;

@import './assets/css/fonts.css';
@import './assets/css/colors.css';

@tailwind utilities;
</style>
