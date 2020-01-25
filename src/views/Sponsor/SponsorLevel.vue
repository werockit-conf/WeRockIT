<template>
  <div>
    <div class="block text-wri-teal text-6xl font-bebas">{{ level.name }}</div>

    <div v-for="sponsor in sponsors" :key="sponsor.id">
      <SponsorCard
        v-for="sponsor in sponsors"
        :key="sponsor.id"
        :image_path="sponsor.image_path"
        :name="sponsor.name"
        :level_name="level.name"
      />
      <br />
    </div>
  </div>
</template>

<script>
import SponsorCard from '@/components/SponsorCard.vue'

export default {
  name: 'sponsors',
  components: {
    SponsorCard,
  },
  props: ['level'],
  computed: {
    sponsors: function() {
      return this.level.sponsors
    },
  },
}
</script>
