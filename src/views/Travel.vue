<template>
  <div class="font-bebas text-wri-dark-blue">
    <TravelHeader></TravelHeader>
    <VenueLocation></VenueLocation>
    <Parking></Parking>
    <SuggestedHotels></SuggestedHotels>
    <Airport></Airport>
  </div>
</template>

<script>
import TravelHeader from './Travel/TravelHeader.vue'
import VenueLocation from './Travel/VenueLocation.vue'
import Parking from './Travel/Parking.vue'
import SuggestedHotels from './Travel/SuggestedHotels.vue'
import Airport from './Travel/Airport.vue'

export default {
  name: 'travel',
  components: {
    TravelHeader,
    VenueLocation,
    Parking,
    SuggestedHotels,
    Airport,
  },
}
</script>

<style>
h3 {
  @apply text-3xl;
}

p {
  @apply text-xl;
}

</style>