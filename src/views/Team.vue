<template>
  <div class="text-wri-blue">
    <TeamHeader></TeamHeader>
    <TheTeam></TheTeam>
  </div>
</template>

<script>
import TeamHeader from './Team/TeamHeader.vue'
import TheTeam from './Team/TheTeam.vue'

export default {
  name: 'team',
  components: {
    TeamHeader,
    TheTeam,
  },
}
</script>

<style>
h2 {
  @apply text-6xl;
  @apply font-thin;
  @apply text-center;
  font-family: 'Bebas Neue W01 Regular';
}
</style>
