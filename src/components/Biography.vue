<template>
<div class="flex flex-wrap w-full">

  <div class="md:w-1/2">
     <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
  </div>

  <div class="overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
    <div class="font-bold text-lg">{{ name }}</div>
    <div v-if="job_title != ''" class="text-sm sm:text-md">{{ job_title }}</div>
    <div v-if="secondary_title != ''" class="text-sm sm:text-md">{{ secondary_title }}</div>
    <div v-if="company != ''" class="italic text-md sm:text-lg">{{ company }}</div>
    <div class="mt-3"> {{ talk_title }} </div>
    <div v-if="biography != ''" class="text-sm">{{ biography }}</div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Biography',
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
    biography: {
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
