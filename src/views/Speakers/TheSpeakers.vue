<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div class="sm:flex sm:flex-wrap sm:justify-center">
      <SpeakerCard
        v-for="person in this.speakers"
        :key="person.id"
        class="sm:w-1/5"
        :image_path="person.image_path"
        :name="person.name"
        :talk_title="person.talkTitle"
        :anchor_name="person.anchorName"
        :talk_tag="person.talkTag"
        :linkedin="person.linkedin"
        :website="person.website"
        :twitter="person.twitter"
      />
    </div>
    <span class="text-3xl text-wri-teal pt-5 font-semibold"><center>Check back for more to come!</center></span>
    <div class="my-4 md:inline lg:inline">
      <button
        @click="print"
        class="p-3 m-3 text-wri-purple hover:text-wri-blue font-bebas text-xl"
        >Trouble seeing speakers? Download a PDF of all speakers, talks, and bios currently listed.</button
      >
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import SpeakerCard from '@/components/SpeakerCard.vue'

export default {
  name: 'the-speakers',
  components: {
    Tile,
    SpeakerCard,
  },
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    print: function() {
      this.$htmlToPaper('printMe')
    }
  }
}
</script>
