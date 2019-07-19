<template>
  <div>
    <BasicInfo></BasicInfo>
    <MissionStatement></MissionStatement>
    <TrackTopics></TrackTopics>
  </div>
</template>

<script>
import BasicInfo from './Home/BasicInfo.vue'
import MissionStatement from './Home/MissionStatement.vue'
import TrackTopics from './Home/TrackTopics.vue'

export default {
  components: {
    BasicInfo,
    MissionStatement,
    TrackTopics,
  },
}
</script>
