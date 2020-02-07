<template>
  <div>
    <div class="text-wri-teal text-5xl font-bebas text-center">{{ level.name }}</div>
    <HomeSponsorCard
      v-for="sponsor in sponsors"
      :key="sponsor.id"
      :image_path="sponsor.image_path"
      :name="sponsor.name"
      :level_name="level.name"
      :website="sponsor.website"
    />
  </div>
</template>

<script>
import HomeSponsorCard from './HomeSponsorCard.vue'

export default {
  name: 'horizontal-sponsors',
  components: {
    HomeSponsorCard,
  },
  props: ['level'],
  computed: {
    sponsors: function() {
      return this.level.sponsors
    },
  },
}
</script>
