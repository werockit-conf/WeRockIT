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
        <h3 class="pt-5">Accessibility</h3>
        <p>
          The main entrance to the Mark C. Smith Conference Center has several sets of stairs between the first floor
          where registration is to the second floor that makes the main entrance to the conference area not as accessible.
          A lower-barrier entrance is also available. For attendees who would prefer that option, escort volunteers
          will be staffed at the main entrance.
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
