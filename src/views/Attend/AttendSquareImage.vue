<template>
  <div class="box font-roboto-slab" v-bind:style="{ backgroundImage: 'url(' + imagePath() + ')' }">
    {{ header }}
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-64;
  @apply h-64;
  @apply p-5;
  @apply text-center;
  @apply text-white;
  @apply bg-black;
  @apply text-xl;
  @apply font-semibold;
}
</style>

<script>
export default {
  name: 'AttendSquareImage',
  props: {
    image_path: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      default: ' ',
    },
  },
  methods: {
    imagePath: function() {
      return require('@/assets/' + this.image_path)
    },
  },
}
</script>
