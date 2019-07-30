<template>
  <div class="relative box text-white">
    <div class="z-0 absolute top-0 left-0">
      <img class="object-cover h-64" style="filter: brightness(0.5)" :src="image" />
    </div>
    <div class="relative z-50 pt-10 mt-5">
      <div class="font-roboto-slab text-lg font-semibold ">
        <a :href="target_url" target="Westin">{{ header }}</a>
      </div>
      <p class="font-montserrat text-base p-3" v-html="subtitle"></p>
    </div>
  </div>
</template>

<style>
.box {
  @apply inline-block;
  @apply h-64;
  @apply w-64;
  @apply m-6;
  @apply p-5;
  @apply text-center;
  @apply bg-black;
}
</style>

<script>
export default {
  name: 'SquareImageBlock',
  props: ['image', 'target_url', 'header', 'subtitle'],
}
</script>
