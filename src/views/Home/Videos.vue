<template>
  <Tile title="Interviews" bgcolor="bg-wri-dark-blue">
    <div class="mx-auto pt-16 text-center" id="truth-in-40-seconds">
      <div class="flex flex-initial justify-center">
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/Z71NtmT1Z4k"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-3xl text-white font-bebas pt-4">
        The Truth About WeRockIT in 40 Seconds
      </div>
      <div class="text-lg text-white">
        We talk with Branden Schwartz, WeRockIT 2019 speaker and Scenic City Summit organizer, about what he thinks
        makes WeRockIT Conf unique.
      </div>
      <div class="py-20">
        <a
          href="https://www.tickettailor.com/events/werockitconf/268601"
          target="_blank"
          class="uppercase font-bold mt-4 font-montserrat inline p-2 px-6 bg-wri-teal rounded-full hover:bg-blue-300  lg:text-2xl md:text-xl sm:text-xl"
          >Get Tickets</a
        >
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
