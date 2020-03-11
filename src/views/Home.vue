<template>
  <div>
    <BasicInfo></BasicInfo>
    <MissionStatement></MissionStatement>
    <TrackTopics></TrackTopics>
    <Keynotes v-if="showSpeakerPage"></Keynotes>
    <Pricing></Pricing>
    <Updates></Updates>
    <!-- <Videos></Videos> -->
    <HomeSponsors></HomeSponsors>
  </div>
</template>

<script>
import BasicInfo from './Home/BasicInfo.vue'
import HomeSponsors from './Home/Sponsor/HomeSponsors.vue'
import MissionStatement from './Home/MissionStatement.vue'
import Pricing from './Home/Pricing.vue'
import TrackTopics from './Home/TrackTopics.vue'
import Updates from './Home/Updates.vue'
// import Videos from '@/components/Videos.vue'
import Keynotes from '@/components/Keynotes.vue'

export default {
  components: {
    BasicInfo,
    HomeSponsors,
    Keynotes,
    MissionStatement,
    Pricing,
    TrackTopics,
    Updates,
    // Videos,
  },
  computed: {
    showSpeakerPage() {
      return process.env.VUE_APP_UNLOCK_SPEAKERS == 'TRUE'
    },
  },
}
</script>
