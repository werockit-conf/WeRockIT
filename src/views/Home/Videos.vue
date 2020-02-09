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
          v-if="showTicketSales"
          href="https://www.tickettailor.com/events/werockitconf/268601"
          target="_blank"
          class="uppercase font-bold mt-4 font-montserrat inline p-2 px-6 bg-wri-teal rounded-full hover:bg-blue-300  lg:text-2xl md:text-xl sm:text-xl"
          >Get Tickets</a
        >
      </div>
    </div>
    <div class="mx-auto pt-16 text-center" id="lanyards">
      <div class="flex flex-initial justify-center">
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/K60dEz2uCso"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-3xl text-white font-bebas pt-4">
        WeRockIT 2020: Lanyard Colors Revealed
      </div>
      <div class="text-lg text-white">
        What are lanyard colors at a conference and why do they matter? Pat Viafore, a speaker from WeRockIT Conf 2019,
        chats with WeRockIT about why this unique conference feature is more than it seems.
      </div>
      <div class="py-20">
        <a
          v-if="showTicketSales"
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
  computed: {
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
  },
}
</script>
