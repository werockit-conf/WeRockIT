<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="relative apply m-4 p-3 text-center text-white box-size"
  >
    <div class="z-0 absolute darken top-0 left-0">
      <img
        v-if="this.hover_enabled"
        class="object-cover h-64"
        :class="{ lighter: hover }"
        :src="imagePath()"
        alt="image"
      />
      <img v-else class="object-cover" :src="imagePath()" alt="image" />
    </div>
    <div class="relative z-20 pt-3 mt-5">
      <div class="font-bebas text-4xl tracking-wide font-semibold leading-none">
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

.box-size {
  @apply w-64;
  @apply h-64;
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
