<template>
  <div class="pt-32 lg:pt-64 bg-wri-image pb-24">
    <div class="text-wri-teal font-bebas">
      <div class="text-center">
        <h1 class="uppercase text-6xl lg:text-9xl pt-20 lg:pt-32">WeRockIT 2020</h1>
        <div class="hidden lg:block">
          <h2 class="uppercase text-5xl">DevOps | Development | Data Science | IOT</h2>
        </div>
        <div class="lg:hidden">
          <h2 class="uppercase text-3xl">DevOps | Development</h2>
          <h2 class="uppercase leading-none text-3xl">Data Science | IOT</h2>
        </div>
        <h3 class="uppercase text-5xl lg:text-6xl">Early November 2020</h3>
        <h3 class="uppercase leading-none text-5xl lg:text-6xl">Huntsville, AL</h3>
      </div>
    </div>
    <div class="container mx-auto text-center p-8" v-if="showTicketSales">
      <a
        href="https://www.tickettailor.com/events/werockitconf/268601"
        target="_blank"
        class="uppercase font-bold mt-4 font-montserrat inline p-2 px-6 bg-wri-teal rounded-full hover:bg-blue-300 lg:text-3xl md:text-3xl sm:text-2xl"
        >Get Tickets</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
  },
}
</script>

<style scoped>
.bg-wri-image {
  background-image: url('~@/assets/images/landing_background.jpg');
  background-repeat: no-repeat;
  background-size: 250%;
  background-position: 50%;
}

@screen lg {
  .bg-wri-image {
    @apply bg-cover;
    @apply bg-scroll;
    background-position: center;
  }
}
</style>
