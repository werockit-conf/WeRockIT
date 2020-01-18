<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div v-if="levels.length > 0" class="sm:flex sm:flex-wrap sm:justify-center">
      <div v-for="level in levels" :key="level">
        <span class="text-wri-teal text-7xl font-bebas">{{ level }}</span>
        <SponsorCard
          v-for="sponsor in sponsors"
          :key="sponsor.id"
          :image_path="sponsor.image_path"
          :name="sponsor.name"
        />
        <br />
      </div>
    </div>
  </Tile>
</template>

<script>
import { globalStore } from '@/components/store.js'
import Tile from '@/components/Tile.vue'
import SponsorCard from '@/components/SponsorCard.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'sponsors',
  components: {
    Tile,
    SponsorCard,
  },
  computed: {
    levels: function() {
      return Object.keys(this.sponsors)
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
