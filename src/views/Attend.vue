<template>
  <div>
    <AttendHeader></AttendHeader>
    <BeyondTheTalks></BeyondTheTalks>
    <Videos></Videos>
  </div>
</template>

<script>
import AttendHeader from './Attend/AttendHeader.vue'
import BeyondTheTalks from './Attend/BeyondTheTalks.vue'
import Videos from '@/components/Videos.vue'

export default {
  components: {
    AttendHeader,
    BeyondTheTalks,
    Videos,
  },
}
</script>
