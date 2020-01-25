<template>
  <div class="text-white text-center content-center bg-wri-purple py-5">
    <div class="uppercase font-bebas text-4xl text-white">Justify Your Trip</div>
    <div class="font-montserratt text-base text-wri-white px-5 md:px-16 lg:px-64">
      Want to attend WeRock IT Conf 2019, but your manager needs a little convincing? We've put together a letter you
      can use to explain the benefits and ask for support. Just fill in the blanks and personalize it.
    </div>
    <div class="justify-center pt-5">
      <button v-on:click="this.toggle" class="bg-wri-dark-purple rounded-full hover:bg-blue-300 p-2">
        Generate Letter
        <font-awesome-icon v-if="!active" class="" :icon="['fa', 'caret-down']"></font-awesome-icon>
        <font-awesome-icon v-else class="" :icon="['fa', 'caret-up']"></font-awesome-icon>
      </button>
    </div>
    <div v-show="active" class="text-left bg-wri-dark-purple rounded-sm p-4 md:px-20 mt-4">
      Hi [NAME],
      <br />
      <br />
      WeRockIT Conf 2019 is taking place at ADTRAN's Mark C. Smith Conference Center in Huntsville, AL, May 3-4,
      2019, and I’m hoping to get your approval to go. This is an invaluable opportunity to gain practical insights
      and hear success stories from technology professionals and executives who are facing challenges similar to
      ours. This will be particularly beneficial for [PROJECT 1] and [PROJECT 2].
      <br />
      <br />
      Beyond that, there will be several opportunities to meet one on one with developers and technology
      professionals from Huntsville and the surrounding areas, attend hands-on workshops, learn about the latest
      trends in technology, and gain technical knowledge. I especially look forward to learning about [TOPICS
      INTERESTED IN] – directly from some of the best and brightest in tech – and sharing these insights with our
      team.
      <br />
      <br />
      I estimate that my attendance at this event will cost [$ HERE] – which includes travel, accommodations, and
      registration. Let me know if you’re on board and we can work together to plan out pre-event and post-event
      action items.
      <br />
      <br />
      Looking forward to your thoughts,<br />
      [NAME]
    </div>
  </div>
</template>

<script>
export default {
  name: 'generateletterfooter',
  data: function() {
    return { active: false }
  },
  methods: {
    toggle: function() {
      this.active = !this.active
    },
  },
}
</script>
