<template>
  <Tile bgcolor="bg-white" title="Keynotes" titleColor="text-wri-teal">
    <div class="container mx-auto pt-5">
      <div class="sm:flex md:flex-wrap justify-center">
        <SpeakerCard
          v-for="person in keynotes"
          :key="person.id"
          class="sm:w-1/3"
          :image_path="person.image_path"
          :name="person.name"
          :talk_title="person.talkTitle"
          :anchor_name="person.anchorName"
          :allow_route_history="true"
        />
      </div>
    </div>
    <div class="container mx-auto text-center lg:p-20 md:p-16 sm:p-12">
      <a
        href="/speakers"
        target="_blank"
        class="uppercase font-bold mt-4 font-montserrat inline p-2 px-6 bg-wri-teal rounded-full hover:bg-blue-300  text-2xl"
        >More Speakers ></a
      >
    </div>
  </Tile>
</template>

<script>
import { globalStore } from '@/components/store.js'
import Tile from '@/components/Tile.vue'
import SpeakerCard from '@/components/SpeakerCard.vue'
import WeRockDataCdn from '@/components/werockdataCdn.js'

export default {
  name: 'keynotes',
  components: {
    Tile,
    SpeakerCard,
  },
  computed: {
    keynotes: function() {
      return globalStore.state.keynotes
    },
  },
  mounted() {
    let justKeynotes = true
    WeRockDataCdn.speakers(justKeynotes)
  },
}
</script>
