<template>
  <div id="app" class="bg-wri-blue font-montserrat">
    <NavBar></NavBar>
    <Banner>
      <div class="font-medium text-lg inline">
        As event organizers, we have come to the decision to reschedule WeRockIT Conf 2020 due to concerns about the
        spread of COVID-19 and its impact on domestic and international travel.
        <a href="foo" class="text-blue-600">Learn more</a>
      </div>
    </Banner>
    <router-view />
    <GenerateLetterFooter></GenerateLetterFooter>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import GenerateLetterFooter from '@/components/GenerateLetterFooter.vue'

export default {
  components: {
    NavBar,
    Banner,
    Footer,
    GenerateLetterFooter,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;

@import './assets/css/fonts.css';
/* @import './assets/css/colors.css'; */

@tailwind utilities;
</style>
