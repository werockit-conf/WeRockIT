<template>
  <div v-if="shouldDisplay" class="absolute left-0 right-0">
    <div class="relative bg-indigo-200 mt-32 mx-16 rounded-lg">
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shouldDisplay() {
      return this.$route.name != 'Covid19Update'
    },
  },
}
</script>
