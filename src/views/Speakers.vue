<template>
  <div class="text-wri-blue">
    <SpeakersHeader></SpeakersHeader>
    <TheSpeakers :speakers="this.speakers"></TheSpeakers>
    <Biographies :speakers="this.speakers"></Biographies>
    <button class="floatybutton">fdsfsd</button>
  </div>
</template>


<style scoped>
.floatybutton {
  @apply fixed;
  /* @apply hidden; */
  @apply text-center;
  @apply bottom-0;
  @apply right-0;
  @apply z-50;
  @apply text-base;
  @apply border-0;
  @apply outline-none;
  @apply bg-red-600;
  @apply text-white;
  @apply cursor-pointer;
  @apply rounded-sm;
  @apply p-10;
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
    }
  },
  computed: {
    sortedTeam: function() {
      this.sortTeam()
      return this.speakers
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
  },
  mounted() {
    this.fetchTeam()
  },
}
</script>
