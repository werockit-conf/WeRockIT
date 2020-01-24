<template>
  <div class="text-white content-center py-6 bg-wri-purple">
    <div>
      <div class="text-center uppercase font-bebas text-4xl text-white">Justify Your Trip</div>
      <div class="text-center font-montserratt text-base text-wri-white px-40 mx-40">
        Want to attend WeRock IT Conf 2019, but your manager needs a little convincing? We've put together a letter you can use to explain the benefits and ask for support. Just fill in the blanks and personalize it.
      </div>
      <div class="pb-2 flex text-center justify-center">
        <button v-on:click="this.toggle" class="inline p-2 px-6 bg-wri-dark-purple rounded-full hover:bg-blue-300">
          Generate Letter
          <font-awesome-icon v-if="!active" class="inline" :icon="['fa', 'caret-down']"></font-awesome-icon>
          <font-awesome-icon v-else class="inline" :icon="['fa', 'caret-up']"></font-awesome-icon>
        </button>
      </div>
      <div v-show="active" class="bg-wri-dark-purple rounded-sm mx-20 px-20">
      <div class="p-5">
          Hi [NAME],
          <br /> <br />
          WeRockIT Conf 2019 is taking place at ADTRAN's Mark C. Smith Conference Center in Huntsville, AL, May 3-4, 2019, and I’m hoping to get your approval to go. This is an invaluable opportunity to gain practical insights and hear success stories from technology professionals and executives who are facing challenges similar to ours. This will be particularly beneficial for [PROJECT 1] and [PROJECT 2].
          <br /> <br />
          Beyond that, there will be several opportunities to meet one on one with developers and technology professionals from Huntsville and the surrounding areas, attend hands-on workshops, learn about the latest trends in technology, and gain technical knowledge. I especially look forward to learning about [TOPICS INTERESTED IN] – directly from some of the best and brightest in tech – and sharing these insights with our team.
          <br /> <br />
          I estimate that my attendance at this event will cost [$ HERE] – which includes travel, accommodations, and registration. Let me know if you’re on board and we can work together to plan out pre-event and post-event action items.
          <br /> <br />
          Looking forward to your thoughts,<br />
          [NAME]
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'generateletterfooter',
  data:function() {
    return { active: false }
  },
  methods: {
    toggle: function() {
      this.active = !this.active
    }
  },
}
</script>
