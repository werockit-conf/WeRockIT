<template>
  <div class="bg-white">
    <div class="container mx-auto px-32 text-center">
      <div class="text-6xl font-bebas text-wri-teal">Stay Updated</div>
      <div class="text-2xl">
        Sign up for our mailing list. Don't miss the buzz about our speakers, sessions and events! Sign up below to get
        the latest news about the WeRockIT Conf right in your inbox.
      </div>
      <NewsletterSignup></NewsletterSignup>
    </div>
  </div>
</template>

<script>
import NewsletterSignup from '@/components/NewsletterSignup.vue'

export default {
  components: { NewsletterSignup },
}
</script>
