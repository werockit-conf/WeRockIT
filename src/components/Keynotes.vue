<template>
  <Tile bgcolor="bg-white" title="Keynotes" titleColor="text-wri-teal">
    <div class="sm:flex md:flex-wrap justify-center">
      <SpeakerCard
        v-for="person in keynotes"
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
import { globalStore } from '@/components/store.js'
import Tile from '@/components/Tile.vue'
import SpeakerCard from '@/components/SpeakerCard.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'keynotes',
  components: {
    Tile,
    SpeakerCard,
  },
  computed: {
    keynotes: function() {
      console.log(globalStore.state.keynotes)
      return globalStore.state.keynotes
    },
  },
  mounted() {
    let justKeynotes = true
    WeRockData.speakers(justKeynotes)
  },
}
</script>
