<template>
  <div class="font-bebas text-wri-dark-blue">
    <CodeOfConductHeader></CodeOfConductHeader>
    <CodeOfConductContent></CodeOfConductContent>
  </div>
</template>

<script>
import CodeOfConductHeader from './CodeOfConduct/CodeOfConductHeader.vue'
import CodeOfConductContent from './CodeOfConduct/CodeOfConductContent.vue'
export default {
  name: 'codeofconduct',
  components: {
    CodeOfConductHeader,
    CodeOfConductContent,
  },
}
</script>

<style>
header p {
  @apply text-2xl;
  @apply font-bold;
  @apply leading-tight;
  @apply tracking-tight;
  @apply pt-5;
  @apply pb-5;
}

h2 {
  @apply text-5xl;
  @apply font-thin;
}

h3 {
  @apply text-3xl;
}

p {
  font-family: 'Montserrat', sans-serif;
  @apply text-xl;
  @apply mt-5;
  @apply mb-5;
}
</style>
