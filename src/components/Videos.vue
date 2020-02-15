<template>
  <Tile title="Interviews" bgcolor="bg-wri-dark-blue">
    <Vidya
      anchor="truth-in-40-seconds"
      youtube_embed_url="https://www.youtube.com/embed/Z71NtmT1Z4k"
      video_title="The Truth About WeRockIT in 40 Seconds"
      video_description="We talk with Branden Schwartz, WeRockIT 2019 speaker and Scenic City Summit organizer, about what he thinks
        makes WeRockIT Conf unique."
    ></Vidya>

    <Vidya
      anchor="lanyards"
      youtube_embed_url="https://www.youtube.com/embed/K60dEz2uCso"
      video_title="WeRockIT 2020: Lanyard Colors Revealed"
      video_description="What are lanyard colors at a conference and why do they matter? Pat Viafore, a speaker from WeRockIT Conf 2019,
        chats with WeRockIT about why this unique conference feature is more than it seems."
    ></Vidya>

    <Vidya
      anchor="social-room"
      youtube_embed_url="https://www.youtube.com/embed/cmxHL7obhvg"
      video_title="How to Connect in the Social Room at WeRockIT 2020"
      video_description="What is a conference social room and how can it help you network? We talk to Nina Antonison, owner of local business Fiber Artwork, about her time teaching people to knit at the WeRockIT 2019 social room - and the surprising things she noticed."
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
