<template>
  <div>
    <BasicInfo></BasicInfo>
    <MissionStatement></MissionStatement>
    <TrackTopics></TrackTopics>
    <Keynotes v-if="showSpeakerPage"></Keynotes>
    <Pricing></Pricing>
    <Updates></Updates>
  </div>
</template>

<script>
import BasicInfo from './Home/BasicInfo.vue'
import MissionStatement from './Home/MissionStatement.vue'
import Pricing from './Home/Pricing.vue'
import TrackTopics from './Home/TrackTopics.vue'
import Updates from './Home/Updates.vue'
import Keynotes from '@/components/Keynotes.vue'

export default {
  components: {
    BasicInfo,
    Keynotes,
    MissionStatement,
    Pricing,
    TrackTopics,
    Updates,
  },
  computed: {
    showSpeakerPage() {
      return process.env.VUE_APP_UNLOCK_SPEAKERS == 'TRUE'
    },
  },
}
</script>
