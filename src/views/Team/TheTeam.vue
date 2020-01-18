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
import Tile from '@/components/Tile.vue'
import PersonCard from '@/components/PersonCard.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'the-team',
  components: {
    Tile,
    PersonCard,
  },
  data: function() {
    return {
      team: this.$root.team,
    }
  },
  computed: {
    sortedTeam: function() {
      this.sortTeam()
      console.log('sorting the team')
      console.log(this.team)
      return this.team
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
    WeRockData.team()
  },
}
</script>
