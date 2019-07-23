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
h2 {
  @apply text-6xl;
  @apply font-thin;
  @apply text-center;
}

h3 {
  @apply text-3xl;
}

p {
  font-family: 'Montserrat', sans-serif;
  @apply text-sm;
  @apply font-black;
  @apply leading-tight;
  @apply tracking-tight;
}

iframe,
object,
embed {
  max-width: 100%;
}
</style>
