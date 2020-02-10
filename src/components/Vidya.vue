<template>
  <div class="mx-auto pt-16 text-center" :id="anchor">
    <div class="flex flex-initial justify-center">
      <iframe
        width="720"
        height="405"
        :src="ytembedlink"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="text-3xl text-white font-bebas pt-4">
      {{ vtitle }}
    </div>
    <div class="text-lg text-white">
      {{ vdesc }}
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
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      required: true,
    },
    youtube_embed_url: {
      type: String,
      required: true,
    },
    vtitle: {
      type: String,
      required: true,
    },
    vdesc: {
      type: String,
      required: true,
    },
  },
}
</script>
