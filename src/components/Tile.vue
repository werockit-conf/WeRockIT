<template>
  <div :class="bgcolor" class="mx-auto px-8 lg:px-24 pt-8 pb-8">
    <div :class="titleColor" class="text-6xl font-bebas text-center py-2 leading-none">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: 'bg-white',
    },
    titleColor: {
      type: String,
      default: 'text-wri-teal',
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
