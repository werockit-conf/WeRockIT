<template>
  <Tile title="Interviews" bgcolor="bg-wri-dark-blue">
    <Vidya
      anchor="truth-in-40-seconds"
      ytembedlink="https://www.youtube.com/embed/Z71NtmT1Z4k"
      vtitle="The Truth About WeRockIT in 40 Seconds"
      vdesc="We talk with Branden Schwartz, WeRockIT 2019 speaker and Scenic City Summit organizer, about what he thinks
        makes WeRockIT Conf unique."
    ></Vidya>
    
    <Vidya
      anchor="lanyards"
      ytembedlink="https://www.youtube.com/embed/K60dEz2uCso"
      vtitle="WeRockIT 2020: Lanyard Colors Revealed"
      vdesc="What are lanyard colors at a conference and why do they matter? Pat Viafore, a speaker from WeRockIT Conf 2019,
        chats with WeRockIT about why this unique conference feature is more than it seems."
    ></Vidya>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import Vidya from '@/components/Vidya.vue'

export default {
  components: { Tile, Vidya },
  computed: {
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
  },
}
</script>
