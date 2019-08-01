<template>
  <Tile title="Stay Updated" bgcolor="bg-white">
    <div class="text-2xl pb-8">
      Sign up for our mailing list. Don't miss the buzz about our speakers, sessions and events! Sign up below to get
      the latest news about the WeRockIT Conf right in your inbox.
    </div>
    <NewsletterSignup></NewsletterSignup>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'

export default {
  components: { NewsletterSignup, Tile },
}
</script>
