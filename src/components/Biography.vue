<template>
<<<<<<< HEAD
  <div class="flex flex-wrap w-full">
    <div class="md:w-1/2">
      <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    </div>

    <div class="overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div class="font-bold text-lg">{{ speakerName }}</div>
      <div v-if="job_title != ''" class="text-sm sm:text-md">{{ job_title }}</div>
      <div v-if="secondary_title != ''" class="text-sm sm:text-md">{{ secondary_title }}</div>
      <div v-if="company != ''" class="italic text-md sm:text-lg">{{ company }}</div>
      <div class="mt-3">{{ talk_title }}</div>
      <div v-if="biography != ''" class="text-sm">{{ biography }}</div>
=======
  <div class="flex flex-wrap w-full mt-5">
    <div class="md:w-1/4 mr-5">
      <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    </div>
    <div class="overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">    
      <span class="text-center md:text-left">
        <div class="text-2xl font-bold tracking-tighter md:mt-5 tracking-normal">{{ speakerName }}</div>
        <div v-if="job_title != ''" class="text-lg font-medium">{{ job_title }}</div>
        <div v-if="secondary_title != ''" class="text-lg font-medium">{{ secondary_title }}</div>
        <div v-if="company != ''" class="text-lg font-medium">{{ company }}</div>
        <div class="mt-3 mb-2 text-lg font-bold">{{ talk_title }}</div>
      </span>
      <div v-if="biography != ''" class="text-sm tracking-wide">{{ biography }}</div>
>>>>>>> 43ccb78fe4a57ffef5b25631e23bb8c664f6eae2
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
    speakerName: {
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
