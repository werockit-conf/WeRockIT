<template>
  <div class="text-wri-blue" id="printMe">
    <SpeakersHeader></SpeakersHeader>
    <button @click="print"></button>
    <TheSpeakers :speakers="this.speakers" id="top"></TheSpeakers>
    <Biographies ref="biographysection" :speakers="this.speakers"></Biographies>
    <button v-on:click="backToTop" :class="showButtonStyle" class="floaty-button">
      <font-awesome-icon class="m-5 flex-grow text-base text-wri-teal" :icon="['fa', 'caret-up']"></font-awesome-icon>
    </button>
  </div>
</template>

<style scoped>
.floaty-button {
  @apply fixed;
  @apply bottom-0;
  @apply right-0;
  @apply z-50;
  @apply cursor-pointer;
}
</style>

<script>
import { globalStore } from '@/components/store.js'
import SpeakersHeader from './Speakers/SpeakersHeader.vue'
import TheSpeakers from './Speakers/TheSpeakers.vue'
import Biographies from './Speakers/Biographies.vue'
import WeRockDataCdn from '@/components/werockdataCdn.js'

export default {
  name: 'speakers',
  components: {
    SpeakersHeader,
    TheSpeakers,
    Biographies,
  },
  data: function() {
    return {
      showButton: false,
    }
  },
  computed: {
    speakers: function() {
      return globalStore.state.speakers
    },
    sortedSpeakers: function() {
      this.sortSpeakers()
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
    updateScroll() {
      this.showButton = window.scrollY > this.biographyHeight
    },
    backToTop: function() {
      this.$router.replace('speakers#top')
    },
    print: function() {
      this.$htmlToPaper('printMe')
    }
  },
  mounted() {
    WeRockDataCdn.speakers()

    window.addEventListener('scroll', this.updateScroll)
    this.biographyHeight = this.$refs.biographysection.$el.offsetTop
  },
}
</script>
