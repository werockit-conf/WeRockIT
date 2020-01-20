<template>
  <div class="text-wri-blue">
    <SpeakersHeader></SpeakersHeader>
<<<<<<< HEAD
    <TheSpeakers :speakers="this.speakers"></TheSpeakers>
    <Biographies :speakers="this.speakers"></Biographies>
<<<<<<< HEAD
=======
    <button class="floatybutton">fdsfsd</button>
>>>>>>> 43ccb78fe4a57ffef5b25631e23bb8c664f6eae2
=======
    <TheSpeakers :speakers="this.speakers" id="top"></TheSpeakers>
    <Biographies ref="biographysection" :speakers="this.speakers"></Biographies>
    <button v-on:click="backToTop" :class="showButtonStyle" class="floatybutton">
      <font-awesome-icon class="m-5 flex-grow text-6xl text-wri-teal" :icon="['fa', 'caret-up']"></font-awesome-icon>
    </button>
>>>>>>> 13770d3... Got basic functionality working for the to top button; updated the logo in top left to be a white on the headers and black when header turns white (needed t0 add package to support this with webpack); the #about anchor on the main page sort of works;  TODO: Need to resolve anchors going to show beyond the header and not the top top of the the div
  </div>
</template>

<style scoped>
.floatybutton {
  @apply fixed;
  @apply bottom-0;
  @apply right-0;
  @apply z-50;
  @apply cursor-pointer;
}
</style>

<script>
import SpeakersHeader from './Speakers/SpeakersHeader.vue'
import TheSpeakers from './Speakers/TheSpeakers.vue'
import Biographies from './Speakers/Biographies.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'speakers',
  components: {
    SpeakersHeader,
    TheSpeakers,
    Biographies,
  },
  data: function() {
    return {
      speakers: [],
      showButton: false,
    }
  },
  computed: {
    sortedTeam: function() {
      this.sortTeam()
      return this.speakers
    },
    showButtonStyle: function() {
      return this.showButton ? '' : 'hidden'
    },
  },
  methods: {
    sortSpeakers: function() {
      this.speakers.sort(function(a, b) {
        return a.name > b.name ? 1 : -1
      })
    },
    fetchTeam: function() {
      this.speakers = WeRockData.speakers()
    },
    updateScroll() {
      this.showButton = window.scrollY > this.biographyHeight
    },
    backToTop: function() {
      this.$router.replace('speakers#top')
    },
  },
  mounted() {
    this.fetchTeam()
    window.addEventListener('scroll', this.updateScroll)
    this.biographyHeight = this.$refs.biographysection.$el.offsetTop
  },
}
</script>
