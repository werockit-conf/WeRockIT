<template>
  <Tile title="Interviews" bgcolor="bg-wri-dark-blue">
    <div class="clearfix p-8" id="truth-in-40-seconds">
      <div class="float-left pr-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z71NtmT1Z4k"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-3xl text-white font-bebas">
        The Truth About WeRockIT in 40 Seconds
      </div>
      <div class="text-lg pt-4 text-white">
        We talk with Branden Schwartz, WeRockIT 2019 speaker and Scenic City Summit organizer, about what he thinks
        makes WeRockIT Conf unique.
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
