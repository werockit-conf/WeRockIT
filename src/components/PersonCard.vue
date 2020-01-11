<template>
  <div class="p-5 text-center  sm:max-w-sm">
    <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    <div class="font-bold text-lg">{{ name }}</div>
    <div v-if="job_title != ''" class="text-sm sm:text-md">{{ job_title }}</div>
    <div v-if="secondary_title != ''" class="text-sm sm:text-md">{{ secondary_title }}</div>
    <div v-if="company != ''" class="italic text-md sm:text-lg">{{ company }}</div>
    <div class="mt-3">
      <a v-if="this.linkedin != ''" :href="this.linkedin" target="_blank"
        ><font-awesome-icon
          class="mr-2 text-3xl text-wri-teal hover:text-wri-purple"
          :icon="['fab', 'linkedin']"
        ></font-awesome-icon
      ></a>
      <a v-if="twitter != ''" :href="this.twitter" target="_blank"
        ><font-awesome-icon
          class="mr-2 text-3xl text-wri-teal hover:text-wri-purple"
          :icon="['fab', 'twitter']"
        ></font-awesome-icon
      ></a>
      <a v-if="website != ''" :href="this.website" target="_blank"
        ><font-awesome-icon
          class="text-3xl text-wri-teal hover:text-wri-purple"
          :icon="['fa', 'link']"
        ></font-awesome-icon
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    image_path: {
      type: String,
      required: true,
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
