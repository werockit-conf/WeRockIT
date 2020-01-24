<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div class="sm:flex sm:flex-wrap sm:justify-center">
      <PersonCard
        v-for="person in sortedTeam"
        :key="person.id"
        class="sm:w-2/4"
        :image_path="person.image_path"
        :name="person.name"
        :job_title="person.job_title"
        :company="person.company"
        :linkedin="person.linkedin"
        :website="person.website"
        :twitter="person.twitter"
      />
    </div>
  </Tile>
</template>

<script>
import { globalStore } from '@/components/store.js'
import Tile from '@/components/Tile.vue'
import PersonCard from '@/components/PersonCard.vue'
import WeRockDataCdn from '@/components/werockdataCdn.js'

export default {
  name: 'the-team',
  components: {
    Tile,
    PersonCard,
  },
  computed: {
    sortedTeam: function() {
      this.sortTeam()
      return this.team
    },
    team: function() {
      return globalStore.state.team
    },
  },
  methods: {
    sortTeam: function() {
      this.team.sort(function(a, b) {
        return a.name > b.name ? 1 : -1
      })
    },
  },
  mounted() {
    WeRockDataCdn.team()
  },
}
</script>
