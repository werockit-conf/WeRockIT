<template>
  <div class="text-wri-dark-blue">
    <TravelHeader></TravelHeader>
    <VenueLocation></VenueLocation>
    <Parking></Parking>
    <SuggestedHotels></SuggestedHotels>
    <Airport></Airport>
    <GettingAroundHuntsville></GettingAroundHuntsville>
    <ThingsTodo></ThingsTodo>
  </div>
</template>

<script>
import TravelHeader from './Travel/TravelHeader.vue'
import VenueLocation from './Travel/VenueLocation.vue'
import Parking from './Travel/Parking.vue'
import SuggestedHotels from './Travel/SuggestedHotels.vue'
import Airport from './Travel/Airport.vue'
import GettingAroundHuntsville from './Travel/GettingAroundHuntsville.vue'
import ThingsTodo from './Travel/ThingsTodo.vue'

export default {
  name: 'travel',
  components: {
    TravelHeader,
    VenueLocation,
    Parking,
    SuggestedHotels,
    Airport,
    GettingAroundHuntsville,
    ThingsTodo,
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

h3 {
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
}
</style>
