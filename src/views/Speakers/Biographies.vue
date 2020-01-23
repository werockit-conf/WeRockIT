<template>
  <Tile bgcolor="bg-white" title="Bios" titleColor="text-wri-dark-blue">
    <div class="flex flex-wrap justify-center">
      <Biography
        v-for="person in this.speakers"
        :key="person.id"
        class="w-full"
        :image_path="person.image_path"
        :speakerName="person.name"
        :job_title="person.job_title"
        :company="person.company"
        :linkedin="person.linkedin"
        :website="person.website"
        :twitter="person.twitter"
        :talk_title="person.talkTitle"
        :talk_tag="person.talkTag"
        :biography="person.biography"
        :id="person.anchorName"
      />
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import Biography from '@/components/Biography.vue'

export default {
  name: 'biographies',
  components: {
    Tile,
    Biography,
  },
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
}
</script>
