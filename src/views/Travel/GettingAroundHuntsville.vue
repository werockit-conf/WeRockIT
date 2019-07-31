<template>
  <Tile bgcolor="bg-white" title="Getting Around Huntsville" titleColor="text-wri-dark-blue">
    <div class="md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <img src="../../assets/ride_share.jpg" />
      </div>
      <div class="md:w-1/2 md:ml-6 md:max-w-xl">
        <h3>Rental Car Agencies</h3>
        <ul>
          <li>
            <a href="http://www.flyhuntsville.com/hsv/airport-information/ground-transportation/#.XT-1qZNKjUI">
              Ground Transportation through Huntsville International Airport</a
            >
            <p class="font-thin">Rental cars available through Avis, Hertz, Enterprise, and more.</p>
          </li>
        </ul>
        <h3>Rideshare</h3>
        <ul>
          <li>
            <a href="https://www.uber.com/global/en/cities/huntsville-al/">Uber</a>
          </li>
          <li>
            <a href="https://www.lyft.com/rider/cities/huntsville-al">Lyft</a>
          </li>
        </ul>
        <h3>Taxis</h3>
        <ul>
          <li>
            <a href="http://www.taxisinhuntsvilleal.com/">Huntsville Cab Compnay</a>
          </li>
          <li>
            <a href="https://madisoncitycab.business.site/">Madison City Cab</a>
          </li>
        </ul>
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
