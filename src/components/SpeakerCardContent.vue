<template>
  <div class="p-5 text-center max-w-sm">
    <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    <div class="font-bold text-md">{{ name }}</div>
    <TalkTitle v-if="talk_title != ''" :talk_tag="this.talk_tag">
      {{ talk_title }}
    </TalkTitle>
  </div>
</template>

<script>
import TalkTitle from '@/components/TalkTitle.vue'

export default {
  name: 'SpeakerCard',
  components: {
    TalkTitle,
  },
  props: {
    image_path: {
      type: String,
      required: true,
    },
    talk_title: {
      type: String,
      default: '',
    },
    talk_tag: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    anchor_name: {
      type: String,
      default: '',
    },
  },
  methods: {
    imagePath: function() {
      if (this.image_path.startsWith('http')) {
        return this.image_path
      } else {
        return require('@/assets/' + this.image_path)
      }
    },
  },
}
</script>
