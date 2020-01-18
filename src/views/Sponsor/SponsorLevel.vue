<template>
  <div>
    <div class="block text-wri-teal text-7xl font-bebas">{{ level.name }}</div>

    <div v-for="sponsor in sponsors" :key="sponsor.id">
      <SponsorCard
        v-for="sponsor in sponsors"
        :key="sponsor.id"
        :image_path="sponsor.image_path"
        :name="sponsor.name"
      />
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
