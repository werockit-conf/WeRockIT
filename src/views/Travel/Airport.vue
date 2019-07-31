<template>
  <Tile bgcolor="bg-white" title="Airport" titleColor="text-wri-dark-blue">
    <div class="md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <img class="md:medium-image-block" src="../../assets/front_airplane.jpg" />
      </div>
      <div class="md:w-1/2 md:ml-6  md:max-w-xl">
        <h3>Huntsville International Airport</h3>
        <p>
          Huntsville International Airport (HSV) is a quick drive from downtown and offers non-stop service for these
          destinations and hubs: Atlanta, Charlotte, Chicago, Dallas, Denver, Detroit and Washington, D.C. Serving more
          than 1.2 million passengers ever year, Huntsville International Airport is a freshly updated, easy-to-navigate
          port with a built-in Four Points by Sheraton Hotel, on-site dining and car rental outlets. All of this adds up
          to a pleasurable traveling experience.
        </p>
      </div>
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>
