<template>
  <Tile bgcolor="bg-wri-blue" title="Conference Pricing" titleColor="text-wri-teal">
    <div class="flex flex-wrap justify-center uppercase text-center">
      <PricingBox
        v-if="showTicketSales"
        name="Early Bird"
        price="99"
        link="https://www.tickettailor.com/events/werockitconf/268601"
        button="Buy Now"
      ></PricingBox>
      <PricingBox v-else name="Regular" price="99" link="javascript:void(0);" button="Available Soon"></PricingBox>
      <PricingBox name="Regular" price="129" link="javascript:void(0);" button="Available Soon"></PricingBox>
      <PricingBox name="Late Bird" price="139" link="javascript:void(0);" button="Available Soon"></PricingBox>
    </div>
  </Tile>
</template>

<script>
import PricingBox from './PricingBox.vue'
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile, PricingBox },
  computed: {
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
  },
}
</script>
