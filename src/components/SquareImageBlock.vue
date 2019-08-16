<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="relative box flex-grow text-white">
    <div class="z-0 absolute darken top-0 left-0">
      <img
        v-if="this.hover_enabled"
        class="object-cover h-64"
        :class="{ lighter: hover }"
        :src="imagePath()"
        alt="image"
      />
      <img v-else class="object-cover h-64" :src="imagePath()" alt="image" />
    </div>
    <div class="relative z-20 pt-3 mt-5">
      <div class="font-roboto-slab text-xl font-semibold ">
        {{ header }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
img {
  filter: brightness(0.5);
}

.lighter {
  filter: brightness(0.6);
}

.box {
  @apply inline-block;
  @apply w-64;
  @apply m-4;
  @apply p-3;
  @apply text-center;
  @apply bg-black;
}
</style>

<script>
export default {
  name: 'SquareImageBlock',
  props: {
    image_path: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      default: ' ',
    },
    hover_enabled: {
      type: Boolean,
      default: true,
    },
  },
  data: function() {
    return {
      hover: false,
    }
  },
  methods: {
    imagePath: function() {
      return require('@/assets/' + this.image_path)
    },
  },
}
</script>
