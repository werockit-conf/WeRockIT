<template>
  <div class="text-wri-blue">
    <SponsorHeader></SponsorHeader>
    <Prospectus></Prospectus>
    <Sponsors></Sponsors>
  </div>
</template>

<script>
import SponsorHeader from './Sponsor/SponsorHeader.vue'
import Prospectus from './Sponsor/Prospectus.vue'
import Sponsors from './Sponsor/Sponsors.vue'
export default {
  name: 'sponsor',
  components: {
    SponsorHeader,
    Prospectus,
    Sponsors,
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
/* h3 {
  font-family: 'Bebas Neue W01 Regular';
  @apply text-3xl;
}
a {
  font-family: 'Bebas Neue W01 Regular';
  @apply text-2xl;
  @apply font-hairline;
}
p {
  @apply text-base;
}
iframe,
object,
embed {
  max-width: 100%;
} */
</style>
