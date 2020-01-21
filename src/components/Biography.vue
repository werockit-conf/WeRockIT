<template>
  <div class="flex flex-wrap w-full mt-5">
    <div class="md:w-1/4 mr-5">
      <img class="rounded-full shadow-lg mb-5" :src="imagePath()" alt="image" />
    </div>
    <div class="overflow-hidden md:w-4/6">
      <span class="text-center md:text-left">
        <div class="text-2xl font-bold tracking-tighter md:mt-3 tracking-normal">
          {{ speakerName }}
          <a v-if="this.linkedin != ''" :href="this.linkedin" target="_blank"
            ><font-awesome-icon
              class="mr-2 text-xl text-wri-teal hover:text-wri-purple"
              :icon="['fab', 'linkedin']"
            ></font-awesome-icon
          ></a>
          <a v-if="twitter != ''" :href="this.twitter" target="_blank"
            ><font-awesome-icon
              class="mr-2 text-xl text-wri-teal hover:text-wri-purple"
              :icon="['fab', 'twitter']"
            ></font-awesome-icon
          ></a>
          <a v-if="website != ''" :href="this.website" target="_blank"
            ><font-awesome-icon
              class="text-xl text-wri-teal hover:text-wri-purple"
              :icon="['fa', 'link']"
            ></font-awesome-icon
          ></a>
        </div>
        <div v-if="job_title != ''" class="text-lg font-medium">{{ job_title }}</div>
        <div v-if="secondary_title != ''" class="text-lg font-medium">{{ secondary_title }}</div>
        <div v-if="company != ''" class="text-lg font-medium">{{ company }}</div>
        <div class="mt-3 mb-2 text-lg font-bold">{{ talk_title }}</div>
        <TalkTitle :talk_tag="this.talk_tag" class="mb-2"></TalkTitle>
      </span>
      <div v-if="biography != ''" class="text-sm tracking-wide">{{ biography }}</div>
    </div>
  </div>
</template>

<script>
import TalkTitle from '@/components/TalkTitle.vue'

export default {
  name: 'Biography',
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
    speakerName: {
      type: String,
      default: '',
    },
    job_title: {
      type: String,
      default: '',
    },
    talk_tag: {
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
