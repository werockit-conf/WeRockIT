<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div class="sm:flex sm:flex-wrap sm:justify-center">
      <div v-for="level in levels" :key="level">
        <span class="text-wri-teal text-7xl font-bebas">{{ level }}</span>

        <SponsorCard
          v-for="sponsor in sponsors"
          :key="sponsor.id"
          class="sm:w-2/4"
          :image_path="sponsor.image_path"
          :name="sponsor.name"
        />
      </div>
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import SponsorCard from '@/components/SponsorCard.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'sponsors',
  components: {
    Tile,
    SponsorCard,
  },
  data: function() {
    return {
      sponsors: {},
    }
  },
  computed: {
    levels: function() {
      console.log(this.sponsors)
      return Object.keys(this.sponsors)
    },
  },
  methods: {
    fetchTeam: function() {
      this.sponsors = WeRockData.sponsors()
    },
  },
  mounted() {
    this.fetchTeam()
  },
}
</script>
