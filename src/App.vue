<template>
  <div id="app" class="bg-wri-blue font-montserrat">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
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
