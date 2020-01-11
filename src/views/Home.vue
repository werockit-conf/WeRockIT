<template>
  <div>
    <BasicInfo></BasicInfo>
    <MissionStatement></MissionStatement>
    <TrackTopics></TrackTopics>
    <Keynotes v-bind:keynotes="this.keynotes"></Keynotes>
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
import WeRockData from '@/components/werockdata.js'

export default {
  components: {
    BasicInfo,
    Keynotes,
    MissionStatement,
    Pricing,
    TrackTopics,
    Updates,
  },
  data: function() {
    return {
      keynotes: [],
    }
  },
  methods: {
    fetchKeynotes: function() {
      let justKeynotes = true
      this.keynotes = WeRockData.speakers(justKeynotes)
    },
  },
  mounted() {
    this.fetchKeynotes()
  },
}
</script>
