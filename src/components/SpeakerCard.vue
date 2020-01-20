<template>
  <router-link v-if="anchorName != ''" :to="anchorPath()" replace>
    <div class="p-5 text-center  sm:max-w-sm">
      <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
      <div class="font-bold text-md">{{ name }}</div>
      <div v-if="talk_title != ''" class="text-sm sm:text-lg">{{ talk_title }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'SpeakerCard',
  props: {
    image_path: {
      type: String,
      required: true,
    },
    talk_title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    job_title: {
      type: String,
      default: '',
    },
    secondary_title: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    linkedin: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    anchorName: {
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
    anchorPath: function() {
      return '#' + this.anchorName
    },
  },
}
</script>
