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
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import Vidya from '@/components/Vidya.vue'

export default {
  components: { Tile, Vidya },
}
</script>
