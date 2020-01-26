<template>
  <Tile bgcolor="bg-white" title="Sponsors" titleColor="text-wri-dark-blue">
    <div class="container content-center">
      <HomeSponsorLevel v-for="level in levels" :key="level.name" class="" :level="level" />
    </div>
  </Tile>
</template>

<script>
import { globalStore } from '@/components/store.js'

import Tile from '@/components/Tile.vue'
import WeRockDataCdn from '@/components/werockdataCdn.js'
import HomeSponsorLevel from './HomeSponsorLevel.vue'

export default {
  name: 'sponsors',
  components: {
    HomeSponsorLevel,
    Tile,
  },
  computed: {
    levels: function() {
      return globalStore.state.sponsorsByLevels
    },
    sponsors: function() {
      return globalStore.state.sponsors
    },
  },
  mounted() {
    WeRockDataCdn.sponsors()
  },
}
</script>
