<template>
  <div>
    <router-link v-if="this.maybeRenderWithoutRouteHistory" :to="anchorPath()" replace>
      <SpeakerCardContent
        :name="this.name"
        :talk_title="this.talk_title"
        :talk_tag="this.talk_tag"
        :image_path="this.image_path"
      />
    </router-link>
    <router-link v-else-if="this.maybeRenderWithRouteHistory" :to="anchorPath()">
      <SpeakerCardContent
        :name="this.name"
        :talk_title="this.talk_title"
        :talk_tag="this.talk_tag"
        :image_path="this.image_path"
      />
    </router-link>
    <router-link v-else to="/#">
      <SpeakerCardContent
        :name="this.name"
        :talk_title="this.talk_title"
        :talk_tag="this.talk_tag"
        :image_path="this.image_path"
      />
    </router-link>
  </div>
</template>

<script>
import SpeakerCardContent from '@/components/SpeakerCardContent.vue'

export default {
  name: 'SpeakerCard',
  components: {
    SpeakerCardContent,
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
    anchor_name: {
      type: String,
      default: '',
    },
    allow_route_history: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maybeRenderWithRouteHistory: function() {
      return this.anchor_name != '' && this.allow_route_history
    },
    maybeRenderWithoutRouteHistory: function() {
      return this.anchor_name != '' && !this.allow_route_history
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
      return 'speakers#' + this.anchor_name
    },
  },
}
</script>
