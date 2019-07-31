<template>
  <div class="text-wri-dark-blue">
    <TravelHeader></TravelHeader>
    <VenueLocation></VenueLocation>
    <Parking></Parking>
    <SuggestedHotels></SuggestedHotels>
    <Airport></Airport>
    <GettingAroundHuntsville></GettingAroundHuntsville>
    <Recreation></Recreation>
    <Food></Food>
  </div>
</template>

<script>
import TravelHeader from './Travel/TravelHeader.vue'
import VenueLocation from './Travel/VenueLocation.vue'
import Parking from './Travel/Parking.vue'
import SuggestedHotels from './Travel/SuggestedHotels.vue'
import Airport from './Travel/Airport.vue'
import GettingAroundHuntsville from './Travel/GettingAroundHuntsville.vue'
import Recreation from './Travel/Recreation.vue'
import Food from './Travel/Food.vue'

export default {
  name: 'travel',
  components: {
    TravelHeader,
    VenueLocation,
    Parking,
    SuggestedHotels,
    Airport,
    GettingAroundHuntsville,
    Recreation,
    Food,
  },
}
</script>

<style scoped>
::v-deep h2 {
  @apply text-6xl;
  @apply font-thin;
  @apply text-center;
  font-family: 'Bebas Neue W01 Regular';
}

::v-deep h3 {
  font-family: 'Bebas Neue W01 Regular';
  @apply text-3xl;
}

::v-deep a {
  font-family: 'Bebas Neue W01 Regular';
  @apply text-2xl;
  @apply font-hairline;
}

::v-deep p {
  @apply text-base;
  @apply font-thin;
}

::v-deep ul {
  @apply text-2xl;
  @apply font-extrabold;
  @apply list-none;
}

::v-deep li {
  @apply text-xl;
  @apply pb-4;
}

iframe,
object,
embed {
  max-width: 100%;
}
</style>
