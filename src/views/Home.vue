<template>
  <div>
    <BasicInfo></BasicInfo>
    <MissionStatement></MissionStatement>
    <TrackTopics></TrackTopics>
    <Pricing></Pricing>
    <Updates></Updates>
    <Videos></Videos>
  </div>
</template>

<script>
import BasicInfo from './Home/BasicInfo.vue'
import MissionStatement from './Home/MissionStatement.vue'
import Pricing from './Home/Pricing.vue'
import TrackTopics from './Home/TrackTopics.vue'
import Updates from './Home/Updates.vue'
import Videos from './Home/Videos.vue'

export default {
  components: {
    BasicInfo,
    MissionStatement,
    Pricing,
    TrackTopics,
    Updates,
    Videos,
  },
}
</script>
