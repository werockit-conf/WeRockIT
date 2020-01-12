<template>
<Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div class="sm:flex sm:flex-wrap sm:justify-center">
      <Biography
        v-for="person in this.speakers"
        :key="person.id"
        class="sm:w-2/4"
        :image_path="person.image_path"
        :name="person.name"
        :talk_title="person.talkTitle"
        :biography="person.biography"
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
