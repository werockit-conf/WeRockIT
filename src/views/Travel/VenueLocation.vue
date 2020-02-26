<template>
  <Tile bgcolor="bg-white" title="Venue" titleColor="text-wri-dark-blue">
    <div class="md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <img src="../../assets/adtran-office.jpg" />
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2094366587976!2d-86.68024833318321!3d34.72511487762157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626eb4e37cfe87%3A0x9e7bf278c380cf9d!2sAdtran+East+Tower!5e0!3m2!1sen!2sus!4v1550022773662"
          frameborder="0"
          style="border:0;width:100%; height:100%;"
        > -->
        <!-- </iframe> -->
      </div>
      <div class="md:w-1/2 md:ml-6 md:max-w-xl">
        <h3>ADTRAN East Tower</h3>
        <p>ADTRAN Mark C. Smith Conference Center</p>
        <p>ADTRAN East Tower, 901 Explorer Blvd NW, Huntsville, AL 35806</p>
        <p class="pt-5">
          Located in the heart of Cummings Research Park and I-565 exit 14. The ADTRAN Mark C. Smith Conference Center
          resides in ADTRAN's East Tower.
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
