<template>
  <Tile bgcolor="bg-white" title="Keynotes" titleColor="text-wri-teal">
    <div class="sm:flex md:flex-wrap justify-center">
      <SpeakerCard
        v-for="person in this.keynotes"
        :key="person.id"
        class="sm:w-2/4"
        :image_path="person.image_path"
        :name="person.name"
        :talk_title="person.talkTitle"
      />
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import SpeakerCard from '@/components/SpeakerCard.vue'

export default {
  name: 'keynotes',
  components: {
    Tile,
    SpeakerCard,
  },
  props: {
    keynotes: {
      type: Array,
      required: true,
    },
  },
}
</script>
