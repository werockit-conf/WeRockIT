<template>
  <Tile bgcolor="bg-white" title=":(" titleColor="text-wri-dark-blue">
    <center>
      <p>
        <router-link
          class="uppercase font-montserrat font-bold block mt-4 inline p-2 bg-wri-teal rounded-full hover:bg-blue-300 text-2xl"
          :to="{ name: 'home' }"
        >
          Return to Home
        </router-link>
      </p>
    </center>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>
