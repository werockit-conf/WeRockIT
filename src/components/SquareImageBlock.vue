<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="relative box text-white">
    <a :href="target_url" target="Westin"
      >{
      <div class="z-0 absolute darken top-0 left-0">
        <img class="object-cover h-64" v-bind:class="{ lighter: hover }" :src="image" />
      </div>
      <div class="relative z-50 pt-3 mt-5">
        <div class="font-roboto-slab text-lg font-semibold ">
          {{ header }}
        </div>
        <p class="font-montserrat text-base p-3" v-html="subtitle"></p>
      </div>
    </a>
  </div>
</template>

<style>
img {
  filter: brightness(0.5);
}

.lighter {
  filter: brightness(0.6);
}

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
  data: function() {
    return {
      hover: false,
    }
  },
}
</script>
