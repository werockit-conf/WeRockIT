<template>
  <Tile bgcolor="bg-white" title>
    <div class="md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <img src="../../assets/mark-c-smith-conference-poi.png" />
      </div>
      <div class="md:1-1/2 md:ml-6 md:max-w-xl">
        <h3>Parking</h3>
        <p>
          Parking for the conference is free. It is recommended to park on the south side of the ADTRAN East Tower to
          have direct access to the Mark C. Smith Conference Center entrance.
        </p>
        <h3 class="pt-5">Handicap Accessability</h3>
        <p>
          A handicap accessilbe entrance is available. Volutneers will be staffed at the entrance in order to help
          escort handicap attendees.
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
