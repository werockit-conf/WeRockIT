<template>
  <div class="text-center p-5">
    <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    <span class="font-bold text-m">{{ name }}</span
    ><br />
    <span class="text-xs">{{ job_title }}</span
    ><br />
    <span class="italic text-sm">{{ company }}</span>
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

<style scoped></style>

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
      return require('@/assets/' + this.image_path)
    },
  },
}
</script>
