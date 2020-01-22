<template>
  <div class="box bg-wri-teal">
    <div class="font-bebas text-white text-xl">
      <div class="text-wri-dark-blue text-5xl">{{ name }}</div>
      <div class="text-wri-dark-blue text-5xl">${{ price }}</div>
      <div>Main Stage</div>
      <div>Keynotes</div>
      <div>All Track Sessions</div>
      <div>Workshops</div>
      <div class="pb-3">Access</div>
      <a :href="link" class="bg-wri-dark-blue rounded-lg p-3">{{ button }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'link', 'button'],
}
</script>

<style scoped>
.box {
  @apply flex-shrink-0;
  @apply w-4/5;
  @apply m-6;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply rounded-lg;
  @apply p-5;
}

@screen md {
  .box {
    @apply w-1/4;
  }
}
</style>
