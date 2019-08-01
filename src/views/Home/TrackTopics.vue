<template>
  <Tile bgcolor="bg-white" title="Tracks">
    <div class="flex flex-wrap justify-center text-wri-teal text-5xl uppercase">
      <div class="bg-wri-dark-blue topic_box">
        <div>
          <div class="font-bebas">DEVOPS</div>
          <div class="text-base">Cloud, Agile, CI/CD</div>
        </div>
      </div>
      <div class="bg-wri-dark-blue topic_box">
        <div>
          <div class="font-bebas">IOT</div>
          <div class="text-base">Embedded, Wearables</div>
        </div>
      </div>
      <div class="bg-wri-dark-blue topic_box">
        <div>
          <div class="font-bebas">Development</div>
          <div class="text-base">Web, Backend, UX</div>
        </div>
      </div>
      <div class="bg-wri-dark-blue topic_box font-bebas">Data Science</div>
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>

<style scoped>
.topic_box {
  @apply flex-shrink-0;
  @apply h-48;
  @apply w-full;
  @apply m-6;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
}

@screen lg {
  .topic_box {
    @apply w-1/3;
  }
}
</style>
