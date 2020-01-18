<template>
  <Tile bgcolor="bg-white" title="Sponsors" titleColor="text-wri-dark-blue" class="text-center">
    <span class="text-wri-teal text-7xl font-bebas">Platinum</span>
    <div class="flex flex-wrap justify-center">
      <img class="inline-block w-1/3" src="@/assets/images/sponsors/facebook.png" />
    </div>
    <br />
    <span class="text-wri-teal text-7xl font-bebas">Diamond</span>
    <div class="flex flex-wrap justify-center">
      <img class="inline-block" src="@/assets/AdtranLogo.png" />
    </div>
    <br />
    <span class="text-wri-teal text-7xl font-bebas">Silver</span>
    <div class="flex flex-wrap justify-center">
      <img class="inline-block" src="@/assets/simple_helix.png" />
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>
