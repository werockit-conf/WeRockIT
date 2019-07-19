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
@tailwind utilities;

@import './assets/css/fonts.css';

.text-wri-black {
  color: #191716;
}

.text-wri-dark-blue {
  color: #1d2152;
}

.text-wri-teal {
  color: #5ecec6;
}

.bg-wri-blue {
  background-color: #05377b;
}

.bg-wri-dark-blue {
  background-color: #1d2152;
}

.bg-wri-teal {
  background-color: #5ecec6;
}
</style>
