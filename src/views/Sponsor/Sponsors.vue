<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div v-for="level in levels" :key="level.name" class="text-center">
      <SponsorLevel :level="level" />
    </div>
  </Tile>
</template>

<script>
import { globalStore } from '@/components/store.js'
import Tile from '@/components/Tile.vue'
import WeRockData from '@/components/werockdata.js'
import SponsorLevel from './SponsorLevel.vue'

export default {
  name: 'sponsors',
  components: {
    Tile,
    SponsorLevel,
  },
  computed: {
    levels: function() {
      let levelsets = []
      let keys = Object.keys(this.sponsors)

      for (const key of keys) {
        levelsets.push({
          name: key,
          sponsors: this.sponsors[key],
        })
      }

      return levelsets
    },
    sponsors: function() {
      return globalStore.state.sponsors
    },
  },
  mounted() {
    WeRockData.sponsors()
  },
}
</script>
