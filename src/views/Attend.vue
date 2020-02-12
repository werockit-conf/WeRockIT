<template>
  <div>
    <AttendHeader></AttendHeader>
    <BeyondTheTalks></BeyondTheTalks>
    <TruthVideo></TruthVideo>
  </div>
</template>

<script>
import AttendHeader from './Attend/AttendHeader.vue'
import BeyondTheTalks from './Attend/BeyondTheTalks.vue'
import TruthVideo from '@/components/TruthVideo.vue'

export default {
  components: {
    AttendHeader,
    BeyondTheTalks,
    TruthVideo,
  },
}
</script>
